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
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.js */ "./src/user.js");
/* harmony import */ var _icons_add_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/add.png */ "./src/icons/add.png");




function Project(titleArg, userArg) {
  this.projectTitle = titleArg;
  this.user = userArg;
  this.todos = [];

  this.addTodo = function (todoTitleArg, stateArg = 0) {
    const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo(
      typeof todoTitleArg === "string" ? todoTitleArg : todoTitleArg.value,
      this,
      stateArg
    );
    this.todos.push(todo);
    this.user.renderTodoList();
    return todo;
  };

  this.deleteTodo = function (todoTitleArg) {
    const todo = this.todos.find((todo) => {
      todo.todoTitle === todoTitleArg;
    });
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.user.renderTodoList();
  };

  this.renderProject = function () {
    (0,_user_js__WEBPACK_IMPORTED_MODULE_1__.cleanTodos)();
    const todos = document.getElementById("todos");

    this.todos.map((todo) => {
      const todoDiv = todo.renderTodo();
      todos.appendChild(todoDiv);
    });

    const emptyTodo = this.renderEmptyTodo();
    todos.appendChild(emptyTodo);
  };

  this.renderEmptyTodo = function () {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";

    const title = document.createElement("input");
    title.type = "text";
    title.placeholder = "Do homework";
    todoDiv.appendChild(title);

    const addIcon = document.createElement("img");
    addIcon.src = _icons_add_png__WEBPACK_IMPORTED_MODULE_2__;
    addIcon.addEventListener("click", this.addTodo.bind(this, title, 0));
    todoDiv.appendChild(addIcon);

    return todoDiv;
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
/* harmony import */ var _icons_delete_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/delete.png */ "./src/icons/delete.png");
/* harmony import */ var _icons_description_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/description.png */ "./src/icons/description.png");
/* harmony import */ var _icons_close_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/close.png */ "./src/icons/close.png");




function Todo(
  titleArg = "",
  projectArg,
  stateArg = 0,
  descriptionArg = "",
  dueArg = new Date().toISOString().substring(0, 10),
  priorityArg = 0
) {
  this.todoTitle = titleArg;
  this.project = projectArg;
  this.state = stateArg;
  this.description = descriptionArg;
  this.due = dueArg;
  this.priority = priorityArg;

  this.renderTodo = function () {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";

    const state = document.createElement("input");
    state.type = "checkbox";
    state.checked = this.state;
    state.addEventListener("change", this.changeTodoState.bind(this, state));
    todoDiv.appendChild(state);

    const title = document.createElement("input");
    title.type = "text";
    title.value = this.todoTitle;
    title.addEventListener("change", this.changeTodoTitle.bind(this, title));
    todoDiv.appendChild(title);

    const due = document.createElement("input");
    due.type = "date";
    due.value = this.due;
    due.addEventListener("change", this.changeDueDate.bind(this, due));
    todoDiv.appendChild(due);

    const descriptionIcon = document.createElement("img");
    descriptionIcon.src = _icons_description_png__WEBPACK_IMPORTED_MODULE_1__;
    descriptionIcon.addEventListener(
      "click",
      this.displayDescriptionForm.bind(this)
    );
    todoDiv.appendChild(descriptionIcon);

    const deleteIcon = document.createElement("img");
    deleteIcon.src = _icons_delete_png__WEBPACK_IMPORTED_MODULE_0__;
    deleteIcon.addEventListener(
      "click",
      this.project.deleteTodo.bind(this.project, this.todoTitle)
    );
    todoDiv.appendChild(deleteIcon);
    return todoDiv;
  };

  this.displayDescriptionForm = function () {
    const body = document.querySelector("body");

    const div = document.createElement("div");
    div.className = "description-form";

    const form = document.createElement("form");

    const closeIcon = document.createElement("img");
    closeIcon.src = _icons_close_png__WEBPACK_IMPORTED_MODULE_2__;
    closeIcon.addEventListener("click", removeDescriptionForm);
    form.appendChild(closeIcon);

    const label = document.createElement("label");
    label.textContent = this.todoTitle;
    label.for = "description";
    form.appendChild(label);

    const description = document.createElement("textarea");
    description.id = "description";
    description.placeholder = "Describe task...";
    description.value = this.description;
    description.addEventListener("change", () => {
      if (description.value != this.description)
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
      this.changeDescription(description);
      saveBtn.setAttribute("style", "background-color: #081f2c");
    });
    form.appendChild(saveBtn);

    div.appendChild(form);
    body.appendChild(div);
  };

  this.changeDescription = function (input) {
    this.description = input.value;
  };

  this.changeTodoState = function (checkbox) {
    this.state = checkbox.checked;
  };

  this.changeTodoTitle = function (input) {
    this.todoTitle = input.value;
  };

  this.changeDueDate = function (input) {
    this.due = input.value;
  };
}

