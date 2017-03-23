(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.default = alphanumeric;
var allowed = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function alphanumeric(num) {
  var res = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  if (!num) return res;

  var random = (Math.random() * (allowed.length - 1)).toFixed();
  return alphanumeric(num - 1, res + allowed[random]);
}
},{}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":26}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":27}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":28}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":29}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":30}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":31}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":32}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":33}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":34}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":35}],12:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":36}],13:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":37}],14:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":38}],15:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _promise = require("../core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      step("next");
    });
  };
};
},{"../core-js/promise":12}],16:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],17:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":8}],18:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};
},{"../core-js/object/define-property":8}],19:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _assign = require("../core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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
},{"../core-js/object/assign":6}],20:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":7,"../core-js/object/set-prototype-of":11,"../helpers/typeof":25}],21:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};
},{}],22:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":25}],23:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _isIterable2 = require("../core-js/is-iterable");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = require("../core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
},{"../core-js/get-iterator":3,"../core-js/is-iterable":4}],24:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _from = require("../core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
},{"../core-js/array/from":2}],25:[function(require,module,exports){
"use strict";

var _typeof = typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol ? "symbol" : typeof obj; };

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":13,"../core-js/symbol/iterator":14}],26:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/$.core').Array.from;
},{"../../modules/$.core":44,"../../modules/es6.array.from":96,"../../modules/es6.string.iterator":104}],27:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":94,"../modules/es6.string.iterator":104,"../modules/web.dom.iterable":106}],28:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');
},{"../modules/core.is-iterable":95,"../modules/es6.string.iterator":104,"../modules/web.dom.iterable":106}],29:[function(require,module,exports){
var core = require('../../modules/$.core');
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
};
},{"../../modules/$.core":44}],30:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/$.core').Object.assign;
},{"../../modules/$.core":44,"../../modules/es6.object.assign":98}],31:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":69}],32:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":69}],33:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/$.core').Object.getPrototypeOf;
},{"../../modules/$.core":44,"../../modules/es6.object.get-prototype-of":99}],34:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/$.core').Object.keys;
},{"../../modules/$.core":44,"../../modules/es6.object.keys":100}],35:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/$.core').Object.setPrototypeOf;
},{"../../modules/$.core":44,"../../modules/es6.object.set-prototype-of":101}],36:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/$.core').Promise;
},{"../modules/$.core":44,"../modules/es6.object.to-string":102,"../modules/es6.promise":103,"../modules/es6.string.iterator":104,"../modules/web.dom.iterable":106}],37:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
module.exports = require('../../modules/$.core').Symbol;
},{"../../modules/$.core":44,"../../modules/es6.object.to-string":102,"../../modules/es6.symbol":105}],38:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/$.wks')('iterator');
},{"../../modules/$.wks":92,"../../modules/es6.string.iterator":104,"../../modules/web.dom.iterable":106}],39:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],40:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],41:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":62}],42:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./$.cof')
  , TAG = require('./$.wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./$.cof":43,"./$.wks":92}],43:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],44:[function(require,module,exports){
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],45:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./$.a-function":39}],46:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],47:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":51}],48:[function(require,module,exports){
var isObject = require('./$.is-object')
  , document = require('./$.global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$.global":54,"./$.is-object":62}],49:[function(require,module,exports){
// all enumerable object keys, includes symbols
var $ = require('./$');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};
},{"./$":69}],50:[function(require,module,exports){
var global    = require('./$.global')
  , core      = require('./$.core')
  , ctx       = require('./$.ctx')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;
},{"./$.core":44,"./$.ctx":45,"./$.global":54}],51:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],52:[function(require,module,exports){
var ctx         = require('./$.ctx')
  , call        = require('./$.iter-call')
  , isArrayIter = require('./$.is-array-iter')
  , anObject    = require('./$.an-object')
  , toLength    = require('./$.to-length')
  , getIterFn   = require('./core.get-iterator-method');
module.exports = function(iterable, entries, fn, that){
  var iterFn = getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    call(iterator, f, step.value, entries);
  }
};
},{"./$.an-object":41,"./$.ctx":45,"./$.is-array-iter":60,"./$.iter-call":63,"./$.to-length":89,"./core.get-iterator-method":93}],53:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./$.to-iobject')
  , getNames  = require('./$').getNames
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toIObject(it));
};
},{"./$":69,"./$.to-iobject":88}],54:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],55:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],56:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.descriptors') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":69,"./$.descriptors":47,"./$.property-desc":75}],57:[function(require,module,exports){
module.exports = require('./$.global').document && document.documentElement;
},{"./$.global":54}],58:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],59:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./$.cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":43}],60:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./$.iterators')
  , ITERATOR   = require('./$.wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./$.iterators":68,"./$.wks":92}],61:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./$.cof');
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};
},{"./$.cof":43}],62:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],63:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./$.an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./$.an-object":41}],64:[function(require,module,exports){
'use strict';
var $              = require('./$')
  , descriptor     = require('./$.property-desc')
  , setToStringTag = require('./$.set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./$.hide')(IteratorPrototype, require('./$.wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./$":69,"./$.hide":56,"./$.property-desc":75,"./$.set-to-string-tag":81,"./$.wks":92}],65:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./$.library')
  , $export        = require('./$.export')
  , redefine       = require('./$.redefine')
  , hide           = require('./$.hide')
  , has            = require('./$.has')
  , Iterators      = require('./$.iterators')
  , $iterCreate    = require('./$.iter-create')
  , setToStringTag = require('./$.set-to-string-tag')
  , getProto       = require('./$').getProto
  , ITERATOR       = require('./$.wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , methods, key;
  // Fix native
  if($native){
    var IteratorPrototype = getProto($default.call(new Base));
    // Set @@toStringTag to native iterators
    setToStringTag(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    // fix Array#{values, @@iterator}.name in V8 / FF
    if(DEF_VALUES && $native.name !== VALUES){
      VALUES_BUG = true;
      $default = function values(){ return $native.call(this); };
    }
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES  ? $default : getMethod(VALUES),
      keys:    IS_SET      ? $default : getMethod(KEYS),
      entries: !DEF_VALUES ? $default : getMethod('entries')
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./$":69,"./$.export":50,"./$.has":55,"./$.hide":56,"./$.iter-create":64,"./$.iterators":68,"./$.library":71,"./$.redefine":77,"./$.set-to-string-tag":81,"./$.wks":92}],66:[function(require,module,exports){
var ITERATOR     = require('./$.wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ safe = true; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./$.wks":92}],67:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],68:[function(require,module,exports){
module.exports = {};
},{}],69:[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],70:[function(require,module,exports){
var $         = require('./$')
  , toIObject = require('./$.to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./$":69,"./$.to-iobject":88}],71:[function(require,module,exports){
module.exports = true;
},{}],72:[function(require,module,exports){
var global    = require('./$.global')
  , macrotask = require('./$.task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = require('./$.cof')(process) == 'process'
  , head, last, notify;

var flush = function(){
  var parent, domain, fn;
  if(isNode && (parent = process.domain)){
    process.domain = null;
    parent.exit();
  }
  while(head){
    domain = head.domain;
    fn     = head.fn;
    if(domain)domain.enter();
    fn(); // <- currently we use it only for Promise - try / catch not required
    if(domain)domain.exit();
    head = head.next;
  } last = undefined;
  if(parent)parent.enter();
};

// Node.js
if(isNode){
  notify = function(){
    process.nextTick(flush);
  };
// browsers with MutationObserver
} else if(Observer){
  var toggle = 1
    , node   = document.createTextNode('');
  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
  notify = function(){
    node.data = toggle = -toggle;
  };
// environments with maybe non-completely correct, but existent Promise
} else if(Promise && Promise.resolve){
  notify = function(){
    Promise.resolve().then(flush);
  };
// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
} else {
  notify = function(){
    // strange IE + webpack dev server bug - use .call(global)
    macrotask.call(global, flush);
  };
}

module.exports = function asap(fn){
  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
  if(last)last.next = task;
  if(!head){
    head = task;
    notify();
  } last = task;
};
},{"./$.cof":43,"./$.global":54,"./$.task":86}],73:[function(require,module,exports){
// 19.1.2.1 Object.assign(target, source, ...)
var $        = require('./$')
  , toObject = require('./$.to-object')
  , IObject  = require('./$.iobject');

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = require('./$.fails')(function(){
  var a = Object.assign
    , A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , $$    = arguments
    , $$len = $$.length
    , index = 1
    , getKeys    = $.getKeys
    , getSymbols = $.getSymbols
    , isEnum     = $.isEnum;
  while($$len > index){
    var S      = IObject($$[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  }
  return T;
} : Object.assign;
},{"./$":69,"./$.fails":51,"./$.iobject":59,"./$.to-object":90}],74:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./$.export')
  , core    = require('./$.core')
  , fails   = require('./$.fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./$.core":44,"./$.export":50,"./$.fails":51}],75:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],76:[function(require,module,exports){
var redefine = require('./$.redefine');
module.exports = function(target, src){
  for(var key in src)redefine(target, key, src[key]);
  return target;
};
},{"./$.redefine":77}],77:[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":56}],78:[function(require,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],79:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = require('./$').getDesc
  , isObject = require('./$.is-object')
  , anObject = require('./$.an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./$":69,"./$.an-object":41,"./$.ctx":45,"./$.is-object":62}],80:[function(require,module,exports){
'use strict';
var core        = require('./$.core')
  , $           = require('./$')
  , DESCRIPTORS = require('./$.descriptors')
  , SPECIES     = require('./$.wks')('species');

module.exports = function(KEY){
  var C = core[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./$":69,"./$.core":44,"./$.descriptors":47,"./$.wks":92}],81:[function(require,module,exports){
var def = require('./$').setDesc
  , has = require('./$.has')
  , TAG = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./$":69,"./$.has":55,"./$.wks":92}],82:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":54}],83:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./$.an-object')
  , aFunction = require('./$.a-function')
  , SPECIES   = require('./$.wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./$.a-function":39,"./$.an-object":41,"./$.wks":92}],84:[function(require,module,exports){
module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
},{}],85:[function(require,module,exports){
var toInteger = require('./$.to-integer')
  , defined   = require('./$.defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$.defined":46,"./$.to-integer":87}],86:[function(require,module,exports){
var ctx                = require('./$.ctx')
  , invoke             = require('./$.invoke')
  , html               = require('./$.html')
  , cel                = require('./$.dom-create')
  , global             = require('./$.global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listner = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require('./$.cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listner, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./$.cof":43,"./$.ctx":45,"./$.dom-create":48,"./$.global":54,"./$.html":57,"./$.invoke":58}],87:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],88:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":46,"./$.iobject":59}],89:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./$.to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./$.to-integer":87}],90:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":46}],91:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],92:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , uid    = require('./$.uid')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};
},{"./$.global":54,"./$.shared":82,"./$.uid":91}],93:[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./$.classof":42,"./$.core":44,"./$.iterators":68,"./$.wks":92}],94:[function(require,module,exports){
var anObject = require('./$.an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./$.core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./$.an-object":41,"./$.core":44,"./core.get-iterator-method":93}],95:[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
},{"./$.classof":42,"./$.core":44,"./$.iterators":68,"./$.wks":92}],96:[function(require,module,exports){
'use strict';
var ctx         = require('./$.ctx')
  , $export     = require('./$.export')
  , toObject    = require('./$.to-object')
  , call        = require('./$.iter-call')
  , isArrayIter = require('./$.is-array-iter')
  , toLength    = require('./$.to-length')
  , getIterFn   = require('./core.get-iterator-method');
$export($export.S + $export.F * !require('./$.iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , $$      = arguments
      , $$len   = $$.length
      , mapfn   = $$len > 1 ? $$[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        result[index] = mapping ? mapfn(O[index], index) : O[index];
      }
    }
    result.length = index;
    return result;
  }
});

},{"./$.ctx":45,"./$.export":50,"./$.is-array-iter":60,"./$.iter-call":63,"./$.iter-detect":66,"./$.to-length":89,"./$.to-object":90,"./core.get-iterator-method":93}],97:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./$.add-to-unscopables')
  , step             = require('./$.iter-step')
  , Iterators        = require('./$.iterators')
  , toIObject        = require('./$.to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./$.iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./$.add-to-unscopables":40,"./$.iter-define":65,"./$.iter-step":67,"./$.iterators":68,"./$.to-iobject":88}],98:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./$.export');

$export($export.S + $export.F, 'Object', {assign: require('./$.object-assign')});
},{"./$.export":50,"./$.object-assign":73}],99:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('getPrototypeOf', function($getPrototypeOf){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./$.object-sap":74,"./$.to-object":90}],100:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('keys', function($keys){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./$.object-sap":74,"./$.to-object":90}],101:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./$.export');
$export($export.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.export":50,"./$.set-proto":79}],102:[function(require,module,exports){

},{}],103:[function(require,module,exports){
'use strict';
var $          = require('./$')
  , LIBRARY    = require('./$.library')
  , global     = require('./$.global')
  , ctx        = require('./$.ctx')
  , classof    = require('./$.classof')
  , $export    = require('./$.export')
  , isObject   = require('./$.is-object')
  , anObject   = require('./$.an-object')
  , aFunction  = require('./$.a-function')
  , strictNew  = require('./$.strict-new')
  , forOf      = require('./$.for-of')
  , setProto   = require('./$.set-proto').set
  , same       = require('./$.same-value')
  , SPECIES    = require('./$.wks')('species')
  , speciesConstructor = require('./$.species-constructor')
  , asap       = require('./$.microtask')
  , PROMISE    = 'Promise'
  , process    = global.process
  , isNode     = classof(process) == 'process'
  , P          = global[PROMISE]
  , Wrapper;

var testResolve = function(sub){
  var test = new P(function(){});
  if(sub)test.constructor = Object;
  return P.resolve(test) === test;
};

var USE_NATIVE = function(){
  var works = false;
  function P2(x){
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = P && P.resolve && testResolve();
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
    // actual Firefox has broken subclass support, test that
    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
      works = false;
    }
    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
    if(works && require('./$.descriptors')){
      var thenableThenGotten = false;
      P.resolve($.setDesc({}, 'then', {
        get: function(){ thenableThenGotten = true; }
      }));
      works = thenableThenGotten;
    }
  } catch(e){ works = false; }
  return works;
}();

// helpers
var sameConstructor = function(a, b){
  // library wrapper special case
  if(LIBRARY && a === P && b === Wrapper)return true;
  return same(a, b);
};
var getConstructor = function(C){
  var S = anObject(C)[SPECIES];
  return S != undefined ? S : C;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var PromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve),
  this.reject  = aFunction(reject)
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(record, isReject){
  if(record.n)return;
  record.n = true;
  var chain = record.c;
  asap(function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , result, then;
      try {
        if(handler){
          if(!ok)record.h = true;
          result = handler === true ? value : handler(value);
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    chain.length = 0;
    record.n = false;
    if(isReject)setTimeout(function(){
      var promise = record.p
        , handler, console;
      if(isUnhandled(promise)){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      } record.a = undefined;
    }, 1);
  });
};
var isUnhandled = function(promise){
  var record = promise._d
    , chain  = record.a || record.c
    , i      = 0
    , reaction;
  if(record.h)return false;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var $reject = function(value){
  var record = this;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  notify(record, true);
};
var $resolve = function(value){
  var record = this
    , then;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(record.p === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      asap(function(){
        var wrapper = {r: record, d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      record.v = value;
      record.s = 1;
      notify(record, false);
    }
  } catch(e){
    $reject.call({r: record, d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    aFunction(executor);
    var record = this._d = {
      p: strictNew(this, P, PROMISE),         // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false,                               // <- handled rejection
      n: false                                // <- notify
    };
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  require('./$.redefine-all')(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction = new PromiseCapability(speciesConstructor(this, P))
        , promise  = reaction.promise
        , record   = this._d;
      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      record.c.push(reaction);
      if(record.a)record.a.push(reaction);
      if(record.s)notify(record, false);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
require('./$.set-to-string-tag')(P, PROMISE);
require('./$.set-species')(PROMISE);
Wrapper = require('./$.core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = new PromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof P && sameConstructor(x.constructor, this))return x;
    var capability = new PromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./$.iter-detect')(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject
      , values     = [];
    var abrupt = perform(function(){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        var alreadyCalled = false;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled = true;
          results[index] = value;
          --remaining || resolve(results);
        }, reject);
      });
      else resolve(results);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
},{"./$":69,"./$.a-function":39,"./$.an-object":41,"./$.classof":42,"./$.core":44,"./$.ctx":45,"./$.descriptors":47,"./$.export":50,"./$.for-of":52,"./$.global":54,"./$.is-object":62,"./$.iter-detect":66,"./$.library":71,"./$.microtask":72,"./$.redefine-all":76,"./$.same-value":78,"./$.set-proto":79,"./$.set-species":80,"./$.set-to-string-tag":81,"./$.species-constructor":83,"./$.strict-new":84,"./$.wks":92}],104:[function(require,module,exports){
'use strict';
var $at  = require('./$.string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./$.iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./$.iter-define":65,"./$.string-at":85}],105:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $              = require('./$')
  , global         = require('./$.global')
  , has            = require('./$.has')
  , DESCRIPTORS    = require('./$.descriptors')
  , $export        = require('./$.export')
  , redefine       = require('./$.redefine')
  , $fails         = require('./$.fails')
  , shared         = require('./$.shared')
  , setToStringTag = require('./$.set-to-string-tag')
  , uid            = require('./$.uid')
  , wks            = require('./$.wks')
  , keyOf          = require('./$.keyof')
  , $names         = require('./$.get-names')
  , enumKeys       = require('./$.enum-keys')
  , isArray        = require('./$.is-array')
  , anObject       = require('./$.an-object')
  , toIObject      = require('./$.to-iobject')
  , createDesc     = require('./$.property-desc')
  , getDesc        = $.getDesc
  , setDesc        = $.setDesc
  , _create        = $.create
  , getNames       = $names.get
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = $.isEnum
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , useNative      = typeof $Symbol == 'function'
  , ObjectProto    = Object.prototype;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(setDesc({}, 'a', {
    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = getDesc(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  setDesc(it, key, D);
  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
} : setDesc;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var isSymbol = function(it){
  return typeof it == 'symbol';
};

var $defineProperty = function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toIObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};
var $stringify = function stringify(it){
  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
  var args = [it]
    , i    = 1
    , $$   = arguments
    , replacer, $replacer;
  while($$.length > i)args.push($$[i++]);
  replacer = args[1];
  if(typeof replacer == 'function')$replacer = replacer;
  if($replacer || !isArray(replacer))replacer = function(key, value){
    if($replacer)value = $replacer.call(this, key, value);
    if(!isSymbol(value))return value;
  };
  args[1] = replacer;
  return _stringify.apply($JSON, args);
};
var buggyJSON = $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
});

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
  };
  redefine($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  isSymbol = function(it){
    return it instanceof $Symbol;
  };

  $.create     = $create;
  $.isEnum     = $propertyIsEnumerable;
  $.getDesc    = $getOwnPropertyDescriptor;
  $.setDesc    = $defineProperty;
  $.setDescs   = $defineProperties;
  $.getNames   = $names.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./$.library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
  'species,split,toPrimitive,toStringTag,unscopables'
).split(','), function(it){
  var sym = wks(it);
  symbolStatics[it] = useNative ? sym : wrap(sym);
});

setter = true;

$export($export.G + $export.W, {Symbol: $Symbol});

$export($export.S, 'Symbol', symbolStatics);

$export($export.S + $export.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./$":69,"./$.an-object":41,"./$.descriptors":47,"./$.enum-keys":49,"./$.export":50,"./$.fails":51,"./$.get-names":53,"./$.global":54,"./$.has":55,"./$.is-array":61,"./$.keyof":70,"./$.library":71,"./$.property-desc":75,"./$.redefine":77,"./$.set-to-string-tag":81,"./$.shared":82,"./$.to-iobject":88,"./$.uid":91,"./$.wks":92}],106:[function(require,module,exports){
require('./es6.array.iterator');
var Iterators = require('./$.iterators');
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
},{"./$.iterators":68,"./es6.array.iterator":97}],107:[function(require,module,exports){
(function (global){
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

module.exports = { "default": module.exports, __esModule: true };

}).call(this,typeof window !== "undefined" ? window : {})
},{"./runtime":108}],108:[function(require,module,exports){
(function (process,global){
"use strict";

var _promise = require("../core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!function (global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var iteratorSymbol = typeof _symbol2.default === "function" && _iterator2.default || "@@iterator";

  var inModule = (typeof module === "undefined" ? "undefined" : (0, _typeof3.default)(module)) === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = (0, _create2.default)((outerFn || Generator).prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (_setPrototypeOf2.default) {
      (0, _setPrototypeOf2.default)(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
    }
    genFun.prototype = (0, _create2.default)(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function (arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    // This invoke function is written in a style that assumes some
    // calling function (or Promise) will handle exceptions.
    function invoke(method, arg) {
      var result = generator[method](arg);
      var value = result.value;
      return value instanceof AwaitArgument ? _promise2.default.resolve(value.arg).then(invokeNext, invokeThrow) : _promise2.default.resolve(value).then(function (unwrapped) {
        // When a yielded Promise is resolved, its final value becomes
        // the .value of the Promise<{value,done}> result for the
        // current iteration. If the Promise is rejected, however, the
        // result for this iteration will be rejected with the same
        // reason. Note that rejections of yielded Promises are not
        // thrown back into the generator function, as is the case
        // when an awaited Promise is rejected. This difference in
        // behavior between yield and await is important, because it
        // allows the consumer to decide what to do with the yielded
        // rejection (swallow it and continue, manually .throw it back
        // into the generator, abandon iteration, whatever). With
        // await, by contrast, there is no opportunity to examine the
        // rejection reason outside the generator function, so the
        // only option is to throw it from the await expression, and
        // let the generator function handle the exception.
        result.value = unwrapped;
        return result;
      });
    }

    if ((typeof process === "undefined" ? "undefined" : (0, _typeof3.default)(process)) === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var invokeNext = invoke.bind(generator, "next");
    var invokeThrow = invoke.bind(generator, "throw");
    var invokeReturn = invoke.bind(generator, "return");
    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return invoke(method, arg);
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : new _promise2.default(function (resolve) {
        resolve(callInvokeWithMethodAndArg());
      });
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          context._sent = arg;

          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            context.sent = undefined;
          }
        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }
        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
}(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
(typeof global === "undefined" ? "undefined" : (0, _typeof3.default)(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : (0, _typeof3.default)(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : (0, _typeof3.default)(self)) === "object" ? self : undefined);
}).call(this,require('_process'),typeof window !== "undefined" ? window : {})
},{"../core-js/object/create":7,"../core-js/object/set-prototype-of":11,"../core-js/promise":12,"../core-js/symbol":13,"../core-js/symbol/iterator":14,"../helpers/typeof":25,"_process":109}],109:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],110:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCookie = exports.watchToken = exports.getToken = exports.watch = exports.getCookie = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.getAllGrammarlyCookies = getAllGrammarlyCookies;

var _forge = require('lib/forge');

var _forge2 = _interopRequireDefault(_forge);

var _util = require('lib/util');

var _config = require('lib/config');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var PATH = '/';

var getCookie = exports.getCookie = function getCookie(name) {
  var domain = arguments.length <= 1 || arguments[1] === undefined ? _config.GRAMMARLY_DOMAIN : arguments[1];
  return new _promise2.default(function (resolve, reject) {
    return _forge2.default.cookies.get(domain, PATH, name, resolve, reject);
  });
};

var watch = exports.watch = function watch(cb, name) {
  var domain = arguments.length <= 2 || arguments[2] === undefined ? _config.GRAMMARLY_DOMAIN : arguments[2];

  if (!cb) throw new Error('cookies.watch: callback required');
  _forge2.default.cookies.watch(_config.GRAMMARLY_DOMAIN, PATH, name, cb);
};

var getToken = exports.getToken = function getToken() {
  return getCookie('grauth');
};
var watchToken = exports.watchToken = function watchToken(cb) {
  return watch(cb, 'grauth');
};

var setCookie = exports.setCookie = function setCookie(data) {
  return new _promise2.default(function (resolve, reject) {
    return _forge2.default.cookies.set(data, resolve, reject);
  });
};

function getAllGrammarlyCookies() {
  if (!(0, _util.isChrome)()) return [];

  return new _promise2.default(function (resolve, reject) {
    try {
      window.chrome.cookies.getAll({ domain: _config.GRAMMARLY_DOMAIN, path: PATH }, function (cookies) {
        return resolve(Array.isArray(cookies) ? cookies : []);
      });
    } catch (e) {
      reject(e);
    }
  });
}

},{"babel-runtime/core-js/promise":12,"lib/config":116,"lib/forge":118,"lib/util":149}],111:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _actions = require('./user/actions');

var userActions = _interopRequireWildcard(_actions);

var _actions2 = require('./settings/actions');

var settingsActions = _interopRequireWildcard(_actions2);

var _actions3 = require('./connection/actions');

var connectionActions = _interopRequireWildcard(_actions3);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = (0, _assign2.default)({}, userActions, connectionActions, settingsActions);
module.exports = exports['default'];

},{"./connection/actions":112,"./settings/actions":113,"./user/actions":114,"babel-runtime/core-js/object/assign":6}],112:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateConnection = updateConnection;
exports.onlineConnection = onlineConnection;
var t = exports.t = {
  UPDATE_CONNECTION: 'connection/UPDATE_CONNECTION',
  ONLINE_STATE: 'connection/ONLINE_STATE'
};

function updateConnection(data) {
  return {
    type: t.UPDATE_CONNECTION,
    data: data
  };
}

function onlineConnection(online) {
  return {
    type: t.ONLINE_STATE,
    online: online
  };
}

},{}],113:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setWeakDialect = setWeakDialect;
exports.changeWeakDialect = changeWeakDialect;
exports.initialSettings = initialSettings;
exports.toggleDefs = toggleDefs;
exports.toggleSite = toggleSite;
exports.toggleField = toggleField;
exports.seenNews = seenNews;
exports.showNews = showNews;
exports.seenReferrals = seenReferrals;
exports.clickReferrals = clickReferrals;
var t = exports.t = {
  SETTINGS_INITIAL: 'settings/SETTINGS_INITIAL',

  TOGGLE_DEFS: 'settings/TOGGLE_DEFS',
  TOGGLE_SITE: 'settings/TOGGLE_SITE',
  TOGGLE_FIELD: 'settings/TOGGLE_FIELD',

  SHOW_NEWS: 'settings/SHOW_NEWS',
  SEEN_NEWS: 'settings/SEEN_NEWS',
  SEEN_REFERRALS: 'settings/SEEN_REFERRALS',
  CLICK_REFERRALS: 'settings/CLICK_REFERRALS',

  SET_WEAK_DIALECT: 'settings/SET_WEAK_DIALECT',
  CHANGE_WEAK_DIALECT: 'settings/CHANGE_WEAK_DIALECT'
};

var DAPI_ACTIONS = exports.DAPI_ACTIONS = [t.CHANGE_WEAK_DIALECT];

//that actions trigger sync extensionSettings to prefs
var CACHED_ACTIONS = exports.CACHED_ACTIONS = [t.TOGGLE_DEFS, t.TOGGLE_SITE, t.TOGGLE_FIELD, t.SEEN_NEWS, t.SEEN_REFERRALS, t.CLICK_REFERRALS];

function setWeakDialect(data) {
  return {
    type: t.SET_WEAK_DIALECT,
    data: data
  };
}

function changeWeakDialect(data) {
  return {
    type: t.CHANGE_WEAK_DIALECT,
    data: data
  };
}

function initialSettings(data) {
  return {
    type: t.SETTINGS_INITIAL,
    data: data
  };
}

function toggleDefs(enabledDefs) {
  return {
    type: t.TOGGLE_DEFS,
    enabledDefs: enabledDefs
  };
}

function toggleSite(enabled, domain) {
  return {
    type: t.TOGGLE_SITE,
    domain: domain,
    enabled: enabled
  };
}

function toggleField(data, domain) {
  return {
    type: t.TOGGLE_FIELD,
    domain: domain,
    data: data
  };
}

function seenNews() {
  return {
    type: t.SEEN_NEWS
  };
}

function showNews(showNews) {
  return {
    type: t.SHOW_NEWS,
    showNews: showNews
  };
}

function seenReferrals() {
  return {
    type: t.SEEN_REFERRALS
  };
}

function clickReferrals() {
  return {
    type: t.CLICK_REFERRALS
  };
}

},{}],114:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUser = setUser;
exports.updateSettings = updateSettings;
exports.setSettings = setSettings;
exports.sessionInvalidate = sessionInvalidate;
exports.incFixed = incFixed;
var t = exports.t = {
  //fully refresh user session in store
  SET_USER: 'user/SET_USER',
  //fully refresh user settings in store
  SET_SETTINGS: 'user/SET_SETTINGS',
  //update user settings and sync in to auth
  UPDATE_SETTINGS: 'user/UPDATE_SETTINGS',
  //invalidate user session and update it from auth
  SESSION_INVALIDATE: 'user/SESSION_INVALIDATE',
  //increase user fixed errors
  INC_FIXED: 'user/INC_FIXED'
};

function setUser(data) {
  return {
    type: t.SET_USER,
    data: data
  };
}

function updateSettings(data) {
  return {
    type: t.UPDATE_SETTINGS,
    data: data
  };
}

function setSettings(data) {
  return {
    type: t.SET_SETTINGS,
    data: data
  };
}

function sessionInvalidate(reason) {
  return {
    type: t.SESSION_INVALIDATE,
    reason: reason
  };
}

function incFixed() {
  return {
    type: t.INC_FIXED
  };
}

},{}],115:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _emitter = require('emitter');

var _emitter2 = _interopRequireDefault(_emitter);

var _forge = require('lib/forge');

var _forge2 = _interopRequireDefault(_forge);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var pget = function pget(prop) {
  return new _promise2.default(function (resolve, reject) {
    try {
      _forge2.default.prefs.get(prop, resolve, function (e) {
        if (e && e.message && e.message.includes('SyntaxError')) {
          _forge2.default.prefs.clear(prop);
          return reject('Prop:' + prop + ' has corrupted value, cleanup');
        }
        reject(e);
      });
    } catch (e) {
      reject(e);
    }
  });
};

var me = (0, _emitter2.default)({
  get: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(props) {
      var isArray, result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              isArray = Array.isArray(props);
              result = void 0;
              _context2.prev = 2;

              if (!isArray) {
                _context2.next = 7;
                break;
              }

              return _context2.delegateYield(_regenerator2.default.mark(function _callee() {
                var values;
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _promise2.default.all(props.map(pget));

                      case 2:
                        values = _context.sent;

                        result = props.reduce(function (obj, prop, i) {
                          return (0, _assign2.default)(obj, (0, _defineProperty3.default)({}, prop, values[i]));
                        }, {});

                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              })(), 't0', 5);

            case 5:
              _context2.next = 10;
              break;

            case 7:
              _context2.next = 9;
              return pget(props);

            case 9:
              result = _context2.sent;

            case 10:
              _context2.next = 16;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t1 = _context2['catch'](2);

              if (isArray) result = {};
              console.warn('prefs get error:', _context2.t1);

            case 16:
              return _context2.abrupt('return', result);

            case 17:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[2, 12]]);
    }));
    return function get(_x) {
      return ref.apply(this, arguments);
    };
  }(),
  set: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(pref, value) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(pref !== null && (typeof pref === 'undefined' ? 'undefined' : (0, _typeof3.default)(pref)) === 'object')) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt('return', (0, _keys2.default)(pref).forEach(function (key) {
                return me.set(key, pref[key]);
              }));

            case 2:

              try {
                _forge2.default.prefs.set(pref, value);
              } catch (e) {
                console.warn('prefs set error', e);
              }

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));
    return function set(_x2, _x3) {
      return ref.apply(this, arguments);
    };
  }(),
  all: function all() {
    return new _promise2.default(function (resolve, reject) {
      try {
        _forge2.default.prefs.all(resolve, reject);
      } catch (e) {
        reject(e);
      }
    });
  },
  clearAll: function clearAll() {
    try {
      _forge2.default.prefs.clearAll();
    } catch (e) {
      console.warn('prefs clearAll error', e);
    }
  }
});

