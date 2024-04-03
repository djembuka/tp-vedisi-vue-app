<template>
  <div>
    <div class="content-body content-body--form">
      <upload-form-h-1></upload-form-h-1>
      <div class="terms-link">
        <a href="/terms/"> <i></i> Условия использования</a>
      </div>
      <upload-form-error
        v-if="$store.state.uploadForm.error"
      ></upload-form-error>
      <form action="" method="POST">
        <upload-form-control></upload-form-control>
      </form>
    </div>
    <p
      class="upload-form-text"
      v-if="false && $store.state.uploadStatus === 'form'"
    >
      Сервис поможет вам проверить действительность квалифицированной
      электронной подписи, чтобы убедиться в юридической силе электронного
      документа.
    </p>
  </div>
</template>

<script>
import UploadFormH1 from './UploadFormH1.vue';
import UploadFormControl from './UploadFormControl.vue';
import UploadFormError from './UploadFormError.vue';

export default {
  data() {
    return {
      isAdvancedUpload: false,
    };
  },
  methods: {},
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
  components: {
    UploadFormH1,
    UploadFormControl,
    UploadFormError,
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
  margin-bottom: 100px;
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
#vedisiApp .upload-form-text {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}

@media (max-width: 767px) {
  #vedisiApp .content-body {
    padding: 30px 20px 23px;
    border-radius: 20px;
    background-position: 0 0;
    background-size: 200%;
  }
  #vedisiApp .content-body--form h1 {
    font-size: 1.5rem;
    margin: 0 0 1rem;
    min-height: 108px;
  }
  #vedisiApp .content-body--form {
    margin-bottom: 200px;
    min-height: 210px;
    position: relative;
  }
  #vedisiApp .terms-link {
    margin: 1rem 0 0;
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
