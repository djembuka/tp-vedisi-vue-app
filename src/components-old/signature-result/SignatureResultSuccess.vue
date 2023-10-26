<template>
  <div class="signature-result-item">
    <div class="content-body content-body--success">
      <div class="heading-h1">Подпись {{ signatureNumber }} подтверждена</div>
      <result-table :signature="signature"></result-table>
    </div>
    <signature-result-file
      :signature="signature"
      v-if="false"
    ></signature-result-file>
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

#vedisiApp .content-body--success {
  background-image: url('../../assets/green-bg.svg');
  background-color: #c8df52;
  margin-bottom: 120px;
}

@media (max-width: 575px) {
  #vedisiApp .content-body--success {
    padding-bottom: 0;
    margin-bottom: 0;
  }
  #vedisiApp .signature-result-item {
    margin-bottom: 50px;
  }
  #vedisiApp .signature-result-item:last-child {
    margin-bottom: 0;
  }
}
</style>
