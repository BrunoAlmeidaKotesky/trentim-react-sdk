(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("trentim-react-sdk", [], factory);
	else if(typeof exports === 'object')
		exports["trentim-react-sdk"] = factory();
	else
		root["trentim-react-sdk"] = factory();
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
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

/***/ "./src/components/Datatable/Caption.tsx":
/*!**********************************************!*\
  !*** ./src/components/Datatable/Caption.tsx ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
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

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Caption = void 0;

var React = __webpack_require__(/*! react */ "react");

var react_1 = __webpack_require__(/*! react */ "react");

function Caption(_a) {
  var styles = _a.styles,
      tableCaption = _a.tableCaption;
  var captionStyle = react_1.useMemo(function () {
    return {
      fontWeight: 600,
      fontSize: 22,
      borderBottom: '1px solid #00000063',
      paddingBottom: 12,
      paddingTop: 12
    };
  }, []);
  return React.createElement("caption", {
    style: __assign(__assign({}, captionStyle), styles === null || styles === void 0 ? void 0 : styles.caption)
  }, tableCaption);
}

__signature__(Caption, "useMemo{captionStyle}");

exports.Caption = Caption;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__assign, "__assign", "C:\\Users\\Bruno\\OneDrive\\\xC1rea de Trabalho\\Projects\\trentim-react-sdk\\src\\components\\Datatable\\Caption.tsx");
  reactHotLoader.register(Caption, "Caption", "C:\\Users\\Bruno\\OneDrive\\\xC1rea de Trabalho\\Projects\\trentim-react-sdk\\src\\components\\Datatable\\Caption.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/Datatable/Datatable.tsx":
/*!************************************************!*\
  !*** ./src/components/Datatable/Datatable.tsx ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Datatable = void 0;

var React = __webpack_require__(/*! react */ "react");

var react_1 = __webpack_require__(/*! react */ "react");

var Caption_1 = __webpack_require__(/*! ./Caption */ "./src/components/Datatable/Caption.tsx");

var Head_1 = __webpack_require__(/*! ./Head */ "./src/components/Datatable/Head.tsx");

var Rows_1 = __webpack_require__(/*! ./Rows */ "./src/components/Datatable/Rows.tsx");

exports.Datatable = react_1.memo(__signature__(function (_a) {
  var _b, _c, _d;

  var columns = _a.columns,
      styles = _a.styles,
      footer = _a.footer,
      rows = _a.rows,
      ignoreKeys = _a.ignoreKeys,
      _e = _a.idName,
      idName = _e === void 0 ? "nf-table" : _e,
      customEvents = _a.customEvents,
      tableCaption = _a.tableCaption,
      classes = _a.classes;
  react_1.useEffect(function () {
    if (rows.length > 0 && columns.length > 0) {
      var firstRowKeys = Object.keys(rows[0]);

      if (ignoreKeys && ignoreKeys.length > 0) {
        firstRowKeys = firstRowKeys.filter(function (k) {
          if (!ignoreKeys.includes(k)) {
            return k;
          }
        });
      }

      var tableHeaderVals = columns.map(function (h) {
        return h.keyName;
      });
      if (firstRowKeys.length !== tableHeaderVals.length) console.error('The number of table header does not match the array values');
    }
  }, [rows, columns, ignoreKeys]);
  return React.createElement("div", {
    style: (_b = styles === null || styles === void 0 ? void 0 : styles.tableContainer) !== null && _b !== void 0 ? _b : {},
    className: classes ? classes === null || classes === void 0 ? void 0 : classes.container : "table-row"
  }, React.createElement("table", {
    style: (_c = styles === null || styles === void 0 ? void 0 : styles.rootTable) !== null && _c !== void 0 ? _c : {},
    className: idName
  }, tableCaption && React.createElement(Caption_1.Caption, {
    styles: styles,
    tableCaption: tableCaption
  }), React.createElement(Head_1.HeadColumns, {
    columns: columns,
    styles: styles
  }), React.createElement("tbody", {
    style: (_d = styles === null || styles === void 0 ? void 0 : styles.tableRootBody) !== null && _d !== void 0 ? _d : {}
  }, React.createElement(Rows_1.Rows, {
    columns: columns,
    rows: rows,
    ignoreKeys: ignoreKeys,
    customEvents: customEvents
  })), footer && React.createElement(React.Fragment, null, footer)));
}, "useEffect{}"));

