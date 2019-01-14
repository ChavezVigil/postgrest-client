(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("superagent"));
	else if(typeof define === 'function' && define.amd)
		define(["superagent"], factory);
	else if(typeof exports === 'object')
		exports["postgrestClient"] = factory(require("superagent"));
	else
		root["postgrestClient"] = factory(root["superagent"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "superagent"
var external_superagent_ = __webpack_require__(0);

// CONCATENATED MODULE: ./lib/ApiRequest.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var contentRangeStructure = /^(\d+)-(\d+)\/(\d+)$/;
/**
 * A request building object which contains convenience methods for
 * communicating with a PostgREST server.
 *
 * @class
 * @param {string} The HTTP method of the request.
 * @param {string} The path to the request.
 */

var ApiRequest =
/*#__PURE__*/
function (_Request) {
  _inherits(ApiRequest, _Request);

  function ApiRequest(method, path) {
    var _this;

    _classCallCheck(this, ApiRequest);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ApiRequest).call(this, method, path));

    _this.set('Accept', 'application/json'); // Fix for superagent disconnect on client & server.


    if (!_this.get) {
      _this.get = _this.getHeader;
    }

    return _this;
  }
  /**
   * Set auth using special formats. If only one string paramter is passed, it
   * is interpreted as a bearer token. If an object and nothing else is passed,
   * `user` and `pass` keys are extracted from it and used for basic auth.
   *
   * @param {string|object} The user, bearer token, or user/pass object.
   * @param {string|void} The pass or undefined.
   * @returns {ApiRequest} The API request object.
   */


  _createClass(ApiRequest, [{
    key: "auth",
    value: function auth(user, pass) {
      if (typeof user === 'string' && pass == null) {
        this.set('Authorization', "Bearer ".concat(user));
        return this;
      }

      if (_typeof(user) === 'object' && pass == null) {
        pass = user.pass;
        user = user.user;
      }

      return _get(_getPrototypeOf(ApiRequest.prototype), "auth", this).call(this, user, pass);
    }
    /**
     * Takes a query object and translates it to a PostgREST filter query string.
     * All values are prefixed with `eq.`.
     *
     * @param {object} The object to match against.
     * @returns {ApiRequest} The API request object.
     */

  }, {
    key: "match",
    value: function match(query) {
      var newQuery = {};
      Object.keys(query).forEach(function (key) {
        return newQuery[key] = "eq.".concat(query[key]);
      });
      return this.query(newQuery);
    }
    /**
     * Cleans up a select string by stripping all whitespace. Then the string is
     * set as a query string value. Also always forces a root @id column.
     *
     * @param {string} The unformatted select string.
     * @returns {ApiRequest} The API request object.
     */

  }, {
    key: "select",
    value: function select(_select) {
      if (_select) {
        this.query({
          select: _select.replace(/\s/g, '')
        });
      }

      return this;
    }
    /**
     * Tells PostgREST in what order the result should be returned.
     *
     * @param {string} The property name to order by.
     * @param {bool} True for descending results, false by default.
     * @param {bool} True for nulls first, false by default.
     * @returns {ApiRequest} The API request object.
     */

  }, {
    key: "order",
    value: function order(property) {
      var ascending = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var nullsFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.query("order=".concat(property, ".").concat(ascending ? 'asc' : 'desc', ".").concat(nullsFirst ? 'nullsfirst' : 'nullslast'));
      return this;
    }
    /**
     * Specify a range of items for PostgREST to return. If the second value is
     * not defined, the rest of the collection will be sent back.
     *
     * @param {number} The first object to select.
     * @param {number|void} The last object to select.
     * @returns {ApiRequest} The API request object.
     */

  }, {
    key: "range",
    value: function range(from, to) {
      this.set('Range-Unit', 'items');
      this.set('Range', "".concat(from || 0, "-").concat(to || ''));
      this.set('Prefer', 'count=exact'); // Will return total number of items in response headers.

      return this;
    }
    /**
     * Sets the header which signifies to PostgREST the response must be a single
     * object or 404.
     *
     * @returns {ApiRequest} The API request object.
     */

  }, {
    key: "single",
    value: function single() {
      return this.set('Accept', 'application/vnd.pgrst.object+json');
    }
    /**
     * Sends the request and returns a promise. The super class uses the errback
     * pattern, but this function overrides that preference to use a promise.
     *
     * @returns {Promise} Resolves when the request has completed.
     */

  }, {
    key: "end",
    value: function end() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        return _get(_getPrototypeOf(ApiRequest.prototype), "end", _this2).call(_this2, function (error, response) {
          if (error) {
            return reject(error);
          }

          var body = response.body,
              headers = response.headers;
          var contentRange = headers['content-range'];

          if (Array.isArray(body) && contentRange && contentRangeStructure.test(contentRange)) {
            body.fullLength = parseInt(contentRangeStructure.exec(contentRange)[3], 10);
          }

          return resolve(body);
        });
      });
    }
    /**
     * Makes the ApiRequest object then-able. Allows for usage with
     * `Promise.resolve` and async/await contexts. Just a proxy for `.then()` on
     * the promise returned from `.end()`.
     *
     * @param {function} Called when the request resolves.
     * @param {function} Called when the request errors.
     * @returns {Promise} Resolves when the resolution resolves.
     */

  }, {
    key: "then",
    value: function then(resolve, reject) {
      return this.end().then(resolve, reject);
    }
    /**
     * Just a proxy for `.catch()` on the promise returned from `.end()`.
     *
     * @param {function} Called when the request errors.
     * @returns {Promise} Resolves when there is an error.
     */

  }, {
    key: "catch",
    value: function _catch(reject) {
      return this.end().catch(reject);
    }
  }]);

  return ApiRequest;
}(external_superagent_["Request"]);
/**
 * For all of the PostgREST filters add a shortcut method to use it.
 *
 * @param {string} The name of the column.
 * @param {any} The value of the column to be filtered.
 * @returns {ApiRequest} The API request object.
 */


