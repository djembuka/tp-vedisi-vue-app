<template>
  <div
    class="upload-error"
    :class="{ 'upload-error--show': show }"
    @click.prevent="click"
  >
    <div class="container">
      <div class="upload-error__content" @click.stop>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path
            d="M10.728,0a8.006,8.006,0,0,0-8,8v3.853a6.371,6.371,0,0,1-.76,2.747L.435,17.147a2.559,2.559,0,0,0,1.44,3.907,27.9,27.9,0,0,0,17.693,0,2.67,2.67,0,0,0,1.44-3.907L19.475,14.6a6.547,6.547,0,0,1-.747-2.747V8A8.024,8.024,0,0,0,10.728,0Z"
            transform="translate(5.299 3.88)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-width="2"
          />
          <path
            d="M4.933,1.68a8.072,8.072,0,0,0-1.28-.267A9.005,9.005,0,0,0,0,1.68a2.651,2.651,0,0,1,4.933,0Z"
            transform="translate(13.56 2.587)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            d="M8,0A4.012,4.012,0,0,1,4,4,4.014,4.014,0,0,1,1.173,2.827,4.014,4.014,0,0,1,0,0"
            transform="translate(12.027 25.413)"
            fill="none"
            stroke="#fff"
            stroke-width="2"
          />
          <path d="M0,0H32V32H0Z" fill="none" opacity="0" />
        </svg>
        <div>
          <div
            v-html="$store.state.uploadForm.error"
            class="upload-error__text"
          ></div>
          <a
            href="#"
            @click.prevent="click"
            class="button button--danger button--middle"
            >Понятно</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    click() {
      this.show = false;
      this.$store.commit("changeUploadError", "");
    }
  },
  mounted() {
    this.show = true;
  }
};
</script>

<style>
.upload-error {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  opacity: 0;
  -webkit-transition: opacity 0.6s cubic-bezier(0.25, 0.74, 0.22, 0.99);
  transition: opacity 0.6s cubic-bezier(0.25, 0.74, 0.22, 0.99);
  z-index: 10000;
}
.upload-error.upload-error--show {
  opacity: 1;
}
.upload-error .container {
  align-items: center;
  flex-direction: initial;
}
.upload-error__content {
  color: #fff;
  font-size: 14px;
  font-family: "Nunito", sans-serif;
  line-height: 21px;
  border-radius: 20px;
  padding: 32px 32px 34px;
  background-color: #e43d40;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  -webkit-transform: scale(1.4);
  transform: scale(1.4);
  -webkit-transition: -webkit-transform 0.6s
    cubic-bezier(0.25, 0.74, 0.22, 0.99);
  transition: transform 0.6s cubic-bezier(0.25, 0.74, 0.22, 0.99);
}
.upload-error.upload-error--show .upload-error__content {
  -webkit-transform: scale(1);
  transform: scale(1);
}
.upload-error__content svg {
  width: 32px;
  flex-shrink: 0;
  margin: 3px 32px 0 0;
}
.upload-error__text {
  margin-bottom: 28px;
}
.upload-error .button {
  min-width: 185px;
  text-align: center;
}
</style>
