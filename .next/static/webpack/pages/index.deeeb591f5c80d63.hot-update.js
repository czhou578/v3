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

/***/ "./pages/Projects.tsx":
/*!****************************!*\
  !*** ./pages/Projects.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Projects = (param)=>{\n    let { header , img , list , description , chromeBlocker , projectElpis , reactBenchmarks , githubLink , hostingLink  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-5\",\n                children: header\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mycol\\\\WebProjects\\\\v3\\\\app\\\\pages\\\\Projects.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center gap-6 mb-5\",\n                children: img ? img.map((element, idx)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"h-auto max-w-full rounded-lg hover:scale-150 transition-all duration-500 cursor-pointer\",\n                            src: element\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mycol\\\\WebProjects\\\\v3\\\\app\\\\pages\\\\Projects.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 19\n                        }, undefined)\n                    }, idx, false, {\n                        fileName: \"C:\\\\Users\\\\mycol\\\\WebProjects\\\\v3\\\\app\\\\pages\\\\Projects.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined);\n                }) : null\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mycol\\\\WebProjects\\\\v3\\\\app\\\\pages\\\\Projects.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mycol\\\\WebProjects\\\\v3\\\\app\\\\pages\\\\Projects.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mycol\\\\WebProjects\\\\v3\\\\app\\\\pages\\\\Projects.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mycol\\\\WebProjects\\\\v3\\\\app\\\\pages\\\\Projects.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Qcm9qZWN0cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU1BLFdBVUQsU0FVQztRQVZBLEVBQ0pDLE9BQU0sRUFDTkMsSUFBRyxFQUNIQyxLQUFJLEVBQ0pDLFlBQVcsRUFDWEMsY0FBYSxFQUNiQyxhQUFZLEVBQ1pDLGdCQUFlLEVBQ2ZDLFdBQVUsRUFDVkMsWUFBVyxFQUNaO0lBQ0MscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQVFYOzs7Ozs7MEJBQ3RCLDhEQUFDUztnQkFBSUUsV0FBVTswQkFDWlYsTUFDR0EsSUFBSVcsR0FBRyxDQUFDLENBQUNDLFNBQVNDLE1BQVE7b0JBQ3hCLHFCQUNFLDhEQUFDTDt3QkFBY0UsV0FBVTtrQ0FDdkIsNEVBQUNWOzRCQUNDVSxXQUFVOzRCQUNWSSxLQUFLRjs7Ozs7O3VCQUhDQzs7Ozs7Z0JBT2QsS0FDQSxJQUFJOzs7Ozs7MEJBRVYsOERBQUNMO2dCQUFJRSxXQUFVOzBCQUNiLDRFQUFDSzs4QkFBR2I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JaO0tBdEVNSjtBQXdFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Qcm9qZWN0cy50c3g/NjBkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmNvbnN0IFByb2plY3RzOiBSZWFjdC5GQzx7XHJcbiAgaGVhZGVyOiBzdHJpbmc7XHJcbiAgaW1nOiBzdHJpbmdbXTtcclxuICBsaXN0OiBzdHJpbmdbXTtcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGNocm9tZUJsb2NrZXI/OiBib29sZWFuO1xyXG4gIHByb2plY3RFbHBpcz86IGJvb2xlYW47XHJcbiAgcmVhY3RCZW5jaG1hcmtzPzogYm9vbGVhbjtcclxuICBnaXRodWJMaW5rOiBzdHJpbmc7XHJcbiAgaG9zdGluZ0xpbms/OiBzdHJpbmc7XHJcbn0+ID0gKHtcclxuICBoZWFkZXIsXHJcbiAgaW1nLFxyXG4gIGxpc3QsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgY2hyb21lQmxvY2tlcixcclxuICBwcm9qZWN0RWxwaXMsXHJcbiAgcmVhY3RCZW5jaG1hcmtzLFxyXG4gIGdpdGh1YkxpbmssXHJcbiAgaG9zdGluZ0xpbmssXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTVcIj57aGVhZGVyfTwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBnYXAtNiBtYi01XCI+XHJcbiAgICAgICAge2ltZ1xyXG4gICAgICAgICAgPyBpbWcubWFwKChlbGVtZW50LCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwibWF4LXctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1hdXRvIG1heC13LWZ1bGwgcm91bmRlZC1sZyBob3ZlcjpzY2FsZS0xNTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2VsZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XHJcbiAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIC8vIDxhXHJcbiAgICAvLyAgIGhyZWY9XCIjXCJcclxuICAgIC8vICAgY2xhc3NOYW1lTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBzaGFkb3cgbWQ6ZmxleC1yb3cgbGc6bWF4LXctYXV0byBtZDptYXgtdy1hdXRvIGhvdmVyOmJnLWdyYXktMTAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIGRhcms6YmctZ3JheS04MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMFwiXHJcbiAgICAvLyA+XHJcbiAgICAvLyAgIDxpbWcgY2xhc3NOYW1lTmFtZT1cInJvdW5kZWQtdC1sZ1wiIHNyYz17aW1nWzFdfSBhbHQ9XCJcIiAvPlxyXG4gICAgLy8gICA8ZGl2IGNsYXNzTmFtZU5hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBwLTQgbGVhZGluZy1ub3JtYWxcIj5cclxuICAgIC8vICAgICA8aDUgY2xhc3NOYW1lTmFtZT1cIm1iLTIgdGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAvLyAgICAgICB7aGVhZGVyfVxyXG4gICAgLy8gICAgIDwvaDU+XHJcbiAgICAvLyAgICAgPHAgY2xhc3NOYW1lTmFtZT1cIm1iLTMgZm9udC1ub3JtYWwgdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cclxuICAgIC8vICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgIC8vICAgICA8L3A+XHJcbiAgICAvLyAgICAgPHVsIGNsYXNzTmFtZU5hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNiB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgLy8gICAgICAge2xpc3RcclxuICAgIC8vICAgICAgICAgPyBsaXN0Lm1hcCgoZWxlbWVudCwgaWR4KSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgLy8gICAgICAgICAgICAgICA8bGkga2V5PXtpZHh9PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lTmFtZT1cIm1yLTQgaG92ZXI6dW5kZXJsaW5lIG1kOm1yLTYgXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICB7ZWxlbWVudH1cclxuICAgIC8vICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAvLyAgICAgICAgICAgICApO1xyXG4gICAgLy8gICAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIDogbnVsbH1cclxuICAgIC8vICAgICA8L3VsPlxyXG4gICAgLy8gICA8L2Rpdj5cclxuICAgIC8vIDwvYT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XHJcbiJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsImhlYWRlciIsImltZyIsImxpc3QiLCJkZXNjcmlwdGlvbiIsImNocm9tZUJsb2NrZXIiLCJwcm9qZWN0RWxwaXMiLCJyZWFjdEJlbmNobWFya3MiLCJnaXRodWJMaW5rIiwiaG9zdGluZ0xpbmsiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsIm1hcCIsImVsZW1lbnQiLCJpZHgiLCJzcmMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Projects.tsx\n"));

/***/ })

});