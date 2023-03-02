/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/CocoMilk-2OvpX.otf */ "./src/fonts/CocoMilk-2OvpX.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/MontserratRegular-RpK6l.otf */ "./src/fonts/MontserratRegular-RpK6l.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./view.avif */ "./src/view.avif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  overflow: overlay;\n}\nbody::-webkit-scrollbar {\n  width: 10px;\n}\n@font-face {\n  font-family: \"cocomilk\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"montserrat\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n* {\n  box-sizing: border-box;\n  cursor: default;\n  margin: 0;\n  padding: 0;\n  font-family: \"montserrat\";\n  font-size: 16px;\n  border: none;\n  color: #081f2c;\n}\n#content {\n  width: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: calc(100vh - 120px);\n  padding: 5vmin;\n  position: relative;\n  gap: 10px;\n}\n#photo-ref {\n  margin-top: auto;\n  padding: 20px;\n}\n#photo-ref,\n#photo-ref a {\n  color: white;\n}\n#header {\n  height: 120px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding-left: calc(20px + 16vw);\n  padding-top: 10px;\n  font-family: \"cocomilk\";\n  font-size: 80px;\n  color: white;\n  text-shadow: 0 0 3px white;\n  background-color: #081f2c;\n}\n#footer {\n  width: 100%;\n  background-color: #9add43;\n  font-weight: bold;\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n}\ndiv.new-project {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  background-color: #081f2caa;\n  width: 100vw;\n  height: 100vh;\n}\ndiv.new-project form {\n  display: flex;\n  flex-direction: column;\n  height: min(max-content, 240px);\n  width: min(50vmin, 240px);\n  background-color: #ffffffaa;\n  border-radius: 5px;\n  padding: calc(20px + 1vmin);\n  gap: 20px;\n  align-items: center;\n}\ndiv.new-project form img:first-child {\n  align-self: flex-end;\n}\ndiv.new-project form input[type=\"text\"] {\n  width: 100px;\n  flex: 1;\n  border-radius: 3px;\n  background-color: rgba(255, 255, 255, 0.747);\n  color: #081f2c;\n  padding: 2px 5px;\n}\nform label {\n  color: #081f2c;\n  font-weight: bold;\n}\ndiv.new-project div {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 10px 10px;\n  flex-wrap: wrap;\n  gap: 10px;\n}\ndiv.new-project form button:last-child {\n  margin-top: auto;\n  border-radius: 7.5px;\n  color: white;\n  background-color: #081f2c;\n  padding: 5px 10px;\n  width: min(100%, 100px);\n}\ndiv.description-form form img:first-child {\n  align-self: flex-end;\n}\ndiv.description-form form textarea {\n  width: 100%;\n  height: 150px;\n  border-radius: 3px;\n  background-color: rgba(255, 255, 255, 0.747);\n  color: #081f2c;\n  padding: 15px 15px;\n}\ndiv.description-form form button:last-child {\n  margin-top: auto;\n  border-radius: 7.5px;\n  color: white;\n  background-color: #081f2c;\n  padding: 5px 10px;\n  width: min(100%, 100px);\n}\ndiv.description-form {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #081f2caa;\n  width: 100vw;\n  height: 100vh;\n}\ndiv.description-form form {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  height: min(max-content, 300px);\n  width: min(50vmin, 300px);\n  background-color: #ffffffaa;\n  border-radius: 5px;\n  padding: calc(20px + 1vmin);\n  gap: 20px;\n  align-items: center;\n}\n#todo-list {\n  margin-top: auto;\n  display: flex;\n  align-items: stretch;\n  flex-wrap: wrap;\n  padding: 2vmin;\n  height: 500px;\n  border-radius: 20px;\n  gap: 20px;\n  background-color: #ffffff99;\n}\n#sidebar ul {\n  border-radius: 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  overflow: overlay;\n  align-self: stretch;\n}\n#sidebar #new-project-button {\n  font-weight: bold;\n  padding: 7.5px 15px;\n  color: white;\n  background-color: #9add43;\n  border-radius: 12px;\n}\n#sidebar #new-project-button:hover {\n  cursor: pointer;\n}\n#sidebar ul li {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 15px;\n  gap: 20px;\n  background-color: #ffffff99;\n}\n#sidebar ul li div:first-child,\n#todos .todo input[type=\"text\"] {\n  min-width: 50px;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n#sidebar ul > li:hover,\n#sidebar ul > li > *:hover {\n  cursor: pointer;\n}\n#sidebar ul > li:hover {\n  background-color: #ffffff50;\n}\n#sidebar h1 {\n  font-size: 22px;\n  font-weight: normal;\n}\n#sidebar,\n#todos {\n  padding: 20px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n}\n#sidebar {\n  max-width: 350px;\n}\n#todos {\n  overflow: overlay;\n  width: 500px;\n}\n#sidebar ul::-webkit-scrollbar,\n#todos::-webkit-scrollbar {\n  width: 10px;\n}\n#sidebar ul::-webkit-scrollbar-thumb,\n#todos::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #9add43;\n}\nimg {\n  width: 20px;\n  height: 20px;\n}\n.todo {\n  display: flex;\n  align-self: stretch;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  border-radius: 15px;\n  padding: 5px 10px;\n  background-color: #ffffff99;\n}\n.todo:hover {\n  position: relative;\n  bottom: 2px;\n}\n.todo input[type=\"text\"] {\n  flex: 1;\n}\n.todo input[type=\"text\"],\n.todo input[type=\"date\"] {\n  border: none;\n  background-color: rgba(255, 255, 255, 0);\n  outline: none;\n}\n.todo input[type=\"text\"]::placeholder {\n  color: rgb(100, 100, 100);\n}\n.todo input[type=\"checkbox\"] {\n  accent-color: #582a7e;\n  accent-color: #9add43;\n}\n\n@media screen and (max-width: 950px) {\n  #sidebar,\n  #todos,\n  #todo-list,\n  #content,\n  body {\n    height: max-content;\n    width: 100%;\n    max-width: none;\n  }\n  #header {\n    padding: 20px;\n    height: auto;\n    min-height: 120px;\n  }\n  #content {\n    min-height: calc(100vh - 120px);\n  }\n  .todo {\n    justify-content: flex-start;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  overflow: overlay;\n}\nbody::-webkit-scrollbar {\n  width: 10px;\n}\n@font-face {\n  font-family: \"cocomilk\";\n  src: url(./fonts/CocoMilk-2OvpX.otf);\n}\n@font-face {\n  font-family: \"montserrat\";\n  src: url(./fonts/MontserratRegular-RpK6l.otf);\n}\n* {\n  box-sizing: border-box;\n  cursor: default;\n  margin: 0;\n  padding: 0;\n  font-family: \"montserrat\";\n  font-size: 16px;\n  border: none;\n  color: #081f2c;\n}\n#content {\n  width: 100%;\n  background-image: url(./view.avif);\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: calc(100vh - 120px);\n  padding: 5vmin;\n  position: relative;\n  gap: 10px;\n}\n#photo-ref {\n  margin-top: auto;\n  padding: 20px;\n}\n#photo-ref,\n#photo-ref a {\n  color: white;\n}\n#header {\n  height: 120px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding-left: calc(20px + 16vw);\n  padding-top: 10px;\n  font-family: \"cocomilk\";\n  font-size: 80px;\n  color: white;\n  text-shadow: 0 0 3px white;\n  background-color: #081f2c;\n}\n#footer {\n  width: 100%;\n  background-color: #9add43;\n  font-weight: bold;\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n}\ndiv.new-project {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  background-color: #081f2caa;\n  width: 100vw;\n  height: 100vh;\n}\ndiv.new-project form {\n  display: flex;\n  flex-direction: column;\n  height: min(max-content, 240px);\n  width: min(50vmin, 240px);\n  background-color: #ffffffaa;\n  border-radius: 5px;\n  padding: calc(20px + 1vmin);\n  gap: 20px;\n  align-items: center;\n}\ndiv.new-project form img:first-child {\n  align-self: flex-end;\n}\ndiv.new-project form input[type=\"text\"] {\n  width: 100px;\n  flex: 1;\n  border-radius: 3px;\n  background-color: rgba(255, 255, 255, 0.747);\n  color: #081f2c;\n  padding: 2px 5px;\n}\nform label {\n  color: #081f2c;\n  font-weight: bold;\n}\ndiv.new-project div {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 10px 10px;\n  flex-wrap: wrap;\n  gap: 10px;\n}\ndiv.new-project form button:last-child {\n  margin-top: auto;\n  border-radius: 7.5px;\n  color: white;\n  background-color: #081f2c;\n  padding: 5px 10px;\n  width: min(100%, 100px);\n}\ndiv.description-form form img:first-child {\n  align-self: flex-end;\n}\ndiv.description-form form textarea {\n  width: 100%;\n  height: 150px;\n  border-radius: 3px;\n  background-color: rgba(255, 255, 255, 0.747);\n  color: #081f2c;\n  padding: 15px 15px;\n}\ndiv.description-form form button:last-child {\n  margin-top: auto;\n  border-radius: 7.5px;\n  color: white;\n  background-color: #081f2c;\n  padding: 5px 10px;\n  width: min(100%, 100px);\n}\ndiv.description-form {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #081f2caa;\n  width: 100vw;\n  height: 100vh;\n}\ndiv.description-form form {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  height: min(max-content, 300px);\n  width: min(50vmin, 300px);\n  background-color: #ffffffaa;\n  border-radius: 5px;\n  padding: calc(20px + 1vmin);\n  gap: 20px;\n  align-items: center;\n}\n#todo-list {\n  margin-top: auto;\n  display: flex;\n  align-items: stretch;\n  flex-wrap: wrap;\n  padding: 2vmin;\n  height: 500px;\n  border-radius: 20px;\n  gap: 20px;\n  background-color: #ffffff99;\n}\n#sidebar ul {\n  border-radius: 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  overflow: overlay;\n  align-self: stretch;\n}\n#sidebar #new-project-button {\n  font-weight: bold;\n  padding: 7.5px 15px;\n  color: white;\n  background-color: #9add43;\n  border-radius: 12px;\n}\n#sidebar #new-project-button:hover {\n  cursor: pointer;\n}\n#sidebar ul li {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 15px;\n  gap: 20px;\n  background-color: #ffffff99;\n}\n#sidebar ul li div:first-child,\n#todos .todo input[type=\"text\"] {\n  min-width: 50px;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n#sidebar ul > li:hover,\n#sidebar ul > li > *:hover {\n  cursor: pointer;\n}\n#sidebar ul > li:hover {\n  background-color: #ffffff50;\n}\n#sidebar h1 {\n  font-size: 22px;\n  font-weight: normal;\n}\n#sidebar,\n#todos {\n  padding: 20px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n}\n#sidebar {\n  max-width: 350px;\n}\n#todos {\n  overflow: overlay;\n  width: 500px;\n}\n#sidebar ul::-webkit-scrollbar,\n#todos::-webkit-scrollbar {\n  width: 10px;\n}\n#sidebar ul::-webkit-scrollbar-thumb,\n#todos::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #9add43;\n}\nimg {\n  width: 20px;\n  height: 20px;\n}\n.todo {\n  display: flex;\n  align-self: stretch;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  border-radius: 15px;\n  padding: 5px 10px;\n  background-color: #ffffff99;\n}\n.todo:hover {\n  position: relative;\n  bottom: 2px;\n}\n.todo input[type=\"text\"] {\n  flex: 1;\n}\n.todo input[type=\"text\"],\n.todo input[type=\"date\"] {\n  border: none;\n  background-color: rgba(255, 255, 255, 0);\n  outline: none;\n}\n.todo input[type=\"text\"]::placeholder {\n  color: rgb(100, 100, 100);\n}\n.todo input[type=\"checkbox\"] {\n  accent-color: #582a7e;\n  accent-color: #9add43;\n}\n\n@media screen and (max-width: 950px) {\n  #sidebar,\n  #todos,\n  #todo-list,\n  #content,\n  body {\n    height: max-content;\n    width: 100%;\n    max-width: none;\n  }\n  #header {\n    padding: 20px;\n    height: auto;\n    min-height: 120px;\n  }\n  #content {\n    min-height: calc(100vh - 120px);\n  }\n  .todo {\n    justify-content: flex-start;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initProjectForm": () => (/* binding */ initProjectForm),
/* harmony export */   "renderTodoList": () => (/* binding */ renderTodoList)
/* harmony export */ });
/* harmony import */ var _icons_add_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/add.png */ "./src/icons/add.png");
/* harmony import */ var _icons_close_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/close.png */ "./src/icons/close.png");
/* harmony import */ var _icons_delete_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/delete.png */ "./src/icons/delete.png");
/* harmony import */ var _icons_description_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/description.png */ "./src/icons/description.png");





