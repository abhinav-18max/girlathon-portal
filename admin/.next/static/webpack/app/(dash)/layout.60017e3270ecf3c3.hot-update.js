"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dash)/layout",{

/***/ "(app-pages-browser)/./components/navbar.tsx":
/*!*******************************!*\
  !*** ./components/navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/navigation-menu */ \"(app-pages-browser)/./components/ui/navigation-menu.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.2.0/node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/.pnpm/next-auth@4.24.5_next@13.5.6_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Navbar() {\n    _s();\n    const API = \"https://api.girlathon.in\";\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const logout = async ()=>{\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n        const res = await fetch(\"\".concat(API, \"/auth/logout\"), {\n            credentials: \"include\"\n        });\n        if (res.ok) {\n            await res.json();\n            router.push(\"/signin\");\n        } else {\n            await res.json();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.NavigationMenu, {\n            className: \"w-screen bg-gray-50 mt-6 mb-4 p-2 text-xl font-bold shadow-2xl rounded-2xl  flex flex-row justify-between items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.NavigationMenuList, {\n                className: \"w-screen flex flex-row justify-between items-center text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.NavigationMenuList, {\n                        className: \"ml-2.5\",\n                        children: \"GIRLATHON 2.0\"\n                    }, void 0, false, {\n                        fileName: \"/home/abhinav/Projects/girlathon-portal/admin/components/navbar.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" w-1/2 flex justify-evenly\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.NavigationMenuItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: {\n                                        pathname: \"/teams\"\n                                    },\n                                    children: \"Teams\"\n                                }, void 0, false, {\n                                    fileName: \"/home/abhinav/Projects/girlathon-portal/admin/components/navbar.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/abhinav/Projects/girlathon-portal/admin/components/navbar.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.NavigationMenuItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: {\n                                        pathname: \"/marked\"\n                                    },\n                                    children: \"Idea\"\n                                }, void 0, false, {\n                                    fileName: \"/home/abhinav/Projects/girlathon-portal/admin/components/navbar.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/abhinav/Projects/girlathon-portal/admin/components/navbar.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.NavigationMenuItem, {\n                                onClick: ()=>logout(),\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"/home/abhinav/Projects/girlathon-portal/admin/components/navbar.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/abhinav/Projects/girlathon-portal/admin/components/navbar.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/abhinav/Projects/girlathon-portal/admin/components/navbar.tsx\",\n                lineNumber: 35,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/abhinav/Projects/girlathon-portal/admin/components/navbar.tsx\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Navbar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVV3QztBQUNYO0FBQ2E7QUFDRjtBQUl6QixTQUFTTTs7SUFDcEIsTUFBTUMsTUFBTUMsMEJBQStCO0lBQzNDLE1BQU1HLFNBQVNQLDBEQUFTQTtJQUN4QixNQUFNUSxTQUFTO1FBQ1hQLHdEQUFPQTtRQUNQLE1BQU1RLE1BQU0sTUFBTUMsTUFBTSxHQUFPLE9BQUpQLEtBQUksaUJBQWU7WUFBQ1EsYUFBYTtRQUFTO1FBQ3JFLElBQUlGLElBQUlHLEVBQUUsRUFBRTtZQUNSLE1BQU1ILElBQUlJLElBQUk7WUFDZE4sT0FBT08sSUFBSSxDQUFDO1FBQ2hCLE9BQ0s7WUFDRCxNQUFNTCxJQUFJSSxJQUFJO1FBQ2xCO0lBQ0o7SUFDQSxxQkFDSTtrQkFDSSw0RUFBQ2pCLDBFQUFjQTtZQUFDbUIsV0FBVTtzQkFDdEIsNEVBQUNqQiw4RUFBa0JBO2dCQUFDaUIsV0FBVTs7a0NBQzFCLDhEQUFDakIsOEVBQWtCQTt3QkFBQ2lCLFdBQVU7a0NBQVM7Ozs7OztrQ0FHdkMsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDWCw4REFBQ2xCLDhFQUFrQkE7MENBQ2YsNEVBQUNFLGtEQUFJQTtvQ0FBQ2tCLE1BQU07d0NBQUNDLFVBQVM7b0NBQVE7OENBQUc7Ozs7Ozs7Ozs7OzBDQUVyQyw4REFBQ3JCLDhFQUFrQkE7MENBQ2YsNEVBQUNFLGtEQUFJQTtvQ0FBQ2tCLE1BQU07d0NBQUNDLFVBQVM7b0NBQVM7OENBQUc7Ozs7Ozs7Ozs7OzBDQUV0Qyw4REFBQ3JCLDhFQUFrQkE7Z0NBQUNzQixTQUFTLElBQUlYOzBDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZbkU7R0F4Q3dCTjs7UUFFTEYsc0RBQVNBOzs7S0FGSkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIudHN4PzdmMGUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge1xuICAgIE5hdmlnYXRpb25NZW51LFxuICAgIE5hdmlnYXRpb25NZW51Q29udGVudCxcbiAgICBOYXZpZ2F0aW9uTWVudUluZGljYXRvcixcbiAgICBOYXZpZ2F0aW9uTWVudUl0ZW0sXG4gICAgTmF2aWdhdGlvbk1lbnVMaW5rLFxuICAgIE5hdmlnYXRpb25NZW51TGlzdCxcbiAgICBOYXZpZ2F0aW9uTWVudVRyaWdnZXIsXG4gICAgTmF2aWdhdGlvbk1lbnVWaWV3cG9ydCxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9uYXZpZ2F0aW9uLW1lbnVcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7c2lnbk91dH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuICAgIGNvbnN0IEFQSSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkw7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNpZ25PdXQoKVxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUEl9L2F1dGgvbG9nb3V0YCwge2NyZWRlbnRpYWxzOiAnaW5jbHVkZSd9KVxuICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICBhd2FpdCByZXMuanNvbigpXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL3NpZ25pbicpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhd2FpdCByZXMuanNvbigpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPE5hdmlnYXRpb25NZW51IGNsYXNzTmFtZT1cInctc2NyZWVuIGJnLWdyYXktNTAgbXQtNiBtYi00IHAtMiB0ZXh0LXhsIGZvbnQtYm9sZCBzaGFkb3ctMnhsIHJvdW5kZWQtMnhsICBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVMaXN0IGNsYXNzTmFtZT1cInctc2NyZWVuIGZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LWJsYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uTWVudUxpc3QgY2xhc3NOYW1lPVwibWwtMi41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBHSVJMQVRIT04gMi4wXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbk1lbnVMaXN0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LTEvMiBmbGV4IGp1c3RpZnktZXZlbmx5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3twYXRobmFtZTonL3RlYW1zJ319PlRlYW1zPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3twYXRobmFtZTonL21hcmtlZCd9fT5JZGVhPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVJdGVtIG9uQ2xpY2s9eygpPT5sb2dvdXQoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25NZW51SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudUxpc3Q+XG4gICAgICAgICAgICA8L05hdmlnYXRpb25NZW51PlxuXG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsiTmF2aWdhdGlvbk1lbnUiLCJOYXZpZ2F0aW9uTWVudUl0ZW0iLCJOYXZpZ2F0aW9uTWVudUxpc3QiLCJMaW5rIiwidXNlUm91dGVyIiwic2lnbk91dCIsIk5hdmJhciIsIkFQSSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwicm91dGVyIiwibG9nb3V0IiwicmVzIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsIm9rIiwianNvbiIsInB1c2giLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwicGF0aG5hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/navbar.tsx\n"));

/***/ })

});