exports.default = me;
module.exports = exports['default'];

},{"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/object/keys":10,"babel-runtime/core-js/promise":12,"babel-runtime/helpers/asyncToGenerator":15,"babel-runtime/helpers/defineProperty":18,"babel-runtime/helpers/typeof":25,"babel-runtime/regenerator":107,"emitter":"emitter","lib/forge":118}],116:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _forge = typeof window !== "undefined" ? window['forge'] : typeof global !== "undefined" ? global['forge'] : null;

var _forge2 = _interopRequireDefault(_forge);

var _sparkMd = require('spark-md5');

var _sparkMd2 = _interopRequireDefault(_sparkMd);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var FELOG = {
  key: 'b37252e300204b00ad697fe1d3b979e1',
  project: '15',
  pingTimeout: 10 * 60 * 1000
};

var GNAR = {
  url: 'https://gnar.grammarly.com',
  qaUrl: 'https://gnar.qagr.io'
};

var mpkey = 'c10dd64c87f70ef5563a63c368797e8c';
var MIXPANEL = {
  qaKey: '7a5c95b5cba1b225d00cc3ba1c410c78',
  key: mpkey,
  cookie: 'mp_' + mpkey + '_mixpanel'
};

var STATSC = {
  URL: 'https://stats-public.grammarly.io/',
  PREFIX: 'grammarly.ui'
};

var GRAMMARLY_DOMAIN = 'grammarly.com';
var GRAMMARLY = 'https://www.' + GRAMMARLY_DOMAIN;

var DAPI = 'https://data.' + GRAMMARLY_DOMAIN;
var app = 'https://app.' + GRAMMARLY_DOMAIN;
var auth = 'https://auth.' + GRAMMARLY_DOMAIN + '/v3';
var authUser = auth + '/user';
var welcomeFandS = GRAMMARLY + '/after_install_page';
var URLS = {
  app: app,
  capi: 'wss://capi.' + GRAMMARLY_DOMAIN + '/freews',
  dapiMimic: DAPI + '/api/mimic',
  dapiProps: DAPI + '/api/props',
  editorDictionary: app + '/profile/dictionary',
  dictionary: 'https://capi.' + GRAMMARLY_DOMAIN + '/api/defs',
  docs: app + '/docs',
  docsApi: 'https://dox.' + GRAMMARLY_DOMAIN + '/documents',

  authSettings: authUser + '/settings',
  authCreatePage: auth + '/redirect-anonymous?location=' + welcomeFandS,
  userOrAnonymous: authUser + '/oranonymous',
  authSignin: auth + '/login',
  authSignup: auth + '/signup',
  signin: GRAMMARLY + '/signin',
  signup: GRAMMARLY + '/signup',
  resetPassword: GRAMMARLY + '/resetpassword',

  raven: 'felog.grammarly.io',

  referral: GRAMMARLY + '/referral?page=extension',
  welcomeC: GRAMMARLY + '/extension-success',
  upgrade: GRAMMARLY + '/upgrade',
  uninstall: GRAMMARLY + '/extension-uninstall',
  terms: GRAMMARLY + '/terms',
  policy: GRAMMARLY + '/privacy-policy',
  pageConfigUrl: 'https://d3cv4a9a9wh0bt.cloudfront.net/browserplugin/config.json'
};

if (!"true") {
  GNAR.url = GNAR.qaUrl;

  var _mpkey = MIXPANEL.qaKey;
  MIXPANEL.key = _mpkey;
  MIXPANEL.cookie = 'mp_' + _mpkey + '_mixpanel';

  STATSC.URL = 'https://stats-public-qane.grammarly.io/';
  URLS.raven = 'qafelog.grammarly.io';
}

function updateUrls() {
  var overwritedUlrs = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  (0, _assign2.default)(URLS, overwritedUlrs);
}

function getVersion() {
  if (!_forge2.default) return;
  return _forge2.default.config.modules.parameters.version;
}

function getUpdateTime() {
  if (!_forge2.default) return;
  return _forge2.default.config.modules.parameters.updateTime;
}

function getUuid() {
  if (!_forge2.default) return;
  return _forge2.default.config.uuid;
}

var news = ['The G logo gets out of the way when you\'re typing', 'Switch between American and British English', 'Quickly disable checking in certain types of text fields', 'A fully redesigned and improved interface'];

var userFields = ['id', 'email', 'firstName', 'anonymous', 'type', 'subscriptionFree', 'premium', 'settings', 'registrationDate', 'mimic', 'groups', 'extensionInstallDate', 'fixed_errors', 'referral'];

// if (!process.env.PROD) { TEMPORARY
userFields.push('token');
// }

var FEATURES = {
  'EXAMPLE_FEATURE': 'example_feature'
};

var DISABLED_FEATURES = {
  'example_feature': {
    'Free': [],
    'Premium': []
  }
};

exports.default = {
  // debug: true,
  news: news,
  newsId: news.length && _sparkMd2.default.hash(news.join('\n')),
  getUpdateTime: getUpdateTime,
  GRAMMARLY_DOMAIN: GRAMMARLY_DOMAIN,
  URLS: URLS,
  updateUrls: updateUrls,
  FELOG: FELOG,
  STATSC: STATSC,
  DAPI: DAPI,
  MIXPANEL: MIXPANEL,
  GNAR: GNAR,
  getVersion: getVersion,
  getUuid: getUuid,
  isTest: !_forge2.default,
  nextVerClass: 'gr_ver_2',
  restrictedAttrs: ['data-gramm_editor', 'data-gramm', 'data-gramm_id', 'gramm_editor', 'readonly', 'pm-container', //we don't support ProseMirror fields for now =(
  ['class', 'redactor-editor'], //we don't support Redactor fields for now =(
  ['aria-label', 'Search Facebook']],
  restrictedParentAttrs: '[data-reactid]',
  userFields: userFields,
  externalEvents: ['changed-user', 'changed-plan', 'changed-dialect', 'cleanup', 'editor-fix'],
  development: document.location.host == '127.0.0.1:3117',
  FEATURES: FEATURES,
  isFeatureDisabled: function isFeatureDisabled(feature, mimic, type) {
    var disabledGroups = DISABLED_FEATURES[feature][type] || [];
    return disabledGroups && mimic && mimic.some(function (group) {
      return disabledGroups.includes(group);
    });
  }
};
module.exports = exports['default'];

}).call(this,typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/object/assign":6,"spark-md5":"spark-md5"}],117:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _util = require('./util');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

//eslint-disable-line

function createEl(html, doc) {
  var div = (doc || document).createElement('div');
  div.innerHTML = html.trim();
  return div.firstElementChild;
}

function renderReactWithParent(reactElement, parent, id) {
  var type = arguments.length <= 3 || arguments[3] === undefined ? 'div' : arguments[3];

  var react = parent[id] || {};
  parent[id] = react;
  if (!react.el) {
    react.el = parent.ownerDocument.createElement(type);
    parent.appendChild(react.el);
  }
  var component = _reactDom2.default.render(reactElement, react.el);

  if (!react.remove) {
    react.remove = function () {
      delete parent[id];
      parent.removeChild(react.el);
      _reactDom2.default.unmountComponentAtNode(react.el);
    };
  }
  return {
    component: component,
    remove: react.remove,
    el: react.el
  };
}

function inEl(el, target) {
  var deep = arguments.length <= 2 || arguments[2] === undefined ? 1000 : arguments[2];

  var i = 0;
  while (el.parentNode && i < deep) {
    if (!(typeof target == 'string') && target == el) return true;
    if (el.id == target || el == target) return true;
    el = el.parentNode;
  }
  return false;
}

function hasClass(_el, cls) {
  if (!_el || _el.className == undefined) return false;
  return _el.classList.contains(cls);
}

function removeClass(_el, cls) {
  if (!_el || !_el.classList) return;
  return _el.classList.remove(cls);
}

function addClass(_el, cls) {
  if (!_el) return;
  if (cls.indexOf(' ') != -1) {
    cls = cls.split(' ');
    for (var i = 0; i < cls.length; i++) {
      _el.classList.add(cls[i]);
    }
    return;
  }
  return _el.classList.add(cls);
}

function toggleClass(el, flag, cls) {
  if (flag) {
    addClass(el, cls);
  } else {
    removeClass(el, cls);
  }
}

function getParentBySel(el, sel) {
  while (el = el.parentNode) {
    if (matchesSelector(el, sel)) return el;
  }
  return false;
}

function parentIsContentEditable(el) {
  while (el = el.parentNode) {
    if (isContentEditable(el)) return el;
  }
  return false;
}

function isContentEditable(el) {
  return el.contentEditable == 'true' || el.contentEditable == 'plaintext-only';
}

function matchesSelector(el, sel) {
  if (!el) return false;
  if (el.matches) return el.matches(sel);
  if (el.matchesSelector) return el.matchesSelector(sel);
  if (el.webkitMatchesSelector) return el.webkitMatchesSelector(sel);
  if (el.mozMatchesSelector) return el.mozMatchesSelector(sel);
  if (window.$ && window.$.is) return window.$(el).is(sel);
}

function isFocused(el) {
  if (document.activeElement && document.activeElement.tagName == 'IFRAME') {
    return el === el.ownerDocument.activeElement;
  } else if (document.activeElement && document.activeElement.tagName == 'BODY') {
    return el === document.activeElement;
  }
  return el === document.activeElement;
}

var lKey = (0, _util.guid)(); //Symbol('listeners') safari tests wtf
function listen(el, event, cb, unbind) {
  var bubble = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];

  if (!el) return;
  if (_lodash2.default.isObject(event)) {
    return _lodash2.default.each(event, function (value, key) {
      listen(el, key, value, unbind);
    }); //args shift
  }

  var func = unbind ? 'removeEventListener' : 'addEventListener';
  var listeners = el[lKey] || [];
  el[lKey] = listeners;
  if (unbind) {
    el[lKey] = listeners.filter(function (l) {
      return !(l.event == event && l.cb == cb);
    });
  } else {
    listeners.push({ event: event, cb: cb });
  }

  el[func](event, cb, bubble);

  if (!"true") {
    //mechanism for firing custom events
    cb.__wrapFunc = cb.__wrapFunc || function (e) {
      e = e || {};
      var target = void 0;
      if (e.detail && typeof e.detail.target == 'string') {
        target = document.querySelector(e.detail.target);
      }
      cb(_lodash2.default.extend({ originalEvent: e, preventDefault: _util._f, stopPropagation: _util._f }, e.detail, { target: target }));
    };
    el[func](event + '-gr', cb.__wrapFunc, bubble);
  }

  return { el: el, event: event, cb: cb, bubble: bubble };
}

