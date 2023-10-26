<template>
  <div class="signature-result-info">
    <div class="signature-result-info__left" v-if="$store.state.result.PDF">
      <span
        class="signature-result-info__filename"
        v-if="$store.state.result.PDF.filename"
        ><i></i
        ><span
          >{{ $store.state.result.PDF.filename }}<br /><span
            class="signature-result-info__filename__md5"
            >Контрольная сумма MD5: {{ $store.state.result.PDF.MD5 }}</span
          ></span
        ></span
      >
      <span
        class="signature-result-info__md5"
        v-if="$store.state.result.PDF.MD5"
        >Контрольная сумма MD5: {{ $store.state.result.PDF.MD5 }}</span
      >
    </div>
    <div class="signature-result-info__right">
      <button
        class="button button-success button--small"
        @click.prevent="newUpload()"
      >
        Проверить еще
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    newUpload() {
      this.$store.commit('changeResult', {});
      this.$store.commit('changeUploadStatus', 'form');
      this.$router.go(-1);
    },
  },
};
</script>

<style>
#vedisiApp .signature-result-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  margin: 20px 40px 35px;
  height: 40px;
}
#vedisiApp .signature-result-info__filename {
  display: flex;
  align-items: center;
  margin-right: 44px;
  flex-shrink: 0;
}
#vedisiApp .signature-result-info__filename i {
  width: 32px;
  height: 32px;
  background: url('../../assets/icon-filename.svg') no-repeat center;
  background-size: contain;
  margin-right: 10px;
}
#vedisiApp .signature-result-info__filename__md5 {
  display: none;
  word-wrap: break-word;
}
#vedisiApp .signature-result-info__md5 {
  word-wrap: break-word;
}
#vedisiApp .signature-result-info__left {
  display: flex;
  align-items: center;
}

#vedisiApp .signature-result-info .button {
  min-width: 136px;
}
#vedisiApp .signature-result-info__again {
  display: none;
}
@media (max-width: 767px) {
  #vedisiApp .signature-result-info__right .button {
    display: none;
  }
}
@media (max-width: 575px) {
  #vedisiApp .signature-result-info {
    font-size: 0.55rem;
    margin-left: 0;
    margin-right: 0;
  }
  #vedisiApp .signature-result-info__md5 {
    display: none;
  }
  #vedisiApp .signature-result-info__filename {
    width: 100%;
  }
  #vedisiApp .signature-result-info__filename__md5 {
    display: inline;
  }
}
</style>
