"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && (typeof module === "undefined" ? "undefined" : _typeof(module)) === "object") module.exports = factory();else if (typeof define === "function" && define.amd) define("Plugins", [], factory);else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") exports["Plugins"] = factory();else root["Plugins"] = factory();
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {}; // The require function

      /******/

      /******/

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        } // Create a new module (and put it into the cache)

        /******/

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        }; // Execute the module function

        /******/

        /******/

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // Flag the module as loaded

        /******/

        /******/

        /******/

        module.l = true; // Return the exports of the module

        /******/

        /******/

        /******/

        return module.exports;
        /******/
      } // expose the modules object (__webpack_modules__)

      /******/

      /******/

      /******/

      /******/


      __webpack_require__.m = modules; // expose the module cache

      /******/

      /******/

      /******/

      __webpack_require__.c = installedModules; // define getter function for harmony exports

      /******/

      /******/

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      }; // define __esModule on exports

      /******/

      /******/

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        /******/
      }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require

      /******/

      /******/

      /******/

      /******/

      /******/

      /******/

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === "object" && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, "default", {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != "string") for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      }; // getDefaultExport function for compatibility with non-harmony modules

      /******/

      /******/

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module["default"];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, "a", getter);
        /******/


        return getter;
        /******/
      }; // Object.prototype.hasOwnProperty.call

      /******/

      /******/

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      }; // __webpack_public_path__

      /******/

      /******/

      /******/


      __webpack_require__.p = ""; // Load entry module and return exports

      /******/

      /******/

      /******/

      /******/

      return __webpack_require__(__webpack_require__.s = 27);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _AbstractPlugin = __webpack_require__(22);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _AbstractPlugin2["default"];
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _SnappableEvent = __webpack_require__(10);

      Object.keys(_SnappableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _SnappableEvent[key];
          }
        });
      });
      /***/
    },
    /* 2 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _closest = __webpack_require__(21);

      Object.defineProperty(exports, "closest", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_closest)["default"];
        }
      });

      var _requestNextAnimationFrame = __webpack_require__(19);

      Object.defineProperty(exports, "requestNextAnimationFrame", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_requestNextAnimationFrame)["default"];
        }
      });

      var _distance = __webpack_require__(17);

      Object.defineProperty(exports, "distance", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_distance)["default"];
        }
      });

      var _touchCoords = __webpack_require__(15);

      Object.defineProperty(exports, "touchCoords", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_touchCoords)["default"];
        }
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /***/

    },
    /* 3 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _AbstractEvent = __webpack_require__(24);

      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _AbstractEvent2["default"];
      /***/
    },
    /* 4 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _CollidableEvent = __webpack_require__(25);

      Object.keys(_CollidableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _CollidableEvent[key];
          }
        });
      });
      /***/
    },
    /* 5 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      var _AbstractPlugin = __webpack_require__(0);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var onSortableSorted = Symbol("onSortableSorted");
      var onSortableSort = Symbol("onSortableSort");
      /**
       * SortAnimation default options
       * @property {Object} defaultOptions
       * @property {Number} defaultOptions.duration
       * @property {String} defaultOptions.easingFunction
       * @type {Object}
       */

      var defaultOptions = exports.defaultOptions = {
        duration: 150,
        easingFunction: "ease-in-out"
      };
      /**
       * SortAnimation plugin adds sort animation for sortable
       * @class SortAnimation
       * @module SortAnimation
       * @extends AbstractPlugin
       */

      var SortAnimation =
      /*#__PURE__*/
      function (_AbstractPlugin2$defa) {
        _inherits(SortAnimation, _AbstractPlugin2$defa);

        /**
         * SortAnimation constructor.
         * @constructs SortAnimation
         * @param {Draggable} draggable - Draggable instance
         */
        function SortAnimation(draggable) {
          var _this;

          _classCallCheck(this, SortAnimation);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(SortAnimation).call(this, draggable));
          /**
           * SortAnimation options
           * @property {Object} options
           * @property {Number} defaultOptions.duration
           * @property {String} defaultOptions.easingFunction
           * @type {Object}
           */

          _this.options = _extends({}, defaultOptions, _this.getOptions());
          /**
           * Last animation frame
           * @property {Number} lastAnimationFrame
           * @type {Number}
           */

          _this.lastAnimationFrame = null;
          _this.lastElements = [];
          _this[onSortableSorted] = _this[onSortableSorted].bind(_assertThisInitialized(_this));
          _this[onSortableSort] = _this[onSortableSort].bind(_assertThisInitialized(_this));
          return _this;
        }
        /**
         * Attaches plugins event listeners
         */


        _createClass(SortAnimation, [{
          key: "attach",
          value: function attach() {
            this.draggable.on("sortable:sort", this[onSortableSort]);
            this.draggable.on("sortable:sorted", this[onSortableSorted]);
          }
          /**
           * Detaches plugins event listeners
           */

        }, {
          key: "detach",
          value: function detach() {
            this.draggable.off("sortable:sort", this[onSortableSort]);
            this.draggable.off("sortable:sorted", this[onSortableSorted]);
          }
          /**
           * Returns options passed through draggable
           * @return {Object}
           */

        }, {
          key: "getOptions",
          value: function getOptions() {
            return this.draggable.options.sortAnimation || {};
          }
          /**
           * Sortable sort handler
           * @param {SortableSortEvent} sortableEvent
           * @private
           */

        }, {
          key: onSortableSort,
          value: function value(_ref) {
            var dragEvent = _ref.dragEvent;
            var sourceContainer = dragEvent.sourceContainer;
            var elements = this.draggable.getDraggableElementsForContainer(sourceContainer);
            this.lastElements = Array.from(elements).map(function (el) {
              return {
                domEl: el,
                offsetTop: el.offsetTop,
                offsetLeft: el.offsetLeft
              };
            });
          }
          /**
           * Sortable sorted handler
           * @param {SortableSortedEvent} sortableEvent
           * @private
           */

        }, {
          key: onSortableSorted,
          value: function value(_ref2) {
            var _this2 = this;

            var oldIndex = _ref2.oldIndex,
                newIndex = _ref2.newIndex;

            if (oldIndex === newIndex) {
              return;
            }

            var effectedElements = [];
            var start;
            var end;
            var num;

            if (oldIndex > newIndex) {
              start = newIndex;
              end = oldIndex - 1;
              num = 1;
            } else {
              start = oldIndex + 1;
              end = newIndex;
              num = -1;
            }

            for (var i = start; i <= end; i++) {
              var from = this.lastElements[i];
              var to = this.lastElements[i + num];
              effectedElements.push({
                from: from,
                to: to
              });
            }

            cancelAnimationFrame(this.lastAnimationFrame); // Can be done in a separate frame

            this.lastAnimationFrame = requestAnimationFrame(function () {
              effectedElements.forEach(function (element) {
                return animate(element, _this2.options);
              });
            });
          }
        }]);

        return SortAnimation;
      }(_AbstractPlugin2["default"]);

      exports["default"] = SortAnimation;
      /**
       * Animates two elements
       * @param {Object} element
       * @param {Object} element.from
       * @param {Object} element.to
       * @param {Object} options
       * @param {Number} options.duration
       * @param {String} options.easingFunction
       * @private
       */

      function animate(_ref3, _ref4) {
        var from = _ref3.from,
            to = _ref3.to;
        var duration = _ref4.duration,
            easingFunction = _ref4.easingFunction;
        var domEl = from.domEl;
        var x = from.offsetLeft - to.offsetLeft;
        var y = from.offsetTop - to.offsetTop;
        domEl.style.pointerEvents = "none";
        domEl.style.transform = "translate3d(".concat(x, "px, ").concat(y, "px, 0)");
        requestAnimationFrame(function () {
          domEl.addEventListener("transitionend", resetElementOnTransitionEnd);
          domEl.style.transition = "transform ".concat(duration, "ms ").concat(easingFunction);
          domEl.style.transform = "";
        });
      }
      /**
       * Resets animation style properties after animation has completed
       * @param {Event} event
       * @private
       */


      function resetElementOnTransitionEnd(event) {
        event.target.style.transition = "";
        event.target.style.pointerEvents = "";
        event.target.removeEventListener("transitionend", resetElementOnTransitionEnd);
      }
      /***/

    },
    /* 6 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;

      var _SortAnimation = __webpack_require__(5);

      var _SortAnimation2 = _interopRequireDefault(_SortAnimation);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _SortAnimation2["default"];
      exports.defaultOptions = _SortAnimation.defaultOptions;
      /***/
    },
    /* 7 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      var _AbstractPlugin = __webpack_require__(0);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var onSortableSorted = Symbol("onSortableSorted");
      /**
       * SwapAnimation default options
       * @property {Object} defaultOptions
       * @property {Number} defaultOptions.duration
       * @property {String} defaultOptions.easingFunction
       * @property {Boolean} defaultOptions.horizontal
       * @type {Object}
       */

      var defaultOptions = exports.defaultOptions = {
        duration: 150,
        easingFunction: "ease-in-out",
        horizontal: false
      };
      /**
       * SwapAnimation plugin adds swap animations for sortable
       * @class SwapAnimation
       * @module SwapAnimation
       * @extends AbstractPlugin
       */

      var SwapAnimation =
      /*#__PURE__*/
      function (_AbstractPlugin2$defa2) {
        _inherits(SwapAnimation, _AbstractPlugin2$defa2);

        /**
         * SwapAnimation constructor.
         * @constructs SwapAnimation
         * @param {Draggable} draggable - Draggable instance
         */
        function SwapAnimation(draggable) {
          var _this3;

          _classCallCheck(this, SwapAnimation);

          _this3 = _possibleConstructorReturn(this, _getPrototypeOf(SwapAnimation).call(this, draggable));
          /**
           * SwapAnimation options
           * @property {Object} options
           * @property {Number} defaultOptions.duration
           * @property {String} defaultOptions.easingFunction
           * @type {Object}
           */

          _this3.options = _extends({}, defaultOptions, _this3.getOptions());
          /**
           * Last animation frame
           * @property {Number} lastAnimationFrame
           * @type {Number}
           */

          _this3.lastAnimationFrame = null;
          _this3[onSortableSorted] = _this3[onSortableSorted].bind(_assertThisInitialized(_this3));
          return _this3;
        }
        /**
         * Attaches plugins event listeners
         */


        _createClass(SwapAnimation, [{
          key: "attach",
          value: function attach() {
            this.draggable.on("sortable:sorted", this[onSortableSorted]);
          }
          /**
           * Detaches plugins event listeners
           */

        }, {
          key: "detach",
          value: function detach() {
            this.draggable.off("sortable:sorted", this[onSortableSorted]);
          }
          /**
           * Returns options passed through draggable
           * @return {Object}
           */

        }, {
          key: "getOptions",
          value: function getOptions() {
            return this.draggable.options.swapAnimation || {};
          }
          /**
           * Sortable sorted handler
           * @param {SortableSortedEvent} sortableEvent
           * @private
           */

        }, {
          key: onSortableSorted,
          value: function value(_ref5) {
            var _this4 = this;

            var oldIndex = _ref5.oldIndex,
                newIndex = _ref5.newIndex,
                dragEvent = _ref5.dragEvent;
            var source = dragEvent.source,
                over = dragEvent.over;
            cancelAnimationFrame(this.lastAnimationFrame); // Can be done in a separate frame

            this.lastAnimationFrame = requestAnimationFrame(function () {
              if (oldIndex >= newIndex) {
                animate(source, over, _this4.options);
              } else {
                animate(over, source, _this4.options);
              }
            });
          }
        }]);

        return SwapAnimation;
      }(_AbstractPlugin2["default"]);

      exports["default"] = SwapAnimation;
      /**
       * Animates two elements
       * @param {HTMLElement} from
       * @param {HTMLElement} to
       * @param {Object} options
       * @param {Number} options.duration
       * @param {String} options.easingFunction
       * @param {String} options.horizontal
       * @private
       */

      function animate(from, to, _ref6) {
        var duration = _ref6.duration,
            easingFunction = _ref6.easingFunction,
            horizontal = _ref6.horizontal;

        for (var _i = 0, _arr = [from, to]; _i < _arr.length; _i++) {
          var element = _arr[_i];
          element.style.pointerEvents = "none";
        }

        if (horizontal) {
          var width = from.offsetWidth;
          from.style.transform = "translate3d(".concat(width, "px, 0, 0)");
          to.style.transform = "translate3d(-".concat(width, "px, 0, 0)");
        } else {
          var height = from.offsetHeight;
          from.style.transform = "translate3d(0, ".concat(height, "px, 0)");
          to.style.transform = "translate3d(0, -".concat(height, "px, 0)");
        }

        requestAnimationFrame(function () {
          for (var _i2 = 0, _arr2 = [from, to]; _i2 < _arr2.length; _i2++) {
            var element = _arr2[_i2];
            element.addEventListener("transitionend", resetElementOnTransitionEnd);
            element.style.transition = "transform ".concat(duration, "ms ").concat(easingFunction);
            element.style.transform = "";
          }
        });
      }
      /**
       * Resets animation style properties after animation has completed
       * @param {Event} event
       * @private
       */


      function resetElementOnTransitionEnd(event) {
        event.target.style.transition = "";
        event.target.style.pointerEvents = "";
        event.target.removeEventListener("transitionend", resetElementOnTransitionEnd);
      }
      /***/

    },
    /* 8 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;

      var _SwapAnimation = __webpack_require__(7);

      var _SwapAnimation2 = _interopRequireDefault(_SwapAnimation);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _SwapAnimation2["default"];
      exports.defaultOptions = _SwapAnimation.defaultOptions;
      /***/
    },
    /* 9 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _AbstractPlugin = __webpack_require__(0);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      var _SnappableEvent = __webpack_require__(1);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var onDragStart = Symbol("onDragStart");
      var onDragStop = Symbol("onDragStop");
      var onDragOver = Symbol("onDragOver");
      var onDragOut = Symbol("onDragOut");
      var onMirrorCreated = Symbol("onMirrorCreated");
      var onMirrorDestroy = Symbol("onMirrorDestroy");
      /**
       * Snappable plugin which snaps draggable elements into place
       * @class Snappable
       * @module Snappable
       * @extends AbstractPlugin
       */

      var Snappable =
      /*#__PURE__*/
      function (_AbstractPlugin2$defa3) {
        _inherits(Snappable, _AbstractPlugin2$defa3);

        /**
         * Snappable constructor.
         * @constructs Snappable
         * @param {Draggable} draggable - Draggable instance
         */
        function Snappable(draggable) {
          var _this5;

          _classCallCheck(this, Snappable);

          _this5 = _possibleConstructorReturn(this, _getPrototypeOf(Snappable).call(this, draggable));
          /**
           * Keeps track of the first source element
           * @property {HTMLElement|null} firstSource
           */

          _this5.firstSource = null;
          /**
           * Keeps track of the mirror element
           * @property {HTMLElement} mirror
           */

          _this5.mirror = null;
          _this5[onDragStart] = _this5[onDragStart].bind(_assertThisInitialized(_this5));
          _this5[onDragStop] = _this5[onDragStop].bind(_assertThisInitialized(_this5));
          _this5[onDragOver] = _this5[onDragOver].bind(_assertThisInitialized(_this5));
          _this5[onDragOut] = _this5[onDragOut].bind(_assertThisInitialized(_this5));
          _this5[onMirrorCreated] = _this5[onMirrorCreated].bind(_assertThisInitialized(_this5));
          _this5[onMirrorDestroy] = _this5[onMirrorDestroy].bind(_assertThisInitialized(_this5));
          return _this5;
        }
        /**
         * Attaches plugins event listeners
         */


        _createClass(Snappable, [{
          key: "attach",
          value: function attach() {
            this.draggable.on("drag:start", this[onDragStart]).on("drag:stop", this[onDragStop]).on("drag:over", this[onDragOver]).on("drag:out", this[onDragOut]).on("droppable:over", this[onDragOver]).on("droppable:out", this[onDragOut]).on("mirror:created", this[onMirrorCreated]).on("mirror:destroy", this[onMirrorDestroy]);
          }
          /**
           * Detaches plugins event listeners
           */

        }, {
          key: "detach",
          value: function detach() {
            this.draggable.off("drag:start", this[onDragStart]).off("drag:stop", this[onDragStop]).off("drag:over", this[onDragOver]).off("drag:out", this[onDragOut]).off("droppable:over", this[onDragOver]).off("droppable:out", this[onDragOut]).off("mirror:created", this[onMirrorCreated]).off("mirror:destroy", this[onMirrorDestroy]);
          }
          /**
           * Drag start handler
           * @private
           * @param {DragStartEvent} event - Drag start event
           */

        }, {
          key: onDragStart,
          value: function value(event) {
            if (event.canceled()) {
              return;
            }

            this.firstSource = event.source;
          }
          /**
           * Drag stop handler
           * @private
           * @param {DragStopEvent} event - Drag stop event
           */

        }, {
          key: onDragStop,
          value: function value() {
            this.firstSource = null;
          }
          /**
           * Drag over handler
           * @private
           * @param {DragOverEvent|DroppableOverEvent} event - Drag over event
           */

        }, {
          key: onDragOver,
          value: function value(event) {
            var _source$classList,
                _source$classList2,
                _this6 = this;

            if (event.canceled()) {
              return;
            }

            var source = event.source || event.dragEvent.source;

            if (source === this.firstSource) {
              this.firstSource = null;
              return;
            }

            var snapInEvent = new _SnappableEvent.SnapInEvent({
              dragEvent: event,
              snappable: event.over || event.droppable
            });
            this.draggable.trigger(snapInEvent);

            if (snapInEvent.canceled()) {
              return;
            }

            if (this.mirror) {
              this.mirror.style.display = "none";
            }

            (_source$classList = source.classList).remove.apply(_source$classList, _toConsumableArray(this.draggable.getClassNamesFor("source:dragging")));

            (_source$classList2 = source.classList).add.apply(_source$classList2, _toConsumableArray(this.draggable.getClassNamesFor("source:placed"))); // Need to cancel this in drag out


            setTimeout(function () {
              var _source$classList3;

              (_source$classList3 = source.classList).remove.apply(_source$classList3, _toConsumableArray(_this6.draggable.getClassNamesFor("source:placed")));
            }, this.draggable.options.placedTimeout);
          }
          /**
           * Drag out handler
           * @private
           * @param {DragOutEvent|DroppableOutEvent} event - Drag out event
           */

        }, {
          key: onDragOut,
          value: function value(event) {
            var _source$classList4;

            if (event.canceled()) {
              return;
            }

            var source = event.source || event.dragEvent.source;
            var snapOutEvent = new _SnappableEvent.SnapOutEvent({
              dragEvent: event,
              snappable: event.over || event.droppable
            });
            this.draggable.trigger(snapOutEvent);

            if (snapOutEvent.canceled()) {
              return;
            }

            if (this.mirror) {
              this.mirror.style.display = "";
            }

            (_source$classList4 = source.classList).add.apply(_source$classList4, _toConsumableArray(this.draggable.getClassNamesFor("source:dragging")));
          }
          /**
           * Mirror created handler
           * @param {MirrorCreatedEvent} mirrorEvent
           * @private
           */

        }, {
          key: onMirrorCreated,
          value: function value(_ref7) {
            var mirror = _ref7.mirror;
            this.mirror = mirror;
          }
          /**
           * Mirror destroy handler
           * @param {MirrorDestroyEvent} mirrorEvent
           * @private
           */

        }, {
          key: onMirrorDestroy,
          value: function value() {
            this.mirror = null;
          }
        }]);

        return Snappable;
      }(_AbstractPlugin2["default"]);

      exports["default"] = Snappable;
      /***/
    },
    /* 10 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SnapOutEvent = exports.SnapInEvent = exports.SnapEvent = undefined;

      var _AbstractEvent = __webpack_require__(3);

      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /**
       * Base snap event
       * @class SnapEvent
       * @module SnapEvent
       * @extends AbstractEvent
       */


      var SnapEvent =
      /*#__PURE__*/
      function (_AbstractEvent2$defau) {
        _inherits(SnapEvent, _AbstractEvent2$defau);

        function SnapEvent() {
          _classCallCheck(this, SnapEvent);

          return _possibleConstructorReturn(this, _getPrototypeOf(SnapEvent).apply(this, arguments));
        }

        _createClass(SnapEvent, [{
          key: "dragEvent",

          /**
           * Drag event that triggered this snap event
           * @property dragEvent
           * @type {DragEvent}
           * @readonly
           */
          get: function get() {
            return this.data.dragEvent;
          }
          /**
           * Snappable element
           * @property snappable
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: "snappable",
          get: function get() {
            return this.data.snappable;
          }
        }]);

        return SnapEvent;
      }(_AbstractEvent2["default"]);

      exports.SnapEvent = SnapEvent;
      /**
       * Snap in event
       * @class SnapInEvent
       * @module SnapInEvent
       * @extends SnapEvent
       */

      SnapEvent.type = "snap";

      var SnapInEvent =
      /*#__PURE__*/
      function (_SnapEvent) {
        _inherits(SnapInEvent, _SnapEvent);

        function SnapInEvent() {
          _classCallCheck(this, SnapInEvent);

          return _possibleConstructorReturn(this, _getPrototypeOf(SnapInEvent).apply(this, arguments));
        }

        return SnapInEvent;
      }(SnapEvent);

      exports.SnapInEvent = SnapInEvent;
      /**
       * Snap out event
       * @class SnapOutEvent
       * @module SnapOutEvent
       * @extends SnapEvent
       */

      SnapInEvent.type = "snap:in";
      SnapInEvent.cancelable = true;

      var SnapOutEvent =
      /*#__PURE__*/
      function (_SnapEvent2) {
        _inherits(SnapOutEvent, _SnapEvent2);

        function SnapOutEvent() {
          _classCallCheck(this, SnapOutEvent);

          return _possibleConstructorReturn(this, _getPrototypeOf(SnapOutEvent).apply(this, arguments));
        }

        return SnapOutEvent;
      }(SnapEvent);

      exports.SnapOutEvent = SnapOutEvent;
      SnapOutEvent.type = "snap:out";
      SnapOutEvent.cancelable = true;
      /***/
    },
    /* 11 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _SnappableEvent = __webpack_require__(1);

      Object.keys(_SnappableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _SnappableEvent[key];
          }
        });
      });

      var _Snappable = __webpack_require__(9);

      var _Snappable2 = _interopRequireDefault(_Snappable);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _Snappable2["default"];
      /***/
    },
    /* 12 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      var _AbstractPlugin = __webpack_require__(0);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      var _utils = __webpack_require__(2);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var onMirrorCreated = Symbol("onMirrorCreated");
      var onMirrorDestroy = Symbol("onMirrorDestroy");
      var onDragOver = Symbol("onDragOver");
      var resize = Symbol("resize");
      /**
       * ResizeMirror default options
       * @property {Object} defaultOptions
       * @type {Object}
       */

      var defaultOptions = exports.defaultOptions = {};
      /**
       * The ResizeMirror plugin resizes the mirror element to the dimensions of the draggable element that the mirror is hovering over
       * @class ResizeMirror
       * @module ResizeMirror
       * @extends AbstractPlugin
       */

      var ResizeMirror =
      /*#__PURE__*/
      function (_AbstractPlugin2$defa4) {
        _inherits(ResizeMirror, _AbstractPlugin2$defa4);

        /**
         * ResizeMirror constructor.
         * @constructs ResizeMirror
         * @param {Draggable} draggable - Draggable instance
         */
        function ResizeMirror(draggable) {
          var _this7;

          _classCallCheck(this, ResizeMirror);

          _this7 = _possibleConstructorReturn(this, _getPrototypeOf(ResizeMirror).call(this, draggable));
          /**
           * ResizeMirror options
           * @property {Object} options
           * @type {Object}
           */

          _this7.options = _extends({}, defaultOptions, _this7.getOptions());
          /**
           * ResizeMirror remembers the last width when resizing the mirror
           * to avoid additional writes to the DOM
           * @property {number} lastWidth
           */

          _this7.lastWidth = 0;
          /**
           * ResizeMirror remembers the last height when resizing the mirror
           * to avoid additional writes to the DOM
           * @property {number} lastHeight
           */

          _this7.lastHeight = 0;
          /**
           * Keeps track of the mirror element
           * @property {HTMLElement} mirror
           */

          _this7.mirror = null;
          _this7[onMirrorCreated] = _this7[onMirrorCreated].bind(_assertThisInitialized(_this7));
          _this7[onMirrorDestroy] = _this7[onMirrorDestroy].bind(_assertThisInitialized(_this7));
          _this7[onDragOver] = _this7[onDragOver].bind(_assertThisInitialized(_this7));
          return _this7;
        }
        /**
         * Attaches plugins event listeners
         */


        _createClass(ResizeMirror, [{
          key: "attach",
          value: function attach() {
            this.draggable.on("mirror:created", this[onMirrorCreated]).on("drag:over", this[onDragOver]).on("drag:over:container", this[onDragOver]);
          }
          /**
           * Detaches plugins event listeners
           */

        }, {
          key: "detach",
          value: function detach() {
            this.draggable.off("mirror:created", this[onMirrorCreated]).off("mirror:destroy", this[onMirrorDestroy]).off("drag:over", this[onDragOver]).off("drag:over:container", this[onDragOver]);
          }
          /**
           * Returns options passed through draggable
           * @return {Object}
           */

        }, {
          key: "getOptions",
          value: function getOptions() {
            return this.draggable.options.resizeMirror || {};
          }
          /**
           * Mirror created handler
           * @param {MirrorCreatedEvent} mirrorEvent
           * @private
           */

        }, {
          key: onMirrorCreated,
          value: function value(_ref8) {
            var mirror = _ref8.mirror;
            this.mirror = mirror;
          }
          /**
           * Mirror destroy handler
           * @param {MirrorDestroyEvent} mirrorEvent
           * @private
           */

        }, {
          key: onMirrorDestroy,
          value: function value() {
            this.mirror = null;
          }
          /**
           * Drag over handler
           * @param {DragOverEvent | DragOverContainer} dragEvent
           * @private
           */

        }, {
          key: onDragOver,
          value: function value(dragEvent) {
            this[resize](dragEvent);
          }
          /**
           * Resize function for
           * @param {DragOverEvent | DragOverContainer} dragEvent
           * @private
           */

        }, {
          key: resize,
          value: function value(_ref9) {
            var _this8 = this;

            var overContainer = _ref9.overContainer,
                over = _ref9.over;
            requestAnimationFrame(function () {
              if (!_this8.mirror.parentNode) {
                return;
              }

              if (_this8.mirror.parentNode !== overContainer) {
                overContainer.appendChild(_this8.mirror);
              }

              var overElement = over || _this8.draggable.getDraggableElementsForContainer(overContainer)[0];

              if (!overElement) {
                return;
              }

              (0, _utils.requestNextAnimationFrame)(function () {
                var overRect = overElement.getBoundingClientRect();

                if (_this8.lastHeight === overRect.height && _this8.lastWidth === overRect.width) {
                  return;
                }

                _this8.mirror.style.width = "".concat(overRect.width, "px");
                _this8.mirror.style.height = "".concat(overRect.height, "px");
                _this8.lastWidth = overRect.width;
                _this8.lastHeight = overRect.height;
              });
            });
          }
        }]);

        return ResizeMirror;
      }(_AbstractPlugin2["default"]);

      exports["default"] = ResizeMirror;
      /***/
    },
    /* 13 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;

      var _ResizeMirror = __webpack_require__(12);

      var _ResizeMirror2 = _interopRequireDefault(_ResizeMirror);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _ResizeMirror2["default"];
      exports.defaultOptions = _ResizeMirror.defaultOptions;
      /***/
    },
    /* 14 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = touchCoords;
      /**
       * Returns the first touch event found in touches or changedTouches of a touch events.
       * @param {TouchEvent} event a touch event
       * @return {Touch} a touch object
       */

      function touchCoords() {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var touches = event.touches,
            changedTouches = event.changedTouches;
        return touches && touches[0] || changedTouches && changedTouches[0];
      }
      /***/

    },
    /* 15 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _touchCoords = __webpack_require__(14);

      var _touchCoords2 = _interopRequireDefault(_touchCoords);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _touchCoords2["default"];
      /***/
    },
    /* 16 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = distance;
      /**
       * Returns the distance between two points
       * @param  {Number} x1 The X position of the first point
       * @param  {Number} y1 The Y position of the first point
       * @param  {Number} x2 The X position of the second point
       * @param  {Number} y2 The Y position of the second point
       * @return {Number}
       */

      function distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      }
      /***/

    },
    /* 17 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _distance = __webpack_require__(16);

      var _distance2 = _interopRequireDefault(_distance);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _distance2["default"];
      /***/
    },
    /* 18 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = requestNextAnimationFrame;

      function requestNextAnimationFrame(callback) {
        return requestAnimationFrame(function () {
          requestAnimationFrame(callback);
        });
      }
      /***/

    },
    /* 19 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _requestNextAnimationFrame = __webpack_require__(18);

      var _requestNextAnimationFrame2 = _interopRequireDefault(_requestNextAnimationFrame);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _requestNextAnimationFrame2["default"];
      /***/
    },
    /* 20 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = closest;
      var matchFunction = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
      /**
       * Get the closest parent element of a given element that matches the given
       * selector string or matching function
       *
       * @param {Element} element The child element to find a parent of
       * @param {String|Function} selector The string or function to use to match
       *     the parent element
       * @return {Element|null}
       */

      function closest(element, value) {
        if (!element) {
          return null;
        }

        var selector = value;
        var callback = value;
        var nodeList = value;
        var singleElement = value;
        var isSelector = Boolean(typeof value === "string");
        var isFunction = Boolean(typeof value === "function");
        var isNodeList = Boolean(value instanceof NodeList || value instanceof Array);
        var isElement = Boolean(value instanceof HTMLElement);

        function conditionFn(currentElement) {
          if (!currentElement) {
            return currentElement;
          } else if (isSelector) {
            return matchFunction.call(currentElement, selector);
          } else if (isNodeList) {
            return _toConsumableArray(nodeList).includes(currentElement);
          } else if (isElement) {
            return singleElement === currentElement;
          } else if (isFunction) {
            return callback(currentElement);
          } else {
            return null;
          }
        }

        var current = element;

        do {
          current = current.correspondingUseElement || current.correspondingElement || current;

          if (conditionFn(current)) {
            return current;
          }

          current = current.parentNode;
        } while (current && current !== document.body && current !== document);

        return null;
      }
      /***/

    },
    /* 21 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _closest = __webpack_require__(20);

      var _closest2 = _interopRequireDefault(_closest);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _closest2["default"];
      /***/
    },
    /* 22 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /**
       * All draggable plugins inherit from this class.
       * @abstract
       * @class AbstractPlugin
       * @module AbstractPlugin
       */

      var AbstractPlugin =
      /*#__PURE__*/
      function () {
        /**
         * AbstractPlugin constructor.
         * @constructs AbstractPlugin
         * @param {Draggable} draggable - Draggable instance
         */
        function AbstractPlugin(draggable) {
          _classCallCheck(this, AbstractPlugin);

          /**
           * Draggable instance
           * @property draggable
           * @type {Draggable}
           */
          this.draggable = draggable;
        }
        /**
         * Override to add listeners
         * @abstract
         */


        _createClass(AbstractPlugin, [{
          key: "attach",
          value: function attach() {
            throw new Error("Not Implemented");
          }
          /**
           * Override to remove listeners
           * @abstract
           */

        }, {
          key: "detach",
          value: function detach() {
            throw new Error("Not Implemented");
          }
        }]);

        return AbstractPlugin;
      }();

      exports["default"] = AbstractPlugin;
      /***/
    },
    /* 23 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _AbstractPlugin = __webpack_require__(0);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      var _utils = __webpack_require__(2);

      var _CollidableEvent = __webpack_require__(4);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var onDragMove = Symbol("onDragMove");
      var onDragStop = Symbol("onDragStop");
      var onRequestAnimationFrame = Symbol("onRequestAnimationFrame");
      /**
       * Collidable plugin which detects colliding elements while dragging
       * @class Collidable
       * @module Collidable
       * @extends AbstractPlugin
       */

      var Collidable =
      /*#__PURE__*/
      function (_AbstractPlugin2$defa5) {
        _inherits(Collidable, _AbstractPlugin2$defa5);

        /**
         * Collidable constructor.
         * @constructs Collidable
         * @param {Draggable} draggable - Draggable instance
         */
        function Collidable(draggable) {
          var _this9;

          _classCallCheck(this, Collidable);

          _this9 = _possibleConstructorReturn(this, _getPrototypeOf(Collidable).call(this, draggable));
          /**
           * Keeps track of currently colliding elements
           * @property {HTMLElement|null} currentlyCollidingElement
           * @type {HTMLElement|null}
           */

          _this9.currentlyCollidingElement = null;
          /**
           * Keeps track of currently colliding elements
           * @property {HTMLElement|null} lastCollidingElement
           * @type {HTMLElement|null}
           */

          _this9.lastCollidingElement = null;
          /**
           * Animation frame for finding colliding elements
           * @property {Number|null} currentAnimationFrame
           * @type {Number|null}
           */

          _this9.currentAnimationFrame = null;
          _this9[onDragMove] = _this9[onDragMove].bind(_assertThisInitialized(_this9));
          _this9[onDragStop] = _this9[onDragStop].bind(_assertThisInitialized(_this9));
          _this9[onRequestAnimationFrame] = _this9[onRequestAnimationFrame].bind(_assertThisInitialized(_this9));
          return _this9;
        }
        /**
         * Attaches plugins event listeners
         */


        _createClass(Collidable, [{
          key: "attach",
          value: function attach() {
            this.draggable.on("drag:move", this[onDragMove]).on("drag:stop", this[onDragStop]);
          }
          /**
           * Detaches plugins event listeners
           */

        }, {
          key: "detach",
          value: function detach() {
            this.draggable.off("drag:move", this[onDragMove]).off("drag:stop", this[onDragStop]);
          }
          /**
           * Returns current collidables based on `collidables` option
           * @return {HTMLElement[]}
           */

        }, {
          key: "getCollidables",
          value: function getCollidables() {
            var collidables = this.draggable.options.collidables;

            if (typeof collidables === "string") {
              return Array.prototype.slice.call(document.querySelectorAll(collidables));
            } else if (collidables instanceof NodeList || collidables instanceof Array) {
              return Array.prototype.slice.call(collidables);
            } else if (collidables instanceof HTMLElement) {
              return [collidables];
            } else if (typeof collidables === "function") {
              return collidables();
            } else {
              return [];
            }
          }
          /**
           * Drag move handler
           * @private
           * @param {DragMoveEvent} event - Drag move event
           */

        }, {
          key: onDragMove,
          value: function value(event) {
            var target = event.sensorEvent.target;
            this.currentAnimationFrame = requestAnimationFrame(this[onRequestAnimationFrame](target));

            if (this.currentlyCollidingElement) {
              event.cancel();
            }

            var collidableInEvent = new _CollidableEvent.CollidableInEvent({
              dragEvent: event,
              collidingElement: this.currentlyCollidingElement
            });
            var collidableOutEvent = new _CollidableEvent.CollidableOutEvent({
              dragEvent: event,
              collidingElement: this.lastCollidingElement
            });
            var enteringCollidable = Boolean(this.currentlyCollidingElement && this.lastCollidingElement !== this.currentlyCollidingElement);
            var leavingCollidable = Boolean(!this.currentlyCollidingElement && this.lastCollidingElement);

            if (enteringCollidable) {
              if (this.lastCollidingElement) {
                this.draggable.trigger(collidableOutEvent);
              }

              this.draggable.trigger(collidableInEvent);
            } else if (leavingCollidable) {
              this.draggable.trigger(collidableOutEvent);
            }

            this.lastCollidingElement = this.currentlyCollidingElement;
          }
          /**
           * Drag stop handler
           * @private
           * @param {DragStopEvent} event - Drag stop event
           */

        }, {
          key: onDragStop,
          value: function value(event) {
            var lastCollidingElement = this.currentlyCollidingElement || this.lastCollidingElement;
            var collidableOutEvent = new _CollidableEvent.CollidableOutEvent({
              dragEvent: event,
              collidingElement: lastCollidingElement
            });

            if (lastCollidingElement) {
              this.draggable.trigger(collidableOutEvent);
            }

            this.lastCollidingElement = null;
            this.currentlyCollidingElement = null;
          }
          /**
           * Animation frame function
           * @private
           * @param {HTMLElement} target - Current move target
           * @return {Function}
           */

        }, {
          key: onRequestAnimationFrame,
          value: function value(target) {
            var _this10 = this;

            return function () {
              var collidables = _this10.getCollidables();

              _this10.currentlyCollidingElement = (0, _utils.closest)(target, function (element) {
                return collidables.includes(element);
              });
            };
          }
        }]);

        return Collidable;
      }(_AbstractPlugin2["default"]);

      exports["default"] = Collidable;
      /***/
    },
    /* 24 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      var _canceled = Symbol("canceled");
      /**
       * All events fired by draggable inherit this class. You can call `cancel()` to
       * cancel a specific event or you can check if an event has been canceled by
       * calling `canceled()`.
       * @abstract
       * @class AbstractEvent
       * @module AbstractEvent
       */


      var AbstractEvent =
      /*#__PURE__*/
      function () {
        /**
         * AbstractEvent constructor.
         * @constructs AbstractEvent
         * @param {object} data - Event data
         */

        /**
         * Event type
         * @static
         * @abstract
         * @property type
         * @type {String}
         */
        function AbstractEvent(data) {
          _classCallCheck(this, AbstractEvent);

          this[_canceled] = false;
          this.data = data;
        }
        /**
         * Read-only type
         * @abstract
         * @return {String}
         */

        /**
         * Event cancelable
         * @static
         * @abstract
         * @property cancelable
         * @type {Boolean}
         */


        _createClass(AbstractEvent, [{
          key: "cancel",

          /**
           * Cancels the event instance
           * @abstract
           */
          value: function cancel() {
            this[_canceled] = true;
          }
          /**
           * Check if event has been canceled
           * @abstract
           * @return {Boolean}
           */

        }, {
          key: "canceled",
          value: function canceled() {
            return Boolean(this[_canceled]);
          }
          /**
           * Returns new event instance with existing event data.
           * This method allows for overriding of event data.
           * @param {Object} data
           * @return {AbstractEvent}
           */

        }, {
          key: "clone",
          value: function clone(data) {
            return new this.constructor(_extends({}, this.data, data));
          }
        }, {
          key: "type",
          get: function get() {
            return this.constructor.type;
          }
          /**
           * Read-only cancelable
           * @abstract
           * @return {Boolean}
           */

        }, {
          key: "cancelable",
          get: function get() {
            return this.constructor.cancelable;
          }
        }]);

        return AbstractEvent;
      }();

      exports["default"] = AbstractEvent;
      AbstractEvent.type = "event";
      AbstractEvent.cancelable = false;
      /***/
    },
    /* 25 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CollidableOutEvent = exports.CollidableInEvent = exports.CollidableEvent = undefined;

      var _AbstractEvent = __webpack_require__(3);

      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /**
       * Base collidable event
       * @class CollidableEvent
       * @module CollidableEvent
       * @extends AbstractEvent
       */


      var CollidableEvent =
      /*#__PURE__*/
      function (_AbstractEvent2$defau2) {
        _inherits(CollidableEvent, _AbstractEvent2$defau2);

        function CollidableEvent() {
          _classCallCheck(this, CollidableEvent);

          return _possibleConstructorReturn(this, _getPrototypeOf(CollidableEvent).apply(this, arguments));
        }

        _createClass(CollidableEvent, [{
          key: "dragEvent",

          /**
           * Drag event that triggered this colliable event
           * @property dragEvent
           * @type {DragEvent}
           * @readonly
           */
          get: function get() {
            return this.data.dragEvent;
          }
        }]);

        return CollidableEvent;
      }(_AbstractEvent2["default"]);

      exports.CollidableEvent = CollidableEvent;
      /**
       * Collidable in event
       * @class CollidableInEvent
       * @module CollidableInEvent
       * @extends CollidableEvent
       */

      CollidableEvent.type = "collidable";

      var CollidableInEvent =
      /*#__PURE__*/
      function (_CollidableEvent2) {
        _inherits(CollidableInEvent, _CollidableEvent2);

        function CollidableInEvent() {
          _classCallCheck(this, CollidableInEvent);

          return _possibleConstructorReturn(this, _getPrototypeOf(CollidableInEvent).apply(this, arguments));
        }

        _createClass(CollidableInEvent, [{
          key: "collidingElement",

          /**
           * Element you are currently colliding with
           * @property collidingElement
           * @type {HTMLElement}
           * @readonly
           */
          get: function get() {
            return this.data.collidingElement;
          }
        }]);

        return CollidableInEvent;
      }(CollidableEvent);

      exports.CollidableInEvent = CollidableInEvent;
      /**
       * Collidable out event
       * @class CollidableOutEvent
       * @module CollidableOutEvent
       * @extends CollidableEvent
       */

      CollidableInEvent.type = "collidable:in";

      var CollidableOutEvent =
      /*#__PURE__*/
      function (_CollidableEvent3) {
        _inherits(CollidableOutEvent, _CollidableEvent3);

        function CollidableOutEvent() {
          _classCallCheck(this, CollidableOutEvent);

          return _possibleConstructorReturn(this, _getPrototypeOf(CollidableOutEvent).apply(this, arguments));
        }

        _createClass(CollidableOutEvent, [{
          key: "collidingElement",

          /**
           * Element you were previously colliding with
           * @property collidingElement
           * @type {HTMLElement}
           * @readonly
           */
          get: function get() {
            return this.data.collidingElement;
          }
        }]);

        return CollidableOutEvent;
      }(CollidableEvent);

      exports.CollidableOutEvent = CollidableOutEvent;
      CollidableOutEvent.type = "collidable:out";
      /***/
    },
    /* 26 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _CollidableEvent = __webpack_require__(4);

      Object.keys(_CollidableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _CollidableEvent[key];
          }
        });
      });

      var _Collidable = __webpack_require__(23);

      var _Collidable2 = _interopRequireDefault(_Collidable);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _Collidable2["default"];
      /***/
    },
    /* 27 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _Collidable = __webpack_require__(26);

      Object.defineProperty(exports, "Collidable", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Collidable)["default"];
        }
      });

      var _ResizeMirror = __webpack_require__(13);

      Object.defineProperty(exports, "ResizeMirror", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_ResizeMirror)["default"];
        }
      });
      Object.defineProperty(exports, "defaultResizeMirrorOptions", {
        enumerable: true,
        get: function get() {
          return _ResizeMirror.defaultOptions;
        }
      });

      var _Snappable = __webpack_require__(11);

      Object.defineProperty(exports, "Snappable", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Snappable)["default"];
        }
      });

      var _SwapAnimation = __webpack_require__(8);

      Object.defineProperty(exports, "SwapAnimation", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_SwapAnimation)["default"];
        }
      });
      Object.defineProperty(exports, "defaultSwapAnimationOptions", {
        enumerable: true,
        get: function get() {
          return _SwapAnimation.defaultOptions;
        }
      });

      var _SortAnimation = __webpack_require__(6);

      Object.defineProperty(exports, "SortAnimation", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_SortAnimation)["default"];
        }
      });
      Object.defineProperty(exports, "defaultSortAnimationOptions", {
        enumerable: true,
        get: function get() {
          return _SortAnimation.defaultOptions;
        }
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /***/

    }
    /******/
    ])
  );
});