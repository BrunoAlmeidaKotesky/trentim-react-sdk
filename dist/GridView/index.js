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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/GridView/index.ts");
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

/***/ "./src/GridView/Contexts.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupPanelContext = exports.FilterPanelContext = exports.ListOptionsContext = void 0;

var react_1 = __webpack_require__("react");

exports.ListOptionsContext = (0, react_1.createContext)({
  enableFilter: true,
  enableSearch: true,
  enableCardView: true,
  customButtons: [],
  setIsFilterPanelOpen: undefined,
  searchBoxPlaceholder: '',
  setRenderAs: undefined,
  defaultButtonsOrder: {
    group: 0,
    search: 1,
    filter: 2,
    card: 3
  },
  setIsGroupPanelOpen: undefined,
  onClickSearchIcon: undefined
});
exports.FilterPanelContext = (0, react_1.createContext)({
  isOpen: false,
  onApply: undefined,
  onCancel: undefined,
  onClose: undefined,
  panelTitle: '',
  actualFilteredValues: new Map(),
  setActualFilteredValues: undefined,
  onOpen: undefined,
  fromDate: null,
  toDate: new Date(),
  setFromDate: undefined,
  setToDate: undefined,
  filterOptionsMatrix: [],
  availableFilters: []
});
exports.GroupPanelContext = (0, react_1.createContext)({
  isOpen: false,
  onApply: undefined,
  onCancel: undefined,
  onClose: undefined,
  onOpen: undefined,
  panelTitle: '',
  options: [],
  selectedGroupKeys: null,
  setSelectedGroupKeys: undefined
});

/***/ }),

/***/ "./src/GridView/DateSlider.tsx":
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
exports.DateSlider = void 0;

var React = __webpack_require__("react");

var enums_1 = __webpack_require__("./src/helpers/enums.ts");

var Slider_1 = __webpack_require__("@fluentui/react/lib/Slider");

var DatePicker_1 = __webpack_require__("@fluentui/react/lib/DatePicker");

var react_1 = __webpack_require__("react");

var Contexts_1 = __webpack_require__("./src/GridView/Contexts.ts");

function DateSliderComponent(props) {
  var _a;

  var _b = __read((0, react_1.useState)(false), 2),
      displayDatePicker = _b[0],
      setDisplayDatePicker = _b[1];

  var _c = (0, react_1.useContext)(Contexts_1.FilterPanelContext),
      fromDate = _c.fromDate,
      toDate = _c.toDate,
      setFromDate = _c.setFromDate,
      setToDate = _c.setToDate;

  var formatSliderValue = function formatSliderValue(num) {
    return num === 0 ? 'Nenhum' : num === 1 ? 'Última Semana' : num === 2 ? 'Último Mês' : num === 3 ? 'Últimos Ano' : '';
  };

  var onSliderChange = function onSliderChange(_, val) {
    if (val === 4) setDisplayDatePicker(true);else {
      setDisplayDatePicker(false);
      setFromDate(null);
      setToDate(new Date());
    }

    if (val === 0) {
      props.onRecordDateRange(null, null, enums_1.RangeType.NONE);
    } else if (val === 1) {
      var lastWeek = new Date();
      lastWeek.setDate(lastWeek.getDate() - 7);
      props.onRecordDateRange(lastWeek, new Date(), enums_1.RangeType.WEEK);
    } else if (val === 2) {
      var lastMonth = new Date();
      lastMonth.setMonth(lastMonth.getMonth() - 1);
      props.onRecordDateRange(lastMonth, new Date(), enums_1.RangeType.MONTH);
    } else if (val === 3) {
      var lastYear = new Date();
      lastYear.setFullYear(lastYear.getFullYear() - 1);
      props.onRecordDateRange(lastYear, new Date(), enums_1.RangeType.YEAR);
    }
  };

  (0, react_1.useEffect)(function () {
    if (fromDate && toDate) props.onRecordDateRange(fromDate, toDate, enums_1.RangeType.CUSTOM);
  }, [fromDate, toDate]);
  (0, react_1.useEffect)(function () {
    if ((props === null || props === void 0 ? void 0 : props.defaultSliderValue) === 4 && !displayDatePicker) setDisplayDatePicker(true);
  }, [props === null || props === void 0 ? void 0 : props.defaultSliderValue]);
  var dateStrings = (0, react_1.useMemo)(function () {
    return {
      months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      shortMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      days: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      shortDays: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      goToToday: 'Hoje',
      prevMonthAriaLabel: 'Mês anterior',
      nextMonthAriaLabel: 'Próximo mês',
      prevYearAriaLabel: 'Ano anterior',
      nextYearAriaLabel: 'Próximo ano',
      closeButtonAriaLabel: 'Fechar',
      isRequiredErrorMessage: 'Este campo é obrigatório.',
      invalidInputErrorMessage: 'Valor de entrada inválido.',
      isOutOfBoundsErrorMessage: 'Valor de entrada fora dos limites.',
      showWeekNumbers: false,
      weekNumberFormatString: '',
      firstWeekOfYear: 0,
      dateFormat: 'd',
      showGoToToday: true
    };
  }, []);
  return React.createElement(React.Fragment, null, React.createElement(Slider_1.Slider, {
    min: 0,
    max: 4,
    step: 1,
    defaultValue: (_a = props === null || props === void 0 ? void 0 : props.defaultSliderValue) !== null && _a !== void 0 ? _a : 0,
    styles: {
      container: {
        display: 'grid'
      }
    },
    valueFormat: formatSliderValue,
    onChanged: onSliderChange,
    label: props === null || props === void 0 ? void 0 : props.label
  }), displayDatePicker && React.createElement("div", null, React.createElement(DatePicker_1.DatePicker, {
    maxDate: toDate,
    strings: dateStrings,
    value: fromDate,
    formatDate: function formatDate(date) {
      return date === null || date === void 0 ? void 0 : date.toLocaleDateString();
    },
    onSelectDate: function onSelectDate(d) {
      setFromDate(d);
    },
    label: "De"
  }), React.createElement(DatePicker_1.DatePicker, {
    minDate: fromDate,
    strings: dateStrings,
    formatDate: function formatDate(date) {
      return date === null || date === void 0 ? void 0 : date.toLocaleDateString();
    },
    onSelectDate: function onSelectDate(d) {
      setToDate(d);
    },
    value: toDate,
    label: "At\xE9"
  })));
}

