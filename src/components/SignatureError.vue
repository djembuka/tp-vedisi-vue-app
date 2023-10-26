<template>
  <div>
    <signature-result-info></signature-result-info>

    <div class="content-body content-body--error">
      <div class="heading-h1">Подпись не обнаружена</div>
    </div>
  </div>
</template>

<script>
import SignatureResultInfo from './signature-result/SignatureResultInfo.vue';
export default {
  components: { SignatureResultInfo },
};
</script>

<style>
#vedisiApp .heading-h1 {
  margin-bottom: 30px;
}
#vedisiApp .signature-result-item {
  margin-bottom: 140px;
}
#vedisiApp .content-body--error {
  background-image: url('../assets/red-bg.svg');
  background-color: #e37f8c;
  padding-bottom: 38px;
}

@media (max-width: 575px) {
  #vedisiApp .content-body--error {
    padding-bottom: 2px;
  }
}
</style>
