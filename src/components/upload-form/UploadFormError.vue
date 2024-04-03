<template>
  <div class="upload-error">
    <div>
      {{ $store.state.uploadForm.error }}&nbsp;
      <a href="#" @click.prevent="click">Попробуйте снова</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$store.commit('changeUploadError', '');
      this.$store.commit('changeUploadStatus', 'form');
      this.$store.commit('setUploadFormProp', {
        prop: 'controllerAborted',
        value: false,
      });
    },
  },
};
</script>

<style>
.upload-error {
  font-size: 0.8rem;
  color: #000;
  margin: 1.5rem 0 2rem;
  display: flex;
  justify-content: center;
}
.upload-error div {
  color: #990000;
  border-radius: 16px;
  padding: 20px;
  background-color: #ff9999;
}
</style>