function renderTodoList(user) {
  cleanSidebar();
  cleanTodos();
  renderSidebar(user);
  if (user.currentProject) renderProject(user.currentProject);
}

function renderSidebar(user) {
  const sidebar = document.getElementById("sidebar");

  const header = document.createElement("h1");
  header.textContent = "Projects";
  sidebar.appendChild(header);

  const projectsList = document.createElement("ul");
  user.projects.map((project) => {
    const li = document.createElement("li");

    const projectDiv = document.createElement("div");
    projectDiv.textContent = project.projectTitle;
    li.appendChild(projectDiv);
    li.addEventListener("click", (event) => {
      if (event.target !== deleteIcon) {
        user.changeCurrentProject(project);
        renderProject(user.currentProject);
      }
    });

    const deleteIcon = document.createElement("div");
    deleteIcon.textContent = "-";
    deleteIcon.addEventListener("click", () => {
      user.deleteProject(project);
      renderTodoList(user);
    });
    li.appendChild(deleteIcon);
    projectsList.appendChild(li);
  });
  sidebar.appendChild(projectsList);

  const newProjectBtn = document.createElement("div");
  newProjectBtn.setAttribute("id", "new-project-button");
  newProjectBtn.textContent = "New Project";
  newProjectBtn.addEventListener("click", displayProjectForm);
  sidebar.appendChild(newProjectBtn);
}

