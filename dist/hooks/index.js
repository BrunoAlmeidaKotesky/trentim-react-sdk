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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/hooks/index.ts");
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

/***/ "./src/hooks/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRefWithCallback = exports.usePrevious = exports.useOuterClick = exports.useEscape = exports.useDebounce = exports.useWindowSize = void 0;

var useWindowSize_1 = __webpack_require__("./src/hooks/useWindowSize.ts");

Object.defineProperty(exports, "useWindowSize", {
  enumerable: true,
  get: function get() {
    return useWindowSize_1.useWindowSize;
  }
});

var useDebounce_1 = __webpack_require__("./src/hooks/useDebounce.ts");

Object.defineProperty(exports, "useDebounce", {
  enumerable: true,
  get: function get() {
    return useDebounce_1.useDebounce;
  }
});

var useEscape_1 = __webpack_require__("./src/hooks/useEscape.ts");

Object.defineProperty(exports, "useEscape", {
  enumerable: true,
  get: function get() {
    return useEscape_1.useEscape;
  }
});

var useOuterClick_1 = __webpack_require__("./src/hooks/useOuterClick.ts");

Object.defineProperty(exports, "useOuterClick", {
  enumerable: true,
  get: function get() {
    return useOuterClick_1.useOuterClick;
  }
});

var usePrevious_1 = __webpack_require__("./src/hooks/usePrevious.ts");

Object.defineProperty(exports, "usePrevious", {
  enumerable: true,
  get: function get() {
    return usePrevious_1.usePrevious;
  }
});

var useRefWithCallback_1 = __webpack_require__("./src/hooks/useRefWithCallback.ts");

Object.defineProperty(exports, "useRefWithCallback", {
  enumerable: true,
  get: function get() {
    return useRefWithCallback_1.useRefWithCallback;
  }
});

/***/ }),

/***/ "./src/hooks/useDebounce.ts":
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

var react_1 = __webpack_require__("react");
/**
 * @credits - https://usehooks-ts.com/react-hook/use-debounce
 *
 * This React hook helps to limit that the component is re-rendered too many times.
 * Imagine that you want to execute a function on an event that executes several hundred times per second such as moving the mouse or scrolling.
 * This may cause the application to lag.
 *
 * To prevent this, the debounce uses an internal timer to execute the callback function every xx seconds (2nd parameter).
 * @param value - any value of `T` type
 * @param delay - time to delay the event.
 * @returns the value after debounced.
 *
 * @example
 * ```tsx
 *function Component() {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => { setValue(event.target.value) }
  useEffect(() => { //Something when debouncedValue changes.}
    , [debouncedValue])
  return (<div>
      Debounced value: {debouncedValue}
      <input type="text" value={value} onChange={handleChange} />
    </div>)
}
 * ```
 */


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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/hooks/useEscape.ts":
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

var react_1 = __webpack_require__("react");
/**
 * A function that is triggered when the keyboard "Escape" key is pressed, anywhere in the document.
 *
 * @param onEscape - The callback function to be executed when the user presses the escape key.
 */


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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/hooks/useOuterClick.ts":
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

var react_1 = __webpack_require__("react");
/**
 *
 * @param callback - A callback with a pointer event as parameter.
 * @param cancelableCb - A callback with a pointer event as parameter, which can be used to stop the execution of the first callback.
 * @returns innerRef - A ref to be used on some element.
 *
 * @example
 * ```tsx
 *  function Component() {
 *  const [isClicking, setIsClicking] = useState(false);
    const containerRef = useOuterClick<HTMLDivElement>(() => setIsClicking(false));}
    
    //When the the user clicks outside of this div, the event of useOuterClick will be triggered.
    //Which in that case is `setClicking(false)`
    return (
        <div
            ref={containerRef}
            onClick={() => setIsClicking(true)}
            style={{...footerContainerStyle, ...editingFooterStyle}}>
            {isClicking &&
            <div>...</div>}
        </div>
    );
 * ```
 */


function useOuterClick(callback, cancelableCb) {
  var callbackRef = (0, react_1.useRef)(); // initialize mutable ref, which stores callback

  var innerRef = (0, react_1.useRef)(); // initialize returned to client, who marks "border" element
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/hooks/usePrevious.ts":
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

var react_1 = __webpack_require__("react");
/**
 * A hook to be used to memorize the previous value of a state/variable before the last render.
 *
 * @param value - Any value of type `T`
 * @returns the previous value from the previous render.
 */


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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/hooks/useRefWithCallback.ts":
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
exports.useRefWithCallback = void 0;

var react_1 = __webpack_require__("react");
/**
 * This hook can be used when using ref inside useCallbacks
 *
 * Usage
 * ```tsx
 * const [refCallback, ref, toggle] = useRefWithCallback<HTMLSpanElement>();
 * const onClick = useCallback(() => {
    if (ref.current)
      ref.current.scrollIntoView({ behavior: "smooth" });
  }, [toggle]);

  //Change the value of the ref with refCallback(value);

  return (<span ref={refCallback} />);
  ```
 * @returns
 */


function useRefWithCallback(initialValue) {
  var ref = (0, react_1.useRef)(initialValue);

  var _a = __read((0, react_1.useState)(false), 2),
      toggleState = _a[0],
      setToggle = _a[1];

  var refCallback = (0, react_1.useCallback)(function (value) {
    ref.current = value;
    setToggle(function (val) {
      return !val;
    });
  }, []);
  return [refCallback, ref, toggleState];
}

exports.useRefWithCallback = useRefWithCallback;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__read, "__read", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\hooks\\useRefWithCallback.ts");
  reactHotLoader.register(useRefWithCallback, "useRefWithCallback", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\hooks\\useRefWithCallback.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/hooks/useWindowSize.ts":
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

var react_1 = __webpack_require__("react");
/**
 * @credits https://joshwcomeau.com/react/the-perils-of-rehydration/
 *
 * Use this function to detect the size of the user screen whenever it changes.
 *
 * @returns A size object with the `width` and `height` of the user screen. as an `Size` interface.
 */


function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map