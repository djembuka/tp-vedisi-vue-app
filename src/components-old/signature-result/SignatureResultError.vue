<template>
  <div class="signature-result-item">
    <div class="content-body content-body--error">
      <div class="heading-h1">
        Подпись {{ signatureNumber }} не подтверждена
      </div>
      <result-table :signature="signature"></result-table>
      <signature-result-file
        :signature="signature"
        v-if="false"
      ></signature-result-file>
    </div>
  </div>
</template>

<script>
import ResultTable from './SignatureResultTable.vue';
import SignatureResultFile from './SignatureResultFile.vue';

export default {
  props: {
    index: Number,
    signature: Object,
  },
  components: { ResultTable, SignatureResultFile },
  computed: {
    signatureNumber() {
      if (this.$store.state.result.signatures.length <= 1) return '';
      return this.index + 1;
    },
  },
};
</script>

<style>
#vedisiApp .signature-result-item {
  margin-bottom: 140px;
}
#vedisiApp .content-body--error {
  background-image: url('../../assets/red-bg.svg');
  background-color: #e37f8c;
  margin-bottom: 120px;
}

@media (max-width: 575px) {
  #vedisiApp .content-body--error {
    padding-bottom: 0;
    margin-bottom: 0;
  }
  #vedisiApp .signature-result-item {
    margin-bottom: 50px;
  }
}
</style>
