webpackHotUpdate("static/development/pages/user/update.js",{

/***/ "./components/auth/ProfileUpdate.js":
/*!******************************************!*\
  !*** ./components/auth/ProfileUpdate.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/user */ "./actions/user.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config */ "./config.js");


var _jsxFileName = "/Users/sergiorosa_local/Desktop/BlogSEO/frontend/components/auth/ProfileUpdate.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var ProfileUpdate = function ProfileUpdate() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    username: '',
    name: '',
    email: '',
    about: '',
    password: '',
    error: false,
    success: false,
    loading: false,
    photo: '',
    userData: ''
  }),
      values = _useState[0],
      setValues = _useState[1];

  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["getCookie"])('token');
  var username = values.username,
      name = values.name,
      email = values.email,
      about = values.about,
      password = values.password,
      error = values.error,
      success = values.success,
      loading = values.loading,
      photo = values.photo,
      userData = values.userData;

  var init = function init() {
    Object(_actions_user__WEBPACK_IMPORTED_MODULE_6__["getProfile"])(token).then(function (data) {
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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    init();
  }, []);

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      // console.log(e.target.value);
      var value = name === 'photo' ? e.target.files[0] : e.target.value;
      var userFormData = new FormData();
      userFormData.set(name, value);
      setValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, values, (_objectSpread2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, name, value), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "userData", userFormData), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "error", false), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "success", false), _objectSpread2)));
    };
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, values, {
      loading: true
    }));
    Object(_actions_user__WEBPACK_IMPORTED_MODULE_6__["update"])(token, userData).then(function (data) {
      if (data.error) {
        setValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, values, {
          error: data.error,
          success: false,
          loading: false
        }));
      } else {
        Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["updateUser"])(data, function () {
          setValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, values, {
            username: data.username,
            name: data.name,
            email: data.email,
            about: data.about,
            password: '',
            success: true,
            loading: false
          }));
        });
      }
    });
  };

  var profileUpdateForm = function profileUpdateForm() {
    return __jsx("form", {
      onSubmit: handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("label", {
      className: "btn btn-outline-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "Profile photo", __jsx("input", {
      onChange: handleChange('photo'),
      type: "file",
      accept: "image/*",
      hidden: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }))), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("label", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Username"), __jsx("input", {
      onChange: handleChange('username'),
      type: "text",
      value: username,
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    })), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("label", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "Name"), __jsx("input", {
      onChange: handleChange('name'),
      type: "text",
      value: name,
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    })), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx("label", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "Email"), __jsx("input", {
      onChange: handleChange('email'),
      type: "text",
      value: email,
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    })), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("label", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, "About"), __jsx("textarea", {
      onChange: handleChange('about'),
      type: "text",
      value: about,
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    })), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("label", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "Password"), __jsx("input", {
      onChange: handleChange('password'),
      type: "password",
      value: password,
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    })), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx("button", {
      type: "submit",
      className: "btn btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "Submit")));
  };

  var showError = function showError() {
    return __jsx("div", {
      className: "alert alert-danger",
      style: {
        display: error ? '' : 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, error);
  };

  var showSuccess = function showSuccess() {
    return __jsx("div", {
      className: "alert alert-success",
      style: {
        display: success ? '' : 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, "Profile updated");
  };

  var showLoading = function showLoading() {
    return __jsx("div", {
      className: "alert alert-info",
      style: {
        display: loading ? '' : 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "Loading...");
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("img", {
    src: "".concat(_config__WEBPACK_IMPORTED_MODULE_7__["API"], "/user/photo/").concat(username),
    className: "img img-fluid img-thumbnail mb-3",
    style: {
      maxHeight: 'auto',
      maxWidth: '100%'
    },
    alt: "user profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  })), __jsx("div", {
    className: "col-md-8 mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, showSuccess(), showError(), showLoading(), profileUpdateForm()))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileUpdate);

/***/ })

})
//# sourceMappingURL=update.js.e25bfba43baf5e013e62.hot-update.js.map