function unlisten(el, event, cb, bubble) {
  if (!event && el[lKey]) {
    return el[lKey].each(function (l) {
      return unlisten(el, l.event, l.cb, l.bubble);
    });
  }
  listen(el, event, cb, true, bubble);
}

function on() {
  var _this = this;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  this.addEventListener.apply(this, args);
  return { off: function off() {
      return _off.call.apply(_off, [_this].concat(args));
    } };
}

function _off() {
  this.removeEventListener.apply(this, arguments);
}

function once(event, cb) {
  var _this2 = this;

  var done = function done(e) {
    cb(e);
    _off.call(_this2, event, done);
  };
  on.call(this, event, done);
}

function emit(event, data) {
  var e = document.createEvent('CustomEvent');
  e.initCustomEvent(event, true, true, data);
  this.dispatchEvent(e);
}

function isVisible(el) {
  var style = getComputedStyle(el, null),
      visible = style.getPropertyValue('display') != 'none' && style.getPropertyValue('visibility') != 'hidden' && el.clientHeight > 0;
  return visible;
}

function cs() {
  for (var _len2 = arguments.length, keys = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    keys[_key2] = arguments[_key2];
  }

  return keys.reduce(function (res, cur) {
    return res.concat(!_lodash2.default.isObject(cur) ? cur : (0, _keys2.default)(cur).filter(function (cls) {
      return cur[cls];
    }));
  }, []).join(' ');
}

function maybeAddPx(name, value) {
  return typeof value == 'number' && !cssNumber[dasherize(name)] ? value + 'px' : value;
}

function camelize(str) {
  return str.replace(/-+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  });
}

function camelizeAttrs(obj) {
  return _lodash2.default.transform(obj, function (result, value, key) {
    return result[camelize(key)] = value;
  });
}
function dasherize(str) {
  return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
}

var cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1, 'opacity': 1, 'z-index': 1, 'zoom': 1 };
function css(el, property, value) {
  if (arguments.length < 3) {
    var _ret = function () {
      var element = el;
      if (!element) return {
        v: void 0
      };
      var computedStyle = getComputedStyle(element, '');
      if (typeof property == 'string') {
        return {
          v: element.style[camelize(property)] || computedStyle.getPropertyValue(property)
        };
      } else if (_lodash2.default.isArray(property)) {
        var _ret2 = function () {
          var props = {};
          _lodash2.default.each(property, function (val, prop) {
            props[camelize(val)] = element.style[camelize(val)] || computedStyle.getPropertyValue(val);
          });
          return {
            v: {
              v: props
            }
          };
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret2)) === "object") return _ret2.v;
      }
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
  }

  var result = '';
  if (_lodash2.default.isString(property)) {
    if (!value && value !== 0) {
      el.style.removeProperty(dasherize(property));
    } else {
      result = dasherize(property) + ':' + maybeAddPx(property, value);
    }
  } else {
    for (var key in property) {
      if (!property[key] && property[key] !== 0) {
        el.style.removeProperty(dasherize(key));
      } else {
        result += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';';
      }
    }
  }

  return el.style.cssText += ';' + result;
}

function setCustomCss(field, style) {
  if (!style || !field) return;

  var originStyle = css(field, (0, _keys2.default)(style));
  css(field, style);

  return function () {
    return css(field, originStyle);
  };
}

function getParentByTag(el, tag) {
  while (el = el.parentNode) {
    if (el.tagName == tag) return el;
  }
  return false;
}

function getParentByData(el, key, val) {
  while (el = el.parentNode) {
    if (el.dataset && el.dataset[key] && el.dataset[key] == val) return el;
  }
}

function resolveEl(el, cls) {
  if (hasClass(el, cls)) return el;
  return getParent(el, cls);
}

function getParent(el, cls) {
  while (el = el.parentNode) {
    if (hasClass(el, cls)) return el;
  }
  return false;
}

function parentHasClass(el, cls) {
  if (!el) return false;
  while (el.parentNode) {
    if (hasClass(el, cls)) return el;
    el = el.parentNode;
  }
  return false;
}

function getParentByDepth() {
  var _context;

  var depth = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

  return !depth ? this : (_context = this.parentNode, getParentByDepth).call(_context, --depth);
}

function isParent(el, parent) {
  if (!el) return false;
  while (el.parentNode) {
    if (parent == el.parentNode) return el;
    el = el.parentNode;
  }
  return false;
}

function insertAfter(newElement, targetElement) {
  //target is what you want it to go after. Look for this elements parent.
  var parent = targetElement.parentNode;

  //if the parents lastChild is the targetElement...
  if (parent.lastChild == targetElement) {
    //add the newElement after the target element.
    parent.appendChild(newElement);
  } else {
    // else the target has siblings, insert the new element between the target and it's next sibling.
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}

function insertBefore(newElement, targetElement) {
  targetElement.parentNode.insertBefore(newElement, targetElement);
}

function elementInDocument(element, doc) {
  doc = doc || document;
  while (element) {
    if (element == doc) return true;
    element = element.parentNode;
  }
  return false;
}

function runKeyEvent(e) {
  var evt = void 0,
      defaultView = void 0,
      keycode = void 0;
  var defaultEvent = {
    ctrl: false,
    meta: false,
    shift: false,
    alt: false
  };
  e = _lodash2.default.extend(defaultEvent, e);
  //console.log('event', e)
  try {
    evt = e.el.ownerDocument.createEvent('KeyEvents');
    defaultView = e.el.ownerDocument.defaultView;
    keycode = (0, _util.keyCode)(e);

    evt.initKeyEvent(e.type, // in DOMString typeArg,
    true, // in boolean canBubbleArg,
    true, // in boolean cancelableArg,
    defaultView, // in nsIDOMAbstractView viewArg, window
    e.ctrl, // in boolean ctrlKeyArg,
    e.alt, // in boolean altKeyArg,
    e.shift, // in boolean shiftKeyArg,
    e.meta, // in boolean metaKeyArg,
    keycode, // key code
    keycode); // char code.
  } catch (err) {
    evt = e.el.ownerDocument.createEvent('UIEvents');
    evt.initUIEvent(e.name, true, true, window, 1);
    evt.keyCode = keycode;
    evt.which = keycode;
    evt.charCode = keycode;
    evt.ctrlKey = e.ctrl;
    evt.altKey = e.alt;
    evt.shiftKey = e.shift;
    evt.metaKey = e.metaKey;
  }

  e.el.dispatchEvent(evt);
}

function docHidden(doc) {
  if (typeof doc.hidden !== 'undefined') return doc.hidden;
  if (typeof doc.mozHidden !== 'undefined') return doc.mozHidden;
  if (typeof doc.webkitHidden !== 'undefined') return doc.webkitHidden;
  if (typeof doc.msHidden !== 'undefined') return doc.msHidden;
  return false;
}

function visibilityEvent(doc) {
  if (typeof doc.hidden !== 'undefined') return 'visibilitychange';
  if (typeof doc.mozHidden !== 'undefined') return 'mozvisibilitychange';
  if (typeof doc.webkitHidden !== 'undefined') return 'webkitvisibilitychange';
  if (typeof doc.msHidden !== 'undefined') return 'msvisibilitychange';
  return false;
}

function transformProp() {
  var doc = arguments.length <= 0 || arguments[0] === undefined ? document : arguments[0];

  if (typeof doc.body.style.transform !== 'undefined') return 'transform';
  if (typeof doc.body.style.WebkitTransform !== 'undefined') return 'WebkitTransform';
  if (typeof doc.body.style.MozTransform !== 'undefined') return 'MozTransform';
}

/*
  el, 'width', 'height'
*/
function compStyle(el) {
  if (!el) return;
  var doc = el.ownerDocument;
  if (!doc) return;
  var win = doc.defaultView || window;
  if (!win) return;
  var s = win.getComputedStyle(el, null);
  if (!s) return;

  for (var _len3 = arguments.length, props = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    props[_key3 - 1] = arguments[_key3];
  }

  if (props.length == 1) return s.getPropertyValue(props[0]);

  return props.reduce(function (result, prop) {
    return (0, _extends4.default)({}, result, (0, _defineProperty3.default)({}, prop, s.getPropertyValue(prop)));
  }, {});
}

function classSelector(cls) {
  return cls.split(' ').map(function (c) {
    return c[0] != '.' ? '.' + c : c;
  }).join('').trim();
}

function selectorAll(cls) {
  for (var _len4 = arguments.length, classes = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    classes[_key4 - 1] = arguments[_key4];
  }

  if (classes.length > 0) {
    var _ret3 = function () {
      var result = [];
      result.push(selectorAll(cls));
      classes.forEach(function (c) {
        return result.push(selectorAll(c));
      });
      return {
        v: result.join(', ')
      };
    }();

    if ((typeof _ret3 === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret3)) === "object") return _ret3.v;
  }
  //check dots
  cls = cls.split(', ').map(function (c) {
    return c[0] != '.' ? '.' + c : c;
  }).join(', ').trim();
  return cls + ', ' + cls + ' *';
}

function nodeInTree(tree, node) {
  if (node == tree) return true;
  if (!tree.children) return false;
  for (var i = 0; i < tree.children.length; i++) {
    if (nodeInTree(tree.children[i], node)) return true;
  }
  return false;
}

function watchNodeRemove(node, cb) {
  var callback = function callback(mutations) {
    mutations.map(function (mr) {
      if (mr.removedNodes.length == 0) return;
      var nodes = mr.removedNodes,
          len = nodes.length;
      for (var i = 0; i < len; i++) {
        var tree = nodes[i];
        if (tree.contains && tree.contains(node) || nodeInTree(tree, node)) {
          mo.disconnect();
          cb();
        }
      }
    });
  },
      mo = new MutationObserver(callback);

  mo.observe(node.ownerDocument.body, { childList: true, subtree: true });
}

function whichAnimationEndEvent() {
  var t = void 0,
      el = document.createElement('fakeelement'),
      transitions = {
    'animation': 'animationend',
    'MozAnimation': 'animationend',
    'WebkitAnimation': 'webkitAnimationEnd'
  };

  for (t in transitions) {
    if (el.style[t] != undefined) {
      return transitions[t];
    }
  }
}
function transitionEndEventName() {
  var i = void 0,
      el = document.createElement('fakeelement'),
      transitions = {
    'transition': 'transitionend',
    'MozTransition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
  };

  for (i in transitions) {
    if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
      return transitions[i];
    }
  }
}

function addIframeCss(frameDoc) {
  if (typeof GR_INLINE_STYLES == 'undefined') return;

  var style = frameDoc.createElement('style');
  /*eslint-disable*/
  style.innerHTML = GR_INLINE_STYLES;
  /*eslint-enable*/
  try {
    frameDoc.querySelector('head').appendChild(style);
  } catch (e) {
    console.log('can\'t append style', e);
  }
}

function setGRAttributes(el, id) {
  el.setAttribute('data-gramm_id', id);
  el.setAttribute('data-gramm', true);
}

function emitDomEvent(key) {
  var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var e = document.createEvent('CustomEvent');
  e.initCustomEvent(key + '-gr', true, true, data);
  document.dispatchEvent(e);
}

function addRange(doc, range) {
  var s = doc.getSelection();
  s.removeAllRanges();
  s.addRange(range);
}

function setDomRange(doc, data) {
  var range = doc.createRange();
  range.setStart(data.anchorNode, data.anchorOffset);
  range.setEnd(data.focusNode, data.focusOffset);
  addRange(doc, range);
}

exports.default = {
  isVisible: isVisible,
  createEl: createEl,
  renderReactWithParent: renderReactWithParent,
  inEl: inEl,
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  setDomRange: setDomRange,
  matchesSelector: matchesSelector,
  getParentBySel: getParentBySel,
  getParentByData: getParentByData,
  getParentByDepth: getParentByDepth,
  parentIsContentEditable: parentIsContentEditable,
  isContentEditable: isContentEditable,
  isFocused: isFocused,
  listen: listen,
  unlisten: unlisten,
  emitDomEvent: emitDomEvent,
  on: on, off: _off, once: once, emit: emit,
  css: css,
  setCustomCss: setCustomCss,
  addIframeCss: addIframeCss,
  setGRAttributes: setGRAttributes,
  compStyle: compStyle,
  camelize: camelize,
  camelizeAttrs: camelizeAttrs,
  insertBefore: insertBefore,
  insertAfter: insertAfter,
  elementInDocument: elementInDocument,
  getParentByTag: getParentByTag,
  parentHasClass: parentHasClass,
  isParent: isParent,
  resolveEl: resolveEl,
  getParent: getParent,
  runKeyEvent: runKeyEvent,
  docHidden: docHidden,
  visibilityEvent: visibilityEvent,
  transformProp: transformProp,
  cs: cs,
  selectorAll: selectorAll,
  classSelector: classSelector,
  watchNodeRemove: watchNodeRemove,
  whichAnimationEndEvent: whichAnimationEndEvent,
  transitionEndEventName: transitionEndEventName
};
module.exports = exports['default'];

},{"./util":149,"babel-runtime/core-js/object/keys":10,"babel-runtime/helpers/defineProperty":18,"babel-runtime/helpers/extends":19,"babel-runtime/helpers/typeof":25,"lodash":"lodash","react":"react","react-dom":"react-dom"}],118:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = typeof window !== "undefined" ? window['forge'] : typeof global !== "undefined" ? global['forge'] : null;
module.exports = exports['default'];

}).call(this,typeof window !== "undefined" ? window : {})
},{}],119:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

var _forge = require('./forge');

var _forge2 = _interopRequireDefault(_forge);

var _util = require('./util');

var _defaults = require('./page-config/defaults');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function currentUrl() {
  return new _promise2.default(function (resolve) {
    var retry = setTimeout(function () {
      return _forge2.default.tabs.getCurrentTabUrl(resolve);
    }, 2000);
    _forge2.default.tabs.getCurrentTabUrl(function (url) {
      clearTimeout(retry);
      resolve(url);
    });
  });
}

function getDomain(el, cb) {
  if ((0, _util.isFunction)(el)) {
    cb = el;
    el = '';
  }

  if (cb) {
    if (!(0, _util.isBgOrPopup)() && _forge2.default) {
      _message2.default.emitBackground('get-domain', {}, cb);
      return;
    }
    if (_forge2.default && _forge2.default.tabs) {
      currentUrl().then(function (url) {
        return cb(domainFromUrl(url));
      });
    } else {
      cb(domainFromEl(el));
    }
    return;
  }

  return domainFromEl(el);
}

function promiseGetDomain(el) {
  if (!(0, _util.isBgOrPopup)() && _forge2.default) {
    return _message2.default.promiseBackground('get-domain');
  }

  if (_forge2.default && _forge2.default.tabs) {
    return _promise2.default.race([currentUrl().then(domainFromUrl), (0, _util.delay)(10000).then(function () {
      throw new Error('Request to forge.tabs.getCurrentTabUrl rejected by timeout');
    })]);
  }

  return domainFromEl(el);
}

function domainFromEl(el) {
  var doc = el && el.ownerDocument || document;
  var location = doc.location || doc.defaultView.location;
  if (!location) return '';

  return stripDomain(location.hostname);
}

function domainFromUrl(url) {
  if ((0, _util.isFF)() && /^about:/.test(url)) return url;

  var location = document.createElement('a');
  location.href = url;
  return stripDomain(location.hostname);
}

var isFacebookSite = function isFacebookSite() {
  return _defaults.FACEBOOK_SITES.includes(getDomain());
};
var isJiraSite = function isJiraSite() {
  return (/\.atlassian\.net/.test(getDomain())
  );
};

var stripDomain = function stripDomain(domain) {
  return domain.replace('www.', '');
};

function getUrl(el) {
  var doc = el && el.ownerDocument || document;
  var location = doc.location || doc.defaultView.location;
  if (!location) return '';
  return location.pathname + location.search;
}

function getFavicon() {
  var isAbsolute = new RegExp('^(?:[a-z]+:)?//', 'i');
  var favicon = '';
  var links = document.getElementsByTagName('link');
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var rel = '"' + link.getAttribute('rel') + '"';
    var regexp = /(\"icon )|( icon\")|(\"icon\")|( icon )/i;
    if (rel.search(regexp) != -1) {
      favicon = link.getAttribute('href');
    }
  }
  if (!favicon) {
    favicon = 'favicon.ico';
  }
  if (isAbsolute.test(favicon)) {
    return favicon;
  }
  if (favicon[0] != '/') {
    return '//' + document.location.host + document.location.pathname + favicon;
  }
  return '//' + document.location.host + favicon;
}

exports.default = {
  getDomain: getDomain,
  isFacebookSite: isFacebookSite,
  isJiraSite: isJiraSite,
  currentUrl: currentUrl,
  promiseGetDomain: promiseGetDomain,
  domainFromUrl: domainFromUrl,
  getFavicon: getFavicon,
  getUrl: getUrl
};
module.exports = exports['default'];

},{"./forge":118,"./message":120,"./page-config/defaults":121,"./util":149,"babel-runtime/core-js/promise":12}],120:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _emitter = require('emitter');

var _emitter2 = _interopRequireDefault(_emitter);

var _forge = require('./forge');

var _forge2 = _interopRequireDefault(_forge);

var _util = require('./util');

var _dom = require('./dom');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var errorEmitter = (0, _emitter2.default)({});
var Listeners = {};

function one(type, cb) {
  on(type, _cb);

  function _cb() {
    off(type, _cb);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    cb.apply(this, data);
  }
}

function on(type, callback, error, _isBg) {
  //type '__bgerror' handled by errorEmitter
  if (type == '__bgerror') {
    return errorEmitter.on('__bgerror', callback);
  }

  var listeners = Listeners[type] = Listeners[type] || [];

  if (!listeners.length) {
    listeners.push(callback); //when we have buffered messages, we process them immediately
    try {
      _forge2.default.message.listen(type, function () {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)(listeners), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var l = _step.value;
            l.apply(undefined, arguments);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }, error, _isBg);
    } catch (e) {
      emitError(e);
    }
  } else {
    listeners.push(callback);
  }
}

function off(type, callback) {
  if (type == '__bgerror') {
    return errorEmitter.off('__bgerror', callback);
  }

  var listeners = Listeners[type];
  if (!listeners) return;
  var i = listeners.indexOf(callback);
  if (i != -1) listeners.splice(i, 1);
  if (listeners.length == 0) delete Listeners[type];
}

function emitTabs(type) {
  var content = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var callback = arguments[2];
  var error = arguments[3];

  try {
    _forge2.default.message.broadcast(type, content, callback, error);
  } catch (e) {
    emitError(e);
  }
}

function emitTo(tab, type) {
  var content = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
  var callback = arguments[3];
  var error = arguments[4];

  try {
    if (!tab) throw TypeError('emitTo can\'t be used without destination point');
    _forge2.default.message.sendTo(tab, type, content, callback, error);
  } catch (e) {
    emitError(e);
  }
}

function emitFocusedTab(type, content, callback, error) {
  //focussed wtf? http://www.future-perfect.co.uk/grammar-tip/is-it-focussed-or-focused/
  try {
    _forge2.default.message.toFocussed(type, content, callback, error);
  } catch (e) {
    emitError(e);
  }
}

function emitBackground(type, content, callback, error) {
  try {
    _forge2.default.message.broadcastBackground(type, content, callback, error);
  } catch (e) {
    emitError(e);
  }
}

function promiseBackground(message) {
  var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var timeout = arguments.length <= 2 || arguments[2] === undefined ? 10000 : arguments[2];

  var request = new _promise2.default(function (resolve, reject) {
    try {
      _forge2.default.message.broadcastBackground(message, data, resolve, reject);
    } catch (e) {
      reject(e);
      emitError(e);
    }
  });

  return _promise2.default.race([request, (0, _util.delay)(timeout).then(function () {
    throw new Error('Request to bg page (' + message + ') rejected by timeout');
  })]);
}

var emitError = _lodash2.default.throttle(function (e) {
  return errorEmitter.emit('__bgerror', e);
}, 1000);
(0, _util.isBg)() && (0, _dom.listen)(document, 'grammarly:offline', function () {
  return emitError('proxy dead');
});

