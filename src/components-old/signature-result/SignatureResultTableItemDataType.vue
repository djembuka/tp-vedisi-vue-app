<template>
  <div
    class="table-item"
    :class="item.muted ? 'table-item--muted' : ''"
    v-if="signature[item.code] !== null"
  >
    <span>{{ item.text }}:</span>
    <span class="text-icon">
      <span>{{ value }}</span>
      <the-notice v-if="item.notice" :text="item.notice"></the-notice>
    </span>
  </div>
</template>

<script>
import TheNotice from '../TheNotice.vue';

export default {
  data() {
    return {};
  },
  props: {
    item: Object,
    signature: Object,
  },
  computed: {
    value() {
      let code = this.item.code; //fromPDF
      let result = this.signature[code]; //true
      let v = this.item.value; //{}

      if (v && v[result]) {
        return v[result];
      } else {
        return result;
      }
    },
  },
  components: { TheNotice },
};
</script>

<style>
#vedisiApp .table-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  padding: 15px 20px;
  font-size: 0.9rem;
}
#vedisiApp .table-item > span:nth-of-type(2) {
  color: #495668;
  text-align: right;
  word-break: break-word;
  margin-left: 15px;
}
#vedisiApp .table-item.table-item--muted span:nth-of-type(2) {
  color: #838c98;
}
#vedisiApp .table-item .notice {
  margin-left: 15px;
}
#vedisiApp .text-icon {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
@media (max-width: 575px) {
  #vedisiApp .table-item {
    display: block;
  }
  #vedisiApp .table-item span {
    display: block;
    text-align: center;
  }
  #vedisiApp .table-item > span:first-child {
    margin-bottom: 10px;
  }
  #vedisiApp .table-item > span:nth-of-type(2) {
    font-size: 0.8rem;
    text-align: center;
    margin-left: 0;
  }
  #vedisiApp .table-item .notice {
    margin: 10px 0 0;
  }
}
</style>
