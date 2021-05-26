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

/***/ "./src/components/DataTable/Caption.tsx":
/*!**********************************************!*\
  !*** ./src/components/DataTable/Caption.tsx ***!
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Caption = void 0;

var React = __webpack_require__(/*! react */ "react");

var react_1 = __webpack_require__(/*! react */ "react");

function Caption(_a) {
  var captionStyle = _a.captionStyle,
      tableCaption = _a.tableCaption;
  var defaultCaptionStyle = react_1.useMemo(function () {
    return {
      fontWeight: 600,
      fontSize: 22,
      borderBottom: '1px solid #00000063',
      paddingBottom: 12,
      paddingTop: 12
    };
  }, []);
  return React.createElement("caption", {
    style: captionStyle !== null && captionStyle !== void 0 ? captionStyle : defaultCaptionStyle
  }, tableCaption);
}

__signature__(Caption, "useMemo{defaultCaptionStyle}");

exports.Caption = Caption;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Caption, "Caption", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\components\\DataTable\\Caption.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/DataTable/DataTable.tsx":
/*!************************************************!*\
  !*** ./src/components/DataTable/DataTable.tsx ***!
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
exports.DataTable = void 0;

var React = __webpack_require__(/*! react */ "react");

var react_1 = __webpack_require__(/*! react */ "react");

var Caption_1 = __webpack_require__(/*! ./Caption */ "./src/components/DataTable/Caption.tsx");

var Head_1 = __webpack_require__(/*! ./Head */ "./src/components/DataTable/Head.tsx");

var Rows_1 = __webpack_require__(/*! ./Rows */ "./src/components/DataTable/Rows.tsx");

exports.DataTable = react_1.memo(__signature__(function (_a) {
  var _b, _c, _d, _e;

  var columns = _a.columns,
      styles = _a.styles,
      footer = _a.footer,
      rows = _a.rows,
      ignoreKeys = _a.ignoreKeys,
      _f = _a.idName,
      idName = _f === void 0 ? "default-table" : _f,
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
    captionStyle: (_d = styles === null || styles === void 0 ? void 0 : styles.captionStyle) !== null && _d !== void 0 ? _d : null,
    tableCaption: tableCaption
  }), React.createElement(Head_1.HeadColumns, {
    columns: columns,
    styles: styles
  }), React.createElement("tbody", {
    style: (_e = styles === null || styles === void 0 ? void 0 : styles.tableRootBody) !== null && _e !== void 0 ? _e : {}
  }, React.createElement(Rows_1.Rows, {
    columns: columns,
    rows: rows,
    styles: styles,
    ignoreKeys: ignoreKeys,
    customEvents: customEvents
  })), footer && React.createElement(React.Fragment, null, footer)));
}, "useEffect{}"));

/***/ }),

/***/ "./src/components/DataTable/Head.tsx":
/*!*******************************************!*\
  !*** ./src/components/DataTable/Head.tsx ***!
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
  var _b, _c;

  var columns = _a.columns,
      styles = _a.styles;
  return React.createElement("thead", {
    style: (_b = styles === null || styles === void 0 ? void 0 : styles.tableHeaderContainer) !== null && _b !== void 0 ? _b : {}
  }, React.createElement("tr", {
    style: (_c = styles === null || styles === void 0 ? void 0 : styles.tableHeaderRows) !== null && _c !== void 0 ? _c : {}
  }, columns === null || columns === void 0 ? void 0 : columns.map(function (h) {
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

  reactHotLoader.register(HeadColumns, "HeadColumns", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\components\\DataTable\\Head.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/DataTable/Rows.tsx":
/*!*******************************************!*\
  !*** ./src/components/DataTable/Rows.tsx ***!
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
exports.Rows = void 0;

var React = __webpack_require__(/*! react */ "react");

var react_1 = __webpack_require__(/*! react */ "react");