function submitProjectForm(user) {
  const titleInput = document.querySelector("div.new-project form input#title");
  const projectTitle = titleInput.value;
  titleInput.value = "";
  user.addProject(projectTitle);
  renderTodoList(user);
}

function initProjectForm(user) {
  const closeBtn = document.getElementById("close-form");
  closeBtn.src = _icons_close_png__WEBPACK_IMPORTED_MODULE_1__;
  closeBtn.addEventListener("click", hideProjectForm);

  const addBtn = document.getElementById("add-project");
  addBtn.addEventListener("click", submitProjectForm.bind(user, user));
}

function displayProjectForm() {
  const form = document.querySelector("div.new-project");
  form.setAttribute("style", "display: flex");
}

function hideProjectForm() {
  const form = document.querySelector("div.new-project");
  form.setAttribute("style", "display: none");
}

function cleanSidebar() {
  const sidebar = document.getElementById("sidebar");
  while (sidebar.firstChild) {
    sidebar.removeChild(sidebar.firstChild);
  }
}

function cleanTodos() {
  const todos = document.getElementById("todos");
  while (todos.firstChild) {
    todos.removeChild(todos.firstChild);
  }
}

function renderProject(project) {
  cleanTodos();
  const todos = document.getElementById("todos");

  project.todos.map((todo) => {
    const todoDiv = renderTodo(todo);
    todos.appendChild(todoDiv);
  });

  const emptyTodo = renderEmptyTodo(project);
  todos.appendChild(emptyTodo);
}

function renderEmptyTodo(project) {
  const todoDiv = document.createElement("div");
  todoDiv.className = "todo";

  const title = document.createElement("input");
  title.type = "text";
  title.placeholder = "Do homework";
  todoDiv.appendChild(title);

  const addIcon = document.createElement("img");
  addIcon.src = _icons_add_png__WEBPACK_IMPORTED_MODULE_0__;
  addIcon.addEventListener("click", () => {
    project.addTodo(title, 0);
    renderTodoList(project.getUser());
  });
  todoDiv.appendChild(addIcon);

  return todoDiv;
}

function renderTodo(todo) {
  const todoDiv = document.createElement("div");
  todoDiv.className = "todo";

  const state = document.createElement("input");
  state.type = "checkbox";
  state.checked = todo.state;
  state.addEventListener("change", todo.changeTodoState.bind(todo, state));
  todoDiv.appendChild(state);

  const title = document.createElement("input");
  title.type = "text";
  title.value = todo.todoTitle;
  title.addEventListener("change", todo.changeTodoTitle.bind(todo, title));
  todoDiv.appendChild(title);

  const due = document.createElement("input");
  due.type = "date";
  due.value = todo.due;
  due.addEventListener("change", todo.changeDueDate.bind(todo, due));
  todoDiv.appendChild(due);

  const descriptionIcon = document.createElement("img");
  descriptionIcon.src = _icons_description_png__WEBPACK_IMPORTED_MODULE_3__;
  descriptionIcon.addEventListener(
    "click",
    displayDescriptionForm.bind(todo, todo)
  );
  todoDiv.appendChild(descriptionIcon);

  const deleteIcon = document.createElement("img");
  deleteIcon.src = _icons_delete_png__WEBPACK_IMPORTED_MODULE_2__;
  deleteIcon.addEventListener("click", () => {
    todo.getProject().deleteTodo(todo.todoTitle);
    renderProject(todo.getProject());
  });
  todoDiv.appendChild(deleteIcon);
  return todoDiv;
}

function displayDescriptionForm(todo) {
  const body = document.querySelector("body");

  const div = document.createElement("div");
  div.className = "description-form";

  const form = document.createElement("form");

  const closeIcon = document.createElement("img");
  closeIcon.src = _icons_close_png__WEBPACK_IMPORTED_MODULE_1__;
  closeIcon.addEventListener("click", removeDescriptionForm);
  form.appendChild(closeIcon);

  const label = document.createElement("label");
  label.textContent = todo.todoTitle;
  label.for = "description";
  form.appendChild(label);

  const description = document.createElement("textarea");
  description.id = "description";
  description.placeholder = "Describe task...";
  description.value = todo.description;
  description.addEventListener("change", () => {
    if (description.value != todo.description)
      saveBtn.setAttribute("style", "background-color: red");
    else {
      saveBtn.setAttribute("style", "background-color: #081f2c");
    }
  });
  form.appendChild(description);

  const saveBtn = document.createElement("button");
  saveBtn.type = "button";
  saveBtn.textContent = "Save";
  saveBtn.addEventListener("click", () => {
    todo.changeDescription(description);
    saveBtn.setAttribute("style", "background-color: #081f2c");
  });
  form.appendChild(saveBtn);

  div.appendChild(form);
  body.appendChild(div);
}

