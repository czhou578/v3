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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Projects = (param)=>{\n    let { header , img , list , description , chromeBlocker , projectElpis , reactBenchmarks , githubLink , hostingLink  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center gap-6\",\n                children: img ? img.map((element, idx)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"h-auto max-w-full rounded-lg\",\n                            src: element\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mycol\\\\WebProjects\\\\v3\\\\app\\\\pages\\\\Projects.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 19\n                        }, undefined)\n                    }, idx, false, {\n                        fileName: \"C:\\\\Users\\\\mycol\\\\WebProjects\\\\v3\\\\app\\\\pages\\\\Projects.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined);\n                }) : null\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mycol\\\\WebProjects\\\\v3\\\\app\\\\pages\\\\Projects.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam esse voluptatem, vel facere sit itaque ea expedita maxime quod?\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mycol\\\\WebProjects\\\\v3\\\\app\\\\pages\\\\Projects.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mycol\\\\WebProjects\\\\v3\\\\app\\\\pages\\\\Projects.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mycol\\\\WebProjects\\\\v3\\\\app\\\\pages\\\\Projects.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Qcm9qZWN0cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU1BLFdBVUQsU0FVQztRQVZBLEVBQ0pDLE9BQU0sRUFDTkMsSUFBRyxFQUNIQyxLQUFJLEVBQ0pDLFlBQVcsRUFDWEMsY0FBYSxFQUNiQyxhQUFZLEVBQ1pDLGdCQUFlLEVBQ2ZDLFdBQVUsRUFDVkMsWUFBVyxFQUNaO0lBQ0MscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVU7MEJBQ1pULE1BQ0dBLElBQUlVLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxNQUFRO29CQUN4QixxQkFDRSw4REFBQ0o7a0NBQ0MsNEVBQUNSOzRCQUFJUyxXQUFVOzRCQUErQkksS0FBS0Y7Ozs7Ozt1QkFEM0NDOzs7OztnQkFJZCxLQUNBLElBQUk7Ozs7OzswQkFFViw4REFBQ0o7MEJBQ0MsNEVBQUNNOzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQWtDWDtLQXJFTWhCO0FBdUVOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1Byb2plY3RzLnRzeD82MGRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuY29uc3QgUHJvamVjdHM6IFJlYWN0LkZDPHtcclxuICBoZWFkZXI6IHN0cmluZztcclxuICBpbWc6IHN0cmluZ1tdO1xyXG4gIGxpc3Q6IHN0cmluZ1tdO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgY2hyb21lQmxvY2tlcj86IGJvb2xlYW47XHJcbiAgcHJvamVjdEVscGlzPzogYm9vbGVhbjtcclxuICByZWFjdEJlbmNobWFya3M/OiBib29sZWFuO1xyXG4gIGdpdGh1Ykxpbms6IHN0cmluZztcclxuICBob3N0aW5nTGluaz86IHN0cmluZztcclxufT4gPSAoe1xyXG4gIGhlYWRlcixcclxuICBpbWcsXHJcbiAgbGlzdCxcclxuICBkZXNjcmlwdGlvbixcclxuICBjaHJvbWVCbG9ja2VyLFxyXG4gIHByb2plY3RFbHBpcyxcclxuICByZWFjdEJlbmNobWFya3MsXHJcbiAgZ2l0aHViTGluayxcclxuICBob3N0aW5nTGluayxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTZcIj5cclxuICAgICAgICB7aW1nXHJcbiAgICAgICAgICA/IGltZy5tYXAoKGVsZW1lbnQsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLWF1dG8gbWF4LXctZnVsbCByb3VuZGVkLWxnXCIgc3JjPXtlbGVtZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBdXQgcXVpYnVzZGFtXHJcbiAgICAgICAgICBlc3NlIHZvbHVwdGF0ZW0sIHZlbCBmYWNlcmUgc2l0IGl0YXF1ZSBlYSBleHBlZGl0YSBtYXhpbWUgcXVvZD9cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICAvLyA8YVxyXG4gICAgLy8gICBocmVmPVwiI1wiXHJcbiAgICAvLyAgIGNsYXNzTmFtZU5hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgc2hhZG93IG1kOmZsZXgtcm93IGxnOm1heC13LWF1dG8gbWQ6bWF4LXctYXV0byBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmJvcmRlci1ncmF5LTcwMCBkYXJrOmJnLWdyYXktODAwIGRhcms6aG92ZXI6YmctZ3JheS03MDBcIlxyXG4gICAgLy8gPlxyXG4gICAgLy8gICA8aW1nIGNsYXNzTmFtZU5hbWU9XCJyb3VuZGVkLXQtbGdcIiBzcmM9e2ltZ1sxXX0gYWx0PVwiXCIgLz5cclxuICAgIC8vICAgPGRpdiBjbGFzc05hbWVOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gcC00IGxlYWRpbmctbm9ybWFsXCI+XHJcbiAgICAvLyAgICAgPGg1IGNsYXNzTmFtZU5hbWU9XCJtYi0yIHRleHQtMnhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgLy8gICAgICAge2hlYWRlcn1cclxuICAgIC8vICAgICA8L2g1PlxyXG4gICAgLy8gICAgIDxwIGNsYXNzTmFtZU5hbWU9XCJtYi0zIGZvbnQtbm9ybWFsIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAvLyAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAvLyAgICAgPC9wPlxyXG4gICAgLy8gICAgIDx1bCBjbGFzc05hbWVOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTYgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgIC8vICAgICAgIHtsaXN0XHJcbiAgICAvLyAgICAgICAgID8gbGlzdC5tYXAoKGVsZW1lbnQsIGlkeCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIChcclxuICAgIC8vICAgICAgICAgICAgICAgPGxpIGtleT17aWR4fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZU5hbWU9XCJtci00IGhvdmVyOnVuZGVybGluZSBtZDptci02IFwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAge2VsZW1lbnR9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgLy8gICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgLy8gICAgICAgICAgICAgKTtcclxuICAgIC8vICAgICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICA6IG51bGx9XHJcbiAgICAvLyAgICAgPC91bD5cclxuICAgIC8vICAgPC9kaXY+XHJcbiAgICAvLyA8L2E+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iXSwibmFtZXMiOlsiUHJvamVjdHMiLCJoZWFkZXIiLCJpbWciLCJsaXN0IiwiZGVzY3JpcHRpb24iLCJjaHJvbWVCbG9ja2VyIiwicHJvamVjdEVscGlzIiwicmVhY3RCZW5jaG1hcmtzIiwiZ2l0aHViTGluayIsImhvc3RpbmdMaW5rIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiZWxlbWVudCIsImlkeCIsInNyYyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Projects.tsx\n"));

/***/ })

});