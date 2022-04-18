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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/DataTable/index.ts");
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

/***/ "./src/DataTable/Caption.tsx":
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

var React = __webpack_require__("react");

var react_1 = __webpack_require__("react");

function Caption(_a) {
  var captionStyle = _a.captionStyle,
      tableCaption = _a.tableCaption,
      type = _a.type;
  var defaultCaptionStyle = (0, react_1.useMemo)(function () {
    return {
      fontWeight: 600,
      fontSize: 22,
      borderBottom: '1px solid #00000063',
      paddingBottom: 12,
      paddingTop: 12
    };
  }, []);
  return type === 'table' ? React.createElement("caption", {
    style: captionStyle !== null && captionStyle !== void 0 ? captionStyle : defaultCaptionStyle
  }, tableCaption) : type === 'div' ? React.createElement("div", {
    style: __assign({
      display: 'table-caption'
    }, captionStyle !== null && captionStyle !== void 0 ? captionStyle : {})
  }, tableCaption) : null;
}

exports.Caption = Caption;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__assign, "__assign", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\DataTable\\Caption.tsx");
  reactHotLoader.register(Caption, "Caption", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\DataTable\\Caption.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/DataTable/DataTable.tsx":
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
exports.DataTable = void 0;

var React = __webpack_require__("react");

var react_1 = __webpack_require__("react");

var Caption_1 = __webpack_require__("./src/DataTable/Caption.tsx");

var Head_1 = __webpack_require__("./src/DataTable/Head.tsx");

var Rows_1 = __webpack_require__("./src/DataTable/Rows.tsx");

exports.DataTable = (0, react_1.memo)(function (_a) {
  var _b, _c, _d, _e, _f, _g, _h, _j;

  var columns = _a.columns,
      styles = _a.styles,
      footer = _a.footer,
      rows = _a.rows,
      ignoreKeys = _a.ignoreKeys,
      _k = _a.idName,
      idName = _k === void 0 ? "default-table" : _k,
      customEvents = _a.customEvents,
      tableCaption = _a.tableCaption,
      classes = _a.classes,
      type = _a.type,
      onRowClick = _a.onRowClick;
  var parentRef = (0, react_1.useRef)(null);
  (0, react_1.useEffect)(function () {
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

  switch (type) {
    case 'div':
      {
        return React.createElement(TableContainer, {
          tableContainer: (_b = styles === null || styles === void 0 ? void 0 : styles.tableContainer) !== null && _b !== void 0 ? _b : {},
          containerClass: classes ? classes === null || classes === void 0 ? void 0 : classes.container : "datatable-container"
        }, React.createElement("div", {
          style: __assign({
            display: 'table'
          }, (_c = styles === null || styles === void 0 ? void 0 : styles.rootTable) !== null && _c !== void 0 ? _c : {})
        }, tableCaption && React.createElement(Caption_1.Caption, {
          type: 'div',
          captionStyle: (_d = styles === null || styles === void 0 ? void 0 : styles.captionStyle) !== null && _d !== void 0 ? _d : null,
          tableCaption: tableCaption
        }), React.createElement(Head_1.HeadColumns, {
          type: 'div',
          columns: columns,
          styles: styles
        }), React.createElement("div", {
          ref: parentRef,
          style: __assign({
            display: 'table-row-group',
            height: '120px',
            overflow: 'auto'
          }, (_e = styles === null || styles === void 0 ? void 0 : styles.tableRootBody) !== null && _e !== void 0 ? _e : {})
        }, React.createElement(Rows_1.Rows, {
          type: 'div',
          columns: columns,
          rows: rows,
          styles: styles,
          ignoreKeys: ignoreKeys,
          customEvents: customEvents,
          onRowClick: onRowClick
        }))));
      }

    case 'table':
      {
        return React.createElement(TableContainer, {
          tableContainer: (_f = styles === null || styles === void 0 ? void 0 : styles.tableContainer) !== null && _f !== void 0 ? _f : {},
          containerClass: classes ? classes === null || classes === void 0 ? void 0 : classes.container : "datatable-container"
        }, React.createElement("table", {
          style: (_g = styles === null || styles === void 0 ? void 0 : styles.rootTable) !== null && _g !== void 0 ? _g : {},
          className: idName
        }, tableCaption && React.createElement(Caption_1.Caption, {
          type: 'table',
          captionStyle: (_h = styles === null || styles === void 0 ? void 0 : styles.captionStyle) !== null && _h !== void 0 ? _h : null,
          tableCaption: tableCaption
        }), React.createElement(Head_1.HeadColumns, {
          type: 'table',
          columns: columns,
          styles: styles
        }), React.createElement("tbody", {
          style: (_j = styles === null || styles === void 0 ? void 0 : styles.tableRootBody) !== null && _j !== void 0 ? _j : {}
        }, React.createElement(Rows_1.Rows, {
          type: 'table',
          columns: columns,
          rows: rows,
          styles: styles,
          ignoreKeys: ignoreKeys,
          customEvents: customEvents
        })), footer && React.createElement(React.Fragment, null, footer)));
      }

    default:
      return null;
  }
});

var TableContainer = function TableContainer(_a) {
  var tableContainer = _a.tableContainer,
      containerClass = _a.containerClass,
      children = _a.children;
  return React.createElement("div", {
    style: tableContainer !== null && tableContainer !== void 0 ? tableContainer : {},
    className: containerClass !== null && containerClass !== void 0 ? containerClass : "table-row"
  }, children);
};

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__assign, "__assign", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\DataTable\\DataTable.tsx");
  reactHotLoader.register(TableContainer, "TableContainer", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\DataTable\\DataTable.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/DataTable/Head.tsx":
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
exports.HeadColumns = void 0;

var React = __webpack_require__("react");

function HeadColumns(_a) {
  var _b, _c, _d, _e;

  var columns = _a.columns,
      styles = _a.styles,
      type = _a.type;

  switch (type) {
    case 'table':
      {
        return React.createElement("thead", {
          style: (_b = styles === null || styles === void 0 ? void 0 : styles.tableHeaderContainer) !== null && _b !== void 0 ? _b : {}
        }, React.createElement("tr", {
          style: (_c = styles === null || styles === void 0 ? void 0 : styles.tableHeaderRows) !== null && _c !== void 0 ? _c : {}
        }, columns === null || columns === void 0 ? void 0 : columns.map(function (h) {
          var _a, _b;

          return React.createElement("th", {
            style: (_a = styles === null || styles === void 0 ? void 0 : styles.tableHeader) !== null && _a !== void 0 ? _a : {},
            key: "".concat(h.keyName, "_x0h")
          }, (_b = h === null || h === void 0 ? void 0 : h.title) !== null && _b !== void 0 ? _b : '');
        })));
      }

    case 'div':
      {
        return React.createElement("div", {
          style: __assign({
            display: 'table-header-group'
          }, (_d = styles === null || styles === void 0 ? void 0 : styles.tableHeaderContainer) !== null && _d !== void 0 ? _d : {})
        }, React.createElement("div", {
          style: __assign({
            display: 'table-row'
          }, (_e = styles === null || styles === void 0 ? void 0 : styles.tableHeaderRows) !== null && _e !== void 0 ? _e : {})
        }, columns === null || columns === void 0 ? void 0 : columns.map(function (h) {
          var _a, _b;

          return React.createElement("div", {
            style: __assign({
              display: 'table-cell'
            }, (_a = styles === null || styles === void 0 ? void 0 : styles.tableHeader) !== null && _a !== void 0 ? _a : {}),
            key: "".concat(h.keyName, "_x0h")
          }, (_b = h === null || h === void 0 ? void 0 : h.title) !== null && _b !== void 0 ? _b : '');
        })));
      }

    default:
      return null;
  }
}

exports.HeadColumns = HeadColumns;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__assign, "__assign", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\DataTable\\Head.tsx");
  reactHotLoader.register(HeadColumns, "HeadColumns", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\DataTable\\Head.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/DataTable/Rows.tsx":
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

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rows = void 0;

var React = __webpack_require__("react");

var react_1 = __webpack_require__("react");

function Rows(_a) {
  var ignoreKeys = _a.ignoreKeys,
      rows = _a.rows,
      columns = _a.columns,
      customEvents = _a.customEvents,
      styles = _a.styles,
      type = _a.type,
      onRowClick = _a.onRowClick;
  var tdRef = (0, react_1.useRef)(null);
  var tableRowStyle = (0, react_1.useCallback)(function (currentIdx) {
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
  var tableCellStyle = (0, react_1.useCallback)(function (key, idx) {
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
        var _b = __read(_a, 1),
            k = _b[0]; //@ts-ignore


        if (!ignoreKeys.includes(k)) {
          return k;
        }
      });
    }

    var rowsToRender = rowEntries.map(function (_a) {
      var _b = __read(_a, 2),
          rowKey = _b[0],
          rowValue = _b[1];

      var keyName = colKeys.find(function (n) {
        return n === rowKey;
      });
      return [keyName, rowValue];
    });

    switch (type) {
      case 'div':
        {
          return React.createElement("div", {
            onClick: function onClick(ev) {
              if (onRowClick) onRowClick(row, ev);
            },
            style: __assign({
              display: 'table-row'
            }, tableRowStyle(idx))
          }, rowsToRender.map(function (_a, idx2) {
            var _b, _c;

            var _d = __read(_a, 2),
                key = _d[0],
                val = _d[1];

            return React.createElement("div", {
              style: __assign({
                display: 'table-cell'
              }, tableCellStyle(key, idx)),
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
        }

      case 'table':
        {
          return React.createElement("tr", {
            onClick: function onClick(ev) {
              if (onRowClick) onRowClick(row, ev);
            },
            style: tableRowStyle(idx),
            key: idx.toString()
          }, rowsToRender === null || rowsToRender === void 0 ? void 0 : rowsToRender.map(function (_a, idx2) {
            var _b, _c;

            var _d = __read(_a, 2),
                key = _d[0],
                val = _d[1];

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
        }

      default:
        return null;
    }
  }));
}

exports.Rows = Rows;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__assign, "__assign", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\DataTable\\Rows.tsx");
  reactHotLoader.register(__read, "__read", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\DataTable\\Rows.tsx");
  reactHotLoader.register(Rows, "Rows", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\DataTable\\Rows.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/DataTable/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTable = void 0;

var DataTable_1 = __webpack_require__("./src/DataTable/DataTable.tsx");

Object.defineProperty(exports, "DataTable", {
  enumerable: true,
  get: function get() {
    return DataTable_1.DataTable;
  }
});

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map