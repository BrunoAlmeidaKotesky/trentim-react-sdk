"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => Plugin
});
module.exports = __toCommonJS(src_exports);
var import_prettier2 = __toESM(require("prettier"), 1);

// src/main.ts
var import_fs = __toESM(require("fs"), 1);
var import_postcss = require("postcss");
var import_postcss_js = require("postcss-js");

// src/util.ts
var import_node_path = __toESM(require("path"), 1);
var cssLangs = `\\.(css|sass|scss)($|\\?)`;
var cssLangReg = new RegExp(cssLangs);
var cssModuleReg = new RegExp(`\\.module${cssLangs}`);
var isCSSModuleRequest = (request) => cssModuleReg.test(request);
var getRelativePath = (from, to) => import_node_path.default.relative(import_node_path.default.dirname(from || ""), import_node_path.default.dirname(to || "")) || "./";
var toDashCase = (target) => target.replace(/[-_ /~ . ][A-z0-9]/g, (v) => {
  return "-" + v.slice(1);
}).toLowerCase();
var toCamelCase = (target) => target.replace(/^[A-Z]/, (m) => m.toLowerCase()).replace(/[-_ ./~ ]+([A-z0-9])/g, (m, $1) => $1.toUpperCase());
var isSassException = (e) => typeof e === "object" && !!e && "file" in e;
var collectionToObj = (collection) => {
  return collection.reduce((acc, item) => {
    return { ...acc, ...item };
  }, {});
};

// src/options.ts
var getParseCase = (config) => {
  if (!config.css || !config.css.modules || !config.css.modules.localsConvention) {
    return;
  }
  const { localsConvention } = config.css.modules;
  if (localsConvention === "camelCase" || localsConvention === "camelCaseOnly") {
    return toCamelCase;
  } else if (localsConvention === "dashes" || localsConvention === "dashesOnly") {
    return toDashCase;
  }
  return;
};
var getPreprocessorOptions = (config) => {
  let additionalData, includePaths, importer;
  if (!config.css || !config.css.preprocessorOptions || !config.css.preprocessorOptions.scss) {
    return { additionalData, includePaths, importer };
  }
  return config.css.preprocessorOptions.scss;
};

// src/css.ts
var import_node_module = require("module");
var import_meta = {};
var SPLIT_STR = `/* vite-plugin-sass-dts */
`;
var loadedSassPreprocessor;
var _require = import_meta.url ? (0, import_node_module.createRequire)(import_meta.url) : require;
var parseCss = async (file, fileName, config) => {
  const sass = loadSassPreprocessor(config);
  const options = getPreprocessorOptions(config);
  const resolveFn = config.createResolver({
    extensions: [".scss", ".sass", ".css"],
    mainFields: ["sass", "style"],
    tryIndex: true,
    tryPrefix: "_",
    preferRelative: true
  });
  const internalImporter = (url, importer, done) => {
    resolveFn(url, importer).then((resolved) => {
      if (resolved) {
        new Promise(function(resolve) {
          resolve({ file: resolved });
        }).then(done).catch(done);
      } else {
        done && done(null);
      }
    });
  };
  const finalImporter = [internalImporter];
  if (options.importer) {
    Array.isArray(options.importer) ? finalImporter.unshift(...options.importer) : finalImporter.unshift(options.importer);
  }
  const result = sass.renderSync({
    ...options,
    data: await getData(file.toString(), fileName, options.additionalData),
    file: fileName,
    includePaths: options.includePaths,
    importer: finalImporter
  });
  const splitted = result.css.toString().split(SPLIT_STR);
  return { localStyle: splitted[1] || "", globalStyle: splitted[0] };
};
var getData = (data, filename, additionalData) => {
  if (!additionalData)
    return `
${SPLIT_STR}${data}`;
  if (typeof additionalData === "function") {
    return additionalData(`
${SPLIT_STR}${data}`, filename);
  }
  return `${additionalData}
${SPLIT_STR}${data}`;
};
var loadSassPreprocessor = (config) => {
  var _a, _b;
  try {
    if (loadedSassPreprocessor) {
      return loadedSassPreprocessor;
    }
    const fallbackPaths = ((_b = (_a = _require.resolve).paths) == null ? void 0 : _b.call(_a, "sass")) || [];
    const resolved = _require.resolve("sass", {
      paths: [config.root, ...fallbackPaths]
    });
    return loadedSassPreprocessor = _require(resolved);
  } catch (e) {
    console.error(e);
    throw new Error(
      `Preprocessor dependency 'sass' not found. Did you install it?`
    );
  }
};

