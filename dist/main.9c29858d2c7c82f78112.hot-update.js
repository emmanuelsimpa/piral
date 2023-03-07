"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/_app/routes.tsx":
/*!*****************************!*\
  !*** ./src/_app/routes.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _member_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../member/login */ "./src/member/login.tsx");
/* harmony import */ var _shared_MasterLayout_MasterLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/MasterLayout/MasterLayout */ "./src/_app/shared/MasterLayout/MasterLayout.tsx");




var Switching = function Switching(_ref) {
  var children = _ref.children;
  var match = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useRouteMatch)("/");
  console.log({
    match: match
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_MasterLayout_MasterLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: children
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, {
    sensitive: true,
    path: '/login',
    component: _member_login__WEBPACK_IMPORTED_MODULE_1__["default"]
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Switching);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7a8622f30f7b1db7d0ca")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.9c29858d2c7c82f78112.hot-update.js.map