function removeDescriptionForm() {
  const body = document.querySelector("body");
  const descriptionFormDiv = document.querySelector(".description-form");
  body.removeChild(descriptionFormDiv);
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");


function Project(titleArg, userArg, todosArg = []) {
  this.projectTitle = titleArg;
  this.todos = todosArg;

  this.getUser = function () {
    return userArg;
  };

  this.addTodo = function (todoTitleArg, stateArg = 0) {
    const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo(
      typeof todoTitleArg === "string" ? todoTitleArg : todoTitleArg.value,
      this,
      stateArg
    );
    this.todos.push(todo);
    this.getUser().updateLocal();
    return todo;
  };

  this.deleteTodo = function (todoTitleArg) {
    const index = this.todos.findIndex((todo) => {
      return todo.todoTitle === todoTitleArg;
    });
    this.todos.splice(index, 1);
    this.getUser().updateLocal();
  };
}


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
function Todo(
  titleArg = "",
  project,
  stateArg = 0,
  descriptionArg = "",
  dueArg = new Date().toISOString().substring(0, 10),
  priorityArg = 0
) {
  this.todoTitle = titleArg;
  this.state = stateArg;
  this.description = descriptionArg;
  this.due = dueArg;
  this.priority = priorityArg;

  this.getProject = function () {
    return project;
  };
  this.getUser = function () {
    return this.getProject().getUser();
  };
  this.changeDescription = function (input) {
    this.description = input.value;
    this.getUser().updateLocal();
  };

  this.changeTodoState = function (checkbox) {
    this.state = checkbox.checked;
    this.getUser().updateLocal();
  };

  this.changeTodoTitle = function (input) {
    this.todoTitle = input.value;
    this.getUser().updateLocal();
  };

  this.changeDueDate = function (input) {
    this.due = input.value;
    this.getUser().updateLocal();
  };
}


/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User),
/* harmony export */   "getLocalUser": () => (/* binding */ getLocalUser),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




function User(nameArg, projectsArg = []) {
  this.name = nameArg;
  this.projects = projectsArg;
  this.currentProject;
  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.initProjectForm)(this);

  this.addProject = function (titleArg) {
    const project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(titleArg, this);
    this.projects.push(project);
    if (!this.currentProject) this.changeCurrentProject(project);
    this.updateLocal();
    return project;
  };

  this.deleteProject = function (project) {
    const index = this.projects.indexOf(project);
    this.projects.splice(index, 1);
    if (this.currentProject === project)
      this.changeCurrentProject(this.projects[0]);
    this.updateLocal();
  };

  this.changeCurrentProject = function (project) {
    this.currentProject = project;
  };

  this.updateLocal = function () {
    localStorage.setItem("user", JSON.stringify(this));
  };
}

function getLocalUser() {
  if (!localStorage.getItem("user")) {
    const user = new User("cute kitten");

    const fitness = user.addProject("Fitness");
    fitness.addTodo("do upper body");
    fitness.addTodo("drink protein shake");

    const programming = user.addProject("Programming");
    programming.addTodo("complete tic tac toe", 1);
    programming.addTodo("learn webpack", 1);
    programming.addTodo("learn react");

    localStorage.setItem("user", JSON.stringify(user));
  }
  return JSON.parse(localStorage.getItem("user"));
}

function init(localUser) {
  const user = new User(localUser.name, localUser.projects);
  user.projects = user.projects.map((project) => {
    return new _project__WEBPACK_IMPORTED_MODULE_0__.Project(project.projectTitle, user, project.todos);
  });
  user.projects.map((project) => {
    project.todos = project.todos.map((todo) => {
      return new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo(
        todo.todoTitle,
        project,
        todo.state,
        todo.description,
        todo.due,
        todo.priority
      );
    });
  });
  user.changeCurrentProject(user.projects[0]);
  return user;
}


/***/ }),

/***/ "./src/fonts/CocoMilk-2OvpX.otf":
/*!**************************************!*\
  !*** ./src/fonts/CocoMilk-2OvpX.otf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6c8a05e6eb0cc31dc17.otf";

/***/ }),

/***/ "./src/fonts/MontserratRegular-RpK6l.otf":
/*!***********************************************!*\
  !*** ./src/fonts/MontserratRegular-RpK6l.otf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b3760e7103ed782d0e5.otf";

/***/ }),

/***/ "./src/icons/add.png":
/*!***************************!*\
  !*** ./src/icons/add.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f84389aee492557f24e1.png";

/***/ }),

/***/ "./src/icons/close.png":
/*!*****************************!*\
  !*** ./src/icons/close.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4394516abb411fbb700d.png";

/***/ }),

/***/ "./src/icons/delete.png":
/*!******************************!*\
  !*** ./src/icons/delete.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ce1f523c16f7af7ecc0.png";

/***/ }),

/***/ "./src/icons/description.png":
/*!***********************************!*\
  !*** ./src/icons/description.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e42c3c63c6b97a10746d.png";

/***/ }),

