<template>
  <div class="upload-form-comfirmation">
    <div class="upload-form-comfirmation__text">
      Сервис обрабатывает, но не хранит и не передаёт персональные данные.<br />Вы
      даёте своё согласие?
    </div>
    <label class="button-checkbox button button--success button--middle">
      <input type="checkbox" @change="confirm()" />
      <span>{{ token === 'test402' ? 'Test 402 error' : 'Подтверждаю' }}</span>
    </label>
    <button
      class="button button--danger button--middle"
      @click.prevent="refuse"
    >
      Отменить
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    token() {
      if (window.location.search.indexOf('test402') >= 0) {
        return 'test402';
      } else {
        return 'token12345';
      }
    },
  },
  methods: {
    confirm() {
      if (window.ym) {
        window.ym(this.$store.state.counters.ym, 'reachGoal', 'CLICK_CONFIRM');
      }
      this.$store.commit('changeUploadStatus', 'uploading');
      this.sendFile();
    },
    refuse() {
      //yandex metrika
      if (window.ym) {
        window.ym(this.$store.state.counters.ym, 'reachGoal', 'CLICK_REFUSE');
      }
      //back to the main page
      this.$store.commit('changeUploadStatus', 'form');
      //clear the file input
      this.$store.state.uploadForm.tabs.forEach((tab, tabIndex) => {
        tab.buttons.forEach((button, buttonIndex) => {
          this.$store.commit('setUploadFormFile', {
            tabIndex: tabIndex,
            buttonIndex: buttonIndex,
            value: null,
          });
        });
      });
      //hide sig
      this.$store.commit('showButton', 'file');
    },
    async sendFile() {
      //create controller
      this.$store.commit('setUploadFormProp', {
        prop: 'controller',
        value: new AbortController(),
      });

      //get files
      const files = [];
      this.$store.state.uploadForm.tabs
        .find((tab) => tab.active)
        .buttons.forEach((b) => {
          files.push(b.file);
        });

      //check if there are files
      if (files.length == 0) {
        throw new Error('No file selected');
      }

      //upload file and get uuid
      //create form data
      let formData = new FormData();
      if (files[0]) {
        formData.append('pdfFile', files[0]);
      }
      if (files[1]) {
        formData.append('sigFile', files[1]);
      }

      //response
      let response, result;

      try {
        response = await fetch('https://sig.2px.ru/upload', {
          signal: this.$store.state.uploadForm.controller.signal,
          method: 'POST',
          headers: {
            Authorization: this.token,
          },
          body: formData,
        });
        result = await response.json();

        //reset files
        this.$store.state.uploadForm.tabs.forEach((tab, tabIndex) => {
          tab.buttons.forEach((button, buttonIndex) => {
            if (button.file) {
              this.$store.commit('setUploadFormFile', {
                tabIndex: tabIndex,
                buttonIndex: buttonIndex,
                value: null,
              });
            }
          });
        });
      } catch (err) {
        if (!this.$store.state.uploadForm.controllerAborted) {
          this.$store.commit('changeUploadError', 'Произошла ошибка.');
        }
        this.$store.commit("changeUploadStatus", "form");
        this.$store.commit("setUploadFormProp", {
          prop: "controllerAborted",
          value: false
        });

        return;
      }

      //get response
      let uuid;

      if (result.status != 200) {
        if (result.status === 402) {
          this.$store.commit(
            'changeUploadError',
            `Достигнут суточный лимит количества проверок документов с вашего IP. Завтра вы сможете продолжить пользоваться сервисом. Если вы хотите пользоваться сервисом без ограничений, компания ООО "Твин пикс" может предложить вам на коммерческой основе создание индивидуального сервиса проверки ЭП для вашей организации или помочь интегрировать сервис проверки подписи в вашу информационную систему. Контактный e-mail: support@twinpx.ru.`
          );
        } else if (!this.$store.state.uploadForm.controllerAborted) {
          this.$store.commit('changeUploadError', 'Произошла ошибка.');
        }

        this.$store.commit("changeUploadStatus", "form");
        this.$store.commit('setUploadFormProp', {
          prop: 'controllerAborted',
          value: false,
        });
        return;
      } else {
        uuid = result.uuid;
      }

      let m = 0;

      do {
        try {
          response = await fetch('https://sig.2px.ru/status?uuid=' + uuid, {
            signal: this.$store.state.uploadForm.controller.signal,
            headers: {
              Authorization: this.token,
            },
            method: 'GET',
          });
        } catch (err) {
          if (result.status === 402) {
            this.$store.commit(
              'changeUploadError',
              `Достигнут суточный лимит количества проверок документов с вашего IP. Завтра вы сможете продолжить пользоваться сервисом. Если вы хотите пользоваться сервисом без ограничений, компания ООО "Твин пикс" может предложить вам на коммерческой основе создание индивидуального сервиса проверки ЭП для вашей организации или помочь интегрировать сервис проверки подписи в вашу информационную систему. Контактный e-mail: support@twinpx.ru.`
            );
          } else if (!this.$store.state.uploadForm.controllerAborted) {
            this.$store.commit('changeUploadError', 'Произошла ошибка.');
          }

          this.$store.commit("changeUploadStatus", "form");
          this.$store.commit('setUploadFormProp', {
            prop: 'controllerAborted',
            value: false,
          });
          return;
        }

        if (response.status == 204) {
          await new Promise((r) => setTimeout(r, 1000));
        } else if (response.status != 200) {
          if (!this.$store.state.uploadForm.controllerAborted) {
            this.$store.commit('changeUploadError', 'Произошла ошибка.');
          }

          this.$store.commit("changeUploadStatus", "form");
          this.$store.commit("setUploadFormProp", {
            prop: "controllerAborted",
            value: false
          });
          return;
        } else {
          //Обработка через try
          let json = await response.json();
          this.$store.commit('changeResult', json);
          if (
            this.$store.state.result.signatures &&
            this.$store.state.result.signatures.length
          ) {
            this.$store.commit('changeUploadStatus', 'success');
          } else {
            this.$store.commit('changeUploadStatus', 'error');
          }

          /*if (
            this.$store.state.result.signatures &&
            this.$store.state.result.signatures.length
          ) {
            //set browser history
            if (this.$router.history.current.hash === '#verify') {
              this.$store.commit('changeUploadStatus', 'success');
            } else {
              this.$router.push(
                '/#verify',
                () => {
                  this.$store.commit('changeUploadStatus', 'success');
                },
                () => {
                  throw new Error();
                }
              );
            }
          } else {
            this.$store.commit('changeUploadStatus', 'error');
            //set browser history
            window.history.pushState({ state: 'error' }, '', '#verify');
          }*/

          break;
        }
      } while (m === 0);

      return;
    },
  },
};
</script>

