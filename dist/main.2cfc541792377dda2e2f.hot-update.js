"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/_app/app.tsx":
/*!**************************!*\
  !*** ./src/_app/app.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupShell": () => (/* binding */ setupShell)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../landing */ "./src/landing/index.tsx");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout */ "./src/layout.tsx");



function setupShell(app) {
  //   LAYOUTS REGISTRATION
  app.registerPageLayout("dashboard", function (_ref) {
    var children = _ref.children;
    return (0,_layout__WEBPACK_IMPORTED_MODULE_2__.layout)({
      children: children
    });
  });
  app.registerPageLayout("landing", function (_ref2) {
    var children = _ref2.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Header Landing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Navigation "), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, " footer "));
  });
  app.registerPageLayout("member", function (_ref3) {
    var children = _ref3.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Headers Member"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Navigation "), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, " footer "));
  });
  app.registerPage("/", _landing__WEBPACK_IMPORTED_MODULE_1__["default"], {
    layout: "dashboard"
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8dbc1bc27e8d12b7590c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.2cfc541792377dda2e2f.hot-update.js.map