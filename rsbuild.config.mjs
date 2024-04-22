import { defineConfig } from "@rsbuild/core";
import { pluginVue2 } from "@rsbuild/plugin-vue2";
const path = require("path");
export default defineConfig({
  plugins: [pluginVue2()],
  output: {
    distPath: {
      root: "build",
      js: "resource/js",
    },
    assetPrefix: "./",
    clean: true,
    filename: "js/[name].js",
    cssFilename: "css/[name].css",
    assetModuleFilename: "assets/[hash][ext]",
  },
});