/***/ "./src/view.avif":
/*!***********************!*\
  !*** ./src/view.avif ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "651c080b26cb2c47df8b.avif";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




const localUser = (0,_user__WEBPACK_IMPORTED_MODULE_0__.getLocalUser)();
const user = (0,_user__WEBPACK_IMPORTED_MODULE_0__.init)(localUser);

(0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderTodoList)(user);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFNBQVMsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sK0JBQStCLDRCQUE0Qixr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Q0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBNEM7QUFDTDtBQUNsQjs7QUFFckIsa0JBQWtCLG1EQUFZO0FBQzlCLGFBQWEsMkNBQUk7O0FBRWpCLG9EQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdXNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Db2NvTWlsay0yT3ZwWC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL01vbnRzZXJyYXRSZWd1bGFyLVJwSzZsLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vdmlldy5hdmlmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxufVxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY29jb21pbGtcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibW9udHNlcnJhdFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIm1vbnRzZXJyYXRcXFwiO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICMwODFmMmM7XFxufVxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KTtcXG4gIHBhZGRpbmc6IDV2bWluO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4jcGhvdG8tcmVmIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4jcGhvdG8tcmVmLFxcbiNwaG90by1yZWYgYSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbiNoZWFkZXIge1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IGNhbGMoMjBweCArIDE2dncpO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBmb250LWZhbWlseTogXFxcImNvY29taWxrXFxcIjtcXG4gIGZvbnQtc2l6ZTogODBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAwIDAgM3B4IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MWYyYztcXG59XFxuI2Zvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YWRkNDM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGhlaWdodDogODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5kaXYubmV3LXByb2plY3Qge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgxZjJjYWE7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5kaXYubmV3LXByb2plY3QgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogbWluKG1heC1jb250ZW50LCAyNDBweCk7XFxuICB3aWR0aDogbWluKDUwdm1pbiwgMjQwcHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmFhO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogY2FsYygyMHB4ICsgMXZtaW4pO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuZGl2Lm5ldy1wcm9qZWN0IGZvcm0gaW1nOmZpcnN0LWNoaWxkIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5kaXYubmV3LXByb2plY3QgZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgZmxleDogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NDcpO1xcbiAgY29sb3I6ICMwODFmMmM7XFxuICBwYWRkaW5nOiAycHggNXB4O1xcbn1cXG5mb3JtIGxhYmVsIHtcXG4gIGNvbG9yOiAjMDgxZjJjO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbmRpdi5uZXctcHJvamVjdCBkaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMTBweDtcXG59XFxuZGl2Lm5ldy1wcm9qZWN0IGZvcm0gYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDcuNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MWYyYztcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgd2lkdGg6IG1pbigxMDAlLCAxMDBweCk7XFxufVxcbmRpdi5kZXNjcmlwdGlvbi1mb3JtIGZvcm0gaW1nOmZpcnN0LWNoaWxkIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5kaXYuZGVzY3JpcHRpb24tZm9ybSBmb3JtIHRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NDcpO1xcbiAgY29sb3I6ICMwODFmMmM7XFxuICBwYWRkaW5nOiAxNXB4IDE1cHg7XFxufVxcbmRpdi5kZXNjcmlwdGlvbi1mb3JtIGZvcm0gYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDcuNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MWYyYztcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgd2lkdGg6IG1pbigxMDAlLCAxMDBweCk7XFxufVxcbmRpdi5kZXNjcmlwdGlvbi1mb3JtIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MWYyY2FhO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuZGl2LmRlc2NyaXB0aW9uLWZvcm0gZm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogbWluKG1heC1jb250ZW50LCAzMDBweCk7XFxuICB3aWR0aDogbWluKDUwdm1pbiwgMzAwcHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmFhO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogY2FsYygyMHB4ICsgMXZtaW4pO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3RvZG8tbGlzdCB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogMnZtaW47XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGdhcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5OTtcXG59XFxuI3NpZGViYXIgdWwge1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbn1cXG4jc2lkZWJhciAjbmV3LXByb2plY3QtYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogNy41cHggMTVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YWRkNDM7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG4jc2lkZWJhciAjbmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3NpZGViYXIgdWwgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGdhcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5OTtcXG59XFxuI3NpZGViYXIgdWwgbGkgZGl2OmZpcnN0LWNoaWxkLFxcbiN0b2RvcyAudG9kbyBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgbWluLXdpZHRoOiA1MHB4O1xcbiAgZmxleDogMTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuI3NpZGViYXIgdWwgPiBsaTpob3ZlcixcXG4jc2lkZWJhciB1bCA+IGxpID4gKjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNzaWRlYmFyIHVsID4gbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjUwO1xcbn1cXG4jc2lkZWJhciBoMSB7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG4jc2lkZWJhcixcXG4jdG9kb3Mge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDEwcHg7XFxufVxcbiNzaWRlYmFyIHtcXG4gIG1heC13aWR0aDogMzUwcHg7XFxufVxcbiN0b2RvcyB7XFxuICBvdmVyZmxvdzogb3ZlcmxheTtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuI3NpZGViYXIgdWw6Oi13ZWJraXQtc2Nyb2xsYmFyLFxcbiN0b2Rvczo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcbiNzaWRlYmFyIHVsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYixcXG4jdG9kb3M6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFkZDQzO1xcbn1cXG5pbWcge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcbi50b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5OTtcXG59XFxuLnRvZG86aG92ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAycHg7XFxufVxcbi50b2RvIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBmbGV4OiAxO1xcbn1cXG4udG9kbyBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuLnRvZG8gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4udG9kbyBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XFxufVxcbi50b2RvIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgYWNjZW50LWNvbG9yOiAjNTgyYTdlO1xcbiAgYWNjZW50LWNvbG9yOiAjOWFkZDQzO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xcbiAgI3NpZGViYXIsXFxuICAjdG9kb3MsXFxuICAjdG9kby1saXN0LFxcbiAgI2NvbnRlbnQsXFxuICBib2R5IHtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogbm9uZTtcXG4gIH1cXG4gICNoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xcbiAgfVxcbiAgI2NvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHgpO1xcbiAgfVxcbiAgLnRvZG8ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsNENBQW9DO0FBQ3RDO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsNENBQTZDO0FBQy9DO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VB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QWU7QUFDakI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7QUFDQTs7RUFFRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsT0FBTztBQUNUO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFOzs7OztJQUtFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBvdmVybGF5O1xcbn1cXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTBweDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImNvY29taWxrXFxcIjtcXG4gIHNyYzogdXJsKC4vZm9udHMvQ29jb01pbGstMk92cFgub3RmKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIm1vbnRzZXJyYXRcXFwiO1xcbiAgc3JjOiB1cmwoLi9mb250cy9Nb250c2VycmF0UmVndWxhci1ScEs2bC5vdGYpO1xcbn1cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtb250c2VycmF0XFxcIjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjMDgxZjJjO1xcbn1cXG4jY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL3ZpZXcuYXZpZik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XFxuICBwYWRkaW5nOiA1dm1pbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdhcDogMTBweDtcXG59XFxuI3Bob3RvLXJlZiB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuI3Bob3RvLXJlZixcXG4jcGhvdG8tcmVmIGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4jaGVhZGVyIHtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKDIwcHggKyAxNnZ3KTtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjb2NvbWlsa1xcXCI7XFxuICBmb250LXNpemU6IDgwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDNweCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODFmMmM7XFxufVxcbiNmb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFkZDQzO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuZGl2Lm5ldy1wcm9qZWN0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MWYyY2FhO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuZGl2Lm5ldy1wcm9qZWN0IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IG1pbihtYXgtY29udGVudCwgMjQwcHgpO1xcbiAgd2lkdGg6IG1pbig1MHZtaW4sIDI0MHB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZhYTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IGNhbGMoMjBweCArIDF2bWluKTtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmRpdi5uZXctcHJvamVjdCBmb3JtIGltZzpmaXJzdC1jaGlsZCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuZGl2Lm5ldy1wcm9qZWN0IGZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzQ3KTtcXG4gIGNvbG9yOiAjMDgxZjJjO1xcbiAgcGFkZGluZzogMnB4IDVweDtcXG59XFxuZm9ybSBsYWJlbCB7XFxuICBjb2xvcjogIzA4MWYyYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5kaXYubmV3LXByb2plY3QgZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDEwcHg7XFxufVxcbmRpdi5uZXctcHJvamVjdCBmb3JtIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA3LjVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODFmMmM7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIHdpZHRoOiBtaW4oMTAwJSwgMTAwcHgpO1xcbn1cXG5kaXYuZGVzY3JpcHRpb24tZm9ybSBmb3JtIGltZzpmaXJzdC1jaGlsZCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuZGl2LmRlc2NyaXB0aW9uLWZvcm0gZm9ybSB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzQ3KTtcXG4gIGNvbG9yOiAjMDgxZjJjO1xcbiAgcGFkZGluZzogMTVweCAxNXB4O1xcbn1cXG5kaXYuZGVzY3JpcHRpb24tZm9ybSBmb3JtIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA3LjVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODFmMmM7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIHdpZHRoOiBtaW4oMTAwJSwgMTAwcHgpO1xcbn1cXG5kaXYuZGVzY3JpcHRpb24tZm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODFmMmNhYTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbmRpdi5kZXNjcmlwdGlvbi1mb3JtIGZvcm0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IG1pbihtYXgtY29udGVudCwgMzAwcHgpO1xcbiAgd2lkdGg6IG1pbig1MHZtaW4sIDMwMHB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZhYTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IGNhbGMoMjBweCArIDF2bWluKTtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiN0b2RvLWxpc3Qge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBhZGRpbmc6IDJ2bWluO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBnYXA6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOTk7XFxufVxcbiNzaWRlYmFyIHVsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG92ZXJmbG93OiBvdmVybGF5O1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XFxuI3NpZGViYXIgI25ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDcuNXB4IDE1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFkZDQzO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuI3NpZGViYXIgI25ldy1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNzaWRlYmFyIHVsIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBnYXA6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOTk7XFxufVxcbiNzaWRlYmFyIHVsIGxpIGRpdjpmaXJzdC1jaGlsZCxcXG4jdG9kb3MgLnRvZG8gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIG1pbi13aWR0aDogNTBweDtcXG4gIGZsZXg6IDE7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbiNzaWRlYmFyIHVsID4gbGk6aG92ZXIsXFxuI3NpZGViYXIgdWwgPiBsaSA+ICo6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jc2lkZWJhciB1bCA+IGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY1MDtcXG59XFxuI3NpZGViYXIgaDEge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuI3NpZGViYXIsXFxuI3RvZG9zIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4jc2lkZWJhciB7XFxuICBtYXgtd2lkdGg6IDM1MHB4O1xcbn1cXG4jdG9kb3Mge1xcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxuICB3aWR0aDogNTAwcHg7XFxufVxcbiNzaWRlYmFyIHVsOjotd2Via2l0LXNjcm9sbGJhcixcXG4jdG9kb3M6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG4jc2lkZWJhciB1bDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXFxuI3RvZG9zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlhZGQ0MztcXG59XFxuaW1nIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4udG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOTk7XFxufVxcbi50b2RvOmhvdmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMnB4O1xcbn1cXG4udG9kbyBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgZmxleDogMTtcXG59XFxuLnRvZG8gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbi50b2RvIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLnRvZG8gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xcbn1cXG4udG9kbyBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGFjY2VudC1jb2xvcjogIzU4MmE3ZTtcXG4gIGFjY2VudC1jb2xvcjogIzlhZGQ0MztcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcXG4gICNzaWRlYmFyLFxcbiAgI3RvZG9zLFxcbiAgI3RvZG8tbGlzdCxcXG4gICNjb250ZW50LFxcbiAgYm9keSB7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7XFxuICB9XFxuICAjaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcXG4gIH1cXG4gICNjb250ZW50IHtcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KTtcXG4gIH1cXG4gIC50b2RvIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFkZEljb25TcmMgZnJvbSBcIi4vaWNvbnMvYWRkLnBuZ1wiO1xuaW1wb3J0IGNsb3NlSWNvblNyYyBmcm9tIFwiLi9pY29ucy9jbG9zZS5wbmdcIjtcbmltcG9ydCBkZWxldGVJY29uU3JjIGZyb20gXCIuL2ljb25zL2RlbGV0ZS5wbmdcIjtcbmltcG9ydCBkZXNjcmlwdGlvbkljb25TcmMgZnJvbSBcIi4vaWNvbnMvZGVzY3JpcHRpb24ucG5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb2RvTGlzdCh1c2VyKSB7XG4gIGNsZWFuU2lkZWJhcigpO1xuICBjbGVhblRvZG9zKCk7XG4gIHJlbmRlclNpZGViYXIodXNlcik7XG4gIGlmICh1c2VyLmN1cnJlbnRQcm9qZWN0KSByZW5kZXJQcm9qZWN0KHVzZXIuY3VycmVudFByb2plY3QpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTaWRlYmFyKHVzZXIpIHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdXNlci5wcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3RUaXRsZTtcbiAgICBsaS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBkZWxldGVJY29uKSB7XG4gICAgICAgIHVzZXIuY2hhbmdlQ3VycmVudFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIHJlbmRlclByb2plY3QodXNlci5jdXJyZW50UHJvamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWxldGVJY29uLnRleHRDb250ZW50ID0gXCItXCI7XG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdXNlci5kZWxldGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgcmVuZGVyVG9kb0xpc3QodXNlcik7XG4gICAgfSk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgfSk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0KTtcblxuICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3UHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgbmV3UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcbiAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVByb2plY3RGb3JtKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnRuKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0UHJvamVjdEZvcm0odXNlcikge1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5uZXctcHJvamVjdCBmb3JtIGlucHV0I3RpdGxlXCIpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgdXNlci5hZGRQcm9qZWN0KHByb2plY3RUaXRsZSk7XG4gIHJlbmRlclRvZG9MaXN0KHVzZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFByb2plY3RGb3JtKHVzZXIpIHtcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWZvcm1cIik7XG4gIGNsb3NlQnRuLnNyYyA9IGNsb3NlSWNvblNyYztcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVQcm9qZWN0Rm9ybSk7XG5cbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdFwiKTtcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRQcm9qZWN0Rm9ybS5iaW5kKHVzZXIsIHVzZXIpKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RGb3JtKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5uZXctcHJvamVjdFwiKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IGZsZXhcIik7XG59XG5cbmZ1bmN0aW9uIGhpZGVQcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYubmV3LXByb2plY3RcIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lXCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhblNpZGViYXIoKSB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XG4gIHdoaWxlIChzaWRlYmFyLmZpcnN0Q2hpbGQpIHtcbiAgICBzaWRlYmFyLnJlbW92ZUNoaWxkKHNpZGViYXIuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYW5Ub2RvcygpIHtcbiAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zXCIpO1xuICB3aGlsZSAodG9kb3MuZmlyc3RDaGlsZCkge1xuICAgIHRvZG9zLnJlbW92ZUNoaWxkKHRvZG9zLmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3QocHJvamVjdCkge1xuICBjbGVhblRvZG9zKCk7XG4gIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2Rvc1wiKTtcblxuICBwcm9qZWN0LnRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9EaXYgPSByZW5kZXJUb2RvKHRvZG8pO1xuICAgIHRvZG9zLmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuICB9KTtcblxuICBjb25zdCBlbXB0eVRvZG8gPSByZW5kZXJFbXB0eVRvZG8ocHJvamVjdCk7XG4gIHRvZG9zLmFwcGVuZENoaWxkKGVtcHR5VG9kbyk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckVtcHR5VG9kbyhwcm9qZWN0KSB7XG4gIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvRGl2LmNsYXNzTmFtZSA9IFwidG9kb1wiO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZS50eXBlID0gXCJ0ZXh0XCI7XG4gIHRpdGxlLnBsYWNlaG9sZGVyID0gXCJEbyBob21ld29ya1wiO1xuICB0b2RvRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBhZGRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgYWRkSWNvbi5zcmMgPSBhZGRJY29uU3JjO1xuICBhZGRJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvamVjdC5hZGRUb2RvKHRpdGxlLCAwKTtcbiAgICByZW5kZXJUb2RvTGlzdChwcm9qZWN0LmdldFVzZXIoKSk7XG4gIH0pO1xuICB0b2RvRGl2LmFwcGVuZENoaWxkKGFkZEljb24pO1xuXG4gIHJldHVybiB0b2RvRGl2O1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2RvKHRvZG8pIHtcbiAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9EaXYuY2xhc3NOYW1lID0gXCJ0b2RvXCI7XG5cbiAgY29uc3Qgc3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN0YXRlLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIHN0YXRlLmNoZWNrZWQgPSB0b2RvLnN0YXRlO1xuICBzdGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRvZG8uY2hhbmdlVG9kb1N0YXRlLmJpbmQodG9kbywgc3RhdGUpKTtcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZChzdGF0ZSk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgdGl0bGUudmFsdWUgPSB0b2RvLnRvZG9UaXRsZTtcbiAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0b2RvLmNoYW5nZVRvZG9UaXRsZS5iaW5kKHRvZG8sIHRpdGxlKSk7XG4gIHRvZG9EaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZHVlLnR5cGUgPSBcImRhdGVcIjtcbiAgZHVlLnZhbHVlID0gdG9kby5kdWU7XG4gIGR1ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRvZG8uY2hhbmdlRHVlRGF0ZS5iaW5kKHRvZG8sIGR1ZSkpO1xuICB0b2RvRGl2LmFwcGVuZENoaWxkKGR1ZSk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZGVzY3JpcHRpb25JY29uLnNyYyA9IGRlc2NyaXB0aW9uSWNvblNyYztcbiAgZGVzY3JpcHRpb25JY29uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIGRpc3BsYXlEZXNjcmlwdGlvbkZvcm0uYmluZCh0b2RvLCB0b2RvKVxuICApO1xuICB0b2RvRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSWNvbik7XG5cbiAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGRlbGV0ZUljb24uc3JjID0gZGVsZXRlSWNvblNyYztcbiAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRvZG8uZ2V0UHJvamVjdCgpLmRlbGV0ZVRvZG8odG9kby50b2RvVGl0bGUpO1xuICAgIHJlbmRlclByb2plY3QodG9kby5nZXRQcm9qZWN0KCkpO1xuICB9KTtcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgcmV0dXJuIHRvZG9EaXY7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlEZXNjcmlwdGlvbkZvcm0odG9kbykge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb24tZm9ybVwiO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjbG9zZUljb24uc3JjID0gY2xvc2VJY29uU3JjO1xuICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZURlc2NyaXB0aW9uRm9ybSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSB0b2RvLnRvZG9UaXRsZTtcbiAgbGFiZWwuZm9yID0gXCJkZXNjcmlwdGlvblwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgZGVzY3JpcHRpb24uaWQgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJEZXNjcmliZSB0YXNrLi4uXCI7XG4gIGRlc2NyaXB0aW9uLnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgZGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgaWYgKGRlc2NyaXB0aW9uLnZhbHVlICE9IHRvZG8uZGVzY3JpcHRpb24pXG4gICAgICBzYXZlQnRuLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmVkXCIpO1xuICAgIGVsc2Uge1xuICAgICAgc2F2ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6ICMwODFmMmNcIik7XG4gICAgfVxuICB9KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNhdmVCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIHNhdmVCdG4udGV4dENvbnRlbnQgPSBcIlNhdmVcIjtcbiAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRvZG8uY2hhbmdlRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pO1xuICAgIHNhdmVCdG4uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiAjMDgxZjJjXCIpO1xuICB9KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzYXZlQnRuKTtcblxuICBkaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRGVzY3JpcHRpb25Gb3JtKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uRm9ybURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb24tZm9ybVwiKTtcbiAgYm9keS5yZW1vdmVDaGlsZChkZXNjcmlwdGlvbkZvcm1EaXYpO1xufVxuIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG8uanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3QodGl0bGVBcmcsIHVzZXJBcmcsIHRvZG9zQXJnID0gW10pIHtcbiAgdGhpcy5wcm9qZWN0VGl0bGUgPSB0aXRsZUFyZztcbiAgdGhpcy50b2RvcyA9IHRvZG9zQXJnO1xuXG4gIHRoaXMuZ2V0VXNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdXNlckFyZztcbiAgfTtcblxuICB0aGlzLmFkZFRvZG8gPSBmdW5jdGlvbiAodG9kb1RpdGxlQXJnLCBzdGF0ZUFyZyA9IDApIHtcbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8oXG4gICAgICB0eXBlb2YgdG9kb1RpdGxlQXJnID09PSBcInN0cmluZ1wiID8gdG9kb1RpdGxlQXJnIDogdG9kb1RpdGxlQXJnLnZhbHVlLFxuICAgICAgdGhpcyxcbiAgICAgIHN0YXRlQXJnXG4gICAgKTtcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gICAgdGhpcy5nZXRVc2VyKCkudXBkYXRlTG9jYWwoKTtcbiAgICByZXR1cm4gdG9kbztcbiAgfTtcblxuICB0aGlzLmRlbGV0ZVRvZG8gPSBmdW5jdGlvbiAodG9kb1RpdGxlQXJnKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRvZG9zLmZpbmRJbmRleCgodG9kbykgPT4ge1xuICAgICAgcmV0dXJuIHRvZG8udG9kb1RpdGxlID09PSB0b2RvVGl0bGVBcmc7XG4gICAgfSk7XG4gICAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMuZ2V0VXNlcigpLnVwZGF0ZUxvY2FsKCk7XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gVG9kbyhcbiAgdGl0bGVBcmcgPSBcIlwiLFxuICBwcm9qZWN0LFxuICBzdGF0ZUFyZyA9IDAsXG4gIGRlc2NyaXB0aW9uQXJnID0gXCJcIixcbiAgZHVlQXJnID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMCksXG4gIHByaW9yaXR5QXJnID0gMFxuKSB7XG4gIHRoaXMudG9kb1RpdGxlID0gdGl0bGVBcmc7XG4gIHRoaXMuc3RhdGUgPSBzdGF0ZUFyZztcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uQXJnO1xuICB0aGlzLmR1ZSA9IGR1ZUFyZztcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5QXJnO1xuXG4gIHRoaXMuZ2V0UHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfTtcbiAgdGhpcy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmdldFByb2plY3QoKS5nZXRVc2VyKCk7XG4gIH07XG4gIHRoaXMuY2hhbmdlRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gaW5wdXQudmFsdWU7XG4gICAgdGhpcy5nZXRVc2VyKCkudXBkYXRlTG9jYWwoKTtcbiAgfTtcblxuICB0aGlzLmNoYW5nZVRvZG9TdGF0ZSA9IGZ1bmN0aW9uIChjaGVja2JveCkge1xuICAgIHRoaXMuc3RhdGUgPSBjaGVja2JveC5jaGVja2VkO1xuICAgIHRoaXMuZ2V0VXNlcigpLnVwZGF0ZUxvY2FsKCk7XG4gIH07XG5cbiAgdGhpcy5jaGFuZ2VUb2RvVGl0bGUgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICB0aGlzLnRvZG9UaXRsZSA9IGlucHV0LnZhbHVlO1xuICAgIHRoaXMuZ2V0VXNlcigpLnVwZGF0ZUxvY2FsKCk7XG4gIH07XG5cbiAgdGhpcy5jaGFuZ2VEdWVEYXRlID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdGhpcy5kdWUgPSBpbnB1dC52YWx1ZTtcbiAgICB0aGlzLmdldFVzZXIoKS51cGRhdGVMb2NhbCgpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBpbml0UHJvamVjdEZvcm0gfSBmcm9tIFwiLi9kb21cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXIobmFtZUFyZywgcHJvamVjdHNBcmcgPSBbXSkge1xuICB0aGlzLm5hbWUgPSBuYW1lQXJnO1xuICB0aGlzLnByb2plY3RzID0gcHJvamVjdHNBcmc7XG4gIHRoaXMuY3VycmVudFByb2plY3Q7XG4gIGluaXRQcm9qZWN0Rm9ybSh0aGlzKTtcblxuICB0aGlzLmFkZFByb2plY3QgPSBmdW5jdGlvbiAodGl0bGVBcmcpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGVBcmcsIHRoaXMpO1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBpZiAoIXRoaXMuY3VycmVudFByb2plY3QpIHRoaXMuY2hhbmdlQ3VycmVudFByb2plY3QocHJvamVjdCk7XG4gICAgdGhpcy51cGRhdGVMb2NhbCgpO1xuICAgIHJldHVybiBwcm9qZWN0O1xuICB9O1xuXG4gIHRoaXMuZGVsZXRlUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGlmICh0aGlzLmN1cnJlbnRQcm9qZWN0ID09PSBwcm9qZWN0KVxuICAgICAgdGhpcy5jaGFuZ2VDdXJyZW50UHJvamVjdCh0aGlzLnByb2plY3RzWzBdKTtcbiAgICB0aGlzLnVwZGF0ZUxvY2FsKCk7XG4gIH07XG5cbiAgdGhpcy5jaGFuZ2VDdXJyZW50UHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gIH07XG5cbiAgdGhpcy51cGRhdGVMb2NhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodGhpcykpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxVc2VyKCkge1xuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSkge1xuICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihcImN1dGUga2l0dGVuXCIpO1xuXG4gICAgY29uc3QgZml0bmVzcyA9IHVzZXIuYWRkUHJvamVjdChcIkZpdG5lc3NcIik7XG4gICAgZml0bmVzcy5hZGRUb2RvKFwiZG8gdXBwZXIgYm9keVwiKTtcbiAgICBmaXRuZXNzLmFkZFRvZG8oXCJkcmluayBwcm90ZWluIHNoYWtlXCIpO1xuXG4gICAgY29uc3QgcHJvZ3JhbW1pbmcgPSB1c2VyLmFkZFByb2plY3QoXCJQcm9ncmFtbWluZ1wiKTtcbiAgICBwcm9ncmFtbWluZy5hZGRUb2RvKFwiY29tcGxldGUgdGljIHRhYyB0b2VcIiwgMSk7XG4gICAgcHJvZ3JhbW1pbmcuYWRkVG9kbyhcImxlYXJuIHdlYnBhY2tcIiwgMSk7XG4gICAgcHJvZ3JhbW1pbmcuYWRkVG9kbyhcImxlYXJuIHJlYWN0XCIpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgfVxuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdChsb2NhbFVzZXIpIHtcbiAgY29uc3QgdXNlciA9IG5ldyBVc2VyKGxvY2FsVXNlci5uYW1lLCBsb2NhbFVzZXIucHJvamVjdHMpO1xuICB1c2VyLnByb2plY3RzID0gdXNlci5wcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb2plY3QocHJvamVjdC5wcm9qZWN0VGl0bGUsIHVzZXIsIHByb2plY3QudG9kb3MpO1xuICB9KTtcbiAgdXNlci5wcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LnRvZG9zID0gcHJvamVjdC50b2Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICAgIHJldHVybiBuZXcgVG9kbyhcbiAgICAgICAgdG9kby50b2RvVGl0bGUsXG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIHRvZG8uc3RhdGUsXG4gICAgICAgIHRvZG8uZGVzY3JpcHRpb24sXG4gICAgICAgIHRvZG8uZHVlLFxuICAgICAgICB0b2RvLnByaW9yaXR5XG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbiAgdXNlci5jaGFuZ2VDdXJyZW50UHJvamVjdCh1c2VyLnByb2plY3RzWzBdKTtcbiAgcmV0dXJuIHVzZXI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgZ2V0TG9jYWxVc2VyLCBpbml0IH0gZnJvbSBcIi4vdXNlclwiO1xuaW1wb3J0IHsgcmVuZGVyVG9kb0xpc3QgfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGxvY2FsVXNlciA9IGdldExvY2FsVXNlcigpO1xuY29uc3QgdXNlciA9IGluaXQobG9jYWxVc2VyKTtcblxucmVuZGVyVG9kb0xpc3QodXNlcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=