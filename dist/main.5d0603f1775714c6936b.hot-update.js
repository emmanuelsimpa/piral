"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  font-size: 14px;\n}\n@media (min-width: 768px) {\n  html {\n    font-size: 16px;\n  }\n}\n\n.nav-link {\n  padding: 0;\n}\n\n.nav-item a {\n  padding: 0 0.5rem;\n}\n\na.navbar-brand {\n  white-space: normal;\n  text-align: center;\n  word-break: break-all;\n}\n\n.box-shadow {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);\n}\n\n.error {\n  color: red;\n  font-weight: bold;\n}\n\n.tiles {\n  flex: 1;\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 70px);\n  grid-template-rows: repeat(auto-fit, 70px);\n  grid-gap: 10px;\n  overflow: visible;\n}\n.tiles .tile {\n  display: flex;\n  position: relative;\n}\n.tiles .tile.cols-1 {\n  grid-column: span 1;\n  width: 70px;\n}\n.tiles .tile.rows-1 {\n  grid-row: span 1;\n  height: 70px;\n}\n.tiles .tile.cols-2 {\n  grid-column: span 2;\n  width: 150px;\n}\n.tiles .tile.rows-2 {\n  grid-row: span 2;\n  height: 150px;\n}\n.tiles .tile.cols-3 {\n  grid-column: span 3;\n  width: 230px;\n}\n.tiles .tile.rows-3 {\n  grid-row: span 3;\n  height: 230px;\n}\n.tiles .tile.cols-4 {\n  grid-column: span 4;\n  width: 310px;\n}\n.tiles .tile.rows-4 {\n  grid-row: span 4;\n  height: 310px;\n}\n.tiles .tile.cols-5 {\n  grid-column: span 5;\n  width: 390px;\n}\n.tiles .tile.rows-5 {\n  grid-row: span 5;\n  height: 390px;\n}\n.tiles .tile.cols-6 {\n  grid-column: span 6;\n  width: 470px;\n}\n.tiles .tile.rows-6 {\n  grid-row: span 6;\n  height: 470px;\n}\n.tiles .tile.cols-7 {\n  grid-column: span 7;\n  width: 550px;\n}\n.tiles .tile.rows-7 {\n  grid-row: span 7;\n  height: 550px;\n}\n.tiles .tile.cols-8 {\n  grid-column: span 8;\n  width: 630px;\n}\n.tiles .tile.rows-8 {\n  grid-row: span 8;\n  height: 630px;\n}\n.tiles .tile:hover {\n  outline: rgba(29, 29, 29, 0.1) solid 4px;\n}\n.tiles .tile .teaser {\n  font-size: 1.2em;\n  padding: 1em;\n  background: #f8f9fa;\n}\n\n.notifications {\n  position: fixed;\n  display: flex;\n  align-items: flex-end;\n  flex-direction: column;\n  right: 2em;\n  bottom: 2em;\n}\n\n.notification-toast {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-align: left;\n  padding: 0.8em;\n  background-color: #fff;\n  max-width: 500px;\n  position: relative;\n  box-shadow: 1px 7px 14px -5px rgba(0, 0, 0, 0.2);\n}\n.notification-toast + .notification-toast {\n  margin-top: 1em;\n}\n.notification-toast.success:before {\n  background-color: #2BDE3F;\n}\n.notification-toast.error:before {\n  background-color: #e7431a;\n}\n.notification-toast.info:before {\n  background-color: #1D72F3;\n}\n.notification-toast.warning:before {\n  background-color: #FFC007;\n}\n.notification-toast:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n}\n.notification-toast .notification-toast-details {\n  flex: 1;\n}\n.notification-toast .notification-toast-details .notification-toast-title {\n  color: #3e3e3e;\n  font-weight: 700;\n  margin-top: 0;\n  margin-bottom: 8px;\n}\n.notification-toast .notification-toast-details .notification-toast-description {\n  font-size: 14px;\n  margin-top: 0;\n  margin-bottom: 0;\n  color: #878787;\n}\n.notification-toast .notification-toast-close {\n  width: 14px;\n  cursor: pointer;\n  height: 14px;\n  fill: #878787;\n  margin-left: 1.2em;\n  background: url('data:image/svg+xml;utf8,<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15.642 15.642\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" enable-background=\"new 0 0 15.642 15.642\"><path fill-rule=\"evenodd\" d=\"M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z\"></path></svg>') no-repeat center center;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;AACF;AACE;EAHF;IAII,eAAA;EAEF;AACF;;AACA;EACE,UAAA;AAEF;;AACA;EACE,iBAAA;AAEF;;AACA;EACE,mBAAA;EACA,kBAAA;EACA,qBAAA;AAEF;;AACA;EACE,iDAAA;AAEF;;AACA;EACE,UAAA;EACA,iBAAA;AAEF;;AAKA;EACE,OAAA;EACA,kBAAA;EACA,aAAA;EACA,6CAAA;EACA,0CAAA;EACA,cAAA;EACA,iBAAA;AAFF;AAIE;EACE,aAAA;EACA,kBAAA;AAFJ;AAKM;EACE,mBAAA;EACA,WAAA;AAHR;AAMM;EACE,gBAAA;EACA,YAAA;AAJR;AAHM;EACE,mBAAA;EACA,YAAA;AAKR;AAFM;EACE,gBAAA;EACA,aAAA;AAIR;AAXM;EACE,mBAAA;EACA,YAAA;AAaR;AAVM;EACE,gBAAA;EACA,aAAA;AAYR;AAnBM;EACE,mBAAA;EACA,YAAA;AAqBR;AAlBM;EACE,gBAAA;EACA,aAAA;AAoBR;AA3BM;EACE,mBAAA;EACA,YAAA;AA6BR;AA1BM;EACE,gBAAA;EACA,aAAA;AA4BR;AAnCM;EACE,mBAAA;EACA,YAAA;AAqCR;AAlCM;EACE,gBAAA;EACA,aAAA;AAoCR;AA3CM;EACE,mBAAA;EACA,YAAA;AA6CR;AA1CM;EACE,gBAAA;EACA,aAAA;AA4CR;AAnDM;EACE,mBAAA;EACA,YAAA;AAqDR;AAlDM;EACE,gBAAA;EACA,aAAA;AAoDR;AAhDI;EACE,wCAAA;AAkDN;AA/CI;EACE,gBAAA;EACA,YAAA;EACA,mBAAA;AAiDN;;AA5CA;EACE,eAAA;EACA,aAAA;EACA,qBAAA;EACA,sBAAA;EACA,UAAA;EACA,WAAA;AA+CF;;AA5CA;EACE,sBAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;EACA,cAAA;EACA,sBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gDAAA;AA+CF;AA7CE;EACE,eAAA;AA+CJ;AA5CE;EACE,yBAAA;AA8CJ;AA3CE;EACE,yBAAA;AA6CJ;AA1CE;EACE,yBAAA;AA4CJ;AAzCE;EACE,yBAAA;AA2CJ;AAxCE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;AA0CJ;AAvCE;EACE,OAAA;AAyCJ;AAvCI;EACE,cAAA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;AAyCN;AAtCI;EACE,eAAA;EACA,aAAA;EACA,gBAAA;EACA,cAAA;AAwCN;AApCE;EACE,WAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,gsBAAA;AAsCJ","sourcesContent":["html {\n  font-size: 14px;\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n  }\n}\n\n.nav-link {\n  padding: 0;\n}\n\n.nav-item a {\n  padding: 0 .5rem;\n}\n\na.navbar-brand {\n  white-space: normal;\n  text-align: center;\n  word-break: break-all;\n}\n\n.box-shadow {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);\n}\n\n.error {\n  color: red;\n  font-weight: bold;\n}\n\n$tile-height: 70px;\n$tile-width: 70px;\n$tile-gap: 10px;\n\n.tiles {\n  flex: 1;\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 70px);\n  grid-template-rows: repeat(auto-fit, 70px);\n  grid-gap: 10px;\n  overflow: visible;\n\n  .tile {\n    display: flex;\n    position: relative;\n\n    @for $i from 1 through 8 {\n      &.cols-#{$i} {\n        grid-column: span $i;\n        width: $i * $tile-width + ($i - 1) * $tile-gap;\n      }\n\n      &.rows-#{$i} {\n        grid-row: span $i;\n        height: $i * $tile-width + ($i - 1) * $tile-gap;\n      }\n    }\n\n    &:hover {\n      outline: rgba(29, 29, 29, 0.1) solid 4px;\n    }\n\n    .teaser {\n      font-size: 1.2em;\n      padding: 1em;\n      background: #f8f9fa;\n    }\n  }\n}\n\n.notifications {\n  position: fixed;\n  display: flex;\n  align-items: flex-end;\n  flex-direction: column;\n  right: 2em;\n  bottom: 2em;\n}\n\n.notification-toast {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-align: left;\n  padding: 0.8em;\n  background-color: #fff;\n  max-width: 500px;\n  position: relative;\n  box-shadow: 1px 7px 14px -5px rgba(0,0,0,0.2);\n\n  &+& {\n    margin-top: 1em;\n  }\n\n  &.success:before {\n    background-color: #2BDE3F;\n  }\n\n  &.error:before {\n    background-color: #e7431a;\n  }\n\n  &.info:before {\n    background-color: #1D72F3;\n  }\n\n  &.warning:before {\n    background-color: #FFC007;\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 2px;\n  }\n\n  .notification-toast-details {\n    flex: 1;\n\n    .notification-toast-title {\n      color: #3e3e3e;\n      font-weight: 700;\n      margin-top: 0;\n      margin-bottom: 8px;\n    }\n\n    .notification-toast-description {\n      font-size: 14px;\n      margin-top: 0;\n      margin-bottom: 0;\n      color: #878787;\n    }\n  }\n\n  .notification-toast-close {\n    width: 14px;\n    cursor: pointer;\n    height: 14px;\n    fill: #878787;\n    margin-left: 1.2em;\n    background: url('data:image/svg+xml;utf8,<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15.642 15.642\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" enable-background=\"new 0 0 15.642 15.642\"><path fill-rule=\"evenodd\" d=\"M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z\"></path></svg>') no-repeat center center;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals;

    module.hot.accept(
      /*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("88cd4c741aa97359f500")
/******/ })();
/******/ 
/******/ /* webpack/runtime/nonce */
/******/ (() => {
/******/ 	__webpack_require__.nc = undefined;
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5d0603f1775714c6936b.hot-update.js.map