var filters = ['eq', 'gt', 'lt', 'gte', 'lte', 'like', 'ilike', 'is', 'in', 'not'];
filters.forEach(function (filter) {
  return ApiRequest.prototype[filter] = function filterValue(name, value) {
    return this.query("".concat(name, "=").concat(filter, ".").concat(Array.isArray(value) ? value.join(',') : value));
  };
});
/* harmony default export */ var lib_ApiRequest = (ApiRequest);
// CONCATENATED MODULE: ./lib/Api.js
function Api_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Api_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Api_createClass(Constructor, protoProps, staticProps) { if (protoProps) Api_defineProperties(Constructor.prototype, protoProps); if (staticProps) Api_defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Creates a new PostgREST API object. Use this to start building PostgREST
 * requests.
 *
 * @class
 * @param {string} The base URL of the API.
 */

var Api_Api =
/*#__PURE__*/
function () {
  // TODO: Use an `OPTIONS *` request to get the server version to output
  // warnings for unsupported features.
  function Api(url) {
    Api_classCallCheck(this, Api);

    this.url = url;
  }
  /**
   * Convenience wrapper for starting a PostgREST request builder. Adds the
   * API URL to the provided path.
   *
   * @param {string} The HTTP method of the request.
   * @param {string} The path of the request.
   * @returns {ApiRequest} The API request object.
   */


  Api_createClass(Api, [{
    key: "request",
    value: function request(method, path) {
      return new lib_ApiRequest(method, this.url + path);
    }
  }]);

  return Api;
}();
/**
 * Basic HTTP method functions for quick chaining.
 *
 * @param {string} The path of the request.
 * @returns {ApiRequest} The API request object.
 */


var methods = ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'];
methods.forEach(function (method) {
  return Api_Api.prototype[method.toLowerCase()] = function requestMethod(path) {
    return this.request(method, path);
  };
});
/* harmony default export */ var lib_Api = (Api_Api);
// CONCATENATED MODULE: ./lib/index.js


/* harmony default export */ var lib = __webpack_exports__["default"] = (lib_Api);

/***/ })
/******/ ]);
});