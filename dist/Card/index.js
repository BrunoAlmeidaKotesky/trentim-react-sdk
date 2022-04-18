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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Card/index.tsx");
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

/***/ "./src/Card/Card.tsx":
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

var React = __webpack_require__("react");

var Button_1 = __webpack_require__("@fluentui/react/lib/Button");
/**
 * A card component that can be used in `GridView` automatically if `renderAs` is set to `card`.
 *
 * @param props - IInfoCardProps
 * @returns JSX.Element
 */


var InfoCard = React.memo(function (props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j;

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
      opacity: 0.8
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
  }, ((_d = (_c = props === null || props === void 0 ? void 0 : props.cardRightColInformation) === null || _c === void 0 ? void 0 : _c.values) === null || _d === void 0 ? void 0 : _d.length) > 0 && ((_e = props === null || props === void 0 ? void 0 : props.cardRightColInformation) === null || _e === void 0 ? void 0 : _e.values.map(function (value, idx) {
    var _a, _b;

    return React.createElement("div", {
      key: (_a = value === null || value === void 0 ? void 0 : value.title) !== null && _a !== void 0 ? _a : idx,
      style: (_b = value === null || value === void 0 ? void 0 : value.style) !== null && _b !== void 0 ? _b : styles.plantName
    }, React.createElement("span", null, value === null || value === void 0 ? void 0 : value.title));
  })))), React.createElement("div", {
    "data-class-name": "card-bottom",
    style: styles.bottom
  }, React.createElement("div", {
    "data-class-name": "card-circle-wrapper",
    style: styles.circleWrap
  }, React.createElement("div", {
    style: ((_f = props === null || props === void 0 ? void 0 : props.circleIndicator) === null || _f === void 0 ? void 0 : _f.color) ? __assign(__assign({}, styles.circle), {
      background: (_g = props === null || props === void 0 ? void 0 : props.circleIndicator) === null || _g === void 0 ? void 0 : _g.color,
      border: "1px solid ".concat((_h = props === null || props === void 0 ? void 0 : props.circleIndicator) === null || _h === void 0 ? void 0 : _h.color)
    }) : {}
  }), React.createElement("span", {
    style: styles.status
  }, (_j = props === null || props === void 0 ? void 0 : props.circleIndicator) === null || _j === void 0 ? void 0 : _j.title)), React.createElement("div", {
    "data-class-name": "card-button-container"
  }, React.createElement(Button_1.PrimaryButton, {
    onClick: props === null || props === void 0 ? void 0 : props.onClickDownButton,
    style: styles.linkButton,
    iconProps: {
      iconName: (props === null || props === void 0 ? void 0 : props.iconName) || 'Page'
    }
  }))));
});
exports["default"] = InfoCard;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__assign, "__assign", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\Card\\Card.tsx");
  reactHotLoader.register(InfoCard, "InfoCard", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\Card\\Card.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/Card/index.tsx":
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
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
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

__exportStar(__webpack_require__("./src/Card/Card.tsx"), exports);

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__createBinding, "__createBinding", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\Card\\index.tsx");
  reactHotLoader.register(__exportStar, "__exportStar", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\Card\\index.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "@fluentui/react/lib/Button":
/***/ (function(module, exports) {

module.exports = require("@fluentui/react/lib/Button");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map