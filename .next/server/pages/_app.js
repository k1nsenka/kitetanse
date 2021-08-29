"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/gtag.js":
/*!*********************!*\
  !*** ./lib/gtag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GA_TRACKING_ID\": () => (/* binding */ GA_TRACKING_ID),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview),\n/* harmony export */   \"event\": () => (/* binding */ event)\n/* harmony export */ });\n// See: https://github.com/zeit/next.js/blob/v9.3.1/examples/with-google-analytics/lib/gtag.js\nconst GA_TRACKING_ID = process.env.GA_TRACKING_ID; // https://developers.google.com/analytics/devguides/collection/gtagjs/pages\n\nconst pageview = url => {\n  window.gtag('config', GA_TRACKING_ID, {\n    page_path: url\n  });\n}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events\n\n\nconst event = ({\n  action,\n  category,\n  label,\n  value\n}) => {\n  window.gtag('event', action, {\n    event_category: category,\n    event_label: label,\n    value: value\n  });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ3RhZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLE1BQU1BLGNBQWMsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLGNBQW5DLEVBRUE7O0FBQ0EsTUFBTUcsUUFBUSxHQUFJQyxHQUFELElBQVM7QUFDeEJDLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVosRUFBc0JOLGNBQXRCLEVBQXNDO0FBQ3BDTyxJQUFBQSxTQUFTLEVBQUVIO0FBRHlCLEdBQXRDO0FBR0QsQ0FKRCxFQU1BOzs7QUFDQSxNQUFNSSxLQUFLLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxNQUFGO0FBQVVDLEVBQUFBLFFBQVY7QUFBb0JDLEVBQUFBLEtBQXBCO0FBQTJCQyxFQUFBQTtBQUEzQixDQUFELEtBQXdDO0FBQ3BEUCxFQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxPQUFaLEVBQXFCRyxNQUFyQixFQUE2QjtBQUMzQkksSUFBQUEsY0FBYyxFQUFFSCxRQURXO0FBRTNCSSxJQUFBQSxXQUFXLEVBQUVILEtBRmM7QUFHM0JDLElBQUFBLEtBQUssRUFBRUE7QUFIb0IsR0FBN0I7QUFLRCxDQU5EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2ctZXhhbXBsZS1qYS8uL2xpYi9ndGFnLmpzPzMzNGYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzL2Jsb2IvdjkuMy4xL2V4YW1wbGVzL3dpdGgtZ29vZ2xlLWFuYWx5dGljcy9saWIvZ3RhZy5qc1xuY29uc3QgR0FfVFJBQ0tJTkdfSUQgPSBwcm9jZXNzLmVudi5HQV9UUkFDS0lOR19JRFxuXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL3BhZ2VzXG5jb25zdCBwYWdldmlldyA9ICh1cmwpID0+IHtcbiAgd2luZG93Lmd0YWcoJ2NvbmZpZycsIEdBX1RSQUNLSU5HX0lELCB7XG4gICAgcGFnZV9wYXRoOiB1cmwsXG4gIH0pXG59XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvZXZlbnRzXG5jb25zdCBldmVudCA9ICh7IGFjdGlvbiwgY2F0ZWdvcnksIGxhYmVsLCB2YWx1ZSB9KSA9PiB7XG4gIHdpbmRvdy5ndGFnKCdldmVudCcsIGFjdGlvbiwge1xuICAgIGV2ZW50X2NhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICBldmVudF9sYWJlbDogbGFiZWwsXG4gICAgdmFsdWU6IHZhbHVlLFxuICB9KVxufVxuXG5leHBvcnQgeyBHQV9UUkFDS0lOR19JRCwgcGFnZXZpZXcsIGV2ZW50IH1cbiJdLCJuYW1lcyI6WyJHQV9UUkFDS0lOR19JRCIsInByb2Nlc3MiLCJlbnYiLCJwYWdldmlldyIsInVybCIsIndpbmRvdyIsImd0YWciLCJwYWdlX3BhdGgiLCJldmVudCIsImFjdGlvbiIsImNhdGVnb3J5IiwibGFiZWwiLCJ2YWx1ZSIsImV2ZW50X2NhdGVnb3J5IiwiZXZlbnRfbGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/gtag.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/gtag */ \"./lib/gtag.js\");\n\nvar _jsxFileName = \"/Users/nemoto/kitetanse/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nif (_lib_gtag__WEBPACK_IMPORTED_MODULE_2__.GA_TRACKING_ID) {\n  next_router__WEBPACK_IMPORTED_MODULE_1___default().events.on('routeChangeComplete', url => (0,_lib_gtag__WEBPACK_IMPORTED_MODULE_2__.pageview)(url));\n} // This default export is required in a new `pages/_app.js` file.\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBSUMscURBQUosRUFBb0I7QUFDbEJELEVBQUFBLDREQUFBLENBQWlCLHFCQUFqQixFQUF3Q0ssR0FBRyxJQUFJSCxtREFBUSxDQUFDRyxHQUFELENBQXZEO0FBQ0QsRUFFRDs7O0FBQ2UsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFmLEVBQXlDO0FBQ3RELHNCQUFPLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYmxvZy1leGFtcGxlLWphLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCB7IEdBX1RSQUNLSU5HX0lELCBwYWdldmlldyB9IGZyb20gJy4uL2xpYi9ndGFnJ1xuXG5pZiAoR0FfVFJBQ0tJTkdfSUQpIHtcbiAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHVybCA9PiBwYWdldmlldyh1cmwpKVxufVxuXG4vLyBUaGlzIGRlZmF1bHQgZXhwb3J0IGlzIHJlcXVpcmVkIGluIGEgbmV3IGBwYWdlcy9fYXBwLmpzYCBmaWxlLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG59XG4iXSwibmFtZXMiOlsiUm91dGVyIiwiR0FfVFJBQ0tJTkdfSUQiLCJwYWdldmlldyIsImV2ZW50cyIsIm9uIiwidXJsIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();