exports.default = {
  on: on,
  one: one,
  off: off,
  emitError: emitError,
  emitTabs: emitTabs,
  emitTo: emitTo,
  emitFocusedTab: emitFocusedTab,
  emitBackground: emitBackground,
  promiseBackground: promiseBackground
};
module.exports = exports['default'];

},{"./dom":117,"./forge":118,"./util":149,"babel-runtime/core-js/get-iterator":3,"babel-runtime/core-js/promise":12,"emitter":"emitter","lodash":"lodash"}],121:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _PAGE_CONFIG_INTERNAL;

var _lodash = require('lodash');

var _config = require('lib/config');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var PROTOCOL_VERSION = '1.0';

var SITES_TO_RELOAD = ['inbox.google.com', 'mail.google.com', 'yahoo.com', 'mail.live.com', 'facebook.com', 'tumblr.com', 'stackoverflow.com', 'wordpress.com', 'wordpress.org', 'blogspot.com'];

var FACEBOOK_SITES = ['facebook.com', 'messenger.com', 'work.fb.com', 'business.facebook.com'];

var HTML_GHOST_SITES = ['twitter.com'].concat(FACEBOOK_SITES);

var CUSTOM_UNSUPPORTED_MESSAGES = {
  'drive.google.com': {
    title: 'Google Drive',
    message: 'We hope to support Google Drive apps<br/> in the future, but for now please use your</br> <a class="openGrammarly" href="' + _config.URLS.app + '">Grammarly Editor</a>.'
  },
  'docs.google.com': {
    title: 'Google Drive',
    message: 'We hope to support Google Drive apps<br/> in the future, but for now please use your</br> <a class="openGrammarly" href="' + _config.URLS.app + '">Grammarly Editor</a>.'
  }
};

var UPDATE_30M = 30 * 60 * 1000; // 30m
var UPDATE_5M = 5 * 60 * 1000; // 5m
var PAGE_CONFIG_DEFAULT_INTERVAL = "true" ? UPDATE_30M : UPDATE_5M;

var PAGE_CONFIG_UPDATE_INTERVALS = [10 * 60 * 1000, // 10m
PAGE_CONFIG_DEFAULT_INTERVAL, 60 * 60 * 1000, // 60m
3 * 60 * 60 * 1000, // 3h
12 * 60 * 60 * 1000, // 12h
24 * 60 * 60 * 1000, // 24h
365 * 24 * 60 * 60 * 1000 // turn off
];

/*
 * Rules that overrides page config from CDN
 * !!! Use with caution for development
 */
var OVERRIDE_PAGE_CONFIG = {}
// 'quora.com': { enabled: true, disabledBrowsers: [] }

/*
 * List of app-specific pages, not on CDN
 */
;var PAGE_CONFIG_INTERNAL = (_PAGE_CONFIG_INTERNAL = {
  'version': { enabled: false, servicePage: true },
  'extensions': { enabled: false, servicePage: true },
  'settings': { enabled: false, servicePage: true },
  'com.safari.grammarlyspellcheckergrammarchecker': { enabled: false, matchPartOfUrl: true, servicePage: true }
}, (0, _defineProperty3.default)(_PAGE_CONFIG_INTERNAL, 'app.' + _config.GRAMMARLY_DOMAIN, { enabled: false, grammarlyEditor: true }), (0, _defineProperty3.default)(_PAGE_CONFIG_INTERNAL, 'linkedin.com', {
  pages: {
    '/messaging': {
      afterReplaceEvents: ['input']
    }
  }
}), (0, _defineProperty3.default)(_PAGE_CONFIG_INTERNAL, 'plus.google.com', {
  afterReplaceEvents: ['keyup'],
  minFieldHeight: 0,
  minFieldWidth: 0
}), (0, _defineProperty3.default)(_PAGE_CONFIG_INTERNAL, 'facebook.com', {
  minFieldHeight: 0
}), (0, _defineProperty3.default)(_PAGE_CONFIG_INTERNAL, 'mail.google.com', {
  fields: [{ name: 'to' }, { name: 'cc' }, { name: 'bcc' }, { className: 'vO' }],
  subframes: false
}), (0, _defineProperty3.default)(_PAGE_CONFIG_INTERNAL, 'drive.google.com', {
  track: true
}), (0, _defineProperty3.default)(_PAGE_CONFIG_INTERNAL, 'docs.google.com', {
  track: true
}), (0, _defineProperty3.default)(_PAGE_CONFIG_INTERNAL, 'app.asana.com', {
  fields: [{ className: 'task-row-text-input' }]
}), (0, _defineProperty3.default)(_PAGE_CONFIG_INTERNAL, 'tumblr.com', {
  fields: [{ attr: ['aria-label', 'Post title'] }, { attr: ['aria-label', 'Type or paste a URL'] }]
}), _PAGE_CONFIG_INTERNAL);

/*
 * Backup copy of CDN config
 */
var PAGE_CONFIG_DEFAULT = {
  'hootsuite.com': { enabled: false },
  'chrome.google.com': { enabled: false },
  'facebook.com': {
    enabled: true,
    pages: {
      '.*\/notes': {
        enabled: false
      }
    }
  },
  'onedrive.live.com': { enabled: false },
  'docs.com': { enabled: false },
  'sp.docs.com': { enabled: false },
  'docs.google.com': { enabled: false },
  'drive.google.com': { enabled: false },
  'texteditor.nsspot.net': { enabled: false },
  'jsbin.com': { enabled: false },
  'jsfiddle.net': { enabled: false },
  'quora.com': { enabled: false },
  'paper.dropbox.com': { enabled: false },
  'mail.live.com': { enabled: false, matchPartOfUrl: true },
  'imperavi.com': { enabled: false },
  'usecanvas.com': { enabled: false }
};

/*
 * Default page config. CDN config overrides any domain in the list
 */
var PAGE_CONFIG = {
  pageConfig: (0, _lodash.merge)({}, PAGE_CONFIG_DEFAULT, PAGE_CONFIG_INTERNAL)
};

exports.default = {
  PAGE_CONFIG: PAGE_CONFIG,
  OVERRIDE_PAGE_CONFIG: OVERRIDE_PAGE_CONFIG,
  PAGE_CONFIG_DEFAULT_INTERVAL: PAGE_CONFIG_DEFAULT_INTERVAL,
  PAGE_CONFIG_UPDATE_INTERVALS: PAGE_CONFIG_UPDATE_INTERVALS,
  PROTOCOL_VERSION: PROTOCOL_VERSION,
  SITES_TO_RELOAD: SITES_TO_RELOAD,
  CUSTOM_UNSUPPORTED_MESSAGES: CUSTOM_UNSUPPORTED_MESSAGES,
  FACEBOOK_SITES: FACEBOOK_SITES,
  HTML_GHOST_SITES: HTML_GHOST_SITES
};
module.exports = exports['default'];

},{"babel-runtime/helpers/defineProperty":18,"lib/config":116,"lodash":"lodash"}],122:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dom = require('lib/dom');

var _config = require('lib/config');

var _tracking = require('lib/tracking');

var _request = require('lib/request');

var _popupSettings = {
  'safari': 'safari',
  'gr-popup-wrapper': 'gr-popup-wrapper',
  'windows': 'windows',
  'setting_item': 'setting_item',
  'errors': 'errors',
  'descr': 'descr',
  'thin_text': 'thin_text',
  'footer': 'footer',
  'gr_popup_settings': 'gr_popup_settings',
  'footer_btn': 'footer_btn',
  'line': 'line',
  'short_border': 'short_border',
  'top': 'top',
  'show_news': 'show_news',
  'news': 'news',
  'news_content': 'news_content',
  'close_news': 'close_news',
  'not_supported': 'not_supported',
  'checkbox_check': 'checkbox_check',
  'site_switcher': 'site_switcher',
  'upgrade': 'upgrade',
  'def_switcher': 'def_switcher',
  'on': 'on',
  'off': 'off',
  'upgraded': 'upgraded',
  'content': 'content',
  'summary': 'summary',
  'since': 'since',
  'has_favicon': 'has_favicon',
  'favicon': 'favicon',
  'domain': 'domain',
  'no_fixes': 'no_fixes',
  'lblCount': 'lblCount',
  'upgrade_title': 'upgrade_title',
  'my_grammarly': 'my_grammarly',
  'new_document': 'new_document',
  'unsupported_site': 'unsupported_site',
  'unsupported_item': 'unsupported_item',
  'unsupported_title': 'unsupported_title',
  'domain_in_details': 'domain_in_details',
  'unsupported_temporary': 'unsupported_temporary',
  'unsupported_permanently': 'unsupported_permanently',
  'unsupported_grammarly': 'unsupported_grammarly',
  'diamond': 'diamond'
};

var _popupSettings2 = _interopRequireDefault(_popupSettings);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Footer = function (_React$Component) {
  (0, _inherits3.default)(Footer, _React$Component);

  function Footer() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Footer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Footer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.addDocument = function () {
      function requestError(error) {
        (0, _tracking.call)('felog.warn', 'fetch_newdoc_fail', { error: error });
        console.error('request failed', error);
      }

      var go = function go(docId) {
        var url = _config.URLS.docs + '/' + docId;
        (0, _tracking.call)('statsc.ui.increment', 'activity:extension_popup_goto.footer');
        _this.props.openUrl(url);
      };

      return (0, _request.fetch)(_config.URLS.docsApi, {
        data: { content: '' },
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      }).then(function (_ref) {
        var id = _ref.id;
        return go(id);
      }).catch(requestError);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: _popupSettings2.default.footer }, _react2.default.createElement('span', { onClick: this.addDocument, className: (0, _dom.cs)(_popupSettings2.default.new_document, _popupSettings2.default.footer_btn) }, 'New Document'), _react2.default.createElement('a', { href: _config.URLS.app, target: '_blank', className: (0, _dom.cs)(_popupSettings2.default.my_grammarly, _popupSettings2.default.footer_btn) }, 'My Grammarly'));
    }
  }]);
  return Footer;
}(_react2.default.Component);

exports.default = Footer;
module.exports = exports['default'];

},{"babel-runtime/core-js/object/get-prototype-of":9,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"babel-runtime/helpers/inherits":20,"babel-runtime/helpers/possibleConstructorReturn":22,"lib/config":116,"lib/dom":117,"lib/request":138,"lib/tracking":145,"react":"react"}],123:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dom = require('lib/dom');

var _config = require('lib/config');

var _util = require('lib/util');

var _headerComponent = {
  'header': '_7786d6-header',
  'logo': '_7786d6-logo',
  'chrome': '_7786d6-chrome',
  'safari': '_7786d6-safari',
  'firefox': '_7786d6-firefox'
};

var _headerComponent2 = _interopRequireDefault(_headerComponent);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
  return _react2.default.createElement('div', { className: _headerComponent2.default.header }, _react2.default.createElement('a', { target: '_blank', href: _config.URLS.app, className: (0, _dom.cs)(_headerComponent2.default.logo, _headerComponent2.default[(0, _util.getBrowser)()]) }));
};

module.exports = exports['default'];

},{"lib/config":116,"lib/dom":117,"lib/util":149,"react":"react"}],124:[function(require,module,exports){
'use strict';

window.IS_POPUP = document.querySelector('.popup');
if (window.IS_POPUP) {
  require('./popup');
}

},{"./popup":126}],125:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainView = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = function (store, actions) {
  var mapStateToProps = function mapStateToProps(state) {
    return state;
  };
  var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    return { actions: actions };
  };

  var View = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MainView);

  (0, _reactDom.render)(_react2.default.createElement(_reactRedux.Provider, { store: store }, _react2.default.createElement(View, {
    close: closePopup,
    resize: updatePopupSize,
    openUrl: openUrl
  })), document.querySelector('.popup'));
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _dom = require('lib/dom');

var _message = require('lib/message');

var _message2 = _interopRequireDefault(_message);

var _tracking = require('lib/tracking');

var _signin = require('./signin');

var _signin2 = _interopRequireDefault(_signin);

var _settings = require('./settings');

var _settings2 = _interopRequireDefault(_settings);

var _unsupported = require('./unsupported');

var _unsupported2 = _interopRequireDefault(_unsupported);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MainView = exports.MainView = function (_React$Component) {
  (0, _inherits3.default)(MainView, _React$Component);

  function MainView() {
    (0, _classCallCheck3.default)(this, MainView);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MainView).apply(this, arguments));
  }

  (0, _createClass3.default)(MainView, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.props.resize();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _context,
          _this2 = this;

      this.props.resize({ force: true });

      // Proxy for popup links
      (_context = (0, _reactDom.findDOMNode)(this), _dom.on).call(_context, 'click', function (e) {
        var target = e.target;
        var el = target.nodeName == 'A' ? target : target.parentNode.nodeName == 'A' ? target.parentNode : null;

        if (el) {
          e.preventDefault();
          _this2.processHrefClick(el);
        }
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _context2;

      (_context2 = document, _dom.on).call(_context2, 'popup-open', this.props.resize);
    }
  }, {
    key: 'processHrefClick',
    value: function processHrefClick(_ref) {
      var href = _ref.href;
      var dataset = _ref.dataset;

      if (dataset.fire) {
        _tracking.fire.apply(undefined, (0, _toConsumableArray3.default)(dataset.fire.split(', ')));
      } else {
        (0, _tracking.call)('statsc.ui.increment', 'activity:extension_popup_goto.main');
      }

      href && openUrl(href);
    }
  }, {
    key: 'render',
    value: function render() {
      var _true$anonymous2;

      var props = this.props;
      var anonymous = props.user.anonymous;
      var config = props.config;
      var enabled = config.enabled;
      var servicePage = config.servicePage;

      var _true$anonymous = (_true$anonymous2 = {
        true: _react2.default.createElement(_unsupported2.default, props)
      }, (0, _defineProperty3.default)(_true$anonymous2, enabled || servicePage, _react2.default.createElement(_settings2.default, props)), (0, _defineProperty3.default)(_true$anonymous2, anonymous, _react2.default.createElement(_signin2.default, props)), _true$anonymous2);

      var component = _true$anonymous.true;

      return _react2.default.createElement('div', null, component);
    }
  }]);
  return MainView;
}(_react2.default.Component);

function closePopup() {
  (0, _dom.emitDomEvent)('close-popup');
}

function updatePopupSize() {
  var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var force = _ref2.force;

  (0, _dom.emitDomEvent)('update-window-size', { force: force });
}

function openUrl(url) {
  _message2.default.emitBackground('open-url', url);
  closePopup();
}

},{"./settings":129,"./signin":135,"./unsupported":137,"babel-runtime/core-js/object/get-prototype-of":9,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"babel-runtime/helpers/defineProperty":18,"babel-runtime/helpers/inherits":20,"babel-runtime/helpers/possibleConstructorReturn":22,"babel-runtime/helpers/toConsumableArray":24,"lib/dom":117,"lib/message":120,"lib/tracking":145,"react":"react","react-dom":"react-dom","react-redux":"react-redux"}],126:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var init = exports.init = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var isInitialized, initTime, _createMirrorStore, store, actions;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isInitialized = false, initTime = new Date();

            (0, _dom.addClass)(document.documentElement, (0, _util.getBrowser)());
            (0, _util.isWindows)() && (0, _dom.addClass)(document.documentElement, 'windows');

            _createMirrorStore = (0, _storeMirror.createMirrorStore)(function (data) {
              if (isInitialized) return; // TODO: find better way to render popup once

              isInitialized = true;
              (0, _tracking.call)('statsc.ui.timing', 'stability:setting_popup.open', new Date() - initTime);
              show(store, actions);
            });
            store = _createMirrorStore.store;
            actions = _createMirrorStore.actions;

            _message2.default.emitBackground('tab-connected', { tab: 'popup' });

            (0, _util.asyncCall)(function () {
              return !isInitialized && (0, _tracking.call)('felog.warn', 'settings_not_showed_in_2s');
            }, 2000);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return function init() {
    return ref.apply(this, arguments);
  };
}();

exports.track = track;

var _dom = require('lib/dom');

var _message = require('lib/message');

var _message2 = _interopRequireDefault(_message);

var _tracking = require('lib/tracking');

var _storeMirror = require('lib/store-mirror');

var _util = require('lib/util');

var _mainView = require('./main-view');

var _mainView2 = _interopRequireDefault(_mainView);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

if (!"true") {
  require('../test-api')();
}

init().catch(function (e) {
  return console.log('EROROR: POPUP INIT', e.message);
});

function track(state, actions) {
  var config = state.config;
  var user = state.user;
  var settings = state.settings;
  var enabled = config.enabled;

  (0, _tracking.fire)('popup-open');

  if (user.anonymous) return;

  if (!enabled) {
    (0, _tracking.fire)('popup-open-on-unsupported');
  } else {
    settings.showNews && actions.seenNews();

    if (user.referral) {
      (0, _tracking.fire)('referral-shown', 'menu');
      !settings.referralNewsBadge && actions.seenReferrals();
    }
  }
}

function show(store, actions) {
  console.warn('RENDER FROM', store, actions);
  (0, _mainView2.default)(store, actions);

  (0, _util.isChrome)() ? track(store.getState(), actions) : document.addEventListener('popup-open', function () {
    track(store.getState(), actions);
    _message2.default.emitBackground('tab-connected', { tab: 'popup' });
  });
}

},{"../test-api":141,"./main-view":125,"babel-runtime/helpers/asyncToGenerator":15,"babel-runtime/regenerator":107,"lib/dom":117,"lib/message":120,"lib/store-mirror":140,"lib/tracking":145,"lib/util":149}],127:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dom = require('lib/dom');

var _tracking = require('lib/tracking');

var _checkbox = {
  'select_checkbox': '_3872b4-select_checkbox',
  'checkbox': '_3872b4-checkbox',
  'checkbox_check': '_3872b4-checkbox_check',
  'checkbox_check_round': '_3872b4-checkbox_check_round'
};

var _checkbox2 = _interopRequireDefault(_checkbox);

var _popupSettings = {
  'safari': 'safari',
  'gr-popup-wrapper': 'gr-popup-wrapper',
  'windows': 'windows',
  'setting_item': 'setting_item',
  'errors': 'errors',
  'descr': 'descr',
  'thin_text': 'thin_text',
  'footer': 'footer',
  'gr_popup_settings': 'gr_popup_settings',
  'footer_btn': 'footer_btn',
  'line': 'line',
  'short_border': 'short_border',
  'top': 'top',
  'show_news': 'show_news',
  'news': 'news',
  'news_content': 'news_content',
  'close_news': 'close_news',
  'not_supported': 'not_supported',
  'checkbox_check': 'checkbox_check',
  'site_switcher': 'site_switcher',
  'upgrade': 'upgrade',
  'def_switcher': 'def_switcher',
  'on': 'on',
  'off': 'off',
  'upgraded': 'upgraded',
  'content': 'content',
  'summary': 'summary',
  'since': 'since',
  'has_favicon': 'has_favicon',
  'favicon': 'favicon',
  'domain': 'domain',
  'no_fixes': 'no_fixes',
  'lblCount': 'lblCount',
  'upgrade_title': 'upgrade_title',
  'my_grammarly': 'my_grammarly',
  'new_document': 'new_document',
  'unsupported_site': 'unsupported_site',
  'unsupported_item': 'unsupported_item',
  'unsupported_title': 'unsupported_title',
  'domain_in_details': 'domain_in_details',
  'unsupported_temporary': 'unsupported_temporary',
  'unsupported_permanently': 'unsupported_permanently',
  'unsupported_grammarly': 'unsupported_grammarly',
  'diamond': 'diamond'
};

var _popupSettings2 = _interopRequireDefault(_popupSettings);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var DefsSwitcher = function (_React$Component) {
  (0, _inherits3.default)(DefsSwitcher, _React$Component);

  function DefsSwitcher() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DefsSwitcher);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(DefsSwitcher)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.onEnableDefsClick = function (e) {
      var actions = _this.props.actions;

      var enabled = e.target.checked;
      actions.toggleDefs(enabled);
      (0, _tracking.fire)('change-defs', { enabled: enabled });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DefsSwitcher, [{
    key: 'render',
    value: function render() {
      var enabledDefs = this.props.settings.enabledDefs;

      var defsSwitcherCls = (0, _dom.cs)(_popupSettings2.default.def_switcher, _popupSettings2.default.line, _popupSettings2.default.setting_item, enabledDefs ? _popupSettings2.default.on : _popupSettings2.default.off);

      return _react2.default.createElement('div', { className: defsSwitcherCls }, _react2.default.createElement('label', { className: _checkbox2.default.select_checkbox }, 'Show Definitions and Synonyms ', _react2.default.createElement('br', null), 'via Double Clicks (All Sites)', _react2.default.createElement('input', { className: _checkbox2.default.checkbox, onChange: this.onEnableDefsClick, checked: enabledDefs, type: 'checkbox' }), _react2.default.createElement('div', { className: _checkbox2.default.checkbox_check }, _react2.default.createElement('div', { className: _checkbox2.default.checkbox_check_round }))), _react2.default.createElement('div', { className: _popupSettings2.default.short_border }));
    }
  }]);
  return DefsSwitcher;
}(_react2.default.Component);

