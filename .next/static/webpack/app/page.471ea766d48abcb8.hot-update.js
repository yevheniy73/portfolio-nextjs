"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app\\page",{

/***/ "./components/StartSteps.jsx":
/*!***********************************!*\
  !*** ./components/StartSteps.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n\n\nconst StartSteps = (param)=>/*#__PURE__*/ {\n    let { number , company , role  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].flexCenter, \" flex-row align-start\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].flexCenter, \" min-w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-bold text-[20px] text-white\",\n                    children: [\n                        \"0\",\n                        number\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Yevhen\\\\Documents\\\\projects\\\\portfolio\\\\components\\\\StartSteps.jsx\",\n                    lineNumber: 6,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Yevhen\\\\Documents\\\\projects\\\\portfolio\\\\components\\\\StartSteps.jsx\",\n                lineNumber: 5,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"flex-1 ml-[30px] font-semibold text-[24px] text-white leading-[32px]\",\n                        children: company\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Yevhen\\\\Documents\\\\projects\\\\portfolio\\\\components\\\\StartSteps.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]\",\n                        children: role\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Yevhen\\\\Documents\\\\projects\\\\portfolio\\\\components\\\\StartSteps.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Yevhen\\\\Documents\\\\projects\\\\portfolio\\\\components\\\\StartSteps.jsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Yevhen\\\\Documents\\\\projects\\\\portfolio\\\\components\\\\StartSteps.jsx\",\n        lineNumber: 4,\n        columnNumber: 3\n    }, undefined);\n};\n_c = StartSteps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartSteps);\nvar _c;\n$RefreshReg$(_c, \"StartSteps\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0YXJ0U3RlcHMuanN4LmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQStCO0FBRS9CLE1BQU1DLGFBQWEsdUJBQ2pCO1FBRG1CLEVBQUVDLE9BQU0sRUFBRUMsUUFBTyxFQUFFQyxLQUFJLEVBQUM7V0FDM0MsOERBQUNDO1FBQUlDLFdBQVcsR0FBcUIsT0FBbEJOLDBEQUFpQixFQUFDOzswQkFDbkMsOERBQUNLO2dCQUFJQyxXQUFXLEdBQXFCLE9BQWxCTiwwREFBaUIsRUFBQzswQkFDbkMsNEVBQUNRO29CQUFFRixXQUFVOzt3QkFBbUM7d0JBQzVDSjs7Ozs7Ozs7Ozs7OzBCQUdOLDhEQUFDRztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNHO3dCQUFHSCxXQUFVO2tDQUNiSDs7Ozs7O2tDQUVELDhEQUFDSzt3QkFBRUYsV0FBVTtrQ0FDVkY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdGO0tBZkRIO0FBa0JOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3RhcnRTdGVwcy5qc3g/N2Y1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXNcIjtcblxuY29uc3QgU3RhcnRTdGVwcyA9ICggeyBudW1iZXIsIGNvbXBhbnksIHJvbGV9ICkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmZsZXhDZW50ZXJ9IGZsZXgtcm93IGFsaWduLXN0YXJ0YH0+XG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5mbGV4Q2VudGVyfSBtaW4tdy1bNzBweF0gaC1bNzBweF0gcm91bmRlZC1bMjRweF0gYmctWyMzMjNmNWRdYH0+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bMjBweF0gdGV4dC13aGl0ZVwiPlxuICAgICAgICAwe251bWJlcn1cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJmbGV4LTEgbWwtWzMwcHhdIGZvbnQtc2VtaWJvbGQgdGV4dC1bMjRweF0gdGV4dC13aGl0ZSBsZWFkaW5nLVszMnB4XVwiPlxuICAgICAge2NvbXBhbnl9XG4gICAgICA8L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xIG1sLVszMHB4XSBmb250LW5vcm1hbCB0ZXh0LVsxOHB4XSB0ZXh0LVsjQjBCMEIwXSBsZWFkaW5nLVszMnB4XVwiPlxuICAgICAgICB7cm9sZX1cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdGFydFN0ZXBzO1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlN0YXJ0U3RlcHMiLCJudW1iZXIiLCJjb21wYW55Iiwicm9sZSIsImRpdiIsImNsYXNzTmFtZSIsImZsZXhDZW50ZXIiLCJwIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/StartSteps.jsx\n"));

/***/ })

});