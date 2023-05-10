var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});

// vite.config.ts
import react from "file:///home/bruno-linux/TRENTIM/trentim-react-sdk/lib/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import { defineConfig } from "file:///home/bruno-linux/TRENTIM/trentim-react-sdk/lib/node_modules/vite/dist/node/index.js";
import dts from "file:///home/bruno-linux/TRENTIM/trentim-react-sdk/lib/node_modules/vite-plugin-dts/dist/index.mjs";
import { visualizer } from "file:///home/bruno-linux/TRENTIM/trentim-react-sdk/lib/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { existsSync, readdirSync, lstatSync, rmdirSync, unlinkSync, writeFileSync, copyFileSync, readFileSync } from "fs";
import libCss from "file:///home/bruno-linux/TRENTIM/trentim-react-sdk/lib/node_modules/vite-plugin-libcss/index.js";
var __vite_injected_original_dirname = "/home/bruno-linux/TRENTIM/trentim-react-sdk/lib";
var generateComponentsEntries = () => {
  const components = readdirSync(resolve(__vite_injected_original_dirname, "src/components"));
  const entries = {};
  for (const component of components) {
    const name = component.split(".")[0];
    entries[name] = resolve(__vite_injected_original_dirname, `src/components/${component}`);
  }
  return entries;
};
function emptyDir(dir) {
  if (!existsSync(dir)) {
    return;
  }
  for (const file of readdirSync(dir)) {
    const abs = resolve(dir, file);
    if (lstatSync(abs).isDirectory()) {
      emptyDir(abs);
      rmdirSync(abs);
    } else {
      unlinkSync(abs);
    }
  }
}
emptyDir(resolve(__vite_injected_original_dirname, "dist"));
var beforeWriteFile = (path, content) => {
  const splittedPath = path.split("/").map((p) => p);
  const lastItem = splittedPath[splittedPath.length - 1];
  const beforeLastItem = splittedPath[splittedPath.length - 2];
  const component = splittedPath[splittedPath.length - 3];
  if (lastItem === "index.d.ts") {
    const createContent = (path2) => `export * from './dist/${path2}/index'`;
    console.log(splittedPath.join("/"));
    if (beforeLastItem === "dist" || beforeLastItem === "styles")
      return;
    let newContent = component.toLowerCase() === "components" ? createContent(`components/${beforeLastItem}`) : createContent(beforeLastItem);
    writeFileSync(`${__vite_injected_original_dirname}/${beforeLastItem}.d.ts`, newContent);
  }
  return { path, content };
};
var removeWrongCSSImport = (file) => {
  const filesToIncludeCSS = ["Tooltip", "StickerCard", "LifecycleProgress"];
  const fileNameWithoutType = file.replace(".cjs.js", "").replace(".es.js", "");
  console.log(fileNameWithoutType);
  const isFileToIncludeCSS = filesToIncludeCSS.includes(fileNameWithoutType);
  if (!isFileToIncludeCSS) {
    const filePath = resolve(__vite_injected_original_dirname, "dist", file);
    let content = readFileSync(filePath, "utf8");
    content = content.replace("import './style.css';", "");
    content = content.replace("require('./style.css');", "");
    writeFileSync(filePath, content, "utf8");
    console.warn("Removed CSS import from file: ", file);
  } else
    console.warn("File: ", file, " is not removed from CSS import");
};
var purgeReactDom = () => {
  const distFiles = readdirSync(resolve(__vite_injected_original_dirname, "dist"));
  const jsFiles = distFiles.filter((f) => f.endsWith(".js"));
  for (const file of jsFiles) {
    const filePath = resolve(__vite_injected_original_dirname, "dist", file);
    let content = readFileSync(filePath, "utf8");
    content = content.replace(/import "react-dom";/g, "");
    content = content.replace(/require\("react-dom"\);/g, "");
    content = content.replace(/import "react";/g, "");
    content = content.replace(/require\("react"\);/g, "");
    content = content.replace(/import "react\/dom";/g, "");
    content = content.replace(/require\("react\/dom"\);/g, "");
    content = content.replace(/import "react\/index";/g, "");
    content = content.replace(/require\("react\/index"\);/g, "");
    writeFileSync(filePath, content, "utf8");
    removeWrongCSSImport(file);
  }
};
var generateDeclarationTypes = () => {
  const files = readdirSync(resolve(__vite_injected_original_dirname));
  const dtsFiles = files.filter((f) => f.endsWith(".d.ts"));
  const packageJson = __require(resolve(__vite_injected_original_dirname, "package.json"));
  packageJson.files = ["dist"];
  packageJson.exports = {};
  for (const file of dtsFiles) {
    const destPath = resolve(__vite_injected_original_dirname, `${file}`);
    copyFileSync(resolve(__vite_injected_original_dirname, file), destPath);
    packageJson.files = [...packageJson.files, file];
    const exports = packageJson.exports;
    const exportKeyName = file.startsWith("index") ? "." : "./" + file.replace(".d.ts", "");
    exports[exportKeyName] = {
      import: `./dist/${file.replace(".d.ts", ".js")}`
    };
    writeFileSync(resolve(__vite_injected_original_dirname, "package.json"), JSON.stringify(packageJson, null, 2));
  }
  let indexContent = "";
  for (const file of dtsFiles) {
    if (file !== "index.d.ts")
      indexContent += `/// <reference path="${file}" />
 export * from './${file.replace(".d.ts", "")}'
`;
  }
  writeFileSync(resolve(__vite_injected_original_dirname, "index.d.ts"), indexContent);
};
var afterBuild = () => {
  purgeReactDom();
  generateDeclarationTypes();
};
var vite_config_default = defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic"
    }),
    libCss(),
    dts({
      outputDir: ["dist"],
      skipDiagnostics: true,
      logDiagnostics: true,
      beforeWriteFile,
      afterBuild
    }),
    visualizer({
      gzipSize: true,
      open: true
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src"),
      "@components": resolve(__vite_injected_original_dirname, "src/components"),
      "@models": resolve(__vite_injected_original_dirname, "src/models"),
      "@helpers": resolve(__vite_injected_original_dirname, "src/helpers"),
      "@hooks": resolve(__vite_injected_original_dirname, "src/hooks"),
      "@plugins": resolve(__vite_injected_original_dirname, "src/plugins")
    }
  },
  build: {
    lib: {
      entry: {
        ...generateComponentsEntries(),
        helpers: resolve(__vite_injected_original_dirname, "src/helpers/index.ts"),
        hooks: resolve(__vite_injected_original_dirname, "src/hooks/index.ts"),
        models: resolve(__vite_injected_original_dirname, "src/models/index.ts"),
        plugins: resolve(__vite_injected_original_dirname, "src/plugins/index.ts"),
        index: resolve(__vite_injected_original_dirname, "src/index.ts")
      },
      name: "trentim-react-sdk",
      formats: ["es", "cjs"],
      fileName: () => {
        return `[name].js`;
      }
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9icnVuby1saW51eC9UUkVOVElNL3RyZW50aW0tcmVhY3Qtc2RrL2xpYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvYnJ1bm8tbGludXgvVFJFTlRJTS90cmVudGltLXJlYWN0LXNkay9saWIvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvYnJ1bm8tbGludXgvVFJFTlRJTS90cmVudGltLXJlYWN0LXNkay9saWIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiO1xuaW1wb3J0IHsgZXhpc3RzU3luYywgcmVhZGRpclN5bmMsIGxzdGF0U3luYywgcm1kaXJTeW5jLCB1bmxpbmtTeW5jLCB3cml0ZUZpbGVTeW5jLCBjb3B5RmlsZVN5bmMsIHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJ1xuaW1wb3J0IGxpYkNzcyBmcm9tICd2aXRlLXBsdWdpbi1saWJjc3MnO1xuXG5jb25zdCBnZW5lcmF0ZUNvbXBvbmVudHNFbnRyaWVzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSByZWFkZGlyU3luYyhyZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21wb25lbnRzJykpO1xuICAgIGNvbnN0IGVudHJpZXMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBjb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb21wb25lbnQuc3BsaXQoJy4nKVswXTtcbiAgICAgICAgZW50cmllc1tuYW1lXSA9IHJlc29sdmUoX19kaXJuYW1lLCBgc3JjL2NvbXBvbmVudHMvJHtjb21wb25lbnR9YCk7XG4gICAgfVxuICAgIHJldHVybiBlbnRyaWVzO1xufVxuXG5mdW5jdGlvbiBlbXB0eURpcihkaXI6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghZXhpc3RzU3luYyhkaXIpKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgcmVhZGRpclN5bmMoZGlyKSkge1xuICAgICAgICBjb25zdCBhYnMgPSByZXNvbHZlKGRpciwgZmlsZSlcbiAgICAgICAgLy8gYmFzZWxpbmUgaXMgTm9kZSAxMiBzbyBjYW4ndCB1c2Ugcm1TeW5jXG4gICAgICAgIGlmIChsc3RhdFN5bmMoYWJzKS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgICBlbXB0eURpcihhYnMpXG4gICAgICAgICAgICBybWRpclN5bmMoYWJzKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdW5saW5rU3luYyhhYnMpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmVtcHR5RGlyKHJlc29sdmUoX19kaXJuYW1lLCAnZGlzdCcpKVxuXG5jb25zdCBiZWZvcmVXcml0ZUZpbGUgPSAocGF0aDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpID0+IHtcbiAgICAvL1JlcGxhY2UgYnkgdGhlIG5hbWUgb2YgdGhlIGZvbGRlclxuICAgIGNvbnN0IHNwbGl0dGVkUGF0aCA9IHBhdGguc3BsaXQoJy8nKS5tYXAocCA9PiBwKTtcbiAgICBjb25zdCBsYXN0SXRlbSA9IHNwbGl0dGVkUGF0aFtzcGxpdHRlZFBhdGgubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgYmVmb3JlTGFzdEl0ZW0gPSBzcGxpdHRlZFBhdGhbc3BsaXR0ZWRQYXRoLmxlbmd0aCAtIDJdO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHNwbGl0dGVkUGF0aFtzcGxpdHRlZFBhdGgubGVuZ3RoIC0gM107XG4gICAgaWYgKGxhc3RJdGVtID09PSAnaW5kZXguZC50cycpIHtcbiAgICAgICAgLy9Xcml0ZSBhbiBjb3B5IGZpbGUsIGJ1dCBhdCBvbmUgdXBwZXIgbGV2ZWwgd2l0aCB0aGUgbmFtZSBvZiB0aGUgYmVmb3JlTGFzdEl0ZW1cbiAgICAgICAgY29uc3QgY3JlYXRlQ29udGVudCA9IChwYXRoOiBzdHJpbmcpID0+IGBleHBvcnQgKiBmcm9tICcuL2Rpc3QvJHtwYXRofS9pbmRleCdgO1xuICAgICAgICBjb25zb2xlLmxvZyhzcGxpdHRlZFBhdGguam9pbignLycpKTtcbiAgICAgICAgaWYgKGJlZm9yZUxhc3RJdGVtID09PSAnZGlzdCcgfHwgYmVmb3JlTGFzdEl0ZW0gPT09ICdzdHlsZXMnKSByZXR1cm47XG4gICAgICAgIGxldCBuZXdDb250ZW50ID0gY29tcG9uZW50LnRvTG93ZXJDYXNlKCkgPT09ICdjb21wb25lbnRzJyA/IGNyZWF0ZUNvbnRlbnQoYGNvbXBvbmVudHMvJHtiZWZvcmVMYXN0SXRlbX1gKSA6IGNyZWF0ZUNvbnRlbnQoYmVmb3JlTGFzdEl0ZW0pO1xuICAgICAgICB3cml0ZUZpbGVTeW5jKGAke19fZGlybmFtZX0vJHtiZWZvcmVMYXN0SXRlbX0uZC50c2AsIG5ld0NvbnRlbnQpO1xuICAgIH1cbiAgICByZXR1cm4geyBwYXRoLCBjb250ZW50IH07XG59XG5cbmNvbnN0IHJlbW92ZVdyb25nQ1NTSW1wb3J0ID0gKGZpbGU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGZpbGVzVG9JbmNsdWRlQ1NTID0gWydUb29sdGlwJywgJ1N0aWNrZXJDYXJkJywgJ0xpZmVjeWNsZVByb2dyZXNzJ107XG4gICAgY29uc3QgZmlsZU5hbWVXaXRob3V0VHlwZSA9IGZpbGUucmVwbGFjZSgnLmNqcy5qcycsICcnKS5yZXBsYWNlKCcuZXMuanMnLCAnJyk7XG4gICAgY29uc29sZS5sb2coZmlsZU5hbWVXaXRob3V0VHlwZSk7XG4gICAgY29uc3QgaXNGaWxlVG9JbmNsdWRlQ1NTID0gZmlsZXNUb0luY2x1ZGVDU1MuaW5jbHVkZXMoZmlsZU5hbWVXaXRob3V0VHlwZSlcbiAgICBpZighaXNGaWxlVG9JbmNsdWRlQ1NTKSB7XG4gICAgICAgIC8vUmVtb3ZlIHRoZSBgaW1wb3J0ICcuL3N0eWxlcy5jc3MnYCBmcm9tIHRoZSBmaWxlLlxuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHJlc29sdmUoX19kaXJuYW1lLCAnZGlzdCcsIGZpbGUpO1xuICAgICAgICBsZXQgY29udGVudCA9IHJlYWRGaWxlU3luYyhmaWxlUGF0aCwgJ3V0ZjgnKTtcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShcImltcG9ydCAnLi9zdHlsZS5jc3MnO1wiLCAnJyk7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoXCJyZXF1aXJlKCcuL3N0eWxlLmNzcycpO1wiLCAnJyk7XG4gICAgICAgIHdyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIGNvbnRlbnQsICd1dGY4Jyk7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlJlbW92ZWQgQ1NTIGltcG9ydCBmcm9tIGZpbGU6IFwiLCBmaWxlKTtcbiAgICB9XG4gICAgZWxzZSBjb25zb2xlLndhcm4oXCJGaWxlOiBcIiwgZmlsZSwgXCIgaXMgbm90IHJlbW92ZWQgZnJvbSBDU1MgaW1wb3J0XCIpO1xufVxuXG5jb25zdCBwdXJnZVJlYWN0RG9tID0gKCkgPT4ge1xuICAgIC8vQWNjZXNzIGV2ZXJ5IGRpc3QgZmlsZSB0aGF0IGVuZHMgd2l0aCAuanMgYW5kIHJlbW92ZSBldmVyeSBgaW1wb3J0IFwicmVhY3QtZG9tXCIgb3IgcmVxdWlyZShcInJlYWN0LWRvbVwiKTtgXG4gICAgY29uc3QgZGlzdEZpbGVzID0gcmVhZGRpclN5bmMocmVzb2x2ZShfX2Rpcm5hbWUsICdkaXN0JykpO1xuICAgIGNvbnN0IGpzRmlsZXMgPSBkaXN0RmlsZXMuZmlsdGVyKGYgPT4gZi5lbmRzV2l0aCgnLmpzJykpO1xuICAgIGZvciAoY29uc3QgZmlsZSBvZiBqc0ZpbGVzKSB7XG4gICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcmVzb2x2ZShfX2Rpcm5hbWUsICdkaXN0JywgZmlsZSk7XG4gICAgICAgIGxldCBjb250ZW50ID0gcmVhZEZpbGVTeW5jKGZpbGVQYXRoLCAndXRmOCcpO1xuICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9pbXBvcnQgXCJyZWFjdC1kb21cIjsvZywgJycpO1xuICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9yZXF1aXJlXFwoXCJyZWFjdC1kb21cIlxcKTsvZywgJycpO1xuICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9pbXBvcnQgXCJyZWFjdFwiOy9nLCAnJyk7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoL3JlcXVpcmVcXChcInJlYWN0XCJcXCk7L2csICcnKTtcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvaW1wb3J0IFwicmVhY3RcXC9kb21cIjsvZywgJycpO1xuICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9yZXF1aXJlXFwoXCJyZWFjdFxcL2RvbVwiXFwpOy9nLCAnJyk7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoL2ltcG9ydCBcInJlYWN0XFwvaW5kZXhcIjsvZywgJycpO1xuICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9yZXF1aXJlXFwoXCJyZWFjdFxcL2luZGV4XCJcXCk7L2csICcnKTtcbiAgICAgICAgd3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgY29udGVudCwgJ3V0ZjgnKTtcbiAgICAgICAgcmVtb3ZlV3JvbmdDU1NJbXBvcnQoZmlsZSk7XG4gICAgfVxufVxuXG5jb25zdCBnZW5lcmF0ZURlY2xhcmF0aW9uVHlwZXMgPSAoKSA9PiB7XG4gICAgLy9Db3B5IGV2ZXJ5IGBbZmlsZV0uZC50c2AgZnJvbSBkaXN0IHRvIHRoZSByb290IG9mIF9fZGlybmFtZSBhbmQgdGhlbiBjcmVhdGUgYSBpbmRleC5kLnRzIHRoYXQgLy8vcmVmZXJlbmNlcyB0aGlzIGZpbGVzXG4gICAgY29uc3QgZmlsZXMgPSByZWFkZGlyU3luYyhyZXNvbHZlKF9fZGlybmFtZSkpO1xuICAgIGNvbnN0IGR0c0ZpbGVzID0gZmlsZXMuZmlsdGVyKGYgPT4gZi5lbmRzV2l0aCgnLmQudHMnKSk7XG4gICAgY29uc3QgcGFja2FnZUpzb24gPSByZXF1aXJlKHJlc29sdmUoX19kaXJuYW1lLCAncGFja2FnZS5qc29uJykpO1xuICAgIHBhY2thZ2VKc29uLmZpbGVzID0gWydkaXN0J107XG4gICAgcGFja2FnZUpzb24uZXhwb3J0cyA9IHt9O1xuICAgIGZvciAoY29uc3QgZmlsZSBvZiBkdHNGaWxlcykge1xuICAgICAgICBjb25zdCBkZXN0UGF0aCA9IHJlc29sdmUoX19kaXJuYW1lLCBgJHtmaWxlfWApO1xuICAgICAgICBjb3B5RmlsZVN5bmMocmVzb2x2ZShfX2Rpcm5hbWUsIGZpbGUpLCBkZXN0UGF0aCk7XG4gICAgICAgIC8vVGhlbiB1cGRhdGUgcGFja2FnZS5qc29uIGBmaWxlc2AgdG8gaW5jbHVkZSBhbGwgdGhpcyBmaWxlc1xuICAgICAgICBwYWNrYWdlSnNvbi5maWxlcyA9IFsuLi5wYWNrYWdlSnNvbi5maWxlcywgZmlsZV07XG4gICAgICAgIC8vdXBkYXRlIGFsbCBwYWNrYWdlLmpzb24gYGV4cG9ydHNgIHRvIGluY2x1ZGUgdGhlIGtleXMgd2l0aCB0aGUgZmlsZSBuYW1lIHdpdGggaW1wb3J0IGFuZCByZXF1aXJlXG4gICAgICAgIGNvbnN0IGV4cG9ydHMgPSBwYWNrYWdlSnNvbi5leHBvcnRzO1xuICAgICAgICBjb25zdCBleHBvcnRLZXlOYW1lID0gZmlsZS5zdGFydHNXaXRoKCdpbmRleCcpID8gJy4nIDogXCIuL1wiICsgZmlsZS5yZXBsYWNlKCcuZC50cycsICcnKTtcbiAgICAgICAgZXhwb3J0c1tleHBvcnRLZXlOYW1lXSA9IHtcbiAgICAgICAgICAgIGltcG9ydDogYC4vZGlzdC8ke2ZpbGUucmVwbGFjZSgnLmQudHMnLCAnLmpzJyl9YCxcbiAgICAgICAgfVxuICAgICAgICB3cml0ZUZpbGVTeW5jKHJlc29sdmUoX19kaXJuYW1lLCAncGFja2FnZS5qc29uJyksIEpTT04uc3RyaW5naWZ5KHBhY2thZ2VKc29uLCBudWxsLCAyKSk7XG4gICAgfVxuICAgIGxldCBpbmRleENvbnRlbnQgPSAnJztcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZHRzRmlsZXMpIHtcbiAgICAgICAgaWYgKGZpbGUgIT09ICdpbmRleC5kLnRzJylcbiAgICAgICAgICAgIGluZGV4Q29udGVudCArPSBgLy8vIDxyZWZlcmVuY2UgcGF0aD1cIiR7ZmlsZX1cIiAvPlxcbiBleHBvcnQgKiBmcm9tICcuLyR7ZmlsZS5yZXBsYWNlKCcuZC50cycsICcnKX0nXFxuYDsgLy8gXG4gICAgfVxuICAgIHdyaXRlRmlsZVN5bmMocmVzb2x2ZShfX2Rpcm5hbWUsICdpbmRleC5kLnRzJyksIGluZGV4Q29udGVudCk7XG59XG5cblxuY29uc3QgYWZ0ZXJCdWlsZCA9ICgpID0+IHtcbiAgICBwdXJnZVJlYWN0RG9tKCk7XG4gICAgZ2VuZXJhdGVEZWNsYXJhdGlvblR5cGVzKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW1xuICAgICAgICByZWFjdCh7XG4gICAgICAgICAgICBqc3hSdW50aW1lOiAnYXV0b21hdGljJ1xuICAgICAgICB9KSxcbiAgICAgICAgbGliQ3NzKCksXG4gICAgICAgIGR0cyh7XG4gICAgICAgICAgICBvdXRwdXREaXI6IFsnZGlzdCddLFxuICAgICAgICAgICAgLy9yb2xsdXBUeXBlczogdHJ1ZSxcbiAgICAgICAgICAgIC8vaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcbiAgICAgICAgICAgIHNraXBEaWFnbm9zdGljczogdHJ1ZSxcbiAgICAgICAgICAgIGxvZ0RpYWdub3N0aWNzOiB0cnVlLFxuICAgICAgICAgICAgYmVmb3JlV3JpdGVGaWxlLFxuICAgICAgICAgICAgYWZ0ZXJCdWlsZFxuICAgICAgICB9KSxcbiAgICAgICAgdmlzdWFsaXplcih7XG4gICAgICAgICAgICBnemlwU2l6ZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wZW46IHRydWVcbiAgICAgICAgfSlcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSxcbiAgICAgICAgICAgICdAY29tcG9uZW50cyc6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2NvbXBvbmVudHMnKSxcbiAgICAgICAgICAgICdAbW9kZWxzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvbW9kZWxzJyksXG4gICAgICAgICAgICAnQGhlbHBlcnMnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9oZWxwZXJzJyksXG4gICAgICAgICAgICAnQGhvb2tzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaG9va3MnKSxcbiAgICAgICAgICAgICdAcGx1Z2lucyc6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3BsdWdpbnMnKSxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgICAgbGliOiB7XG4gICAgICAgICAgICBlbnRyeToge1xuICAgICAgICAgICAgICAgIC4uLmdlbmVyYXRlQ29tcG9uZW50c0VudHJpZXMoKSxcbiAgICAgICAgICAgICAgICBoZWxwZXJzOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9oZWxwZXJzL2luZGV4LnRzJyksXG4gICAgICAgICAgICAgICAgaG9va3M6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2hvb2tzL2luZGV4LnRzJyksXG4gICAgICAgICAgICAgICAgbW9kZWxzOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9tb2RlbHMvaW5kZXgudHMnKSxcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wbHVnaW5zL2luZGV4LnRzJyksXG4gICAgICAgICAgICAgICAgaW5kZXg6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2luZGV4LnRzJyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmFtZTogJ3RyZW50aW0tcmVhY3Qtc2RrJyxcbiAgICAgICAgICAgIGZvcm1hdHM6IFsnZXMnLCAnY2pzJ10sXG4gICAgICAgICAgICBmaWxlTmFtZTogKCkgPT4geyByZXR1cm4gYFtuYW1lXS5qc2AgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXG4gICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgICAgICAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7O0FBQStULE9BQU8sV0FBVztBQUNqVixTQUFTLGVBQWU7QUFDeEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsa0JBQWtCO0FBQzNCLFNBQVMsWUFBWSxhQUFhLFdBQVcsV0FBVyxZQUFZLGVBQWUsY0FBYyxvQkFBb0I7QUFDckgsT0FBTyxZQUFZO0FBTm5CLElBQU0sbUNBQW1DO0FBUXpDLElBQU0sNEJBQTRCLE1BQU07QUFDcEMsUUFBTSxhQUFhLFlBQVksUUFBUSxrQ0FBVyxnQkFBZ0IsQ0FBQztBQUNuRSxRQUFNLFVBQVUsQ0FBQztBQUNqQixhQUFXLGFBQWEsWUFBWTtBQUNoQyxVQUFNLE9BQU8s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
