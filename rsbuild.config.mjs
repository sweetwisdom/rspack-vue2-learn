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
  source: {
    // 指定入口文件
   
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".json", ".wasm", ".vue", ".jsx", ".tsx"],
  },
  // resolve: {
  //     alias: {
  //       "@": path.resolve(__dirname, 'src')
  //     },
  // }
});