<style>
#vedisiApp .upload-form-comfirmation__text {
  margin-top: 20px;
  margin-bottom: 50px;
}
#vedisiApp .upload-form-comfirmation .button {
  width: 186px;
  margin: 0 7px;
}
#vedisiApp label.button-checkbox {
  position: relative;
  padding-left: 40px;
}
#vedisiApp .button-checkbox input {
  display: none;
}
#vedisiApp label.button-checkbox span {
  font-size: 1rem;
}
#vedisiApp label.button-checkbox span::before {
  content: '';
  display: block;
  border: 2px solid #fff;
  border-radius: 12px;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 13px;
  left: 14px;
}
#vedisiApp label.button-checkbox span::after {
  content: '';
  display: none;
  width: 10px;
  height: 8px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  position: absolute;
  top: 19px;
  left: 21px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
#vedisiApp .button-checkbox input:checked ~ span::after,
#vedisiApp .button-checkbox:hover input ~ span::after {
  display: block;
}
@media (max-width: 767px) {
  #vedisiApp .upload-form-comfirmation {
    padding-top: 20px;
  }
  #vedisiApp .upload-form-comfirmation__text {
    font-size: 0.8rem;
    margin-top: 0;
    margin-bottom: 2rem;
  }
  #vedisiApp .upload-form-comfirmation .button {
    width: 150px;
    padding: 0 10px;
    margin: 0 5px;
  }
  #vedisiApp label.button-checkbox span::before {
    display: none !important;
  }

  #vedisiApp .button-checkbox input:checked ~ span::after,
  #vedisiApp .button-checkbox:hover input ~ span::after {
    display: none;
  }
  #vedisiApp label.button-checkbox {
    padding-left: 10px;
  }
}
</style>