function Rows(_a) {
  var ignoreKeys = _a.ignoreKeys,
      rows = _a.rows,
      columns = _a.columns,
      customEvents = _a.customEvents,
      styles = _a.styles;
  var tdRef = react_1.useRef(null);
  var tableRowStyle = react_1.useCallback(function (currentIdx) {
    var _a, _b, _c;

    if ((_a = styles === null || styles === void 0 ? void 0 : styles.tableBodyRow) === null || _a === void 0 ? void 0 : _a.style) {
      var _d = styles.tableBodyRow,
          style = _d.style,
          specficRow = _d.specficRow;
      if (specficRow === null || specficRow === void 0 ? void 0 : specficRow.positions.includes(currentIdx)) return specficRow.style;
      return style;
    } else if ((_c = (_b = styles === null || styles === void 0 ? void 0 : styles.tableBodyRow) === null || _b === void 0 ? void 0 : _b.specficRow) === null || _c === void 0 ? void 0 : _c.style) {
      var specficRow = styles.tableBodyRow.specficRow;
      if (specficRow === null || specficRow === void 0 ? void 0 : specficRow.positions.includes(currentIdx)) return specficRow.style;
      return null;
    }

    return null;
  }, [styles]);
  var tableCellStyle = react_1.useCallback(function (key, idx) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;

    var useSpecificStyle = ((_b = (_a = styles === null || styles === void 0 ? void 0 : styles.tableCell) === null || _a === void 0 ? void 0 : _a.specificCells) === null || _b === void 0 ? void 0 : _b.style) ? true : false;
    var isEqualKey = (_d = (_c = styles === null || styles === void 0 ? void 0 : styles.tableCell) === null || _c === void 0 ? void 0 : _c.specificCells) === null || _d === void 0 ? void 0 : _d.keys.includes(key);
    var positions = ((_g = (_f = (_e = styles === null || styles === void 0 ? void 0 : styles.tableCell) === null || _e === void 0 ? void 0 : _e.specificCells) === null || _f === void 0 ? void 0 : _f.positions) === null || _g === void 0 ? void 0 : _g.length) > 0 ? (_j = (_h = styles === null || styles === void 0 ? void 0 : styles.tableCell) === null || _h === void 0 ? void 0 : _h.specificCells) === null || _j === void 0 ? void 0 : _j.positions : [];
    if ((_k = styles === null || styles === void 0 ? void 0 : styles.tableCell) === null || _k === void 0 ? void 0 : _k.style) return (_l = styles === null || styles === void 0 ? void 0 : styles.tableCell) === null || _l === void 0 ? void 0 : _l.style;

    if (useSpecificStyle) {
      if (isEqualKey) {
        if ((positions === null || positions === void 0 ? void 0 : positions.length) > 0) {
          if (positions.includes(idx)) return (_o = (_m = styles === null || styles === void 0 ? void 0 : styles.tableCell) === null || _m === void 0 ? void 0 : _m.specificCells) === null || _o === void 0 ? void 0 : _o.style;
          return null;
        }

        return (_q = (_p = styles === null || styles === void 0 ? void 0 : styles.tableCell) === null || _p === void 0 ? void 0 : _p.specificCells) === null || _q === void 0 ? void 0 : _q.style;
      }
    }

    return null;
  }, [styles]);
  return React.createElement(React.Fragment, null, rows === null || rows === void 0 ? void 0 : rows.map(function (row, idx) {
    var colKeys = Object.values(columns).map(function (i) {
      return i.keyName;
    });
    var _rows = {};
    colKeys.forEach(function (name) {
      var _a;

      if (Object.prototype.hasOwnProperty.call(row, name)) {
        var element = row[name];
        _rows = __assign(__assign({}, _rows), (_a = {}, _a[name] = element, _a));
      }
    });
    var rowEntries = Object.entries(_rows);

    if (ignoreKeys && ignoreKeys.length > 0) {
      rowEntries = rowEntries.filter(function (_a) {
        var k = _a[0]; //@ts-ignore

        if (!ignoreKeys.includes(k)) {
          return k;
        }
      });
    }

    var rowsToRender = rowEntries.map(function (_a) {
      var rowKey = _a[0],
          rowValue = _a[1];
      var keyName = colKeys.find(function (n) {
        return n === rowKey;
      });
      return [keyName, rowValue];
    }); //console.log(rowEntries, columns);

    return React.createElement("tr", {
      style: tableRowStyle(idx),
      key: idx.toString()
    }, rowsToRender.map(function (_a, idx2) {
      var _b, _c;

      var key = _a[0],
          val = _a[1];
      return React.createElement("td", {
        style: tableCellStyle(key, idx),
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

__signature__(Rows, "useRef{tdRef}\nuseCallback{tableRowStyle}\nuseCallback{tableCellStyle}");

exports.Rows = Rows;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__assign, "__assign", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\components\\DataTable\\Rows.tsx");
  reactHotLoader.register(Rows, "Rows", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\components\\DataTable\\Rows.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/helpers/CacheHandler.ts":
/*!*************************************!*\
  !*** ./src/helpers/CacheHandler.ts ***!
  \*************************************/
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
exports.CacheHandler = void 0;
;

var CacheHandler =
/** @class */
function () {
  function CacheHandler(_json) {
    this._json = _json;
  }

  CacheHandler.prototype.setCache = function (key, object, _a) {
    var _b;

    var type = _a.type;
    var createdDate = new Date();
    var requestedAt = createdDate.toISOString();
    var expireDate = this.setRefreshDate(createdDate);
    var cacheValue = {
      value: object,
      expireDate: expireDate,
      requestedAt: requestedAt
    };
    var stringify = (this === null || this === void 0 ? void 0 : this._json) ? (_b = this === null || this === void 0 ? void 0 : this._json) === null || _b === void 0 ? void 0 : _b.stringify : JSON.stringify;
    if (type === 'local') localStorage.setItem(key, stringify(cacheValue));else sessionStorage.setItem(key, stringify(cacheValue));
  };

  CacheHandler.prototype.getCache = function (key, _a) {
    var type = _a.type;
    var strinfyedValue;
    if (type === 'local') strinfyedValue = localStorage.getItem(key);else strinfyedValue = sessionStorage.getItem(key);
    var cachedValues = this.parseCache(strinfyedValue);
    if ((cachedValues === null || cachedValues === void 0 ? void 0 : cachedValues.value) && (cachedValues === null || cachedValues === void 0 ? void 0 : cachedValues.expireDate) && (cachedValues === null || cachedValues === void 0 ? void 0 : cachedValues.requestedAt)) return {
      value: cachedValues === null || cachedValues === void 0 ? void 0 : cachedValues.value,
      expireDate: cachedValues === null || cachedValues === void 0 ? void 0 : cachedValues.expireDate,
      requestedAt: cachedValues === null || cachedValues === void 0 ? void 0 : cachedValues.requestedAt
    };
    return null;
  };

  CacheHandler.prototype.parseCache = function (key) {
    var _a;

    try {
      var parsedValue = (this === null || this === void 0 ? void 0 : this._json) ? (_a = this === null || this === void 0 ? void 0 : this._json) === null || _a === void 0 ? void 0 : _a.parse(key) : JSON.parse(key);
      var value = parsedValue.value,
          expireDate = parsedValue.expireDate,
          requestedAt = parsedValue.requestedAt;
      return {
        value: value,
        expireDate: expireDate,
        requestedAt: requestedAt
      };
    } catch (_b) {
      return {
        value: null,
        expireDate: null,
        requestedAt: null
      };
    }
  };

  CacheHandler.prototype.removeCacheKey = function (key) {
    localStorage.removeItem(key);
  };

  CacheHandler.prototype.setRefreshDate = function (date, hours) {
    if (hours === void 0) {
      hours = 36;
    }

    var refreshDate = date;
    refreshDate.setHours(refreshDate.getHours() + hours);
    return refreshDate.toISOString();
  };

  return CacheHandler;
}();

exports.CacheHandler = CacheHandler;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CacheHandler, "CacheHandler", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\CacheHandler.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/helpers/FileUtils.ts":
/*!**********************************!*\
  !*** ./src/helpers/FileUtils.ts ***!
  \**********************************/
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

var ConverterOptions_1 = __webpack_require__(/*! ../models/ConverterOptions */ "./src/models/ConverterOptions.ts");

var FileUtils =
/** @class */
function () {
  function FileUtils(mime) {
    this.mime = mime;
    /**
     * Takes any `Blob` object or inherited objects from this interface and convert it to a base64 string.
     * @param blob - Any Blob object, such as `File` and many Others
     * @returns A promise of the base64 string
     */

    this.blobToBase64 = function (blob) {
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      return new Promise(function (resolve) {
        reader.onloadend = function () {
          var b64 = reader.result;
          var metarRegex = /^data:.+;base64,/;
          resolve(b64.replace(metarRegex, ''));
        };
      });
    };
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
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , fetch(url, fetchOptions).then(function (r) {
              return r.blob();
            })];

          case 1:
            fileBlob = _a.sent();
            fileObj = new File([fileBlob], fileInfo.fileName, {
              type: (fileInfo === null || fileInfo === void 0 ? void 0 : fileInfo.fileMime) || this.checkIfHasMime(fileInfo === null || fileInfo === void 0 ? void 0 : fileInfo.fileName),
              lastModified: (fileInfo === null || fileInfo === void 0 ? void 0 : fileInfo.lastModified) || new Date().getTime()
            });
            return [2
            /*return*/
            , fileObj];

          case 2:
            e_1 = _a.sent();
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
    var _a;

    if (!fileName) return null;
    var type = ((_a = this === null || this === void 0 ? void 0 : this.mime) === null || _a === void 0 ? void 0 : _a.contentType(fileName)) || 'application/octet-stream';
    return type;
  };

  FileUtils.prototype.converBase64To = function (base64, fileName) {
    var _a;

    var type = this.checkIfHasMime(fileName);
    var sliceSize = 512;
    var byteCharacters = atob(base64); //method which converts base64 to binary

    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);
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
    return new ConverterOptions_1.ConvertionOptions(blob, byteArrays, type, (_a = this === null || this === void 0 ? void 0 : this.mime) !== null && _a !== void 0 ? _a : undefined);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/helpers/WebpartHeight.ts":
/*!**************************************!*\
  !*** ./src/helpers/WebpartHeight.ts ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebpartHeight = void 0;

var WebpartHeight =
/** @class */
function () {
  function WebpartHeight() {}

  WebpartHeight.prototype.changeSize = function (element) {
    if (element === null || element === void 0 ? void 0 : element.style) element.style.height = '100%';
  };
  /**
   * @param nodeElement - Base Node element that contains a collection of children divs that can reach the target element
   * @param target - The target element such as an class name selector like `my-element` or an `HTMLElement` using
   * ```js
   * document.querySelector('my-element');
   * ```
   * @returns
   */


  WebpartHeight.prototype.changeWebpartHeight = function (nodeElement, target) {
    var _a, _b;

    try {
      var childCanvasChild = null;

      if ((nodeElement === null || nodeElement === void 0 ? void 0 : nodeElement.length) > 1) {
        if ((_b = (_a = nodeElement[0]) === null || _a === void 0 ? void 0 : _a.className) === null || _b === void 0 ? void 0 : _b.includes('ControlZone-control')) childCanvasChild = nodeElement[0];else childCanvasChild = nodeElement[1];
      } else childCanvasChild = nodeElement[0];

      var canChange = this.targetCondition(target, childCanvasChild);
      return canChange ? canChange : this.changeNodeRecursive(childCanvasChild, target);
    } catch (err) {
      console.error('Erro ao atualizar o tamannho das divs');
      return false;
    }
  };

  WebpartHeight.prototype.changeNodeRecursive = function (childCanvasChild, target) {
    var _a;

    if (!(childCanvasChild === null || childCanvasChild === void 0 ? void 0 : childCanvasChild.children)) return this.changeWebpartHeight((_a = childCanvasChild === null || childCanvasChild === void 0 ? void 0 : childCanvasChild.nextElementSibling) === null || _a === void 0 ? void 0 : _a.children, target);else {
      this.changeSize(childCanvasChild);
      return this.changeWebpartHeight(childCanvasChild === null || childCanvasChild === void 0 ? void 0 : childCanvasChild.children, target);
    }
  };

  WebpartHeight.prototype.targetCondition = function (target, child) {
    var _a;

    if (typeof target === 'string') {
      if ((_a = child === null || child === void 0 ? void 0 : child.className) === null || _a === void 0 ? void 0 : _a.startsWith(target)) return true;
      return false;
    } else if (_typeof(target) === 'object') {
      var nodeCondition = child === null || child === void 0 ? void 0 : child.isEqualNode(target);
      if (nodeCondition) return true;
      return false;
    }

    return false;
  };

  return WebpartHeight;
}();

exports.WebpartHeight = WebpartHeight;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(WebpartHeight, "WebpartHeight", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\WebpartHeight.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
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

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebpartHeight = exports.FileUtils = exports.CacheHandler = void 0;

var CacheHandler_1 = __webpack_require__(/*! ./CacheHandler */ "./src/helpers/CacheHandler.ts");

Object.defineProperty(exports, "CacheHandler", {
  enumerable: true,
  get: function get() {
    return CacheHandler_1.CacheHandler;
  }
});

var FileUtils_1 = __webpack_require__(/*! ./FileUtils */ "./src/helpers/FileUtils.ts");

Object.defineProperty(exports, "FileUtils", {
  enumerable: true,
  get: function get() {
    return FileUtils_1.FileUtils;
  }
});

var WebpartHeight_1 = __webpack_require__(/*! ./WebpartHeight */ "./src/helpers/WebpartHeight.ts");

Object.defineProperty(exports, "WebpartHeight", {
  enumerable: true,
  get: function get() {
    return WebpartHeight_1.WebpartHeight;
  }
});

__exportStar(__webpack_require__(/*! ../models/interfaces/index */ "./src/models/interfaces/index.ts"), exports);

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__createBinding, "__createBinding", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\index.ts");
  reactHotLoader.register(__exportStar, "__exportStar", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/hooks/useDebounce.ts":
/*!**********************************!*\
  !*** ./src/hooks/useDebounce.ts ***!
  \**********************************/
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
exports.useDebouncer = void 0;

var react_1 = __webpack_require__(/*! react */ "react");

function useDebouncer(value, delay) {
  var _a = react_1.useState(value),
      debouncedValue = _a[0],
      setDebouncedValue = _a[1];

  react_1.useEffect(function () {
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay);
    return function () {
      clearTimeout(handler);
    };
  }, [value]);
  return debouncedValue;
}

__signature__(useDebouncer, "useState{_a(value)}\nuseEffect{}");

exports.useDebouncer = useDebouncer;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useDebouncer, "useDebouncer", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\hooks\\useDebounce.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

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
exports.DataTable = exports.useDebouncer = exports.WebpartHeight = exports.FileUtils = exports.CacheHandler = void 0;

var index_1 = __webpack_require__(/*! ./helpers/index */ "./src/helpers/index.ts");

Object.defineProperty(exports, "CacheHandler", {
  enumerable: true,
  get: function get() {
    return index_1.CacheHandler;
  }
});
Object.defineProperty(exports, "FileUtils", {
  enumerable: true,
  get: function get() {
    return index_1.FileUtils;
  }
});
Object.defineProperty(exports, "WebpartHeight", {
  enumerable: true,
  get: function get() {
    return index_1.WebpartHeight;
  }
});

var useDebounce_1 = __webpack_require__(/*! ./hooks/useDebounce */ "./src/hooks/useDebounce.ts");

Object.defineProperty(exports, "useDebouncer", {
  enumerable: true,
  get: function get() {
    return useDebounce_1.useDebouncer;
  }
});

var DataTable_1 = __webpack_require__(/*! ./components/DataTable/DataTable */ "./src/components/DataTable/DataTable.tsx");

Object.defineProperty(exports, "DataTable", {
  enumerable: true,
  get: function get() {
    return DataTable_1.DataTable;
  }
});

/***/ }),

/***/ "./src/models/ConverterOptions.ts":
/*!****************************************!*\
  !*** ./src/models/ConverterOptions.ts ***!
  \****************************************/
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
exports.ConvertionOptions = void 0;

var ConvertionOptions =
/** @class */
function () {
  function ConvertionOptions(blob, byteArrays, mimeType, mimeUtils) {
    this.blob = blob;
    this.byteArrays = byteArrays;
    this.mimeType = mimeType;
    this.mimeUtils = mimeUtils;
  }
  /**
   * @returns Return the coneverted value as an blob Object
   */


  ConvertionOptions.prototype.getBlob = function () {
    return this.blob;
  };
  /**
   * @returns Return an array representation of the type `Uint8Array` from the given base64 value.
   */


  ConvertionOptions.prototype.getByteAraray = function () {
    return this.byteArrays;
  };
  /**
   *  Applies only if the a file name was given, if the npm module `mime-types` or an similar module was provided on the class constructor it will return the correct detected mime, otherwhise it will return 'application/octet-stream'
   *
   * @returns The converted mime type, or null if the fileName parameter was not provided.
   */


  ConvertionOptions.prototype.getMimeType = function () {
    return this.mimeUtils.contentType(this.mimeType) || this.mimeType;
  };

  return ConvertionOptions;
}();

exports.ConvertionOptions = ConvertionOptions;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ConvertionOptions, "ConvertionOptions", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\models\\ConverterOptions.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/models/interfaces/ICacheHandler.ts":
/*!************************************************!*\
  !*** ./src/models/interfaces/ICacheHandler.ts ***!
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

/***/ }),

/***/ "./src/models/interfaces/IDataTable.ts":
/*!*********************************************!*\
  !*** ./src/models/interfaces/IDataTable.ts ***!
  \*********************************************/
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

/***/ }),

/***/ "./src/models/interfaces/IFileInfo.ts":
/*!********************************************!*\
  !*** ./src/models/interfaces/IFileInfo.ts ***!
  \********************************************/
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

/***/ }),

/***/ "./src/models/interfaces/IMimeConverter.ts":
/*!*************************************************!*\
  !*** ./src/models/interfaces/IMimeConverter.ts ***!
  \*************************************************/
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

/***/ }),

/***/ "./src/models/interfaces/index.ts":
/*!****************************************!*\
  !*** ./src/models/interfaces/index.ts ***!
  \****************************************/
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

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__exportStar(__webpack_require__(/*! ./ICacheHandler */ "./src/models/interfaces/ICacheHandler.ts"), exports);

__exportStar(__webpack_require__(/*! ./IDataTable */ "./src/models/interfaces/IDataTable.ts"), exports);

__exportStar(__webpack_require__(/*! ./IFileInfo */ "./src/models/interfaces/IFileInfo.ts"), exports);

__exportStar(__webpack_require__(/*! ./IMimeConverter */ "./src/models/interfaces/IMimeConverter.ts"), exports);

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__createBinding, "__createBinding", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\models\\interfaces\\index.ts");
  reactHotLoader.register(__exportStar, "__exportStar", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\models\\interfaces\\index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.tsx ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Projetos Individuais\ReactLibraries\trentim-react-sdk\src\index.tsx */"./src/index.tsx");


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