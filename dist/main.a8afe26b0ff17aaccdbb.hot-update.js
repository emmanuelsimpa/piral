"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/member/formT/components/personalInfo.tsx":
/*!******************************************************!*\
  !*** ./src/member/formT/components/personalInfo.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalInfo": () => (/* binding */ PersonalInfo)
/* harmony export */ });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./src/member/formT/components/input.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var PersonalInfo = function PersonalInfo(_ref) {
  var userInfo = _ref.userInfo,
    updateUserInfo = _ref.updateUserInfo,
    showRequired = _ref.showRequired;
  var handlePersonalInfo = function handlePersonalInfo(event, key) {
    var updatedUserInfo = Object.assign({}, userInfo);
    updatedUserInfo[key] = event.currentTarget.value;
    updateUserInfo(updatedUserInfo);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
    className: 'flex flex-col gap-4 w-full'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_input__WEBPACK_IMPORTED_MODULE_0__.Input, {
    label: 'Name',
    placeholder: 'e.g. Stephen King',
    showRequired: showRequired && !userInfo.first_name,
    value: userInfo.first_name,
    onChange: function onChange(e) {
      return handlePersonalInfo(e, "first_name");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_input__WEBPACK_IMPORTED_MODULE_0__.Input, {
    label: 'Name',
    placeholder: 'e.g. Stephen King',
    showRequired: showRequired && !userInfo.last_name,
    value: userInfo.last_name,
    onChange: function onChange(e) {
      return handlePersonalInfo(e, "last_name");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_input__WEBPACK_IMPORTED_MODULE_0__.Input, {
    label: 'Email Address',
    type: 'email',
    placeholder: 'e.g. stephenking@lorem.com',
    showRequired: showRequired && (!userInfo.email_address || !userInfo.email_address.includes("@")),
    value: userInfo.email_address,
    onChange: function onChange(e) {
      return handlePersonalInfo(e, "email_address");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_input__WEBPACK_IMPORTED_MODULE_0__.Input, {
    label: 'Phone Number',
    placeholder: 'e.g. +1 234 567 890',
    showRequired: showRequired && !userInfo.phone_number,
    value: userInfo.phone_number,
    onChange: function onChange(e) {
      return handlePersonalInfo(e, "phone_number");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_input__WEBPACK_IMPORTED_MODULE_0__.Input, {
    label: 'Phone Number',
    placeholder: 'e.g. +1 234 567 890',
    showRequired: showRequired && !userInfo.password,
    value: userInfo.password,
    onChange: function onChange(e) {
      return handlePersonalInfo(e, "password");
    }
  }));
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cfad8b3107293f93f493")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.a8afe26b0ff17aaccdbb.hot-update.js.map