const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "../../KyongHwan-Kim.github.io/docs",
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
  // devServer: {
  //   proxy: {
  //       '/test': {
  //           target: 'https://jsonplaceholder.typicode.com/',
  //           changeOrigin: true,
  //           pathRewrite: {
  //               '^/api': 'https://jsonplaceholder.typicode.com/'
  //           }
  //       }
  //   }
});
