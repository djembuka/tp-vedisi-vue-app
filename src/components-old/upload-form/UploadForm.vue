<template>
  <div>
    <div class="content-body content-body--form">
      <div
        class="heading-h1"
        v-text="
          $store.state.uploadStatus === 'form'
            ? 'Проверка квалифицированной электронной подписи PDF-документа'
            : $store.state.uploadStatus === 'confirmation'
            ? 'Согласитесь с условиями сервиса'
            : $store.state.uploadStatus === 'uploading'
            ? 'Идет проверка документа, подождите, пожалуйста'
            : ''
        "
      ></div>
      <div class="terms-link">
        <a href="/terms/"> <i></i> Условия использования</a>
      </div>
      <form action="" method="POST">
        <div class="upload-form-control">
          <input
            type="file"
            name="pdfFile"
            id="pdfFile"
            @change="uploadFile"
            ref="pdfFile"
            accept=".pdf"
          />
          <div
            class="upload-form-button"
            v-if="$store.state.uploadStatus === 'form'"
          >
            <div class="upload-form-control__error" v-text="error"></div>

            <div class="input-file">
              <label
                for="pdfFile"
                class="button button--large"
                @click="clickUpload()"
                >Выберите PDF-файл</label
              >
            </div>

            <div
              v-if="false"
              class="upload-form__dragndrop"
              ref="dragndrop"
              @dragenter="dragenter()"
              @drop="drop($event)"
            >
              <span>или перетащите его в область</span>
            </div>
          </div>

          <div
            class="upload-form-comfirmation"
            v-if="$store.state.uploadStatus === 'confirmation'"
          >
            <div class="upload-form-comfirmation__text">
              Сервис обрабатывает, но не хранит и не передаёт персональные
              данные.<br />Вы даёте своё согласие?
            </div>
            <label
              class="button-checkbox button button--success button--middle"
            >
              <input type="checkbox" @change="confirm()" />
              <span>Подтверждаю</span>
            </label>
            <button
              class="button button--danger button--middle"
              @click.prevent="refuse()"
            >
              Отменить
            </button>
          </div>

          <div
            class="upload-form-uploading"
            v-if="$store.state.uploadStatus === 'uploading'"
          >
            <div class="upload-form-uploading__preloader"></div>
            <button
              class="button button--gray button--small"
              @click.prevent="refuseUploading()"
            >
              Отменить
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: '',
      controller: null,
      controllerAborted: false,
      isAdvancedUpload: false,
    };
  },
  methods: {
    drop(event) {
      console.log(event);
    },
    dragenter() {
      console.log('sdf');
    },
    clickUpload() {
      if (window.ym) {
        window.ym(this.$store.state.counters.ym, 'reachGoal', 'CLICK_UPLOAD');
      }
    },
    uploadFile() {
      //if size is acceptable
      if (this.$refs.pdfFile.files[0].size >= 1e7) {
        this.error =
          'Сервис не поддерживает проверку файлов, размер которых превышает 10 Мбайт.';
        return;
      } else {
        this.error = '';
      }

      //if the file extention is not pdf
      /*const filename = this.$refs.pdfFile.files[0].name;
      const lastIndex = filename.lastIndexOf(".");

      if (filename.substring(lastIndex + 1) !== "pdf") {
        this.error = "Сервис поддерживает только проверку файлов PDF.";
        return;
      } else {
        this.error = "";
      }*/

      this.$store.commit('changeUploadStatus', 'confirmation');
    },
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
      this.$refs.pdfFile.value = '';
    },
    refuseUploading() {
      this.controller.abort();
      this.controllerAborted = true;
      this.$store.commit('changeUploadStatus', 'form');
    },
    async sendFile() {
      //create controller
      this.controller = new AbortController();

      //check if there are files
      if (this.$refs.pdfFile.files.length == 0) {
        throw new Error('No file selected');
      }

      //upload file and get uuid
      //create form data
      let formData = new FormData();
      if (this.$refs.pdfFile.files.length != 0) {
        formData.append('pdfFile', this.$refs.pdfFile.files[0]);
      }

      //response
      let response, result;

      try {
        response = await fetch('https://sig.2px.ru/upload', {
          signal: this.controller.signal,
          method: 'POST',
          headers: {
            Authorization: 'token12345',
          },
          body: formData,
        });
        result = await response.json();
      } catch (err) {
        if (!this.controllerAborted) {
          this.error = 'Произошла ошибка, попробуйте снова.';
        }
        this.controllerAborted = false;
        return;
      }

      //get response
      let uuid;

      if (result.status != 200) {
        if (!this.controllerAborted) {
          this.error = 'Произошла ошибка, попробуйте снова.';
        }
        this.controllerAborted = false;
        return;
      } else {
        uuid = result.uuid;
      }

      let m = 0;

      do {
        try {
          response = await fetch('https://sig.2px.ru/status?uuid=' + uuid, {
            signal: this.controller.signal,
            headers: {
              Authorization: 'token12345',
            },
            method: 'GET',
          });
        } catch (err) {
          if (!this.controllerAborted) {
            this.error = 'Произошла ошибка, попробуйте снова.';
          }
          this.controllerAborted = false;
          return;
        }

        if (response.status == 204) {
          await new Promise((r) => setTimeout(r, 1000));
        } else if (response.status != 200) {
          if (!this.controllerAborted) {
            this.error = 'Произошла ошибка, попробуйте снова.';
          }
          this.controllerAborted = false;
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

          break;
        }
      } while (m === 0);

      return;
    },
  },
  mounted() {
    //drag and drop
    this.isAdvancedUpload = (() => {
      let div = document.createElement('div');
      return (
        ('draggable' in div || ('ondragstart' in div && 'ondrop' in div)) &&
        'FormData' in window &&
        'FileReader' in window
      );
    })();

    /*if (this.isAdvancedUpload) {
    }*/
  },
};
</script>