exports.DateSlider = (0, react_1.memo)(DateSliderComponent);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__read, "__read", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\DateSlider.tsx");
  reactHotLoader.register(DateSliderComponent, "DateSliderComponent", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\DateSlider.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/GridView/GridView.tsx":
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
exports.GridView = void 0;

var React = __webpack_require__("react");

var useGridController_1 = __webpack_require__("./src/GridView/hooks/useGridController.tsx");

var Contexts_1 = __webpack_require__("./src/GridView/Contexts.ts");

var DetailsList_1 = __webpack_require__("@fluentui/react/lib/DetailsList");

var Sticky_1 = __webpack_require__("@fluentui/react/lib/Sticky");

var PanelFilter_1 = __webpack_require__("./src/GridView/PanelFilter.tsx");

var GroupPanel_1 = __webpack_require__("./src/GridView/GroupPanel.tsx");

var ListOptions_1 = __webpack_require__("./src/GridView/ListOptions.tsx");

var react_1 = __webpack_require__("react");
/** An enhanced version of the `DetailsList` component, with automatic filtering, sorting, grouping, properties searching with many other features to customize.
 *
 * The component can also be rendered as a collection of `Card` components, with the same functionalities.
 */


function GridView(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

  var _m = (0, useGridController_1.useGridController)(props),
      state = _m.state,
      handlers = _m.handlers,
      JSX = _m.JSX;

  var CardsList = JSX.CardsList;
  var actualRows = state.actualRows,
      visibleCols = state.visibleCols,
      isFilterPanelOpen = state.isFilterPanelOpen,
      filterPanelConfig = state.filterPanelConfig,
      groupPanelConfig = state.groupPanelConfig,
      listConfig = state.listConfig,
      shouldRenderCard = state.shouldRenderCard,
      isGroupPanelOpen = state.isGroupPanelOpen,
      groups = state.groups;
  var onItemClick = handlers.onItemClick;
  return React.createElement(Contexts_1.GroupPanelContext.Provider, {
    value: groupPanelConfig
  }, React.createElement(Contexts_1.FilterPanelContext.Provider, {
    value: filterPanelConfig
  }, React.createElement(Contexts_1.ListOptionsContext.Provider, {
    value: listConfig
  }, React.createElement("div", {
    style: (_b = (_a = props === null || props === void 0 ? void 0 : props.styles) === null || _a === void 0 ? void 0 : _a.root) !== null && _b !== void 0 ? _b : {}
  }, React.createElement(ListOptions_1.ListOptions, null), React.createElement("div", {
    "data-is-scrollable": "true",
    style: __assign({
      position: 'relative',
      zIndex: 0
    }, (_c = props === null || props === void 0 ? void 0 : props.styles) === null || _c === void 0 ? void 0 : _c.contentContainer),
    id: "gridView-root"
  }, !!(props === null || props === void 0 ? void 0 : props.onRenderCustomComponent) ? actualRows === null || actualRows === void 0 ? void 0 : actualRows.map(function (i) {
    return props === null || props === void 0 ? void 0 : props.onRenderCustomComponent(i);
  }) : !shouldRenderCard ? React.createElement(DetailsList_1.DetailsList, __assign({}, props === null || props === void 0 ? void 0 : props.detailsListProps, {
    onRenderItemColumn: props === null || props === void 0 ? void 0 : props.onRenderItemColumn,
    onRenderRow: function onRenderRow(p, defaultRender) {
      return React.createElement("div", {
        onClick: function onClick() {
          return onItemClick(p === null || p === void 0 ? void 0 : p.item);
        }
      }, defaultRender(__assign(__assign({}, p), {
        styles: {
          root: {
            cursor: (props === null || props === void 0 ? void 0 : props.onItemClick) ? 'pointer' : 'default'
          }
        }
      })));
    },
    items: actualRows,
    columns: visibleCols,
    groups: groups,
    groupProps: {
      isAllGroupsCollapsed: ((_d = props === null || props === void 0 ? void 0 : props.detailsListProps) === null || _d === void 0 ? void 0 : _d.groups) ? ((_g = (_f = (_e = props === null || props === void 0 ? void 0 : props.detailsListProps) === null || _e === void 0 ? void 0 : _e.groups) === null || _f === void 0 ? void 0 : _f.filter(function (gr) {
        return !(gr === null || gr === void 0 ? void 0 : gr.isCollapsed);
      })) === null || _g === void 0 ? void 0 : _g.length) === 0 : true,
      collapseAllVisibility: DetailsList_1.CollapseAllVisibility.visible,
      onRenderHeader: function onRenderHeader(props, defaultRender) {
        if (!props.group.name) return React.createElement(React.Fragment, null);
        return defaultRender(props);
      },
      showEmptyGroups: false
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
    checkboxVisibility: (_j = (_h = props === null || props === void 0 ? void 0 : props.detailsListProps) === null || _h === void 0 ? void 0 : _h.checkboxVisibility) !== null && _j !== void 0 ? _j : DetailsList_1.CheckboxVisibility.hidden
  })) : React.createElement(react_1.Suspense, {
    fallback: '...'
  }, React.createElement("div", {
    id: "gridView-cardContainer",
    style: (_l = (_k = props === null || props === void 0 ? void 0 : props.cardProps) === null || _k === void 0 ? void 0 : _k.containerStyle) !== null && _l !== void 0 ? _l : {
      display: 'grid',
      gap: 12,
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
    }
  }, CardsList))), isFilterPanelOpen && React.createElement(PanelFilter_1["default"], null), isGroupPanelOpen && React.createElement(GroupPanel_1["default"], null)))));
}

exports.GridView = GridView;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__assign, "__assign", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\GridView.tsx");
  reactHotLoader.register(GridView, "GridView", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\GridView.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/GridView/GroupPanel.tsx":
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

var React = __webpack_require__("react");

var react_1 = __webpack_require__("react");

var Contexts_1 = __webpack_require__("./src/GridView/Contexts.ts");

function GroupPanel() {
  var _a, _b;

  var _c = (0, react_1.useContext)(Contexts_1.GroupPanelContext),
      isOpen = _c.isOpen,
      panelTitle = _c.panelTitle,
      onApply = _c.onApply,
      onCancel = _c.onCancel,
      onClose = _c.onClose,
      options = _c.options,
      selectedGroupKeys = _c.selectedGroupKeys,
      setSelectedGroupKeys = _c.setSelectedGroupKeys;

  var _d = __read((0, react_1.useMemo)(function () {
    var Panel = (0, react_1.lazy)(function () {
      return Promise.resolve().then(function () {
        return __webpack_require__("@fluentui/react/lib/Panel");
      }).then(function (_a) {
        var Panel = _a.Panel;
        return {
          "default": Panel
        };
      });
    });
    var PrimaryButton = (0, react_1.lazy)(function () {
      return Promise.resolve().then(function () {
        return __webpack_require__("@fluentui/react/lib/Button");
      }).then(function (_a) {
        var PrimaryButton = _a.PrimaryButton;
        return {
          "default": PrimaryButton
        };
      });
    });
    var DefaultButton = (0, react_1.lazy)(function () {
      return Promise.resolve().then(function () {
        return __webpack_require__("@fluentui/react/lib/Button");
      }).then(function (_a) {
        var DefaultButton = _a.DefaultButton;
        return {
          "default": DefaultButton
        };
      });
    });
    var RadioButton = (0, react_1.lazy)(function () {
      return Promise.resolve().then(function () {
        return __webpack_require__("@fluentui/react/lib/ChoiceGroup");
      }).then(function (_a) {
        var ChoiceGroup = _a.ChoiceGroup;
        return {
          "default": ChoiceGroup
        };
      });
    });
    return [Panel, PrimaryButton, DefaultButton, RadioButton];
  }, []), 4),
      FluentPanel = _d[0],
      PrimaryButton = _d[1],
      DefaultButton = _d[2],
      RadioButton = _d[3];

  if (!isOpen) return null;
  return React.createElement(react_1.Suspense, {
    fallback: React.createElement("div", null, "...")
  }, React.createElement(FluentPanel, {
    isFooterAtBottom: true,
    onDismiss: onClose,
    isOpen: isOpen,
    onRenderFooter: function onRenderFooter(_) {
      return React.createElement("div", {
        style: {
          padding: 20
        }
      }, React.createElement(react_1.Suspense, {
        fallback: '...'
      }, React.createElement(PrimaryButton, {
        onClick: function onClick() {
          return onApply(selectedGroupKeys);
        },
        styles: {
          root: {
            marginRight: 8
          }
        }
      }, "Aplicar")), React.createElement(react_1.Suspense, {
        fallback: '...'
      }, React.createElement(DefaultButton, {
        onClick: onCancel
      }, "Cancelar")));
    }
  }, React.createElement("h2", null, panelTitle), React.createElement(react_1.Suspense, {
    fallback: '...'
  }, React.createElement(RadioButton, {
    onChange: function onChange(_, opt) {
      var keyWithName = "".concat(opt === null || opt === void 0 ? void 0 : opt.key, ";").concat(opt === null || opt === void 0 ? void 0 : opt.text);
      setSelectedGroupKeys(keyWithName);
    },
    defaultSelectedKey: (_b = (_a = selectedGroupKeys === null || selectedGroupKeys === void 0 ? void 0 : selectedGroupKeys.split(';')) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : undefined,
    options: __spreadArray([{
      key: '@NONE',
      text: 'Nenhum'
    }], __read(options), false)
  }))));
}

exports["default"] = React.memo(GroupPanel);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__read, "__read", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\GroupPanel.tsx");
  reactHotLoader.register(__spreadArray, "__spreadArray", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\GroupPanel.tsx");
  reactHotLoader.register(GroupPanel, "GroupPanel", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\GroupPanel.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/GridView/ListOptions.tsx":
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

var React = __webpack_require__("react");

var react_1 = __webpack_require__("@fluentui/react");

var Contexts_1 = __webpack_require__("./src/GridView/Contexts.ts");

var enums_1 = __webpack_require__("./src/helpers/enums.ts");

var ListOptions = function ListOptions() {
  var _a = React.useContext(Contexts_1.ListOptionsContext),
      customButtons = _a.customButtons,
      enableFilter = _a.enableFilter,
      enableSearch = _a.enableSearch,
      searchKeys = _a.searchKeys,
      onSearchItemChange = _a.onSearchItemChange,
      setIsFilterPanelOpen = _a.setIsFilterPanelOpen,
      defaultButtonsOrder = _a.defaultButtonsOrder,
      searchBoxPlaceholder = _a.searchBoxPlaceholder,
      enableCardView = _a.enableCardView,
      setRenderAs = _a.setRenderAs,
      enableGrouping = _a.enableGrouping,
      onClickSearchIcon = _a.onClickSearchIcon,
      onFilterIconClick = _a.onFilterIconClick,
      onGroupIconClick = _a.onGroupIconClick,
      onSearchBoxClick = _a.onSearchBoxClick;

  var onOpen = React.useContext(Contexts_1.GroupPanelContext).onOpen;
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
  }, enableGrouping && React.createElement(react_1.DefaultButton, {
    onClick: function onClick(_) {
      if (!!onGroupIconClick) onGroupIconClick();
      onOpen();
    },
    styles: {
      label: {
        fontSize: 14
      },
      root: {
        order: defaultButtonsOrder === null || defaultButtonsOrder === void 0 ? void 0 : defaultButtonsOrder.group
      }
    },
    iconProps: {
      iconName: 'GroupList'
    }
  }), enableCardView && React.createElement(react_1.DefaultButton, {
    onClick: function onClick(_) {
      return setRenderAs();
    },
    styles: {
      label: {
        fontSize: 14
      },
      root: {
        order: defaultButtonsOrder === null || defaultButtonsOrder === void 0 ? void 0 : defaultButtonsOrder.card
      }
    },
    iconProps: {
      iconName: 'GridViewMedium'
    }
  }), (customButtons === null || customButtons === void 0 ? void 0 : customButtons.length) > 0 && (customButtons === null || customButtons === void 0 ? void 0 : customButtons.map(function (b, idx) {
    var _a, _b, _c, _d;

    switch (b === null || b === void 0 ? void 0 : b.renderAs) {
      case 'PrimaryButton':
        return React.createElement(react_1.PrimaryButton, __assign({
          key: (b === null || b === void 0 ? void 0 : b.text) + "_" + idx,
          className: b === null || b === void 0 ? void 0 : b.className,
          styles: {
            label: {
              fontSize: 14
            },
            root: {
              order: (_a = b === null || b === void 0 ? void 0 : b.position) !== null && _a !== void 0 ? _a : 'unset'
            }
          }
        }, b === null || b === void 0 ? void 0 : b.props), b === null || b === void 0 ? void 0 : b.text);

      case 'DefaultButton':
        return React.createElement(react_1.DefaultButton, __assign({
          key: (b === null || b === void 0 ? void 0 : b.text) + "_" + idx,
          className: b === null || b === void 0 ? void 0 : b.className,
          styles: {
            label: {
              fontSize: 14
            },
            root: {
              order: (_b = b === null || b === void 0 ? void 0 : b.position) !== null && _b !== void 0 ? _b : 'unset'
            }
          }
        }, b === null || b === void 0 ? void 0 : b.props), b === null || b === void 0 ? void 0 : b.text);

      case 'CustomButton':
        return (_c = b === null || b === void 0 ? void 0 : b.onRenderCustomButton(b === null || b === void 0 ? void 0 : b.props)) !== null && _c !== void 0 ? _c : null;

      default:
        return React.createElement(react_1.PrimaryButton, __assign({
          key: (b === null || b === void 0 ? void 0 : b.text) + "_" + idx,
          className: b === null || b === void 0 ? void 0 : b.className,
          styles: {
            label: {
              fontSize: 14
            },
            root: {
              order: (_d = b === null || b === void 0 ? void 0 : b.position) !== null && _d !== void 0 ? _d : 'unset'
            }
          }
        }, b === null || b === void 0 ? void 0 : b.props), b === null || b === void 0 ? void 0 : b.text);
    }
  })), enableSearch && searchKeys && React.createElement(react_1.TextField, {
    placeholder: searchBoxPlaceholder,
    onKeyDown: function onKeyDown(e) {
      var _a;

      if (e.key === 'Enter') {
        onClickSearchIcon(enums_1.IconClickCaller.ENTER, (_a = e === null || e === void 0 ? void 0 : e.currentTarget) === null || _a === void 0 ? void 0 : _a.value, searchKeys);
      }
    },
    onFocus: onSearchBoxClick,
    onBlur: function onBlur(e) {
      return onSearchItemChange(e.target.value, searchKeys);
    },
    iconProps: {
      iconName: 'Search',
      style: {
        pointerEvents: "auto",
        cursor: "pointer",
        position: 'static',
        padding: 8,
        backgroundColor: '#e2d7cab5'
      },
      onClick: function onClick(e) {
        var _a, _b, _c;

        var inputValue = (_c = (_b = (_a = e === null || e === void 0 ? void 0 : e.currentTarget) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.childNodes[0]) === null || _c === void 0 ? void 0 : _c.value;
        if (inputValue) onClickSearchIcon(enums_1.IconClickCaller.CLICK);
      }
    },
    styles: {
      root: {
        width: 320,
        order: defaultButtonsOrder === null || defaultButtonsOrder === void 0 ? void 0 : defaultButtonsOrder.search
      },
      icon: {
        color: '[theme: themePrimary, default: #0078D4]'
      }
    }
  }), enableFilter && React.createElement(react_1.DefaultButton, {
    onClick: function onClick(_) {
      if (!!onFilterIconClick) onFilterIconClick();
      setIsFilterPanelOpen(true);
    },
    styles: {
      label: {
        fontSize: 14
      },
      root: {
        order: defaultButtonsOrder === null || defaultButtonsOrder === void 0 ? void 0 : defaultButtonsOrder.filter
      }
    },
    iconProps: {
      iconName: 'Filter'
    }
  }));
};

__signature__(ListOptions, "useContext{_a}\nuseContext{}");

exports.ListOptions = ListOptions;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__assign, "__assign", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\ListOptions.tsx");
  reactHotLoader.register(ListOptions, "ListOptions", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\ListOptions.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/GridView/PanelFilter.tsx":
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

var React = __webpack_require__("react");

var DateSlider_1 = __webpack_require__("./src/GridView/DateSlider.tsx");

var PeoplePicker_1 = __webpack_require__("./src/GridView/PeoplePicker.tsx");

var usePanelFilterController_1 = __webpack_require__("./src/GridView/hooks/usePanelFilterController.ts");

function PanelFilter() {
  var _a = (0, usePanelFilterController_1.usePanelFilterController)(),
      JSX = _a.JSX,
      state = _a.state,
      handlers = _a.handlers;

  var actualFilteredValues = state.actualFilteredValues,
      panelTitle = state.panelTitle,
      isOpen = state.isOpen,
      filterOptionsMatrix = state.filterOptionsMatrix,
      availableFilters = state.availableFilters;
  var FluentPanel = JSX.FluentPanel,
      PrimaryButton = JSX.PrimaryButton,
      Dropdown = JSX.Dropdown,
      TagPicker = JSX.TagPicker,
      DefaultButton = JSX.DefaultButton,
      Label = JSX.Label;
  var onClose = handlers.onClose,
      onCancel = handlers.onCancel,
      getDefaultDropdownSelectedKeys = handlers.getDefaultDropdownSelectedKeys,
      onAddOrRemoveToMap = handlers.onAddOrRemoveToMap,
      getDefaultSelectedTag = handlers.getDefaultSelectedTag,
      getDefaultSelectedSlider = handlers.getDefaultSelectedSlider;
  if (!isOpen) return null;
  return React.createElement(React.Suspense, {
    fallback: React.createElement("div", null, "...")
  }, React.createElement(FluentPanel, {
    onRenderFooter: function onRenderFooter(_) {
      return React.createElement("div", {
        style: {
          padding: 20
        }
      }, React.createElement(React.Suspense, {
        fallback: '...'
      }, React.createElement(PrimaryButton, {
        onClick: function onClick() {
          return handlers.onApply(actualFilteredValues);
        },
        styles: {
          root: {
            marginRight: 8
          }
        }
      }, "Aplicar")), React.createElement(React.Suspense, {
        fallback: '...'
      }, React.createElement(DefaultButton, {
        onClick: onCancel
      }, "Cancelar")));
    },
    isFooterAtBottom: true,
    onDismiss: onClose,
    isOpen: isOpen
  }, React.createElement("h2", null, panelTitle), availableFilters === null || availableFilters === void 0 ? void 0 : availableFilters.map(function (filter, idx) {
    return React.createElement(React.Suspense, {
      key: (filter === null || filter === void 0 ? void 0 : filter.key) + "-" + idx,
      fallback: '...'
    }, filter.renderAs === 'Dropdown' ? React.createElement(Dropdown, {
      defaultSelectedKeys: getDefaultDropdownSelectedKeys(),
      key: (filter === null || filter === void 0 ? void 0 : filter.key) + "-" + idx,
      options: filterOptionsMatrix[idx],
      multiSelect: filter === null || filter === void 0 ? void 0 : filter.enableMultiple,
      label: filter === null || filter === void 0 ? void 0 : filter.name,
      onChange: function onChange(_, opt) {
        return onAddOrRemoveToMap(filter === null || filter === void 0 ? void 0 : filter.key, opt);
      }
    }) : filter.renderAs === 'SearchBox' ? React.createElement("div", {
      key: (filter === null || filter === void 0 ? void 0 : filter.key) + "-" + (filter === null || filter === void 0 ? void 0 : filter.name) + "-" + idx
    }, React.createElement(Label, null, filter === null || filter === void 0 ? void 0 : filter.name), React.createElement(TagPicker, {
      key: (filter === null || filter === void 0 ? void 0 : filter.key) + "-" + idx,
      getTextFromItem: function getTextFromItem(item) {
        return item === null || item === void 0 ? void 0 : item.name;
      },
      defaultSelectedItems: getDefaultSelectedTag(filter.key),
      pickerSuggestionsProps: {
        suggestionsHeaderText: "Sugestões",
        noResultsFoundText: "Nenhum resultado encontrado",
        loadingText: "Carregando..."
      },
      pickerCalloutProps: {
        doNotLayer: true,
        style: {
          overflowY: 'auto'
        },
        styles: {
          root: {
            position: 'relative'
          }
        }
      },
      onChange: handlers.onChangeTags(filterOptionsMatrix[idx]),
      onItemSelected: handlers.onTagSelected(filter === null || filter === void 0 ? void 0 : filter.key),
      onResolveSuggestions: handlers.onResolveTagSuggestion(filterOptionsMatrix[idx])
    })) : filter.renderAs === 'DateSlider' ? React.createElement(DateSlider_1.DateSlider, {
      defaultSliderValue: getDefaultSelectedSlider(filter === null || filter === void 0 ? void 0 : filter.key),
      onRecordDateRange: handlers.onRecordDateChange(filter === null || filter === void 0 ? void 0 : filter.key),
      key: (filter === null || filter === void 0 ? void 0 : filter.key) + "-" + idx,
      label: filter === null || filter === void 0 ? void 0 : filter.name
    }) : (filter === null || filter === void 0 ? void 0 : filter.renderAs) === 'PeoplePicker' ? React.createElement("div", null, React.createElement(Label, {
      key: (filter === null || filter === void 0 ? void 0 : filter.key) + "-" + (filter === null || filter === void 0 ? void 0 : filter.name) + "-" + idx
    }, filter === null || filter === void 0 ? void 0 : filter.name), React.createElement(PeoplePicker_1.PeoplePicker, {
      label: '',
      key: (filter === null || filter === void 0 ? void 0 : filter.key) + "-" + idx,
      people: filterOptionsMatrix[idx],
      defaultSelectedItems: handlers.getDefaultSelectedPeople(filter === null || filter === void 0 ? void 0 : filter.key),
      onChangePeople: handlers.onChangePeople(filter === null || filter === void 0 ? void 0 : filter.key)
    })) : null);
  })));
}

exports["default"] = React.memo(PanelFilter);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PanelFilter, "PanelFilter", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\PanelFilter.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/GridView/PeoplePicker.tsx":
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
exports.PeoplePicker = void 0;

var React = __webpack_require__("react");

var Pickers_1 = __webpack_require__("@fluentui/react/lib/Pickers");

var suggestionProps = {
  suggestionsHeaderText: 'Pessoas sugeridas',
  mostRecentlyUsedHeaderText: 'Pessoas mais recentes',
  noResultsFoundText: 'Nenhum resultado encontrado',
  loadingText: 'Carregando',
  showRemoveButtons: true,
  suggestionsAvailableAlertText: 'Sugestões disponíveis',
  suggestionsContainerAriaLabel: 'Pessoas sugeridas'
};

var PeoplePicker = function PeoplePicker(props) {
  var _a = __read(React.useState(props.people), 2),
      peopleList = _a[0],
      setPeopleList = _a[1];

  var picker = React.useRef(null);

  var onFilterChanged = function onFilterChanged(filterText, currentPersonas, limitResults) {
    if (!filterText) return [];
    var filteredPersonas = filterPersonasByText(filterText);
    filteredPersonas = removeDuplicates(filteredPersonas, currentPersonas);
    filteredPersonas = limitResults ? filteredPersonas.slice(0, limitResults) : filteredPersonas;
    return filteredPersonas;
  };

  var filterPersonasByText = function filterPersonasByText(filterText) {
    return peopleList.filter(function (item) {
      return doesTextStartWith(item.text, filterText);
    });
  };

  var onRemoveSuggestion = function onRemoveSuggestion(item) {
    var indexPeopleList = peopleList.indexOf(item);

    if (indexPeopleList >= 0) {
      var newPeople = peopleList.slice(0, indexPeopleList).concat(peopleList.slice(indexPeopleList + 1));
      setPeopleList(newPeople);
    }
  };

  return React.createElement("div", null, React.createElement("label", null, props.label), React.createElement(Pickers_1.CompactPeoplePicker, {
    onResolveSuggestions: onFilterChanged,
    getTextFromItem: getTextFromItem,
    pickerSuggestionsProps: suggestionProps,
    defaultSelectedItems: props === null || props === void 0 ? void 0 : props.defaultSelectedItems,
    onChange: props === null || props === void 0 ? void 0 : props.onChangePeople,
    className: 'ms-PeoplePicker',
    onRemoveSuggestion: onRemoveSuggestion,
    onValidateInput: validateInput,
    componentRef: picker,
    resolveDelay: 300
  }));
};

__signature__(PeoplePicker, "useState{(props.people)}\nuseRef{picker}");

exports.PeoplePicker = PeoplePicker;

var doesTextStartWith = function doesTextStartWith(text, filter) {
  var _a;

  return ((_a = text === null || text === void 0 ? void 0 : text.toLowerCase()) === null || _a === void 0 ? void 0 : _a.indexOf(filter === null || filter === void 0 ? void 0 : filter.toLowerCase())) === 0;
};

var removeDuplicates = function removeDuplicates(personas, possibleDupes) {
  return personas.filter(function (persona) {
    return !listContainsPersona(persona, possibleDupes);
  });
};

function listContainsPersona(persona, personas) {
  var _a;

  if (!personas || !personas.length || personas.length === 0) return false;
  return ((_a = personas.filter(function (item) {
    return (item === null || item === void 0 ? void 0 : item.text) === (persona === null || persona === void 0 ? void 0 : persona.text);
  })) === null || _a === void 0 ? void 0 : _a.length) > 0;
}

var getTextFromItem = function getTextFromItem(persona) {
  return persona === null || persona === void 0 ? void 0 : persona.text;
};

function validateInput(input) {
  if (input.indexOf('@') !== -1) return Pickers_1.ValidationState.valid;else if (input.length > 1) return Pickers_1.ValidationState.warning;
  return Pickers_1.ValidationState.invalid;
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__read, "__read", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\PeoplePicker.tsx");
  reactHotLoader.register(suggestionProps, "suggestionProps", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\PeoplePicker.tsx");
  reactHotLoader.register(PeoplePicker, "PeoplePicker", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\PeoplePicker.tsx");
  reactHotLoader.register(doesTextStartWith, "doesTextStartWith", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\PeoplePicker.tsx");
  reactHotLoader.register(removeDuplicates, "removeDuplicates", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\PeoplePicker.tsx");
  reactHotLoader.register(listContainsPersona, "listContainsPersona", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\PeoplePicker.tsx");
  reactHotLoader.register(getTextFromItem, "getTextFromItem", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\PeoplePicker.tsx");
  reactHotLoader.register(validateInput, "validateInput", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\PeoplePicker.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/GridView/handlers/GridViewFilter.ts":
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
exports.GridViewFilter = void 0;

var Utils_1 = __webpack_require__("./src/helpers/Utils.ts");

var GridViewMapper_1 = __webpack_require__("./src/GridView/handlers/GridViewMapper.ts");

var GridViewFilter =
/** @class */
function () {
  function GridViewFilter() {}
  /**Generate the components of each available column and it's unique values */


  GridViewFilter.buildFilters = function (allRows, columns, hiddenFields) {
    var _a, _b, _c, _d, _e;

    var filters = [];
    var columnsToFilter = GridViewFilter.filterFromColumns(hiddenFields, columns);

    var _loop_1 = function _loop_1(index) {
      var col = columnsToFilter[index];
      var renderAs = (_a = col === null || col === void 0 ? void 0 : col.renderFilterAs) !== null && _a !== void 0 ? _a : 'Dropdown';
      var keys = (_c = (_b = col === null || col === void 0 ? void 0 : col.key) === null || _b === void 0 ? void 0 : _b.split('.')) !== null && _c !== void 0 ? _c : (_d = col.fieldName) === null || _d === void 0 ? void 0 : _d.split('.');
      var options = (_e = allRows === null || allRows === void 0 ? void 0 : allRows.filter(function (d) {
        return d;
      })) === null || _e === void 0 ? void 0 : _e.map(function (data, idx) {
        var _a, _b, _c, _d;

        var stringObject = (_a = Utils_1.Utils.getNestedObject(data, keys)) === null || _a === void 0 ? void 0 : _a.toString();
        if ((_b = col === null || col === void 0 ? void 0 : col.dateConversionOptions) === null || _b === void 0 ? void 0 : _b.shouldConvertToLocaleString) stringObject = Utils_1.Utils.convertIsoToLocaleString(stringObject, (_c = col === null || col === void 0 ? void 0 : col.dateConversionOptions) === null || _c === void 0 ? void 0 : _c.locales, (_d = col === null || col === void 0 ? void 0 : col.dateConversionOptions) === null || _d === void 0 ? void 0 : _d.formatOptions);
        return {
          key: idx + "_" + (col === null || col === void 0 ? void 0 : col.key),
          text: stringObject,
          data: data
        };
      });
      var uniqueOptions = options === null || options === void 0 ? void 0 : options.filter(function (obj, pos, arr) {
        return arr.map(function (mapObj) {
          return mapObj === null || mapObj === void 0 ? void 0 : mapObj.text;
        }).indexOf(obj === null || obj === void 0 ? void 0 : obj.text) === pos;
      });
      filters.push({
        key: col === null || col === void 0 ? void 0 : col.key,
        options: uniqueOptions,
        enableMultiple: true,
        name: col === null || col === void 0 ? void 0 : col.name,
        renderAs: renderAs
      });
    };

    for (var index = 0; index < columnsToFilter.length; index++) {
      _loop_1(index);
    }

    return filters;
  };

  GridViewFilter.onApplyFilter = function (_a) {
    var allRows = _a.allRows,
        setActualRows = _a.setActualRows,
        setIsFilterPanel = _a.setIsFilterPanel,
        applyCustomFilter = _a.applyCustomFilter,
        onItemsFiltered = _a.onItemsFiltered;
    return function (selectedItems) {
      var e_1, _a, e_2, _b;

      if (!!applyCustomFilter) {
        var groupedMaps_1 = GridViewMapper_1.GridViewMapper.groupMaps(selectedItems);
        return applyCustomFilter({
          allRows: allRows,
          setActualRows: setActualRows,
          setIsFilterPanel: setIsFilterPanel,
          selectedItems: selectedItems,
          groupedMaps: groupedMaps_1
        });
      }

      if (selectedItems.size === 0) {
        setActualRows(allRows);
        return setIsFilterPanel(false);
      }

      var groupedMaps = GridViewMapper_1.GridViewMapper.groupMaps(selectedItems);
      var filteredRows = [];

      var _loop_2 = function _loop_2(mapKey, map) {
        var filterFrom = (filteredRows === null || filteredRows === void 0 ? void 0 : filteredRows.length) > 0 ? filteredRows : allRows;
        map === null || map === void 0 ? void 0 : map.forEach(function (value) {
          var _a, _b, _c, _d;

          var isDate = !!((_a = value === null || value === void 0 ? void 0 : value.data) === null || _a === void 0 ? void 0 : _a.from) && !!((_b = value === null || value === void 0 ? void 0 : value.data) === null || _b === void 0 ? void 0 : _b.to);
          var ORrowsFromThisKey = filterFrom.filter(function (r) {
            var _a, _b;

            if (isDate) {
              var from = (_a = value === null || value === void 0 ? void 0 : value.data) === null || _a === void 0 ? void 0 : _a.from;
              var to = (_b = value === null || value === void 0 ? void 0 : value.data) === null || _b === void 0 ? void 0 : _b.to;
              var rDate = new Date(Utils_1.Utils.getNestedObject(r, mapKey.split('.')));
              return rDate >= from && rDate <= to;
            }

            return Utils_1.Utils.getNestedObject(r, mapKey.split('.')) === (value === null || value === void 0 ? void 0 : value.text);
          });
          if (ORrowsFromThisKey.length > 0 && !((_c = filteredRows === null || filteredRows === void 0 ? void 0 : filteredRows.map(function (r) {
            return r === null || r === void 0 ? void 0 : r.Id;
          })) === null || _c === void 0 ? void 0 : _c.includes((_d = value === null || value === void 0 ? void 0 : value.data) === null || _d === void 0 ? void 0 : _d.Id))) filteredRows.push.apply(filteredRows, __spreadArray([], __read(ORrowsFromThisKey), false));
        });
      };

      try {
        for (var _c = __values(groupedMaps.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
          var _e = __read(_d.value, 2),
              mapKey = _e[0],
              map = _e[1];

          _loop_2(mapKey, map);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      filteredRows = filteredRows.filter(function (obj, pos, arr) {
        return arr.map(function (mapObj) {
          return mapObj === null || mapObj === void 0 ? void 0 : mapObj.Id;
        }).indexOf(obj === null || obj === void 0 ? void 0 : obj.Id) === pos;
      });

      var _loop_3 = function _loop_3(mapKey, map) {
        var allMapValues = __spreadArray([], __read(map.values()), false);

        var newFilteredItems = filteredRows.filter(function (r) {
          var rowValue = Utils_1.Utils.getNestedObject(r, mapKey.split('.'));
          return allMapValues.some(function (v) {
            var _a, _b, _c, _d;

            if (((_a = v === null || v === void 0 ? void 0 : v.data) === null || _a === void 0 ? void 0 : _a.from) && ((_b = v === null || v === void 0 ? void 0 : v.data) === null || _b === void 0 ? void 0 : _b.to)) {
              var from = (_c = v === null || v === void 0 ? void 0 : v.data) === null || _c === void 0 ? void 0 : _c.from;
              var to = (_d = v === null || v === void 0 ? void 0 : v.data) === null || _d === void 0 ? void 0 : _d.to;
              var rDate = new Date(rowValue);
              return rDate >= from && rDate <= to;
            }

            return (v === null || v === void 0 ? void 0 : v.text) === rowValue;
          });
        });
        if ((newFilteredItems === null || newFilteredItems === void 0 ? void 0 : newFilteredItems.length) > 0) filteredRows = newFilteredItems;
      };

      try {
        for (var _f = __values(groupedMaps.entries()), _g = _f.next(); !_g.done; _g = _f.next()) {
          var _h = __read(_g.value, 2),
              mapKey = _h[0],
              map = _h[1];

          _loop_3(mapKey, map);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_g && !_g.done && (_b = _f["return"])) _b.call(_f);
        } finally {
          if (e_2) throw e_2.error;
        }
      }

      filteredRows = filteredRows.filter(function (obj, pos, arr) {
        return arr.map(function (mapObj) {
          return mapObj === null || mapObj === void 0 ? void 0 : mapObj.Id;
        }).indexOf(obj === null || obj === void 0 ? void 0 : obj.Id) === pos;
      });
      setActualRows(filteredRows);
      setIsFilterPanel(false);
      if (!!onItemsFiltered) onItemsFiltered(filteredRows);
    };
  };

  GridViewFilter.filterFromColumns = function (hiddenKeys, columns) {
    return columns.filter(function (c) {
      return !(hiddenKeys === null || hiddenKeys === void 0 ? void 0 : hiddenKeys.includes(c === null || c === void 0 ? void 0 : c.key));
    });
  };

  GridViewFilter.onSearchItemChange = function (_a) {
    var allRows = _a.allRows,
        searchCb = _a.searchCb,
        setActualRows = _a.setActualRows,
        onSearchBoxItemsFiltered = _a.onSearchBoxItemsFiltered;
    return function (searchText, keys) {
      var e_3, _a;

      var allFilteredRows = [];

      if (!searchText) {
        setActualRows(allRows);
        return [];
      }

      var _loop_4 = function _loop_4(key) {
        var filterFrom = (allFilteredRows === null || allFilteredRows === void 0 ? void 0 : allFilteredRows.length) > 0 ? allFilteredRows : allRows;
        var filteredValues = filterFrom.filter(function (item) {
          var _a, _b;

          var foundValues = (_a = Utils_1.Utils.getNestedObject(item, key === null || key === void 0 ? void 0 : key.split('.'))) === null || _a === void 0 ? void 0 : _a.toString();
          return (_b = foundValues === null || foundValues === void 0 ? void 0 : foundValues.toLowerCase()) === null || _b === void 0 ? void 0 : _b.startsWith(searchText === null || searchText === void 0 ? void 0 : searchText.toLowerCase());
        });
        allFilteredRows.push.apply(allFilteredRows, __spreadArray([], __read(filteredValues), false));
      };

      try {
        for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
          var key = keys_1_1.value;

          _loop_4(key);
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (keys_1_1 && !keys_1_1.done && (_a = keys_1["return"])) _a.call(keys_1);
        } finally {
          if (e_3) throw e_3.error;
        }
      }

      searchCb(allFilteredRows);
      if (!!onSearchBoxItemsFiltered) onSearchBoxItemsFiltered(allFilteredRows);
      return allFilteredRows;
    };
  };

  return GridViewFilter;
}();

exports.GridViewFilter = GridViewFilter;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__read, "__read", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\handlers\\GridViewFilter.ts");
  reactHotLoader.register(__spreadArray, "__spreadArray", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\handlers\\GridViewFilter.ts");
  reactHotLoader.register(__values, "__values", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\handlers\\GridViewFilter.ts");
  reactHotLoader.register(GridViewFilter, "GridViewFilter", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\handlers\\GridViewFilter.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/GridView/handlers/GridViewGrouping.ts":
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
exports.GridViewGrouping = void 0;

var Utils_1 = __webpack_require__("./src/helpers/Utils.ts");

var GridViewGrouping =
/** @class */
function () {
  function GridViewGrouping() {}

  GridViewGrouping.onApplyGrouping = function (_a) {
    var actualRows = _a.actualRows,
        cols = _a.cols,
        setGroups = _a.setGroups,
        setIsGroupPanel = _a.setIsGroupPanel,
        emptyGroupLabel = _a.emptyGroupLabel,
        onItemsGrouped = _a.onItemsGrouped;
    return function (keyAndName) {
      var _a;

      var defaultEmptyLabel = emptyGroupLabel !== null && emptyGroupLabel !== void 0 ? emptyGroupLabel : 'Sem itens definidos';
      var selectedKey = (_a = keyAndName === null || keyAndName === void 0 ? void 0 : keyAndName.split(';')) === null || _a === void 0 ? void 0 : _a[0];

      if (!keyAndName || selectedKey === '@NONE') {
        setIsGroupPanel(false);
        if (!!onItemsGrouped) onItemsGrouped({
          selectedKey: selectedKey,
          setGroups: setGroups
        });
        return setGroups(undefined);
      }

      var groups = __spreadArray([], __read(actualRows), false).sort(function (a, b) {
        return (a === null || a === void 0 ? void 0 : a.Id) - (b === null || b === void 0 ? void 0 : b.Id);
      }).reduce(function (acc, cur) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;

        var _k = __read(keyAndName === null || keyAndName === void 0 ? void 0 : keyAndName.split(';'), 2),
            key = _k[0],
            name = _k[1];

        var valueFromKey = (_a = Utils_1.Utils.getNestedObject(cur, key.split('.'))) !== null && _a !== void 0 ? _a : defaultEmptyLabel;
        var isKeyADate = (_c = (_b = cols.find(function (i) {
          return (i === null || i === void 0 ? void 0 : i.key) === key;
        })) === null || _b === void 0 ? void 0 : _b.dateConversionOptions) === null || _c === void 0 ? void 0 : _c.shouldConvertToLocaleString;
        if (isKeyADate) valueFromKey = Utils_1.Utils.convertIsoToLocaleString(valueFromKey, (_e = (_d = cols.find(function (i) {
          return (i === null || i === void 0 ? void 0 : i.key) === key;
        })) === null || _d === void 0 ? void 0 : _d.dateConversionOptions) === null || _e === void 0 ? void 0 : _e.locales, (_g = (_f = cols.find(function (i) {
          return (i === null || i === void 0 ? void 0 : i.key) === key;
        })) === null || _f === void 0 ? void 0 : _f.dateConversionOptions) === null || _g === void 0 ? void 0 : _g.formatOptions);
        var group = {
          key: valueFromKey,
          name: "".concat(name, ": ").concat(valueFromKey),
          startIndex: 0,
          count: 1
        };

        if (acc.length === 0) {
          acc.push(group);
          return acc;
        } else if (!(acc === null || acc === void 0 ? void 0 : acc.map(function (i) {
          return i === null || i === void 0 ? void 0 : i.key;
        }).includes(valueFromKey))) {
          var count = acc === null || acc === void 0 ? void 0 : acc.filter(function (g) {
            return (g === null || g === void 0 ? void 0 : g.key) === valueFromKey;
          }).length;
          var startIndex = ((_h = acc[acc.length - 1]) === null || _h === void 0 ? void 0 : _h.startIndex) + ((_j = acc[acc.length - 1]) === null || _j === void 0 ? void 0 : _j.count);
          acc.push({
            key: valueFromKey,
            name: "".concat(name, ": ").concat(valueFromKey),
            startIndex: startIndex,
            count: count
          });
        }

        var lastAcc = acc[acc.length - 1];
        if ((lastAcc === null || lastAcc === void 0 ? void 0 : lastAcc.key) === valueFromKey) acc[acc.length - 1].count++;
        return acc;
      }, []);

      setGroups(groups);
      setIsGroupPanel(false);
      if (!!onItemsGrouped) onItemsGrouped({
        selectedKey: selectedKey,
        setGroups: setGroups
      });
    };
  };

  return GridViewGrouping;
}();

exports.GridViewGrouping = GridViewGrouping;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__read, "__read", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\handlers\\GridViewGrouping.ts");
  reactHotLoader.register(__spreadArray, "__spreadArray", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\handlers\\GridViewGrouping.ts");
  reactHotLoader.register(GridViewGrouping, "GridViewGrouping", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\handlers\\GridViewGrouping.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/GridView/handlers/GridViewMapper.ts":
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
exports.GridViewMapper = void 0;
/**Internal class to be used when using map data operations on the GridView component context as a whole. */

var GridViewMapper =
/** @class */
function () {
  function GridViewMapper() {}
  /**
   * Creates a new map collection with the first level keys being the real keys, and the values being the maps with selected maps (with key and values)
   * @example
   * ```ts
   * const selectedItemsMap = new Map([['0_User.Title', data], ['1_User.Title', data]]);
   * const groupedMap = GridViewMapper.groupMaps(selectedItemsMap);
   * //It'll be: key: 'User.Title', value: [Map([['0_User.Title', data], ['1_User.Title', data]])]
   * ```
   **/


  GridViewMapper.groupMaps = function (selectedItems) {
    var mapsByKeyKind = new Map();
    selectedItems.forEach(function (_, key, map) {
      var keyName = key.split('_')[1];
      if (!keyName && !key.includes('_')) keyName = key;
      var doesNotHaveKey = !mapsByKeyKind.has(keyName);

      var sameMapsList = __spreadArray([], __read(map), false).filter(function (d) {
        return d[0] === key;
      });

      if (doesNotHaveKey) mapsByKeyKind.set(keyName, new Map(sameMapsList));else {
        var thisKindMap_1 = mapsByKeyKind.get(keyName);
        sameMapsList.forEach(function (d) {
          return thisKindMap_1 === null || thisKindMap_1 === void 0 ? void 0 : thisKindMap_1.set(d[0], d[1]);
        });
      }
    });
    return mapsByKeyKind;
  };

  GridViewMapper.mapFilterOptions = function (options) {
    return options.filter(function (i) {
      return (i === null || i === void 0 ? void 0 : i.text) !== null && (i === null || i === void 0 ? void 0 : i.text) !== undefined;
    }).map(function (_a) {
      var key = _a.key,
          text = _a.text,
          data = _a.data;
      return {
        key: key,
        text: text,
        data: data
      };
    });
  };

  return GridViewMapper;
}();

exports.GridViewMapper = GridViewMapper;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__read, "__read", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\handlers\\GridViewMapper.ts");
  reactHotLoader.register(__spreadArray, "__spreadArray", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\handlers\\GridViewMapper.ts");
  reactHotLoader.register(GridViewMapper, "GridViewMapper", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\handlers\\GridViewMapper.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/GridView/hooks/useGridCardRendering.tsx":
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
exports.useGridCardRendering = void 0;

var React = __webpack_require__("react");

var react_1 = __webpack_require__("react");

var Utils_1 = __webpack_require__("./src/helpers/Utils.ts");

function useGridCardRendering(_a) {
  var renderAs = _a.renderAs,
      setEnableGrouping = _a.setEnableGrouping,
      setShouldRenderCard = _a.setShouldRenderCard,
      enableGrouping = _a.enableGrouping,
      actualRows = _a.actualRows,
      shouldRenderCard = _a.shouldRenderCard,
      cardProps = _a.cardProps,
      onRenderCustomComponent = _a.onRenderCustomComponent,
      onItemClick = _a.onItemClick;
  (0, react_1.useEffect)(function () {
    var _a;

    if (renderAs === 'card') {
      setShouldRenderCard(true);
      if (!cardProps || ((_a = Object === null || Object === void 0 ? void 0 : Object.keys(cardProps)) === null || _a === void 0 ? void 0 : _a.length) === 0) console.error("[GridView] - You are using `renderAs: card`, but you are not passing cardProps. This will not work.");
      return setEnableGrouping(false);
    }

    setShouldRenderCard(false);
    if (enableGrouping) setEnableGrouping(true);
  }, [renderAs]);
  var Card = (0, react_1.useMemo)(function () {
    if (!shouldRenderCard) return null;
    return (0, react_1.lazy)(function () {
      return Promise.resolve().then(function () {
        return __webpack_require__("./src/Card/Card.tsx");
      }).then(function (module) {
        return {
          "default": module === null || module === void 0 ? void 0 : module["default"]
        };
      });
    });
  }, [shouldRenderCard]);
  var CardsList = (0, react_1.useMemo)(function () {
    if (!Card || renderAs === 'list') return null;
    return actualRows === null || actualRows === void 0 ? void 0 : actualRows.map(function (row) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;

      if (!!onRenderCustomComponent) return onRenderCustomComponent(row);
      var cardTitle = Utils_1.Utils.getNestedObject(row, (_a = cardProps === null || cardProps === void 0 ? void 0 : cardProps.cardTitleKey) === null || _a === void 0 ? void 0 : _a.split('.')) || '';
      var cardSubtitle = Utils_1.Utils.getNestedObject(row, (_b = cardProps === null || cardProps === void 0 ? void 0 : cardProps.cardSubtitleKey) === null || _b === void 0 ? void 0 : _b.split('.')) || '';
      if ((_c = cardProps === null || cardProps === void 0 ? void 0 : cardProps.titleDateConversionOptions) === null || _c === void 0 ? void 0 : _c.shouldConvertToLocaleString) cardTitle = Utils_1.Utils.convertIsoToLocaleString(cardTitle, (_d = cardProps === null || cardProps === void 0 ? void 0 : cardProps.titleDateConversionOptions) === null || _d === void 0 ? void 0 : _d.locales, (_e = cardProps === null || cardProps === void 0 ? void 0 : cardProps.titleDateConversionOptions) === null || _e === void 0 ? void 0 : _e.formatOptions);
      if ((_f = cardProps === null || cardProps === void 0 ? void 0 : cardProps.subtitleDateConversionOptions) === null || _f === void 0 ? void 0 : _f.shouldConvertToLocaleString) cardSubtitle = Utils_1.Utils.convertIsoToLocaleString(cardSubtitle, (_g = cardProps === null || cardProps === void 0 ? void 0 : cardProps.subtitleDateConversionOptions) === null || _g === void 0 ? void 0 : _g.locales, (_h = cardProps === null || cardProps === void 0 ? void 0 : cardProps.subtitleDateConversionOptions) === null || _h === void 0 ? void 0 : _h.formatOptions);
      var rightCol = cardProps === null || cardProps === void 0 ? void 0 : cardProps.rightColumn;
      var cIndicator = cardProps === null || cardProps === void 0 ? void 0 : cardProps.circleIndicator;
      var titleValue = Utils_1.Utils.getNestedObject(row, (_j = cIndicator === null || cIndicator === void 0 ? void 0 : cIndicator.title) === null || _j === void 0 ? void 0 : _j.split('.'));
      if ((_k = cIndicator === null || cIndicator === void 0 ? void 0 : cIndicator.dateConversionOptions) === null || _k === void 0 ? void 0 : _k.shouldConvertToLocaleString) titleValue = Utils_1.Utils.convertIsoToLocaleString(titleValue, (_l = cIndicator === null || cIndicator === void 0 ? void 0 : cIndicator.dateConversionOptions) === null || _l === void 0 ? void 0 : _l.locales, (_m = cIndicator === null || cIndicator === void 0 ? void 0 : cIndicator.dateConversionOptions) === null || _m === void 0 ? void 0 : _m.formatOptions);

      var circleIndicator = __assign(__assign({}, cIndicator), {
        title: titleValue
      });

      var newCardProps = __assign(__assign({}, cardProps), {
        cardTitle: cardTitle,
        cardSubtitle: cardSubtitle,
        cardRightColInformation: (rightCol === null || rightCol === void 0 ? void 0 : rightCol.keys) && __assign(__assign({}, rightCol), {
          values: (_o = rightCol === null || rightCol === void 0 ? void 0 : rightCol.keys) === null || _o === void 0 ? void 0 : _o.map(function (opt) {
            var _a, _b, _c, _d, _e;

            var title = Utils_1.Utils.getNestedObject(row, (_a = opt === null || opt === void 0 ? void 0 : opt.title) === null || _a === void 0 ? void 0 : _a.split('.'));
            if ((_b = opt === null || opt === void 0 ? void 0 : opt.dateConversionOptions) === null || _b === void 0 ? void 0 : _b.shouldConvertToLocaleString) title = Utils_1.Utils.convertIsoToLocaleString(title, (_c = opt === null || opt === void 0 ? void 0 : opt.dateConversionOptions) === null || _c === void 0 ? void 0 : _c.locales, (_d = opt === null || opt === void 0 ? void 0 : opt.dateConversionOptions) === null || _d === void 0 ? void 0 : _d.formatOptions);
            return {
              title: title,
              style: (_e = opt === null || opt === void 0 ? void 0 : opt.style) !== null && _e !== void 0 ? _e : {
                fontSize: 16,
                marginBottom: 4,
                fontWeight: 600
              }
            };
          })
        }),
        circleIndicator: circleIndicator,
        onClickDownButton: function onClickDownButton(e) {
          onItemClick(row);
          if (cardProps === null || cardProps === void 0 ? void 0 : cardProps.onCardClick) cardProps === null || cardProps === void 0 ? void 0 : cardProps.onCardClick(e);
        }
      });

      return React.createElement(Card, __assign({
        key: row === null || row === void 0 ? void 0 : row.Id
      }, newCardProps));
    });
  }, [Card, cardProps, actualRows, renderAs, onRenderCustomComponent]);
  return CardsList;
}

exports.useGridCardRendering = useGridCardRendering;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__assign, "__assign", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\hooks\\useGridCardRendering.tsx");
  reactHotLoader.register(useGridCardRendering, "useGridCardRendering", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\hooks\\useGridCardRendering.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/GridView/hooks/useGridController.tsx":
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGridController = void 0;

var React = __webpack_require__("react");

var useRefWithCallback_1 = __webpack_require__("./src/hooks/useRefWithCallback.ts");

var Utils_1 = __webpack_require__("./src/helpers/Utils.ts");

var react_1 = __webpack_require__("react");

var useGridCardRendering_1 = __webpack_require__("./src/GridView/hooks/useGridCardRendering.tsx");

var GridViewFilter_1 = __webpack_require__("./src/GridView/handlers/GridViewFilter.ts");

var GridViewGrouping_1 = __webpack_require__("./src/GridView/handlers/GridViewGrouping.ts");

var GridViewMapper_1 = __webpack_require__("./src/GridView/handlers/GridViewMapper.ts");

var enums_1 = __webpack_require__("./src/helpers/enums.ts");
/** TO-DO: Use `useReducer` with context for better code splitting. */


function useGridController(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;

  var _q = __read((0, react_1.useState)((props === null || props === void 0 ? void 0 : props.renderAs) || 'list'), 2),
      renderAs = _q[0],
      _setRenderAs = _q[1];

  var _r = __read((0, react_1.useState)((props === null || props === void 0 ? void 0 : props.renderAs) === 'card'), 2),
      shouldRenderCard = _r[0],
      setShouldRenderCard = _r[1];

  var _s = __read((0, react_1.useState)(props === null || props === void 0 ? void 0 : props.columns), 2),
      cols = _s[0],
      setCols = _s[1];

  var _t = __read((0, react_1.useState)(undefined), 2),
      groups = _t[0],
      setGroups = _t[1];

  var _u = __read((0, react_1.useState)((_b = (_a = props === null || props === void 0 ? void 0 : props.headerOptions) === null || _a === void 0 ? void 0 : _a.enableGrouping) !== null && _b !== void 0 ? _b : false), 2),
      enableGrouping = _u[0],
      setEnableGrouping = _u[1];

  var _v = __read((0, react_1.useState)(new Map()), 2),
      actualFilteredValues = _v[0],
      setActualFilteredValues = _v[1];

  var _w = __read((0, react_1.useState)(null), 2),
      selectedGroupKeys = _w[0],
      setSelectedGroupKeys = _w[1];

  var _x = __read((0, react_1.useState)(props === null || props === void 0 ? void 0 : props.rows), 2),
      allRows = _x[0],
      setAllRows = _x[1];

  var _y = __read((0, react_1.useState)((_c = props === null || props === void 0 ? void 0 : props.rows) !== null && _c !== void 0 ? _c : []), 2),
      actualRows = _y[0],
      setActualRows = _y[1];

  var _z = __read((0, react_1.useState)(false), 2),
      isFilterPanelOpen = _z[0],
      setIsFilterPanel = _z[1];

  var _0 = __read((0, react_1.useState)(false), 2),
      isGroupPanelOpen = _0[0],
      setIsGroupPanel = _0[1];

  var _1 = __read((0, react_1.useState)(null), 2),
      fromDate = _1[0],
      setFromDate = _1[1];

  var _3 = __read((0, react_1.useState)(new Date()), 2),
      toDate = _3[0],
      setToDate = _3[1];

  var _4 = __read((0, useRefWithCallback_1.useRefWithCallback)([]), 2),
      searchCb = _4[0],
      currentSearchBoxItems = _4[1];

  var _5 = __read((0, react_1.useState)([]), 2),
      memoizedAvailableFilter = _5[0],
      setAvailableFilters = _5[1];

  var visibleCols = (0, react_1.useMemo)(function () {
    return cols === null || cols === void 0 ? void 0 : cols.filter(function (c) {
      return !(c === null || c === void 0 ? void 0 : c.hideColumn);
    });
  }, [cols]);
  (0, react_1.useEffect)(function () {
    _setRenderAs(props === null || props === void 0 ? void 0 : props.renderAs);
  }, [props === null || props === void 0 ? void 0 : props.renderAs]);

  var onItemClick = function onItemClick(item) {
    return !!(props === null || props === void 0 ? void 0 : props.onItemClick) && (props === null || props === void 0 ? void 0 : props.onItemClick(item));
  };

  var onColumnClick = function onColumnClick(currentRows) {
    return function (_, column) {
      if (!column) return;
      var isSortedDescending = column === null || column === void 0 ? void 0 : column.isSortedDescending;
      if (column === null || column === void 0 ? void 0 : column.isSorted) isSortedDescending = !isSortedDescending;
      var sortedItems = Utils_1.Utils.copyAndSort(currentRows, column === null || column === void 0 ? void 0 : column.key, isSortedDescending);
      setActualRows(sortedItems);
      setCols(function (c) {
        return c.map(function (col) {
          col.isSorted = col.key === (column === null || column === void 0 ? void 0 : column.key);
          if (col === null || col === void 0 ? void 0 : col.isSorted) col.isSortedDescending = isSortedDescending;
          return col;
        });
      });
    };
  };

  var CardsList = (0, useGridCardRendering_1.useGridCardRendering)({
    renderAs: renderAs,
    actualRows: actualRows,
    onItemClick: onItemClick,
    cardProps: props === null || props === void 0 ? void 0 : props.cardProps,
    enableGrouping: enableGrouping,
    onRenderCustomComponent: props === null || props === void 0 ? void 0 : props.onRenderCustomComponent,
    setEnableGrouping: setEnableGrouping,
    setShouldRenderCard: setShouldRenderCard,
    shouldRenderCard: shouldRenderCard
  });
  (0, react_1.useEffect)(function () {
    var _a;

    if (!((_a = props === null || props === void 0 ? void 0 : props.columns) === null || _a === void 0 ? void 0 : _a.length)) return;
    var columns = props === null || props === void 0 ? void 0 : props.columns;
    var convertedColumns = columns.map(function (c) {
      var _a, _b, _c;

      if (((_a = c === null || c === void 0 ? void 0 : c.key) === null || _a === void 0 ? void 0 : _a.includes('.')) || ((_b = c === null || c === void 0 ? void 0 : c.fieldName) === null || _b === void 0 ? void 0 : _b.includes('.'))) {
        c.onRender = function (item, _2) {
          var _a;

          var fieldValue = Utils_1.Utils.getNestedObject(item, (_a = c === null || c === void 0 ? void 0 : c.fieldName) === null || _a === void 0 ? void 0 : _a.split('.'));
          return React.createElement("span", null, fieldValue);
        };

        return c;
      } else if ((_c = c === null || c === void 0 ? void 0 : c.dateConversionOptions) === null || _c === void 0 ? void 0 : _c.shouldConvertToLocaleString) {
        c.onRender = function (item, _2) {
          var _a, _b, _c;

          var fieldValue = Utils_1.Utils.convertIsoToLocaleString(item[(_a = c === null || c === void 0 ? void 0 : c.fieldName) !== null && _a !== void 0 ? _a : c === null || c === void 0 ? void 0 : c.key], (_b = c === null || c === void 0 ? void 0 : c.dateConversionOptions) === null || _b === void 0 ? void 0 : _b.locales, (_c = c === null || c === void 0 ? void 0 : c.dateConversionOptions) === null || _c === void 0 ? void 0 : _c.formatOptions);
          return React.createElement("span", null, fieldValue);
        };
      }

      return c;
    });
    setCols(convertedColumns);
  }, [props === null || props === void 0 ? void 0 : props.columns]);
  (0, react_1.useEffect)(function () {
    setActualRows(props === null || props === void 0 ? void 0 : props.rows);
    setAllRows(props === null || props === void 0 ? void 0 : props.rows);
  }, [props === null || props === void 0 ? void 0 : props.rows]);
  (0, react_1.useEffect)(function () {
    setCols(function (columns) {
      return __spreadArray([], __read(columns.map(function (c) {
        return __assign(__assign({}, c), {
          onColumnClick: onColumnClick(actualRows)
        });
      })), false);
    });
  }, [actualRows === null || actualRows === void 0 ? void 0 : actualRows.length]);
  (0, react_1.useEffect)(function () {
    setAvailableFilters(__spreadArray([], __read(GridViewFilter_1.GridViewFilter.buildFilters(allRows, cols, props === null || props === void 0 ? void 0 : props.hiddenFilterKeys)), false));
  }, [allRows === null || allRows === void 0 ? void 0 : allRows.length, cols === null || cols === void 0 ? void 0 : cols.length, (_d = props === null || props === void 0 ? void 0 : props.hiddenGroupKeys) === null || _d === void 0 ? void 0 : _d.length]);
  var filterOptionsMatrix = (0, react_1.useMemo)(function () {
    return memoizedAvailableFilter.map(function (f) {
      return GridViewMapper_1.GridViewMapper.mapFilterOptions(f === null || f === void 0 ? void 0 : f.options);
    });
  }, [memoizedAvailableFilter]);
  var filterPanelConfig = {
    isOpen: isFilterPanelOpen,
    onApply: GridViewFilter_1.GridViewFilter.onApplyFilter({
      allRows: allRows,
      setActualRows: setActualRows,
      setIsFilterPanel: setIsFilterPanel,
      applyCustomFilter: props === null || props === void 0 ? void 0 : props.applyCustomFilter,
      onItemsFiltered: props === null || props === void 0 ? void 0 : props.onItemsFiltered
    }),
    onCancel: function onCancel() {
      setIsFilterPanel(false);
    },
    onClose: function onClose() {
      setIsFilterPanel(false);
    },
    panelTitle: (_e = props === null || props === void 0 ? void 0 : props.filterPanelTitle) !== null && _e !== void 0 ? _e : 'Filtrar',
    actualFilteredValues: actualFilteredValues,
    setActualFilteredValues: setActualFilteredValues,
    fromDate: fromDate,
    toDate: toDate,
    setFromDate: setFromDate,
    setToDate: setToDate,
    filterOptionsMatrix: filterOptionsMatrix,
    availableFilters: memoizedAvailableFilter
  };
  var groupPanelConfig = {
    isOpen: isGroupPanelOpen,
    onCancel: function onCancel() {
      setIsGroupPanel(false);
    },
    onClose: function onClose() {
      setIsGroupPanel(false);
    },
    onOpen: function onOpen() {
      setIsGroupPanel(true);
    },
    panelTitle: (_f = props === null || props === void 0 ? void 0 : props.groupPanelTitle) !== null && _f !== void 0 ? _f : 'Agrupar',
    setSelectedGroupKeys: setSelectedGroupKeys,
    selectedGroupKeys: selectedGroupKeys,
    options: (_h = (_g = GridViewFilter_1.GridViewFilter.filterFromColumns(props === null || props === void 0 ? void 0 : props.hiddenGroupKeys, cols)) === null || _g === void 0 ? void 0 : _g.map(function (c) {
      return {
        key: c === null || c === void 0 ? void 0 : c.key,
        text: c === null || c === void 0 ? void 0 : c.name
      };
    })) !== null && _h !== void 0 ? _h : [],
    onApply: GridViewGrouping_1.GridViewGrouping.onApplyGrouping({
      actualRows: actualRows,
      cols: cols,
      emptyGroupLabel: props === null || props === void 0 ? void 0 : props.emptyGroupLabel,
      setIsGroupPanel: setIsGroupPanel,
      setGroups: setGroups,
      onItemsGrouped: props === null || props === void 0 ? void 0 : props.onItemsGrouped
    })
  };

  var listConfig = __assign(__assign({}, props === null || props === void 0 ? void 0 : props.headerOptions), {
    onSearchItemChange: GridViewFilter_1.GridViewFilter.onSearchItemChange({
      allRows: allRows,
      searchCb: searchCb,
      setActualRows: setActualRows,
      onSearchBoxItemsFiltered: props === null || props === void 0 ? void 0 : props.onSearchBoxItemsFiltered
    }),
    setRenderAs: function setRenderAs() {
      return renderAs === 'card' ? _setRenderAs('list') : _setRenderAs('card');
    },
    setIsFilterPanelOpen: function setIsFilterPanelOpen(value) {
      setIsFilterPanel(value);
    },
    setIsGroupPanelOpen: function setIsGroupPanelOpen(value) {
      setIsGroupPanel(value);
    },
    enableSearch: (_k = (_j = props === null || props === void 0 ? void 0 : props.headerOptions) === null || _j === void 0 ? void 0 : _j.enableSearch) !== null && _k !== void 0 ? _k : true,
    enableFilter: (_m = (_l = props === null || props === void 0 ? void 0 : props.headerOptions) === null || _l === void 0 ? void 0 : _l.enableFilter) !== null && _m !== void 0 ? _m : true,
    enableCardView: (_p = (_o = props === null || props === void 0 ? void 0 : props.headerOptions) === null || _o === void 0 ? void 0 : _o.enableCardView) !== null && _p !== void 0 ? _p : false,
    enableGrouping: enableGrouping,
    onClickSearchIcon: function onClickSearchIcon(callerType, text, key) {
      if (callerType === enums_1.IconClickCaller.CLICK) return setActualRows(currentSearchBoxItems === null || currentSearchBoxItems === void 0 ? void 0 : currentSearchBoxItems.current);

      if (callerType === enums_1.IconClickCaller.ENTER) {
        if (!text) return setActualRows(allRows);
        var filteredItems = GridViewFilter_1.GridViewFilter.onSearchItemChange({
          allRows: allRows,
          searchCb: searchCb,
          setActualRows: setActualRows,
          onSearchBoxItemsFiltered: props === null || props === void 0 ? void 0 : props.onSearchBoxItemsFiltered
        })(text, key);
        searchCb(filteredItems);
        setActualRows(filteredItems);
      }
    },
    onFilterIconClick: props === null || props === void 0 ? void 0 : props.onFilterIconClick,
    onGroupIconClick: props === null || props === void 0 ? void 0 : props.onGroupIconClick,
    onSearchBoxClick: props === null || props === void 0 ? void 0 : props.onSearchBoxClick
  });

  return {
    state: {
      actualRows: actualRows,
      visibleCols: visibleCols,
      filterPanelConfig: filterPanelConfig,
      groupPanelConfig: groupPanelConfig,
      isFilterPanelOpen: isFilterPanelOpen,
      isGroupPanelOpen: isGroupPanelOpen,
      listConfig: listConfig,
      shouldRenderCard: shouldRenderCard,
      groups: groups
    },
    handlers: {
      onItemClick: onItemClick
    },
    JSX: {
      CardsList: CardsList
    }
  };
}

exports.useGridController = useGridController;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__assign, "__assign", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\hooks\\useGridController.tsx");
  reactHotLoader.register(__read, "__read", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\hooks\\useGridController.tsx");
  reactHotLoader.register(__spreadArray, "__spreadArray", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\hooks\\useGridController.tsx");
  reactHotLoader.register(useGridController, "useGridController", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\hooks\\useGridController.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/GridView/hooks/usePanelFilterController.ts":
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePanelFilterController = void 0;

var react_1 = __webpack_require__("react");

var Contexts_1 = __webpack_require__("./src/GridView/Contexts.ts");

var enums_1 = __webpack_require__("./src/helpers/enums.ts");

function usePanelFilterController() {
  var _a = (0, react_1.useContext)(Contexts_1.FilterPanelContext),
      isOpen = _a.isOpen,
      onClose = _a.onClose,
      panelTitle = _a.panelTitle,
      onCancel = _a.onCancel,
      onApply = _a.onApply,
      actualFilteredValues = _a.actualFilteredValues,
      setActualFilteredValues = _a.setActualFilteredValues,
      onOpen = _a.onOpen,
      filterOptionsMatrix = _a.filterOptionsMatrix,
      availableFilters = _a.availableFilters;

  var _b = __read((0, react_1.useMemo)(function () {
    var Panel = (0, react_1.lazy)(function () {
      return Promise.resolve().then(function () {
        return __webpack_require__("@fluentui/react/lib/Panel");
      }).then(function (_a) {
        var Panel = _a.Panel;
        return {
          "default": Panel
        };
      });
    });
    var DropDown = (0, react_1.lazy)(function () {
      return Promise.resolve().then(function () {
        return __webpack_require__("@fluentui/react/lib/Dropdown");
      }).then(function (_a) {
        var Dropdown = _a.Dropdown;
        return {
          "default": Dropdown
        };
      });
    });
    var PrimaryButton = (0, react_1.lazy)(function () {
      return Promise.resolve().then(function () {
        return __webpack_require__("@fluentui/react/lib/Button");
      }).then(function (_a) {
        var PrimaryButton = _a.PrimaryButton;
        return {
          "default": PrimaryButton
        };
      });
    });
    var DefaultButton = (0, react_1.lazy)(function () {
      return Promise.resolve().then(function () {
        return __webpack_require__("@fluentui/react/lib/Button");
      }).then(function (_a) {
        var DefaultButton = _a.DefaultButton;
        return {
          "default": DefaultButton
        };
      });
    });
    var TagPicker = (0, react_1.lazy)(function () {
      return Promise.resolve().then(function () {
        return __webpack_require__("@fluentui/react/lib/Pickers");
      }).then(function (_a) {
        var TagPicker = _a.TagPicker;
        return {
          "default": TagPicker
        };
      });
    });
    var Label = (0, react_1.lazy)(function () {
      return Promise.resolve().then(function () {
        return __webpack_require__("@fluentui/react/lib/Label");
      }).then(function (_a) {
        var Label = _a.Label;
        return {
          "default": Label
        };
      });
    });
    return [Panel, DropDown, PrimaryButton, DefaultButton, TagPicker, Label];
  }, []), 6),
      FluentPanel = _b[0],
      Dropdown = _b[1],
      PrimaryButton = _b[2],
      DefaultButton = _b[3],
      TagPicker = _b[4],
      Label = _b[5];

  var lastAddedTag = (0, react_1.useRef)(null);

  var onAddOrRemoveToMap = function onAddOrRemoveToMap(rootItemKey, option) {
    //If the current option is selected and is not already on the actualFilteredValues map, add it
    //else if the current option is not select and all the other options are not select too, remove the key from the map
    var copyMap = new Map(actualFilteredValues);
    if (!option.key) return;

    if (option.selected && !copyMap.has(option === null || option === void 0 ? void 0 : option.key)) {
      copyMap.set(option.key, {
        rootItemKey: rootItemKey,
        itemKey: option.key,
        data: option === null || option === void 0 ? void 0 : option.data,
        text: option === null || option === void 0 ? void 0 : option.text
      });
    } else if (!option.selected && copyMap.has(option === null || option === void 0 ? void 0 : option.key)) {
      copyMap["delete"](option === null || option === void 0 ? void 0 : option.key);
    } else if (option.selected && copyMap.has(option === null || option === void 0 ? void 0 : option.key) && (option === null || option === void 0 ? void 0 : option.isDateComponent)) {
      copyMap.set(option.key, {
        rootItemKey: rootItemKey,
        itemKey: option.key,
        data: option === null || option === void 0 ? void 0 : option.data,
        text: option === null || option === void 0 ? void 0 : option.text
      });
    }

    setActualFilteredValues(copyMap);
  };

  (0, react_1.useEffect)(function () {
    if (onOpen) onOpen();
  }, []);

  var listContainsTagList = function listContainsTagList(tag, tagList) {
    if (!tagList || !tagList.length || tagList.length === 0) return false;
    return tagList.some(function (compareTag) {
      return (compareTag === null || compareTag === void 0 ? void 0 : compareTag.key) === (tag === null || tag === void 0 ? void 0 : tag.key);
    });
  };

  var getDefaultDropdownSelectedKeys = function getDefaultDropdownSelectedKeys() {
    var selectedKeys = [];
    actualFilteredValues.forEach(function (_, k) {
      selectedKeys.push(k);
    });
    return selectedKeys;
  };

  var getDefaultSelectedTag = function getDefaultSelectedTag(keyToFilter) {
    var selectedTags = [];
    actualFilteredValues.forEach(function (d, k) {
      var keyKind = k === null || k === void 0 ? void 0 : k.split('_')[1];
      if (keyKind === keyToFilter) selectedTags.push({
        key: keyKind,
        text: d === null || d === void 0 ? void 0 : d.text,
        data: d === null || d === void 0 ? void 0 : d.data,
        selected: true,
        name: d === null || d === void 0 ? void 0 : d.text
      });
    });
    return selectedTags;
  };

  var getDefaultSelectedSlider = function getDefaultSelectedSlider(keyToFilter) {
    var _a, _b;

    var mapWithSameKey = (_a = __spreadArray([], __read(actualFilteredValues), false)) === null || _a === void 0 ? void 0 : _a.find(function (_a) {
      var _b = __read(_a, 1),
          key = _b[0];

      return key === keyToFilter;
    });
    var mapWithSameKeyValue = (_b = mapWithSameKey === null || mapWithSameKey === void 0 ? void 0 : mapWithSameKey[1]) === null || _b === void 0 ? void 0 : _b.data;
    if (mapWithSameKeyValue) return mapWithSameKeyValue === null || mapWithSameKeyValue === void 0 ? void 0 : mapWithSameKeyValue.type;
    return enums_1.RangeType.NONE;
  };

  var getDefaultSelectedPeople = function getDefaultSelectedPeople(keyToFilter) {
    var _a;

    var mapWithSameKey = (_a = __spreadArray([], __read(actualFilteredValues), false)) === null || _a === void 0 ? void 0 : _a.filter(function (_a) {
      var _b = __read(_a, 1),
          key = _b[0];

      var keyKind = key === null || key === void 0 ? void 0 : key.split('_')[1];
      return keyKind === keyToFilter;
    });

    if ((mapWithSameKey === null || mapWithSameKey === void 0 ? void 0 : mapWithSameKey.length) > 0) {
      var people = mapWithSameKey === null || mapWithSameKey === void 0 ? void 0 : mapWithSameKey.map(function (_a) {
        var _b = __read(_a, 2),
            _ = _b[0],
            value = _b[1];

        return value;
      });
      return people;
    }

    return [];
  };

  var onChangeTags = function onChangeTags(options) {
    return function (tags) {
      var _a, _b;

      var copyMap = new Map(actualFilteredValues);

      if (tags.length === 0) {
        options.forEach(function (opt) {
          if (copyMap.has(opt === null || opt === void 0 ? void 0 : opt.key)) copyMap["delete"](opt === null || opt === void 0 ? void 0 : opt.key);
        });
      } else if (!(tags === null || tags === void 0 ? void 0 : tags.map(function (i) {
        return i === null || i === void 0 ? void 0 : i.key;
      }).includes((_a = lastAddedTag === null || lastAddedTag === void 0 ? void 0 : lastAddedTag.current) === null || _a === void 0 ? void 0 : _a.key))) {
        copyMap["delete"]((_b = lastAddedTag === null || lastAddedTag === void 0 ? void 0 : lastAddedTag.current) === null || _b === void 0 ? void 0 : _b.key);
        lastAddedTag.current = null;
      }

      setActualFilteredValues(copyMap);
    };
  };

  var onTagSelected = function onTagSelected(key) {
    return function (selectedItem) {
      onAddOrRemoveToMap(key, __assign(__assign({}, selectedItem), {
        selected: true
      }));
      lastAddedTag.current = selectedItem;
      return selectedItem;
    };
  };

  var onResolveTagSuggestion = function onResolveTagSuggestion(options) {
    return function (currentFilter, tagList) {
      var result = currentFilter ? options.filter(function (opt) {
        var _a;

        return ((_a = opt === null || opt === void 0 ? void 0 : opt.text) === null || _a === void 0 ? void 0 : _a.toLowerCase().indexOf(currentFilter.toLowerCase())) === 0 && !listContainsTagList(opt, tagList);
      }).map(function (f) {
        return __assign(__assign({}, f), {
          name: f === null || f === void 0 ? void 0 : f.text
        });
      }) : [];
      return result;
    };
  };

  var onRecordDateChange = function onRecordDateChange(key) {
    return function (from, to, type) {
      if (from && to && type !== enums_1.RangeType.NONE) onAddOrRemoveToMap(key, {
        key: key,
        text: "".concat(from === null || from === void 0 ? void 0 : from.toISOString(), " - ").concat(to === null || to === void 0 ? void 0 : to.toISOString()),
        data: {
          from: from,
          to: to,
          type: type
        },
        selected: true,
        isDateComponent: true,
        name: "".concat(from === null || from === void 0 ? void 0 : from.toISOString(), " - ").concat(to === null || to === void 0 ? void 0 : to.toISOString())
      });else {
        var copyMap = new Map(actualFilteredValues);
        copyMap["delete"](key);
        setActualFilteredValues(copyMap);
      }
    };
  };

  var onChangePeople = function onChangePeople(key) {
    return function (items) {
      var copyMap = new Map(actualFilteredValues);

      if (items.length === 0) {
        actualFilteredValues === null || actualFilteredValues === void 0 ? void 0 : actualFilteredValues.forEach(function (_, k) {
          var _a;

          if (((_a = k === null || k === void 0 ? void 0 : k.split('_')) === null || _a === void 0 ? void 0 : _a[1]) === key) copyMap["delete"](k);
        });
        setActualFilteredValues(copyMap);
      } else {
        items.forEach(function (i) {
          onAddOrRemoveToMap(key, {
            key: i === null || i === void 0 ? void 0 : i.key,
            text: i === null || i === void 0 ? void 0 : i.text,
            data: i === null || i === void 0 ? void 0 : i['data'],
            selected: true,
            isDateComponent: false,
            name: i === null || i === void 0 ? void 0 : i.text
          });
        });
      }
    };
  };

  return {
    state: {
      isOpen: isOpen,
      actualFilteredValues: actualFilteredValues,
      panelTitle: panelTitle,
      filterOptionsMatrix: filterOptionsMatrix,
      availableFilters: availableFilters
    },
    handlers: {
      getDefaultDropdownSelectedKeys: getDefaultDropdownSelectedKeys,
      getDefaultSelectedTag: getDefaultSelectedTag,
      getDefaultSelectedSlider: getDefaultSelectedSlider,
      getDefaultSelectedPeople: getDefaultSelectedPeople,
      onAddOrRemoveToMap: onAddOrRemoveToMap,
      onClose: onClose,
      onCancel: onCancel,
      onApply: onApply,
      onOpen: onOpen,
      setActualFilteredValues: setActualFilteredValues,
      onChangeTags: onChangeTags,
      onTagSelected: onTagSelected,
      onResolveTagSuggestion: onResolveTagSuggestion,
      onRecordDateChange: onRecordDateChange,
      onChangePeople: onChangePeople
    },
    JSX: {
      FluentPanel: FluentPanel,
      Dropdown: Dropdown,
      PrimaryButton: PrimaryButton,
      DefaultButton: DefaultButton,
      TagPicker: TagPicker,
      Label: Label
    }
  };
}

exports.usePanelFilterController = usePanelFilterController;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__assign, "__assign", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\hooks\\usePanelFilterController.ts");
  reactHotLoader.register(__read, "__read", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\hooks\\usePanelFilterController.ts");
  reactHotLoader.register(__spreadArray, "__spreadArray", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\hooks\\usePanelFilterController.ts");
  reactHotLoader.register(usePanelFilterController, "usePanelFilterController", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\GridView\\hooks\\usePanelFilterController.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/GridView/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridView = void 0;

var GridView_1 = __webpack_require__("./src/GridView/GridView.tsx");

Object.defineProperty(exports, "GridView", {
  enumerable: true,
  get: function get() {
    return GridView_1.GridView;
  }
});

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

/***/ "./src/helpers/enums.ts":
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
exports.IconClickCaller = exports.RangeType = void 0;
var RangeType;

(function (RangeType) {
  RangeType[RangeType["NONE"] = 0] = "NONE";
  RangeType[RangeType["WEEK"] = 1] = "WEEK";
  RangeType[RangeType["MONTH"] = 2] = "MONTH";
  RangeType[RangeType["YEAR"] = 3] = "YEAR";
  RangeType[RangeType["CUSTOM"] = 4] = "CUSTOM";
})(RangeType = exports.RangeType || (exports.RangeType = {}));

var IconClickCaller;

(function (IconClickCaller) {
  IconClickCaller[IconClickCaller["CLICK"] = 0] = "CLICK";
  IconClickCaller[IconClickCaller["ENTER"] = 1] = "ENTER";
})(IconClickCaller = exports.IconClickCaller || (exports.IconClickCaller = {}));

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RangeType, "RangeType", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\enums.ts");
  reactHotLoader.register(IconClickCaller, "IconClickCaller", "F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\enums.ts");
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

/***/ "@fluentui/react":
/***/ (function(module, exports) {

module.exports = require("@fluentui/react");

/***/ }),

/***/ "@fluentui/react/lib/Button":
/***/ (function(module, exports) {

module.exports = require("@fluentui/react/lib/Button");

/***/ }),

/***/ "@fluentui/react/lib/ChoiceGroup":
/***/ (function(module, exports) {

module.exports = require("@fluentui/react/lib/ChoiceGroup");

/***/ }),

/***/ "@fluentui/react/lib/DatePicker":
/***/ (function(module, exports) {

module.exports = require("@fluentui/react/lib/DatePicker");

/***/ }),

/***/ "@fluentui/react/lib/DetailsList":
/***/ (function(module, exports) {

module.exports = require("@fluentui/react/lib/DetailsList");

/***/ }),

/***/ "@fluentui/react/lib/Dropdown":
/***/ (function(module, exports) {

module.exports = require("@fluentui/react/lib/Dropdown");

/***/ }),

/***/ "@fluentui/react/lib/Label":
/***/ (function(module, exports) {

module.exports = require("@fluentui/react/lib/Label");

/***/ }),

/***/ "@fluentui/react/lib/Panel":
/***/ (function(module, exports) {

module.exports = require("@fluentui/react/lib/Panel");

/***/ }),

/***/ "@fluentui/react/lib/Pickers":
/***/ (function(module, exports) {

module.exports = require("@fluentui/react/lib/Pickers");

/***/ }),

/***/ "@fluentui/react/lib/Slider":
/***/ (function(module, exports) {

module.exports = require("@fluentui/react/lib/Slider");

/***/ }),

/***/ "@fluentui/react/lib/Sticky":
/***/ (function(module, exports) {

module.exports = require("@fluentui/react/lib/Sticky");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map