function removeDescriptionForm() {
  const body = document.querySelector("body");
  const descriptionFormDiv = document.querySelector(".description-form");
  body.removeChild(descriptionFormDiv);
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
/* harmony export */   "cleanTodos": () => (/* binding */ cleanTodos)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _icons_close_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/close.png */ "./src/icons/close.png");



function User(nameArg) {
  this.projects = [];
  this.name = nameArg;
  this.currentProject = this.projects[0];

  this.addProject = function (titleArg) {
    const project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(titleArg, this);
    this.projects.push(project);
    this.currentProject = project;
    this.renderTodoList();
    return project;
  };

  this.deleteProject = function (project) {
    const index = this.projects.indexOf(project);
    this.projects.splice(index, 1);
    this.currentProject = this.projects[0];
    this.renderTodoList();
  };

  this.renderSidebar = function () {
    const sidebar = document.getElementById("sidebar");

    const header = document.createElement("h1");
    header.textContent = "Projects";
    sidebar.appendChild(header);

    const projectsList = document.createElement("ul");
    this.projects.map((project) => {
      const li = document.createElement("li");

      const projectDiv = document.createElement("div");
      projectDiv.textContent = project.projectTitle;
      li.appendChild(projectDiv);
      projectDiv.parentNode.addEventListener("click", () => {
        this.currentProject = project;
        this.currentProject.renderProject();
      });

      const deleteIcon = document.createElement("div");
      deleteIcon.textContent = "-";
      deleteIcon.addEventListener(
        "click",
        this.deleteProject.bind(this, project)
      );
      li.appendChild(deleteIcon);
      projectsList.appendChild(li);
    });
    sidebar.appendChild(projectsList);

    const newProjectBtn = document.createElement("div");
    newProjectBtn.setAttribute("id", "new-project-button");
    newProjectBtn.textContent = "New Project";
    newProjectBtn.addEventListener("click", displayProjectForm);
    sidebar.appendChild(newProjectBtn);
  };

  this.submitProjectForm = function () {
    const titleInput = document.querySelector(
      "div.new-project form input#title"
    );
    const projectTitle = titleInput.value;
    titleInput.value = "";
    this.addProject(projectTitle);
  };

  this.initProjectForm = function () {
    const closeBtn = document.getElementById("close-form");
    closeBtn.src = _icons_close_png__WEBPACK_IMPORTED_MODULE_1__;
    closeBtn.addEventListener("click", hideProjectForm);

    const addBtn = document.getElementById("add-project");
    addBtn.addEventListener("click", this.submitProjectForm.bind(this));
  };

  this.initProjectForm();

  this.renderTodoList = function () {
    cleanSidebar();
    cleanTodos();
    this.renderSidebar();
    if (this.currentProject) this.currentProject.renderProject();
  };
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
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




const user = new _user__WEBPACK_IMPORTED_MODULE_0__.User("cute kitten");
user.renderTodoList();
const fitness = user.addProject("Fitness");
fitness.addTodo("do upper body");
fitness.addTodo("drink protein shake");

const programming = user.addProject("Programming");
programming.addTodo("complete tic tac toe", 1);
programming.addTodo("learn webpack", 1);
programming.addTodo("learn react");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFNBQVMsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sK0JBQStCLDRCQUE0Qixr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V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNBO0FBQ1Q7O0FBRXJCLGlCQUFpQix1Q0FBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91c2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0NvY29NaWxrLTJPdnBYLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvTW9udHNlcnJhdFJlZ3VsYXItUnBLNmwub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi92aWV3LmF2aWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogb3ZlcmxheTtcXG59XFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjb2NvbWlsa1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtb250c2VycmF0XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibW9udHNlcnJhdFxcXCI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogIzA4MWYyYztcXG59XFxuI2NvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHgpO1xcbiAgcGFkZGluZzogNXZtaW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBnYXA6IDEwcHg7XFxufVxcbiNwaG90by1yZWYge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbiNwaG90by1yZWYsXFxuI3Bob3RvLXJlZiBhIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuI2hlYWRlciB7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctbGVmdDogY2FsYygyMHB4ICsgMTZ2dyk7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY29jb21pbGtcXFwiO1xcbiAgZm9udC1zaXplOiA4MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAzcHggd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgxZjJjO1xcbn1cXG4jZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlhZGQ0MztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbmRpdi5uZXctcHJvamVjdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODFmMmNhYTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbmRpdi5uZXctcHJvamVjdCBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiBtaW4obWF4LWNvbnRlbnQsIDI0MHB4KTtcXG4gIHdpZHRoOiBtaW4oNTB2bWluLCAyNDBweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmYWE7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiBjYWxjKDIwcHggKyAxdm1pbik7XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5kaXYubmV3LXByb2plY3QgZm9ybSBpbWc6Zmlyc3QtY2hpbGQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcbmRpdi5uZXctcHJvamVjdCBmb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc0Nyk7XFxuICBjb2xvcjogIzA4MWYyYztcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxufVxcbmZvcm0gbGFiZWwge1xcbiAgY29sb3I6ICMwODFmMmM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuZGl2Lm5ldy1wcm9qZWN0IGRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5kaXYubmV3LXByb2plY3QgZm9ybSBidXR0b246bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNy41cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgxZjJjO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICB3aWR0aDogbWluKDEwMCUsIDEwMHB4KTtcXG59XFxuZGl2LmRlc2NyaXB0aW9uLWZvcm0gZm9ybSBpbWc6Zmlyc3QtY2hpbGQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcbmRpdi5kZXNjcmlwdGlvbi1mb3JtIGZvcm0gdGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc0Nyk7XFxuICBjb2xvcjogIzA4MWYyYztcXG4gIHBhZGRpbmc6IDE1cHggMTVweDtcXG59XFxuZGl2LmRlc2NyaXB0aW9uLWZvcm0gZm9ybSBidXR0b246bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNy41cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgxZjJjO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICB3aWR0aDogbWluKDEwMCUsIDEwMHB4KTtcXG59XFxuZGl2LmRlc2NyaXB0aW9uLWZvcm0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgxZjJjYWE7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5kaXYuZGVzY3JpcHRpb24tZm9ybSBmb3JtIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiBtaW4obWF4LWNvbnRlbnQsIDMwMHB4KTtcXG4gIHdpZHRoOiBtaW4oNTB2bWluLCAzMDBweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmYWE7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiBjYWxjKDIwcHggKyAxdm1pbik7XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jdG9kby1saXN0IHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAydm1pbjtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjk5O1xcbn1cXG4jc2lkZWJhciB1bCB7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBvdmVyZmxvdzogb3ZlcmxheTtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVxcbiNzaWRlYmFyICNuZXctcHJvamVjdC1idXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiA3LjVweCAxNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlhZGQ0MztcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcbiNzaWRlYmFyICNuZXctcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jc2lkZWJhciB1bCBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjk5O1xcbn1cXG4jc2lkZWJhciB1bCBsaSBkaXY6Zmlyc3QtY2hpbGQsXFxuI3RvZG9zIC50b2RvIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBtaW4td2lkdGg6IDUwcHg7XFxuICBmbGV4OiAxO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4jc2lkZWJhciB1bCA+IGxpOmhvdmVyLFxcbiNzaWRlYmFyIHVsID4gbGkgPiAqOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3NpZGViYXIgdWwgPiBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNTA7XFxufVxcbiNzaWRlYmFyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbiNzaWRlYmFyLFxcbiN0b2RvcyB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMTBweDtcXG59XFxuI3NpZGViYXIge1xcbiAgbWF4LXdpZHRoOiAzNTBweDtcXG59XFxuI3RvZG9zIHtcXG4gIG92ZXJmbG93OiBvdmVybGF5O1xcbiAgd2lkdGg6IDUwMHB4O1xcbn1cXG4jc2lkZWJhciB1bDo6LXdlYmtpdC1zY3JvbGxiYXIsXFxuI3RvZG9zOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTBweDtcXG59XFxuI3NpZGViYXIgdWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxcbiN0b2Rvczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YWRkNDM7XFxufVxcbmltZyB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuLnRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjk5O1xcbn1cXG4udG9kbzpob3ZlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDJweDtcXG59XFxuLnRvZG8gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGZsZXg6IDE7XFxufVxcbi50b2RvIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG4udG9kbyBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi50b2RvIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG59XFxuLnRvZG8gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBhY2NlbnQtY29sb3I6ICM1ODJhN2U7XFxuICBhY2NlbnQtY29sb3I6ICM5YWRkNDM7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XFxuICAjc2lkZWJhcixcXG4gICN0b2RvcyxcXG4gICN0b2RvLWxpc3QsXFxuICAjY29udGVudCxcXG4gIGJvZHkge1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiBub25lO1xcbiAgfVxcbiAgI2hlYWRlciB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWluLWhlaWdodDogMTIwcHg7XFxuICB9XFxuICAjY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XFxuICB9XFxuICAudG9kbyB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHVCQUF1QjtFQUN2Qiw0Q0FBb0M7QUFDdEM7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qiw0Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gseURBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixZQUFZO0VB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QkFBaUI7RUFDakIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxPQUFPO0FBQ1Q7QUFDQTs7RUFFRSxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7Ozs7O0lBS0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxufVxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY29jb21pbGtcXFwiO1xcbiAgc3JjOiB1cmwoLi9mb250cy9Db2NvTWlsay0yT3ZwWC5vdGYpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibW9udHNlcnJhdFxcXCI7XFxuICBzcmM6IHVybCguL2ZvbnRzL01vbnRzZXJyYXRSZWd1bGFyLVJwSzZsLm90Zik7XFxufVxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIm1vbnRzZXJyYXRcXFwiO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICMwODFmMmM7XFxufVxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vdmlldy5hdmlmKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KTtcXG4gIHBhZGRpbmc6IDV2bWluO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4jcGhvdG8tcmVmIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4jcGhvdG8tcmVmLFxcbiNwaG90by1yZWYgYSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbiNoZWFkZXIge1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IGNhbGMoMjBweCArIDE2dncpO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBmb250LWZhbWlseTogXFxcImNvY29taWxrXFxcIjtcXG4gIGZvbnQtc2l6ZTogODBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAwIDAgM3B4IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MWYyYztcXG59XFxuI2Zvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YWRkNDM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGhlaWdodDogODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5kaXYubmV3LXByb2plY3Qge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgxZjJjYWE7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5kaXYubmV3LXByb2plY3QgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogbWluKG1heC1jb250ZW50LCAyNDBweCk7XFxuICB3aWR0aDogbWluKDUwdm1pbiwgMjQwcHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmFhO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogY2FsYygyMHB4ICsgMXZtaW4pO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuZGl2Lm5ldy1wcm9qZWN0IGZvcm0gaW1nOmZpcnN0LWNoaWxkIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5kaXYubmV3LXByb2plY3QgZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgZmxleDogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NDcpO1xcbiAgY29sb3I6ICMwODFmMmM7XFxuICBwYWRkaW5nOiAycHggNXB4O1xcbn1cXG5mb3JtIGxhYmVsIHtcXG4gIGNvbG9yOiAjMDgxZjJjO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbmRpdi5uZXctcHJvamVjdCBkaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMTBweDtcXG59XFxuZGl2Lm5ldy1wcm9qZWN0IGZvcm0gYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDcuNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MWYyYztcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgd2lkdGg6IG1pbigxMDAlLCAxMDBweCk7XFxufVxcbmRpdi5kZXNjcmlwdGlvbi1mb3JtIGZvcm0gaW1nOmZpcnN0LWNoaWxkIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5kaXYuZGVzY3JpcHRpb24tZm9ybSBmb3JtIHRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NDcpO1xcbiAgY29sb3I6ICMwODFmMmM7XFxuICBwYWRkaW5nOiAxNXB4IDE1cHg7XFxufVxcbmRpdi5kZXNjcmlwdGlvbi1mb3JtIGZvcm0gYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDcuNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MWYyYztcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgd2lkdGg6IG1pbigxMDAlLCAxMDBweCk7XFxufVxcbmRpdi5kZXNjcmlwdGlvbi1mb3JtIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MWYyY2FhO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuZGl2LmRlc2NyaXB0aW9uLWZvcm0gZm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogbWluKG1heC1jb250ZW50LCAzMDBweCk7XFxuICB3aWR0aDogbWluKDUwdm1pbiwgMzAwcHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmFhO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogY2FsYygyMHB4ICsgMXZtaW4pO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3RvZG8tbGlzdCB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogMnZtaW47XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGdhcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5OTtcXG59XFxuI3NpZGViYXIgdWwge1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbn1cXG4jc2lkZWJhciAjbmV3LXByb2plY3QtYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogNy41cHggMTVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YWRkNDM7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG4jc2lkZWJhciAjbmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3NpZGViYXIgdWwgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGdhcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5OTtcXG59XFxuI3NpZGViYXIgdWwgbGkgZGl2OmZpcnN0LWNoaWxkLFxcbiN0b2RvcyAudG9kbyBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgbWluLXdpZHRoOiA1MHB4O1xcbiAgZmxleDogMTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuI3NpZGViYXIgdWwgPiBsaTpob3ZlcixcXG4jc2lkZWJhciB1bCA+IGxpID4gKjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNzaWRlYmFyIHVsID4gbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjUwO1xcbn1cXG4jc2lkZWJhciBoMSB7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG4jc2lkZWJhcixcXG4jdG9kb3Mge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDEwcHg7XFxufVxcbiNzaWRlYmFyIHtcXG4gIG1heC13aWR0aDogMzUwcHg7XFxufVxcbiN0b2RvcyB7XFxuICBvdmVyZmxvdzogb3ZlcmxheTtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuI3NpZGViYXIgdWw6Oi13ZWJraXQtc2Nyb2xsYmFyLFxcbiN0b2Rvczo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcbiNzaWRlYmFyIHVsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYixcXG4jdG9kb3M6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFkZDQzO1xcbn1cXG5pbWcge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcbi50b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5OTtcXG59XFxuLnRvZG86aG92ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAycHg7XFxufVxcbi50b2RvIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBmbGV4OiAxO1xcbn1cXG4udG9kbyBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuLnRvZG8gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4udG9kbyBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XFxufVxcbi50b2RvIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgYWNjZW50LWNvbG9yOiAjNTgyYTdlO1xcbiAgYWNjZW50LWNvbG9yOiAjOWFkZDQzO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xcbiAgI3NpZGViYXIsXFxuICAjdG9kb3MsXFxuICAjdG9kby1saXN0LFxcbiAgI2NvbnRlbnQsXFxuICBib2R5IHtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogbm9uZTtcXG4gIH1cXG4gICNoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xcbiAgfVxcbiAgI2NvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHgpO1xcbiAgfVxcbiAgLnRvZG8ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kby5qc1wiO1xuaW1wb3J0IHsgY2xlYW5Ub2RvcyB9IGZyb20gXCIuL3VzZXIuanNcIjtcbmltcG9ydCBhZGRJY29uU3JjIGZyb20gXCIuL2ljb25zL2FkZC5wbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3QodGl0bGVBcmcsIHVzZXJBcmcpIHtcbiAgdGhpcy5wcm9qZWN0VGl0bGUgPSB0aXRsZUFyZztcbiAgdGhpcy51c2VyID0gdXNlckFyZztcbiAgdGhpcy50b2RvcyA9IFtdO1xuXG4gIHRoaXMuYWRkVG9kbyA9IGZ1bmN0aW9uICh0b2RvVGl0bGVBcmcsIHN0YXRlQXJnID0gMCkge1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyhcbiAgICAgIHR5cGVvZiB0b2RvVGl0bGVBcmcgPT09IFwic3RyaW5nXCIgPyB0b2RvVGl0bGVBcmcgOiB0b2RvVGl0bGVBcmcudmFsdWUsXG4gICAgICB0aGlzLFxuICAgICAgc3RhdGVBcmdcbiAgICApO1xuICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICB0aGlzLnVzZXIucmVuZGVyVG9kb0xpc3QoKTtcbiAgICByZXR1cm4gdG9kbztcbiAgfTtcblxuICB0aGlzLmRlbGV0ZVRvZG8gPSBmdW5jdGlvbiAodG9kb1RpdGxlQXJnKSB7XG4gICAgY29uc3QgdG9kbyA9IHRoaXMudG9kb3MuZmluZCgodG9kbykgPT4ge1xuICAgICAgdG9kby50b2RvVGl0bGUgPT09IHRvZG9UaXRsZUFyZztcbiAgICB9KTtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudG9kb3MuaW5kZXhPZih0b2RvKTtcbiAgICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy51c2VyLnJlbmRlclRvZG9MaXN0KCk7XG4gIH07XG5cbiAgdGhpcy5yZW5kZXJQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFuVG9kb3MoKTtcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3NcIik7XG5cbiAgICB0aGlzLnRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgICAgY29uc3QgdG9kb0RpdiA9IHRvZG8ucmVuZGVyVG9kbygpO1xuICAgICAgdG9kb3MuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBlbXB0eVRvZG8gPSB0aGlzLnJlbmRlckVtcHR5VG9kbygpO1xuICAgIHRvZG9zLmFwcGVuZENoaWxkKGVtcHR5VG9kbyk7XG4gIH07XG5cbiAgdGhpcy5yZW5kZXJFbXB0eVRvZG8gPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0Rpdi5jbGFzc05hbWUgPSBcInRvZG9cIjtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgICB0aXRsZS5wbGFjZWhvbGRlciA9IFwiRG8gaG9tZXdvcmtcIjtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGFkZEljb24uc3JjID0gYWRkSWNvblNyYztcbiAgICBhZGRJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmFkZFRvZG8uYmluZCh0aGlzLCB0aXRsZSwgMCkpO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoYWRkSWNvbik7XG5cbiAgICByZXR1cm4gdG9kb0RpdjtcbiAgfTtcbn1cbiIsImltcG9ydCBkZWxldGVJY29uU3JjIGZyb20gXCIuL2ljb25zL2RlbGV0ZS5wbmdcIjtcbmltcG9ydCBkZXNjcmlwdGlvbkljb25TcmMgZnJvbSBcIi4vaWNvbnMvZGVzY3JpcHRpb24ucG5nXCI7XG5pbXBvcnQgY2xvc2VJY29uU3JjIGZyb20gXCIuL2ljb25zL2Nsb3NlLnBuZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gVG9kbyhcbiAgdGl0bGVBcmcgPSBcIlwiLFxuICBwcm9qZWN0QXJnLFxuICBzdGF0ZUFyZyA9IDAsXG4gIGRlc2NyaXB0aW9uQXJnID0gXCJcIixcbiAgZHVlQXJnID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMCksXG4gIHByaW9yaXR5QXJnID0gMFxuKSB7XG4gIHRoaXMudG9kb1RpdGxlID0gdGl0bGVBcmc7XG4gIHRoaXMucHJvamVjdCA9IHByb2plY3RBcmc7XG4gIHRoaXMuc3RhdGUgPSBzdGF0ZUFyZztcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uQXJnO1xuICB0aGlzLmR1ZSA9IGR1ZUFyZztcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5QXJnO1xuXG4gIHRoaXMucmVuZGVyVG9kbyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvRGl2LmNsYXNzTmFtZSA9IFwidG9kb1wiO1xuXG4gICAgY29uc3Qgc3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3RhdGUudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBzdGF0ZS5jaGVja2VkID0gdGhpcy5zdGF0ZTtcbiAgICBzdGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMuY2hhbmdlVG9kb1N0YXRlLmJpbmQodGhpcywgc3RhdGUpKTtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHN0YXRlKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgICB0aXRsZS52YWx1ZSA9IHRoaXMudG9kb1RpdGxlO1xuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5jaGFuZ2VUb2RvVGl0bGUuYmluZCh0aGlzLCB0aXRsZSkpO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGR1ZS50eXBlID0gXCJkYXRlXCI7XG4gICAgZHVlLnZhbHVlID0gdGhpcy5kdWU7XG4gICAgZHVlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5jaGFuZ2VEdWVEYXRlLmJpbmQodGhpcywgZHVlKSk7XG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChkdWUpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBkZXNjcmlwdGlvbkljb24uc3JjID0gZGVzY3JpcHRpb25JY29uU3JjO1xuICAgIGRlc2NyaXB0aW9uSWNvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgdGhpcy5kaXNwbGF5RGVzY3JpcHRpb25Gb3JtLmJpbmQodGhpcylcbiAgICApO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JY29uKTtcblxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRlbGV0ZUljb24uc3JjID0gZGVsZXRlSWNvblNyYztcbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICB0aGlzLnByb2plY3QuZGVsZXRlVG9kby5iaW5kKHRoaXMucHJvamVjdCwgdGhpcy50b2RvVGl0bGUpXG4gICAgKTtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgIHJldHVybiB0b2RvRGl2O1xuICB9O1xuXG4gIHRoaXMuZGlzcGxheURlc2NyaXB0aW9uRm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uLWZvcm1cIjtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICAgIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY2xvc2VJY29uLnNyYyA9IGNsb3NlSWNvblNyYztcbiAgICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZURlc2NyaXB0aW9uRm9ybSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSB0aGlzLnRvZG9UaXRsZTtcbiAgICBsYWJlbC5mb3IgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjcmlwdGlvbi5pZCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiRGVzY3JpYmUgdGFzay4uLlwiO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICBkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGlmIChkZXNjcmlwdGlvbi52YWx1ZSAhPSB0aGlzLmRlc2NyaXB0aW9uKVxuICAgICAgICBzYXZlQnRuLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmVkXCIpO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHNhdmVCdG4uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiAjMDgxZjJjXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc2F2ZUJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICBzYXZlQnRuLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XG4gICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VEZXNjcmlwdGlvbihkZXNjcmlwdGlvbik7XG4gICAgICBzYXZlQnRuLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogIzA4MWYyY1wiKTtcbiAgICB9KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHNhdmVCdG4pO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfTtcblxuICB0aGlzLmNoYW5nZURlc2NyaXB0aW9uID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGlucHV0LnZhbHVlO1xuICB9O1xuXG4gIHRoaXMuY2hhbmdlVG9kb1N0YXRlID0gZnVuY3Rpb24gKGNoZWNrYm94KSB7XG4gICAgdGhpcy5zdGF0ZSA9IGNoZWNrYm94LmNoZWNrZWQ7XG4gIH07XG5cbiAgdGhpcy5jaGFuZ2VUb2RvVGl0bGUgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICB0aGlzLnRvZG9UaXRsZSA9IGlucHV0LnZhbHVlO1xuICB9O1xuXG4gIHRoaXMuY2hhbmdlRHVlRGF0ZSA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHRoaXMuZHVlID0gaW5wdXQudmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURlc2NyaXB0aW9uRm9ybSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbkZvcm1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uLWZvcm1cIik7XG4gIGJvZHkucmVtb3ZlQ2hpbGQoZGVzY3JpcHRpb25Gb3JtRGl2KTtcbn1cbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgY2xvc2VJY29uU3JjIGZyb20gXCIuL2ljb25zL2Nsb3NlLnBuZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gVXNlcihuYW1lQXJnKSB7XG4gIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgdGhpcy5uYW1lID0gbmFtZUFyZztcbiAgdGhpcy5jdXJyZW50UHJvamVjdCA9IHRoaXMucHJvamVjdHNbMF07XG5cbiAgdGhpcy5hZGRQcm9qZWN0ID0gZnVuY3Rpb24gKHRpdGxlQXJnKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlQXJnLCB0aGlzKTtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5yZW5kZXJUb2RvTGlzdCgpO1xuICAgIHJldHVybiBwcm9qZWN0O1xuICB9O1xuXG4gIHRoaXMuZGVsZXRlUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMuY3VycmVudFByb2plY3QgPSB0aGlzLnByb2plY3RzWzBdO1xuICAgIHRoaXMucmVuZGVyVG9kb0xpc3QoKTtcbiAgfTtcblxuICB0aGlzLnJlbmRlclNpZGViYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHRoaXMucHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5wcm9qZWN0VGl0bGU7XG4gICAgICBsaS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICAgIHByb2plY3REaXYucGFyZW50Tm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvamVjdC5yZW5kZXJQcm9qZWN0KCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkZWxldGVJY29uLnRleHRDb250ZW50ID0gXCItXCI7XG4gICAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgdGhpcy5kZWxldGVQcm9qZWN0LmJpbmQodGhpcywgcHJvamVjdClcbiAgICAgICk7XG4gICAgICBsaS5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0xpc3QpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICBuZXdQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiO1xuICAgIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlQcm9qZWN0Rm9ybSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnRuKTtcbiAgfTtcblxuICB0aGlzLnN1Ym1pdFByb2plY3RGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCJkaXYubmV3LXByb2plY3QgZm9ybSBpbnB1dCN0aXRsZVwiXG4gICAgKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIHRoaXMuYWRkUHJvamVjdChwcm9qZWN0VGl0bGUpO1xuICB9O1xuXG4gIHRoaXMuaW5pdFByb2plY3RGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1mb3JtXCIpO1xuICAgIGNsb3NlQnRuLnNyYyA9IGNsb3NlSWNvblNyYztcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVByb2plY3RGb3JtKTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3RcIik7XG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnN1Ym1pdFByb2plY3RGb3JtLmJpbmQodGhpcykpO1xuICB9O1xuXG4gIHRoaXMuaW5pdFByb2plY3RGb3JtKCk7XG5cbiAgdGhpcy5yZW5kZXJUb2RvTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhblNpZGViYXIoKTtcbiAgICBjbGVhblRvZG9zKCk7XG4gICAgdGhpcy5yZW5kZXJTaWRlYmFyKCk7XG4gICAgaWYgKHRoaXMuY3VycmVudFByb2plY3QpIHRoaXMuY3VycmVudFByb2plY3QucmVuZGVyUHJvamVjdCgpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lm5ldy1wcm9qZWN0XCIpO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogZmxleFwiKTtcbn1cblxuZnVuY3Rpb24gaGlkZVByb2plY3RGb3JtKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5uZXctcHJvamVjdFwiKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmVcIik7XG59XG5cbmZ1bmN0aW9uIGNsZWFuU2lkZWJhcigpIHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgd2hpbGUgKHNpZGViYXIuZmlyc3RDaGlsZCkge1xuICAgIHNpZGViYXIucmVtb3ZlQ2hpbGQoc2lkZWJhci5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5Ub2RvcygpIHtcbiAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zXCIpO1xuICB3aGlsZSAodG9kb3MuZmlyc3RDaGlsZCkge1xuICAgIHRvZG9zLnJlbW92ZUNoaWxkKHRvZG9zLmZpcnN0Q2hpbGQpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXJcIjtcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCB1c2VyID0gbmV3IFVzZXIoXCJjdXRlIGtpdHRlblwiKTtcbnVzZXIucmVuZGVyVG9kb0xpc3QoKTtcbmNvbnN0IGZpdG5lc3MgPSB1c2VyLmFkZFByb2plY3QoXCJGaXRuZXNzXCIpO1xuZml0bmVzcy5hZGRUb2RvKFwiZG8gdXBwZXIgYm9keVwiKTtcbmZpdG5lc3MuYWRkVG9kbyhcImRyaW5rIHByb3RlaW4gc2hha2VcIik7XG5cbmNvbnN0IHByb2dyYW1taW5nID0gdXNlci5hZGRQcm9qZWN0KFwiUHJvZ3JhbW1pbmdcIik7XG5wcm9ncmFtbWluZy5hZGRUb2RvKFwiY29tcGxldGUgdGljIHRhYyB0b2VcIiwgMSk7XG5wcm9ncmFtbWluZy5hZGRUb2RvKFwibGVhcm4gd2VicGFja1wiLCAxKTtcbnByb2dyYW1taW5nLmFkZFRvZG8oXCJsZWFybiByZWFjdFwiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==