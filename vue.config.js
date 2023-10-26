const chunkPrefix = '[name].vedisi-app';

module.exports = {
  productionSourceMap: false,

  css: {
    extract: {
      filename: `${chunkPrefix}.css`,
      chunkFilename: `${chunkPrefix}.css`,
    },
  },

  configureWebpack: {
    output: {
      filename: `${chunkPrefix}.js`,
      chunkFilename: `${chunkPrefix}.js`,
    },
  },
};
