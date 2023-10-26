<template>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"
  />
  <div class="index-page-content">
    <signature-result
      v-if="
        $store.state.uploadStatus === 'success' &&
          $store.state.result.signatures
      "
    ></signature-result>

    <signature-error
      v-else-if="$store.state.uploadStatus === 'error'"
    ></signature-error>

    <upload-form v-else></upload-form>
  </div>
</template>

<script>
import UploadForm from './components/upload-form/UploadForm.vue';
import SignatureResult from './components/signature-result/SignatureResult.vue';
import SignatureError from './components/SignatureError.vue';

export default {
  components: {
    UploadForm,
    SignatureError,
    SignatureResult,
  },
};
</script>

<style>
#vedisiApp .index-page-content {
  flex: 1 0 auto;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: normal;
  color: #000;
  box-sizing: border-box;
}
#vedisiApp *,
#vedisiApp *::before,
#vedisiApp *::after {
  box-sizing: border-box;
  margin: 0;
}
#vedisiApp .page-content {
  width: calc(100% / 6 * 4);
  padding-top: 70px;
  margin: 0 auto;
  line-height: 1.5rem;
  flex: 1 0 auto;
}
#vedisiApp a {
  text-decoration: none;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
  color: #000;
}
#vedisiApp a:hover {
  opacity: 0.7;
  color: #000;
}
#vedisiApp .heading-h1,
#vedisiApp h1 {
  font-size: 3rem;
  margin: 0 0 3rem;
  text-align: center;
  font-weight: bold;
  line-height: 1.15;
}
#vedisiApp .page-content .heading-h1,
#vedisiApp .page-content h1 {
  margin-bottom: 3.5rem;
}
#vedisiApp h2 {
  font-size: 1.5rem;
  margin: 2.5rem 0 1rem;
}
#vedisiApp p {
  margin: 0 0 1rem;
}
#vedisiApp li {
  margin-bottom: 0.8rem;
}
#vedisiApp a.copyright {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  margin: 100px auto 50px;
  flex: 0 0 auto;
}
#vedisiApp .copyright img {
  width: 100px;
  margin-right: 23px;
}
#vedisiApp .copyright span {
  font-size: 0.7rem;
  line-height: 0.9rem;
  color: #495668;
}
#vedisiApp .button {
  display: inline-block;
  padding: 0 15px;
  font-weight: 600;
  -webkit-transition: background-color 0.3s ease, color 0.3s ease;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
  border: none;
}
#vedisiApp .button,
#vedisiApp .button--success {
  background-color: #c8df52;
}
#vedisiApp .button:hover,
#vedisiApp .button--success:hover {
  background-color: #ccf20c;
}
#vedisiApp .button--danger {
  background-color: #f37970;
  color: #fff;
}
#vedisiApp .button--danger:hover {
  background-color: #f85c70;
}
#vedisiApp .button--gray {
  background-color: #d8e5d5;
}
#vedisiApp .button--gray:hover {
  background-color: #ff0000;
  color: #fff;
}
#vedisiApp .button--small {
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  font-size: 0.7rem;
}
#vedisiApp .button--middle {
  height: 50px;
  line-height: 50px;
  border-radius: 25px;
  font-size: 1rem;
}
#vedisiApp .button--large {
  height: 80px;
  line-height: 80px;
  border-radius: 40px;
  font-size: 1.4rem;
}
@media (max-width: 767px) {
  #vedisiApp h1 {
    font-size: 1.5rem;
    margin: 0 0 40px;
  }
}
@media (max-width: 575px) {
  #vedisiApp .page-content {
    padding-top: 20px;
    width: 90%;
  }
  #vedisiApp .page-content h1 {
    margin-bottom: 2rem;
  }
}
</style>
