webpackHotUpdate("static/development/pages/admin/crud/blog.js",{

/***/ "./components/crud/BlogCreate.js":
/*!***************************************!*\
  !*** ./components/crud/BlogCreate.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _actions_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/tag */ "./actions/tag.js");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../node_modules/react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_12__);




var _jsxFileName = "/Users/sergiorosa_local/Desktop/BlogSEO/frontend/components/crud/BlogCreate.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;









var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-quill */ "./node_modules/react-quill/lib/index.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-quill */ "./node_modules/react-quill/lib/index.js")];
    },
    modules: ['react-quill']
  }
});


var CreateBlog = function CreateBlog(_ref) {
  var router = _ref.router;

  var blogFromLocalStorage = function blogFromLocalStorage() {
    if (false) {}

    if (localStorage.getItem('blog')) {
      return JSON.parse(localStorage.getItem('blog'));
    } else {
      return false;
    }
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      categories = _useState[0],
      setCategories = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      tags = _useState2[0],
      setTags = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      checked = _useState3[0],
      setChecked = _useState3[1]; // categories


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      checkedTag = _useState4[0],
      setCheckedTag = _useState4[1]; // tag


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(blogFromLocalStorage()),
      body = _useState5[0],
      setBody = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    error: '',
    sizeError: '',
    success: '',
    formData: '',
    title: '',
    hidePublishButton: false
  }),
      values = _useState6[0],
      setValues = _useState6[1];

  var error = values.error,
      sizeError = values.sizeError,
      success = values.success,
      formData = values.formData,
      title = values.title,
      hidePublishButton = values.hidePublishButton;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, values, {
      formData: new FormData()
    }));
    initCategories(), initTags();
  }, [router]);

  var initCategories = function initCategories() {
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_9__["getCategories"])().then(function (data) {
      if (data.error) {
        setValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, values, {
          error: data.error
        }));
      } else {
        setCategories(data);
      }
    });
  };

  var initTags = function initTags() {
    Object(_actions_tag__WEBPACK_IMPORTED_MODULE_10__["getTags"])().then(function (data) {
      if (data.error) {
        setValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, values, {
          error: data.error
        }));
      } else {
        setTags(data);
      }
    });
  };

  var publishBlog = function publishBlog(e) {
    e.preventDefault();
    console.log('ready to publishBlog');
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      // console.log(e.target.value);
      var value = name === 'photo' ? e.target.files[0] : e.target.value;
      formData.set(name, value);
      setValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, values, (_objectSpread2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, name, value), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "formData", formData), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "error", ''), _objectSpread2)));
    };
  };

  var handleBody = function handleBody(e) {
    // console.log(e);
    setBody(e);
    formData.set('body', e);

    if (true) {
      localStorage.setItem('blog', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(e));
    }
  };

  var handleToggle = function handleToggle(c) {
    setValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, values, {
      error: ''
    })); //return the first index or -1

    var clickedCategory = checked.indexOf(c);

    var all = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(checked);

    if (clickedCategory === -1) {
      all.push(c);
    } else {
      all.splice(clickedCategory, 1);
    }
  }; //check box for categories


  var showCategories = function showCategories() {
    return categories && categories.map(function (c, i) {
      __jsx("li", {
        key: i,
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("input", {
        onChange: handleToggle(c._id),
        type: "checkbox",
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), __jsx("label", {
        className: "form-check-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, c.name));
    });
  }; //check box for tags


  var showTags = function showTags() {
    return tags && tags.map(function (t, i) {
      __jsx("li", {
        key: i,
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("input", {
        type: "checkbox",
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), __jsx("label", {
        className: "form-check-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, t.name));
    });
  };

  var createBlogForm = function createBlogForm() {
    return __jsx("form", {
      onSubmit: publishBlog,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, __jsx("label", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "Title"), __jsx("input", {
      type: "text",
      className: "form-control",
      value: title,
      onChange: handleChange('title'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    })), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx(ReactQuill, {
      modules: CreateBlog.modules,
      formats: CreateBlog.formats,
      value: body,
      placeholder: "Write something amazing...",
      onChange: handleBody,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    })), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, __jsx("button", {
      type: "submit",
      className: "btn btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, "Publish")));
  };

  return __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, createBlogForm(), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(title), ";", __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(body), ";", __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }), _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(categories), ";", __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(tags), ";"), __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Categories"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }), __jsx("ul", {
    style: {
      maxHeight: '200px',
      overflowY: 'scroll'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, showCategories())), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "Tags"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }), __jsx("ul", {
    style: {
      maxHeight: '200px',
      overflowY: 'scroll'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, showTags())))));
};

CreateBlog.modules = {
  toolbar: [[{
    header: '1'
  }, {
    header: '2'
  }, {
    header: [3, 4, 5, 6]
  }, {
    font: []
  }], [{
    size: []
  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{
    list: 'ordered'
  }, {
    list: 'bullet'
  }], ['link', 'image', 'video'], ['clean'], ['code-block']]
};
CreateBlog.formats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'link', 'image', 'video', 'code-block'];
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(CreateBlog));

/***/ })

})
//# sourceMappingURL=blog.js.ffd0b5b430c0fddd4138.hot-update.js.map