<template>
  <div class="table">
    <div
      v-for="type in itemsType"
      :key="type"
      :class="'table-' + type + '-items'"
    >
      <component
        :is="type + '-type'"
        v-for="item in $store.state.resultTitle[type + 'Type']"
        :key="item.code"
        :item="item"
        :signature="signature"
      ></component>
    </div>
  </div>
</template>

<script scoped>
import CheckType from './SignatureResultTableItemCheckType.vue';
import DataType from './SignatureResultTableItemDataType.vue';
import PersonType from './SignatureResultTableItemPersonType.vue';

export default {
  data() {
    return {
      itemsType: ['check', 'data', 'person'],
    };
  },
  props: {
    signature: Object,
  },
  components: { CheckType, DataType, PersonType },
};
</script>

<style>
#vedisiApp .table {
  width: calc((100% + 70px * 2) / 3 * 2);
  margin: 0 auto;
  background-color: #fff;
  padding: 40px;
  border-radius: 20px;
  margin-bottom: -40px;
}
#vedisiApp .content-body--success .table {
  box-shadow: 0px 5px 50px #c8df524d;
}
#vedisiApp .content-body--error .table {
  box-shadow: 0px 5px 50px #e23f454d;
}
#vedisiApp .table-check-items,
#vedisiApp .table-data-items,
#vedisiApp .table-person-items {
  margin-bottom: 50px;
  border-top: 1px solid #efefef;
}
#vedisiApp .table-person-items {
  margin-bottom: 30px;
}
@media (max-width: 575px) {
  #vedisiApp .table {
    margin: 0 -20px;
    width: calc(100% + 40px);
    padding: 40px 20px;
  }
  #vedisiApp .content-body--success .table,
  #vedisiApp .content-body--error .table {
    box-shadow: none;
  }
}
</style>
