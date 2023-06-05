/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SignMessage.jsx":
/*!****************************************!*\
  !*** ./src/components/SignMessage.jsx ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3modal/react */ \"./node_modules/@web3modal/react/dist/index.js\");\n/* harmony import */ var _components_CustomButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CustomButton */ \"./src/components/CustomButton.jsx\");\n/* harmony import */ var _components_SendTransaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SendTransaction */ \"./src/components/SendTransaction.jsx\");\n/* harmony import */ var _components_SignMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SignMessage */ \"./src/components/SignMessage.jsx\");\n/* harmony import */ var _components_SignMessage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_SignMessage__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_1__.Web3Button, {\n                icon: \"show\",\n                label: \"Connect Wallet\",\n                balance: \"show\"\n            }, void 0, false, {\n                fileName: \"/root/hell/src/pages/index.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/root/hell/src/pages/index.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_1__.Web3NetworkSwitch, {}, void 0, false, {\n                fileName: \"/root/hell/src/pages/index.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/root/hell/src/pages/index.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/root/hell/src/pages/index.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SendTransaction__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/root/hell/src/pages/index.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_SignMessage__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                fileName: \"/root/hell/src/pages/index.jsx\",\n                lineNumber: 24,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpRTtBQUNYO0FBQ007QUFDUjtBQUVyQyxTQUFTSyxXQUFXO0lBQ2pDLHFCQUNFOzswQkFFRSw4REFBQ0wsd0RBQVVBO2dCQUFDTSxNQUFLO2dCQUFPQyxPQUFNO2dCQUFpQkMsU0FBUTs7Ozs7OzBCQUN2RCw4REFBQ0M7Ozs7OzBCQUdELDhEQUFDUiwrREFBaUJBOzs7OzswQkFDbEIsOERBQUNROzs7OzswQkFHRCw4REFBQ1AsZ0VBQVlBOzs7OzswQkFHYiw4REFBQ0MsbUVBQWVBOzs7OzswQkFHZiw4REFBQ0MsZ0VBQVdBOzs7Ozs7O0FBR25CLENBQUM7S0FyQnVCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanN4P2QzNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2ViM0J1dHRvbiwgV2ViM05ldHdvcmtTd2l0Y2ggfSBmcm9tIFwiQHdlYjNtb2RhbC9yZWFjdFwiO1xuaW1wb3J0IEN1c3RvbUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9DdXN0b21CdXR0b25cIjtcbmltcG9ydCBTZW5kVHJhbnNhY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VuZFRyYW5zYWN0aW9uXCI7XG5pbXBvcnQgU2lnbk1lc3NhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lnbk1lc3NhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBQcmVkZWZpbmVkIGJ1dHRvbiAgKi99XG4gICAgICA8V2ViM0J1dHRvbiBpY29uPVwic2hvd1wiIGxhYmVsPVwiQ29ubmVjdCBXYWxsZXRcIiBiYWxhbmNlPVwic2hvd1wiIC8+XG4gICAgICA8YnIgLz5cblxuICAgICAgey8qIE5ldHdvcmsgU3dpdGNoZXIgQnV0dG9uICovfVxuICAgICAgPFdlYjNOZXR3b3JrU3dpdGNoIC8+XG4gICAgICA8YnIgLz5cblxuICAgICAgey8qIEN1c3RvbSBidXR0b24gKi99XG4gICAgICA8Q3VzdG9tQnV0dG9uIC8+XG5cbiAgICAgIHsvKiBTZW5kIFRyYW5zYWN0aW9uICovfVxuICAgICAgPFNlbmRUcmFuc2FjdGlvbiAvPlxuXG4gICAgICAgey8qIFNpZ24gVHJhbnNhY3Rpb24gKi99XG4gICAgICAgPFNpZ25NZXNzYWdlIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiV2ViM0J1dHRvbiIsIldlYjNOZXR3b3JrU3dpdGNoIiwiQ3VzdG9tQnV0dG9uIiwiU2VuZFRyYW5zYWN0aW9uIiwiU2lnbk1lc3NhZ2UiLCJIb21lUGFnZSIsImljb24iLCJsYWJlbCIsImJhbGFuY2UiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n"));

/***/ })

});