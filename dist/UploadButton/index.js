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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/UploadButton/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/UploadButton/UploadButton.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadButton = void 0;

var React = __webpack_require__("react");

var Button_1 = __webpack_require__("@fluentui/react/lib/Button");

var react_1 = __webpack_require__("react");
/**
 * It's the same as `<PrimaryButton/>`  from  `@fluentui/react` but it can be used as an file upload button.
 *
 * The `onChange` event is called when the user selects one or more files.
 */


exports.UploadButton = (0, react_1.memo)(function (_a) {
  var accepts = _a.accepts,
      onChange = _a.onChange,
      buttonLabel = _a.buttonLabel,
      buttonIconName = _a.buttonIconName,
      styles = _a.styles;
  var hiddenInput = (0, react_1.useRef)(null);

  var handleClick = function handleClick(_) {
    hiddenInput.current.click();
  };

  var handleChange = function handleChange(event) {
    var fileUploaded = Array.from(event.target.files);
    onChange(fileUploaded);
    event.target.value = null;
  };

  return React.createElement(React.Fragment, null, React.createElement(Button_1.PrimaryButton, {
    styles: styles,
    iconProps: buttonIconName ? {
      iconName: buttonIconName
    } : {},
    text: buttonLabel,
    onClick: handleClick
  }, buttonLabel), React.createElement("input", {
    "data-is-focusable": "false",
    style: {
      display: 'none'
    },
    multiple: true,
    ref: hiddenInput,
    accept: accepts === null || accepts === void 0 ? void 0 : accepts.join(','),
    type: "file",
    onChange: handleChange
  }));
});

/***/ }),

/***/ "./src/UploadButton/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadButton = void 0;

var UploadButton_1 = __webpack_require__("./src/UploadButton/UploadButton.tsx");

Object.defineProperty(exports, "UploadButton", {
  enumerable: true,
  get: function get() {
    return UploadButton_1.UploadButton;
  }
});

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