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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCI/M2M2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIj8wOTU2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _path = __webpack_require__(/*! path */ 3);\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _http = __webpack_require__(/*! http */ 4);\n\nvar _express = __webpack_require__(/*! express */ 5);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ 6);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nvar _App = __webpack_require__(/*! ./components/App */ 7);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = new _express2.default(); /* eslint no-console: \"off\"*/\n\nvar server = new _http.Server(app);\n\n// use ejs templates\napp.set('view engine', 'ejs');\napp.set('views', _path2.default.join(__dirname, 'views'));\n\n// define the folder that will be used for static assets\napp.use(_express2.default.static(_path2.default.join(__dirname, 'static')));\n\n// universal routing and rendering\napp.get('*', function (req, res) {\n  var markup = '';\n  var status = 200;\n\n  if (process.env.UNIVERSAL) {\n    var context = {};\n    markup = (0, _server.renderToString)(_react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.url, context: context },\n      _react2.default.createElement(_App.App, null)\n    ));\n\n    // context.url will contain the URL to redirect to if a <Redirect> was used\n    if (context.url) {\n      return res.redirect(302, context.url);\n    }\n\n    if (context.is404) {\n      status = 404;\n    }\n  }\n\n  return res.status(status).render('index', { markup: markup });\n});\n\n// start the server\nvar port = process.env.PORT || 3000;\nvar env = process.env.NODE_ENV || 'production';\nserver.listen(port, function (err) {\n  if (err) {\n    return console.error(err);\n  }\n  return console.info('\\n      Server running on http://localhost:' + port + ' [' + env + ']\\n      Universal rendering: ' + (process.env.UNIVERSAL ? 'enabled' : 'disabled') + '\\n    ');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2VydmVyLmpzP2U2YTUiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLWNvbnNvbGU6IFwib2ZmXCIqL1xuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJ2h0dHAnO1xuaW1wb3J0IEV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IFN0YXRpY1JvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuXG5jb25zdCBhcHAgPSBuZXcgRXhwcmVzcygpO1xuY29uc3Qgc2VydmVyID0gbmV3IFNlcnZlcihhcHApO1xuXG4vLyB1c2UgZWpzIHRlbXBsYXRlc1xuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnZWpzJyk7XG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsICd2aWV3cycpKTtcblxuLy8gZGVmaW5lIHRoZSBmb2xkZXIgdGhhdCB3aWxsIGJlIHVzZWQgZm9yIHN0YXRpYyBhc3NldHNcbmFwcC51c2UoRXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJ3N0YXRpYycpKSk7XG5cbi8vIHVuaXZlcnNhbCByb3V0aW5nIGFuZCByZW5kZXJpbmdcbmFwcC5nZXQoJyonLCAocmVxLCByZXMpID0+IHtcbiAgbGV0IG1hcmt1cCA9ICcnO1xuICBsZXQgc3RhdHVzID0gMjAwO1xuXG4gIGlmIChwcm9jZXNzLmVudi5VTklWRVJTQUwpIHtcbiAgICBjb25zdCBjb250ZXh0ID0ge307XG4gICAgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgICA8Um91dGVyIGxvY2F0aW9uPXtyZXEudXJsfSBjb250ZXh0PXtjb250ZXh0fT5cbiAgICAgICAgPEFwcCAvPlxuICAgICAgPC9Sb3V0ZXI+LFxuICAgICk7XG5cbiAgICAvLyBjb250ZXh0LnVybCB3aWxsIGNvbnRhaW4gdGhlIFVSTCB0byByZWRpcmVjdCB0byBpZiBhIDxSZWRpcmVjdD4gd2FzIHVzZWRcbiAgICBpZiAoY29udGV4dC51cmwpIHtcbiAgICAgIHJldHVybiByZXMucmVkaXJlY3QoMzAyLCBjb250ZXh0LnVybCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQuaXM0MDQpIHtcbiAgICAgIHN0YXR1cyA9IDQwNDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzLnN0YXR1cyhzdGF0dXMpLnJlbmRlcignaW5kZXgnLCB7IG1hcmt1cCB9KTtcbn0pO1xuXG4vLyBzdGFydCB0aGUgc2VydmVyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ3Byb2R1Y3Rpb24nO1xuc2VydmVyLmxpc3Rlbihwb3J0LCAoZXJyKSA9PiB7XG4gIGlmIChlcnIpIHtcbiAgICByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG4gIHJldHVybiBjb25zb2xlLmluZm8oXG4gICAgYFxuICAgICAgU2VydmVyIHJ1bm5pbmcgb24gaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9IFske2Vudn1dXG4gICAgICBVbml2ZXJzYWwgcmVuZGVyaW5nOiAke3Byb2Nlc3MuZW52LlVOSVZFUlNBTCA/ICdlbmFibGVkJyA6ICdkaXNhYmxlZCd9XG4gICAgYCk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2VydmVyLmpzIl0sIm1hcHBpbmdzIjoiOztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj81YjJhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIj84ZTQ0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJodHRwXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj9kMmQyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIj80MWJkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.App = undefined;\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nvar _Layout = __webpack_require__(/*! ./Layout */ 8);\n\nvar _IndexPage = __webpack_require__(/*! ./IndexPage */ 9);\n\nvar _PlayPage = __webpack_require__(/*! ./PlayPage */ 11);\n\nvar _NotFoundPage = __webpack_require__(/*! ./NotFoundPage */ 13);\n\nvar _plays = __webpack_require__(/*! ../data/plays */ 14);\n\nvar _plays2 = _interopRequireDefault(_plays);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar renderIndex = function renderIndex() {\n  return _react2.default.createElement(_IndexPage.IndexPage, { plays: _plays2.default });\n};\nvar renderPlay = function renderPlay(_ref) {\n  var match = _ref.match,\n      staticContext = _ref.staticContext;\n\n  var id = match.params.id;\n  var play = _plays2.default.find(function (current) {\n    return current.id === id;\n  });\n  if (!play) {\n    return _react2.default.createElement(_NotFoundPage.NotFoundPage, { staticContext: staticContext });\n  }\n\n  return _react2.default.createElement(_PlayPage.PlayPage, { play: play, plays: _plays2.default });\n};\n\nvar App = exports.App = function App() {\n  return _react2.default.createElement(\n    _Layout.Layout,\n    null,\n    _react2.default.createElement(\n      _reactRouterDom.Switch,\n      null,\n      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: renderIndex }),\n      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/play/:id', render: renderPlay }),\n      _react2.default.createElement(_reactRouterDom.Route, { component: _NotFoundPage.NotFoundPage })\n    )\n  );\n};\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9BcHAuanM/NTdhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi9MYXlvdXQnO1xuaW1wb3J0IHsgSW5kZXhQYWdlIH0gZnJvbSAnLi9JbmRleFBhZ2UnO1xuaW1wb3J0IHsgUGxheVBhZ2UgfSBmcm9tICcuL1BsYXlQYWdlJztcbmltcG9ydCB7IE5vdEZvdW5kUGFnZSB9IGZyb20gJy4vTm90Rm91bmRQYWdlJztcbmltcG9ydCBwbGF5cyBmcm9tICcuLi9kYXRhL3BsYXlzJztcblxuY29uc3QgcmVuZGVySW5kZXggPSAoKSA9PiA8SW5kZXhQYWdlIHBsYXlzPXtwbGF5c30gLz47XG5jb25zdCByZW5kZXJQbGF5ID0gKHsgbWF0Y2gsIHN0YXRpY0NvbnRleHQgfSkgPT4ge1xuICBjb25zdCBpZCA9IG1hdGNoLnBhcmFtcy5pZDtcbiAgY29uc3QgcGxheSA9IHBsYXlzLmZpbmQoY3VycmVudCA9PiBjdXJyZW50LmlkID09PSBpZCk7XG4gIGlmICghcGxheSkge1xuICAgIHJldHVybiA8Tm90Rm91bmRQYWdlIHN0YXRpY0NvbnRleHQ9e3N0YXRpY0NvbnRleHR9IC8+O1xuICB9XG5cbiAgcmV0dXJuIDxQbGF5UGFnZSBwbGF5PXtwbGF5fSBwbGF5cz17cGxheXN9IC8+O1xufTtcblxuZXhwb3J0IGNvbnN0IEFwcCA9ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8U3dpdGNoPlxuICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgcmVuZGVyPXtyZW5kZXJJbmRleH0gLz5cbiAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3BsYXkvOmlkXCIgcmVuZGVyPXtyZW5kZXJQbGF5fSAvPlxuICAgICAgPFJvdXRlIGNvbXBvbmVudD17Tm90Rm91bmRQYWdlfSAvPlxuICAgIDwvU3dpdGNoPlxuICA8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9BcHAuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBREE7QUFDQTtBQVNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Layout = undefined;\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Layout = exports.Layout = function Layout(props) {\n  return _react2.default.createElement(\n    'div',\n    { className: 'app-container' },\n    _react2.default.createElement(\n      'header',\n      null,\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: '/' },\n        _react2.default.createElement('img', { className: 'logo', src: '/img/logo-judo-heroes.png', alt: 'Judo Heroes logo' })\n      )\n    ),\n    _react2.default.createElement(\n      'div',\n      { className: 'app-content' },\n      props.children\n    ),\n    _react2.default.createElement(\n      'footer',\n      null,\n      _react2.default.createElement(\n        'p',\n        null,\n        'This is a demo app to showcase ',\n        _react2.default.createElement(\n          'strong',\n          null,\n          'universal Javascript'\n        ),\n        'with ',\n        _react2.default.createElement(\n          'strong',\n          null,\n          'React'\n        ),\n        ' and ',\n        _react2.default.createElement(\n          'strong',\n          null,\n          'Express'\n        ),\n        '.'\n      )\n    )\n  );\n};\n\nexports.default = Layout;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXQuanM/N2YwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5leHBvcnQgY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1jb250YWluZXJcIj5cbiAgICA8aGVhZGVyPlxuICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIi9pbWcvbG9nby1qdWRvLWhlcm9lcy5wbmdcIiBhbHQ9XCJKdWRvIEhlcm9lcyBsb2dvXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICA8L2hlYWRlcj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1jb250ZW50XCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgIDxmb290ZXI+XG4gICAgICA8cD5cbiAgICAgICAgVGhpcyBpcyBhIGRlbW8gYXBwIHRvIHNob3djYXNlIDxzdHJvbmc+dW5pdmVyc2FsIEphdmFzY3JpcHQ8L3N0cm9uZz5cbiAgICAgICAgd2l0aCA8c3Ryb25nPlJlYWN0PC9zdHJvbmc+IGFuZCA8c3Ryb25nPkV4cHJlc3M8L3N0cm9uZz4uXG4gICAgICA8L3A+XG4gICAgPC9mb290ZXI+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0xheW91dC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFEQTtBQVBBO0FBREE7QUFDQTtBQWdCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*************************************!*\
  !*** ./src/components/IndexPage.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.IndexPage = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _PlayPreview = __webpack_require__(/*! ./PlayPreview */ 10);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar IndexPage = exports.IndexPage = function IndexPage(_ref) {\n  var plays = _ref.plays;\n  return _react2.default.createElement(\n    'div',\n    { className: 'home' },\n    _react2.default.createElement(\n      'div',\n      { className: 'plays-selector' },\n      plays.map(function (playData) {\n        return _react2.default.createElement(_PlayPreview.PlayPreview, _extends({ key: playData.id }, playData));\n      })\n    )\n  );\n};\n\nexports.default = IndexPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9JbmRleFBhZ2UuanM/NmQzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGxheVByZXZpZXcgfSBmcm9tICcuL1BsYXlQcmV2aWV3JztcblxuZXhwb3J0IGNvbnN0IEluZGV4UGFnZSA9ICh7IHBsYXlzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5cy1zZWxlY3RvclwiPlxuICAgICAge3BsYXlzLm1hcChcbiAgICAgICAgcGxheURhdGEgPT4gPFBsYXlQcmV2aWV3IGtleT17cGxheURhdGEuaWR9IHsuLi5wbGF5RGF0YX0gLz4sXG4gICAgICApfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9JbmRleFBhZ2UuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFGQTtBQURBO0FBREE7QUFDQTtBQVNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!***************************************!*\
  !*** ./src/components/PlayPreview.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.PlayPreview = undefined;\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PlayPreview = exports.PlayPreview = function PlayPreview(props) {\n  return _react2.default.createElement(\n    _reactRouterDom.Link,\n    { to: '/play/' + props.id },\n    _react2.default.createElement(\n      'div',\n      { className: 'play-preview' },\n      _react2.default.createElement('img', { src: 'img/' + props.image, alt: props.name + '\\'s profile' }),\n      _react2.default.createElement(\n        'h2',\n        { className: 'name' },\n        props.name\n      )\n    )\n  );\n};\n\nexports.default = PlayPreview;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUGxheVByZXZpZXcuanM/ODkyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5leHBvcnQgY29uc3QgUGxheVByZXZpZXcgPSBwcm9wcyA9PiAoXG4gIDxMaW5rIHRvPXtgL3BsYXkvJHtwcm9wcy5pZH1gfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXktcHJldmlld1wiPlxuICAgICAgPGltZyBzcmM9e2BpbWcvJHtwcm9wcy5pbWFnZX1gfSBhbHQ9e2Ake3Byb3BzLm5hbWV9J3MgcHJvZmlsZWB9IC8+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPntwcm9wcy5uYW1lfTwvaDI+XG4gICAgPC9kaXY+XG4gIDwvTGluaz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXlQcmV2aWV3O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL1BsYXlQcmV2aWV3LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBREE7QUFDQTtBQVFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!************************************!*\
  !*** ./src/components/PlayPage.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.PlayPage = undefined;\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nvar _PlaysMenu = __webpack_require__(/*! ./PlaysMenu */ 12);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PlayPage = exports.PlayPage = function PlayPage(_ref) {\n  var play = _ref.play,\n      plays = _ref.plays;\n\n  var headerStyle = { backgroundImage: 'url(/img/' + play.cover + ')' };\n  return _react2.default.createElement(\n    'div',\n    { className: 'play-full' },\n    _react2.default.createElement(_PlaysMenu.PlaysMenu, { plays: plays }),\n    _react2.default.createElement(\n      'div',\n      { className: 'play' },\n      _react2.default.createElement('header', { style: headerStyle }),\n      _react2.default.createElement(\n        'div',\n        { className: 'picture-container' },\n        _react2.default.createElement('img', { alt: play.name + '\\'s profile', src: '/img/' + play.image }),\n        _react2.default.createElement(\n          'h2',\n          { className: 'name' },\n          play.name\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'div',\n      { className: 'navigateBack' },\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: '/' },\n        '\\xAB Back to the index'\n      )\n    )\n  );\n};\n\nexports.default = PlayPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUGxheVBhZ2UuanM/ZTg0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgUGxheXNNZW51IH0gZnJvbSAnLi9QbGF5c01lbnUnO1xuXG5leHBvcnQgY29uc3QgUGxheVBhZ2UgPSAoeyBwbGF5LCBwbGF5cyB9KSA9PiB7XG4gIGNvbnN0IGhlYWRlclN0eWxlID0geyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoL2ltZy8ke3BsYXkuY292ZXJ9KWAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXktZnVsbFwiPlxuICAgICAgPFBsYXlzTWVudSBwbGF5cz17cGxheXN9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlcIj5cbiAgICAgICAgPGhlYWRlciBzdHlsZT17aGVhZGVyU3R5bGV9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljdHVyZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8aW1nIGFsdD17YCR7cGxheS5uYW1lfSdzIHByb2ZpbGVgfSBzcmM9e2AvaW1nLyR7cGxheS5pbWFnZX1gfSAvPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYW1lXCI+e3BsYXkubmFtZX08L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0ZUJhY2tcIj5cbiAgICAgICAgPExpbmsgdG89XCIvXCI+wqsgQmFjayB0byB0aGUgaW5kZXg8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXlQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL1BsYXlQYWdlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFGQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQVRBO0FBY0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*************************************!*\
  !*** ./src/components/PlaysMenu.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.PlaysMenu = undefined;\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar shortName = function shortName(fullname) {\n  var _fullname$split = fullname.split(' '),\n      _fullname$split2 = _slicedToArray(_fullname$split, 1),\n      name = _fullname$split2[0];\n\n  return '' + name[0];\n};\n\nvar PlayMenuLink = function PlayMenuLink(_ref) {\n  var id = _ref.id,\n      to = _ref.to,\n      label = _ref.label;\n  return _react2.default.createElement(\n    _reactRouterDom.Route,\n    { path: '/play/' + id },\n    function (_ref2) {\n      var match = _ref2.match;\n      return _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: to, className: match ? 'active' : '' },\n        label\n      );\n    }\n  );\n};\n\nvar PlaysMenu = exports.PlaysMenu = function PlaysMenu(_ref3) {\n  var plays = _ref3.plays;\n  return _react2.default.createElement(\n    'nav',\n    { className: 'plays-menu' },\n    plays.map(function (play) {\n      return _react2.default.createElement(PlayMenuLink, { key: play.id, id: play.id, to: '/play/' + play.id, label: shortName(play.name) });\n    })\n  );\n};\n\nexports.default = PlaysMenu;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUGxheXNNZW51LmpzP2RmOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IHNob3J0TmFtZSA9IChmdWxsbmFtZSkgPT4ge1xuICBjb25zdCBbbmFtZV0gPSBmdWxsbmFtZS5zcGxpdCgnICcpO1xuICByZXR1cm4gYCR7bmFtZVswXX1gO1xufTtcblxuY29uc3QgUGxheU1lbnVMaW5rID0gKHsgaWQsIHRvLCBsYWJlbCB9KSA9PiAoXG4gIDxSb3V0ZSBwYXRoPXtgL3BsYXkvJHtpZH1gfT5cbiAgICB7KHsgbWF0Y2ggfSkgPT4gKFxuICAgICAgPExpbmsgdG89e3RvfSBjbGFzc05hbWU9e21hdGNoID8gJ2FjdGl2ZScgOiAnJ30+e2xhYmVsfTwvTGluaz5cbiAgICApfVxuICA8L1JvdXRlPlxuKTtcblxuZXhwb3J0IGNvbnN0IFBsYXlzTWVudSA9ICh7IHBsYXlzIH0pID0+IChcbiAgPG5hdiBjbGFzc05hbWU9XCJwbGF5cy1tZW51XCI+XG4gICAge1xuICAgICAgcGxheXMubWFwKHBsYXkgPT5cbiAgICAgICAgPFBsYXlNZW51TGluayBrZXk9e3BsYXkuaWR9IGlkPXtwbGF5LmlkfSB0bz17YC9wbGF5LyR7cGxheS5pZH1gfSBsYWJlbD17c2hvcnROYW1lKHBsYXkubmFtZSl9IC8+LFxuICAgICAgKVxuICAgIH1cbiAgPC9uYXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5c01lbnU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvUGxheXNNZW51LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFEQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUZBO0FBREE7QUFDQTtBQVNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!****************************************!*\
  !*** ./src/components/NotFoundPage.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.NotFoundPage = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/forbid-prop-types: \"off\" */\n\nvar NotFoundPage = exports.NotFoundPage = function (_React$Component) {\n  _inherits(NotFoundPage, _React$Component);\n\n  function NotFoundPage() {\n    _classCallCheck(this, NotFoundPage);\n\n    return _possibleConstructorReturn(this, (NotFoundPage.__proto__ || Object.getPrototypeOf(NotFoundPage)).apply(this, arguments));\n  }\n\n  _createClass(NotFoundPage, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      var staticContext = this.props.staticContext;\n\n      if (staticContext) {\n        staticContext.is404 = true;\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'not-found' },\n        _react2.default.createElement(\n          'h1',\n          null,\n          '404'\n        ),\n        _react2.default.createElement(\n          'h2',\n          null,\n          'Page not found!'\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/' },\n            'Go back to the main page'\n          )\n        )\n      );\n    }\n  }]);\n\n  return NotFoundPage;\n}(_react2.default.Component);\n\nexports.default = NotFoundPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTm90Rm91bmRQYWdlLmpzPzRiMDIiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzOiBcIm9mZlwiICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmV4cG9ydCBjbGFzcyBOb3RGb3VuZFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdGF0aWNDb250ZXh0IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChzdGF0aWNDb250ZXh0KSB7XG4gICAgICBzdGF0aWNDb250ZXh0LmlzNDA0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cIm5vdC1mb3VuZFwiPlxuICAgICAgPGgxPjQwNDwvaDE+XG4gICAgICA8aDI+UGFnZSBub3QgZm91bmQhPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICA8TGluayB0bz1cIi9cIj5HbyBiYWNrIHRvIHRoZSBtYWluIHBhZ2U8L0xpbms+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZFBhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvTm90Rm91bmRQYWdlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBSkE7QUFDQTtBQUlBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSEE7QUFRQTs7OztBQWpCQTtBQUNBO0FBbUJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!***************************!*\
  !*** ./src/data/plays.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar plays = [{\n  id: 'ilias-iliadis',\n  name: 'Ilias Iliadis',\n  country: {\n    id: 'gr',\n    name: 'Greece',\n    icon: 'flag-gr.png'\n  },\n  birth: '1986',\n  image: 'ilias-iliadis.jpg',\n  cover: 'ilias-iliadis-cover.jpg',\n  link: 'https://en.wikipedia.org/wiki/Ilias_Iliadis',\n  medals: [{ id: 1, year: '2004', type: 'G', city: 'Athens', event: 'Olympic Games', category: '-81kg' }, { id: 2, year: '2004', type: 'G', city: 'Bucharest', event: 'European Judo Championships', category: '-81kg' }, { id: 3, year: '2005', type: 'S', city: 'Cairo', event: 'World Judo Championships', category: '-90kg' }, { id: 4, year: '2005', type: 'G', city: 'Almeria', event: 'Mediterranean Games', category: '-90kg' }, { id: 5, year: '2007', type: 'S', city: 'Rio de Janeiro', event: 'World Judo Championships', category: '-90kg' }, { id: 6, year: '2009', type: 'G', city: 'Pescara', event: 'Mediterranean Games', category: '-90kg' }, { id: 7, year: '2010', type: 'G', city: 'Tokyo', event: 'World Judo Championships', category: '-90kg' }, { id: 8, year: '2010', type: 'B', city: 'Vienna', event: 'European Judo Championships', category: '-90kg' }, { id: 9, year: '2011', type: 'G', city: 'Istanbul', event: 'European Judo Championships', category: '-90kg' }, { id: 10, year: '2011', type: 'G', city: 'Paris', event: 'World Judo Championships', category: '-90kg' }, { id: 11, year: '2012', type: 'B', city: 'london', event: 'Olympic Games', category: '-90kg' }, { id: 12, year: '2013', type: 'B', city: 'Rio de Janeiro', event: 'World Judo Championships', category: '-90kg' }, { id: 13, year: '2013', type: 'G', city: 'Chelyabinsk', event: 'World Judo Championships', category: '-90kg' }, { id: 14, year: '2015', type: 'B', city: 'Baku', event: 'European Games', category: '-90kg' }]\n}];\n\nexports.default = plays;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2RhdGEvcGxheXMuanM/Y2NkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwbGF5cyA9IFtcbiAge1xuICAgIGlkOiAnaWxpYXMtaWxpYWRpcycsXG4gICAgbmFtZTogJ0lsaWFzIElsaWFkaXMnLFxuICAgIGNvdW50cnk6IHtcbiAgICAgIGlkOiAnZ3InLFxuICAgICAgbmFtZTogJ0dyZWVjZScsXG4gICAgICBpY29uOiAnZmxhZy1nci5wbmcnLFxuICAgIH0sXG4gICAgYmlydGg6ICcxOTg2JyxcbiAgICBpbWFnZTogJ2lsaWFzLWlsaWFkaXMuanBnJyxcbiAgICBjb3ZlcjogJ2lsaWFzLWlsaWFkaXMtY292ZXIuanBnJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSWxpYXNfSWxpYWRpcycsXG4gICAgbWVkYWxzOiBbXG4gICAgICB7IGlkOiAxLCB5ZWFyOiAnMjAwNCcsIHR5cGU6ICdHJywgY2l0eTogJ0F0aGVucycsIGV2ZW50OiAnT2x5bXBpYyBHYW1lcycsIGNhdGVnb3J5OiAnLTgxa2cnIH0sXG4gICAgICB7IGlkOiAyLCB5ZWFyOiAnMjAwNCcsIHR5cGU6ICdHJywgY2l0eTogJ0J1Y2hhcmVzdCcsIGV2ZW50OiAnRXVyb3BlYW4gSnVkbyBDaGFtcGlvbnNoaXBzJywgY2F0ZWdvcnk6ICctODFrZycgfSxcbiAgICAgIHsgaWQ6IDMsIHllYXI6ICcyMDA1JywgdHlwZTogJ1MnLCBjaXR5OiAnQ2Fpcm8nLCBldmVudDogJ1dvcmxkIEp1ZG8gQ2hhbXBpb25zaGlwcycsIGNhdGVnb3J5OiAnLTkwa2cnIH0sXG4gICAgICB7IGlkOiA0LCB5ZWFyOiAnMjAwNScsIHR5cGU6ICdHJywgY2l0eTogJ0FsbWVyaWEnLCBldmVudDogJ01lZGl0ZXJyYW5lYW4gR2FtZXMnLCBjYXRlZ29yeTogJy05MGtnJyB9LFxuICAgICAgeyBpZDogNSwgeWVhcjogJzIwMDcnLCB0eXBlOiAnUycsIGNpdHk6ICdSaW8gZGUgSmFuZWlybycsIGV2ZW50OiAnV29ybGQgSnVkbyBDaGFtcGlvbnNoaXBzJywgY2F0ZWdvcnk6ICctOTBrZycgfSxcbiAgICAgIHsgaWQ6IDYsIHllYXI6ICcyMDA5JywgdHlwZTogJ0cnLCBjaXR5OiAnUGVzY2FyYScsIGV2ZW50OiAnTWVkaXRlcnJhbmVhbiBHYW1lcycsIGNhdGVnb3J5OiAnLTkwa2cnIH0sXG4gICAgICB7IGlkOiA3LCB5ZWFyOiAnMjAxMCcsIHR5cGU6ICdHJywgY2l0eTogJ1Rva3lvJywgZXZlbnQ6ICdXb3JsZCBKdWRvIENoYW1waW9uc2hpcHMnLCBjYXRlZ29yeTogJy05MGtnJyB9LFxuICAgICAgeyBpZDogOCwgeWVhcjogJzIwMTAnLCB0eXBlOiAnQicsIGNpdHk6ICdWaWVubmEnLCBldmVudDogJ0V1cm9wZWFuIEp1ZG8gQ2hhbXBpb25zaGlwcycsIGNhdGVnb3J5OiAnLTkwa2cnIH0sXG4gICAgICB7IGlkOiA5LCB5ZWFyOiAnMjAxMScsIHR5cGU6ICdHJywgY2l0eTogJ0lzdGFuYnVsJywgZXZlbnQ6ICdFdXJvcGVhbiBKdWRvIENoYW1waW9uc2hpcHMnLCBjYXRlZ29yeTogJy05MGtnJyB9LFxuICAgICAgeyBpZDogMTAsIHllYXI6ICcyMDExJywgdHlwZTogJ0cnLCBjaXR5OiAnUGFyaXMnLCBldmVudDogJ1dvcmxkIEp1ZG8gQ2hhbXBpb25zaGlwcycsIGNhdGVnb3J5OiAnLTkwa2cnIH0sXG4gICAgICB7IGlkOiAxMSwgeWVhcjogJzIwMTInLCB0eXBlOiAnQicsIGNpdHk6ICdsb25kb24nLCBldmVudDogJ09seW1waWMgR2FtZXMnLCBjYXRlZ29yeTogJy05MGtnJyB9LFxuICAgICAgeyBpZDogMTIsIHllYXI6ICcyMDEzJywgdHlwZTogJ0InLCBjaXR5OiAnUmlvIGRlIEphbmVpcm8nLCBldmVudDogJ1dvcmxkIEp1ZG8gQ2hhbXBpb25zaGlwcycsIGNhdGVnb3J5OiAnLTkwa2cnIH0sXG4gICAgICB7IGlkOiAxMywgeWVhcjogJzIwMTMnLCB0eXBlOiAnRycsIGNpdHk6ICdDaGVseWFiaW5zaycsIGV2ZW50OiAnV29ybGQgSnVkbyBDaGFtcGlvbnNoaXBzJywgY2F0ZWdvcnk6ICctOTBrZycgfSxcbiAgICAgIHsgaWQ6IDE0LCB5ZWFyOiAnMjAxNScsIHR5cGU6ICdCJywgY2l0eTogJ0Jha3UnLCBldmVudDogJ0V1cm9wZWFuIEdhbWVzJywgY2F0ZWdvcnk6ICctOTBrZycgfSxcbiAgICBdLFxuICB9LFxuICBcbiAgXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBwbGF5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGF0YS9wbGF5cy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QUFnQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ })
/******/ ]);