exports.default = DefsSwitcher;
module.exports = exports['default'];

},{"babel-runtime/core-js/object/get-prototype-of":9,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"babel-runtime/helpers/inherits":20,"babel-runtime/helpers/possibleConstructorReturn":22,"lib/dom":117,"lib/tracking":145,"react":"react"}],128:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _popupDialectLine = {
  'line': '_b5e953-line',
  'dialect_switcher': '_b5e953-dialect_switcher',
  'select': '_b5e953-select',
  'selectWrap': '_b5e953-selectWrap'
};

var _popupDialectLine2 = _interopRequireDefault(_popupDialectLine);

var _dom = require('lib/dom');

var _tracking = require('lib/tracking');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var AMERICAN_ENGLISH = 'american';
var BRITISH_ENGLISH = 'british';

var DialectLine = function (_React$Component) {
  (0, _inherits3.default)(DialectLine, _React$Component);

  function DialectLine() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DialectLine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(DialectLine)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.onDialectChange = function (e) {
      var _this$props = _this.props;
      var actions = _this$props.actions;
      var dialectWeak = _this$props.dialectWeak;

      var dialectStrong = e.target.value;
      actions.updateSettings({ dialectStrong: dialectStrong });
      (0, _tracking.fire)('change-dialect', { language: dialectStrong, dialectWeak: dialectWeak });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DialectLine, [{
    key: 'render',
    value: function render() {
      var dialect = this.props.dialectStrong || this.props.dialectWeak || AMERICAN_ENGLISH;
      var dialectSwitcherCls = (0, _dom.cs)(_popupDialectLine2.default.line, _popupDialectLine2.default.dialect_switcher);

      return _react2.default.createElement('div', { className: dialectSwitcherCls }, _react2.default.createElement('span', null, 'I write in'), _react2.default.createElement('div', { className: _popupDialectLine2.default.selectWrap }, _react2.default.createElement('select', {
        className: _popupDialectLine2.default.select,
        onChange: this.onDialectChange,
        value: dialect
      }, _react2.default.createElement('option', { value: AMERICAN_ENGLISH }, 'American English'), _react2.default.createElement('option', { value: BRITISH_ENGLISH }, 'British English'))));
    }
  }]);
  return DialectLine;
}(_react2.default.Component);

exports.default = DialectLine;
module.exports = exports['default'];

},{"babel-runtime/core-js/object/get-prototype-of":9,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"babel-runtime/helpers/inherits":20,"babel-runtime/helpers/possibleConstructorReturn":22,"lib/dom":117,"lib/tracking":145,"react":"react"}],129:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dom = require('lib/dom');

var _header = require('../header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('../footer');

var _footer2 = _interopRequireDefault(_footer);

var _news = require('./news');

var _news2 = _interopRequireDefault(_news);

var _settingsContent = require('./settings-content');

var _popupSettings = {
  'safari': 'safari',
  'gr-popup-wrapper': 'gr-popup-wrapper',
  'windows': 'windows',
  'setting_item': 'setting_item',
  'errors': 'errors',
  'descr': 'descr',
  'thin_text': 'thin_text',
  'footer': 'footer',
  'gr_popup_settings': 'gr_popup_settings',
  'footer_btn': 'footer_btn',
  'line': 'line',
  'short_border': 'short_border',
  'top': 'top',
  'show_news': 'show_news',
  'news': 'news',
  'news_content': 'news_content',
  'close_news': 'close_news',
  'not_supported': 'not_supported',
  'checkbox_check': 'checkbox_check',
  'site_switcher': 'site_switcher',
  'upgrade': 'upgrade',
  'def_switcher': 'def_switcher',
  'on': 'on',
  'off': 'off',
  'upgraded': 'upgraded',
  'content': 'content',
  'summary': 'summary',
  'since': 'since',
  'has_favicon': 'has_favicon',
  'favicon': 'favicon',
  'domain': 'domain',
  'no_fixes': 'no_fixes',
  'lblCount': 'lblCount',
  'upgrade_title': 'upgrade_title',
  'my_grammarly': 'my_grammarly',
  'new_document': 'new_document',
  'unsupported_site': 'unsupported_site',
  'unsupported_item': 'unsupported_item',
  'unsupported_title': 'unsupported_title',
  'domain_in_details': 'domain_in_details',
  'unsupported_temporary': 'unsupported_temporary',
  'unsupported_permanently': 'unsupported_permanently',
  'unsupported_grammarly': 'unsupported_grammarly',
  'diamond': 'diamond'
};

var _popupSettings2 = _interopRequireDefault(_popupSettings);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var SettingsComponent = function (_React$Component) {
  (0, _inherits3.default)(SettingsComponent, _React$Component);

  function SettingsComponent() {
    (0, _classCallCheck3.default)(this, SettingsComponent);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SettingsComponent).apply(this, arguments));
  }

  (0, _createClass3.default)(SettingsComponent, [{
    key: 'render',
    value: function render() {
      var _cs;

      var _props = this.props;
      var user = _props.user;
      var settings = _props.settings;
      var config = _props.config;
      var activeTab = _props.activeTab;

      var cls = (0, _dom.cs)(_popupSettings2.default.gr_popup_settings, user.premium ? _popupSettings2.default.upgraded : _popupSettings2.default.free, (_cs = {}, (0, _defineProperty3.default)(_cs, _popupSettings2.default.not_supported, !config.enabled), (0, _defineProperty3.default)(_cs, _popupSettings2.default.no_fixes, !user.fixed_errors || isNaN(user.fixed_errors)), (0, _defineProperty3.default)(_cs, _popupSettings2.default.show_news, settings.showNews && config.enabled), (0, _defineProperty3.default)(_cs, _popupSettings2.default.has_favicon, !!activeTab.favIconUrl), _cs));

      return _react2.default.createElement('div', { className: cls }, _react2.default.createElement('div', { className: _popupSettings2.default.content }, _react2.default.createElement(_header2.default, null), _react2.default.createElement(_news2.default, this.props), _react2.default.createElement(_settingsContent.SettingsContent, this.props), _react2.default.createElement(_footer2.default, this.props)));
    }
  }]);
  return SettingsComponent;
}(_react2.default.Component);

exports.default = SettingsComponent;
module.exports = exports['default'];

},{"../footer":122,"../header":123,"./news":130,"./settings-content":132,"babel-runtime/core-js/object/get-prototype-of":9,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"babel-runtime/helpers/defineProperty":18,"babel-runtime/helpers/inherits":20,"babel-runtime/helpers/possibleConstructorReturn":22,"lib/dom":117,"react":"react"}],130:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sparkMd = require('spark-md5');

var _dom = require('lib/dom');

var _config = require('lib/config');

var _tracking = require('lib/tracking');

var _popupSettings = {
  'safari': 'safari',
  'gr-popup-wrapper': 'gr-popup-wrapper',
  'windows': 'windows',
  'setting_item': 'setting_item',
  'errors': 'errors',
  'descr': 'descr',
  'thin_text': 'thin_text',
  'footer': 'footer',
  'gr_popup_settings': 'gr_popup_settings',
  'footer_btn': 'footer_btn',
  'line': 'line',
  'short_border': 'short_border',
  'top': 'top',
  'show_news': 'show_news',
  'news': 'news',
  'news_content': 'news_content',
  'close_news': 'close_news',
  'not_supported': 'not_supported',
  'checkbox_check': 'checkbox_check',
  'site_switcher': 'site_switcher',
  'upgrade': 'upgrade',
  'def_switcher': 'def_switcher',
  'on': 'on',
  'off': 'off',
  'upgraded': 'upgraded',
  'content': 'content',
  'summary': 'summary',
  'since': 'since',
  'has_favicon': 'has_favicon',
  'favicon': 'favicon',
  'domain': 'domain',
  'no_fixes': 'no_fixes',
  'lblCount': 'lblCount',
  'upgrade_title': 'upgrade_title',
  'my_grammarly': 'my_grammarly',
  'new_document': 'new_document',
  'unsupported_site': 'unsupported_site',
  'unsupported_item': 'unsupported_item',
  'unsupported_title': 'unsupported_title',
  'domain_in_details': 'domain_in_details',
  'unsupported_temporary': 'unsupported_temporary',
  'unsupported_permanently': 'unsupported_permanently',
  'unsupported_grammarly': 'unsupported_grammarly',
  'diamond': 'diamond'
};

var _popupSettings2 = _interopRequireDefault(_popupSettings);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var News = function (_React$Component) {
  (0, _inherits3.default)(News, _React$Component);

  function News() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, News);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(News)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.closeNews = function () {
      var actions = _this.props.actions;

      actions.showNews(false);
      (0, _tracking.call)('mixpanel.track', 'Ext:Close_News:Popup');
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(News, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: (0, _dom.cs)(_popupSettings2.default.line, _popupSettings2.default.news) }, _react2.default.createElement('div', { onClick: this.closeNews, className: _popupSettings2.default.close_news }), _react2.default.createElement('div', { className: _popupSettings2.default.news_content }, _react2.default.createElement('h2', null, 'What\'s new in this update:'), _react2.default.createElement('ul', null, _config.news.map(function (value) {
        return _react2.default.createElement('li', { key: (0, _sparkMd.hash)(value) }, value);
      }))));
    }
  }]);
  return News;
}(_react2.default.Component);

exports.default = News;
module.exports = exports['default'];

},{"babel-runtime/core-js/object/get-prototype-of":9,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"babel-runtime/helpers/inherits":20,"babel-runtime/helpers/possibleConstructorReturn":22,"lib/config":116,"lib/dom":117,"lib/tracking":145,"react":"react","spark-md5":"spark-md5"}],131:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dom = require('lib/dom');

var _config = require('lib/config');

var _util = require('lib/util');

var _referral = {
  'wrap': '_5d1962-wrap',
  'line': '_5d1962-line',
  'description': '_5d1962-description',
  'inviteLink': '_5d1962-inviteLink',
  'popupLine': '_5d1962-popupLine',
  'newLabel': '_5d1962-newLabel',
  'popupLink': '_5d1962-popupLink'
};

var _referral2 = _interopRequireDefault(_referral);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ReferralLine = function (_React$Component) {
  (0, _inherits3.default)(ReferralLine, _React$Component);

  function ReferralLine() {
    (0, _classCallCheck3.default)(this, ReferralLine);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ReferralLine).apply(this, arguments));
  }

  (0, _createClass3.default)(ReferralLine, [{
    key: 'isRibbonShow',
    value: function isRibbonShow() {
      var _props = this.props;
      var extensionInstallDate = _props.extensionInstallDate;
      var registrationDate = _props.registrationDate;

      return (0, _util.pastDays)(registrationDate) < 14 || (0, _util.pastDays)(extensionInstallDate) < 7;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: (0, _dom.cs)('setting_item', _referral2.default.popupLine) }, _react2.default.createElement('div', { className: 'short_border top' }), this.isRibbonShow() && _react2.default.createElement('span', { className: _referral2.default.newLabel }, 'New'), _react2.default.createElement('span', null, 'Get Premium for Free'), _react2.default.createElement('a', { href: _config.URLS.referral, 'data-fire': 'referral-clicked, menu', target: '_blank', className: _referral2.default.popupLink }, 'Invite Friends')));
    }
  }]);
  return ReferralLine;
}(_react2.default.Component);

exports.default = ReferralLine;
module.exports = exports['default'];

},{"babel-runtime/core-js/object/get-prototype-of":9,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"babel-runtime/helpers/inherits":20,"babel-runtime/helpers/possibleConstructorReturn":22,"lib/config":116,"lib/dom":117,"lib/util":149,"react":"react"}],132:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsContent = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _summary = require('./summary');

var _summary2 = _interopRequireDefault(_summary);

var _dialectLine = require('./dialect-line');

var _dialectLine2 = _interopRequireDefault(_dialectLine);

var _referralLine = require('./referral-line');

var _referralLine2 = _interopRequireDefault(_referralLine);

var _defsSwitcher = require('./defs-switcher');

var _defsSwitcher2 = _interopRequireDefault(_defsSwitcher);

var _siteSwitcher = require('./site-switcher');

var _siteSwitcher2 = _interopRequireDefault(_siteSwitcher);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var SettingsContent = exports.SettingsContent = function SettingsContent(props) {
  return _react2.default.createElement('div', null, _react2.default.createElement(_siteSwitcher2.default, props), _react2.default.createElement(_defsSwitcher2.default, props), _react2.default.createElement(_dialectLine2.default, (0, _extends3.default)({}, props, {
    dialectStrong: props.user.settings.dialectStrong,
    dialectWeak: props.settings.dialectWeak
  })), _react2.default.createElement(_summary2.default, props), props.user.referral && _react2.default.createElement(_referralLine2.default, {
    extensionInstallDate: props.user.extensionInstallDate,
    registrationDate: props.user.registrationDate
  }));
};

},{"./defs-switcher":127,"./dialect-line":128,"./referral-line":131,"./site-switcher":133,"./summary":134,"babel-runtime/helpers/extends":19,"react":"react"}],133:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dom = require('lib/dom');

var _tracking = require('lib/tracking');

var _popupSettings = {
  'safari': 'safari',
  'gr-popup-wrapper': 'gr-popup-wrapper',
  'windows': 'windows',
  'setting_item': 'setting_item',
  'errors': 'errors',
  'descr': 'descr',
  'thin_text': 'thin_text',
  'footer': 'footer',
  'gr_popup_settings': 'gr_popup_settings',
  'footer_btn': 'footer_btn',
  'line': 'line',
  'short_border': 'short_border',
  'top': 'top',
  'show_news': 'show_news',
  'news': 'news',
  'news_content': 'news_content',
  'close_news': 'close_news',
  'not_supported': 'not_supported',
  'checkbox_check': 'checkbox_check',
  'site_switcher': 'site_switcher',
  'upgrade': 'upgrade',
  'def_switcher': 'def_switcher',
  'on': 'on',
  'off': 'off',
  'upgraded': 'upgraded',
  'content': 'content',
  'summary': 'summary',
  'since': 'since',
  'has_favicon': 'has_favicon',
  'favicon': 'favicon',
  'domain': 'domain',
  'no_fixes': 'no_fixes',
  'lblCount': 'lblCount',
  'upgrade_title': 'upgrade_title',
  'my_grammarly': 'my_grammarly',
  'new_document': 'new_document',
  'unsupported_site': 'unsupported_site',
  'unsupported_item': 'unsupported_item',
  'unsupported_title': 'unsupported_title',
  'domain_in_details': 'domain_in_details',
  'unsupported_temporary': 'unsupported_temporary',
  'unsupported_permanently': 'unsupported_permanently',
  'unsupported_grammarly': 'unsupported_grammarly',
  'diamond': 'diamond'
};

var _popupSettings2 = _interopRequireDefault(_popupSettings);

var _checkbox = {
  'select_checkbox': '_3872b4-select_checkbox',
  'checkbox': '_3872b4-checkbox',
  'checkbox_check': '_3872b4-checkbox_check',
  'checkbox_check_round': '_3872b4-checkbox_check_round'
};

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var SiteSwitcher = function (_React$Component) {
  (0, _inherits3.default)(SiteSwitcher, _React$Component);

  function SiteSwitcher() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SiteSwitcher);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(SiteSwitcher)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.onEnableGrammarClick = function (e) {
      var _this$props = _this.props;
      var actions = _this$props.actions;
      var pageDomain = _this$props.config.domain;

      var enabled = e.target.checked;
      actions.toggleSite(enabled, pageDomain);
      (0, _tracking.fire)('change-grammar', { enabled: enabled, pageDomain: pageDomain });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SiteSwitcher, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var config = _props.config;
      var settings = _props.settings;
      var activeTab = _props.activeTab;
      var isCheckingEnabledOnDomain = config.enabled;
      var enabled = settings.enabled && isCheckingEnabledOnDomain;
      var disableLabel = !isCheckingEnabledOnDomain ? 'Checking is not supported' : 'Check for Grammar and Spelling';

      var siteSwitcherCls = (0, _dom.cs)(_popupSettings2.default.site_switcher, _popupSettings2.default.line, _popupSettings2.default.setting_item, enabled ? _popupSettings2.default.on : _popupSettings2.default.off);

      return _react2.default.createElement('div', { className: siteSwitcherCls }, _react2.default.createElement('label', { className: _checkbox2.default.select_checkbox }, disableLabel, _react2.default.createElement('br', null), ' ', _react2.default.createElement('span', { className: _popupSettings2.default.domain }, _react2.default.createElement('span', { className: _popupSettings2.default.thin_text }, 'on'), ' ', _react2.default.createElement('span', { className: _popupSettings2.default.favicon }, _react2.default.createElement('img', { width: '16px', height: '16px', src: activeTab.favIconUrl })), config.domain), _react2.default.createElement('input', { className: _checkbox2.default.checkbox, onChange: this.onEnableGrammarClick, checked: enabled, type: 'checkbox' }), _react2.default.createElement('div', { className: (0, _dom.cs)(_checkbox2.default.checkbox_check, _popupSettings2.default.checkbox_check) }, _react2.default.createElement('div', { className: _checkbox2.default.checkbox_check_round }))), _react2.default.createElement('div', { className: _popupSettings2.default.short_border }));
    }
  }]);
  return SiteSwitcher;
}(_react2.default.Component);

exports.default = SiteSwitcher;
module.exports = exports['default'];

},{"babel-runtime/core-js/object/get-prototype-of":9,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"babel-runtime/helpers/inherits":20,"babel-runtime/helpers/possibleConstructorReturn":22,"lib/dom":117,"lib/tracking":145,"react":"react"}],134:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dom = require('lib/dom');

var _config = require('lib/config');

var _util = require('lib/util');

var _popupSettings = {
  'safari': 'safari',
  'gr-popup-wrapper': 'gr-popup-wrapper',
  'windows': 'windows',
  'setting_item': 'setting_item',
  'errors': 'errors',
  'descr': 'descr',
  'thin_text': 'thin_text',
  'footer': 'footer',
  'gr_popup_settings': 'gr_popup_settings',
  'footer_btn': 'footer_btn',
  'line': 'line',
  'short_border': 'short_border',
  'top': 'top',
  'show_news': 'show_news',
  'news': 'news',
  'news_content': 'news_content',
  'close_news': 'close_news',
  'not_supported': 'not_supported',
  'checkbox_check': 'checkbox_check',
  'site_switcher': 'site_switcher',
  'upgrade': 'upgrade',
  'def_switcher': 'def_switcher',
  'on': 'on',
  'off': 'off',
  'upgraded': 'upgraded',
  'content': 'content',
  'summary': 'summary',
  'since': 'since',
  'has_favicon': 'has_favicon',
  'favicon': 'favicon',
  'domain': 'domain',
  'no_fixes': 'no_fixes',
  'lblCount': 'lblCount',
  'upgrade_title': 'upgrade_title',
  'my_grammarly': 'my_grammarly',
  'new_document': 'new_document',
  'unsupported_site': 'unsupported_site',
  'unsupported_item': 'unsupported_item',
  'unsupported_title': 'unsupported_title',
  'domain_in_details': 'domain_in_details',
  'unsupported_temporary': 'unsupported_temporary',
  'unsupported_permanently': 'unsupported_permanently',
  'unsupported_grammarly': 'unsupported_grammarly',
  'diamond': 'diamond'
};

var _popupSettings2 = _interopRequireDefault(_popupSettings);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Summary = function (_React$Component) {
  (0, _inherits3.default)(Summary, _React$Component);

  function Summary() {
    (0, _classCallCheck3.default)(this, Summary);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Summary).apply(this, arguments));
  }

  (0, _createClass3.default)(Summary, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var _props$user = _props.user;
      var premium = _props$user.premium;
      var registrationDate = _props$user.registrationDate;
      var fixedErrors = _props$user['fixed_errors'];
      var domain = _props.config.domain;

      var errorTypeLbl = premium ? 'critical and advanced' : 'critical',
          fixed = !fixedErrors || isNaN(fixedErrors) ? 0 : fixedErrors,
          fixedFormated = (0, _util.formatNumber)(fixed) == '0' ? 'No' : (0, _util.formatNumber)(fixed),
          lbl = (0, _util.declension)(fixed, ['fix', 'fixes']),
          date = (0, _util.formatDate)(registrationDate),
          dateStr = date ? 'since ' + date : '';

      return _react2.default.createElement('div', { className: (0, _dom.cs)(_popupSettings2.default.line, _popupSettings2.default.summary) }, _react2.default.createElement('div', { className: _popupSettings2.default.errors }, _react2.default.createElement('span', { className: (0, _dom.cs)(_popupSettings2.default.count, _popupSettings2.default.lblCount) }, fixedFormated), _react2.default.createElement('span', { className: _popupSettings2.default.descr }, errorTypeLbl, ' ', _react2.default.createElement('span', { className: _popupSettings2.default.errorsLbl }, lbl), ' ', _react2.default.createElement('span', { className: _popupSettings2.default.since }, dateStr))), _react2.default.createElement('div', { className: _popupSettings2.default.upgrade }, _react2.default.createElement('a', { href: _config.URLS.upgrade, 'data-fire': 'upgrade, settings_toolbar, ' + domain, target: '_blank', className: _popupSettings2.default.upgrade_title }, 'Go Premium to enable advanced fixes')));
    }
  }]);
  return Summary;
}(_react2.default.Component);

