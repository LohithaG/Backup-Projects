webpackJsonp([24,49],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(1001);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);

	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 1001:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 1006:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(458);


/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(689);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1000)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(461)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,300,400,700);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n\n\n/* #GOOGLE FONT */\n.has-error .checkbox,\n.has-error .checkbox-inline,\n.has-error .control-label,\n.has-error .help-block,\n.has-error .radio,\n.has-error .radio-inline,\n.has-error.checkbox label,\n.has-error.checkbox-inline label,\n.has-error.radio label,\n.has-error.radio-inline label {\n  color: #ff0000 !important;\n}\n\n.has-error input[type=text],\n.has-error input[type=text]+.input-group-addon {\n  border-color: #BDBDBD !important;\n}\n\n.calendar-EventFont {\n  padding: 3px 0 2px 3px;\n  line-height: 16px;\n  font-weight: 700;\n  font-size: 11px;\n}\n\n.fc-more-popover .fc-header {\n  background: rgba(0, 0, 0, .5) !important;\n}\n\n.fc-more-popover {\n  border-color: rgba(0, 0, 0, .67) !important;\n}\n\n.fc-more-popover .fc-header .fc-close {\n  color: rgba(255, 255, 255, .5) !important;\n}\n\n.fc-more-popover .fc-widget-content {\n  background: rgba(0, 0, 0, .85) !important;\n}\n\n.fc-list-item-title a {\n  color: #fff !important;\n}\n\n.calendar-ion-position {\n  float: right;\n}\n\nno-padding {\n  padding: 0px !important;\n}\n\n\n/*.fc-list-heading .*/\n\n.fc-list-table .fc-widget-content,\n.fc-list-table td {\n  padding: 8px;\n}\n\n.fc-scroller {\n  height: 100% !important;\n}\n\n.fc-list-table {\n  table-layout: auto !important;\n}\n\n.fc-list-heading {\n  font-weight: bold\n}\n\ntd.fc-day.fc-past {\n  background-color: rgba(34, 34, 34, 0.5);\n}\n\n@media only screen and (max-width: 479px) and (min-width: 320px) {\n  .fc-event .fa {\n    font-size: 8px !important;\n  }\n  .calendar-EventFont {\n    padding: 3px 0 2px 3px;\n    line-height: 10px;\n    font-weight: 700;\n    font-size: 7px;\n  }\n  /*mobile header logo and logo title*/\n  .logoName {\n    padding-right: 44px;\n  }\n}\n\n\n/*templates edit notepad editor*/\n\n.no-padding .note-editor {\n  border: 1px solid #a9a9a9 !important\n}\n\n\n/*logo in header for medium and large devices*/\n\n@media only screen and (min-width: 479px) {\n  .logoName {\n    padding-right: 90px;\n  }\n}\n\n.logoBox {\n  padding: 10px;\n}\n\n.logoName {\n  font-size: 18px;\n  color: #CB5230;\n  font-family: sans-serif;\n}\n\n.logoImage {\n  width: 50px !important;\n  height: 32px !important;\n  margin-bottom: 4px;\n}\n\n\n/*health charts*/\n\n.highcharts-container {\n  width: 100% !important;\n}\n\n.highcharts-root {\n  width: 100% !important;\n}\n\n.select2-container-multi .select2-choices .select2-search-choice,\n.select2-selection__choice {\n  padding: 1px 28px 1px 8px !important;\n  margin: 4px 0 3px 5px !important;\n  position: relative !important;\n  line-height: 18px;\n  color: #fff;\n  cursor: default;\n  border: 1px solid #2a6395;\n}\n\n.select2-container-multi .select2-choices,\n.select2-selection--multiple {\n  border: 1px solid #ccc !important;\n}\n\n.select2-selection__choice__remove {\n  line-height: 1.3 !important;\n}\n\n.customTemplateEditorEnhancement .modal .modal-dialog {\n  margin: auto !important;\n  top: 15%;\n}\n\n.customTemplateEditorEnhancement .modal .modal-content {\n  padding: 10px;\n}\n\n.customTemplateEditorEnhancement .modal .modal-content .modal-body .form-group {\n  padding: 10px;\n}\n\n.customTemplateEditorEnhancement .modal .modal-content .modal-body .checkbox {\n  display: none;\n}\n\n.customTemplateEditorEnhancement .modal .modal-footer .btn {\n  margin-top: 7px;\n  padding: 7px;\n}\n\n.fc-event .fc-title {\n  display: block;\n}\n\n\n/*div.loading{\n    height: 100px;\n    background-color: red;\n    display: none;\n}*/\n\nrouter-outlet+div.loading {\n  display: block;\n}\n\ndiv.loading {\n  position: static;\n  width: 40px;\n  height: 40px;\n  background-color: #2a6395;\n  margin: 300px auto;\n  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n  animation: sk-rotateplane 1.2s infinite ease-in-out;\n  display: none;\n}\n\n@-webkit-keyframes sk-rotateplane {\n  0% {\n    -webkit-transform: perspective(120px)\n  }\n  50% {\n    -webkit-transform: perspective(120px) rotateY(180deg)\n  }\n  100% {\n    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg)\n  }\n}\n\n@keyframes sk-rotateplane {\n  0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)\n  }\n  50% {\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n  }\n  100% {\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n  }\n}\n\n.margin {\n  margin: 10px;\n}\n\n\n/* To show data table list count*/\n\ndiv.dataTables_info {\n  display: inline-block;\n}\n\n.dataTableCustomButtonMargin {\n  margin-right: 10px;\n}\n\n\n/*notification module select2 disable*/\n\n.customSelect2DisableStyle .select2-selection--multiple {\n  background-color: #eee;\n  opacity: 0.8\n}\n\n\n/*template help tooltip*/\n\n.customPaddingPopOver .popover .popover-title,\n.customPaddingPopOver .popover .popover-content {\n  padding: 8px 14px 10px 20px !important;\n}\n\n.customPaddingPopOver .popover .popover-title {\n  font-weight: 700;\n}\n\n\n/*data table empty default color change*/\n\n.smart-style-5 .dataTables_empty {\n  color: #fff\n}\n\n\n/* input placeholder colors */\n\n ::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #e6e1e1!important;\n}\n\n:-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #e6e1e1 !important;\n  opacity: 1;\n  /* Firefox */\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #e6e1e1 !important;\n  opacity: 1;\n  /* Firefox */\n}\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #e6e1e1 !important;\n}\n\n:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #e6e1e1 !important;\n}\n\ninput::-webkit-input-placeholder {\n  color: #e6e1e1 !important;\n}\n\ninput:-ms-input-placeholder {\n  color: #e6e1e1 !important;\n}\n\ninput::placeholder {\n  color: #e6e1e1 !important;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #c8c8ce !important;\n}\n\n.mydp,\n.mydp .headertodaybtn,\n.mydp .selection,\n.mydp .selectiongroup,\n.mydp .selector {\n  border-radius: 0px !important;\n}\n\n.mydp .selection,\n.mydp .selectiongroup,\n.mydp .btnclear,\n.mydp .btndecrease,\n.mydp .btnincrease,\n.mydp .btnpicker,\n.mydp .headertodaybtn {\n  background: rgba(255, 255, 255, .2) !important;\n  border-color: rgba(255, 255, 255, .4) !important;\n  color: none;\n}\n", ""]);

// exports


/***/ })

},[1006]);
//# sourceMappingURL=styles.bundle.js.map