// src/extract.ts
var importRe = new RegExp(/^(@import)/);
var keySeparatorRe = new RegExp(/(?=[\s.:[\]><+,()])/g);
var extractClassNameKeys = (obj, toParseCase, parentKey) => {
  return Object.entries(obj).reduce(
    (curr, [key, value]) => {
      if (importRe.test(key))
        return curr;
      const splitKeys = key.split(keySeparatorRe);
      for (const splitKey of splitKeys) {
        if (parentKey === ":export" || splitKey.startsWith(".")) {
          if (toParseCase) {
            curr.set(toParseCase(splitKey.replace(".", "").trim()), true);
          } else {
            curr.set(splitKey.replace(".", "").trim(), true);
          }
        }
      }
      if (typeof value === "object" && Object.keys(value).length > 0) {
        const valueToExtract = Array.isArray(value) ? collectionToObj(value) : value;
        const map = extractClassNameKeys(valueToExtract, toParseCase, key);
        for (const key2 of map.keys()) {
          if (toParseCase) {
            curr.set(toParseCase(key2), true);
          } else {
            curr.set(key2, true);
          }
        }
      }
      return curr;
    },
    /* @__PURE__ */ new Map()
  );
};

// src/write.ts
var import_node_fs = require("fs");
var import_node_path2 = require("path");
var import_prettier = __toESM(require("prettier"), 1);
var { format } = import_prettier.default;
var writeToFile = async (prettierOptions, fileName, classNameKeys, globalOutFile) => {
  let exportTypes = "", exportClassNames = "export type ClassNames = ";
  const exportStyle = "export default classNames;";
  for (const classNameKey of classNameKeys.keys()) {
    exportTypes = `${exportTypes}
${formatExportType(classNameKey)}`;
    exportClassNames = exportClassNames !== "export type ClassNames = " ? `${exportClassNames} | '${classNameKey}'` : `${exportClassNames} '${classNameKey}'`;
  }
  let outputFileString = "";
  if (globalOutFile) {
    const relativePath = getRelativePath(
      (0, import_node_path2.dirname)(fileName),
      (0, import_node_path2.dirname)(globalOutFile)
    );
    const exportTypeFileName = formatExportTypeFileName(globalOutFile);
    const globalClassNamesPrefix = classNameKeys.size === 0 ? "" : "| ";
    outputFileString = `import globalClassNames, { ClassNames as GlobalClassNames } from '${relativePath}${exportTypeFileName}'
`;
    outputFileString = `${outputFileString}declare const classNames: typeof globalClassNames & {${exportTypes}
};
${exportStyle}
${exportClassNames} ${globalClassNamesPrefix}GlobalClassNames`;
  } else {
    outputFileString = `declare const classNames: {${exportTypes}
};
${exportStyle}
${exportClassNames}`;
  }
  const prettierdOutputFileString = format(outputFileString, prettierOptions);
  (0, import_node_fs.writeFile)(
    formatWriteFileName(fileName),
    `${prettierdOutputFileString}`,
    (err) => {
      if (err) {
        console.log(err);
        throw err;
      }
    }
  );
};
var formatExportType = (key) => `  readonly '${key}': '${key}';`;
var formatWriteFileName = (file) => `${file}${file.endsWith("d.ts") ? "" : ".d.ts"}`;
var formatExportTypeFileName = (file) => (0, import_node_path2.basename)(file.replace(".ts", ""));

// src/main.ts
var main = (fileName, config, option) => {
  try {
    import_fs.default.readFile(fileName, async (err, file) => {
      var _a, _b, _c;
      if (err) {
        console.error(err);
      } else {
        try {
          const css = fileName.endsWith(".css") ? { localStyle: file.toString() } : await parseCss(file, fileName, config);
          const toParseCase = getParseCase(config);
          const classNameKeys = extractClassNameKeys(
            (0, import_postcss_js.objectify)((0, import_postcss.parse)(css.localStyle)),
            toParseCase
          );
          writeToFile(
            config.prettierOptions,
            fileName,
            classNameKeys,
            (_a = option.global) == null ? void 0 : _a.outFile
          );
          if (!!css.globalStyle && ((_b = option.global) == null ? void 0 : _b.generate)) {
            const globalClassNameKeys = extractClassNameKeys(
              (0, import_postcss_js.objectify)((0, import_postcss.parse)(css.globalStyle)),
              toParseCase
            );
            writeToFile(
              config.prettierOptions,
              (_c = option.global) == null ? void 0 : _c.outFile,
              globalClassNameKeys
            );
          }
        } catch (e) {
          if (isSassException(e) && e.file !== fileName) {
            console.error("e :>> ", e);
          }
        }
      }
    });
  } catch (e) {
    console.error("e :>> ", e);
  }
};

// src/index.ts
var { resolveConfig } = import_prettier2.default;
function Plugin(option = {}) {
  let cacheConfig;
  const enabledMode = option.enabledMode || ["development"];
  return {
    name: "vite-plugin-sass-dts",
    async configResolved(config) {
      const prettierOptions = await resolveConfig(config.root) || {};
      cacheConfig = {
        ...config,
        prettierOptions: { ...prettierOptions, filepath: "*.d.ts" }
      };
    },
    handleHotUpdate(context) {
      if (!isCSSModuleRequest(context.file))
        return;
      main(context.file, cacheConfig, option);
      return;
    },
    transform(code, id) {
      if (!enabledMode.includes(cacheConfig.env.MODE)) {
        return { code };
      }
      const fileName = id.replace("?used", "");
      if (!isCSSModuleRequest(fileName))
        return { code };
      main(fileName, cacheConfig, option);
      return { code };
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