exports.default = Summary;
module.exports = exports['default'];

},{"babel-runtime/core-js/object/get-prototype-of":9,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"babel-runtime/helpers/inherits":20,"babel-runtime/helpers/possibleConstructorReturn":22,"lib/config":116,"lib/dom":117,"lib/util":149,"react":"react"}],135:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dom = require('lib/dom');

var _config = require('lib/config');

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _popupSignin = {
  'signin': '_8341ca-signin',
  'banner': '_8341ca-banner',
  'descr': '_8341ca-descr',
  'descr_title': '_8341ca-descr_title',
  'buttons': '_8341ca-buttons',
  'button': '_8341ca-button',
  'auth_button': '_8341ca-auth_button',
  'sign_up': '_8341ca-sign_up',
  'free': '_8341ca-free',
  'footer': '_8341ca-footer',
  'signin_link': '_8341ca-signin_link'
};

var _popupSignin2 = _interopRequireDefault(_popupSignin);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var SigninComponent = function (_React$Component) {
  (0, _inherits3.default)(SigninComponent, _React$Component);

  function SigninComponent() {
    (0, _classCallCheck3.default)(this, SigninComponent);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SigninComponent).apply(this, arguments));
  }

  (0, _createClass3.default)(SigninComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: _popupSignin2.default.signin }, _react2.default.createElement(_header2.default, null), _react2.default.createElement('div', { className: _popupSignin2.default.content }, _react2.default.createElement('div', { className: _popupSignin2.default.banner }, 'Grammarly is active, but', _react2.default.createElement('br', null), 'key features are missing'), _react2.default.createElement('div', { className: _popupSignin2.default.descr }, _react2.default.createElement('div', { className: _popupSignin2.default.descr_title }, 'Sign up now to unlock the following:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Store your personal dictionary'), _react2.default.createElement('li', null, 'Save and access your work from any computer'), _react2.default.createElement('li', null, 'Get weekly writing statistics and tips'))), _react2.default.createElement('div', { className: _popupSignin2.default.buttons }, _react2.default.createElement('a', { href: _config.URLS.signup, 'data-fire': 'login-attempt, settings_toolbar_sign_up', target: '__blank', className: (0, _dom.cs)(_popupSignin2.default.button, _popupSignin2.default.auth_button), role: 'button' }, _react2.default.createElement('span', { className: _popupSignin2.default.sign_up }, 'Sign Up'), _react2.default.createElement('span', { className: _popupSignin2.default.free }, 'It\'s free')))), _react2.default.createElement('div', { className: _popupSignin2.default.footer }, _react2.default.createElement('div', { className: _popupSignin2.default.login_text }, 'Already have an account? ', _react2.default.createElement('a', { href: _config.URLS.signin, 'data-fire': 'login-attempt, settings_toolbar_sign_in', target: '__blank', className: _popupSignin2.default.signin_link }, 'Log in'))));
    }
  }]);
  return SigninComponent;
}(_react2.default.Component);

exports.default = SigninComponent;
module.exports = exports['default'];

},{"./header":123,"babel-runtime/core-js/object/get-prototype-of":9,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"babel-runtime/helpers/inherits":20,"babel-runtime/helpers/possibleConstructorReturn":22,"lib/config":116,"lib/dom":117,"react":"react"}],136:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrammarlyUnsupportedComponent = exports.TemporaryUnsupportedComponent = exports.CustomUnsupportedComponent = exports.DefaultUnsupportedComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dom = require('lib/dom');

var _popupSettings = {
  'safari': 'safari',
  'gr-popup-wrapper': 'gr-popup-wrapper',
  'windows': 'windows',
  'setting_item': 'setting_item',
  'errors': 'errors',
  'descr': 'descr',
  'thin_text': 'thin_text',
  'footer': 'footer',
  'gr_popup_settings': 'gr_popup_settings',
  'footer_btn': 'footer_btn',
  'line': 'line',
  'short_border': 'short_border',
  'top': 'top',
  'show_news': 'show_news',
  'news': 'news',
  'news_content': 'news_content',
  'close_news': 'close_news',
  'not_supported': 'not_supported',
  'checkbox_check': 'checkbox_check',
  'site_switcher': 'site_switcher',
  'upgrade': 'upgrade',
  'def_switcher': 'def_switcher',
  'on': 'on',
  'off': 'off',
  'upgraded': 'upgraded',
  'content': 'content',
  'summary': 'summary',
  'since': 'since',
  'has_favicon': 'has_favicon',
  'favicon': 'favicon',
  'domain': 'domain',
  'no_fixes': 'no_fixes',
  'lblCount': 'lblCount',
  'upgrade_title': 'upgrade_title',
  'my_grammarly': 'my_grammarly',
  'new_document': 'new_document',
  'unsupported_site': 'unsupported_site',
  'unsupported_item': 'unsupported_item',
  'unsupported_title': 'unsupported_title',
  'domain_in_details': 'domain_in_details',
  'unsupported_temporary': 'unsupported_temporary',
  'unsupported_permanently': 'unsupported_permanently',
  'unsupported_grammarly': 'unsupported_grammarly',
  'diamond': 'diamond'
};

var _popupSettings2 = _interopRequireDefault(_popupSettings);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var baseStyle = function baseStyle() {
  var pref = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  return (0, _dom.cs)(_popupSettings2.default.line, _popupSettings2.default.unsupported_item, pref);
};

var DefaultUnsupportedComponent = exports.DefaultUnsupportedComponent = function DefaultUnsupportedComponent(_ref) {
  var favicon = _ref.favicon;
  var domain = _ref.domain;
  return _react2.default.createElement('div', { className: baseStyle() }, _react2.default.createElement('span', { className: _popupSettings2.default.unsupported_title }, _react2.default.createElement('span', { className: _popupSettings2.default.favicon }, _react2.default.createElement('img', { width: '16px', height: '16px', src: favicon })), ' ', _react2.default.createElement('span', { className: _popupSettings2.default.domain }, domain), ' is Not Supported'), _react2.default.createElement('br', null), _react2.default.createElement('span', null, 'For technical reasons, we currently do not check your text on this version of ', _react2.default.createElement('span', { className: (0, _dom.cs)(_popupSettings2.default.domain, _popupSettings2.default.domain_in_details) }, domain)));
};

var CustomUnsupportedComponent = exports.CustomUnsupportedComponent = function CustomUnsupportedComponent(_ref2) {
  var favicon = _ref2.favicon;
  var domain = _ref2.domain;
  var customMessage = _ref2.customMessage;
  var message = customMessage.message;
  var _customMessage$title = customMessage.title;
  var title = _customMessage$title === undefined ? domain : _customMessage$title;

  return _react2.default.createElement('div', { className: baseStyle(_popupSettings2.default.unsupported_permanently) }, _react2.default.createElement('span', { className: _popupSettings2.default.unsupported_title }, _react2.default.createElement('span', { className: _popupSettings2.default.favicon }, _react2.default.createElement('img', { width: '16px', height: '16px', src: favicon })), ' ', title, ' Not Supported'), _react2.default.createElement('br', null), _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: message } }));
};

var TemporaryUnsupportedComponent = exports.TemporaryUnsupportedComponent = function TemporaryUnsupportedComponent(_ref3) {
  var favicon = _ref3.favicon;
  var domain = _ref3.domain;
  return _react2.default.createElement('div', { className: baseStyle(_popupSettings2.default.unsupported_temporary) }, _react2.default.createElement('span', { className: _popupSettings2.default.unsupported_title }, 'Checking Down on ', _react2.default.createElement('span', { className: _popupSettings2.default.favicon }, _react2.default.createElement('img', { width: '16px', height: '16px', src: favicon })), ' ', _react2.default.createElement('span', { className: _popupSettings2.default.domain }, domain)), _react2.default.createElement('br', null), _react2.default.createElement('span', null, 'There appears to be a temporary glitch affecting Grammarly\'s performance on ', _react2.default.createElement('span', { className: (0, _dom.cs)(_popupSettings2.default.domain, _popupSettings2.default.domain_in_details) }, domain), '. Functionality should return soon.'));
};

var GrammarlyUnsupportedComponent = exports.GrammarlyUnsupportedComponent = function GrammarlyUnsupportedComponent() {
  return _react2.default.createElement('div', { className: baseStyle(_popupSettings2.default.unsupported_grammarly) }, _react2.default.createElement('span', { className: 'diamond' }), _react2.default.createElement('span', { className: 'unsupported_title' }, 'You Can\'t Improve on Perfection'), _react2.default.createElement('br', null), _react2.default.createElement('span', null, 'Naturally, Grammarly\'s browser extension is disabled while you use the Grammarly Editor.'));
};

},{"lib/dom":117,"react":"react"}],137:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.getUnsupportedComponent = getUnsupportedComponent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tracking = require('lib/tracking');

var _dom = require('lib/dom');

var _defaults = require('lib/page-config/defaults');

var _header = require('../header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('../footer');

var _footer2 = _interopRequireDefault(_footer);

var _components = require('./components');

var _popupSettings = {
  'safari': 'safari',
  'gr-popup-wrapper': 'gr-popup-wrapper',
  'windows': 'windows',
  'setting_item': 'setting_item',
  'errors': 'errors',
  'descr': 'descr',
  'thin_text': 'thin_text',
  'footer': 'footer',
  'gr_popup_settings': 'gr_popup_settings',
  'footer_btn': 'footer_btn',
  'line': 'line',
  'short_border': 'short_border',
  'top': 'top',
  'show_news': 'show_news',
  'news': 'news',
  'news_content': 'news_content',
  'close_news': 'close_news',
  'not_supported': 'not_supported',
  'checkbox_check': 'checkbox_check',
  'site_switcher': 'site_switcher',
  'upgrade': 'upgrade',
  'def_switcher': 'def_switcher',
  'on': 'on',
  'off': 'off',
  'upgraded': 'upgraded',
  'content': 'content',
  'summary': 'summary',
  'since': 'since',
  'has_favicon': 'has_favicon',
  'favicon': 'favicon',
  'domain': 'domain',
  'no_fixes': 'no_fixes',
  'lblCount': 'lblCount',
  'upgrade_title': 'upgrade_title',
  'my_grammarly': 'my_grammarly',
  'new_document': 'new_document',
  'unsupported_site': 'unsupported_site',
  'unsupported_item': 'unsupported_item',
  'unsupported_title': 'unsupported_title',
  'domain_in_details': 'domain_in_details',
  'unsupported_temporary': 'unsupported_temporary',
  'unsupported_permanently': 'unsupported_permanently',
  'unsupported_grammarly': 'unsupported_grammarly',
  'diamond': 'diamond'
};

var _popupSettings2 = _interopRequireDefault(_popupSettings);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function getUnsupportedComponent(_ref) {
  var domain = _ref.domain;
  var favicon = _ref.favIconUrl;
  var temporary = _ref.temporary;
  var grammarlyEditor = _ref.grammarlyEditor;

  var domainCustomMessage = _defaults.CUSTOM_UNSUPPORTED_MESSAGES[domain];
  var type = void 0,
      component = void 0;

  if (grammarlyEditor) {
    type = 'grammarly_editor';
    component = _react2.default.createElement(_components.GrammarlyUnsupportedComponent, { favicon: favicon, domain: domain });
  } else if (domainCustomMessage && domainCustomMessage.message) {
    type = 'custom_message';
    component = _react2.default.createElement(_components.CustomUnsupportedComponent, { customMessage: domainCustomMessage, favicon: favicon, domain: domain });
  } else if (temporary) {
    type = 'temporary';
    component = _react2.default.createElement(_components.TemporaryUnsupportedComponent, { favicon: favicon, domain: domain });
  } else {
    type = 'default';
    component = _react2.default.createElement(_components.DefaultUnsupportedComponent, { favicon: favicon, domain: domain });
  }

  (0, _tracking.call)('felog.info', 'extension_popup_show_unsupported', { type: type });
  return component;
}

var UnsupportedComponent = function (_React$Component) {
  (0, _inherits3.default)(UnsupportedComponent, _React$Component);

  function UnsupportedComponent() {
    (0, _classCallCheck3.default)(this, UnsupportedComponent);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(UnsupportedComponent).apply(this, arguments));
  }

  (0, _createClass3.default)(UnsupportedComponent, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var _props$config = _props.config;
      var domain = _props$config.domain;
      var temporary = _props$config.temporary;
      var grammarlyEditor = _props$config.grammarlyEditor;
      var favIconUrl = _props.activeTab.favIconUrl;

      var cls = (0, _dom.cs)(_popupSettings2.default.gr_popup_settings, (0, _defineProperty3.default)({}, _popupSettings2.default.has_favicon, Boolean(favIconUrl)));

      var component = getUnsupportedComponent({ domain: domain, favIconUrl: favIconUrl, temporary: temporary, grammarlyEditor: grammarlyEditor });

      return _react2.default.createElement('div', { className: cls }, _react2.default.createElement('div', { className: (0, _dom.cs)(_popupSettings2.default.content, _popupSettings2.default.unsupported_site) }, _react2.default.createElement(_header2.default, this.props), component, _react2.default.createElement(_footer2.default, this.props)));
    }
  }]);
  return UnsupportedComponent;
}(_react2.default.Component);

exports.default = UnsupportedComponent;

},{"../footer":122,"../header":123,"./components":136,"babel-runtime/core-js/object/get-prototype-of":9,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"babel-runtime/helpers/defineProperty":18,"babel-runtime/helpers/inherits":20,"babel-runtime/helpers/possibleConstructorReturn":22,"lib/dom":117,"lib/page-config/defaults":121,"lib/tracking":145,"react":"react"}],138:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _lodash = require('lodash');

var _forge = require('./forge');

var _config = require('./config');

var _util = require('./util');

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var AJAX_TIMEOUT = 10000;

if ((0, _util.isBg)()) {
  require('whatwg-fetch');
  _message2.default.on('fetch', function (data, cb) {
    return bgFetch(data).then(cb, function (error) {
      return cb({ error: error.message });
    });
  });
}

function transformOptions(opts) {
  if (opts.data && (opts.query || opts.method != 'post')) {
    opts.url += '?' + paramStr(opts.data);
  }

  if (opts.data && opts.method == 'post' && !opts.query && !opts.body) {
    try {
      opts.body = (0, _stringify2.default)(opts.data);
    } catch (e) {
      opts.body = {};
      console.warn(e);
    }

    opts.headers = opts.headers || {};
    opts.headers['Content-Type'] = opts.headers['Content-Type'] || 'application/json';
    delete opts.data;
  }
  opts.credentials = 'include';
  return opts;
}

function fetch(url) {
  var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  // if (config.development && !forge) url = '/api?url=' + url
  opts.url = url;
  transformOptions(opts);
  if ((0, _util.isBg)() || _config.isTest) return bgFetch(opts);

  return _message2.default.promiseBackground('fetch', opts).then(function (data) {
    if ((0, _lodash.isObject)(data) && data.error) {
      throw new Error(data.error);
    }
    return data;
  });
}

function bgFetch(_ref) {
  var url = _ref.url;
  var opts = (0, _objectWithoutProperties3.default)(_ref, ['url']);

  if ((0, _util.isFF)()) {
    return new _promise2.default(function (resolve, reject) {
      _forge.request.ajax({
        url: url,
        data: opts.data || opts.body,
        headers: opts.headers,
        type: (opts.method || 'GET').toUpperCase(),
        dataType: 'json',
        timeout: opts.timeout || AJAX_TIMEOUT,
        success: function success(res) {
          var jsonRes = typeof res === 'string' ? JSON.parse(res) : res;

          if (jsonRes.error) return reject({ message: jsonRes.error });
          resolve(jsonRes);
        },
        error: function error(err) {
          return reject({
            name: 'RequestError',
            message: err.message,
            statusCode: err.statusCode,
            url: err.message === 'Request timed out' ? url : ''
          });
        }
      });
    });
  }

  function processResponse(resp) {
    if (resp.ok) {
      return resp[opts.isText ? 'text' : 'json']();
    }

    return resp.text().then(function (body) {
      throw {
        name: 'RequestError',
        body: body,
        statusCode: resp.status,
        message: resp.statusText
      };
    });
  }

  return _promise2.default.race([window.fetch(url, opts).then(processResponse).then(function (res) {
    if (res.error) throw new Error(res.error);
    return res;
  }), (0, _util.delay)(opts.timeout || AJAX_TIMEOUT).then(function () {
    throw new Error('Fetch request to ' + url + ' rejected by timeout');
  })]);
}

function paramStr(data) {
  var req = '';

  var _loop = function _loop(item) {
    if (Array.isArray(data[item])) {
      if (data[item].length) {
        req += '' + (req.length ? '&' : '') + data[item].map(function (val) {
          return item + '=' + val;
        }).join('&'); // eslint-disable-line no-loop-func
      }
    } else {
        req += '' + (req.length ? '&' : '') + item + '=' + encodeURIComponent(data[item]);
      }
  };

  for (var item in data) {
    _loop(item);
  }
  return req;
}

exports.default = {
  fetch: fetch,
  transformOptions: transformOptions,
  paramStr: paramStr
};
module.exports = exports['default'];

},{"./config":116,"./forge":118,"./message":120,"./util":149,"babel-runtime/core-js/json/stringify":5,"babel-runtime/core-js/promise":12,"babel-runtime/helpers/objectWithoutProperties":21,"lodash":"lodash","whatwg-fetch":"whatwg-fetch"}],139:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindActions = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.observeStore = observeStore;

var _lodash = require('lodash');

var _util = require('lib/util');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function observeStore(store, onChange) {
  var currentState = void 0;

  function handleChange() {
    var nextState = store.getState();

    if (!(0, _lodash.isEmpty)(nextState) && !(0, _lodash.isEqual)(currentState, nextState)) {
      currentState = nextState;
      onChange(nextState);
    }
  }

  (0, _util.asyncCall)(handleChange);
  return store.subscribe(handleChange);
}

var bindActions = exports.bindActions = function bindActions(pureActions, dispatch) {
  return (0, _keys2.default)(pureActions).filter(function (action) {
    return pureActions[action];
  }).reduce(function (obj, action) {
    return (0, _assign2.default)(obj, (0, _defineProperty3.default)({}, action, function () {
      var res = pureActions[action].apply(pureActions, arguments);
      var sync = typeof res.sync == 'undefined' ? true : res.sync;
      return dispatch((0, _extends3.default)({}, res, { sync: sync }));
    }));
  }, {});
};

},{"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/object/keys":10,"babel-runtime/helpers/defineProperty":18,"babel-runtime/helpers/extends":19,"lib/util":149,"lodash":"lodash"}],140:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.createMirrorStore = createMirrorStore;

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _redux = require('redux');

var _message = require('lib/message');

var _message2 = _interopRequireDefault(_message);

var _actions = require('lib/bg/features/actions');

var _actions2 = _interopRequireDefault(_actions);

var _helpers = require('./helpers');

var _util = require('../util');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var logger = (0, _reduxLogger2.default)({
  level: 'debug',
  collapsed: function collapsed() {
    return true;
  },
  predicate: function predicate() {
    return !"true";
  }
});

var SYNC = 'store/SYNC';
var initialState = {
  page: {},
  connection: {}
};

function createMirrorStore(onUpdate) {
  var pureActions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var reducer = arguments[2];

  var baseReducer = function baseReducer() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
    var action = arguments[1];

    var domain = (state.page || state.config || {}).domain;
    action.sync && _message2.default.emitBackground('dispatch', (0, _extends3.default)({}, action, { domain: domain }));

    if (action.type == SYNC) return (0, _extends3.default)({}, state, action.data);
    return reducer ? reducer(state, action) : state;
  };

  var store = (0, _redux.createStore)(baseReducer, {}, (0, _redux.applyMiddleware)(logger));
  var actions = (0, _helpers.bindActions)((0, _extends3.default)({}, _actions2.default, pureActions), store.dispatch);

  _message2.default.on('state', function (data) {
    (0, _util.asyncCall)(function () {
      return store.dispatch({ type: SYNC, data: data });
    }, 0); // FIXME: Prevent dispatch in dispatch
  });
  (0, _helpers.observeStore)(store, onUpdate);

  return { store: store, actions: actions };
}

},{"../util":149,"./helpers":139,"babel-runtime/helpers/extends":19,"lib/bg/features/actions":111,"lib/message":120,"redux":"redux","redux-logger":"redux-logger"}],141:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = api;

var _dom = require('./dom');

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

var _prefs = require('./bg/prefs');

