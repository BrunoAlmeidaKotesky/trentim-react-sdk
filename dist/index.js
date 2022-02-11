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

/***/ "./src/components/Card/InfoCard.tsx":
/*!******************************************!*\
  !*** ./src/components/Card/InfoCard.tsx ***!
  \******************************************/
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
exports.InfoCard = void 0;

var React = __webpack_require__(/*! react */ "react");

var Button_1 = __webpack_require__(/*! @fluentui/react/lib/Button */ "@fluentui/react/lib/Button");

exports.InfoCard = React.memo(function (props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;

  var styles = {
    card: {
      backgroundColor: "rgb(255, 255, 255)",
      border: "1px solid #ababab",
      margin: "0 0 16px",
      borderRadius: "4px",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      width: (props === null || props === void 0 ? void 0 : props.width) || "100%",
      height: (props === null || props === void 0 ? void 0 : props.height) || "150px",
      userSelect: (props === null || props === void 0 ? void 0 : props.enableUserSelect) ? "unset" : "none",
      color: "#333",
      overflow: "hidden"
    },
    top: {
      borderBottom: "1px solid rgb(237, 235, 233)",
      overflow: "hidden",
      height: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 120px",
      columnGap: "8px",
      padding: "16px",
      fontFamily: "\"Segoe UI\", \"Segoe UI Web (West European)\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif"
    },
    col: {
      display: "flex",
      flexDirection: "column"
    },
    rightCol: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: "flex-end"
    },
    leftCol: {
      display: 'flex',
      flexDirection: 'column'
    },
    cardTitle: {
      display: "-webkit-box",
      WebkitLineClamp: "2",
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      fontSize: "18px",
      lineHeight: 1.4
    },
    projectCode: {
      fontSize: "16px",
      opacity: 8
    },
    bottom: {
      display: "flex",
      padding: "6px 16px",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "rgb(250, 249, 248)",
      fontFamily: "\"Segoe UI\", \"Segoe UI Web (West European)\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif"
    },
    circleWrap: {
      display: "inline-flex",
      alignItems: "center"
    },
    circle: {
      width: "16px",
      height: "16px",
      background: "#06ad51",
      borderRadius: "50%",
      border: "1px solid #06ad51",
      display: "inline-block"
    },
    status: {
      display: "inline-block",
      marginLeft: "8px"
    },
    linkButton: {
      width: "32px",
      height: "32px",
      minWidth: "32px"
    }
  };
  return React.createElement("div", {
    onClick: function onClick(e) {
      if (props.onCardClick) props === null || props === void 0 ? void 0 : props.onCardClick(e);
    },
    style: styles.card
  }, React.createElement("div", {
    "data-class-name": "card-top",
    style: styles.top
  }, React.createElement("div", {
    "data-class-name": "card-top-left",
    style: styles.leftCol
  }, React.createElement("div", {
    style: styles.cardTitle
  }, React.createElement("span", null, props === null || props === void 0 ? void 0 : props.cardTitle)), React.createElement("div", {
    style: styles.projectCode
  }, React.createElement("span", null, props === null || props === void 0 ? void 0 : props.cardSubtitle))), React.createElement("div", {
    "data-class-name": "card-top-right",
    style: (_b = (_a = props === null || props === void 0 ? void 0 : props.cardRightColInformation) === null || _a === void 0 ? void 0 : _a.containerStyle) !== null && _b !== void 0 ? _b : styles.rightCol
  }, ((_d = (_c = props === null || props === void 0 ? void 0 : props.cardRightColInformation) === null || _c === void 0 ? void 0 : _c.values) === null || _d === void 0 ? void 0 : _d.length) > 0 && ((_e = props === null || props === void 0 ? void 0 : props.cardRightColInformation) === null || _e === void 0 ? void 0 : _e.values.map(function (value) {
    var _a;

    return React.createElement("div", {
      style: (_a = value === null || value === void 0 ? void 0 : value.style) !== null && _a !== void 0 ? _a : styles.plantName
    }, React.createElement("span", null, value === null || value === void 0 ? void 0 : value.title));
  })))), React.createElement("div", {
    "data-class-name": "card-bottom",
    style: styles.bottom
  }, React.createElement("div", {
    "data-class-name": "card-circle-wrapper",
    style: styles.circleWrap
  }, React.createElement("div", {
    style: __assign(__assign({}, styles.circle), {
      background: (_f = props === null || props === void 0 ? void 0 : props.circleIndicator) === null || _f === void 0 ? void 0 : _f.color,
      border: "1px solid ".concat((_g = props === null || props === void 0 ? void 0 : props.circleIndicator) === null || _g === void 0 ? void 0 : _g.color)
    })
  }), React.createElement("span", {
    style: styles.status
  }, (_h = props === null || props === void 0 ? void 0 : props.circleIndicator) === null || _h === void 0 ? void 0 : _h.title)), React.createElement("div", {
    "data-class-name": "card-button-container"
  }, React.createElement(Button_1.PrimaryButton, {
    onClick: props === null || props === void 0 ? void 0 : props.onClickDownButton,
    style: styles.linkButton,
    iconProps: {
      iconName: (props === null || props === void 0 ? void 0 : props.iconName) || 'Page'
    }
  }))));
});
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__assign, "__assign", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\components\\Card\\InfoCard.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

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

  reactHotLoader.register(__assign, "__assign", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\components\\DataTable\\Caption.tsx");
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

var React = __webpack_require__(/*! react */ "react");

var react_1 = __webpack_require__(/*! react */ "react");

var Caption_1 = __webpack_require__(/*! ./Caption */ "./src/components/DataTable/Caption.tsx");

var Head_1 = __webpack_require__(/*! ./Head */ "./src/components/DataTable/Head.tsx");

var Rows_1 = __webpack_require__(/*! ./Rows */ "./src/components/DataTable/Rows.tsx");

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

  reactHotLoader.register(__assign, "__assign", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\components\\DataTable\\DataTable.tsx");
  reactHotLoader.register(TableContainer, "TableContainer", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\components\\DataTable\\DataTable.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

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

var React = __webpack_require__(/*! react */ "react");

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

  reactHotLoader.register(__assign, "__assign", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\components\\DataTable\\Head.tsx");
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

var React = __webpack_require__(/*! react */ "react");

var react_1 = __webpack_require__(/*! react */ "react");

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

  reactHotLoader.register(__assign, "__assign", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\components\\DataTable\\Rows.tsx");
  reactHotLoader.register(__read, "__read", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\components\\DataTable\\Rows.tsx");
  reactHotLoader.register(Rows, "Rows", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\components\\DataTable\\Rows.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/GridView/Contexts.ts":
/*!*********************************************!*\
  !*** ./src/components/GridView/Contexts.ts ***!
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
exports.FilterPaneContext = exports.ListOptionsContext = void 0;

var react_1 = __webpack_require__(/*! react */ "react");

exports.ListOptionsContext = (0, react_1.createContext)({
  enableFilter: true,
  enableSearch: true,
  customButtons: [],
  setIsFilterPanelOpen: undefined
});
exports.FilterPaneContext = (0, react_1.createContext)({
  isOpen: false,
  onApply: undefined,
  availableFilters: [],
  onCancel: undefined,
  onClose: undefined,
  panelTitle: ''
});

/***/ }),

/***/ "./src/components/GridView/GridView.tsx":
/*!**********************************************!*\
  !*** ./src/components/GridView/GridView.tsx ***!
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

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridView = void 0;

var React = __webpack_require__(/*! react */ "react");

var react_1 = __webpack_require__(/*! react */ "react");

var Contexts_1 = __webpack_require__(/*! ./Contexts */ "./src/components/GridView/Contexts.ts");

var styles_1 = __webpack_require__(/*! ./styles */ "./src/components/GridView/styles.ts");

var DetailsList_1 = __webpack_require__(/*! @fluentui/react/lib/DetailsList */ "@fluentui/react/lib/DetailsList");

var Sticky_1 = __webpack_require__(/*! @fluentui/react/lib/Sticky */ "@fluentui/react/lib/Sticky");

var PanelFilter_1 = __webpack_require__(/*! ./PanelFilter */ "./src/components/GridView/PanelFilter.tsx");

var ListOptions_1 = __webpack_require__(/*! ./ListOptions */ "./src/components/GridView/ListOptions.tsx");

var Utils_1 = __webpack_require__(/*! ../../helpers/Utils */ "./src/helpers/Utils.ts");

var GridView = function GridView(props) {
  var _a, _b, _c, _d, _e, _f;

  var _g = __read((0, react_1.useState)(props === null || props === void 0 ? void 0 : props.columns), 2),
      cols = _g[0],
      setCols = _g[1];

  var _h = __read((0, react_1.useState)(props === null || props === void 0 ? void 0 : props.rows), 2),
      allRows = _h[0],
      setAllRows = _h[1];

  var _j = __read((0, react_1.useState)((_a = props === null || props === void 0 ? void 0 : props.rows) !== null && _a !== void 0 ? _a : []), 2),
      actualRows = _j[0],
      setActualRows = _j[1];

  var _k = __read((0, react_1.useState)(props === null || props === void 0 ? void 0 : props.groups), 2),
      groups = _k[0],
      setGroups = _k[1];

  var _l = __read((0, react_1.useState)(false), 2),
      isFilterPanelOpen = _l[0],
      setIsFilterPanel = _l[1];

  (0, react_1.useEffect)(function () {
    var _a;

    if ((_a = props === null || props === void 0 ? void 0 : props.columns) === null || _a === void 0 ? void 0 : _a.length) {
      var columns = props === null || props === void 0 ? void 0 : props.columns;
      var convertedColumns = columns.map(function (c) {
        var _a, _b, _c;

        if (((_a = c === null || c === void 0 ? void 0 : c.key) === null || _a === void 0 ? void 0 : _a.includes('.')) || ((_b = c === null || c === void 0 ? void 0 : c.fieldName) === null || _b === void 0 ? void 0 : _b.includes('.'))) {
          c.onRender = function (item, _2) {
            var _a, _b;

            var fieldValue = (_b = Utils_1.Utils.findObjectByPath(item, (_a = c === null || c === void 0 ? void 0 : c.fieldName) === null || _a === void 0 ? void 0 : _a.split('.'))) !== null && _b !== void 0 ? _b : '-';
            return React.createElement("span", null, fieldValue);
          };

          return c;
        } else if ((_c = c === null || c === void 0 ? void 0 : c.dateConvertionOptions) === null || _c === void 0 ? void 0 : _c.shouldConvertToLocaleString) {
          c.onRender = function (item, _2) {
            var _a, _b, _c;

            var fieldValue = Utils_1.Utils.convertIsoToLocaleString(item[(_a = c === null || c === void 0 ? void 0 : c.fieldName) !== null && _a !== void 0 ? _a : c === null || c === void 0 ? void 0 : c.key], (_b = c === null || c === void 0 ? void 0 : c.dateConvertionOptions) === null || _b === void 0 ? void 0 : _b.locales, (_c = c === null || c === void 0 ? void 0 : c.dateConvertionOptions) === null || _c === void 0 ? void 0 : _c.formatOptions);
            return React.createElement("span", null, fieldValue);
          };
        }

        return c;
      });
      setCols(convertedColumns);
    }
  }, [props === null || props === void 0 ? void 0 : props.columns]);
  (0, react_1.useEffect)(function () {
    if (props.listType === 'file' || props.listType === 'folder') setCols(__spreadArray([{
      key: 'fileType',
      name: 'File Type',
      className: styles_1.classNames.fileIconCell,
      iconClassName: styles_1.classNames.fileIconHeaderIcon,
      ariaLabel: 'Column operations for File type, Press to sort on File type',
      iconName: 'Page',
      isIconOnly: true,
      fieldName: 'name',
      minWidth: 16,
      maxWidth: 16,
      onColumnClick: onColumnClick,
      onRender: function onRender(item) {
        var _a, _b;

        return React.createElement("img", {
          src: (_a = item === null || item === void 0 ? void 0 : item.file) === null || _a === void 0 ? void 0 : _a.iconUrl,
          className: styles_1.classNames.fileIconImg,
          alt: "".concat((_b = item === null || item === void 0 ? void 0 : item.file) === null || _b === void 0 ? void 0 : _b.fileType, " file icon")
        });
      }
    }, {
      key: 'name',
      name: 'Nome',
      fieldName: 'name',
      minWidth: 210,
      maxWidth: 350,
      isRowHeader: true,
      isResizable: true,
      isSorted: true,
      isSortedDescending: false,
      sortAscendingAriaLabel: 'Sorted A to Z',
      sortDescendingAriaLabel: 'Sorted Z to A',
      onColumnClick: onColumnClick,
      onRender: function onRender(item) {
        var _a;

        return React.createElement("span", null, (_a = item === null || item === void 0 ? void 0 : item.file) === null || _a === void 0 ? void 0 : _a.name);
      },
      data: 'string',
      isPadded: true
    }], __read(cols), false));else setCols(props === null || props === void 0 ? void 0 : props.columns);
  }, [props === null || props === void 0 ? void 0 : props.listType]);
  (0, react_1.useEffect)(function () {
    setActualRows(props === null || props === void 0 ? void 0 : props.rows);
    setAllRows(props === null || props === void 0 ? void 0 : props.rows);
  }, [(_b = props === null || props === void 0 ? void 0 : props.rows) === null || _b === void 0 ? void 0 : _b.length]);
  (0, react_1.useEffect)(function () {
    if ((props === null || props === void 0 ? void 0 : props.listType) === 'folder' && (props === null || props === void 0 ? void 0 : props.rowsAsNode)) {
      var nodes = props.rowsAsNode;
      var items = [];
      var groups_1 = [];
      Utils_1.Utils.processNodes(nodes, groups_1, items, 0);
      setActualRows(items);
      setGroups(groups_1);
    }
  }, [props === null || props === void 0 ? void 0 : props.rowsAsNode, props === null || props === void 0 ? void 0 : props.listType]);
  /**TO-DO: Implement this method to work with `INode[]` */

  var onColumnClick = function onColumnClick(_, column) {
    if (props === null || props === void 0 ? void 0 : props.rowsAsNode) return;
    var newColumns = cols.slice();
    var currColumn = newColumns.filter(function (currCol) {
      return column.key === currCol.key;
    })[0];
    newColumns.forEach(function (newCol) {
      if (newCol === currColumn) {
        currColumn.isSortedDescending = !currColumn.isSortedDescending;
        currColumn.isSorted = true;
      } else {
        newCol.isSorted = false;
        newCol.isSortedDescending = true;
      }
    });
    var newItems = Utils_1.Utils.copyAndSort(actualRows, currColumn === null || currColumn === void 0 ? void 0 : currColumn.fieldName, currColumn === null || currColumn === void 0 ? void 0 : currColumn.isSortedDescending);
    setCols(newColumns);
    setActualRows(newItems);
  };

  var onRowClick = function onRowClick(item) {
    if (props === null || props === void 0 ? void 0 : props.onRowClick) props === null || props === void 0 ? void 0 : props.onRowClick(item);
  };

  var buildFilters = function buildFilters() {
    var _a;

    var filters = [];

    var _loop_1 = function _loop_1(index) {
      var c = cols[index];
      var validRows = allRows === null || allRows === void 0 ? void 0 : allRows.every(function (r) {
        var _a;

        return r[(_a = c === null || c === void 0 ? void 0 : c.fieldName) !== null && _a !== void 0 ? _a : c === null || c === void 0 ? void 0 : c.key];
      });

      if (validRows) {
        var options = (_a = allRows === null || allRows === void 0 ? void 0 : allRows.filter(function (d) {
          return d;
        })) === null || _a === void 0 ? void 0 : _a.map(function (data, idx) {
          var _a, _b, _c;

          return {
            key: idx + "_" + (c === null || c === void 0 ? void 0 : c.key),
            text: (_c = data === null || data === void 0 ? void 0 : data[(_b = (_a = c === null || c === void 0 ? void 0 : c.key) !== null && _a !== void 0 ? _a : c === null || c === void 0 ? void 0 : c.fieldName) !== null && _b !== void 0 ? _b : c === null || c === void 0 ? void 0 : c.key]) === null || _c === void 0 ? void 0 : _c.toString(),
            data: data
          };
        }); //Remove duplicates from options checking if the text repeats.

        var uniqueOptions = options === null || options === void 0 ? void 0 : options.filter(function (obj, pos, arr) {
          return arr.map(function (mapObj) {
            return mapObj === null || mapObj === void 0 ? void 0 : mapObj.text;
          }).indexOf(obj === null || obj === void 0 ? void 0 : obj.text) === pos;
        });
        filters.push({
          key: c === null || c === void 0 ? void 0 : c.key,
          options: uniqueOptions,
          enableMultiple: true,
          name: c === null || c === void 0 ? void 0 : c.name
        });
      }
    };

    for (var index = 0; index < cols.length; index++) {
      _loop_1(index);
    } //Remove repeated values from filters, cehcking if the text inside the options is repeated


    return filters;
  };

  var panelConfig = {
    isOpen: isFilterPanelOpen,
    onApply: function onApply(selectedItems) {
      //filter the rows according to the selected items, where the key is the rootItemKey
      var andFilterAggregation = [];
      var orFilterAggregation = [];

      var _loop_2 = function _loop_2(idx) {
        var e_1, _a;

        var row = allRows[idx];

        var _loop_3 = function _loop_3(key, _) {
          var sameKeyFromMap = __spreadArray([], __read(selectedItems), false).filter(function (s) {
            var k = s[0];
            return k.split("_")[1] === key;
          });

          if ((sameKeyFromMap === null || sameKeyFromMap === void 0 ? void 0 : sameKeyFromMap.length) > 0) {
            sameKeyFromMap.forEach(function (_, idx) {
              var isSameValue = sameKeyFromMap[idx][1]['data'][key] === row[key];

              if (isSameValue && !andFilterAggregation.map(function (r) {
                return r === null || r === void 0 ? void 0 : r.Id;
              }).includes(row === null || row === void 0 ? void 0 : row.Id)) {
                andFilterAggregation = __spreadArray(__spreadArray([], __read(andFilterAggregation), false), [row], false);
              }
            });
          }
        };

        try {
          for (var _b = (e_1 = void 0, __values(Object.entries(row))), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2),
                key = _d[0],
                _ = _d[1];

            _loop_3(key, _);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      };

      for (var idx = 0; idx < (allRows === null || allRows === void 0 ? void 0 : allRows.length); idx++) {
        _loop_2(idx);
      }

      console.log(andFilterAggregation, orFilterAggregation);
      if (andFilterAggregation.length > 0) setActualRows(andFilterAggregation);else setActualRows(allRows);
    },
    onCancel: function onCancel() {
      setIsFilterPanel(false);
      setActualRows(allRows);
    },
    onClose: function onClose() {
      return setIsFilterPanel(false);
    },
    //The available filters are the ones that are defined in the `columns` prop, and the options are the rows that are defined in the `rows` prop according to the key
    availableFilters: buildFilters(),
    panelTitle: (_c = props === null || props === void 0 ? void 0 : props.filterPanelTitle) !== null && _c !== void 0 ? _c : 'Filtrar'
  };
  return React.createElement(Contexts_1.FilterPaneContext.Provider, {
    value: panelConfig
  }, React.createElement(Contexts_1.ListOptionsContext.Provider, {
    value: __assign({
      onSearchItem: function onSearchItem(text, key) {
        var filteredRows = text ? allRows === null || allRows === void 0 ? void 0 : allRows.filter(function (item) {
          var _a;

          var isKeyInsideFileObj = (item === null || item === void 0 ? void 0 : item.file) ? (_a = Object.keys(item === null || item === void 0 ? void 0 : item.file)) === null || _a === void 0 ? void 0 : _a.includes(key) : false;
          var itemValue = isKeyInsideFileObj ? item === null || item === void 0 ? void 0 : item.file[key] : item === null || item === void 0 ? void 0 : item[key];
          console.log(key, itemValue);
          return itemValue === null || itemValue === void 0 ? void 0 : itemValue.toLowerCase().includes(text.toLowerCase());
        }) : allRows;
        setActualRows(filteredRows);
      },
      setIsFilterPanelOpen: function setIsFilterPanelOpen(value) {
        setIsFilterPanel(value);
      }
    }, props === null || props === void 0 ? void 0 : props.headerOptions)
  }, React.createElement("div", null, React.createElement(ListOptions_1.ListOptions, null), React.createElement("div", {
    "data-is-scrollable": "true",
    style: {
      position: 'relative',
      zIndex: 0
    }
  }, React.createElement(DetailsList_1.DetailsList, __assign({}, props === null || props === void 0 ? void 0 : props.detailsListProps, {
    onRenderRow: function onRenderRow(p, defaultRender) {
      return React.createElement("div", {
        onClick: function onClick() {
          return onRowClick(p === null || p === void 0 ? void 0 : p.item);
        }
      }, defaultRender(__assign(__assign({}, p), {
        styles: {
          root: {
            cursor: (props === null || props === void 0 ? void 0 : props.onRowClick) ? 'pointer' : 'default'
          }
        }
      })));
    },
    items: actualRows,
    columns: cols,
    groups: groups,
    groupProps: {
      isAllGroupsCollapsed: (props === null || props === void 0 ? void 0 : props.groups) ? ((_d = props === null || props === void 0 ? void 0 : props.groups.filter(function (gr) {
        return !(gr === null || gr === void 0 ? void 0 : gr.isCollapsed);
      })) === null || _d === void 0 ? void 0 : _d.length) === 0 : true,
      collapseAllVisibility: DetailsList_1.CollapseAllVisibility.visible,
      onRenderHeader: function onRenderHeader(props, defaultRender) {
        if (!props.group.name) return React.createElement(React.Fragment, null);
        return defaultRender(props);
      }
    },
    layoutMode: DetailsList_1.DetailsListLayoutMode.fixedColumns,
    isHeaderVisible: true,
    onRenderDetailsHeader: function onRenderDetailsHeader(headerProps, defaultRender) {
      return React.createElement(Sticky_1.Sticky, {
        key: headerProps === null || headerProps === void 0 ? void 0 : headerProps.key,
        stickyPosition: Sticky_1.StickyPositionType.Header,
        stickyBackgroundColor: "transparent"
      }, React.createElement("div", {
        key: headerProps === null || headerProps === void 0 ? void 0 : headerProps.key
      }, defaultRender(headerProps)));
    },
    checkboxVisibility: (_f = (_e = props === null || props === void 0 ? void 0 : props.detailsListProps) === null || _e === void 0 ? void 0 : _e.checkboxVisibility) !== null && _f !== void 0 ? _f : DetailsList_1.CheckboxVisibility.hidden
  }))), isFilterPanelOpen && React.createElement(PanelFilter_1.PanelFilter, null))));
};

exports.GridView = GridView;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__assign, "__assign", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\components\\GridView\\GridView.tsx");
  reactHotLoader.register(__read, "__read", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\components\\GridView\\GridView.tsx");
  reactHotLoader.register(__spreadArray, "__spreadArray", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\components\\GridView\\GridView.tsx");
  reactHotLoader.register(__values, "__values", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\components\\GridView\\GridView.tsx");
  reactHotLoader.register(GridView, "GridView", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\components\\GridView\\GridView.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/GridView/ListOptions.tsx":
/*!*************************************************!*\
  !*** ./src/components/GridView/ListOptions.tsx ***!
  \*************************************************/
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
exports.ListOptions = void 0;

var React = __webpack_require__(/*! react */ "react");

var react_1 = __webpack_require__(/*! @fluentui/react */ "@fluentui/react");

var Contexts_1 = __webpack_require__(/*! ./Contexts */ "./src/components/GridView/Contexts.ts");

var ListOptions = function ListOptions() {
  var _a = React.useContext(Contexts_1.ListOptionsContext),
      customButtons = _a.customButtons,
      enableFilter = _a.enableFilter,
      enableSearch = _a.enableSearch,
      searchKey = _a.searchKey,
      onSearchItem = _a.onSearchItem,
      setIsFilterPanelOpen = _a.setIsFilterPanelOpen;

  var defaultStyles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      gap: 4,
      justifyContent: 'end',
      margin: '8px 0'
    }
  };
  return React.createElement("div", {
    "data-class-name": "grid-view-header-container",
    style: defaultStyles.container
  }, React.createElement(react_1.DefaultButton, {
    onClick: function onClick(_) {
      return '';
    },
    styles: {
      label: {
        fontSize: 14
      }
    },
    iconProps: {
      iconName: 'GroupList'
    }
  }), React.createElement(react_1.DefaultButton, {
    onClick: function onClick(_) {
      return '';
    },
    styles: {
      label: {
        fontSize: 14
      }
    },
    iconProps: {
      iconName: 'ViewList'
    }
  }), (customButtons === null || customButtons === void 0 ? void 0 : customButtons.length) > 0 && (customButtons === null || customButtons === void 0 ? void 0 : customButtons.map(function (b) {
    return React.createElement(react_1.PrimaryButton, __assign({
      className: b === null || b === void 0 ? void 0 : b.className,
      styles: {
        label: {
          fontSize: 14
        }
      }
    }, b === null || b === void 0 ? void 0 : b.props), b === null || b === void 0 ? void 0 : b.text);
  })), enableSearch && searchKey && React.createElement(react_1.TextField, {
    onChange: function onChange(_, newValue) {
      return onSearchItem(newValue, searchKey);
    },
    iconProps: {
      iconName: 'Search'
    },
    styles: {
      root: {
        width: 320
      },
      icon: {
        color: '[theme: themePrimary, default: #0078D4]'
      }
    }
  }), enableFilter && React.createElement(react_1.DefaultButton, {
    onClick: function onClick(_) {
      return setIsFilterPanelOpen(true);
    },
    styles: {
      label: {
        fontSize: 14
      }
    },
    iconProps: {
      iconName: 'Filter'
    }
  }));
};

__signature__(ListOptions, "useContext{_a}");

exports.ListOptions = ListOptions;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__assign, "__assign", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\components\\GridView\\ListOptions.tsx");
  reactHotLoader.register(ListOptions, "ListOptions", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\components\\GridView\\ListOptions.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/GridView/PanelFilter.tsx":
/*!*************************************************!*\
  !*** ./src/components/GridView/PanelFilter.tsx ***!
  \*************************************************/
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
exports.PanelFilter = void 0;

var React = __webpack_require__(/*! react */ "react");

var react_1 = __webpack_require__(/*! react */ "react");

var Contexts_1 = __webpack_require__(/*! ./Contexts */ "./src/components/GridView/Contexts.ts");

exports.PanelFilter = React.memo(function () {
  var _a = __read((0, react_1.useState)(new Map()), 2),
      actualFilteredValues = _a[0],
      setActualFilteredValues = _a[1];

  var _b = (0, react_1.useContext)(Contexts_1.FilterPaneContext),
      isOpen = _b.isOpen,
      onClose = _b.onClose,
      availableFilters = _b.availableFilters,
      panelTitle = _b.panelTitle,
      onCancel = _b.onCancel,
      onApply = _b.onApply;

  var _c = __read((0, react_1.useMemo)(function () {
    var Panel = (0, react_1.lazy)(function () {
      return Promise.resolve().then(function () {
        return __webpack_require__(/*! @fluentui/react/lib/Panel */ "@fluentui/react/lib/Panel");
      }).then(function (_a) {
        var Panel = _a.Panel;
        return {
          "default": Panel
        };
      });
    });
    var DropDown = (0, react_1.lazy)(function () {
      return Promise.resolve().then(function () {
        return __webpack_require__(/*! @fluentui/react/lib/Dropdown */ "@fluentui/react/lib/Dropdown");
      }).then(function (_a) {
        var Dropdown = _a.Dropdown;
        return {
          "default": Dropdown
        };
      });
    });
    var PrimaryButton = (0, react_1.lazy)(function () {
      return Promise.resolve().then(function () {
        return __webpack_require__(/*! @fluentui/react/lib/Button */ "@fluentui/react/lib/Button");
      }).then(function (_a) {
        var PrimaryButton = _a.PrimaryButton;
        return {
          "default": PrimaryButton
        };
      });
    });
    var DefaultButton = (0, react_1.lazy)(function () {
      return Promise.resolve().then(function () {
        return __webpack_require__(/*! @fluentui/react/lib/Button */ "@fluentui/react/lib/Button");
      }).then(function (_a) {
        var DefaultButton = _a.DefaultButton;
        return {
          "default": DefaultButton
        };
      });
    });
    return [Panel, DropDown, PrimaryButton, DefaultButton];
  }, []), 4),
      FluentPanel = _c[0],
      Dropdown = _c[1],
      PrimaryButton = _c[2],
      DefaultButton = _c[3];

  var _onChange = function onChange(rootItemKey, option) {
    //If the current option is selected and is not already on the actualFilteredValues map, add it
    //else if the current option is not select and all the other options are not select too, remove the key from the map
    var copyMap = new Map(actualFilteredValues);

    if (option.selected && !copyMap.has(option === null || option === void 0 ? void 0 : option.key)) {
      copyMap.set(option.key, {
        rootItemKey: rootItemKey,
        itemKey: option.key,
        data: option === null || option === void 0 ? void 0 : option.data,
        text: option === null || option === void 0 ? void 0 : option.text
      });
    } else if (!option.selected && copyMap.has(option === null || option === void 0 ? void 0 : option.key)) {
      copyMap["delete"](option === null || option === void 0 ? void 0 : option.key);
    }

    setActualFilteredValues(copyMap);
  };

  if (!isOpen) return null;
  return React.createElement(react_1.Suspense, {
    fallback: React.createElement("div", null, "...")
  }, React.createElement(FluentPanel, {
    onRenderFooter: function onRenderFooter(_) {
      return React.createElement("div", null, React.createElement(PrimaryButton, {
        onClick: function onClick() {
          return onApply(actualFilteredValues);
        },
        styles: {
          root: {
            marginRight: 8
          }
        }
      }, "Aplicar"), React.createElement(DefaultButton, {
        onClick: onCancel
      }, "Cancelar"));
    },
    isFooterAtBottom: true,
    onDismiss: onClose,
    isOpen: isOpen
  }, React.createElement("h2", null, panelTitle), availableFilters === null || availableFilters === void 0 ? void 0 : availableFilters.map(function (filter) {
    var _a;

    var options = (_a = filter === null || filter === void 0 ? void 0 : filter.options) === null || _a === void 0 ? void 0 : _a.map(function (_a) {
      var key = _a.key,
          text = _a.text,
          data = _a.data;
      return {
        key: key,
        text: text,
        data: data
      };
    });
    return React.createElement(Dropdown, {
      key: filter === null || filter === void 0 ? void 0 : filter.key,
      options: options,
      multiSelect: filter === null || filter === void 0 ? void 0 : filter.enableMultiple,
      label: filter === null || filter === void 0 ? void 0 : filter.name,
      onChange: function onChange(_, opt) {
        return _onChange(filter === null || filter === void 0 ? void 0 : filter.key, opt);
      }
    });
  })));
});
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__read, "__read", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\components\\GridView\\PanelFilter.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/GridView/styles.ts":
/*!*******************************************!*\
  !*** ./src/components/GridView/styles.ts ***!
  \*******************************************/
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
exports.classNames = void 0;

var Styling_1 = __webpack_require__(/*! @fluentui/react/lib/Styling */ "@fluentui/react/lib/Styling");

exports.classNames = (0, Styling_1.mergeStyleSets)({
  fileIconHeaderIcon: {
    padding: 0,
    fontSize: '16px'
  },
  fileIconCell: {
    textAlign: 'center',
    selectors: {
      '&:before': {
        content: '.',
        display: 'inline-block',
        verticalAlign: 'middle',
        height: '100%',
        width: '0px',
        visibility: 'hidden'
      }
    }
  },
  fileIconImg: {
    verticalAlign: 'middle',
    maxHeight: '16px',
    maxWidth: '16px'
  },
  controlWrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  exampleToggle: {
    display: 'inline-block',
    marginBottom: '10px',
    marginRight: '30px'
  },
  selectionDetails: {
    marginBottom: '20px'
  }
});

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
    var _a, _b, _c;

    this._json = _json;
    this.stringify = ((_a = this === null || this === void 0 ? void 0 : this._json) === null || _a === void 0 ? void 0 : _a.stringify) ? this._json.stringify : JSON.stringify;
    this.parse = ((_b = this === null || this === void 0 ? void 0 : this._json) === null || _b === void 0 ? void 0 : _b.parse) ? (_c = this._json) === null || _c === void 0 ? void 0 : _c.parse : JSON.parse;
  }

  CacheHandler.prototype.setCache = function (key, object, _a) {
    var type = _a.type;
    var createdDate = new Date();
    var requestedAt = createdDate.toISOString();
    var expireDate = this.setRefreshDate(createdDate);
    var cacheValue = {
      value: object,
      expireDate: expireDate,
      requestedAt: requestedAt
    };
    if (type === 'local') localStorage.setItem(key, this.stringify(cacheValue));else sessionStorage.setItem(key, this.stringify(cacheValue));
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
    try {
      var parsedValue = this.parse(key);
      var value = parsedValue.value,
          expireDate = parsedValue.expireDate,
          requestedAt = parsedValue.requestedAt;
      return {
        value: value,
        expireDate: expireDate,
        requestedAt: requestedAt
      };
    } catch (_a) {
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
     * @param blob - Any Blob object, such as `File` and other inherited objects from this interface.
     * @returns A promise of the base64 string.
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

/***/ "./src/helpers/Utils.ts":
/*!******************************!*\
  !*** ./src/helpers/Utils.ts ***!
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

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = void 0;

var Utils =
/** @class */
function () {
  function Utils() {}

  Utils.findObjectByPath = function (objectIn, path) {
    var _a;

    try {
      var obj = objectIn;

      for (var i = 0; i <= path.length - 1; i++) {
        var item = path[i];
        obj = obj[item];
      }

      return (_a = obj) !== null && _a !== void 0 ? _a : null;
    } catch (e) {
      return null;
    }
  };

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

  Utils.processNodes = function (nodeItems, groups, items, level) {
    // end of recursion
    if (!nodeItems || !(nodeItems === null || nodeItems === void 0 ? void 0 : nodeItems.length)) return; // processing current level of the tree

    nodeItems.forEach(function (nodeItem) {
      var _a;

      var newGroup = {
        key: nodeItem.key,
        name: nodeItem.title,
        startIndex: items === null || items === void 0 ? void 0 : items.length,
        count: 0,
        children: [],
        level: level,
        data: nodeItem // storing initial INode instance in the group's data

      };
      groups.push(newGroup);

      if ((nodeItem === null || nodeItem === void 0 ? void 0 : nodeItem.items) && ((_a = nodeItem === null || nodeItem === void 0 ? void 0 : nodeItem.items) === null || _a === void 0 ? void 0 : _a.length)) {
        // adding items to the flat array
        items.push.apply(items, __spreadArray([], __read(nodeItem === null || nodeItem === void 0 ? void 0 : nodeItem.items), false));
      } // processing child nodes


      Utils.processNodes(nodeItem.children, newGroup.children, items, level + 1); // current group count is a sum of group's leaf items and leaf items in all child nodes

      newGroup.count = (items === null || items === void 0 ? void 0 : items.length) - newGroup.startIndex;
    });
  };

  Utils.copyAndSort = function (items, columnKey, isSortedDescending) {
    var key = columnKey;
    return items.slice(0).sort(function (a, b) {
      return (isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1;
    });
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

  reactHotLoader.register(__read, "__read", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\Utils.ts");
  reactHotLoader.register(__spreadArray, "__spreadArray", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\Utils.ts");
  reactHotLoader.register(Utils, "Utils", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\Utils.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/helpers/WebpartAddons.ts":
/*!**************************************!*\
  !*** ./src/helpers/WebpartAddons.ts ***!
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
   * @returns
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
      console.error('Erro ao atualizar o tamannho das divs');
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
exports.WebpartAddons = exports.FileUtils = exports.CacheHandler = void 0;

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

var WebpartAddons_1 = __webpack_require__(/*! ./WebpartAddons */ "./src/helpers/WebpartAddons.ts");

Object.defineProperty(exports, "WebpartAddons", {
  enumerable: true,
  get: function get() {
    return WebpartAddons_1.WebpartAddons;
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

/***/ "./src/hooks/index.ts":
/*!****************************!*\
  !*** ./src/hooks/index.ts ***!
  \****************************/
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
exports.usePrevious = exports.useOuterClick = exports.useEscape = exports.useDebounce = exports.useWindowSize = void 0;

var useWindowSize_1 = __webpack_require__(/*! ./useWindowSize */ "./src/hooks/useWindowSize.ts");

Object.defineProperty(exports, "useWindowSize", {
  enumerable: true,
  get: function get() {
    return useWindowSize_1.useWindowSize;
  }
});

var useDebounce_1 = __webpack_require__(/*! ./useDebounce */ "./src/hooks/useDebounce.ts");

Object.defineProperty(exports, "useDebounce", {
  enumerable: true,
  get: function get() {
    return useDebounce_1.useDebounce;
  }
});

var useEscape_1 = __webpack_require__(/*! ./useEscape */ "./src/hooks/useEscape.ts");

Object.defineProperty(exports, "useEscape", {
  enumerable: true,
  get: function get() {
    return useEscape_1.useEscape;
  }
});

var useOuterClick_1 = __webpack_require__(/*! ./useOuterClick */ "./src/hooks/useOuterClick.ts");

Object.defineProperty(exports, "useOuterClick", {
  enumerable: true,
  get: function get() {
    return useOuterClick_1.useOuterClick;
  }
});

var usePrevious_1 = __webpack_require__(/*! ./usePrevious */ "./src/hooks/usePrevious.ts");

Object.defineProperty(exports, "usePrevious", {
  enumerable: true,
  get: function get() {
    return usePrevious_1.usePrevious;
  }
});

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
exports.useDebounce = void 0;

var react_1 = __webpack_require__(/*! react */ "react");

function useDebounce(value, delay) {
  var _a = __read((0, react_1.useState)(value), 2),
      debouncedValue = _a[0],
      setDebouncedValue = _a[1];

  (0, react_1.useEffect)(function () {
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay);
    return function () {
      clearTimeout(handler);
    };
  }, [value]);
  return debouncedValue;
}

exports.useDebounce = useDebounce;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__read, "__read", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\hooks\\useDebounce.ts");
  reactHotLoader.register(useDebounce, "useDebounce", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\hooks\\useDebounce.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/hooks/useEscape.ts":
/*!********************************!*\
  !*** ./src/hooks/useEscape.ts ***!
  \********************************/
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
exports.useEscape = void 0;

var react_1 = __webpack_require__(/*! react */ "react");

function useEscape(onEscape) {
  (0, react_1.useEffect)(function () {
    var handleEsc = function handleEsc(event) {
      var key = (event === null || event === void 0 ? void 0 : event.key) || (event === null || event === void 0 ? void 0 : event.keyCode);
      if (key === 27 || key === "Escape") onEscape();
    }; //@ts-ignore


    window.addEventListener('keydown', handleEsc);
    return function () {
      //@ts-ignore
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
}

exports.useEscape = useEscape;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useEscape, "useEscape", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\hooks\\useEscape.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/hooks/useOuterClick.ts":
/*!************************************!*\
  !*** ./src/hooks/useOuterClick.ts ***!
  \************************************/
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
exports.useOuterClick = void 0;

var react_1 = __webpack_require__(/*! react */ "react");

function useOuterClick(callback, cancelableCb) {
  var callbackRef = (0, react_1.useRef)(); // initialize mutable ref, which stores callback

  var innerRef = (0, react_1.useRef)(); // initializereturned to client, who marks "border" element
  // update cb on each render, so second useEffect has access to current value 

  (0, react_1.useEffect)(function () {
    callbackRef.current = callback;
  });
  (0, react_1.useEffect)(function () {
    function handleClick(e) {
      var _a;

      if ((innerRef === null || innerRef === void 0 ? void 0 : innerRef.current) && (callbackRef === null || callbackRef === void 0 ? void 0 : callbackRef.current) && !((_a = innerRef === null || innerRef === void 0 ? void 0 : innerRef.current) === null || _a === void 0 ? void 0 : _a.contains(e === null || e === void 0 ? void 0 : e.target))) {
        if (!cancelableCb) callbackRef.current(e);else {
          var isCancelable = cancelableCb(e);
          if (!isCancelable) callbackRef.current(e);
        }
      }
    }

    document.addEventListener("click", handleClick);
    return function () {
      return document.removeEventListener("click", handleClick);
    };
  }, []); // no dependencies -> stable click listener

  return innerRef; // convenience for client (doesn't need to init ref himself) 
}

exports.useOuterClick = useOuterClick;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useOuterClick, "useOuterClick", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\hooks\\useOuterClick.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/hooks/usePrevious.ts":
/*!**********************************!*\
  !*** ./src/hooks/usePrevious.ts ***!
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
exports.usePrevious = void 0;

var react_1 = __webpack_require__(/*! react */ "react");

function usePrevious(value) {
  var ref = (0, react_1.useRef)();
  (0, react_1.useEffect)(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}

exports.usePrevious = usePrevious;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(usePrevious, "usePrevious", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\hooks\\usePrevious.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/hooks/useWindowSize.ts":
/*!************************************!*\
  !*** ./src/hooks/useWindowSize.ts ***!
  \************************************/
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
exports.useWindowSize = void 0;

var react_1 = __webpack_require__(/*! react */ "react");

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  var _a = __read((0, react_1.useState)({
    width: undefined,
    height: undefined
  }), 2),
      windowSize = _a[0],
      setWindowSize = _a[1];

  (0, react_1.useEffect)(function () {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    } // Add event listener


    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize); // Call handler right away so state gets updated with initial window size

    handleResize(); // Remove event listener on cleanup

    return function () {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

exports.useWindowSize = useWindowSize;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__read, "__read", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\hooks\\useWindowSize.ts");
  reactHotLoader.register(useWindowSize, "useWindowSize", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\hooks\\useWindowSize.ts");
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
exports.GridView = exports.InfoCard = exports.DataTable = exports.WebpartAddons = exports.FileUtils = exports.CacheHandler = void 0;

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
Object.defineProperty(exports, "WebpartAddons", {
  enumerable: true,
  get: function get() {
    return index_1.WebpartAddons;
  }
});

__exportStar(__webpack_require__(/*! ./hooks/index */ "./src/hooks/index.ts"), exports);

var DataTable_1 = __webpack_require__(/*! ./components/DataTable/DataTable */ "./src/components/DataTable/DataTable.tsx");

Object.defineProperty(exports, "DataTable", {
  enumerable: true,
  get: function get() {
    return DataTable_1.DataTable;
  }
});

var InfoCard_1 = __webpack_require__(/*! ./components/Card/InfoCard */ "./src/components/Card/InfoCard.tsx");

Object.defineProperty(exports, "InfoCard", {
  enumerable: true,
  get: function get() {
    return InfoCard_1.InfoCard;
  }
});

var GridView_1 = __webpack_require__(/*! ./components/GridView/GridView */ "./src/components/GridView/GridView.tsx");

Object.defineProperty(exports, "GridView", {
  enumerable: true,
  get: function get() {
    return GridView_1.GridView;
  }
});
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__createBinding, "__createBinding", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\index.tsx");
  reactHotLoader.register(__exportStar, "__exportStar", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\index.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

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

/***/ "@fluentui/react":
/*!**********************************!*\
  !*** external "@fluentui/react" ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@fluentui/react");

/***/ }),

/***/ "@fluentui/react/lib/Button":
/*!*********************************************!*\
  !*** external "@fluentui/react/lib/Button" ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@fluentui/react/lib/Button");

/***/ }),

/***/ "@fluentui/react/lib/DetailsList":
/*!**************************************************!*\
  !*** external "@fluentui/react/lib/DetailsList" ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@fluentui/react/lib/DetailsList");

/***/ }),

/***/ "@fluentui/react/lib/Dropdown":
/*!***********************************************!*\
  !*** external "@fluentui/react/lib/Dropdown" ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@fluentui/react/lib/Dropdown");

/***/ }),

/***/ "@fluentui/react/lib/Panel":
/*!********************************************!*\
  !*** external "@fluentui/react/lib/Panel" ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@fluentui/react/lib/Panel");

/***/ }),

/***/ "@fluentui/react/lib/Sticky":
/*!*********************************************!*\
  !*** external "@fluentui/react/lib/Sticky" ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@fluentui/react/lib/Sticky");

/***/ }),

/***/ "@fluentui/react/lib/Styling":
/*!**********************************************!*\
  !*** external "@fluentui/react/lib/Styling" ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@fluentui/react/lib/Styling");

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