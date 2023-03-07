"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "persistor": () => (/* binding */ persistor)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _manaflair_redux_batch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @manaflair/redux-batch */ "./node_modules/@manaflair/redux-batch/index.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rootReducer */ "./src/redux/rootReducer.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_4__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }






var sagaMiddleware = (0,redux_saga__WEBPACK_IMPORTED_MODULE_0__["default"])();
var middleware = [].concat(_toConsumableArray((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.getDefaultMiddleware)({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true
})), [sagaMiddleware, (redux_logger__WEBPACK_IMPORTED_MODULE_4___default())]);
if (true) {
  middleware.push((redux_logger__WEBPACK_IMPORTED_MODULE_4___default()));
}
var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.configureStore)({
  reducer: _rootReducer__WEBPACK_IMPORTED_MODULE_3__.rootReducer,
  middleware: middleware,
  devTools: true,
  enhancers: [_manaflair_redux_batch__WEBPACK_IMPORTED_MODULE_1__.reduxBatch]
});
var persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_2__.persistStore)(store);
sagaMiddleware.run(_rootReducer__WEBPACK_IMPORTED_MODULE_3__.rootSaga);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("38d8b81e02abc66693eb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e8c7e213f1a1907ae9e2.hot-update.js.map