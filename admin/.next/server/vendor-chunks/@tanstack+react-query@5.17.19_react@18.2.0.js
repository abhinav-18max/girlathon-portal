"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@tanstack+react-query@5.17.19_react@18.2.0";
exports.ids = ["vendor-chunks/@tanstack+react-query@5.17.19_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QueryClientContext: () => (/* binding */ QueryClientContext),\n/* harmony export */   QueryClientProvider: () => (/* binding */ QueryClientProvider),\n/* harmony export */   useQueryClient: () => (/* binding */ useQueryClient)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\"use client\";\n\n// src/QueryClientProvider.tsx\n\nvar QueryClientContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(\n  void 0\n);\nvar useQueryClient = (queryClient) => {\n  const client = react__WEBPACK_IMPORTED_MODULE_0__.useContext(QueryClientContext);\n  if (queryClient) {\n    return queryClient;\n  }\n  if (!client) {\n    throw new Error(\"No QueryClient set, use QueryClientProvider to set one\");\n  }\n  return client;\n};\nvar QueryClientProvider = ({\n  client,\n  children\n}) => {\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\n    client.mount();\n    return () => {\n      client.unmount();\n    };\n  }, [client]);\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(QueryClientContext.Provider, { value: client }, children);\n};\n\n//# sourceMappingURL=QueryClientProvider.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRhbnN0YWNrK3JlYWN0LXF1ZXJ5QDUuMTcuMTlfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AdGFuc3RhY2svcmVhY3QtcXVlcnkvYnVpbGQvbW9kZXJuL1F1ZXJ5Q2xpZW50UHJvdmlkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBO0FBQytCO0FBQy9CLHlCQUF5QixnREFBbUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZDQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELEVBQUUsNENBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gseUJBQXlCLGdEQUFtQixnQ0FBZ0MsZUFBZTtBQUMzRjtBQUtFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZG1pbi1wYW5lbC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AdGFuc3RhY2srcmVhY3QtcXVlcnlANS4xNy4xOV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0B0YW5zdGFjay9yZWFjdC1xdWVyeS9idWlsZC9tb2Rlcm4vUXVlcnlDbGllbnRQcm92aWRlci5qcz9iNzdhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG4vLyBzcmMvUXVlcnlDbGllbnRQcm92aWRlci50c3hcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xudmFyIFF1ZXJ5Q2xpZW50Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoXG4gIHZvaWQgMFxuKTtcbnZhciB1c2VRdWVyeUNsaWVudCA9IChxdWVyeUNsaWVudCkgPT4ge1xuICBjb25zdCBjbGllbnQgPSBSZWFjdC51c2VDb250ZXh0KFF1ZXJ5Q2xpZW50Q29udGV4dCk7XG4gIGlmIChxdWVyeUNsaWVudCkge1xuICAgIHJldHVybiBxdWVyeUNsaWVudDtcbiAgfVxuICBpZiAoIWNsaWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIFF1ZXJ5Q2xpZW50IHNldCwgdXNlIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgdG8gc2V0IG9uZVwiKTtcbiAgfVxuICByZXR1cm4gY2xpZW50O1xufTtcbnZhciBRdWVyeUNsaWVudFByb3ZpZGVyID0gKHtcbiAgY2xpZW50LFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNsaWVudC5tb3VudCgpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGllbnQudW5tb3VudCgpO1xuICAgIH07XG4gIH0sIFtjbGllbnRdKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXJ5Q2xpZW50Q29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogY2xpZW50IH0sIGNoaWxkcmVuKTtcbn07XG5leHBvcnQge1xuICBRdWVyeUNsaWVudENvbnRleHQsXG4gIFF1ZXJ5Q2xpZW50UHJvdmlkZXIsXG4gIHVzZVF1ZXJ5Q2xpZW50XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UXVlcnlDbGllbnRQcm92aWRlci5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QueryErrorResetBoundary: () => (/* binding */ QueryErrorResetBoundary),\n/* harmony export */   useQueryErrorResetBoundary: () => (/* binding */ useQueryErrorResetBoundary)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\"use client\";\n\n// src/QueryErrorResetBoundary.tsx\n\nfunction createValue() {\n  let isReset = false;\n  return {\n    clearReset: () => {\n      isReset = false;\n    },\n    reset: () => {\n      isReset = true;\n    },\n    isReset: () => {\n      return isReset;\n    }\n  };\n}\nvar QueryErrorResetBoundaryContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(createValue());\nvar useQueryErrorResetBoundary = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(QueryErrorResetBoundaryContext);\nvar QueryErrorResetBoundary = ({\n  children\n}) => {\n  const [value] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => createValue());\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(QueryErrorResetBoundaryContext.Provider, { value }, typeof children === \"function\" ? children(value) : children);\n};\n\n//# sourceMappingURL=QueryErrorResetBoundary.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRhbnN0YWNrK3JlYWN0LXF1ZXJ5QDUuMTcuMTlfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AdGFuc3RhY2svcmVhY3QtcXVlcnkvYnVpbGQvbW9kZXJuL1F1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBO0FBQytCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGdEQUFtQjtBQUN4RCx1Q0FBdUMsNkNBQWdCO0FBQ3ZEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0JBQWtCLDJDQUFjO0FBQ2hDLHlCQUF5QixnREFBbUIsNENBQTRDLE9BQU87QUFDL0Y7QUFJRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRtaW4tcGFuZWwvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRhbnN0YWNrK3JlYWN0LXF1ZXJ5QDUuMTcuMTlfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AdGFuc3RhY2svcmVhY3QtcXVlcnkvYnVpbGQvbW9kZXJuL1F1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5LmpzPzYyYTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbi8vIHNyYy9RdWVyeUVycm9yUmVzZXRCb3VuZGFyeS50c3hcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZnVuY3Rpb24gY3JlYXRlVmFsdWUoKSB7XG4gIGxldCBpc1Jlc2V0ID0gZmFsc2U7XG4gIHJldHVybiB7XG4gICAgY2xlYXJSZXNldDogKCkgPT4ge1xuICAgICAgaXNSZXNldCA9IGZhbHNlO1xuICAgIH0sXG4gICAgcmVzZXQ6ICgpID0+IHtcbiAgICAgIGlzUmVzZXQgPSB0cnVlO1xuICAgIH0sXG4gICAgaXNSZXNldDogKCkgPT4ge1xuICAgICAgcmV0dXJuIGlzUmVzZXQ7XG4gICAgfVxuICB9O1xufVxudmFyIFF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoY3JlYXRlVmFsdWUoKSk7XG52YXIgdXNlUXVlcnlFcnJvclJlc2V0Qm91bmRhcnkgPSAoKSA9PiBSZWFjdC51c2VDb250ZXh0KFF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5Q29udGV4dCk7XG52YXIgUXVlcnlFcnJvclJlc2V0Qm91bmRhcnkgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBbdmFsdWVdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gY3JlYXRlVmFsdWUoKSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChRdWVyeUVycm9yUmVzZXRCb3VuZGFyeUNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWUgfSwgdHlwZW9mIGNoaWxkcmVuID09PSBcImZ1bmN0aW9uXCIgPyBjaGlsZHJlbih2YWx1ZSkgOiBjaGlsZHJlbik7XG59O1xuZXhwb3J0IHtcbiAgUXVlcnlFcnJvclJlc2V0Qm91bmRhcnksXG4gIHVzZVF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UXVlcnlFcnJvclJlc2V0Qm91bmRhcnkuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ensurePreventErrorBoundaryRetry: () => (/* binding */ ensurePreventErrorBoundaryRetry),\n/* harmony export */   getHasError: () => (/* binding */ getHasError),\n/* harmony export */   useClearResetErrorBoundary: () => (/* binding */ useClearResetErrorBoundary)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/utils.js\");\n\"use client\";\n\n// src/errorBoundaryUtils.ts\n\n\nvar ensurePreventErrorBoundaryRetry = (options, errorResetBoundary) => {\n  if (options.suspense || options.throwOnError) {\n    if (!errorResetBoundary.isReset()) {\n      options.retryOnMount = false;\n    }\n  }\n};\nvar useClearResetErrorBoundary = (errorResetBoundary) => {\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\n    errorResetBoundary.clearReset();\n  }, [errorResetBoundary]);\n};\nvar getHasError = ({\n  result,\n  errorResetBoundary,\n  throwOnError,\n  query\n}) => {\n  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.shouldThrowError)(throwOnError, [result.error, query]);\n};\n\n//# sourceMappingURL=errorBoundaryUtils.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRhbnN0YWNrK3JlYWN0LXF1ZXJ5QDUuMTcuMTlfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AdGFuc3RhY2svcmVhY3QtcXVlcnkvYnVpbGQvbW9kZXJuL2Vycm9yQm91bmRhcnlVdGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBO0FBQytCO0FBQ2U7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNENBQWU7QUFDakI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDJGQUEyRiwyREFBZ0I7QUFDM0c7QUFLRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRtaW4tcGFuZWwvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRhbnN0YWNrK3JlYWN0LXF1ZXJ5QDUuMTcuMTlfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AdGFuc3RhY2svcmVhY3QtcXVlcnkvYnVpbGQvbW9kZXJuL2Vycm9yQm91bmRhcnlVdGlscy5qcz9lOWIyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG4vLyBzcmMvZXJyb3JCb3VuZGFyeVV0aWxzLnRzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNob3VsZFRocm93RXJyb3IgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xudmFyIGVuc3VyZVByZXZlbnRFcnJvckJvdW5kYXJ5UmV0cnkgPSAob3B0aW9ucywgZXJyb3JSZXNldEJvdW5kYXJ5KSA9PiB7XG4gIGlmIChvcHRpb25zLnN1c3BlbnNlIHx8IG9wdGlvbnMudGhyb3dPbkVycm9yKSB7XG4gICAgaWYgKCFlcnJvclJlc2V0Qm91bmRhcnkuaXNSZXNldCgpKSB7XG4gICAgICBvcHRpb25zLnJldHJ5T25Nb3VudCA9IGZhbHNlO1xuICAgIH1cbiAgfVxufTtcbnZhciB1c2VDbGVhclJlc2V0RXJyb3JCb3VuZGFyeSA9IChlcnJvclJlc2V0Qm91bmRhcnkpID0+IHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBlcnJvclJlc2V0Qm91bmRhcnkuY2xlYXJSZXNldCgpO1xuICB9LCBbZXJyb3JSZXNldEJvdW5kYXJ5XSk7XG59O1xudmFyIGdldEhhc0Vycm9yID0gKHtcbiAgcmVzdWx0LFxuICBlcnJvclJlc2V0Qm91bmRhcnksXG4gIHRocm93T25FcnJvcixcbiAgcXVlcnlcbn0pID0+IHtcbiAgcmV0dXJuIHJlc3VsdC5pc0Vycm9yICYmICFlcnJvclJlc2V0Qm91bmRhcnkuaXNSZXNldCgpICYmICFyZXN1bHQuaXNGZXRjaGluZyAmJiBxdWVyeSAmJiBzaG91bGRUaHJvd0Vycm9yKHRocm93T25FcnJvciwgW3Jlc3VsdC5lcnJvciwgcXVlcnldKTtcbn07XG5leHBvcnQge1xuICBlbnN1cmVQcmV2ZW50RXJyb3JCb3VuZGFyeVJldHJ5LFxuICBnZXRIYXNFcnJvcixcbiAgdXNlQ2xlYXJSZXNldEVycm9yQm91bmRhcnlcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lcnJvckJvdW5kYXJ5VXRpbHMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/isRestoring.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/isRestoring.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IsRestoringProvider: () => (/* binding */ IsRestoringProvider),\n/* harmony export */   useIsRestoring: () => (/* binding */ useIsRestoring)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\"use client\";\n\n// src/isRestoring.ts\n\nvar IsRestoringContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(false);\nvar useIsRestoring = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(IsRestoringContext);\nvar IsRestoringProvider = IsRestoringContext.Provider;\n\n//# sourceMappingURL=isRestoring.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRhbnN0YWNrK3JlYWN0LXF1ZXJ5QDUuMTcuMTlfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AdGFuc3RhY2svcmVhY3QtcXVlcnkvYnVpbGQvbW9kZXJuL2lzUmVzdG9yaW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBO0FBQytCO0FBQy9CLHlCQUF5QixnREFBbUI7QUFDNUMsMkJBQTJCLDZDQUFnQjtBQUMzQztBQUlFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZG1pbi1wYW5lbC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AdGFuc3RhY2srcmVhY3QtcXVlcnlANS4xNy4xOV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0B0YW5zdGFjay9yZWFjdC1xdWVyeS9idWlsZC9tb2Rlcm4vaXNSZXN0b3JpbmcuanM/NmMzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuLy8gc3JjL2lzUmVzdG9yaW5nLnRzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbnZhciBJc1Jlc3RvcmluZ0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGZhbHNlKTtcbnZhciB1c2VJc1Jlc3RvcmluZyA9ICgpID0+IFJlYWN0LnVzZUNvbnRleHQoSXNSZXN0b3JpbmdDb250ZXh0KTtcbnZhciBJc1Jlc3RvcmluZ1Byb3ZpZGVyID0gSXNSZXN0b3JpbmdDb250ZXh0LlByb3ZpZGVyO1xuZXhwb3J0IHtcbiAgSXNSZXN0b3JpbmdQcm92aWRlcixcbiAgdXNlSXNSZXN0b3Jpbmdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc1Jlc3RvcmluZy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/isRestoring.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/suspense.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/suspense.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultThrowOnError: () => (/* binding */ defaultThrowOnError),\n/* harmony export */   ensureStaleTime: () => (/* binding */ ensureStaleTime),\n/* harmony export */   fetchOptimistic: () => (/* binding */ fetchOptimistic),\n/* harmony export */   shouldSuspend: () => (/* binding */ shouldSuspend),\n/* harmony export */   willFetch: () => (/* binding */ willFetch)\n/* harmony export */ });\n// src/suspense.ts\nvar defaultThrowOnError = (_error, query) => typeof query.state.data === \"undefined\";\nvar ensureStaleTime = (defaultedOptions) => {\n  if (defaultedOptions.suspense) {\n    if (typeof defaultedOptions.staleTime !== \"number\") {\n      defaultedOptions.staleTime = 1e3;\n    }\n  }\n};\nvar willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;\nvar shouldSuspend = (defaultedOptions, result) => defaultedOptions?.suspense && result.isPending;\nvar fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {\n  errorResetBoundary.clearReset();\n});\n\n//# sourceMappingURL=suspense.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRhbnN0YWNrK3JlYWN0LXF1ZXJ5QDUuMTcuMTlfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AdGFuc3RhY2svcmVhY3QtcXVlcnkvYnVpbGQvbW9kZXJuL3N1c3BlbnNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBT0M7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FkbWluLXBhbmVsLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0B0YW5zdGFjaytyZWFjdC1xdWVyeUA1LjE3LjE5X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5L2J1aWxkL21vZGVybi9zdXNwZW5zZS5qcz84MzA1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zdXNwZW5zZS50c1xudmFyIGRlZmF1bHRUaHJvd09uRXJyb3IgPSAoX2Vycm9yLCBxdWVyeSkgPT4gdHlwZW9mIHF1ZXJ5LnN0YXRlLmRhdGEgPT09IFwidW5kZWZpbmVkXCI7XG52YXIgZW5zdXJlU3RhbGVUaW1lID0gKGRlZmF1bHRlZE9wdGlvbnMpID0+IHtcbiAgaWYgKGRlZmF1bHRlZE9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICBpZiAodHlwZW9mIGRlZmF1bHRlZE9wdGlvbnMuc3RhbGVUaW1lICE9PSBcIm51bWJlclwiKSB7XG4gICAgICBkZWZhdWx0ZWRPcHRpb25zLnN0YWxlVGltZSA9IDFlMztcbiAgICB9XG4gIH1cbn07XG52YXIgd2lsbEZldGNoID0gKHJlc3VsdCwgaXNSZXN0b3JpbmcpID0+IHJlc3VsdC5pc0xvYWRpbmcgJiYgcmVzdWx0LmlzRmV0Y2hpbmcgJiYgIWlzUmVzdG9yaW5nO1xudmFyIHNob3VsZFN1c3BlbmQgPSAoZGVmYXVsdGVkT3B0aW9ucywgcmVzdWx0KSA9PiBkZWZhdWx0ZWRPcHRpb25zPy5zdXNwZW5zZSAmJiByZXN1bHQuaXNQZW5kaW5nO1xudmFyIGZldGNoT3B0aW1pc3RpYyA9IChkZWZhdWx0ZWRPcHRpb25zLCBvYnNlcnZlciwgZXJyb3JSZXNldEJvdW5kYXJ5KSA9PiBvYnNlcnZlci5mZXRjaE9wdGltaXN0aWMoZGVmYXVsdGVkT3B0aW9ucykuY2F0Y2goKCkgPT4ge1xuICBlcnJvclJlc2V0Qm91bmRhcnkuY2xlYXJSZXNldCgpO1xufSk7XG5leHBvcnQge1xuICBkZWZhdWx0VGhyb3dPbkVycm9yLFxuICBlbnN1cmVTdGFsZVRpbWUsXG4gIGZldGNoT3B0aW1pc3RpYyxcbiAgc2hvdWxkU3VzcGVuZCxcbiAgd2lsbEZldGNoXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3VzcGVuc2UuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/suspense.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useBaseQuery: () => (/* binding */ useBaseQuery)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/query-core */ \"(ssr)/./node_modules/.pnpm/@tanstack+query-core@5.17.19/node_modules/@tanstack/query-core/build/modern/notifyManager.js\");\n/* harmony import */ var _QueryErrorResetBoundary_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryErrorResetBoundary.js */ \"(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js\");\n/* harmony import */ var _QueryClientProvider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider.js */ \"(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js\");\n/* harmony import */ var _isRestoring_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isRestoring.js */ \"(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/isRestoring.js\");\n/* harmony import */ var _errorBoundaryUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errorBoundaryUtils.js */ \"(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js\");\n/* harmony import */ var _suspense_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./suspense.js */ \"(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/suspense.js\");\n\"use client\";\n\n// src/useBaseQuery.ts\n\n\n\n\n\n\n\nfunction useBaseQuery(options, Observer, queryClient) {\n  if (true) {\n    if (typeof options !== \"object\" || Array.isArray(options)) {\n      throw new Error(\n        'Bad argument type. Starting with v5, only the \"Object\" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'\n      );\n    }\n  }\n  const client = (0,_QueryClientProvider_js__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)(queryClient);\n  const isRestoring = (0,_isRestoring_js__WEBPACK_IMPORTED_MODULE_2__.useIsRestoring)();\n  const errorResetBoundary = (0,_QueryErrorResetBoundary_js__WEBPACK_IMPORTED_MODULE_3__.useQueryErrorResetBoundary)();\n  const defaultedOptions = client.defaultQueryOptions(options);\n  defaultedOptions._optimisticResults = isRestoring ? \"isRestoring\" : \"optimistic\";\n  (0,_suspense_js__WEBPACK_IMPORTED_MODULE_4__.ensureStaleTime)(defaultedOptions);\n  (0,_errorBoundaryUtils_js__WEBPACK_IMPORTED_MODULE_5__.ensurePreventErrorBoundaryRetry)(defaultedOptions, errorResetBoundary);\n  (0,_errorBoundaryUtils_js__WEBPACK_IMPORTED_MODULE_5__.useClearResetErrorBoundary)(errorResetBoundary);\n  const [observer] = react__WEBPACK_IMPORTED_MODULE_0__.useState(\n    () => new Observer(\n      client,\n      defaultedOptions\n    )\n  );\n  const result = observer.getOptimisticResult(defaultedOptions);\n  react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore(\n    react__WEBPACK_IMPORTED_MODULE_0__.useCallback(\n      (onStoreChange) => {\n        const unsubscribe = isRestoring ? () => void 0 : observer.subscribe(_tanstack_query_core__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batchCalls(onStoreChange));\n        observer.updateResult();\n        return unsubscribe;\n      },\n      [observer, isRestoring]\n    ),\n    () => observer.getCurrentResult(),\n    () => observer.getCurrentResult()\n  );\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\n    observer.setOptions(defaultedOptions, { listeners: false });\n  }, [defaultedOptions, observer]);\n  if ((0,_suspense_js__WEBPACK_IMPORTED_MODULE_4__.shouldSuspend)(defaultedOptions, result)) {\n    throw (0,_suspense_js__WEBPACK_IMPORTED_MODULE_4__.fetchOptimistic)(defaultedOptions, observer, errorResetBoundary);\n  }\n  if ((0,_errorBoundaryUtils_js__WEBPACK_IMPORTED_MODULE_5__.getHasError)({\n    result,\n    errorResetBoundary,\n    throwOnError: defaultedOptions.throwOnError,\n    query: client.getQueryCache().get(defaultedOptions.queryHash)\n  })) {\n    throw result.error;\n  }\n  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;\n}\n\n//# sourceMappingURL=useBaseQuery.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRhbnN0YWNrK3JlYWN0LXF1ZXJ5QDUuMTcuMTlfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AdGFuc3RhY2svcmVhY3QtcXVlcnkvYnVpbGQvbW9kZXJuL3VzZUJhc2VRdWVyeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQytCO0FBQ3NCO0FBQ3FCO0FBQ2hCO0FBQ1I7QUFLakI7QUFDK0M7QUFDaEY7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1RUFBYztBQUMvQixzQkFBc0IsK0RBQWM7QUFDcEMsNkJBQTZCLHVGQUEwQjtBQUN2RDtBQUNBO0FBQ0EsRUFBRSw2REFBZTtBQUNqQixFQUFFLHVGQUErQjtBQUNqQyxFQUFFLGtGQUEwQjtBQUM1QixxQkFBcUIsMkNBQWM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBMEI7QUFDNUIsSUFBSSw4Q0FBaUI7QUFDckI7QUFDQSw0RUFBNEUsK0RBQWE7QUFDekY7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw0Q0FBZTtBQUNqQiw0Q0FBNEMsa0JBQWtCO0FBQzlELEdBQUc7QUFDSCxNQUFNLDJEQUFhO0FBQ25CLFVBQVUsNkRBQWU7QUFDekI7QUFDQSxNQUFNLG1FQUFXO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBR0U7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FkbWluLXBhbmVsLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0B0YW5zdGFjaytyZWFjdC1xdWVyeUA1LjE3LjE5X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5L2J1aWxkL21vZGVybi91c2VCYXNlUXVlcnkuanM/Mjk0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuLy8gc3JjL3VzZUJhc2VRdWVyeS50c1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSBcIkB0YW5zdGFjay9xdWVyeS1jb3JlXCI7XG5pbXBvcnQgeyB1c2VRdWVyeUVycm9yUmVzZXRCb3VuZGFyeSB9IGZyb20gXCIuL1F1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5LmpzXCI7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCIuL1F1ZXJ5Q2xpZW50UHJvdmlkZXIuanNcIjtcbmltcG9ydCB7IHVzZUlzUmVzdG9yaW5nIH0gZnJvbSBcIi4vaXNSZXN0b3JpbmcuanNcIjtcbmltcG9ydCB7XG4gIGVuc3VyZVByZXZlbnRFcnJvckJvdW5kYXJ5UmV0cnksXG4gIGdldEhhc0Vycm9yLFxuICB1c2VDbGVhclJlc2V0RXJyb3JCb3VuZGFyeVxufSBmcm9tIFwiLi9lcnJvckJvdW5kYXJ5VXRpbHMuanNcIjtcbmltcG9ydCB7IGVuc3VyZVN0YWxlVGltZSwgZmV0Y2hPcHRpbWlzdGljLCBzaG91bGRTdXNwZW5kIH0gZnJvbSBcIi4vc3VzcGVuc2UuanNcIjtcbmZ1bmN0aW9uIHVzZUJhc2VRdWVyeShvcHRpb25zLCBPYnNlcnZlciwgcXVlcnlDbGllbnQpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gXCJvYmplY3RcIiB8fCBBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdCYWQgYXJndW1lbnQgdHlwZS4gU3RhcnRpbmcgd2l0aCB2NSwgb25seSB0aGUgXCJPYmplY3RcIiBmb3JtIGlzIGFsbG93ZWQgd2hlbiBjYWxsaW5nIHF1ZXJ5IHJlbGF0ZWQgZnVuY3Rpb25zLiBQbGVhc2UgdXNlIHRoZSBlcnJvciBzdGFjayB0byBmaW5kIHRoZSBjdWxwcml0IGNhbGwuIE1vcmUgaW5mbyBoZXJlOiBodHRwczovL3RhbnN0YWNrLmNvbS9xdWVyeS9sYXRlc3QvZG9jcy9yZWFjdC9ndWlkZXMvbWlncmF0aW5nLXRvLXY1I3N1cHBvcnRzLWEtc2luZ2xlLXNpZ25hdHVyZS1vbmUtb2JqZWN0J1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgY2xpZW50ID0gdXNlUXVlcnlDbGllbnQocXVlcnlDbGllbnQpO1xuICBjb25zdCBpc1Jlc3RvcmluZyA9IHVzZUlzUmVzdG9yaW5nKCk7XG4gIGNvbnN0IGVycm9yUmVzZXRCb3VuZGFyeSA9IHVzZVF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5KCk7XG4gIGNvbnN0IGRlZmF1bHRlZE9wdGlvbnMgPSBjbGllbnQuZGVmYXVsdFF1ZXJ5T3B0aW9ucyhvcHRpb25zKTtcbiAgZGVmYXVsdGVkT3B0aW9ucy5fb3B0aW1pc3RpY1Jlc3VsdHMgPSBpc1Jlc3RvcmluZyA/IFwiaXNSZXN0b3JpbmdcIiA6IFwib3B0aW1pc3RpY1wiO1xuICBlbnN1cmVTdGFsZVRpbWUoZGVmYXVsdGVkT3B0aW9ucyk7XG4gIGVuc3VyZVByZXZlbnRFcnJvckJvdW5kYXJ5UmV0cnkoZGVmYXVsdGVkT3B0aW9ucywgZXJyb3JSZXNldEJvdW5kYXJ5KTtcbiAgdXNlQ2xlYXJSZXNldEVycm9yQm91bmRhcnkoZXJyb3JSZXNldEJvdW5kYXJ5KTtcbiAgY29uc3QgW29ic2VydmVyXSA9IFJlYWN0LnVzZVN0YXRlKFxuICAgICgpID0+IG5ldyBPYnNlcnZlcihcbiAgICAgIGNsaWVudCxcbiAgICAgIGRlZmF1bHRlZE9wdGlvbnNcbiAgICApXG4gICk7XG4gIGNvbnN0IHJlc3VsdCA9IG9ic2VydmVyLmdldE9wdGltaXN0aWNSZXN1bHQoZGVmYXVsdGVkT3B0aW9ucyk7XG4gIFJlYWN0LnVzZVN5bmNFeHRlcm5hbFN0b3JlKFxuICAgIFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICAgKG9uU3RvcmVDaGFuZ2UpID0+IHtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBpc1Jlc3RvcmluZyA/ICgpID0+IHZvaWQgMCA6IG9ic2VydmVyLnN1YnNjcmliZShub3RpZnlNYW5hZ2VyLmJhdGNoQ2FsbHMob25TdG9yZUNoYW5nZSkpO1xuICAgICAgICBvYnNlcnZlci51cGRhdGVSZXN1bHQoKTtcbiAgICAgICAgcmV0dXJuIHVuc3Vic2NyaWJlO1xuICAgICAgfSxcbiAgICAgIFtvYnNlcnZlciwgaXNSZXN0b3JpbmddXG4gICAgKSxcbiAgICAoKSA9PiBvYnNlcnZlci5nZXRDdXJyZW50UmVzdWx0KCksXG4gICAgKCkgPT4gb2JzZXJ2ZXIuZ2V0Q3VycmVudFJlc3VsdCgpXG4gICk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgb2JzZXJ2ZXIuc2V0T3B0aW9ucyhkZWZhdWx0ZWRPcHRpb25zLCB7IGxpc3RlbmVyczogZmFsc2UgfSk7XG4gIH0sIFtkZWZhdWx0ZWRPcHRpb25zLCBvYnNlcnZlcl0pO1xuICBpZiAoc2hvdWxkU3VzcGVuZChkZWZhdWx0ZWRPcHRpb25zLCByZXN1bHQpKSB7XG4gICAgdGhyb3cgZmV0Y2hPcHRpbWlzdGljKGRlZmF1bHRlZE9wdGlvbnMsIG9ic2VydmVyLCBlcnJvclJlc2V0Qm91bmRhcnkpO1xuICB9XG4gIGlmIChnZXRIYXNFcnJvcih7XG4gICAgcmVzdWx0LFxuICAgIGVycm9yUmVzZXRCb3VuZGFyeSxcbiAgICB0aHJvd09uRXJyb3I6IGRlZmF1bHRlZE9wdGlvbnMudGhyb3dPbkVycm9yLFxuICAgIHF1ZXJ5OiBjbGllbnQuZ2V0UXVlcnlDYWNoZSgpLmdldChkZWZhdWx0ZWRPcHRpb25zLnF1ZXJ5SGFzaClcbiAgfSkpIHtcbiAgICB0aHJvdyByZXN1bHQuZXJyb3I7XG4gIH1cbiAgcmV0dXJuICFkZWZhdWx0ZWRPcHRpb25zLm5vdGlmeU9uQ2hhbmdlUHJvcHMgPyBvYnNlcnZlci50cmFja1Jlc3VsdChyZXN1bHQpIDogcmVzdWx0O1xufVxuZXhwb3J0IHtcbiAgdXNlQmFzZVF1ZXJ5XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlQmFzZVF1ZXJ5LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/useQuery.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/useQuery.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useQuery: () => (/* binding */ useQuery)\n/* harmony export */ });\n/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/query-core */ \"(ssr)/./node_modules/.pnpm/@tanstack+query-core@5.17.19/node_modules/@tanstack/query-core/build/modern/queryObserver.js\");\n/* harmony import */ var _useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useBaseQuery.js */ \"(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js\");\n\"use client\";\n\n// src/useQuery.ts\n\n\nfunction useQuery(options, queryClient) {\n  return (0,_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__.useBaseQuery)(options, _tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__.QueryObserver, queryClient);\n}\n\n//# sourceMappingURL=useQuery.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRhbnN0YWNrK3JlYWN0LXF1ZXJ5QDUuMTcuMTlfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AdGFuc3RhY2svcmVhY3QtcXVlcnkvYnVpbGQvbW9kZXJuL3VzZVF1ZXJ5LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBO0FBQ3FEO0FBQ0o7QUFDakQ7QUFDQSxTQUFTLDhEQUFZLFVBQVUsK0RBQWE7QUFDNUM7QUFHRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRtaW4tcGFuZWwvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRhbnN0YWNrK3JlYWN0LXF1ZXJ5QDUuMTcuMTlfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AdGFuc3RhY2svcmVhY3QtcXVlcnkvYnVpbGQvbW9kZXJuL3VzZVF1ZXJ5LmpzPzFjYzAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbi8vIHNyYy91c2VRdWVyeS50c1xuaW1wb3J0IHsgUXVlcnlPYnNlcnZlciB9IGZyb20gXCJAdGFuc3RhY2svcXVlcnktY29yZVwiO1xuaW1wb3J0IHsgdXNlQmFzZVF1ZXJ5IH0gZnJvbSBcIi4vdXNlQmFzZVF1ZXJ5LmpzXCI7XG5mdW5jdGlvbiB1c2VRdWVyeShvcHRpb25zLCBxdWVyeUNsaWVudCkge1xuICByZXR1cm4gdXNlQmFzZVF1ZXJ5KG9wdGlvbnMsIFF1ZXJ5T2JzZXJ2ZXIsIHF1ZXJ5Q2xpZW50KTtcbn1cbmV4cG9ydCB7XG4gIHVzZVF1ZXJ5XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlUXVlcnkuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/useQuery.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/utils.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/utils.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   shouldThrowError: () => (/* binding */ shouldThrowError)\n/* harmony export */ });\n// src/utils.ts\nfunction shouldThrowError(throwError, params) {\n  if (typeof throwError === \"function\") {\n    return throwError(...params);\n  }\n  return !!throwError;\n}\n\n//# sourceMappingURL=utils.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRhbnN0YWNrK3JlYWN0LXF1ZXJ5QDUuMTcuMTlfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AdGFuc3RhY2svcmVhY3QtcXVlcnkvYnVpbGQvbW9kZXJuL3V0aWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZG1pbi1wYW5lbC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AdGFuc3RhY2srcmVhY3QtcXVlcnlANS4xNy4xOV9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0B0YW5zdGFjay9yZWFjdC1xdWVyeS9idWlsZC9tb2Rlcm4vdXRpbHMuanM/MDI5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvdXRpbHMudHNcbmZ1bmN0aW9uIHNob3VsZFRocm93RXJyb3IodGhyb3dFcnJvciwgcGFyYW1zKSB7XG4gIGlmICh0eXBlb2YgdGhyb3dFcnJvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHRocm93RXJyb3IoLi4ucGFyYW1zKTtcbiAgfVxuICByZXR1cm4gISF0aHJvd0Vycm9yO1xufVxuZXhwb3J0IHtcbiAgc2hvdWxkVGhyb3dFcnJvclxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@tanstack+react-query@5.17.19_react@18.2.0/node_modules/@tanstack/react-query/build/modern/utils.js\n");

/***/ })

};
;