module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _path = __webpack_require__(/*! path */ 1);\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _http = __webpack_require__(/*! http */ 2);\n\nvar _express = __webpack_require__(/*! express */ 3);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ 5);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 6);\n\nvar _App = __webpack_require__(/*! ./components/App */ 7);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = new _express2.default(); /* eslint no-console: \"off\"*/\n\nvar server = new _http.Server(app);\n\n// use ejs templates\napp.set('view engine', 'ejs');\napp.set('views', _path2.default.join(__dirname, 'views'));\n\n// define the folder that will be used for static assets\napp.use(_express2.default.static(_path2.default.join(__dirname, 'static')));\n\n// universal routing and rendering\napp.get('*', function (req, res) {\n  var markup = '';\n  var status = 200;\n\n  if (process.env.UNIVERSAL) {\n    var context = {};\n    markup = (0, _server.renderToString)(_react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.url, context: context },\n      _react2.default.createElement(_App.App, null)\n    ));\n\n    // context.url will contain the URL to redirect to if a <Redirect> was used\n    if (context.url) {\n      return res.redirect(302, context.url);\n    }\n\n    if (context.is404) {\n      status = 404;\n    }\n  }\n\n  return res.status(status).render('index', { markup: markup });\n});\n\n// start the server\nvar port = process.env.PORT || 3000;\nvar env = process.env.NODE_ENV || 'production';\nserver.listen(port, function (err) {\n  if (err) {\n    return console.error(err);\n  }\n  return console.info('\\n      Server running on http://localhost:' + port + ' [' + env + ']\\n      Universal rendering: ' + (process.env.UNIVERSAL ? 'enabled' : 'disabled') + '\\n    ');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2VydmVyLmpzP2U2YTUiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLWNvbnNvbGU6IFwib2ZmXCIqL1xuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJ2h0dHAnO1xuaW1wb3J0IEV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IFN0YXRpY1JvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuXG5jb25zdCBhcHAgPSBuZXcgRXhwcmVzcygpO1xuY29uc3Qgc2VydmVyID0gbmV3IFNlcnZlcihhcHApO1xuXG4vLyB1c2UgZWpzIHRlbXBsYXRlc1xuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnZWpzJyk7XG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsICd2aWV3cycpKTtcblxuLy8gZGVmaW5lIHRoZSBmb2xkZXIgdGhhdCB3aWxsIGJlIHVzZWQgZm9yIHN0YXRpYyBhc3NldHNcbmFwcC51c2UoRXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJ3N0YXRpYycpKSk7XG5cbi8vIHVuaXZlcnNhbCByb3V0aW5nIGFuZCByZW5kZXJpbmdcbmFwcC5nZXQoJyonLCAocmVxLCByZXMpID0+IHtcbiAgbGV0IG1hcmt1cCA9ICcnO1xuICBsZXQgc3RhdHVzID0gMjAwO1xuXG4gIGlmIChwcm9jZXNzLmVudi5VTklWRVJTQUwpIHtcbiAgICBjb25zdCBjb250ZXh0ID0ge307XG4gICAgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgICA8Um91dGVyIGxvY2F0aW9uPXtyZXEudXJsfSBjb250ZXh0PXtjb250ZXh0fT5cbiAgICAgICAgPEFwcCAvPlxuICAgICAgPC9Sb3V0ZXI+LFxuICAgICk7XG5cbiAgICAvLyBjb250ZXh0LnVybCB3aWxsIGNvbnRhaW4gdGhlIFVSTCB0byByZWRpcmVjdCB0byBpZiBhIDxSZWRpcmVjdD4gd2FzIHVzZWRcbiAgICBpZiAoY29udGV4dC51cmwpIHtcbiAgICAgIHJldHVybiByZXMucmVkaXJlY3QoMzAyLCBjb250ZXh0LnVybCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQuaXM0MDQpIHtcbiAgICAgIHN0YXR1cyA9IDQwNDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzLnN0YXR1cyhzdGF0dXMpLnJlbmRlcignaW5kZXgnLCB7IG1hcmt1cCB9KTtcbn0pO1xuXG4vLyBzdGFydCB0aGUgc2VydmVyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ3Byb2R1Y3Rpb24nO1xuc2VydmVyLmxpc3Rlbihwb3J0LCAoZXJyKSA9PiB7XG4gIGlmIChlcnIpIHtcbiAgICByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG4gIHJldHVybiBjb25zb2xlLmluZm8oXG4gICAgYFxuICAgICAgU2VydmVyIHJ1bm5pbmcgb24gaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9IFske2Vudn1dXG4gICAgICBVbml2ZXJzYWwgcmVuZGVyaW5nOiAke3Byb2Nlc3MuZW52LlVOSVZFUlNBTCA/ICdlbmFibGVkJyA6ICdkaXNhYmxlZCd9XG4gICAgYCk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2VydmVyLmpzIl0sIm1hcHBpbmdzIjoiOztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj81YjJhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIj84ZTQ0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJodHRwXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj9kMmQyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCI/M2M2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIj80MWJkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIj8wOTU2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: SyntaxError: Unexpected token (5:1)\\n\\n\\u001b[0m \\u001b[90m 3 | \\u001b[39m\\u001b[36mimport\\u001b[39m { \\u001b[33mLayout\\u001b[39m } from \\u001b[32m'./Layout'\\u001b[39m\\u001b[33m;\\u001b[39m\\n \\u001b[90m 4 | \\u001b[39m\\u001b[36mimport\\u001b[39m { \\u001b[33mIndexPage\\u001b[39m } from \\u001b[32m'./IndexPage'\\u001b[39m\\u001b[33m;\\u001b[39m\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 5 | \\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\n \\u001b[90m   | \\u001b[39m \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 6 | \\u001b[39m\\u001b[36mimport\\u001b[39m { \\u001b[33mPlayPage\\u001b[39m } from \\u001b[32m'./PlayPage'\\u001b[39m\\u001b[33m;\\u001b[39m\\n \\u001b[90m 7 | \\u001b[39m\\u001b[36mimport\\u001b[39m { \\u001b[33mNotFoundPage\\u001b[39m } from \\u001b[32m'./NotFoundPage'\\u001b[39m\\u001b[33m;\\u001b[39m\\n \\u001b[90m 8 | \\u001b[39m\\u001b[36mimport\\u001b[39m plays from \\u001b[32m'../data/plays'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ })
/******/ ]);