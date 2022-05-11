const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // npm run build시, path setting
  outputDir: "../../KyongHwan-Kim.github.io",
  pluginOptions: {
    vuetify: {},
  },
});
