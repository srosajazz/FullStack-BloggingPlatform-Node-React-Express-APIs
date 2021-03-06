webpackHotUpdate("static/development/pages/user/update.js",{

/***/ "./components/auth/ProfileUpdate.js":
/*!******************************************!*\
  !*** ./components/auth/ProfileUpdate.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/user */ "./actions/user.js");



var _jsxFileName = "/Users/sergiorosa_local/Desktop/BlogSEO/frontend/components/auth/ProfileUpdate.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var ProfileUpdate = function ProfileUpdate() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    username: '',
    name: '',
    email: '',
    password: '',
    error: false,
    success: false,
    loading: false,
    photo: '',
    userData: ''
  }),
      values = _useState[0],
      setValues = _useState[1];

  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["getCookie"])('token');
  var username = values.username,
      name = values.name,
      email = values.email,
      password = values.password,
      error = values.error,
      success = values.success,
      loading = values.loading,
      photo = values.photo,
      userData = values.userData;

  var init = function init() {
    Object(_actions_user__WEBPACK_IMPORTED_MODULE_7__["getProfile"])(token).then(function (data) {
      if (data.error) {
        setValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, values, {
          error: data.error
        }));
      } else {
        setValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, values, {
          username: data.username,
          name: data.name,
          email: data.email,
          about: data.about
        }));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    init();
  }, []);
  var handleChange = name = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("name"), function (e) {//
  });

  var handleSubmit = function handleSubmit(e) {//
  };

  var profileUpdateForm = function profileUpdateForm() {
    return __jsx("form", {
      onSubmit: handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("label", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Profile Photo"), __jsx("input", {
      onChange: handleChange('photo'),
      type: "file",
      accept: "image/*",
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    })), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("label", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "Username"), __jsx("input", {
      onChange: handleChange('username'),
      type: "text",
      value: username,
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    })), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("label", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "Name"), __jsx("input", {
      onChange: handleChange('name'),
      type: "text",
      value: name,
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    })), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("label", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Email"), __jsx("input", {
      onChange: handleChange('email'),
      type: "text",
      value: email,
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    })), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("label", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "About"), __jsx("textarea", {
      onChange: handleChange('about'),
      type: "text",
      value: about,
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    })), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("label", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "Password"), __jsx("input", {
      onChange: handleChange('password'),
      type: "text",
      value: password,
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    })), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("button", {
      type: "submit",
      className: "btn btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, "Submit")));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "image"), __jsx("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "update form", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
    username: username,
    email: email,
    name: name
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileUpdate);

/***/ })

})
//# sourceMappingURL=update.js.f55ea49bfa2fa7a4cb20.hot-update.js.map