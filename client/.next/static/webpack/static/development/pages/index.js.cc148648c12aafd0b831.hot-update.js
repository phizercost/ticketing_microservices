webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/cost/Google Drive/Cost Pro/Perso/Research/Courses/Microservices with Node JS and React/projects/ticketing/client/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\nvar LandingPage = function LandingPage(_ref) {\n  var color = _ref.color;\n  console.log('I am in the component', color);\n  return __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 10\n    }\n  }, \"Landing Page\");\n};\n\n_c = LandingPage;\nLandingPage.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var _yield$axios$get, data, _yield$axios$get2, _data;\n\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          if (true) {\n            _context.next = 8;\n            break;\n          }\n\n          _context.next = 3;\n          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser', {\n            headers: {\n              Host: 'ticketing.dev'\n            }\n          });\n\n        case 3:\n          _yield$axios$get = _context.sent;\n          data = _yield$axios$get.data;\n          return _context.abrupt(\"return\", data);\n\n        case 8:\n          _context.next = 10;\n          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/users/currentuser');\n\n        case 10:\n          _yield$axios$get2 = _context.sent;\n          _data = _yield$axios$get2.data;\n          return _context.abrupt(\"return\", _data);\n\n        case 13:\n          return _context.abrupt(\"return\", {});\n\n        case 14:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"LandingPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkxhbmRpbmdQYWdlIiwiY29sb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwiSG9zdCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ2pDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ0YsS0FBckM7QUFDQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQVA7QUFDRCxDQUhEOztLQUFNRCxXO0FBS05BLFdBQVcsQ0FBQ0ksZUFBWixpTUFBOEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsaUJBSUhDLDRDQUFLLENBQUNDLEdBQU4sQ0FDckIsdUZBRHFCLEVBRXJCO0FBQ0VDLG1CQUFPLEVBQUU7QUFDUEMsa0JBQUksRUFBRTtBQURDO0FBRFgsV0FGcUIsQ0FKRzs7QUFBQTtBQUFBO0FBSWxCQyxjQUprQixvQkFJbEJBLElBSmtCO0FBQUEsMkNBWW5CQSxJQVptQjs7QUFBQTtBQUFBO0FBQUEsaUJBY0hKLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSx3QkFBVixDQWRHOztBQUFBO0FBQUE7QUFjbEJHLGVBZGtCLHFCQWNsQkEsSUFka0I7QUFBQSwyQ0FlbkJBLEtBZm1COztBQUFBO0FBQUEsMkNBa0JyQixFQWxCcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBOUI7QUFxQmVULDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuY29uc3QgTGFuZGluZ1BhZ2UgPSAoeyBjb2xvciB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdJIGFtIGluIHRoZSBjb21wb25lbnQnLCBjb2xvcik7XG4gIHJldHVybiA8aDE+TGFuZGluZyBQYWdlPC9oMT47XG59O1xuXG5MYW5kaW5nUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vd2UgYXJlIG9uIHRoZSBzZXJ2ZXIhXG4gICAgLy9SZXF1ZXN0cyBzaG91bGQgYmUgbWFkZSB0byBpbmdyZXNzIG5naW54XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAnaHR0cDovL2luZ3Jlc3MtbmdpbngtY29udHJvbGxlci5pbmdyZXNzLW5naW54LnN2Yy5jbHVzdGVyLmxvY2FsL2FwaS91c2Vycy9jdXJyZW50dXNlcicsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBIb3N0OiAndGlja2V0aW5nLmRldicsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS91c2Vycy9jdXJyZW50dXNlcicpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgcmV0dXJuIHt9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})