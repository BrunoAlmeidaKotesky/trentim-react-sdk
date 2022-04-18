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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/IFrame/index.ts");
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

/***/ "./src/IFrame/IFrame.tsx":
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

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
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
exports.IFrame = void 0;

var React = __webpack_require__("react");

var react_1 = __webpack_require__("react");
/**The same thing as the <iframe>, but it can be lazy loaded and needs a fallback component.
 *
 * You can also pass a callback with the ref of the iframe, and it's dependency list.
 *
 * https://gist.github.com/threepointone/e73a87f7bbbebc78cf71744469ec5a15
 * */


function IFrame(props) {
  var fallback = props.fallback,
      rest = __rest(props, ["fallback"]);

  return React.createElement(react_1.Suspense, {
    fallback: fallback || 'loading...'
  }, React.createElement(IFrameImplementation, __assign({
    ref: props.ref
  }, rest)));
}

exports.IFrame = IFrame;

function IFrameImplementation(props) {
  var _a;

  var awaiter = (0, react_1.useRef)(null);
  var iFrameRef = (0, react_1.useRef)(null);

  var _b = __read((0, react_1.useState)(false), 2),
      _ = _b[0],
      triggerLoad = _b[1];

  if ((_a = awaiter.current) === null || _a === void 0 ? void 0 : _a.promise) {
    throw awaiter.current.promise;
  }

  (0, react_1.useLayoutEffect)(function () {
    if (awaiter.current === null) {
      // @ts-ignore
      awaiter.current = {}; // @ts-ignore

      awaiter.current.promise = new Promise(function (resolve, reject) {
        Object.assign(awaiter.current, {
          resolve: resolve,
          reject: reject
        });
      });
      triggerLoad(true);
    }
  }, []);
  (0, react_1.useEffect)(function () {
    var _a;

    if (iFrameRef === null || iFrameRef === void 0 ? void 0 : iFrameRef.current) {
      (_a = props === null || props === void 0 ? void 0 : props.refChanged) === null || _a === void 0 ? void 0 : _a.call(props, iFrameRef);
      props.ref = iFrameRef;
    }
  }, [iFrameRef === null || iFrameRef === void 0 ? void 0 : iFrameRef.current, props === null || props === void 0 ? void 0 : props.refDepencyList]);
  var title = props.title;
  return React.createElement("iframe", __assign({}, props, {
    ref: iFrameRef,
    title: title,
    onLoad: function onLoad(e) {
      var _a, _b; // @ts-ignore


      awaiter.current.promise = null;
      (_a = awaiter.current) === null || _a === void 0 ? void 0 : _a.resolve();
      (_b = props.onLoad) === null || _b === void 0 ? void 0 : _b.call(props, e);
    },
    onError: function onError(err) {
      var _a, _b; // @ts-ignore


      awaiter.current.promise = null;
      (_a = awaiter.current) === null || _a === void 0 ? void 0 : _a.reject();
      (_b = props.onError) === null || _b === void 0 ? void 0 : _b.call(props, err);
    }
  }));
}

exports["default"] = IFrame;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__assign, "__assign", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\IFrame\\IFrame.tsx");
  reactHotLoader.register(__rest, "__rest", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\IFrame\\IFrame.tsx");
  reactHotLoader.register(__read, "__read", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\IFrame\\IFrame.tsx");
  reactHotLoader.register(IFrame, "IFrame", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\IFrame\\IFrame.tsx");
  reactHotLoader.register(IFrameImplementation, "IFrameImplementation", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\IFrame\\IFrame.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/IFrame/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IFrame = void 0;

var IFrame_1 = __webpack_require__("./src/IFrame/IFrame.tsx");

Object.defineProperty(exports, "IFrame", {
  enumerable: true,
  get: function get() {
    return IFrame_1.IFrame;
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