var _prefs2 = _interopRequireDefault(_prefs);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function api() {
  (0, _dom.listen)(document, 'bg-reload', emitBgReload);
  (0, _dom.listen)(document, 'reset', emitReset);
  (0, _dom.listen)(document, 'get-extid', getExtId);
  (0, _dom.listen)(document, 'get-capi-log', getCapiLog);
  (0, _dom.listen)(document, 'get-tracker-log', getTrackerLog);
  (0, _dom.listen)(document, 'get-localforage', getLocalforage);
  (0, _dom.listen)(document, 'set-localforage', setLocalforage);
  (0, _dom.listen)(document, 'get-pref', getPrefs);
  (0, _dom.listen)(document, 'set-prefs', setPrefs);

  function emitBgReload() {
    _message2.default.emitBackground('bg-reload', {});
  }

  function emitReset() {
    _message2.default.emitBackground('reset', {});
  }

  function getTrackerLog() {
    _message2.default.emitBackground('get-tracker-log', {}, function (result) {
      return (0, _dom.emitDomEvent)('tracker-log', result);
    });
  }

  function getCapiLog() {
    _message2.default.emitBackground('get-capi-log', {}, function (result) {
      return (0, _dom.emitDomEvent)('capi-log', result);
    });
  }

  function getExtId() {
    _message2.default.emitBackground('get-extid', {}, function (result) {
      return (0, _dom.emitDomEvent)('extid', result);
    });
  }

  function getLocalforage() {
    _message2.default.emitBackground('get-localforage', {}, function (result) {
      return (0, _dom.emitDomEvent)('localforage', result);
    });
  }

  function setLocalforage(e) {
    _message2.default.emitBackground('set-localforage', { key: e.key, value: e.value }, function (result) {
      return (0, _dom.emitDomEvent)('localforage', result);
    });
  }

  function getPrefs(_ref) {
    var key = _ref.key;

    _prefs2.default.get(key).then(function (value) {
      return (0, _dom.emitDomEvent)('pref', { key: key, value: value });
    });
  }

  function setPrefs(_ref2) {
    var key = _ref2.key;
    var value = _ref2.value;

    _prefs2.default.set(key, value);
  }
}
module.exports = exports['default'];

},{"./bg/prefs":115,"./dom":117,"./message":120}],142:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContainerId = exports.isValidContainerId = exports.init = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var init = exports.init = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var sessionIdDaily, ajax, cookieMP;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            /**
             * Felog stringify tags before send. In order to achieve dynamic
             * value custom toJSON was used.
             *
             * In request sessionIdDaily would look like
             *   sessionIdDaily: "<sessionIdDaily>"
             */
            sessionIdDaily = {
              toJSON: function () {
                var sessionIdDaily = (0, _alphanumeric2.default)(15);
                var lastTimeWhenGenerated = Date.now();

                return function () {
                  if (Date.now() - lastTimeWhenGenerated > _util.DAY) {
                    sessionIdDaily = (0, _alphanumeric2.default)(15);
                    lastTimeWhenGenerated = Date.now();
                  }

                  return sessionIdDaily;
                };
              }()
            };

            ajax = function () {
              return (0, _util.isFF)() && _forge2.default.request.ajax;
            }();

            (0, _mixpanel2.default)();
            (0, _mixpanel4.default)();
            require('tracker');

            (0, _tracker2.default)().init({
              mixpanel: {
                key: _config.MIXPANEL.key,
                qaKey: _config.MIXPANEL.qaKey,
                dapi: _config.DAPI,
                ajax: ajax
              },
              gnar: {
                url: _config.GNAR.url,
                qaUrl: _config.GNAR.qaUrl,
                app: (0, _util.getBrowser)() + 'Ext',
                appVersion: (0, _config.getVersion)(),
                ajax: ajax
              },
              felog: {
                application: 'browserplugin',
                key: _config.FELOG.key,
                url: _config.URLS.raven,
                project: _config.FELOG.project,
                commit: (0, _config.getVersion)(),
                version: (0, _config.getVersion)(),
                readyOnSetUser: false,
                sessionId: (0, _alphanumeric2.default)(15),
                sessionIdDaily: sessionIdDaily
              },
              statsc: {
                url: _config.STATSC.URL
              }
            });

            (0, _tracker2.default)().statsc.createRoot({
              prefix: _config.STATSC.PREFIX,
              postfix: (0, _util.getBrowser)() + '.extension.world',
              id: 'ui'
            });

            //init MP for users, which have MP cookie already
            _context.next = 9;
            return getMixpanelCookie();

          case 9:
            _context.t0 = _context.sent;

            if (_context.t0) {
              _context.next = 12;
              break;
            }

            _context.t0 = (0, _localStorage2.default)('mpCookie');

          case 12:
            cookieMP = _context.t0;

            if (cookieMP) {
              _context.next = 15;
              break;
            }

            return _context.abrupt('return');

          case 15:

            window.mixpanel.persistence.load();
            (0, _call.call)('mixpanel.setProps', {
              gProduct: 'Extension-' + (0, _util.getBrowser)(),
              fullProductVersion: (0, _config.getVersion)()
            }, 'Ext');

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return function init() {
    return ref.apply(this, arguments);
  };
}();

var getContainerFromCookie = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var containerId;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _cookie3.getCookie)(GNAR_CONTAINER_ID);

          case 3:
            containerId = _context2.sent;

            if (!isValidContainerId(containerId)) {
              _context2.next = 7;
              break;
            }

            (0, _localStorage2.default)(GNAR_CONTAINER_ID, containerId);
            return _context2.abrupt('return', containerId);

          case 7:
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2['catch'](0);

            (0, _call.call)('felog.error', 'fetch_gnar_containerId_fail', {
              error: _context2.t0,
              errorMessage: _context2.t0.message,
              placement: 'cookie'
            });

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 9]]);
  }));
  return function getContainerFromCookie() {
    return ref.apply(this, arguments);
  };
}();

exports.processCookiesFromGrammarly = processCookiesFromGrammarly;

var _alphanumeric = require('@grammarly-npm/alphanumeric');

var _alphanumeric2 = _interopRequireDefault(_alphanumeric);

var _cookie = require('cookie');

var _cookie2 = _interopRequireDefault(_cookie);

var _localStorage = require('local-storage');

var _localStorage2 = _interopRequireDefault(_localStorage);

var _mixpanel = require('vendor/mixpanel');

var _mixpanel2 = _interopRequireDefault(_mixpanel);

var _mixpanel3 = require('vendor/mixpanel-2.2');

var _mixpanel4 = _interopRequireDefault(_mixpanel3);

var _cookie3 = require('../bg/cookie');

var _forge = require('lib/forge');

var _forge2 = _interopRequireDefault(_forge);

var _location = require('../location');

var _util = require('../util');

var _config = require('../config');

var _call = require('./call');

var _tracker = require('./tracker');

var _tracker2 = _interopRequireDefault(_tracker);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var getMixpanelCookie = function getMixpanelCookie() {
  return (0, _cookie3.getCookie)(_config.MIXPANEL.cookie).catch(function () {
    return '';
  });
};
var GNAR_CONTAINER_ID = 'gnar_containerId';
var GNAR_CONTAINER_ID_MIGRATION = 'funnel_container_parsed';

var trackContainerIdChange = function () {
  var containerIdCached = void 0;
  var containerIdChangeCount = 0;

  return function trackContainerIdChange(newContainerId, reason) {
    if (containerIdCached && containerIdCached !== newContainerId) {
      var _checkLocalStorage = (0, _util.checkLocalStorage)();

      var enabled = _checkLocalStorage.enabled;

      containerIdChangeCount++;
      (0, _call.call)('felog.warn', 'containerId_change_detected', {
        reason: reason,
        newContainerId: newContainerId,
        count: containerIdChangeCount,
        localStorageEnabled: enabled
      });
    }
    containerIdCached = newContainerId;
  };
}();

function processCookiesFromGrammarly(_ref) {
  var mpCookie = _ref.mpCookie;
  var gnar = _ref.gnar;
  var dapi = _ref.dapi;

  var domain = (0, _location.getDomain)(),
      cookieOptions = {
    path: '/',
    domain: domain,
    // year from now
    expires: new Date(new Date().setYear(new Date().getFullYear() + 1))
  };

  if (gnar) trackContainerIdChange(gnar, 'external-change');
  updateId(_config.MIXPANEL.cookie, mpCookie);
  updateId(GNAR_CONTAINER_ID, gnar);
  updateId('__fngrprnt__', dapi);

  function updateId(name, value) {
    if (!value) return;
    if (!name) {
      return (0, _call.call)('felog.warn', 'malfunction_update_id');
    }

    (0, _localStorage2.default)(name, value);
    (0, _cookie2.default)(name, null);
    (0, _cookie2.default)(name, value, cookieOptions);
  }
}

var isValidContainerId = exports.isValidContainerId = function isValidContainerId(id) {
  if (!id) throw new Error('Invalid GNAR_CONTAINER_ID: empty id');
  if (id.length != 12) throw new Error('Invalid GNAR_CONTAINER_ID: malformed id: ' + id.length);
  return true;
};

var getContainerId = exports.getContainerId = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
    var newContainer, containerId, _containerId;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            newContainer = (0, _localStorage2.default)(GNAR_CONTAINER_ID_MIGRATION);

            if (newContainer) {
              _context3.next = 4;
              break;
            }

            throw new Error('migrate me');

          case 4:
            _context3.next = 12;
            break;

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3['catch'](0);
            _context3.next = 10;
            return getContainerFromCookie();

          case 10:
            (0, _call.call)('felog.info', 'migrated_to_fixed_containerId');
            (0, _localStorage2.default)(GNAR_CONTAINER_ID_MIGRATION, true);

          case 12:
            _context3.prev = 12;
            containerId = (0, _localStorage2.default)(GNAR_CONTAINER_ID);

            if (!isValidContainerId(containerId)) {
              _context3.next = 17;
              break;
            }

            trackContainerIdChange(containerId, 'local-storage-or-cookie');
            return _context3.abrupt('return', containerId);

          case 17:
            _context3.next = 22;
            break;

          case 19:
            _context3.prev = 19;
            _context3.t1 = _context3['catch'](12);

            (0, _call.call)('felog.error', 'fetch_gnar_containerId_fail', {
              error: _context3.t1,
              errorMessage: _context3.t1.message,
              placement: 'prefs'
            });

          case 22:
            _context3.next = 24;
            return getContainerFromCookie();

          case 24:
            _context3.prev = 24;
            _containerId = (0, _tracker2.default)().gnar.meta().containerId;

            trackContainerIdChange(_containerId, 'own-generated');
            return _context3.abrupt('return', _containerId);

          case 30:
            _context3.prev = 30;
            _context3.t2 = _context3['catch'](24);

            (0, _call.call)('felog.error', 'fetch_gnar_containerId_fail', {
              error: _context3.t2,
              errorMessage: _context3.t2.message,
              placement: 'tracker'
            });
            return _context3.abrupt('return', '');

          case 34:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 6], [12, 19], [24, 30]]);
  }));
  return function getContainerId() {
    return ref.apply(this, arguments);
  };
}();

},{"../bg/cookie":110,"../config":116,"../location":119,"../util":149,"./call":143,"./tracker":148,"@grammarly-npm/alphanumeric":1,"babel-runtime/helpers/asyncToGenerator":15,"babel-runtime/regenerator":107,"cookie":"cookie","lib/forge":118,"local-storage":"local-storage","tracker":"tracker","vendor/mixpanel":"vendor/mixpanel","vendor/mixpanel-2.2":"vendor/mixpanel-2.2"}],143:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.call = call;
exports.runMessage = runMessage;
exports.getLog = getLog;

var _message = require('../message');

var _message2 = _interopRequireDefault(_message);

var _util = require('../util');

var _tracker = require('./tracker');

var _tracker2 = _interopRequireDefault(_tracker);

var _felogPixel = require('./felogPixel');

var _felogPixel2 = _interopRequireDefault(_felogPixel);

var _statscPixel = require('./statscPixel');

var _statscPixel2 = _interopRequireDefault(_statscPixel);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var log = [];

function call(msg) {
  for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    data[_key - 1] = arguments[_key];
  }

  var fallback = function fallback(e) {
    if (msg.includes('felog')) return _felogPixel2.default.apply(undefined, (0, _toConsumableArray3.default)(extendFelogData(data)));
    if (msg.includes('statsc.ui.increment')) return _statscPixel2.default.apply(undefined, [msg.split('.').pop()].concat(data));
    console.warn('tracking call ' + msg + ' failed, reason: ', e);
  };

  if ((0, _util.isBg)()) {
    return (0, _util.asyncCall)(function () {
      try {
        runMessage(msg, data);
      } catch (e) {
        fallback(e);
      }
    }, 20);
  }

  var WAIT_TIMEOUT = 10000;
  var timeout = setTimeout(function () {
    return errorHandle('timeout call through bg page');
  }, WAIT_TIMEOUT);
  var preventTimeout = function preventTimeout() {
    return clearInterval(timeout);
  };
  var errorHandle = function errorHandle(e) {
    preventTimeout();
    fallback(e);
  };

  _message2.default.emitBackground('tracking-call', { msg: msg, data: data }, preventTimeout, errorHandle);
}

function runMessage(msg, data) {
  var args = msg.split('.'),
      method = args.pop(),
      ctx = args.reduce(function (closure, part) {
    return part in closure ? closure[part] : {};
  }, (0, _tracker2.default)());

  if (!ctx || !ctx[method]) return console.error('No method ' + msg + ' in tracker object');

  ctx[method].apply(ctx, (0, _toConsumableArray3.default)(data));
  logCall(msg, data);
}

function logCall(msg, data) {
  console.info(msg, data);

  if (!"true") {
    log.push((0, _extends3.default)({ msg: msg }, data));
  }
}

function extendFelogData() {
  var params = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  var request = {
    headers: {
      'User-Agent': navigator.userAgent
    }
  };

  if (params.length < 2) return [params[0], { request: request }];

  var data = params[1];
  var extra = typeof data == 'string' ? { message: data } : data;

  return [params[0], (0, _extends3.default)({}, extra, { request: request })].concat((0, _toConsumableArray3.default)(params.slice(2)));
}

function getLog() {
  var result = log.slice(0);
  log.length = 0;
  return result;
}

},{"../message":120,"../util":149,"./felogPixel":144,"./statscPixel":147,"./tracker":148,"babel-runtime/helpers/extends":19,"babel-runtime/helpers/toConsumableArray":24}],144:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = function (message, extra) {
  var send = {};

  try {
    (0, _stringify2.default)(extra);
    send = extra;
  } catch (e) {
    console.error(e);
  }

  var img = document.createElement('img'),
      data = {
    logger: 'javascript',
    platform: 'javascript',
    tags: {
      application: 'browserplugin',
      fromPixel: true,
      commit: (0, _config.getVersion)(),
      version: (0, _config.getVersion)()
    },
    message: message,
    extra: send
  },
      src = 'https://' + _config.URLS.raven + '/api/' + _config.FELOG.project + '/store/\n?sentry_version=4\n&sentry_client=raven-js/1.1.16\n&sentry_key=' + _config.FELOG.key + '\n&sentry_data=' + encodeURIComponent((0, _stringify2.default)(data));

  img.src = src;

  console.info(message, extra);
  return img;
};

var _config = require('../config');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = exports['default'];

},{"../config":116,"babel-runtime/core-js/json/stringify":5}],145:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _util = require('../util');

var _message = require('../message');

var _message2 = _interopRequireDefault(_message);

var _config = require('../config');

var _call = require('./call');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var on = {};

function initBg() {
  var _require = require('./bgonly');

  var init = _require.init;
  var processCookiesFromGrammarly = _require.processCookiesFromGrammarly;

  init().catch(function (error) {
    return (0, _call.call)('felog.error', 'bg_tracking_start_fail', { error: error });
  });

  window.addEventListener('unhandledrejection', function (event) {
    window.onerror && window.onerror('Promise unhandledrejection', '', '', '', event.reason);
  });

  if (window.__forgeExceptions && window.__forgeExceptions.length && window.onerror) {
    window.__forgeExceptions.forEach(function (args) {
      var _window;

      return (_window = window).onerror.apply(_window, (0, _toConsumableArray3.default)(args));
    });
  }

  on = require('./on');

  _message2.default.on('tracking-fire', function (_ref) {
    var msg = _ref.msg;
    var data = _ref.data;
    return fire.apply(undefined, [msg].concat((0, _toConsumableArray3.default)(data)));
  });
  _message2.default.on('tracker-init', processCookiesFromGrammarly);
  _message2.default.on('tracking-call', function (_ref2) {
    var msg = _ref2.msg;
    var data = _ref2.data;
    var cb = arguments.length <= 1 || arguments[1] === undefined ? _util._f : arguments[1];

    _call.call.apply(undefined, [msg].concat((0, _toConsumableArray3.default)(data)));
    cb();
  });

  fire('activity-ping');
}

function fire(msg) {
  for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    data[_key - 1] = arguments[_key];
  }

  if ((0, _util.isBg)()) {
    if (!on[msg]) return console.error('No handler specified for message: ' + msg);
    (0, _util.asyncCall)(function () {
      var _on;

      return (_on = on)[msg].apply(_on, data);
    }, 20);
  } else {
    _message2.default.emitBackground('tracking-fire', { msg: msg, data: data });
  }
}

function initContentScript() {
  var times = 0;

  var pageCookie = require('cookie');
  var interval = setInterval(getCookies, 500),
      MAX = 10;

  function getCookies() {
    times++;
    if (times > MAX) clearInterval(interval);

    var data = {
      'mpCookie': pageCookie(_config.MIXPANEL.cookie),
      'gnar': pageCookie('gnar_containerId'),
      'dapi': pageCookie('__fngrprnt__')
    };

    if (!data.mpCookie) return;

    clearInterval(interval);
    _message2.default.emitBackground('tracker-init', data);
  }
}

exports.default = {
  initBg: initBg,
  initContentScript: initContentScript,
  getLog: _call.getLog,
  fire: fire,
  call: _call.call
};
module.exports = exports['default'];

},{"../config":116,"../message":120,"../util":149,"./bgonly":142,"./call":143,"./on":146,"babel-runtime/helpers/toConsumableArray":24,"cookie":"cookie"}],146:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _activityPing$daily;

var _prefs = require('../bg/prefs');

var _prefs2 = _interopRequireDefault(_prefs);

var _config = require('../config');

var _util = require('../util');