<style>
#vedisiApp .content-body {
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70px;
  padding-bottom: 1px;
  border-radius: 40px;
  color: #000;
}
#vedisiApp .content-body--form {
  background-image: url('../../assets/yellow-bg.svg');
  background-color: #fede00;
}
#vedisiApp .content-body--form .heading-h1 {
  margin-bottom: 10px;
}
#vedisiApp .terms-link {
  font-size: 0.8rem;
  color: #000;
  margin: 1.5rem 0 2rem;
  display: flex;
  justify-content: center;
}
#vedisiApp .terms-link a {
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 33px;
  border-radius: 16px;
  padding: 0 10px;
  transition: background-color 0.3s ease-out;
}
#vedisiApp .terms-link a:hover,
#vedisiApp .terms-link a:active {
  color: #000;
  opacity: 1;
  background-color: #fff;
}
#vedisiApp .terms-link i {
  width: 18px;
  height: 18px;
  background: url('../../assets/icon-conditions.svg') no-repeat center;
  background-size: cover;
  margin-right: 5px;
}
#vedisiApp .upload-form-control {
  background-color: #fff;
  border-radius: 40px;
  width: 50%;
  min-width: 528px;
  margin: 0 auto -40px;
  padding: 40px 55px 42px;
  text-align: center;
  box-shadow: 0px 5px 50px #fede004d;
  min-height: 300px;
}
#vedisiApp .upload-form-control__error {
  margin-bottom: 50px;
  font-size: 0.9rem;
  color: #e43d40;
  min-height: 16px;
}
#vedisiApp .upload-form-control span {
  font-size: 0.9rem;
}
#vedisiApp .upload-form-text {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
/*upload form*/
#vedisiApp .upload-form-control input[type='file'] {
  display: none;
}
#vedisiApp .input-file label.button {
  display: block;
  width: 300px;
  margin: 0 auto 50px;
}
#vedisiApp .upload-form__dragndrop {
  margin: 0 auto 25px;
  background: url('../../assets/icon-dragndrop.svg') no-repeat center top;
  background-size: 64px;
  padding-top: 85px;
}
/*Confirmation*/
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
/*Uploading*/
#vedisiApp .upload-form-uploading {
  -webkit-transform: translateY(70px);
  transform: translateY(70px);
}
#vedisiApp .upload-form-uploading__preloader {
  width: 75px;
  height: 75px;
  background-image: url('../../assets/preloader.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin: 0 auto 40px;
  animation: rotate 1s linear infinite;
}
#vedisiApp .upload-form-uploading .button {
  min-width: 120px;
}

@media (max-width: 767px) {
  #vedisiApp .content-body {
    padding: 30px 20px 23px;
    border-radius: 20px;
    background-position: 0 0;
    background-size: 200%;
  }
  #vedisiApp .content-body--form .heading-h1 {
    font-size: 1.5rem;
    margin: 0 0 1rem;
    min-height: 108px;
  }
  #vedisiApp .content-body--form {
    margin-bottom: 170px;
    min-height: 210px;
    position: relative;
  }
  #vedisiApp .terms-link {
    margin: 1rem 0 0;
  }
  #vedisiApp .upload-form-control__error {
    margin-bottom: 1rem;
    height: 32px;
  }
  #vedisiApp .upload-form-control {
    background-color: transparent;
    border-radius: 0;
    width: auto;
    height: 200px;
    margin: 0;
    padding: 0;
    text-align: center;
    box-shadow: none;
    position: absolute;
    bottom: -215px;
    left: 0;
    width: 100%;
    min-width: 100%;
    min-height: 0;
  }
  #vedisiApp .upload-form__dragndrop {
    display: none;
  }
  #vedisiApp .input-file label.button {
    margin-bottom: 0;
  }
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
  #vedisiApp .upload-form-uploading {
    transform: none;
  }
  #vedisiApp .upload-form-uploading__preloader {
    margin: 1rem auto 2rem;
    width: 55px;
    height: 55px;
  }
  #vedisiApp a.copyright {
    margin-top: 50px;
  }
}
@media (max-width: 575px) {
  #vedisiApp .upload-form-text {
    width: 90%;
  }
}
@keyframes rotate {
  from {
    transform: rotate(-360deg);
  }
}
</style>
