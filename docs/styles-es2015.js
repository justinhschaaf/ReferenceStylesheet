(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Major+Mono+Display|Overpass);"]);
// Module
exports.push([module.i, "* {\n  margin: 0;\n  font-family: \"Overpass\", \"Segoe UI Emoji\", sans-serif;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Major Mono Display\", \"Segoe UI Emoji\", monospace;\n}\nbody {\n  margin: 0px;\n  padding: 0px;\n  background-color: #ffffff;\n}\n.color-picker {\n  border: none !important;\n}\nbutton {\n  margin: 8pt auto;\n  padding: 8pt;\n  max-width: 160pt;\n  width: 50%;\n  min-width: 80pt;\n  background-color: #fff;\n  box-shadow: 0pt 3pt 8pt rgba(0, 0, 0, 0.2);\n  border: none;\n}\n.card {\n  margin: 16pt auto;\n  padding: 16pt;\n  max-width: 30%;\n  min-width: 192pt;\n  background-color: #fff;\n  box-shadow: 0pt 3pt 8pt rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n.card h1, .card h2, .card h3, .card h4, .card h5, .card h6 {\n  text-align: center;\n}\n.card .card-start {\n  justify-self: flex-start;\n  margin: 0 auto auto auto;\n}\n.card .card-content {\n  justify-self: center;\n  text-align: left;\n  margin: auto;\n}\n.card .card-end {\n  justify-self: flex-end;\n  margin: auto auto 0 auto;\n}\n.hoverable {\n  transition: 0.25s;\n}\n.hoverable:hover {\n  -webkit-animation-name: hover;\n          animation-name: hover;\n  -webkit-animation-duration: 0.25s;\n          animation-duration: 0.25s;\n  transform: translateY(-16pt);\n  box-shadow: 0pt 6pt 16pt rgba(0, 0, 0, 0.2) !important;\n}\n@-webkit-keyframes hover {\n  from {\n    transform: translateY(0pt);\n    box-shadow: 0pt 3pt 8pt rgba(0, 0, 0, 0.2) !important;\n  }\n  to {\n    transform: translateY(-16pt);\n    box-shadow: 0pt 6pt 16pt rgba(0, 0, 0, 0.2) !important;\n  }\n}\n@keyframes hover {\n  from {\n    transform: translateY(0pt);\n    box-shadow: 0pt 3pt 8pt rgba(0, 0, 0, 0.2) !important;\n  }\n  to {\n    transform: translateY(-16pt);\n    box-shadow: 0pt 6pt 16pt rgba(0, 0, 0, 0.2) !important;\n  }\n}", "",{"version":3,"sources":["styles.scss","vars.scss"],"names":[],"mappings":"AAIA;EACI,SAAA;EACA,qDAAA;AAFJ;AAKA;EACI,8DAAA;AAFJ;AAKA;EACI,WAAA;EACA,YAAA;EACA,yBAAA;AAFJ;AAKA;EAEI,uBAAA;AAHJ;AASA;EAEI,gBAAA;EACA,YAAA;EACA,gBAAA;EACA,UAAA;EACA,eAAA;EAEA,sBClCU;EDmCV,0CC/BK;EDiCL,YAAA;AATJ;AAeA;EAEI,iBAAA;EACA,aAAA;EACA,cAAA;EACA,gBAAA;EAGA,sBCnDU;EDoDV,0CChDK;EDkDL,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,uBAAA;EACA,iBAAA;AAhBJ;AAkBI;EACI,kBAAA;AAhBR;AAmBI;EACI,wBAAA;EACA,wBAAA;AAjBR;AAoBI;EACI,oBAAA;EACA,gBAAA;EACA,YAAA;AAlBR;AAqBI;EACI,sBAAA;EACA,wBAAA;AAnBR;AAwBA;EACI,iBC5Ec;ADuDlB;AAwBA;EAEI,6BAAA;UAAA,qBAAA;EACA,iCClFc;UDkFd,yBClFc;EDoFd,4BAAA;EAEA,sDAAA;AAxBJ;AA+BA;EAEI;IACI,0BAAA;IAEA,qDAAA;EA9BN;EAiCE;IACI,4BAAA;IAEA,sDAAA;EAhCN;AACF;AAoBA;EAEI;IACI,0BAAA;IAEA,qDAAA;EA9BN;EAiCE;IACI,4BAAA;IAEA,sDAAA;EAhCN;AACF","file":"styles.scss","sourcesContent":["\r\n@import url('https://fonts.googleapis.com/css?family=Major+Mono+Display|Overpass');\r\n@import './vars';\r\n\r\n* {\r\n    margin: 0;\r\n    font-family: 'Overpass', 'Segoe UI Emoji', sans-serif;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    font-family: 'Major Mono Display', 'Segoe UI Emoji', monospace;\r\n}\r\n\r\nbody {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.color-picker {\r\n\r\n    border: none !important;\r\n\r\n}\r\n\r\n// Button\r\n\r\nbutton {\r\n\r\n    margin: 8pt auto;\r\n    padding: 8pt;\r\n    max-width: 160pt;\r\n    width: 50%;\r\n    min-width: 80pt;\r\n\r\n    background-color: $color-light;\r\n    box-shadow: $shadow;\r\n\r\n    border: none;\r\n\r\n}\r\n\r\n// Card and Hoverable from justinschaaf.com\r\n\r\n.card {\r\n\r\n    margin: 16pt auto;\r\n    padding: 16pt;\r\n    max-width: 30%;\r\n    min-width: 192pt;\r\n    //height: 380pt;\r\n\r\n    background-color: $color-light;\r\n    box-shadow: $shadow;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    justify-content: center;\r\n    flex-wrap: nowrap;\r\n\r\n    h1, h2, h3, h4, h5, h6 {\r\n        text-align: center;\r\n    }\r\n\r\n    .card-start {\r\n        justify-self: flex-start;\r\n        margin: 0 auto auto auto;\r\n    }\r\n\r\n    .card-content {\r\n        justify-self: center;\r\n        text-align: left;\r\n        margin: auto;\r\n    }\r\n\r\n    .card-end {\r\n        justify-self: flex-end;\r\n        margin: auto auto 0 auto;\r\n    }\r\n\r\n}\r\n\r\n.hoverable {\r\n    transition: $transition-time;\r\n}\r\n\r\n.hoverable:hover {\r\n\r\n    animation-name: hover;\r\n    animation-duration: $transition-time;\r\n\r\n    transform: translateY(-16pt);\r\n    //padding: 20pt !important;\r\n    box-shadow: $shadow-hover !important;\r\n\r\n}\r\n\r\n// References used to learn how to do these animations:\r\n// http://www.inwebson.com/css3/nifty-hover-effects-with-css3-animations/\r\n// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations \r\n@keyframes hover {\r\n\r\n    from {\r\n        transform: translateY(0pt);\r\n        //padding: 16pt !important;\r\n        box-shadow: $shadow !important;\r\n    }\r\n  \r\n    to {\r\n        transform: translateY(-16pt);\r\n        //padding: 20pt !important;\r\n        box-shadow: $shadow-hover !important;\r\n    }\r\n\r\n}\r\n","\r\n$color-light: #fff;\r\n$color-medium: #777;\r\n$color-dark: #111;\r\n\r\n$shadow: 0pt 3pt 8pt rgba(0, 0, 0, 0.2);\r\n$shadow-hover: 0pt 6pt 16pt rgba(0, 0, 0, 0.2);\r\n\r\n$transition-time: 0.25s;\r\n\r\n$hover-color-dark: rgba(0, 0, 0, 0.1);\r\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\justi\Programming\justinschaaf.com\colors.justinschaaf.com\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map