var _call = require('./call');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = (_activityPing$daily = {}, (0, _defineProperty3.default)(_activityPing$daily, 'activity-ping', function activityPing() {
  var toPercent = function toPercent(val) {
    return parseFloat(Math.round(val * 100 * 100) / 100).toFixed(2);
  };
  setInterval(function () {
    if (!(0, _util.isChrome)()) {
      return (0, _call.call)('statsc.ui.increment', 'activity:activity_ping');
    }

    window.chrome.system && window.chrome.system.cpu && window.chrome.system.cpu.getInfo(function (info) {
      var load = info.processors.map(function (processor) {
        return (processor.usage.total - processor.usage.idle) / processor.usage.total;
      }).reduce(function (avg, cpu, i, total) {
        return avg + cpu / total.length;
      }, 0);
      var _window$performance$m = window.performance.memory;
      var usedJSHeapSize = _window$performance$m.usedJSHeapSize;
      var totalJSHeapSize = _window$performance$m.totalJSHeapSize;

      load = toPercent(load);

      (0, _call.call)('statsc.ui.increment', 'activity:activity_ping');
      (0, _call.call)('statsc.ui.gauge', {
        'performance:memory_used': usedJSHeapSize,
        'performance:memory_used_of_total': toPercent((totalJSHeapSize - usedJSHeapSize) / totalJSHeapSize),
        'performance:cpu_load': load
      });
    });
  }, _config.FELOG.pingTimeout);
}), (0, _defineProperty3.default)(_activityPing$daily, 'daily-ping', function dailyPing(id, cookiesDisabled) {
  var _this = this;

  return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var pingDate, _pingDate$split, _pingDate$split2, storageNextDate, oldId, newId;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(_config.debug || !id)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return');

          case 2:
            _context.next = 4;
            return _prefs2.default.get('pingDate');

          case 4:
            pingDate = _context.sent;

            if (typeof pingDate !== 'string') pingDate = '';
            _pingDate$split = pingDate.split('|');
            _pingDate$split2 = (0, _slicedToArray3.default)(_pingDate$split, 2);
            storageNextDate = _pingDate$split2[0];
            oldId = _pingDate$split2[1];
            newId = cookiesDisabled ? 'cookiesDisabled' : id;

            if (!(storageNextDate && storageNextDate > Date.now() && oldId == newId)) {
              _context.next = 13;
              break;
            }

            return _context.abrupt('return');

          case 13:

            (0, _call.call)('mixpanel.dapiEvent', 'Daily_Ping', {
              gProduct: 'Extension-' + (0, _util.getBrowser)()
            });

            (0, _call.call)('gnar.trackTrackTrack');
            (0, _call.call)('mixpanel.track', 'Ext:Daily_Ping');
            (0, _call.call)('felog.event', 'daily_ping');

            _prefs2.default.set('pingDate', [(0, _util.getNextPingDate)(), newId].join('|'));

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }))();
}), (0, _defineProperty3.default)(_activityPing$daily, 'app_signin_success', function app_signin_success() {
  (0, _call.call)('mixpanel.track', 'G:User_Login_Succeeded');
  (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/userLoginForm/accepted');
  (0, _call.call)('statsc.ui.increment', 'stability:app_signin_success');
}), (0, _defineProperty3.default)(_activityPing$daily, 'app_signup_success', function app_signup_success() {
  (0, _call.call)('mixpanel.track', 'G:User_Account_Created');
  (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/userAccountSignupForm/accepted');
  (0, _call.call)('statsc.ui.increment', 'stability:app_signup_success');
}), (0, _defineProperty3.default)(_activityPing$daily, 'signin-error', function signinError(error) {
  error.errorType = 'Server-Side';
  (0, _call.call)('mixpanel.track', 'G:User_Login_Rejected');
  (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/userLoginForm/rejected');
}), (0, _defineProperty3.default)(_activityPing$daily, 'signup-error', function signupError(error) {
  error.errorType = 'Server-Side';
  (0, _call.call)('mixpanel.track', 'G:User_Signup_Rejected');
  (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/userAccountSignupForm/rejected');
}), (0, _defineProperty3.default)(_activityPing$daily, 'upgrade-after-register', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            (0, _call.call)('mixpanel.track', 'NE:Account_Type_Selected', {
              accountTypeSelected: 'premium'
            });
            (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/Account_Type_Selected');

          case 2:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  function upgradeAfterRegister() {
    return ref.apply(this, arguments);
  }

  return upgradeAfterRegister;
}()), (0, _defineProperty3.default)(_activityPing$daily, 'upgrade', function upgrade(placement) {
  //tested
  var data = { placement: placement };

  (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/upgradeButtonClicked', data);
  (0, _call.call)('mixpanel.track', 'Ext:Upgrade_To_Plus_Clicked', data);
  (0, _call.call)('felog.info', 'upgrade_click', data);
  (0, _call.call)('statsc.ui.increment', 'activity:upgrade.' + placement + '.click');
}), (0, _defineProperty3.default)(_activityPing$daily, 'correct-btn-clicked', function correctBtnClicked() {
  //tested
  (0, _call.call)('mixpanel.track', 'Ext:Gbutton_Clicked');
  (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/gbuttonClicked');
  (0, _call.call)('statsc.ui.increment', 'stability:editor.gbutton_clicked');
  (0, _call.call)('felog.event', 'g_button_clicked');
}), (0, _defineProperty3.default)(_activityPing$daily, 'btn-disable-in-field', function btnDisableInField(enabled) {
  //tested
  (0, _call.call)('mixpanel.track', 'Ext:Checking_in_field_toggled', { enabled: enabled });
  (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/checkingInFieldToggled', { enabled: enabled });
  (0, _call.call)('statsc.ui.increment', 'stability:disable_in_field.' + (enabled ? 'on' : 'off'));
  (0, _call.call)('felog.info', 'g_button_disable_in_field_click');
}), (0, _defineProperty3.default)(_activityPing$daily, 'button-change-state', function buttonChangeState(enabled) {
  //tested
  (0, _call.call)('statsc.ui.increment', 'stability:g_button_minimize_toggled');
}), (0, _defineProperty3.default)(_activityPing$daily, 'session-end', function sessionEnd(advancedCount) {
  (0, _call.call)('mixpanel.track', 'Ext:Only_Advanced_Mistakes', { advancedCount: advancedCount });
  (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/onlyAdvancedMistakes', { advancedCount: advancedCount });
  (0, _call.call)('felog.info', 'only_advanced_mistakes', { advancedCount: advancedCount });
}), (0, _defineProperty3.default)(_activityPing$daily, 'login-attempt', function loginAttempt(placement) {
  (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/signInClicked', { placement: placement });
  (0, _call.call)('mixpanel.track', 'Ext:Sign_In_Clicked', { placement: placement });
}), (0, _defineProperty3.default)(_activityPing$daily, 'show-dictionary', function showDictionary() {
  (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/showDictionary');
  (0, _call.call)('mixpanel.track', 'Ext:Show_Dictionary');
}), (0, _defineProperty3.default)(_activityPing$daily, 'referral-shown', function referralShown(placement) {
  (0, _call.call)('mixpanel.track', 'WE:Referral_Notification_Shown', { placement: placement });
  (0, _call.call)('gnar.send', 'referral/referralNotificationShown', { placement: placement });
}), (0, _defineProperty3.default)(_activityPing$daily, 'referral-clicked', function referralClicked(placement) {
  (0, _call.call)('mixpanel.track', 'WE:Referral_Button_Clicked', { placement: placement });
  (0, _call.call)('gnar.send', 'referral/referralButtonClicked', { placement: placement });
}), (0, _defineProperty3.default)(_activityPing$daily, 'tab-connected', function tabConnected(id, _ref, _ref2) {
  var enabled = _ref.enabled;
  var cookiesDisabled = _ref2.cookiesDisabled;

  this['daily-ping'](id, cookiesDisabled);

  if (!enabled) {
    (0, _call.call)('felog.info', 'not_enable_on_domain');
    (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/notEnableOnDomain');
  }
}), (0, _defineProperty3.default)(_activityPing$daily, 'session-invalidate', function sessionInvalidate(user, oldUser, reason, cookiesDisabled, containerId) {
  var id = user.id;
  var name = user.name;
  var anonymous = user.anonymous;
  var premium = user.premium;
  var email = user.email;
  var type = user.type;

  if (id != oldUser.id) {
    (0, _call.call)('gnar.setUser', id);
    (0, _call.call)('mixpanel.initProps');
    (0, _call.call)('felog.setUser', { id: id, name: name, anonymous: anonymous, premium: premium, email: email, type: type, containerId: containerId });
    this['daily-ping'](id, cookiesDisabled);
  }

  reason && (0, _call.call)('felog.info', 'session_invalidated_by', { reason: reason, userChanged: id != oldUser.id });

  if (oldUser.email && !oldUser.anonymous && anonymous) {
    (0, _call.call)('felog.warn', 'unexpected_user_convert_to_anonymous', {
      email: oldUser.email,
      token: oldUser.token,
      grauth: oldUser.grauth,
      tokenEqualsGrauth: oldUser.token == oldUser.grauth,
      cookiesDisabled: cookiesDisabled,
      reason: reason
    });
  }
}), (0, _defineProperty3.default)(_activityPing$daily, 'set-weak-dialect', function setWeakDialect(dialect) {
  (0, _call.call)('mixpanel.track', 'G:Language_Weak_Preference', { dialect: dialect });
  (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/languageWeakPreference', { dialect: dialect });
  (0, _call.call)('statsc.ui.increment', 'stability:weak_dialect_changed');
  (0, _call.call)('felog.info', 'weak_dialect_changed', { dialect: dialect });
}), (0, _defineProperty3.default)(_activityPing$daily, 'change-dialect', function changeDialect(_ref3) {
  var language = _ref3.language;
  var dialectWeak = _ref3.dialectWeak;

  var trackingData = { language: language };
  if (dialectWeak) {
    trackingData.sameAsWeak = language == dialectWeak;
  }
  (0, _call.call)('felog.info', 'language_dialect_changed', trackingData);
  (0, _call.call)('mixpanel.track', 'G:Language_Strong_Preference', trackingData);
  (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/languageStrongPreference', trackingData);
  (0, _call.call)('statsc.ui.increment', 'stability:language_dialect_changed');
}), (0, _defineProperty3.default)(_activityPing$daily, 'get-dapi-prop-error', function getDapiPropError(property, error) {
  (0, _call.call)('statsc.ui.increment', 'stability:get_dapi_prop_error');
  (0, _call.call)('felog.info', 'get_dapi_prop_error', { error: error, property: property });
}), (0, _defineProperty3.default)(_activityPing$daily, 'set-dapi-prop-error', function setDapiPropError(property, error) {
  (0, _call.call)('statsc.ui.increment', 'stability:set_dapi_prop_error');
  (0, _call.call)('felog.info', 'set_dapi_prop_error', { error: error, property: property });
}), (0, _defineProperty3.default)(_activityPing$daily, 'change-defs', function changeDefs(data) {
  (0, _call.call)('felog.info', 'toggle_extension_defs', data);
  (0, _call.call)('mixpanel.track', 'Ext:Definitions_Toggled:Popup', data);
  (0, _call.call)('statsc.ui.increment', 'stability:definitions_toggled');
  (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/definitionsToggled', data);
}), (0, _defineProperty3.default)(_activityPing$daily, 'change-grammar', function changeGrammar(data) {
  (0, _call.call)('felog.info', 'toggle_extension_on_site', data);
  (0, _call.call)('statsc.ui.increment', 'stability:toggle_extension_on_site');
  (0, _call.call)('mixpanel.track', 'Ext:Checking_Toggled:Popup', data);
  (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/checkingToggled', data);
}), (0, _defineProperty3.default)(_activityPing$daily, 'popup-open', function popupOpen() {
  (0, _call.call)('felog.info', 'extension_toolbar_btn_click');
  (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/browserToolbarButtonClicked');
  (0, _call.call)('mixpanel.track', 'Ext:Browser_Toolbar_Button_Clicked');
}), (0, _defineProperty3.default)(_activityPing$daily, 'popup-open-on-unsupported', function popupOpenOnUnsupported() {
  (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/browserToolbarButtonClicked/unsupported');
  (0, _call.call)('mixpanel.track', 'Ext:Settings_Open_Unsupported_Domain');
}), (0, _defineProperty3.default)(_activityPing$daily, 'cookie-overflow', function cookieOverflow(total, biggestCookie) {
  (0, _call.call)('felog.warn', 'too_big_cookie_header', { total: total, biggestCookie: biggestCookie });
  (0, _call.call)('statsc.ui.timing', 'stability:too_big_cookie_header.total', total);
}), (0, _defineProperty3.default)(_activityPing$daily, 'premium-popup-show', function premiumPopupShow() {
  (0, _call.call)('mixpanel.track', 'Ext:Upgrade_Referral_Popup_Shown');
  (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/upgradeReferralPopupShown');
}), (0, _defineProperty3.default)(_activityPing$daily, 'premium-popup-upgrade-click', function premiumPopupUpgradeClick() {
  (0, _call.call)('mixpanel.track', 'Ext:Upgrade_Referral_Premium_Btn_Clicked');
  (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/upgradeReferralPremiumBtnClicked');
}), (0, _defineProperty3.default)(_activityPing$daily, 'premium-popup-referral-click', function premiumPopupReferralClick() {
  (0, _call.call)('mixpanel.track', 'Ext:Upgrade_Referral_Invite_Btn_Clicked');
  (0, _call.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/upgradeReferralInviteBtnClicked');
}), _activityPing$daily);
module.exports = exports['default'];

},{"../bg/prefs":115,"../config":116,"../util":149,"./call":143,"babel-runtime/helpers/asyncToGenerator":15,"babel-runtime/helpers/defineProperty":18,"babel-runtime/helpers/slicedToArray":23,"babel-runtime/regenerator":107}],147:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = function (method, opts) {
  var names = opts && opts.split(':');

  if (!names[0] || !names[1]) return;

  var event = 'grammarly.ui.' + names[0] + '.' + (0, _util.getBrowser)() + '.extension.world.' + names[1],
      data = { c: {} };

  data.c[event] = ['1'];

  var img = document.createElement('img');
  img.src = _config.STATSC.URL + '?json=' + (0, _stringify2.default)(data);
  console.info(method, opts);

  return img;
};

var _util = require('../util');

var _config = require('../config');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = exports['default'];

},{"../config":116,"../util":149,"babel-runtime/core-js/json/stringify":5}],148:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return window.tracker;
};

module.exports = exports['default'];

},{}],149:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var isBgAlive = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (isChrome()) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', null);

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return _promise2.default.race([new _promise2.default(function (resolve) {
              return window.chrome.runtime.sendMessage('ping', resolve);
            }), delay(10000).then(function () {
              return 'timeouted';
            })]);

          case 5:
            return _context.abrupt('return', _context.sent);

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](2);
            return _context.abrupt('return', 'orphaned');

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 8]]);
  }));
  return function isBgAlive() {
    return ref.apply(this, arguments);
  };
}();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _nonCryptoHash = require('non-crypto-hash');

var _nonCryptoHash2 = _interopRequireDefault(_nonCryptoHash);

var _localStorage = require('local-storage');

var _localStorage2 = _interopRequireDefault(_localStorage);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function isFF() {
  return window.navigator.userAgent.indexOf('Firefox') != -1;
}

function isChrome() {
  return !!window.chrome;
}

function isSafari() {
  return (/^((?!chrome).)*safari/i.test(navigator.userAgent)
  );
}

function isSafari8() {
  return (/^((?!chrome).)*safari/i.test(navigator.userAgent) && navigator.userAgent.indexOf('Version/8.0') != -1
  );
}

function isWindows() {
  return navigator.appVersion.indexOf('Win') != -1;
}

function isBg() {
  return window.IS_BG;
}

function isPopup() {
  return window.IS_POPUP;
}

function isBgOrPopup() {
  return isBg() || isPopup();
}

function getBrowser() {
  if (isChrome()) {
    return 'chrome';
  } else if (isFF()) {
    return 'firefox';
  } else if (isSafari()) {
    return 'safari';
  } else {
    return 'other';
  }
}

function isGrammarlyEmail(email) {
  var isEmailForTests = ['freeeeeeee@grammarly.com', 'premiumuser@grammarly.com'].indexOf(email) != -1;
  return !isEmailForTests && /^.*@grammarly.com$/.test(email);
}

function chromeBgError() {
  return window.chrome && window.chrome.runtime && window.chrome.runtime.lastError;
}

function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

function interval(cb, time) {
  var items = interval.items = interval.items || {},
      item = items[cb];

  if (!item && !time) return;

  if (item && !time) {
    clearTimeout(item);
    delete items[cb];
    return;
  } else run();

  function run() {
    function _cb() {
      timeout();
      cb();
    }

    function timeout() {
      var tid = setTimeout(_cb, time);
      items[cb] = tid;
    }
    timeout();
  }
}

function cancelInterval(cb) {
  interval(cb);
}

function S4() {
  return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
}
function guid() {
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}

function _f() {}
function _F() {
  return true;
}

function bgPageReload() {
  isChrome() && window.chrome.runtime.reload();
}

function isGmail(doc) {
  if (!doc.location) return;
  var host = doc.location.host == 'mail.google.com',
      frames = doc.querySelector('iframe#js_frame') && doc.querySelector('iframe#sound_frame');
  return host || frames;
}

function isValidEmail(value) {
  return (/^[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+@[-!#$%&\'*+\\/0-9=?A-Z^_`a-z{|}~]+\.[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+$/.test(value)
  );
}

function formatNumber(i) {
  return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function declension(value, arr) {
  return arr[value == 1 ? 0 : 1];
}

function stub(methods) {
  return _lodash2.default.transform(methods, function (result, m) {
    return result[m] = _f;
  });
}

function memoize(func, resolver, ttl) {
  var cache = {};
  return function () {
    var key = '_memoize_' + (resolver ? resolver.apply(this, arguments) : arguments[0]);
    if (hasOwnProperty.call(cache, key)) {
      return cache[key];
    } else {
      if (ttl) {
        setTimeout(function () {
          delete cache[key];
        }, ttl);
      }
      return cache[key] = func.apply(this, arguments);
    }
  };
}

function syncWait(promise, methods) {
  return (0, _keys2.default)(methods).reduce(function (obj, method) {
    return (0, _extends4.default)({}, obj, (0, _defineProperty3.default)({}, method, function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return promise.then(function () {
        return methods[method].apply(methods, args);
      });
    }));
  }, {});
}

function promisify(method) {
  return new _promise2.default(function (resolve) {
    return method(resolve);
  });
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function delay(ms) {
  return new _promise2.default(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

//decided to use simple function instead heavy moment.js
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function formatDate(dateStr) {
  if (!dateStr) return;
  var date = new Date(dateStr);
  if (date.toString() == 'Invalid Date') return;
  return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}

function createClass(func) {
  var _class = function _class() {};
  _class.prototype = func();
  return _class;
}

/**
 * Compare two versions of extension. Version format x.x.x
 * @param {string} v1 first version to compare
 * @param {string} v2 second version to compare
 * @example
 * // returns 1
 * versionComparator('2.0.0', '0.0.9')
 * @example
 * // returns 0
 * versionComparator('2.0.0', '2.0.0')
 * @example
 * // returns -1
 * versionComparator('1.0.0', '2.0.0')
 * @returns {Number} Returns 1, 0 or -1
 */
function versionComparator() {
  var v1 = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var v2 = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  function splitToArray(str) {
    return str.split('.').map(function (el) {
      return Number(el) || 0;
    });
  }

  var v1arr = splitToArray(v1),
      v2arr = splitToArray(v2),
      postfix = Array(Math.abs(v1arr.length - v2arr.length)).fill(0);

  v1arr.length > v2arr.length ? v2arr.push.apply(v2arr, (0, _toConsumableArray3.default)(postfix)) : v1arr.push.apply(v1arr, (0, _toConsumableArray3.default)(postfix));

  if (v1arr.every(function (v, i) {
    return v === v2arr[i];
  })) return 0;

  for (var i = 0, len = v1arr.length; i < len; i++) {
    if (v1arr[i] > v2arr[i]) {
      return 1;
    } else if (v1arr[i] < v2arr[i]) {
      return -1;
    }
  }
  return -1;
}

function asyncCall(cb) {
  var time = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];

  setTimeout(cb, time);
}

function createChannel() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$buffered = _ref.buffered;
  var buffered = _ref$buffered === undefined ? true : _ref$buffered;

  var messageQueue = [];
  var resolveQueue = [];

  function put(msg) {
    // anyone waiting for a message ?
    if (resolveQueue.length) {
      // deliver the message to the oldest one waiting (First In First Out)
      var nextResolve = resolveQueue.shift();
      nextResolve(msg);
    } else {
      // no one is waiting ? queue the event
      buffered ? messageQueue.push(msg) : messageQueue[0] = msg;
    }
  }

  // returns a Promise resolved with the next message
  function take() {
    // do we have queued messages ?
    if (messageQueue.length) {
      // deliver the oldest queued message
      return _promise2.default.resolve(messageQueue.shift());
    } else {
      // no queued messages ? queue the taker until a message arrives
      return new _promise2.default(function (resolve) {
        return resolveQueue.push(resolve);
      });
    }
  }

  return {
    take: take,
    put: put
  };
}

function normalizedHashCode(str) {
  var base = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];

  if (!str) return NaN;

  var algo = _nonCryptoHash2.default.createHash('superfasthash');
  return parseInt(algo.hash(str), 16) % base;
}

function keyCode(event) {
  return event.which || event.charCode || event.keyCode || 0;
}

var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;

var pastDays = function pastDays(date) {
  return Math.round(Math.abs(new Date() - new Date(date)) / DAY);
};

//get random local time between 3-4 AM
function getNextPingDate() {
  var now = new Date();
  if (now.getHours() > 2) {
    now.setDate(now.getDate() + 1);
  }
  now.setHours(3);
  now.setMinutes(Math.floor(Math.random() * 60));

  return now.getTime();
}

function checkLocalStorage() {
  var TEST_LS_PROPERTY = 'test_localstorage_availability';
  var VALUE = 'test';

  try {
    (0, _localStorage2.default)(TEST_LS_PROPERTY, VALUE);
    var v = (0, _localStorage2.default)(TEST_LS_PROPERTY);
    if (v !== VALUE) {
      return { enabled: false, message: 'wrong property returned: [' + v + ']' };
    }
  } catch (e) {
    return { enabled: false, message: e.message };
  }

  return { enabled: true };
}

exports.default = {
  getBrowser: getBrowser,
  isFunction: isFunction,
  chromeBgError: chromeBgError,
  interval: interval,
  declension: declension,
  cancelInterval: cancelInterval,
  bgPageReload: bgPageReload,
  isFF: isFF,
  isChrome: isChrome,
  isSafari: isSafari,
  isSafari8: isSafari8,
  isGmail: isGmail,
  isWindows: isWindows,
  isBg: isBg,
  isBgOrPopup: isBgOrPopup,
  isPopup: isPopup,
  isGrammarlyEmail: isGrammarlyEmail,
  guid: guid,
  formatNumber: formatNumber,
  getRandomIntInclusive: getRandomIntInclusive,
  stub: stub,
  memoize: memoize,
  syncWait: syncWait,
  promisify: promisify,
  delay: delay,
  formatDate: formatDate,
  createClass: createClass,
  versionComparator: versionComparator,
  isValidEmail: isValidEmail,
  isBgAlive: isBgAlive,
  asyncCall: asyncCall,
  createChannel: createChannel,
  normalizedHashCode: normalizedHashCode,
  keyCode: keyCode,
  _f: _f,
  _F: _F,
  getNextPingDate: getNextPingDate,
  pastDays: pastDays,
  SECOND: SECOND,
  MINUTE: MINUTE,
  HOUR: HOUR,
  DAY: DAY,
  checkLocalStorage: checkLocalStorage
};
module.exports = exports['default'];

},{"babel-runtime/core-js/object/keys":10,"babel-runtime/core-js/promise":12,"babel-runtime/helpers/asyncToGenerator":15,"babel-runtime/helpers/defineProperty":18,"babel-runtime/helpers/extends":19,"babel-runtime/helpers/toConsumableArray":24,"babel-runtime/regenerator":107,"local-storage":"local-storage","lodash":"lodash","non-crypto-hash":"non-crypto-hash"}]},{},[124]);