/***/ }),

/***/ "./src/components/Datatable/Head.tsx":
/*!*******************************************!*\
  !*** ./src/components/Datatable/Head.tsx ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
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
exports.HeadColumns = void 0;

var React = __webpack_require__(/*! react */ "react");

function HeadColumns(_a) {
  var columns = _a.columns,
      styles = _a.styles;
  return React.createElement("thead", null, React.createElement("tr", null, columns === null || columns === void 0 ? void 0 : columns.map(function (h) {
    var _a, _b;

    return React.createElement("th", {
      style: (_a = styles === null || styles === void 0 ? void 0 : styles.tableHeader) !== null && _a !== void 0 ? _a : {},
      key: h.keyName + "_x0h"
    }, (_b = h === null || h === void 0 ? void 0 : h.title) !== null && _b !== void 0 ? _b : '');
  })));
}

exports.HeadColumns = HeadColumns;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HeadColumns, "HeadColumns", "C:\\Users\\Bruno\\OneDrive\\\xC1rea de Trabalho\\Projects\\trentim-react-sdk\\src\\components\\Datatable\\Head.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/Datatable/Rows.tsx":
/*!*******************************************!*\
  !*** ./src/components/Datatable/Rows.tsx ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
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
exports.Rows = void 0;

var React = __webpack_require__(/*! react */ "react");

var react_1 = __webpack_require__(/*! react */ "react");

function Rows(_a) {
  var ignoreKeys = _a.ignoreKeys,
      rows = _a.rows,
      columns = _a.columns,
      customEvents = _a.customEvents;
  var tdRef = react_1.useRef(null);
  return React.createElement(React.Fragment, null, rows === null || rows === void 0 ? void 0 : rows.map(function (row, idx) {
    var rowEntries = Object.entries(row);

    if (ignoreKeys && ignoreKeys.length > 0) {
      rowEntries = rowEntries.filter(function (_a) {
        var k = _a[0]; //@ts-ignore

        if (!ignoreKeys.includes(k)) {
          return k;
        }
      });
    }

    return React.createElement("tr", {
      key: idx.toString()
    }, rowEntries.map(function (_a, idx2) {
      var _b, _c;

      var key = _a[0],
          val = _a[1];
      return React.createElement("td", {
        key: (_b = key === null || key === void 0 ? void 0 : key.toString()) !== null && _b !== void 0 ? _b : idx2,
        "data-label": (_c = columns[idx2]) === null || _c === void 0 ? void 0 : _c.title,
        onClick: function onClick() {
          /** Events for custom JSX.Elements provided on the columns*/
          if (customEvents && (customEvents === null || customEvents === void 0 ? void 0 : customEvents.length) > 0) {
            customEvents.map(function (ev) {
              if ((ev === null || ev === void 0 ? void 0 : ev.eventName) && (ev === null || ev === void 0 ? void 0 : ev.objectKey) === key) ev === null || ev === void 0 ? void 0 : ev.onEventAction(row, tdRef === null || tdRef === void 0 ? void 0 : tdRef.current);
            });
          }
        }
      }, val !== null && val !== void 0 ? val : '');
    }));
  }));
}

__signature__(Rows, "useRef{tdRef}");

exports.Rows = Rows;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Rows, "Rows", "C:\\Users\\Bruno\\OneDrive\\\xC1rea de Trabalho\\Projects\\trentim-react-sdk\\src\\components\\Datatable\\Rows.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Datatable = void 0;

var Datatable_1 = __webpack_require__(/*! ./components/Datatable/Datatable */ "./src/components/Datatable/Datatable.tsx");

Object.defineProperty(exports, "Datatable", {
  enumerable: true,
  get: function get() {
    return Datatable_1.Datatable;
  }
});

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.tsx ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bruno\OneDrive\Área de Trabalho\Projects\trentim-react-sdk\src\index.tsx */"./src/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map