(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/helpers/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/helpers/ConverterOptions.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConversionOptions = void 0;

var ConversionOptions =
/** @class */
function () {
  function ConversionOptions(blob, byteArrays, mimeType, mimeUtils, fileName) {
    this.blob = blob;
    this.byteArrays = byteArrays;
    this.mimeType = mimeType;
    this.mimeUtils = mimeUtils;
    this.fileName = fileName;
  }
  /**
   * @returns Return the converted value as an blob Object
   */


  ConversionOptions.prototype.getBlob = function () {
    return this.blob;
  };

  ConversionOptions.prototype.getFile = function () {
    return new File([this.getBlob()], this === null || this === void 0 ? void 0 : this.fileName, {
      type: this === null || this === void 0 ? void 0 : this.mimeType
    });
  };
  /**
   * @returns Return an array representation of the type `Uint8Array` from the given base64 value.
   */


  ConversionOptions.prototype.getByteArray = function () {
    return this.byteArrays;
  };
  /**
   *  Applies only if the a file name was given, if the npm module `mime-types` or an similar module was provided on the class constructor it will return the correct detected mime, otherwise it will return 'application/octet-stream'
   *
   * @returns The converted mime type, or null if the fileName parameter was not provided.
   */


  ConversionOptions.prototype.getMimeType = function () {
    return this.mimeUtils.contentType(this.mimeType) || this.mimeType;
  };

  return ConversionOptions;
}();

exports.ConversionOptions = ConversionOptions;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ConversionOptions, "ConversionOptions", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\ConverterOptions.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/helpers/FileUtils.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileUtils = void 0;

var ConverterOptions_1 = __webpack_require__("./src/helpers/ConverterOptions.ts");

var FileUtils =
/** @class */
function () {
  function FileUtils(mime) {
    this.mime = mime;
  }
  /**
  * Take an object Url, or an url of an image an convert it back to a File object.
  *
  * @param url - The first input number
  * @param fileInfo - The second input number
  * @param {RequestInit=} fetchOptions - An optional fetching options about the url request, it uses the same `{RequestInit}` interface from fetch api.
  * @returns A promise containing the file
  *
  *@example
  *```ts
  * const newFile = await urlToFile("blob:https://tenant.com/bd3df1f7-38c5-44db-9a97-aa956072ef02", {
  *   fileName: "bird.png",
  *   fileMime: "image/png",
  *   lastModified: new Date().getTime()
  * });
  * ```
  * */


  FileUtils.prototype.urlToFile = function (url, fileInfo, fetchOptions) {
    if (fetchOptions === void 0) {
      fetchOptions = null;
    }

    return __awaiter(this, void 0, void 0, function () {
      var fileBlob, fileObj, e_1;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , fetch(url, fetchOptions).then(function (r) {
              return r.blob();
            })];

          case 1:
            fileBlob = _b.sent();
            fileObj = new File([fileBlob], fileInfo.fileName, {
              type: (fileInfo === null || fileInfo === void 0 ? void 0 : fileInfo.fileMime) || this.checkIfHasMime(fileInfo === null || fileInfo === void 0 ? void 0 : fileInfo.fileName),
              lastModified: (fileInfo === null || fileInfo === void 0 ? void 0 : fileInfo.lastModified) || new Date().getTime()
            });
            return [2
            /*return*/
            , fileObj];

          case 2:
            e_1 = _b.sent();
            console.error(e_1 === null || e_1 === void 0 ? void 0 : e_1.message);
            return [2
            /*return*/
            , null];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * Downloads in the browser an XML File of the same given string.
   *
   * @param xmlText  - String of the whole content of the XML file
   * @param {String=} fileName - the name of the XML file.
   */


  FileUtils.prototype.downloadXml = function (xmlText, fileName) {
    if (xmlText) {
      var xmlTag_1 = document.createElement('a');
      var filename = fileName || 'undefinedName.xml';
      filename = this.fileNameValidator(filename, '.xml');
      var xmlBlob = new Blob([xmlText], {
        type: 'application/octet-stream'
      });
      var objUrl_1 = URL.createObjectURL(xmlBlob);
      xmlTag_1.setAttribute('href', objUrl_1);
      xmlTag_1.setAttribute('download', filename);
      xmlTag_1.dataset.downloadurl = ['text/plain', xmlTag_1.download, xmlTag_1.href].join(':');
      xmlTag_1.draggable = true;
      xmlTag_1.classList.add('dragout');
      xmlTag_1.click();
      setTimeout(function () {
        window.URL.revokeObjectURL(objUrl_1);
        xmlTag_1 === null || xmlTag_1 === void 0 ? void 0 : xmlTag_1.remove();
      }, 200);
    }
  };

  FileUtils.prototype.fileNameValidator = function (fileName, ext) {
    if (!ext.startsWith('.')) ext = "." + ext;

    if (fileName) {
      if (!fileName.endsWith(ext)) return fileName + ext;
      return fileName;
    }
  };

  FileUtils.prototype.checkIfHasMime = function (fileName) {
    var _b;

    if (!fileName) return null;
    var type = ((_b = this === null || this === void 0 ? void 0 : this.mime) === null || _b === void 0 ? void 0 : _b.contentType(fileName)) || 'application/octet-stream';
    return type;
  };
  /**
   * Convert's a base 64 string to some of the possible return values from `ConversionOptions` class.
   * @returns
   * ```ts
   * new ConversionOptions()
   * ```
   * */


  FileUtils.prototype.convertBase64To = function (base64, fileName, type) {
    var _b;

    type = type || this.checkIfHasMime(fileName);
    var sliceSize = 512;
    var byteCharacters = atob(decodeURIComponent(base64));
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters === null || byteCharacters === void 0 ? void 0 : byteCharacters.slice(offset, offset + sliceSize);
      var byteNumbers = new Array(slice.length);

      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    var blob = type ? new Blob(byteArrays, {
      type: type
    }) : new Blob(byteArrays);
    return new ConverterOptions_1.ConversionOptions(blob, byteArrays, type, (_b = this === null || this === void 0 ? void 0 : this.mime) !== null && _b !== void 0 ? _b : undefined, fileName);
  };

  var _a;

  _a = FileUtils;
  /**
   * Takes any `Blob` object or inherited objects from this interface and convert it to a base64 string.
   * @param blob - Any Blob object, such as `File` and other inherited objects from this interface.
   * @returns A promise of the base64 string.
   */

  FileUtils.blobToBase64 = function (blob, config) {
    return __awaiter(void 0, void 0, void 0, function () {
      var readAs;

      var _b;

      return __generator(_a, function (_c) {
        readAs = (_b = config === null || config === void 0 ? void 0 : config.readAs) !== null && _b !== void 0 ? _b : 'DataURL';

        try {
          return [2
          /*return*/
          , new Promise(function (resolve, reject) {
            var reader = new FileReader();

            reader.onloadend = function () {
              return __awaiter(void 0, void 0, void 0, function () {
                var b64, metarRegex, result;
                return __generator(this, function (_b) {
                  switch (_b.label) {
                    case 0:
                      b64 = reader === null || reader === void 0 ? void 0 : reader.result;
                      if (!b64) reject(new Error('FileReader error'));
                      if (!!(config === null || config === void 0 ? void 0 : config.customCb)) return [3
                      /*break*/
                      , 1];
                      metarRegex = /^data:.+;base64,/;
                      return [2
                      /*return*/
                      , resolve(b64 === null || b64 === void 0 ? void 0 : b64.replace(metarRegex, ''))];

                    case 1:
                      return [4
                      /*yield*/
                      , config === null || config === void 0 ? void 0 : config.customCb(b64)];

                    case 2:
                      result = _b.sent();
                      return [2
                      /*return*/
                      , resolve(result)];
                  }
                });
              });
            };

            reader.onerror = function (e) {
              return reject(e);
            };

            if (config === null || config === void 0 ? void 0 : config.encoding) reader["readAs".concat(readAs)](blob);else reader["readAs".concat(readAs)](blob, config === null || config === void 0 ? void 0 : config.encoding);
          })];
        } catch (err) {
          console.log(err);
          return [2
          /*return*/
          , null];
        }

        return [2
        /*return*/
        ];
      });
    });
  };

  return FileUtils;
}();

exports.FileUtils = FileUtils;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__awaiter, "__awaiter", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\FileUtils.ts");
  reactHotLoader.register(__generator, "__generator", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\FileUtils.ts");
  reactHotLoader.register(FileUtils, "FileUtils", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\FileUtils.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/helpers/Utils.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = void 0;

var Utils =
/** @class */
function () {
  function Utils() {}
  /**Tries to convert an ISO `string` to the locale format. */


  Utils.convertIsoToLocaleString = function (date, locales, formatOptions) {
    var _a;

    if (locales === void 0) {
      locales = 'pt-BR';
    }

    if (formatOptions === void 0) {
      formatOptions = undefined;
    } //First check if the string can be converted to a date object.


    if (!(new Date(date) instanceof Date) && isNaN((_a = new Date(date)) === null || _a === void 0 ? void 0 : _a.getTime())) return date;
    var isIsoDate = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z/.test(date);
    if (!isIsoDate) return date;
    return new Intl.DateTimeFormat(locales, formatOptions).format(new Date(date));
  };
  /**
   * @TO-DO: Add documentation
   */


  Utils.copyAndSort = function (items, columnKey, isSortedDescending) {
    return items.slice(0).sort(function (a, b) {
      var aValue = Utils.getNestedObject(a, columnKey === null || columnKey === void 0 ? void 0 : columnKey.split('.'));
      var bValue = Utils.getNestedObject(b, columnKey === null || columnKey === void 0 ? void 0 : columnKey.split('.'));
      return (isSortedDescending ? aValue < bValue : aValue > bValue) ? 1 : -1;
    });
  };
  /**Get a value from a deep nested object.
   *
   * @param obj The object to search in.
   * @param path The path to the value, as an array of keys, separated by dots.
   * @returns The value, if found.
   *
   * Theoretically, this function can be used to get the value from an `number[]` as the type of the `pathArr`, but I've not tested it.
   */


  Utils.getNestedObject = function (nestedObj, pathArr) {
    return pathArr === null || pathArr === void 0 ? void 0 : pathArr.reduce(function (obj, key) {
      return obj && obj[key] !== 'undefined' ? obj[key] : undefined;
    }, nestedObj);
  };
  /**@TO-DO: Add documentation */


  Utils.getDeepKeys = function (obj) {
    var keys = [];

    var _loop_1 = function _loop_1(key) {
      keys.push(key);

      if (_typeof(obj[key]) === "object") {
        var subKeys = Utils.getDeepKeys(obj[key]);
        keys = keys.concat(subKeys === null || subKeys === void 0 ? void 0 : subKeys.map(function (subkey) {
          return key + "." + subkey;
        }));
      }
    };

    for (var key in obj) {
      _loop_1(key);
    }

    return keys;
  };

  return Utils;
}();

exports.Utils = Utils;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Utils, "Utils", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\Utils.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/helpers/WebpartAddons.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebpartAddons = void 0;

var WebpartAddons =
/** @class */
function () {
  function WebpartAddons() {}

  WebpartAddons.prototype.changeElementProperty = function (element, elementsToChange) {
    if (element === null || element === void 0 ? void 0 : element.style) {
      elementsToChange === null || elementsToChange === void 0 ? void 0 : elementsToChange.forEach(function (value, key) {
        element.style[key] = value;
      });
    }
  };
  /**
   * @param nodeElement - Base Node element that contains a collection of children divs that can reach the target element
   * @param finalTarget - The target element such as an class name selector like `my-element` or an `HTMLElement` using
   * ```js
   * document.querySelector('my-element');
   * ```
   * @param elementsToChange - A map of the elements to change, the key is the property name and the value is the new value
   * ```js
   * const elementsToChange = new Map<keyof CSSStyleDeclaration, any>([['height', '100%']]);
   * ```
   */


  WebpartAddons.prototype.changeNodeProperty = function (nodeElement, finalTarget, elementsToChange) {
    var _a, _b;

    try {
      var childCanvasChild = null;

      if ((nodeElement === null || nodeElement === void 0 ? void 0 : nodeElement.length) > 1) {
        if ((_b = (_a = nodeElement[0]) === null || _a === void 0 ? void 0 : _a.className) === null || _b === void 0 ? void 0 : _b.includes('ControlZone-control')) childCanvasChild = nodeElement[0];else childCanvasChild = nodeElement[1];
      } else childCanvasChild = nodeElement[0];

      var canChange = this.targetCondition(finalTarget, childCanvasChild);
      return canChange ? canChange : this.changeNodeRecursive(childCanvasChild, finalTarget, elementsToChange);
    } catch (err) {
      console.error('[WebpartAddons] - changeElementProperty - Error while changing the node property', err);
      return false;
    }
  };

  WebpartAddons.prototype.changeNodeRecursive = function (childCanvasChild, target, elementsToChange) {
    var _a;

    if (!(childCanvasChild === null || childCanvasChild === void 0 ? void 0 : childCanvasChild.children)) return this.changeNodeProperty((_a = childCanvasChild === null || childCanvasChild === void 0 ? void 0 : childCanvasChild.nextElementSibling) === null || _a === void 0 ? void 0 : _a.children, target, elementsToChange);else {
      this.changeElementProperty(childCanvasChild, elementsToChange);
      return this.changeNodeProperty(childCanvasChild === null || childCanvasChild === void 0 ? void 0 : childCanvasChild.children, target, elementsToChange);
    }
  };

  WebpartAddons.prototype.targetCondition = function (target, child) {
    var _a;

    if (typeof target === 'string') return (_a = child === null || child === void 0 ? void 0 : child.className) === null || _a === void 0 ? void 0 : _a.startsWith(target);else if (_typeof(target) === 'object') {
      var nodeCondition = child === null || child === void 0 ? void 0 : child.isEqualNode(target);
      return nodeCondition;
    }
    return false;
  };
  /**
   * It enables the webpart to be live reloaded even when the webpart is already on a production environment, it only applies when using `gulp serve`.
   * @param manifest - SPFx manifest from the webpart context - `{@microsoft/sp-component-base#BaseComponent.context}`
   * @param serveUrl - An optional URL to use as the gulp serve address, by default it will be https://localhost:4321
   * @param liveReloadUrl - An optional URL to use as the live reload address, by default it will be `//localhost:35729/livereload.js?snipver=1`
   */


  WebpartAddons.registerLiveReload = function (manifest, serveUrl, liveReloadUrl) {
    var pageUrl = manifest["loaderConfig"]["internalModuleBaseUrls"][0];

    if ((pageUrl === null || pageUrl === void 0 ? void 0 : pageUrl.indexOf(serveUrl || "https://localhost:4321")) !== -1) {
      // create a new <script> element
      var script = document.createElement('script'); // assign the src attribute to the livereload serve

      script.src = liveReloadUrl || "//localhost:35729/livereload.js?snipver=1"; // add script to the head section of the page

      document.head.appendChild(script);
    }
  };

  return WebpartAddons;
}();

exports.WebpartAddons = WebpartAddons;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(WebpartAddons, "WebpartAddons", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\WebpartAddons.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/helpers/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = exports.ConversionOptions = exports.WebpartAddons = exports.FileUtils = void 0;

var FileUtils_1 = __webpack_require__("./src/helpers/FileUtils.ts");

Object.defineProperty(exports, "FileUtils", {
  enumerable: true,
  get: function get() {
    return FileUtils_1.FileUtils;
  }
});

var WebpartAddons_1 = __webpack_require__("./src/helpers/WebpartAddons.ts");

Object.defineProperty(exports, "WebpartAddons", {
  enumerable: true,
  get: function get() {
    return WebpartAddons_1.WebpartAddons;
  }
});

var ConverterOptions_1 = __webpack_require__("./src/helpers/ConverterOptions.ts");

Object.defineProperty(exports, "ConversionOptions", {
  enumerable: true,
  get: function get() {
    return ConverterOptions_1.ConversionOptions;
  }
});

var Utils_1 = __webpack_require__("./src/helpers/Utils.ts");

Object.defineProperty(exports, "Utils", {
  enumerable: true,
  get: function get() {
    return Utils_1.Utils;
  }
});

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map