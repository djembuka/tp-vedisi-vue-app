<template>
  <div class="upload-form-tabs">
    <div class="upload-form-tabs__menu" ref="menu" v-show="isVisible">
      <div class="upload-form-tabs__underline" ref="underline"></div>
      <div
        class="upload-form-tabs__menu__item"
        :class="{ active: tab.active }"
        v-for="tab in $store.state.uploadForm.tabs"
        :key="tab.value"
        :data-tab="tab.value"
        @click.prevent="click($event)"
      >
        {{ tab.name }}
      </div>
    </div>
    <div class="upload-form-tabs__items">
      <div
        class="upload-form-tabs__item"
        v-for="(tab, tabIndex) in $store.state.uploadForm.tabs"
        :key="tab.value"
        :data-tab="tab.value"
        v-show="tab.active"
      >
        <component
          :is="
            `UploadForm${tab.value.charAt(0).toUpperCase()}${tab.value.slice(
              1
            )}`
          "
          :tab="tab"
          :tabindex="tabIndex"
          @uploaded="upl"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import UploadFormPdf from './UploadFormPdf.vue';
import UploadFormSig from './UploadFormSig.vue';

export default {
  computed: {
    isVisible() {
      return !this.$store.state.uploadForm.tabs.some((tab) => {
        return tab.buttons.some((b) => b.file);
      });
    },
  },
  emits: ['uploaded'],
  methods: {
    upl(file) {
      this.$emit('uploaded', file);
    },
    click(event) {
      this.setActiveItem(event.target);
    },
    moveUnderline(elem) {
      this.$refs.underline.style.width = elem.offsetWidth + 'px';
      this.$refs.underline.style.left =
        elem.getBoundingClientRect().left -
        this.$refs.menu.getBoundingClientRect().left +
        'px';
    },
    setActiveItem(elem) {
      this.$store.commit(
        'setUploadFormTabActive',
        elem.getAttribute('data-tab')
      );
      //move underline
      this.moveUnderline(elem);
    },
  },
  components: {
    UploadFormPdf,
    UploadFormSig,
  },
  mounted() {
    const activeItem = this.$refs.menu.querySelector(
      '.upload-form-tabs__menu__item.active'
    );
    this.moveUnderline(activeItem);
  },
};
</script>

<style>
#vedisiApp .upload-form-tabs__menu {
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 40px;
}
#vedisiApp .upload-form-tabs__underline {
  position: absolute;
  top: 25px;
  left: 50%;
  border-top: 2px solid #495668;
  width: 0;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  z-index: 10;
}
#vedisiApp .upload-form-tabs__menu__item {
  cursor: pointer;
  font-size: 1.25rem;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  color: #495668;
  transition: opacity 0.3s ease;
  -webkit-transition: opacity 0.3s ease;
  margin-right: 30px;
  -webkit-user-select: none;
  user-select: none;
}
#vedisiApp .upload-form-tabs__menu__item.active {
  cursor: default;
  pointer-events: none;
}
#vedisiApp .upload-form-tabs__menu__item:last-child {
  margin-right: 0;
}
#vedisiApp .upload-form-tabs__menu__item:hover {
  opacity: 0.7;
}
@media (max-width: 767px) {
  #vedisiApp .upload-form-tabs__menu {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
