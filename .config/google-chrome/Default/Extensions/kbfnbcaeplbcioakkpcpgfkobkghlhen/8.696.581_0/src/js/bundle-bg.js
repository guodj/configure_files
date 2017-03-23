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
},{"core-js/library/fn/array/from":27}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":28}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":29}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":30}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":31}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":32}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":33}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":34}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":35}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":36}],12:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/values"), __esModule: true };
},{"core-js/library/fn/object/values":37}],13:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":38}],14:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":39}],15:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":40}],16:[function(require,module,exports){
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
},{"../core-js/promise":13}],17:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],18:[function(require,module,exports){
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
},{"../core-js/object/define-property":8}],19:[function(require,module,exports){
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
},{"../core-js/object/define-property":8}],20:[function(require,module,exports){
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
},{"../core-js/object/assign":6}],21:[function(require,module,exports){
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
},{"../core-js/object/create":7,"../core-js/object/set-prototype-of":11,"../helpers/typeof":26}],22:[function(require,module,exports){
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
},{}],23:[function(require,module,exports){
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
},{"../helpers/typeof":26}],24:[function(require,module,exports){
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
},{"../core-js/get-iterator":3,"../core-js/is-iterable":4}],25:[function(require,module,exports){
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
},{"../core-js/array/from":2}],26:[function(require,module,exports){
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
},{"../core-js/symbol":14,"../core-js/symbol/iterator":15}],27:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/$.core').Array.from;
},{"../../modules/$.core":46,"../../modules/es6.array.from":99,"../../modules/es6.string.iterator":107}],28:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":97,"../modules/es6.string.iterator":107,"../modules/web.dom.iterable":110}],29:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');
},{"../modules/core.is-iterable":98,"../modules/es6.string.iterator":107,"../modules/web.dom.iterable":110}],30:[function(require,module,exports){
var core = require('../../modules/$.core');
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
};
},{"../../modules/$.core":46}],31:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/$.core').Object.assign;
},{"../../modules/$.core":46,"../../modules/es6.object.assign":101}],32:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":71}],33:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":71}],34:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/$.core').Object.getPrototypeOf;
},{"../../modules/$.core":46,"../../modules/es6.object.get-prototype-of":102}],35:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/$.core').Object.keys;
},{"../../modules/$.core":46,"../../modules/es6.object.keys":103}],36:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/$.core').Object.setPrototypeOf;
},{"../../modules/$.core":46,"../../modules/es6.object.set-prototype-of":104}],37:[function(require,module,exports){
require('../../modules/es7.object.values');
module.exports = require('../../modules/$.core').Object.values;
},{"../../modules/$.core":46,"../../modules/es7.object.values":109}],38:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/$.core').Promise;
},{"../modules/$.core":46,"../modules/es6.object.to-string":105,"../modules/es6.promise":106,"../modules/es6.string.iterator":107,"../modules/web.dom.iterable":110}],39:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
module.exports = require('../../modules/$.core').Symbol;
},{"../../modules/$.core":46,"../../modules/es6.object.to-string":105,"../../modules/es6.symbol":108}],40:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/$.wks')('iterator');
},{"../../modules/$.wks":95,"../../modules/es6.string.iterator":107,"../../modules/web.dom.iterable":110}],41:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],42:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],43:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":64}],44:[function(require,module,exports){
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
},{"./$.cof":45,"./$.wks":95}],45:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],46:[function(require,module,exports){
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],47:[function(require,module,exports){
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
},{"./$.a-function":41}],48:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],49:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":53}],50:[function(require,module,exports){
var isObject = require('./$.is-object')
  , document = require('./$.global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$.global":56,"./$.is-object":64}],51:[function(require,module,exports){
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
},{"./$":71}],52:[function(require,module,exports){
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
},{"./$.core":46,"./$.ctx":47,"./$.global":56}],53:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],54:[function(require,module,exports){
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
},{"./$.an-object":43,"./$.ctx":47,"./$.is-array-iter":62,"./$.iter-call":65,"./$.to-length":92,"./core.get-iterator-method":96}],55:[function(require,module,exports){
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
},{"./$":71,"./$.to-iobject":91}],56:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],57:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],58:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.descriptors') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":71,"./$.descriptors":49,"./$.property-desc":78}],59:[function(require,module,exports){
module.exports = require('./$.global').document && document.documentElement;
},{"./$.global":56}],60:[function(require,module,exports){
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
},{}],61:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./$.cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":45}],62:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./$.iterators')
  , ITERATOR   = require('./$.wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./$.iterators":70,"./$.wks":95}],63:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./$.cof');
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};
},{"./$.cof":45}],64:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],65:[function(require,module,exports){
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
},{"./$.an-object":43}],66:[function(require,module,exports){
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
},{"./$":71,"./$.hide":58,"./$.property-desc":78,"./$.set-to-string-tag":84,"./$.wks":95}],67:[function(require,module,exports){
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
},{"./$":71,"./$.export":52,"./$.has":57,"./$.hide":58,"./$.iter-create":66,"./$.iterators":70,"./$.library":73,"./$.redefine":80,"./$.set-to-string-tag":84,"./$.wks":95}],68:[function(require,module,exports){
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
},{"./$.wks":95}],69:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],70:[function(require,module,exports){
module.exports = {};
},{}],71:[function(require,module,exports){
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
},{}],72:[function(require,module,exports){
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
},{"./$":71,"./$.to-iobject":91}],73:[function(require,module,exports){
module.exports = true;
},{}],74:[function(require,module,exports){
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
},{"./$.cof":45,"./$.global":56,"./$.task":89}],75:[function(require,module,exports){
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
},{"./$":71,"./$.fails":53,"./$.iobject":61,"./$.to-object":93}],76:[function(require,module,exports){
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
},{"./$.core":46,"./$.export":52,"./$.fails":53}],77:[function(require,module,exports){
var $         = require('./$')
  , toIObject = require('./$.to-iobject')
  , isEnum    = $.isEnum;
module.exports = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = $.getKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};
},{"./$":71,"./$.to-iobject":91}],78:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],79:[function(require,module,exports){
var redefine = require('./$.redefine');
module.exports = function(target, src){
  for(var key in src)redefine(target, key, src[key]);
  return target;
};
},{"./$.redefine":80}],80:[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":58}],81:[function(require,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],82:[function(require,module,exports){
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
},{"./$":71,"./$.an-object":43,"./$.ctx":47,"./$.is-object":64}],83:[function(require,module,exports){
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
},{"./$":71,"./$.core":46,"./$.descriptors":49,"./$.wks":95}],84:[function(require,module,exports){
var def = require('./$').setDesc
  , has = require('./$.has')
  , TAG = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./$":71,"./$.has":57,"./$.wks":95}],85:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":56}],86:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./$.an-object')
  , aFunction = require('./$.a-function')
  , SPECIES   = require('./$.wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./$.a-function":41,"./$.an-object":43,"./$.wks":95}],87:[function(require,module,exports){
module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
},{}],88:[function(require,module,exports){
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
},{"./$.defined":48,"./$.to-integer":90}],89:[function(require,module,exports){
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
},{"./$.cof":45,"./$.ctx":47,"./$.dom-create":50,"./$.global":56,"./$.html":59,"./$.invoke":60}],90:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],91:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":48,"./$.iobject":61}],92:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./$.to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./$.to-integer":90}],93:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":48}],94:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],95:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , uid    = require('./$.uid')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};
},{"./$.global":56,"./$.shared":85,"./$.uid":94}],96:[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./$.classof":44,"./$.core":46,"./$.iterators":70,"./$.wks":95}],97:[function(require,module,exports){
var anObject = require('./$.an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./$.core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./$.an-object":43,"./$.core":46,"./core.get-iterator-method":96}],98:[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
},{"./$.classof":44,"./$.core":46,"./$.iterators":70,"./$.wks":95}],99:[function(require,module,exports){
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

},{"./$.ctx":47,"./$.export":52,"./$.is-array-iter":62,"./$.iter-call":65,"./$.iter-detect":68,"./$.to-length":92,"./$.to-object":93,"./core.get-iterator-method":96}],100:[function(require,module,exports){
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
},{"./$.add-to-unscopables":42,"./$.iter-define":67,"./$.iter-step":69,"./$.iterators":70,"./$.to-iobject":91}],101:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./$.export');

$export($export.S + $export.F, 'Object', {assign: require('./$.object-assign')});
},{"./$.export":52,"./$.object-assign":75}],102:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('getPrototypeOf', function($getPrototypeOf){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./$.object-sap":76,"./$.to-object":93}],103:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('keys', function($keys){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./$.object-sap":76,"./$.to-object":93}],104:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./$.export');
$export($export.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.export":52,"./$.set-proto":82}],105:[function(require,module,exports){

},{}],106:[function(require,module,exports){
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
},{"./$":71,"./$.a-function":41,"./$.an-object":43,"./$.classof":44,"./$.core":46,"./$.ctx":47,"./$.descriptors":49,"./$.export":52,"./$.for-of":54,"./$.global":56,"./$.is-object":64,"./$.iter-detect":68,"./$.library":73,"./$.microtask":74,"./$.redefine-all":79,"./$.same-value":81,"./$.set-proto":82,"./$.set-species":83,"./$.set-to-string-tag":84,"./$.species-constructor":86,"./$.strict-new":87,"./$.wks":95}],107:[function(require,module,exports){
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
},{"./$.iter-define":67,"./$.string-at":88}],108:[function(require,module,exports){
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
},{"./$":71,"./$.an-object":43,"./$.descriptors":49,"./$.enum-keys":51,"./$.export":52,"./$.fails":53,"./$.get-names":55,"./$.global":56,"./$.has":57,"./$.is-array":63,"./$.keyof":72,"./$.library":73,"./$.property-desc":78,"./$.redefine":80,"./$.set-to-string-tag":84,"./$.shared":85,"./$.to-iobject":91,"./$.uid":94,"./$.wks":95}],109:[function(require,module,exports){
// http://goo.gl/XkBrjD
var $export = require('./$.export')
  , $values = require('./$.object-to-array')(false);

$export($export.S, 'Object', {
  values: function values(it){
    return $values(it);
  }
});
},{"./$.export":52,"./$.object-to-array":77}],110:[function(require,module,exports){
require('./es6.array.iterator');
var Iterators = require('./$.iterators');
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
},{"./$.iterators":70,"./es6.array.iterator":100}],111:[function(require,module,exports){
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
},{"./runtime":112}],112:[function(require,module,exports){
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
},{"../core-js/object/create":7,"../core-js/object/set-prototype-of":11,"../core-js/promise":13,"../core-js/symbol":14,"../core-js/symbol/iterator":15,"../helpers/typeof":26,"_process":113}],113:[function(require,module,exports){
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

},{}],114:[function(require,module,exports){
module.exports = require('./lib/effects')
},{"./lib/effects":115}],115:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.select = exports.cancel = exports.join = exports.fork = exports.cps = exports.apply = exports.call = exports.race = exports.put = exports.take = undefined;

var _io = require('./internal/io');

exports.take = _io.take;
exports.put = _io.put;
exports.race = _io.race;
exports.call = _io.call;
exports.apply = _io.apply;
exports.cps = _io.cps;
exports.fork = _io.fork;
exports.join = _io.join;
exports.cancel = _io.cancel;
exports.select = _io.select;
},{"./internal/io":116}],116:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asEffect = exports.SELECT_ARG_ERROR = exports.INVALID_PATTERN = exports.CANCEL_ARG_ERROR = exports.JOIN_ARG_ERROR = exports.FORK_ARG_ERROR = exports.CALL_FUNCTION_ARG_ERROR = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.matcher = matcher;
exports.take = take;
exports.put = put;
exports.race = race;
exports.call = call;
exports.apply = apply;
exports.cps = cps;
exports.fork = fork;
exports.join = join;
exports.cancel = cancel;
exports.select = select;

var _utils = require("./utils");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CALL_FUNCTION_ARG_ERROR = exports.CALL_FUNCTION_ARG_ERROR = "call/cps/fork first argument must be a function, an array [context, function] or an object {context, fn}";
var FORK_ARG_ERROR = exports.FORK_ARG_ERROR = "fork first argument must be a generator function or an iterator";
var JOIN_ARG_ERROR = exports.JOIN_ARG_ERROR = "join argument must be a valid task (a result of a fork)";
var CANCEL_ARG_ERROR = exports.CANCEL_ARG_ERROR = "cancel argument must be a valid task (a result of a fork)";
var INVALID_PATTERN = exports.INVALID_PATTERN = "Invalid pattern passed to `take` (HINT: check if you didn't mispell a constant)";
var SELECT_ARG_ERROR = exports.SELECT_ARG_ERROR = "select first argument must be a function";

var IO = (0, _utils.sym)('IO');
var TAKE = 'TAKE';
var PUT = 'PUT';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';

var effect = function effect(type, payload) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, IO, true), _defineProperty(_ref, type, payload), _ref;
};

var matchers = {
  wildcard: function wildcard() {
    return _utils.kTrue;
  },
  default: function _default(pattern) {
    return function (input) {
      return input.type === pattern;
    };
  },
  array: function array(patterns) {
    return function (input) {
      return patterns.some(function (p) {
        return p === input.type;
      });
    };
  },
  predicate: function predicate(_predicate) {
    return function (input) {
      return _predicate(input);
    };
  }
};

function matcher(pattern) {
  return (pattern === '*' ? matchers.wildcard : _utils.is.array(pattern) ? matchers.array : _utils.is.func(pattern) ? matchers.predicate : matchers.default)(pattern);
}

function take(pattern) {
  if (arguments.length > 0 && _utils.is.undef(pattern)) {
    throw new Error(INVALID_PATTERN);
  }

  return effect(TAKE, _utils.is.undef(pattern) ? '*' : pattern);
}

function put(action) {
  return effect(PUT, action);
}

function race(effects) {
  return effect(RACE, effects);
}

function getFnCallDesc(fn, args) {
  (0, _utils.check)(fn, _utils.is.notUndef, CALL_FUNCTION_ARG_ERROR);

  var context = null;
  if (_utils.is.array(fn)) {
    var _fn = fn;

    var _fn2 = _slicedToArray(_fn, 2);

    context = _fn2[0];
    fn = _fn2[1];
  } else if (fn.fn) {
    var _fn3 = fn;
    context = _fn3.context;
    fn = _fn3.fn;
  }
  (0, _utils.check)(fn, _utils.is.func, CALL_FUNCTION_ARG_ERROR);

  return { context: context, fn: fn, args: args };
}

function call(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return effect(CALL, getFnCallDesc(fn, args));
}

function apply(context, fn) {
  var args = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

  return effect(CALL, getFnCallDesc({ context: context, fn: fn }, args));
}

function cps(fn) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return effect(CPS, getFnCallDesc(fn, args));
}

function fork(fn) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return effect(FORK, getFnCallDesc(fn, args));
}

var isForkedTask = function isForkedTask(task) {
  return task[_utils.TASK];
};

function join(taskDesc) {
  if (!isForkedTask(taskDesc)) throw new Error(JOIN_ARG_ERROR);

  return effect(JOIN, taskDesc);
}

function cancel(taskDesc) {
  if (!isForkedTask(taskDesc)) throw new Error(CANCEL_ARG_ERROR);

  return effect(CANCEL, taskDesc);
}

function select(selector) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  if (arguments.length === 0) {
    selector = _utils.ident;
  } else {
    (0, _utils.check)(selector, _utils.is.func, SELECT_ARG_ERROR);
  }
  return effect(SELECT, { selector: selector, args: args });
}

var asEffect = exports.asEffect = {
  take: function take(effect) {
    return effect && effect[IO] && effect[TAKE];
  },
  put: function put(effect) {
    return effect && effect[IO] && effect[PUT];
  },
  race: function race(effect) {
    return effect && effect[IO] && effect[RACE];
  },
  call: function call(effect) {
    return effect && effect[IO] && effect[CALL];
  },
  cps: function cps(effect) {
    return effect && effect[IO] && effect[CPS];
  },
  fork: function fork(effect) {
    return effect && effect[IO] && effect[FORK];
  },
  join: function join(effect) {
    return effect && effect[IO] && effect[JOIN];
  },
  cancel: function cancel(effect) {
    return effect && effect[IO] && effect[CANCEL];
  },
  select: function select(effect) {
    return effect && effect[IO] && effect[SELECT];
  }
};
},{"./utils":117}],117:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.ident = ident;
exports.check = check;
exports.remove = remove;
exports.deferred = deferred;
exports.arrayOfDeffered = arrayOfDeffered;
exports.autoInc = autoInc;
exports.asap = asap;
exports.warnDeprecated = warnDeprecated;
var sym = exports.sym = function sym(id) {
  return '@@redux-saga/' + id;
};

var TASK = exports.TASK = sym('TASK');
var kTrue = exports.kTrue = function kTrue() {
  return true;
};
var noop = exports.noop = function noop() {};
function ident(v) {
  return v;
}

var isDev = exports.isDev = typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development';

function check(value, predicate, error) {
  if (!predicate(value)) throw new Error(error);
}

var is = exports.is = {
  undef: function undef(v) {
    return v === null || v === undefined;
  },
  notUndef: function notUndef(v) {
    return v !== null && v !== undefined;
  },
  func: function func(f) {
    return typeof f === 'function';
  },
  array: Array.isArray,
  promise: function promise(p) {
    return p && is.func(p.then);
  },
  iterator: function iterator(it) {
    return it && is.func(it.next) && is.func(it.throw);
  },
  task: function task(it) {
    return it && it[TASK];
  }
};

function remove(array, item) {
  var index = array.indexOf(item);
  if (index >= 0) array.splice(index, 1);
}

function deferred() {
  var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var def = _extends({}, props);
  var promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  def.promise = promise;
  return def;
}

function arrayOfDeffered(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }
  return arr;
}

function autoInc() {
  var seed = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

  return function () {
    return ++seed;
  };
}

function asap(action) {
  return Promise.resolve(1).then(function () {
    return action();
  });
}

/* eslint-disable no-console */
function warnDeprecated(msg) {
  if (isDev) {
    console.warn('DEPRECATION WARNING', msg);
  }
}
}).call(this,require('_process'))
},{"_process":113}],118:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = Init;
exports.initAPI = initAPI;

var _localforage = require('lib/page-config/localforage');

var _localforage2 = _interopRequireDefault(_localforage);

var _forge = require('lib/forge');

var _forge2 = _interopRequireDefault(_forge);

var _message = require('../message');

var _message2 = _interopRequireDefault(_message);

var _tracking = require('../tracking');

var _tracking2 = _interopRequireDefault(_tracking);

var _util = require('../util');

var _bg = require('../socket/bg');

var _prefs = require('./prefs');

var _prefs2 = _interopRequireDefault(_prefs);

var _store = require('./store');

var _offline = require('./offline');

var _offline2 = _interopRequireDefault(_offline);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function Init(actions, auth) {
  var API = initAPI(actions, auth);
  var messageToAPI = function messageToAPI(type) {
    return _message2.default.on(type, API[type], null, true);
  };

  (0, _keys2.default)(API).forEach(messageToAPI);

  var offline = (0, _offline2.default)();
  offline.on('online', function () {
    return actions.updateConnection({ networkOffline: false });
  });
  offline.on('offline', function () {
    return actions.updateConnection({ networkOffline: true });
  });
}

function initAPI(actions, auth) {
  var _API,
      _this = this;

  var API = (_API = {
    dispatch: _store.dispatch,

    signin: function signin(data, cb) {
      return auth.signin(data).then(cb);
    },

    signup: function signup(data, cb) {
      return auth.signup(data).then(cb);
    }

  }, (0, _defineProperty3.default)(_API, 'open-url', function openUrl(url) {
    return _forge2.default.tabs.open(url);
  }), (0, _defineProperty3.default)(_API, 'external:changed-plan', function externalChangedPlan() {
    _tracking2.default.call('felog.info', 'external.changed-plan');
    actions.sessionInvalidate('changed-plan');
  }), (0, _defineProperty3.default)(_API, 'external:changed-dialect', function externalChangedDialect() {
    _tracking2.default.call('felog.info', 'external.changed-dialect');
    actions.sessionInvalidate('changed-dialect');
  }), (0, _defineProperty3.default)(_API, 'external:changed-user', function externalChangedUser() {
    _tracking2.default.call('felog.info', 'external.changed-user');
    actions.sessionInvalidate('changed-user');
  }), (0, _defineProperty3.default)(_API, 'external:editor-fix', function externalEditorFix() {
    _tracking2.default.call('felog.info', 'external.editor-fix');
    actions.incFixed();
  }), (0, _defineProperty3.default)(_API, 'external:cleanup', function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var preserve, values;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _tracking2.default.call('felog.info', 'external.cleanup');
              preserve = ['extensionSettings', 'extensionInstallDate', 'version'];
              _context.next = 4;
              return _prefs2.default.get(preserve);

            case 4:
              values = _context.sent;

              _prefs2.default.clearAll();
              _prefs2.default.set(preserve.reduce(function (obj, key) {
                return (0, _extends4.default)({}, obj, (0, _defineProperty3.default)({}, key, values[key]));
              }, { enabledDefs: false }));
              actions.sessionInvalidate('logout');

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function externalCleanup() {
      return ref.apply(this, arguments);
    }

    return externalCleanup;
  }()), _API);

  if (!"true") {
    var _Object$assign2;

    (0, _assign2.default)(API, (_Object$assign2 = {}, (0, _defineProperty3.default)(_Object$assign2, 'bg-reload', function bgReload() {
      return (0, _util.bgPageReload)();
    }), (0, _defineProperty3.default)(_Object$assign2, 'reset', function reset() {
      console.log('RESET PREFS');
      _prefs2.default.clearAll();
      _localforage2.default.clear();
    }), (0, _defineProperty3.default)(_Object$assign2, 'get-tracker-log', function getTrackerLog(data, cb) {
      cb(_tracking2.default.getLog());
    }), (0, _defineProperty3.default)(_Object$assign2, 'get-capi-log', function getCapiLog(data, cb) {
      var log = (0, _bg.getLog)();
      console.log('GETTING CAPI LOG', log);
      cb(log);
    }), (0, _defineProperty3.default)(_Object$assign2, 'get-extid', function getExtid(data, cb) {
      return cb(window.chrome ? window.chrome.runtime.id : null);
    }), (0, _defineProperty3.default)(_Object$assign2, 'set-localforage', function setLocalforage(data, cb) {
      console.log('set-localforage', data);
      _localforage2.default.setItem(data.key, data.value).then(cb);
    }), (0, _defineProperty3.default)(_Object$assign2, 'get-localforage', function () {
      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(data, cb) {
        var value;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _localforage2.default.getItem(data.key);

              case 2:
                value = _context2.sent;

                cb('localforage', { key: data.key, value: value });

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this);
      }));
      return function getLocalforage(_x, _x2) {
        return ref.apply(this, arguments);
      };
    }()), _Object$assign2));
  }

  return API;
}

},{"../message":159,"../socket/bg":170,"../tracking":177,"../util":181,"./offline":152,"./prefs":153,"./store":154,"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/object/keys":10,"babel-runtime/helpers/asyncToGenerator":16,"babel-runtime/helpers/defineProperty":19,"babel-runtime/helpers/extends":20,"babel-runtime/regenerator":111,"lib/forge":157,"lib/page-config/localforage":165}],119:[function(require,module,exports){
(function (global){
'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var start = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return overwriteUlrs();

          case 2:

            profiler.track(_tracking.initBg);
            trackLocalStorageAvailability();
            profiler.track(_api2.default, _store.actions, _store.auth);
            profiler.track(_socket2.default, _store.socketConfig);
            _context.next = 8;
            return profiler.track({ wait: true }, _store.initStore);

          case 8:
            _context.next = 10;
            return profiler.track({ wait: true }, checkUpdate);

          case 10:

            profiler.track(_chrome.loadContentScripts, _config.GRAMMARLY_DOMAIN);
            profiler.track(_chrome.loadProxy);

            trackBgStartTime();
            _context.next = 15;
            return checkBgInit();

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return function start() {
    return ref.apply(this, arguments);
  };
}();

var checkBgInit = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var bgFails;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _prefs2.default.get('bgInitFail');

          case 2:
            bgFails = _context2.sent;

            if (bgFails) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt('return');

          case 5:

            (0, _tracking.call)('felog.error', 'bg_init_fail', { bgFails: bgFails });
            _prefs2.default.set('bgInitFail', 0);

          case 7:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return function checkBgInit() {
    return ref.apply(this, arguments);
  };
}();

var checkUpdate = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
    var version, previousVersion, enabledDefs;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            version = (0, _config.getVersion)();
            _context3.next = 3;
            return _prefs2.default.get('version');

          case 3:
            previousVersion = _context3.sent;

            if (!(version == previousVersion)) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt('return');

          case 6:
            if (previousVersion) {
              _context3.next = 13;
              break;
            }

            _context3.next = 9;
            return install();

          case 9:
            //call it to populate prefs - we need them when open popup
            _prefs2.default.set('enabledDefs', false);
            _store.actions.seenNews();
            _context3.next = 21;
            break;

          case 13:
            (0, _tracking.call)('statsc.ui.increment', 'stability:extension_updated');
            (0, _tracking.call)('felog.info', 'extension_updated');
            (0, _tracking.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/updated');

            _context3.next = 18;
            return _prefs2.default.get('enabledDefs');

          case 18:
            enabledDefs = _context3.sent;

            if (!_lodash2.default.isBoolean(enabledDefs)) {
              _prefs2.default.set('enabledDefs', true); //existing users get true
            }

            try {
              if (version.split('.')[0] != previousVersion.split('.')[0]) {
                notification.update();
              }
            } catch (error) {
              (0, _tracking.call)('felog.error', 'bad_prev_version', { error: error, previousVersion: previousVersion });
            }

          case 21:

            _prefs2.default.set('version', version);

          case 22:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return function checkUpdate() {
    return ref.apply(this, arguments);
  };
}();

var install = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
    var getSource = function () {
      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
        var _true$fromFunnel$from2;

        var url, domain, fromFunnel, fromBlog, _true$fromFunnel$from, source;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _location.currentUrl)();

              case 2:
                url = _context4.sent;
                _context4.next = 5;
                return (0, _location.promiseGetDomain)();

              case 5:
                domain = _context4.sent;
                fromFunnel = domain.includes(_config.GRAMMARLY_DOMAIN);
                fromBlog = url.includes(_config.GRAMMARLY_DOMAIN + '/blog');
                _true$fromFunnel$from = (_true$fromFunnel$from2 = {}, (0, _defineProperty3.default)(_true$fromFunnel$from2, true, 'webstore'), (0, _defineProperty3.default)(_true$fromFunnel$from2, fromFunnel, 'funnel'), (0, _defineProperty3.default)(_true$fromFunnel$from2, fromBlog, 'blog'), _true$fromFunnel$from2);
                source = _true$fromFunnel$from.true;
                return _context4.abrupt('return', source);

              case 11:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      return function getSource() {
        return ref.apply(this, arguments);
      };
    }();

    var source, installTrack, browserName;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            browserName = function browserName() {
              var browser = (0, _util.getBrowser)();
              return browser[0].toUpperCase() + browser.slice(1);
            };

            installTrack = function installTrack(installSource) {
              var data = { gProduct: 'Extension-' + (0, _util.getBrowser)(), installSource: installSource };
              (0, _tracking.call)('felog.info', 'extension_install', { installSource: installSource });
              (0, _tracking.call)('mixpanel.setProps', (0, _defineProperty3.default)({}, 'date' + browserName() + 'ExtensionInstalled', Date.now()));
              (0, _tracking.call)('gnar.send', (0, _util.getBrowser)() + 'Ext/installed', { installSource: installSource });
              (0, _tracking.call)('mixpanel.track', 'G:Grammarly_Product_First_Used', data);
              (0, _tracking.call)('mixpanel.track', 'G:Grammarly_Product_Installed', data);
            };

            (0, _chrome.loadContentScripts)();
            source = 'unknown';
            _context5.prev = 4;
            _context5.next = 7;
            return getSource();

          case 7:
            source = _context5.sent;
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5['catch'](4);

            (0, _tracking.call)('felog.error', 'cannot_get_install_source', { error: _context5.t0 });

          case 13:

            installTrack(source);

            if (!"true") {
              _context5.next = 17;
              break;
            }

            _context5.next = 17;
            return openWelcome(source === 'funnel');

          case 17:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[4, 10]]);
  }));
  return function install() {
    return ref.apply(this, arguments);
  };
}();

var overwriteUlrs = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
    var _this = this;

    var _ret;

    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            return _context7.delegateYield(_regenerator2.default.mark(function _callee6() {
              var allPrefs, newUrls, keyToUrl, newHosts;
              return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return _prefs2.default.all();

                    case 2:
                      allPrefs = _context6.sent;
                      newUrls = (0, _keys2.default)(allPrefs).filter(function (key) {
                        return key.indexOf('URLS.') == 0;
                      });

                      if (newUrls.length) {
                        _context6.next = 6;
                        break;
                      }

                      return _context6.abrupt('return', {
                        v: void 0
                      });

                    case 6:
                      keyToUrl = function keyToUrl(key) {
                        return key.substring(5);
                      }; //clean url from URLS. part

                      newHosts = newUrls.reduce(function (result, key) {
                        return (0, _assign2.default)(result, (0, _defineProperty3.default)({}, keyToUrl(key), allPrefs[key]));
                      }, {});

                      (0, _config.updateUrls)(newHosts);
                      console.warn('Overwrite URLS to:', newHosts);

                    case 10:
                    case 'end':
                      return _context6.stop();
                  }
                }
              }, _callee6, _this);
            })(), 't0', 2);

          case 2:
            _ret = _context7.t0;

            if (!((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object")) {
              _context7.next = 5;
              break;
            }

            return _context7.abrupt('return', _ret.v);

          case 5:
            _context7.next = 10;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t1 = _context7['catch'](0);

            console.warn('error while overwriting urls', _context7.t1);

          case 10:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this, [[0, 7]]);
  }));
  return function overwriteUlrs() {
    return ref.apply(this, arguments);
  };
}();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _forge = typeof window !== "undefined" ? window['forge'] : typeof global !== "undefined" ? global['forge'] : null;

var _forge2 = _interopRequireDefault(_forge);

var _socket = require('../socket');

var _socket2 = _interopRequireDefault(_socket);

var _location = require('../location');

var _util = require('../util');

var _tracking = require('../tracking');

var _config = require('../config');

require('./isbg');

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _notification = require('./notification');

var notification = _interopRequireWildcard(_notification);

var _prefs = require('./prefs');

var _prefs2 = _interopRequireDefault(_prefs);

var _store = require('./store');

var _chrome = require('./chrome');

var _timers = require('lib/timers');

var _timers2 = _interopRequireDefault(_timers);

var _profiler = require('lib/profiler');

var _profiler2 = _interopRequireDefault(_profiler);

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

var BG_START_TIMER = 'bg_start_timer';
var profiler = new _profiler2.default();

_timers2.default.start(BG_START_TIMER);
start().catch(function (error) {
  (0, _tracking.call)('felog.error', 'bg_page_start_fail', { error: error });
  // call('felog.exception', e, 'bg_page_start_fail')//better, but don't work for now
  console.error('bg page start fail', error);
});

(0, _chrome.setupForcedUpdate)();

if (!"true") {
  (0, _util.isChrome)() && require('./chromereload');
}

function trackBgStartTime() {
  var time = _timers2.default.stop(BG_START_TIMER);
  if (time > 30 * 1000) {
    // 30s
    (0, _tracking.call)('felog.warn', 'too_long_bg_start_2', (0, _extends3.default)({ active_time: time }, profiler.timings));
    (0, _tracking.call)('statsc.ui.timing', 'stability:too_long_bg_start', time);
  }
}

function openWelcome(funnel) {
  if ((0, _util.isChrome)() && funnel) return;
  var url = (0, _util.isChrome)() ? _config.URLS.welcomeC : _config.URLS.authCreatePage + '/?extension_install=true';

  return new _promise2.default(function (resolve) {
    return funnel ? _forge2.default.tabs.updateCurrent(url, resolve) : _forge2.default.tabs.open(url, false, resolve);
  });
}

function trackLocalStorageAvailability() {
  var _checkLocalStorage = (0, _util.checkLocalStorage)();

  var enabled = _checkLocalStorage.enabled;
  var message = _checkLocalStorage.message;

  if (!enabled) {
    (0, _tracking.call)('felog.warn', 'local_storage_rw_failure', {
      errorMessage: message
    });
  }
}

}).call(this,typeof window !== "undefined" ? window : {})
},{"../config":155,"../location":158,"../socket":172,"../tracking":177,"../util":181,"./api":118,"./chrome":120,"./chromereload":121,"./isbg":150,"./notification":151,"./prefs":153,"./store":154,"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/object/keys":10,"babel-runtime/core-js/promise":13,"babel-runtime/helpers/asyncToGenerator":16,"babel-runtime/helpers/defineProperty":19,"babel-runtime/helpers/extends":20,"babel-runtime/helpers/typeof":26,"babel-runtime/regenerator":111,"lib/profiler":168,"lib/timers":173,"lodash":"lodash"}],120:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadProxy = exports.filteredTabs = exports.loadContentScripts = exports.getSelectedTabFavicon = exports.setupForcedUpdate = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var loadContentScripts = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(domain) {
    var manifest, source, tabs, errorHandle;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if ((0, _util.isChrome)()) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return');

          case 2:
            manifest = chrome.runtime.getManifest();

            if (manifest) {
              _context.next = 5;
              break;
            }

            return _context.abrupt('return');

          case 5:
            source = manifest.content_scripts.pop();
            _context.next = 8;
            return filteredTabs(true, domain);

          case 8:
            tabs = _context.sent;

            if (tabs.length) {
              _context.next = 11;
              break;
            }

            return _context.abrupt('return');

          case 11:

            console.info('Load content scripts to', tabs);

            errorHandle = function errorHandle(error, type) {
              (0, _tracking.call)('felog.error', 'chrome_cs_' + type + '_load_error', { error: error });
              console.error('cs ' + type + ' loaded with error: ' + error.message);
            };

            console.time('Content scripts load time');

            _context.next = 16;
            return _promise2.default.all(tabs.map(function (_ref) {
              var id = _ref.id;
              return _promise2.default.all([source.js.reduce(function (loader, js) {
                return loader.then(function () {
                  return execJS(id, js, { runAt: 'document_idle' });
                });
              }, _promise2.default.resolve()).then(function () {
                return console.info('scripts loaded');
              }).catch(function (e) {
                return errorHandle(e, 'js');
              }), source.css.reduce(function (loader, css) {
                return loader.then(function () {
                  return execCSS(id, css, { runAt: 'document_idle' });
                });
              }, _promise2.default.resolve()).then(function () {
                return console.info('css loaded');
              }).catch(function (e) {
                return errorHandle(e, 'css');
              })]);
            }));

          case 16:

            console.timeEnd('Content scripts load time');

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return function loadContentScripts(_x3) {
    return ref.apply(this, arguments);
  };
}();

var loadProxy = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var tabs, message;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if ((0, _util.isChrome)()) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt('return');

          case 2:
            _context2.prev = 2;
            _context2.next = 5;
            return filteredTabs();

          case 5:
            tabs = _context2.sent;
            _context2.next = 8;
            return _promise2.default.all(tabs.map(function (_ref2) {
              var id = _ref2.id;
              return execJS(id, 'src/js/proxy.js');
            }));

          case 8:
            console.info('proxy loaded on', tabs.map(function (tab) {
              return tab.url;
            }));
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2['catch'](2);
            message = _context2.t0 && _context2.t0.message || _context2.t0;
            //call('felog.error', 'chrome_proxy_load_error', {message})

            console.error('proxy loaded with error: ', message);

          case 15:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[2, 11]]);
  }));
  return function loadProxy() {
    return ref.apply(this, arguments);
  };
}();

var isNotCSLoaded = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(tab) {
    var isLoaded;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return new _promise2.default(function (resolve) {
              return chrome.tabs.executeScript(tab.id, {
                code: 'document.body.dataset.grCSLoaded'
              }, function (res) {
                return resolve(res && res.pop());
              });
            });

          case 2:
            isLoaded = _context3.sent;
            return _context3.abrupt('return', !isLoaded && tab);

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return function isNotCSLoaded(_x4) {
    return ref.apply(this, arguments);
  };
}();

var filteredTabs = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(onlyOneInstance, domain) {
    var tabs, current, processedTabs;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return new _promise2.default(_forge2.default.tabs.allTabs);

          case 2:
            tabs = _context4.sent;
            _context4.next = 5;
            return new _promise2.default(_forge2.default.tabs.getCurrentTabUrl);

          case 5:
            current = _context4.sent;
            _context4.next = 8;
            return _promise2.default.all(tabs.filter(domain ? function (_ref4) {
              var url = _ref4.url;
              return url.includes(domain);
            } : checkTabDomain).map(onlyOneInstance ? isNotCSLoaded : function (tab) {
              return _promise2.default.resolve(tab);
            }));

          case 8:
            processedTabs = _context4.sent;
            return _context4.abrupt('return', processedTabs.filter(Boolean).sort(function (_ref5) {
              var url = _ref5.url;
              return url == current ? -1 : 1;
            }));

          case 10:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return function filteredTabs(_x5, _x6) {
    return ref.apply(this, arguments);
  };
}();

var _forge = require('lib/forge');

var _forge2 = _interopRequireDefault(_forge);

var _tracking = require('../tracking');

var _pageConfig = require('../page-config');

var _pageConfig2 = _interopRequireDefault(_pageConfig);

var _location = require('../location');

var _config = require('../config');

var _util = require('../util');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var chrome = window.chrome,
    updateStarted = false;

function setupForcedUpdate() {
  if (!(0, _util.isChrome)() || updateStarted) return;

  chrome.runtime.onUpdateAvailable.addListener(function (details) {
    console.info('Detected the next extension version', details.version);
    (0, _tracking.call)('felog.info', 'chrome_forced_to_update');
    updateStarted = true;

    var willUpdateInMinutes = (0, _util.getRandomIntInclusive)(1, (0, _config.getUpdateTime)());
    console.info('Going to update in minutes:', willUpdateInMinutes);
    setTimeout(chrome.runtime.reload, willUpdateInMinutes * 60 * 1000);
  });
  requestUpdateCheck();
}

function requestUpdateCheck() {
  chrome.runtime.requestUpdateCheck(function (status) {
    if (status == 'update_available') return console.info('update pending...');
    if (status == 'no_update') return console.info('no update found');
    if (status == 'throttled') return console.info('Oops, I\'m asking too frequently - I need to back off.');
  });

  setTimeout(requestUpdateCheck, 2 * 60 * 60 * 1000); // 120m
}

function getSelectedTabFavicon(cb) {
  chrome.tabs.getSelected(function (tab) {
    cb(tab && tab.favIconUrl);
  });
}

function execJS(id, file) {
  var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return new _promise2.default(function (resolve, reject) {
    return chrome.tabs.executeScript(id, (0, _extends3.default)({ file: file }, opts), function () {
      return (0, _util.chromeBgError)() ? reject((0, _util.chromeBgError)()) : resolve();
    });
  });
}

function execCSS(id, file) {
  var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return new _promise2.default(function (resolve, reject) {
    return chrome.tabs.insertCSS(id, (0, _extends3.default)({ file: file }, opts), function () {
      return (0, _util.chromeBgError)() ? reject((0, _util.chromeBgError)()) : resolve();
    });
  });
}

function checkTabDomain(_ref3) {
  var url = _ref3.url;

  if (url.indexOf('http') != 0) return;
  if (url.includes('grammarly')) return true;
  return _pageConfig2.default.get((0, _location.domainFromUrl)(url)).enabled;
}

//focused tab will be first
exports.setupForcedUpdate = setupForcedUpdate;
exports.getSelectedTabFavicon = getSelectedTabFavicon;
exports.loadContentScripts = loadContentScripts;
exports.filteredTabs = filteredTabs;
exports.loadProxy = loadProxy;

},{"../config":155,"../location":158,"../page-config":164,"../tracking":177,"../util":181,"babel-runtime/core-js/promise":13,"babel-runtime/helpers/asyncToGenerator":16,"babel-runtime/helpers/extends":20,"babel-runtime/regenerator":111,"lib/forge":157}],121:[function(require,module,exports){
'use strict';

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _websocket = require('websocket');

var _websocket2 = _interopRequireDefault(_websocket);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var LIVERELOAD_HOST = 'localhost:';
var LIVERELOAD_PORT = 35729;
var url = 'ws://' + LIVERELOAD_HOST + LIVERELOAD_PORT + '/livereload';

var connection = (0, _websocket2.default)({ url: url });
var _window = window;
var chrome = _window.chrome;

connection.on('message', function (e) {
  return e.command && e.command == 'reload' && chrome.runtime.reload();
});

connection.on('connect', function () {
  console.warn('livereload tunnel enstablished, send reload to active tab');

  chrome.tabs.query({ active: true }, function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 1);

    var _ref2$ = _ref2[0];
    var url = _ref2$.url;
    var id = _ref2$.id;
    return url.indexOf('http') == 0 && chrome.tabs.reload(id);
  });
});

connection.connect();

},{"babel-runtime/helpers/slicedToArray":24,"websocket":"websocket"}],122:[function(require,module,exports){
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

},{"babel-runtime/core-js/promise":13,"lib/config":155,"lib/forge":157,"lib/util":181}],123:[function(require,module,exports){
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

},{"./connection/actions":124,"./settings/actions":131,"./user/actions":144,"babel-runtime/core-js/object/assign":6}],124:[function(require,module,exports){
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

},{}],125:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIncognito = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _util = require('lib/util');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var isIncognito = exports.isIncognito = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', (0, _util.isChrome)() && new _promise2.default(function (res) {
              return chrome.extension.isAllowedIncognitoAccess(res);
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));
  return function isIncognito() {
    return ref.apply(this, arguments);
  };
}();

},{"babel-runtime/core-js/promise":13,"babel-runtime/helpers/asyncToGenerator":16,"babel-runtime/regenerator":111,"lib/util":181}],126:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _sagas = require('./sagas');

var _selectors = require('./selectors');

var _actions = require('./actions');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  reducer: _reducer2.default,
  types: _actions.t,
  sagas: { start: _sagas.start, monitorCookiesDisable: _sagas.monitorCookiesDisable, monitorIsIncognito: _sagas.monitorIsIncognito },
  selectors: { current: _selectors.current },
  actions: { updateConnection: _actions.updateConnection, onlineConnection: _actions.onlineConnection }
};
module.exports = exports['default'];

},{"./actions":124,"./reducer":127,"./sagas":128,"./selectors":129}],127:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultConnection = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = connectionReducer;

var _actions = require('./actions');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var defaultConnection = exports.defaultConnection = {
  networkOffline: !window.navigator.onLine,
  cookiesDisabled: navigator.cookieEnabled == false,
  online: true
};

function connectionReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? defaultConnection : arguments[0];
  var _ref = arguments[1];
  var type = _ref.type;
  var data = _ref.data;
  var online = _ref.online;

  switch (type) {
    case _actions.t.ONLINE_STATE:
      return (0, _extends3.default)({}, state, { online: online });
    case _actions.t.UPDATE_CONNECTION:
      return (0, _extends3.default)({}, state, data);
    default:
      return state;
  }
}

},{"./actions":124,"babel-runtime/helpers/extends":20}],128:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.start = start;
exports.checkOnline = checkOnline;
exports.callDaily = callDaily;
exports.monitorIsIncognito = monitorIsIncognito;
exports.monitorCookiesDisable = monitorCookiesDisable;

var _lodash = require('lodash');

var _reduxSaga = require('redux-saga');

var _effects = require('redux-saga/effects');

var _prefs = require('lib/bg/prefs');

var _prefs2 = _interopRequireDefault(_prefs);

var _message = require('lib/message');

var _message2 = _interopRequireDefault(_message);

var _tracking = require('lib/tracking');

var _tracking2 = _interopRequireDefault(_tracking);

var _util = require('lib/util');

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _helpers = require('./helpers');

var _selectors = require('./selectors');

var selectors = _interopRequireWildcard(_selectors);

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

var _marked = [start, checkOnline, callDaily, monitorIsIncognito, monitorCookiesDisable].map(_regenerator2.default.mark);

function start() {
  return _regenerator2.default.wrap(function start$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.delegateYield((0, _reduxSaga.takeLatest)(actions.t.UPDATE_CONNECTION, checkOnline), 't0', 1);

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function checkOnline() {
  var currentConnection, currentOnline, connectionErrors, newOnline;
  return _regenerator2.default.wrap(function checkOnline$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _effects.select)(selectors.current);

        case 3:
          currentConnection = _context2.sent;
          currentOnline = currentConnection.online;
          connectionErrors = (0, _lodash.omit)(currentConnection, 'online', 'authDegradation', 'cookiesDisabled');

          if (!currentConnection.cookiesDisabled) {
            _context2.next = 9;
            break;
          }

          _context2.next = 9;
          return (0, _effects.fork)(monitorCookiesDisable);

        case 9:

          //we online when we haven't true flags in connection state
          newOnline = (0, _values2.default)(connectionErrors).every(function (on) {
            return !on;
          });

          if (!(currentOnline == newOnline)) {
            _context2.next = 12;
            break;
          }

          return _context2.abrupt('return');

        case 12:
          _context2.next = 14;
          return (0, _effects.put)(actions.onlineConnection(newOnline));

        case 14:
          if (!newOnline) {
            _context2.next = 18;
            break;
          }

          console.log('ONLINE SERVICE| reseting capi connections after offline');
          _context2.next = 18;
          return (0, _effects.call)(_message2.default.emitTabs, 'reset');

        case 18:
          _context2.next = 26;
          break;

        case 20:
          _context2.prev = 20;
          _context2.t0 = _context2['catch'](0);

          if (!(0, _reduxSaga.isCancelError)(_context2.t0)) {
            _context2.next = 24;
            break;
          }

          return _context2.abrupt('return');

        case 24:
          _context2.next = 26;
          return (0, _effects.call)(_tracking2.default.call, 'felog.warn', 'check_online_exception', { error: _context2.t0.message });

        case 26:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[0, 20]]);
}

function callDaily(fn, type, name) {
  var pingDate, nextDate;
  return _regenerator2.default.wrap(function callDaily$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.call)(_prefs2.default.get, name);

        case 2:
          pingDate = _context3.sent;

          if (!(!pingDate || pingDate < Date.now())) {
            _context3.next = 11;
            break;
          }

          _context3.next = 6;
          return (0, _effects.call)(fn, type, name);

        case 6:
          _context3.next = 8;
          return (0, _effects.call)(_util.getNextPingDate);

        case 8:
          nextDate = _context3.sent;
          _context3.next = 11;
          return (0, _effects.call)(_prefs2.default.set, name, nextDate);

        case 11:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}

function monitorIsIncognito() {
  var incognitoAllowed;
  return _regenerator2.default.wrap(function monitorIsIncognito$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.call)(_helpers.isIncognito);

        case 2:
          incognitoAllowed = _context4.sent;

          if (!incognitoAllowed) {
            _context4.next = 6;
            break;
          }

          _context4.next = 6;
          return (0, _effects.call)(callDaily, _tracking2.default.call, 'felog.warn', 'daily_incognito_enabled');

        case 6:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this);
}

function monitorCookiesDisable() {
  return _regenerator2.default.wrap(function monitorCookiesDisable$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.call)(callDaily, _tracking2.default.call, 'felog.warn', 'daily_cookies_disabled');

        case 2:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this);
}

},{"./actions":124,"./helpers":125,"./selectors":129,"babel-runtime/core-js/object/values":12,"babel-runtime/regenerator":111,"lib/bg/prefs":153,"lib/message":159,"lib/tracking":177,"lib/util":181,"lodash":"lodash","redux-saga":"redux-saga","redux-saga/effects":114}],129:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var current = exports.current = function current(state) {
  return state.connection;
};

},{}],130:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.sendStateToTabs = exports.startup = exports.auth = exports.servicesMiddleware = exports.pureActions = undefined;

var _redux = require('redux');

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _config = require('lib/config');

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _tabs = require('./tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _settings = require('./settings');

var _settings2 = _interopRequireDefault(_settings);

var _connection = require('./connection');

var _connection2 = _interopRequireDefault(_connection);

var _startup = require('./startup');

var _startup2 = _interopRequireDefault(_startup);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.pureActions = _actions2.default;
var servicesMiddleware = exports.servicesMiddleware = (0, _reduxSaga2.default)(_user2.default.sagas.start, _settings2.default.sagas.start, _connection2.default.sagas.start);

var auth = exports.auth = { //external api for integration to old infrastructure
  refreshUser: function refreshUser() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return servicesMiddleware.run.apply(servicesMiddleware, [_user2.default.sagas.externalUpdateUser].concat(args)).done;
  },
  signin: function signin(data) {
    return servicesMiddleware.run(_user2.default.sagas.authRequest, _config.URLS.authSignin, data, 'app_signin_success').done;
  },
  signup: function signup(data) {
    return servicesMiddleware.run(_user2.default.sagas.authRequest, _config.URLS.authSignup, data, 'app_signup_success').done;
  }
};

var startup = exports.startup = function startup() {
  return servicesMiddleware.run(_startup2.default).done;
};
var sendStateToTabs = exports.sendStateToTabs = function sendStateToTabs() {
  return servicesMiddleware.run(_tabs2.default.sagas.sendStateToTabs);
};

var reducer = exports.reducer = (0, _redux.combineReducers)({
  user: _user2.default.reducer,
  tabs: _tabs2.default.reducer,
  settings: _settings2.default.reducer,
  connection: _connection2.default.reducer
});

},{"./actions":123,"./connection":126,"./settings":133,"./startup":137,"./tabs":140,"./user":146,"lib/config":155,"redux":"redux","redux-saga":"redux-saga"}],131:[function(require,module,exports){
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

},{}],132:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dapiPropsMap = exports.oldSettingsFields = undefined;

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.setDapiProp = setDapiProp;
exports.getDapiProp = getDapiProp;
exports.migrateSettings = migrateSettings;

var _request = require('lib/request');

var _config = require('lib/config');

var _actions = require('./actions');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var oldSettingsFields = exports.oldSettingsFields = ['enabled_db', 'enabledDefs', 'disabledFields', 'seenNewsVersion', 'referralNewsBadge'];

var dapiPropsMap = exports.dapiPropsMap = (0, _defineProperty3.default)({}, _actions.t.CHANGE_WEAK_DIALECT, 'dialectWeak');

function setDapiProp(type, value) {
  var url = _config.URLS.dapiProps + '/' + type + '/' + value;
  return (0, _request.fetch)(url, { method: 'put', isText: true });
}

function getDapiProp(type) {
  var url = _config.URLS.dapiProps + '/' + type;
  return (0, _request.fetch)(url);
}

// {"127.0.0.1:/html/body/div":true}
// "{\"lastChange\":{\"value\":false,\"domain\":\"medium.com\"},\"medium.com\":{\"enabled\":false}}"
/*eslint-disable camelcase*/
function migrateSettings(_ref) {
  var enabled_db = _ref.enabled_db;
  var enabledDefs = _ref.enabledDefs;
  var disabledFields = _ref.disabledFields;
  var seenNewsVersion = _ref.seenNewsVersion;
  var referralNewsBadge = _ref.referralNewsBadge;

  var oldDb = {};

  try {
    var oldDbParsed = JSON.parse(enabled_db);
    /*eslint-enable camelcase*/
    delete oldDbParsed.lastChange;
    if (oldDbParsed) {
      oldDb = oldDbParsed;
    }
  } catch (e) {
    console.warn('error in parse enabled_db', e);
  }

  oldDb.common = {
    enabledDefs: Boolean(enabledDefs),
    referralNewsBadge: Boolean(referralNewsBadge),
    seenNewsVersion: seenNewsVersion || _config.newsId
  };

  if (!disabledFields) return oldDb;
  var fields = (0, _keys2.default)(disabledFields);
  if (!fields.length) return oldDb;

  var extensionSettings = fields.filter(function (parts) {
    return disabledFields[parts];
  }).reduce(function (result, parts) {
    var sepPos = parts.indexOf(':'),
        domain = parts.substr(0, sepPos),
        field = parts.substr(sepPos + 1);

    var domainData = result[domain] || { enabled: true };
    domainData.disabledFields = (0, _extends4.default)({}, domainData.disabledFields || {}, (0, _defineProperty3.default)({}, field, true));
    result[domain] = domainData;

    return result;
  }, oldDb);

  return extensionSettings;
}

},{"./actions":131,"babel-runtime/core-js/object/keys":10,"babel-runtime/helpers/defineProperty":19,"babel-runtime/helpers/extends":20,"lib/config":155,"lib/request":169}],133:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _sagas = require('./sagas');

var _selectors = require('./selectors');

var _actions = require('./actions');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  reducer: _reducer2.default,
  types: _actions.t,
  sagas: { start: _sagas.start, setInitialSettings: _sagas.setInitialSettings, initializeWeakDialect: _sagas.initializeWeakDialect },
  selectors: { current: _selectors.current, getDapiProp: _selectors.getDapiProp },
  actions: {
    initialSettings: _actions.initialSettings, toggleDefs: _actions.toggleDefs, toggleSite: _actions.toggleSite, toggleField: _actions.toggleField,
    seenNews: _actions.seenNews, seenReferrals: _actions.seenReferrals, clickReferrals: _actions.clickReferrals, changeWeakDialect: _actions.changeWeakDialect, showNews: _actions.showNews
  }
};
module.exports = exports['default'];

},{"./actions":131,"./reducer":134,"./sagas":135,"./selectors":136}],134:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

exports.default = settingsReducer;

var _config = require('lib/config');

var _actions = require('./actions');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function settingsReducer() {
  var settings = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var _ref = arguments[1];
  var type = _ref.type;
  var _ref$data = _ref.data;
  var data = _ref$data === undefined ? {} : _ref$data;
  var domain = _ref.domain;
  var enabledDefs = _ref.enabledDefs;
  var enabled = _ref.enabled;
  var showNews = _ref.showNews;

  var domainSetting = settings[domain] || {};

  switch (type) {
    case _actions.t.SETTINGS_INITIAL:
      return (0, _extends5.default)({}, settings, data);
    case _actions.t.TOGGLE_DEFS:
      return (0, _extends5.default)({}, settings, {
        common: (0, _extends5.default)({}, settings.common, { enabledDefs: enabledDefs })
      });
    case _actions.t.TOGGLE_SITE:
      return (0, _extends5.default)({}, settings, (0, _defineProperty3.default)({}, domain, (0, _extends5.default)({}, domainSetting, { enabled: enabled })));
    case _actions.t.TOGGLE_FIELD:
      return (0, _extends5.default)({}, settings, (0, _defineProperty3.default)({}, domain, (0, _extends5.default)({}, settings[domain], {
        disabledFields: (0, _extends5.default)({}, domainSetting.disabledFields, data)
      })));
    case _actions.t.SHOW_NEWS:
      return (0, _extends5.default)({}, settings, {
        common: (0, _extends5.default)({}, settings.common, { showNews: showNews })
      });
    case _actions.t.SEEN_NEWS:
      return (0, _extends5.default)({}, settings, {
        common: (0, _extends5.default)({}, settings.common, { seenNewsVersion: _config.newsId })
      });
    case _actions.t.SEEN_REFERRALS:
      return (0, _extends5.default)({}, settings, {
        common: (0, _extends5.default)({}, settings.common, { referralNewsBadge: true })
      });
    case _actions.t.CLICK_REFERRALS:
      return (0, _extends5.default)({}, settings, {
        common: (0, _extends5.default)({}, settings.common, { referralWasClicked: true })
      });
    case _actions.t.SET_WEAK_DIALECT:
      return (0, _extends5.default)({}, settings, {
        common: (0, _extends5.default)({}, settings.common, { dialectWeak: data })
      });
    default:
      return settings;
  }
}
module.exports = exports['default'];

},{"./actions":131,"babel-runtime/helpers/defineProperty":19,"babel-runtime/helpers/extends":20,"lib/config":155}],135:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.start = start;
exports.initializeWeakDialect = initializeWeakDialect;
exports.saveToDapi = saveToDapi;
exports.getFromDapi = getFromDapi;
exports.setInitialSettings = setInitialSettings;
exports.cacheSettings = cacheSettings;
exports.getDapiPropsPrefsKey = getDapiPropsPrefsKey;
exports.setShowNews = setShowNews;
exports.getSettings = getSettings;

var _reduxSaga = require('redux-saga');

var _effects = require('redux-saga/effects');

var _prefs = require('lib/bg/prefs');

var _prefs2 = _interopRequireDefault(_prefs);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _helpers = require('./helpers');

var _selectors = require('./selectors');

var selectors = _interopRequireWildcard(_selectors);

var _config = require('lib/config');

var _tracking = require('lib/tracking');

var _tracking2 = _interopRequireDefault(_tracking);

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

var _marked = [start, initializeWeakDialect, saveToDapi, getFromDapi, setInitialSettings, cacheSettings, getDapiPropsPrefsKey, setShowNews, getSettings].map(_regenerator2.default.mark);

function start() {
  return _regenerator2.default.wrap(function start$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return [(0, _reduxSaga.takeEvery)(actions.DAPI_ACTIONS, saveToDapi), (0, _reduxSaga.takeEvery)(actions.CACHED_ACTIONS, cacheSettings)];

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function initializeWeakDialect() {
  var propName, dapiPropsKey, dapiPropsCached, data;
  return _regenerator2.default.wrap(function initializeWeakDialect$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          propName = _helpers.dapiPropsMap[actions.t.CHANGE_WEAK_DIALECT];
          _context2.next = 3;
          return (0, _effects.call)(getDapiPropsPrefsKey);

        case 3:
          dapiPropsKey = _context2.sent;
          _context2.next = 6;
          return (0, _effects.call)(_prefs2.default.get, dapiPropsKey);

        case 6:
          dapiPropsCached = _context2.sent;

          if (!(dapiPropsCached && dapiPropsCached[propName])) {
            _context2.next = 12;
            break;
          }

          _context2.next = 10;
          return (0, _effects.put)(actions.setWeakDialect(dapiPropsCached[propName]));

        case 10:
          _context2.next = 22;
          break;

        case 12:
          _context2.next = 14;
          return (0, _effects.call)(_tracking2.default.call, 'felog.info', 'initialize_weak_dialect_from_dapi');

        case 14:
          _context2.next = 16;
          return (0, _effects.call)(getFromDapi, propName);

        case 16:
          data = _context2.sent;

          if (!(data && data[propName])) {
            _context2.next = 22;
            break;
          }

          _context2.next = 20;
          return (0, _effects.put)(actions.setWeakDialect(data[propName]));

        case 20:
          _context2.next = 22;
          return (0, _effects.call)(_prefs2.default.set, (0, _defineProperty3.default)({}, dapiPropsKey, (0, _defineProperty3.default)({}, propName, data[propName])));

        case 22:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

function saveToDapi(_ref) {
  var type = _ref.type;
  var data = _ref.data;
  var currentProp, propName, dapiPropsKey;
  return _regenerator2.default.wrap(function saveToDapi$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.select)(selectors.getDapiProp, type);

        case 2:
          currentProp = _context3.sent;

          if (!(currentProp == data)) {
            _context3.next = 5;
            break;
          }

          return _context3.abrupt('return');

        case 5:
          propName = _helpers.dapiPropsMap[type];
          _context3.next = 8;
          return (0, _effects.call)(getDapiPropsPrefsKey);

        case 8:
          dapiPropsKey = _context3.sent;
          _context3.prev = 9;
          _context3.next = 12;
          return (0, _effects.call)(_helpers.setDapiProp, propName, data);

        case 12:
          _context3.next = 14;
          return (0, _effects.call)(_prefs2.default.set, (0, _defineProperty3.default)({}, dapiPropsKey, (0, _defineProperty3.default)({}, propName, data)));

        case 14:
          _context3.next = 16;
          return (0, _effects.put)(actions.setWeakDialect(data));

        case 16:
          _context3.next = 18;
          return (0, _effects.call)(_tracking2.default.fire, 'set-weak-dialect', data);

        case 18:
          _context3.next = 25;
          break;

        case 20:
          _context3.prev = 20;
          _context3.t0 = _context3['catch'](9);

          console.log('Error by setting to dapi', _context3.t0);
          _context3.next = 25;
          return (0, _effects.call)(_tracking2.default.fire, 'set-dapi-prop-error', type, _context3.t0);

        case 25:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this, [[9, 20]]);
}

function getFromDapi(type) {
  return _regenerator2.default.wrap(function getFromDapi$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _effects.call)(_helpers.getDapiProp, type);

        case 3:
          return _context4.abrupt('return', _context4.sent);

        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4['catch'](0);

          console.log('Error by getting props from dapi', _context4.t0);
          _context4.next = 11;
          return (0, _effects.call)(_tracking2.default.fire, 'get-dapi-prop-error', type, _context4.t0);

        case 11:
          return _context4.abrupt('return', {});

        case 12:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this, [[0, 6]]);
}

function setInitialSettings() {
  var data;
  return _regenerator2.default.wrap(function setInitialSettings$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.call)(getSettings);

        case 2:
          data = _context5.sent;
          _context5.next = 5;
          return (0, _effects.put)(actions.initialSettings(data));

        case 5:
          _context5.next = 7;
          return (0, _effects.call)(setShowNews);

        case 7:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this);
}

function cacheSettings() {
  var extensionSettings;
  return _regenerator2.default.wrap(function cacheSettings$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.select)(selectors.current);

        case 2:
          extensionSettings = _context6.sent;
          _context6.next = 5;
          return (0, _effects.call)(_prefs2.default.set, { extensionSettings: extensionSettings });

        case 5:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked[5], this);
}

function getDapiPropsPrefsKey() {
  var userId;
  return _regenerator2.default.wrap(function getDapiPropsPrefsKey$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.select)(selectors.getUserId);

        case 2:
          userId = _context7.sent;
          return _context7.abrupt('return', 'dapiProps_' + userId);

        case 4:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked[6], this);
}

function setShowNews() {
  var _ref2, common, showNews;

  return _regenerator2.default.wrap(function setShowNews$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _effects.select)(selectors.current);

        case 2:
          _ref2 = _context8.sent;
          common = _ref2.common;
          showNews = _config.newsId && _config.newsId !== common.seenNewsVersion;
          _context8.next = 7;
          return (0, _effects.put)(actions.showNews(showNews));

        case 7:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked[7], this);
}

function getSettings() {
  var settings, old, extensionSettings;
  return _regenerator2.default.wrap(function getSettings$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _effects.call)(_prefs2.default.get, 'extensionSettings');

        case 2:
          settings = _context9.sent;

          if (!settings) {
            _context9.next = 5;
            break;
          }

          return _context9.abrupt('return', settings);

        case 5:
          _context9.next = 7;
          return (0, _effects.call)(_prefs2.default.get, _helpers.oldSettingsFields);

        case 7:
          old = _context9.sent;
          _context9.next = 10;
          return (0, _effects.call)(_helpers.migrateSettings, old);

        case 10:
          extensionSettings = _context9.sent;
          _context9.next = 13;
          return (0, _effects.call)(_prefs2.default.set, { extensionSettings: extensionSettings });

        case 13:
          return _context9.abrupt('return', extensionSettings);

        case 14:
        case 'end':
          return _context9.stop();
      }
    }
  }, _marked[8], this);
}

},{"./actions":131,"./helpers":132,"./selectors":136,"babel-runtime/helpers/defineProperty":19,"babel-runtime/regenerator":111,"lib/bg/prefs":153,"lib/config":155,"lib/tracking":177,"redux-saga":"redux-saga","redux-saga/effects":114}],136:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var current = exports.current = function current(state) {
  return state.settings;
};
var getUserId = exports.getUserId = function getUserId(state) {
  return state.user.id;
};
var getDapiProp = exports.getDapiProp = function getDapiProp(state, type) {
  return state.settings.common[type];
};

},{}],137:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = startupFlow;

var _effects = require('redux-saga/effects');

var _pageConfig = require('lib/page-config');

var _pageConfig2 = _interopRequireDefault(_pageConfig);

var _connection = require('./connection');

var _connection2 = _interopRequireDefault(_connection);

var _settings = require('./settings');

var _settings2 = _interopRequireDefault(_settings);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _tabs = require('./tabs');

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _marked = [startupFlow].map(_regenerator2.default.mark);

function startupFlow() {
  return _regenerator2.default.wrap(function startupFlow$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return [(0, _effects.call)(_settings2.default.sagas.setInitialSettings), (0, _effects.call)([_pageConfig2.default, _pageConfig2.default.init]), (0, _effects.call)(_user2.default.sagas.updateUser, { failoverFromCache: true })];

        case 2:
          _context.next = 4;
          return (0, _effects.fork)(_connection2.default.sagas.monitorIsIncognito);

        case 4:
          _context.next = 6;
          return (0, _effects.call)(_tabs2.default.sagas.start);

        case 6:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
module.exports = exports['default'];

},{"./connection":126,"./settings":133,"./tabs":140,"./user":146,"babel-runtime/regenerator":111,"lib/page-config":164,"redux-saga/effects":114}],138:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setActiveTab = setActiveTab;
var t = exports.t = {
  SET_ACTIVE_TAB: 'tabs/SET_ACTIVE_TAB'
};

function setActiveTab(data) {
  return {
    type: t.SET_ACTIVE_TAB,
    data: data
  };
}

},{}],139:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_BADGE_COLOR = exports.invalidatePageConfig = undefined;
exports.createNewTabsChannel = createNewTabsChannel;
exports.createActiveTabsChannel = createActiveTabsChannel;
exports.setBadgeIcon = setBadgeIcon;
exports.setBadgeText = setBadgeText;
exports.getBadgeText = getBadgeText;
exports.setUninstallURL = setUninstallURL;

var _forge = require('lib/forge');

var _forge2 = _interopRequireDefault(_forge);

var _config = require('lib/config');

var _message = require('lib/message');

var _message2 = _interopRequireDefault(_message);

var _pageConfig = require('lib/page-config');

var _pageConfig2 = _interopRequireDefault(_pageConfig);

var _util = require('lib/util');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function createNewTabsChannel() {
  var channel = (0, _util.createChannel)();
  _message2.default.on('tab-connected', function (_ref) {
    var tab = _ref.tab;
    var url = _ref.url;
    return channel.put({ tab: tab, url: url });
  });
  return channel;
}

function createActiveTabsChannel() {
  var channel = (0, _util.createChannel)({ buffered: false });
  _forge2.default.tabs.onActiveTabChange(function (_ref2) {
    var url = _ref2.url;
    var favIconUrl = _ref2.favIconUrl;
    var windowId = _ref2.windowId;
    return channel.put({ url: url, favIconUrl: favIconUrl, windowId: windowId });
  });

  return channel;
}

var invalidatePageConfig = exports.invalidatePageConfig = (0, _util.memoize)(_pageConfig2.default.invalidate, null, 10000);

var DEFAULT_BADGE_COLOR = exports.DEFAULT_BADGE_COLOR = '#e75146';

function setBadgeIcon(name) {
  !(0, _util.isSafari)() && _forge2.default.button.setBadge('');
  _forge2.default.button.setIconByName(name);
}

function setBadgeText(text) {
  if (!(0, _util.isSafari)()) {
    _forge2.default.button.setBadgeBackgroundColor({ color: DEFAULT_BADGE_COLOR });
    _forge2.default.button.setIconByName('');
  }
  _forge2.default.button.setBadge(text);
}

function getBadgeText(_ref3) {
  var referral = _ref3.user.referral;
  var _ref3$settings = _ref3.settings;
  var seenNewsVersion = _ref3$settings.seenNewsVersion;
  var referralNewsBadge = _ref3$settings.referralNewsBadge;
  var enabled = _ref3$settings.enabled;

  if (seenNewsVersion != _config.newsId || referral && !referralNewsBadge) {
    return 'NEW';
  }

  if (!enabled) {
    return 'off';
  }

  return '';
}

function setUninstallURL(domain) {
  if (!(0, _util.isChrome)()) return;
  var url = domain ? _config.URLS.uninstall + '?domain=' + encodeURI(domain) : _config.URLS.uninstall;
  window.chrome.runtime.setUninstallURL(url);
}

},{"lib/config":155,"lib/forge":157,"lib/message":159,"lib/page-config":164,"lib/util":181}],140:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _sagas = require('./sagas');

var _selectors = require('./selectors');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  reducer: _reducer2.default,
  sagas: { start: _sagas.start, sendStateToTabs: _sagas.sendStateToTabs },
  selectors: { getAll: _selectors.getAll, stateByUrl: _selectors.stateByUrl, stateForTab: _selectors.stateForTab, getActiveTab: _selectors.getActiveTab }
};
module.exports = exports['default'];

},{"./reducer":141,"./sagas":142,"./selectors":143}],141:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = tabsReducer;

var _actions = require('./actions');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function tabsReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var _ref = arguments[1];
  var type = _ref.type;
  var data = _ref.data;

  switch (type) {
    case _actions.t.SET_ACTIVE_TAB:
      return (0, _extends3.default)({}, state, { active: data });
    default:
      return state;
  }
}
module.exports = exports['default'];

},{"./actions":138,"babel-runtime/helpers/extends":20}],142:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.start = start;
exports.listenNewTabsConnections = listenNewTabsConnections;
exports.sendStateToTabs = sendStateToTabs;
exports.listenActiveTabChange = listenActiveTabChange;
exports.renderBadge = renderBadge;

var _effects = require('redux-saga/effects');

var _message = require('lib/message');

var _message2 = _interopRequireDefault(_message);

var _tracking = require('lib/tracking');

var _location = require('lib/location');

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _selectors = require('./selectors');

var _helpers = require('./helpers');

var _connection = require('../connection');

var _connection2 = _interopRequireDefault(_connection);

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

var _marked = [start, listenNewTabsConnections, sendStateToTabs, listenActiveTabChange, renderBadge].map(_regenerator2.default.mark);

function start() {
  var activeTab;
  return _regenerator2.default.wrap(function start$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.fork)(listenActiveTabChange);

        case 2:
          _context.next = 4;
          return (0, _effects.select)(_selectors.getActiveTab);

        case 4:
          activeTab = _context.sent;

          if (activeTab) {
            _context.next = 8;
            break;
          }

          _context.next = 8;
          return (0, _effects.take)(actions.t.SET_ACTIVE_TAB);

        case 8:
          _context.next = 10;
          return (0, _effects.fork)(listenNewTabsConnections);

        case 10:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function listenNewTabsConnections() {
  var channel, _ref, //eslint-disable-line
  tab, url, state, pageState;

  return _regenerator2.default.wrap(function listenNewTabsConnections$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.call)(_helpers.createNewTabsChannel);

        case 2:
          channel = _context2.sent;

        case 3:
          if (!true) {
            _context2.next = 29;
            break;
          }

          _context2.next = 6;
          return (0, _effects.call)(channel.take);

        case 6:
          _ref = _context2.sent;
          tab = _ref.tab;
          url = _ref.url; //take is always Promise

          _context2.next = 11;
          return (0, _effects.call)(_helpers.invalidatePageConfig);

        case 11:
          _context2.next = 13;
          return (0, _effects.select)(_selectors.stateByUrl, url);

        case 13:
          state = _context2.sent;

          if (!(state.connection.cookiesDisabled || navigator.cookieEnabled == false)) {
            _context2.next = 17;
            break;
          }

          _context2.next = 17;
          return (0, _effects.fork)(_connection2.default.sagas.monitorCookiesDisable);

        case 17:
          if (!(tab == 'popup')) {
            _context2.next = 22;
            break;
          }

          _context2.next = 20;
          return (0, _effects.call)(_message2.default.emitTo, 'popup', 'state', state);

        case 20:
          _context2.next = 27;
          break;

        case 22:
          _context2.next = 24;
          return (0, _effects.call)(_tracking.fire, 'tab-connected', state.user.id, state.config, state.connection);

        case 24:
          pageState = (0, _selectors.stateForTab)(state);
          _context2.next = 27;
          return (0, _effects.call)(_message2.default.emitTo, tab, 'state', pageState);

        case 27:
          _context2.next = 3;
          break;

        case 29:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

function sendStateToTabs() {
  var state;
  return _regenerator2.default.wrap(function sendStateToTabs$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.select)(_selectors.stateByActiveTab);

        case 2:
          state = _context3.sent;
          _context3.next = 5;
          return (0, _effects.call)(renderBadge, state);

        case 5:
          _context3.next = 7;
          return (0, _effects.call)(_message2.default.emitTo, 'popup', 'state', state);

        case 7:
          _context3.next = 9;
          return (0, _effects.call)(_message2.default.emitFocusedTab, 'state', (0, _selectors.stateForTab)(state));

        case 9:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}

function listenActiveTabChange() {
  var channel, _tab, oldTab, domain;

  return _regenerator2.default.wrap(function listenActiveTabChange$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.call)(_helpers.createActiveTabsChannel);

        case 2:
          channel = _context4.sent;

        case 3:
          if (!true) {
            _context4.next = 18;
            break;
          }

          _context4.next = 6;
          return (0, _effects.call)(channel.take);

        case 6:
          _tab = _context4.sent;
          _context4.next = 9;
          return (0, _effects.select)(_selectors.getActiveTab);

        case 9:
          oldTab = _context4.sent;
          domain = (0, _location.domainFromUrl)(_tab.url);

          if (!(!oldTab || (0, _location.domainFromUrl)(oldTab.url) != domain)) {
            _context4.next = 16;
            break;
          }

          _context4.next = 14;
          return (0, _effects.put)(actions.setActiveTab(_tab));

        case 14:
          _context4.next = 16;
          return (0, _effects.call)(_helpers.setUninstallURL, domain);

        case 16:
          _context4.next = 3;
          break;

        case 18:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this);
}

function renderBadge(_ref2) {
  var user = _ref2.user;
  var config = _ref2.config;
  var settings = _ref2.settings;
  var text;
  return _regenerator2.default.wrap(function renderBadge$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          if (!(user.anonymous || config.grammarlyEditor)) {
            _context5.next = 5;
            break;
          }

          _context5.next = 3;
          return (0, _effects.call)(_helpers.setBadgeText, '');

        case 3:
          _context5.next = 15;
          break;

        case 5:
          if (!(!config.enabled && !config.servicePage)) {
            _context5.next = 10;
            break;
          }

          _context5.next = 8;
          return (0, _effects.call)(_helpers.setBadgeIcon, 'bang');

        case 8:
          _context5.next = 15;
          break;

        case 10:
          _context5.next = 12;
          return (0, _effects.call)(_helpers.getBadgeText, { user: user, settings: settings });

        case 12:
          text = _context5.sent;
          _context5.next = 15;
          return (0, _effects.call)(_helpers.setBadgeText, text);

        case 15:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this);
}

},{"../connection":126,"./actions":138,"./helpers":139,"./selectors":143,"babel-runtime/regenerator":111,"lib/location":158,"lib/message":159,"lib/tracking":177,"redux-saga/effects":114}],143:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = exports.getActiveTab = exports.stateForTab = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.stateByUrl = stateByUrl;
exports.stateByActiveTab = stateByActiveTab;
exports.getDomainSettings = getDomainSettings;

var _pageConfig = require('lib/page-config');

var _pageConfig2 = _interopRequireDefault(_pageConfig);

var _location = require('lib/location');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function stateByUrl(state, url) {
  var domain = (0, _location.domainFromUrl)(url);
  var page = _pageConfig2.default.get(domain, url);

  var settings = getDomainSettings(state.settings, domain);

  return (0, _extends3.default)({}, state, { config: (0, _extends3.default)({}, page, { domain: domain }), settings: settings, activeTab: state.tabs && state.tabs.active });
}

function stateByActiveTab(state) {
  return stateByUrl(state, state.tabs.active.url);
}

function getDomainSettings(settings, domain) {
  var enabled = settings[domain] && settings[domain].enabled !== undefined ? settings[domain].enabled : true;
  var domainSettings = settings[domain];
  return (0, _extends3.default)({}, settings.common, domainSettings, { enabled: enabled });
}

var stateForTab = exports.stateForTab = function stateForTab(_ref) {
  var user = _ref.user;
  var connection = _ref.connection;
  var config = _ref.config;
  var settings = _ref.settings;
  return { user: user, connection: connection, page: (0, _extends3.default)({}, settings, config, { enabled: settings.enabled && config.enabled
    }) };
};

var getActiveTab = exports.getActiveTab = function getActiveTab(_ref2) {
  var tabs = _ref2.tabs;
  return tabs.active;
};

var getAll = exports.getAll = function getAll(state) {
  return state;
};

},{"babel-runtime/helpers/extends":20,"lib/location":158,"lib/page-config":164}],144:[function(require,module,exports){
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

},{}],145:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX_COOKIE_HEADER_LENGTH = exports.LOGIN_BY_COOKIE_CHANGE_TIMEOUT = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.fetchUser = fetchUser;
exports.isItTimeToRefresh = isItTimeToRefresh;
exports.fetchMimic = fetchMimic;
exports.prepareUser = prepareUser;
exports.isReferral = isReferral;
exports.authRequestHelper = authRequestHelper;
exports.createCookieChannel = createCookieChannel;
exports.fetchSettings = fetchSettings;
exports.resetCapiSessions = resetCapiSessions;

var _request = require('lib/request');

var _config = require('lib/config');

var _util = require('lib/util');

var _cookie = require('lib/bg/cookie');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var USE_SESSION_LIFE_TIME = 30 * _util.MINUTE;
var LOGIN_BY_COOKIE_CHANGE_TIMEOUT = exports.LOGIN_BY_COOKIE_CHANGE_TIMEOUT = 20 * _util.SECOND;
var MAX_COOKIE_HEADER_LENGTH = exports.MAX_COOKIE_HEADER_LENGTH = 7 * 1024;

function fetchUser(containerId) {
  var options = {
    method: 'post',
    query: true,
    data: {
      field: ['mixpanel.distinct_id', 'stat_feedback_ACCEPT'],
      app: (0, _util.getBrowser)() + 'Ext',
      containerId: containerId
    }
  };

  return (0, _request.fetch)(_config.URLS.userOrAnonymous, options);
}

function isItTimeToRefresh(loginDate) {
  return !loginDate || new Date() - new Date(loginDate) > USE_SESSION_LIFE_TIME;
}

function fetchMimic(containerId) {
  var options = {
    data: {
      containerId: containerId
    }
  };

  return (0, _request.fetch)(_config.URLS.dapiMimic, options);
}

function prepareUser() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var dapiData = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var grauth = arguments[2];

  grauth = grauth || 'empty'; //in case of null
  var mimic = dapiData.groups || [];
  var settings = dapiData.settings || {};

  data.token = data.grauth;
  data.premium = data.type == 'Premium';
  data.referral = isReferral(data);

  var fixedErrors = parseInt(data.customFields && data.customFields.stat_feedback_ACCEPT);
  data.fixed_errors = //eslint-disable-line
  isNaN(fixedErrors) ? 0 : fixedErrors;

  return _config.userFields.reduce(function (result, field) {
    var value = data[field];
    typeof value != 'undefined' && (0, _assign2.default)(result, (0, _defineProperty3.default)({}, field, value));
    return result;
  }, { mimic: mimic, settings: settings, grauth: grauth });
}

function isReferral(_ref) {
  var premium = _ref.premium;
  var anonymous = _ref.anonymous;
  var subscriptionFree = _ref.subscriptionFree;
  var registrationDate = _ref.registrationDate;

  var isFree = !premium && !anonymous || subscriptionFree;
  var useForWeek = (0, _util.pastDays)(registrationDate) > 7;
  return Boolean(isFree && useForWeek);
}

function authRequestHelper(url, data) {
  return (0, _request.fetch)(url, {
    body: (0, _request.paramStr)(data),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'post'
  });
}

function createCookieChannel() {
  var channel = (0, _util.createChannel)({ buffer: false });
  (0, _cookie.watchToken)(channel.put);
  return channel;
}

function fetchSettings(data) {
  return (0, _request.fetch)(_config.URLS.authSettings, { data: data, method: 'post' });
}

function resetCapiSessions(data) {
  return window.socketServer && window.socketServer.wsReconnect(data);
}

},{"babel-runtime/core-js/object/assign":6,"babel-runtime/helpers/defineProperty":19,"lib/bg/cookie":122,"lib/config":155,"lib/request":169,"lib/util":181}],146:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _sagas = require('./sagas');

var _selectors = require('./selectors');

var _actions = require('./actions');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  reducer: _reducer2.default,
  types: _actions.t,
  sagas: { start: _sagas.start, updateUser: _sagas.updateUser, externalUpdateUser: _sagas.externalUpdateUser, authRequest: _sagas.authRequest },
  selectors: { current: _selectors.current },
  actions: { setUser: _actions.setUser, sessionInvalidate: _actions.sessionInvalidate, incFixed: _actions.incFixed, updateSettings: _actions.updateSettings }
};
module.exports = exports['default'];

},{"./actions":144,"./reducer":147,"./sagas":148,"./selectors":149}],147:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultUser = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = userReducer;

var _actions = require('./actions');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var defaultUser = exports.defaultUser = {
  anonymous: true,
  premium: false
};

function userReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? defaultUser : arguments[0];
  var _ref = arguments[1];
  var type = _ref.type;
  var _ref$data = _ref.data;
  var data = _ref$data === undefined ? {} : _ref$data;

  switch (type) {
    case _actions.t.SET_USER:
      return data;
    case _actions.t.SET_SETTINGS:
      return (0, _extends3.default)({}, state, { settings: data });
    case _actions.t.INC_FIXED:
      /*eslint-disable camelcase*/
      var fixed_errors = state.fixed_errors + 1;
      return (0, _extends3.default)({}, state, { fixed_errors: fixed_errors });
    /*eslint-enable camelcase*/
    default:
      return state;
  }
}

},{"./actions":144,"babel-runtime/helpers/extends":20}],148:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.start = start;
exports.updateUser = updateUser;
exports.getMimic = getMimic;
exports.getGrauthFromCookie = getGrauthFromCookie;
exports.trackCookieHeaderSize = trackCookieHeaderSize;
exports.externalUpdateUser = externalUpdateUser;
exports.authRequest = authRequest;
exports.listenCookieChanges = listenCookieChanges;
exports.cookieChange = cookieChange;
exports.updateUserSettings = updateUserSettings;

var _effects = require('redux-saga/effects');

var _reduxSaga = require('redux-saga');

var _prefs = require('lib/bg/prefs');

var _prefs2 = _interopRequireDefault(_prefs);

var _cookie = require('lib/bg/cookie');

var _util = require('lib/util');

var _tracking = require('lib/tracking');

var _tracking2 = _interopRequireDefault(_tracking);

var _bgonly = require('lib/tracking/bgonly');

var _profiler = require('lib/profiler');

var _profiler2 = _interopRequireDefault(_profiler);

var _connection = require('../connection');

var _connection2 = _interopRequireDefault(_connection);

var _settings = require('../settings');

var _settings2 = _interopRequireDefault(_settings);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _reducer = require('./reducer');

var _selectors = require('./selectors');

var selectors = _interopRequireWildcard(_selectors);

var _helpers = require('./helpers');

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

var _marked = [start, updateUser, getMimic, getGrauthFromCookie, trackCookieHeaderSize, externalUpdateUser, authRequest, listenCookieChanges, cookieChange, updateUserSettings].map(_regenerator2.default.mark);

function start() {
  return _regenerator2.default.wrap(function start$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return [(0, _effects.fork)(listenCookieChanges), (0, _reduxSaga.takeLatest)(actions.t.SESSION_INVALIDATE, updateUser), (0, _reduxSaga.takeEvery)(actions.t.UPDATE_SETTINGS, updateUserSettings)];

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function updateUser() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var lazy = _ref.lazy;
  var failoverFromCache = _ref.failoverFromCache;
  var reason = _ref.reason;

  var loginDate, containerId, authData, dapiData, grauth, user, oldUser, dialectWeak, _ref2, authDegradation, cookiesDisabled, cachedUser;

  return _regenerator2.default.wrap(function updateUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _profiler2.default.start('updateUser');
          _context2.prev = 1;

          if (!lazy) {
            _context2.next = 10;
            break;
          }

          _context2.next = 5;
          return (0, _effects.call)(_prefs2.default.get, 'loginDate');

        case 5:
          loginDate = _context2.sent;

          if ((0, _helpers.isItTimeToRefresh)(loginDate)) {
            _context2.next = 10;
            break;
          }

          console.info('AUTH SERVICE| user session still fresh');
          _profiler2.default.stop('updateUser');
          return _context2.abrupt('return');

        case 10:
          _context2.next = 12;
          return (0, _effects.fork)(trackCookieHeaderSize);

        case 12:
          _context2.next = 14;
          return (0, _effects.call)(_bgonly.getContainerId);

        case 14:
          containerId = _context2.sent;
          _context2.next = 17;
          return (0, _effects.call)(_helpers.fetchUser, containerId);

        case 17:
          authData = _context2.sent;
          _context2.next = 20;
          return (0, _effects.call)(getMimic, containerId);

        case 20:
          dapiData = _context2.sent;
          _context2.next = 23;
          return (0, _effects.call)(getGrauthFromCookie);

        case 23:
          grauth = _context2.sent;
          _context2.next = 26;
          return (0, _effects.call)(_helpers.prepareUser, authData, dapiData, grauth);

        case 26:
          user = _context2.sent;
          _context2.next = 29;
          return (0, _effects.select)(selectors.current);

        case 29:
          oldUser = _context2.sent;
          _context2.next = 32;
          return (0, _effects.put)(actions.setUser(user));

        case 32:
          _context2.next = 34;
          return (0, _effects.select)(_settings2.default.selectors.getDapiProp, 'dialectWeak');

        case 34:
          dialectWeak = _context2.sent;

          if (!(!dialectWeak || user.id != oldUser.id)) {
            _context2.next = 38;
            break;
          }

          _context2.next = 38;
          return (0, _effects.call)(_settings2.default.sagas.initializeWeakDialect);

        case 38:
          if (!(user.id != oldUser.id || user.type != oldUser.type || user.settings.dialectStrong != oldUser.settings.dialectStrong)) {
            _context2.next = 42;
            break;
          }

          _context2.next = 41;
          return (0, _effects.call)(_helpers.resetCapiSessions, { dialect: user.settings.dialectStrong });

        case 41:
          console.warn('AUTH SERVICE| user changed, reseting capi session');

        case 42:
          _context2.next = 44;
          return (0, _effects.call)(_prefs2.default.set, { user: user, loginDate: new Date() });

        case 44:
          _context2.next = 46;
          return (0, _effects.select)(_connection2.default.selectors.current);

        case 46:
          _ref2 = _context2.sent;
          authDegradation = _ref2.authDegradation;
          cookiesDisabled = _ref2.cookiesDisabled;
          _context2.next = 51;
          return (0, _effects.call)(_tracking2.default.fire, 'session-invalidate', user, oldUser, reason, cookiesDisabled, containerId);

        case 51:
          if (!authDegradation) {
            _context2.next = 54;
            break;
          }

          _context2.next = 54;
          return (0, _effects.put)(_connection2.default.actions.updateConnection({ authDegradation: false }));

        case 54:
          _context2.next = 74;
          break;

        case 56:
          _context2.prev = 56;
          _context2.t0 = _context2['catch'](1);

          if (!(0, _reduxSaga.isCancelError)(_context2.t0)) {
            _context2.next = 61;
            break;
          }

          _profiler2.default.stop('updateUser');
          return _context2.abrupt('return');

        case 61:
          _context2.next = 63;
          return (0, _effects.call)(_prefs2.default.set, { loginDate: 0 });

        case 63:
          _context2.next = 65;
          return (0, _effects.put)(_connection2.default.actions.updateConnection({ authDegradation: true }));

        case 65:
          _context2.next = 67;
          return (0, _effects.call)(_tracking2.default.call, 'felog.warn', 'fetch_user_fail', { error: _context2.t0, reason: reason });

        case 67:

          console.warn('AUTH SERVICE| auth request fail. Message: ', _context2.t0);

          if (!failoverFromCache) {
            _context2.next = 74;
            break;
          }

          _context2.next = 71;
          return (0, _effects.call)(_prefs2.default.get, 'user');

        case 71:
          cachedUser = _context2.sent;
          _context2.next = 74;
          return (0, _effects.put)(actions.setUser(cachedUser || _reducer.defaultUser));

        case 74:

          _profiler2.default.stop('updateUser');

        case 75:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[1, 56]]);
}

function getMimic(containerId) {
  return _regenerator2.default.wrap(function getMimic$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _effects.call)(_helpers.fetchMimic, containerId);

        case 3:
          return _context3.abrupt('return', _context3.sent);

        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3['catch'](0);

          console.warn('AUTH SERVICE| fetch mimic fail. Message: ', _context3.t0.message);
          _context3.next = 11;
          return (0, _effects.call)(_tracking2.default.call, 'felog.warn', 'fetch_mimic_fail', { error: _context3.t0 });

        case 11:
          return _context3.abrupt('return', {});

        case 12:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this, [[0, 6]]);
}

function getGrauthFromCookie() {
  return _regenerator2.default.wrap(function getGrauthFromCookie$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _effects.call)(_cookie.getToken);

        case 3:
          return _context4.abrupt('return', _context4.sent);

        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4['catch'](0);

          console.warn('AUTH SERVICE| fetch cookie fail. Message: ', _context4.t0.message);
          _context4.next = 11;
          return (0, _effects.call)(_tracking2.default.call, 'felog.warn', 'fetch_cookie_fail', { error: _context4.t0 });

        case 11:
          return _context4.abrupt('return', 'bad_cookie');

        case 12:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this, [[0, 6]]);
}

function trackCookieHeaderSize() {
  var cookies, total, _cookies$reduce, name, length;

  return _regenerator2.default.wrap(function trackCookieHeaderSize$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _effects.call)(_cookie.getAllGrammarlyCookies);

        case 3:
          cookies = _context5.sent;
          total = cookies.reduce(function (total, _ref3) {
            var value = _ref3.value;
            return total + value.length;
          }, 0);

          if (!(total > _helpers.MAX_COOKIE_HEADER_LENGTH)) {
            _context5.next = 11;
            break;
          }

          _cookies$reduce = cookies.reduce(function (prev, next) {
            return prev.value.length > next.value.length ? prev : next;
          }, { value: '' });
          name = _cookies$reduce.name;
          length = _cookies$reduce.value.length;
          _context5.next = 11;
          return (0, _effects.call)(_tracking2.default.fire, 'cookie-overflow', total, { name: name, length: length });

        case 11:
          _context5.next = 18;
          break;

        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5['catch'](0);

          console.warn('AUTH SERVICE| fetch grammarly cookies fail. Message: ', _context5.t0.message);
          _context5.next = 18;
          return (0, _effects.call)(_tracking2.default.call, 'felog.warn', 'fetch_all_cookies_fail', { error: _context5.t0 });

        case 18:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this, [[0, 13]]);
}

/*
 * TODO: kill me in future
 */
function externalUpdateUser(_, lazy, reason) {
  return _regenerator2.default.wrap(function externalUpdateUser$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.call)(updateUser, { lazy: lazy, reason: reason });

        case 2:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked[5], this);
}

function authRequest(getState, url, data, successMetric) {
  var response, _successMetric$split, _successMetric$split2, reason;

  return _regenerator2.default.wrap(function authRequest$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return (0, _effects.call)(_helpers.authRequestHelper, url, data);

        case 3:
          response = _context7.sent;
          _successMetric$split = successMetric.split('_');
          _successMetric$split2 = (0, _slicedToArray3.default)(_successMetric$split, 2);
          reason = _successMetric$split2[1];
          _context7.next = 9;
          return (0, _effects.call)(updateUser, { reason: reason });

        case 9:
          _context7.next = 11;
          return (0, _effects.call)(_tracking2.default.fire, successMetric);

        case 11:
          return _context7.abrupt('return', response);

        case 14:
          _context7.prev = 14;
          _context7.t0 = _context7['catch'](0);

          console.warn('auth error', _context7.t0);
          return _context7.abrupt('return', { error: _context7.t0.message });

        case 18:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked[6], this, [[0, 14]]);
}

function listenCookieChanges() {
  var channel, task;
  return _regenerator2.default.wrap(function listenCookieChanges$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _effects.call)(_helpers.createCookieChannel);

        case 2:
          channel = _context8.sent;
          task = void 0;

        case 4:
          if (!true) {
            _context8.next = 15;
            break;
          }

          _context8.next = 7;
          return (0, _effects.call)(channel.take);

        case 7:
          if (!task) {
            _context8.next = 10;
            break;
          }

          _context8.next = 10;
          return (0, _effects.cancel)(task);

        case 10:
          _context8.next = 12;
          return (0, _effects.fork)(cookieChange);

        case 12:
          task = _context8.sent;
          _context8.next = 4;
          break;

        case 15:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked[7], this);
}

function cookieChange() {
  var newGrauth, _ref4, grauth;

  return _regenerator2.default.wrap(function cookieChange$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return (0, _effects.call)(_util.delay, _helpers.LOGIN_BY_COOKIE_CHANGE_TIMEOUT);

        case 3:
          _context9.next = 5;
          return (0, _effects.call)(getGrauthFromCookie);

        case 5:
          newGrauth = _context9.sent;
          _context9.next = 8;
          return (0, _effects.select)(selectors.current);

        case 8:
          _ref4 = _context9.sent;
          grauth = _ref4.grauth;

          if (!(newGrauth != grauth)) {
            _context9.next = 16;
            break;
          }

          if (!(grauth && typeof newGrauth == 'undefined')) {
            _context9.next = 14;
            break;
          }

          _context9.next = 14;
          return (0, _effects.call)(_tracking2.default.call, 'felog.warn', 'cookie_remove_detected');

        case 14:
          _context9.next = 16;
          return (0, _effects.put)(actions.sessionInvalidate('cookieChange'));

        case 16:
          _context9.next = 22;
          break;

        case 18:
          _context9.prev = 18;
          _context9.t0 = _context9['catch'](0);
          _context9.next = 22;
          return (0, _effects.call)(_tracking2.default.call, 'felog.warn', 'too_frequent_cookie_changes', { canceled: (0, _reduxSaga.isCancelError)(_context9.t0) });

        case 22:
        case 'end':
          return _context9.stop();
      }
    }
  }, _marked[8], this, [[0, 18]]);
}

function updateUserSettings() {
  var _ref5 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var data = _ref5.data;

  var _ref6, settings, newSettings;

  return _regenerator2.default.wrap(function updateUserSettings$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          if (!((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) != 'object')) {
            _context10.next = 2;
            break;
          }

          return _context10.abrupt('return');

        case 2:
          _context10.next = 4;
          return (0, _effects.select)(selectors.current);

        case 4:
          _ref6 = _context10.sent;
          settings = _ref6.settings;
          newSettings = (0, _extends3.default)({}, settings, data);

          //if user dialect changed - we need to recreate capi sessions

          if (!(settings.dialectStrong != newSettings.dialectStrong)) {
            _context10.next = 11;
            break;
          }

          _context10.next = 10;
          return (0, _effects.call)(_helpers.resetCapiSessions, { dialect: newSettings.dialectStrong });

        case 10:
          console.info('AUTH SERVICE| dialect changed, reseting capi session');

        case 11:
          _context10.next = 13;
          return (0, _effects.put)(actions.setSettings(newSettings));

        case 13:
          _context10.prev = 13;
          _context10.next = 16;
          return (0, _effects.call)(_helpers.fetchSettings, newSettings);

        case 16:
          _context10.next = 22;
          break;

        case 18:
          _context10.prev = 18;
          _context10.t0 = _context10['catch'](13);
          _context10.next = 22;
          return (0, _effects.call)(_tracking2.default.call, 'felog.warn', 'fetch_settings_fail', { error: _context10.t0 });

        case 22:
        case 'end':
          return _context10.stop();
      }
    }
  }, _marked[9], this, [[13, 18]]);
}

},{"../connection":126,"../settings":133,"./actions":144,"./helpers":145,"./reducer":147,"./selectors":149,"babel-runtime/helpers/extends":20,"babel-runtime/helpers/slicedToArray":24,"babel-runtime/helpers/typeof":26,"babel-runtime/regenerator":111,"lib/bg/cookie":122,"lib/bg/prefs":153,"lib/profiler":168,"lib/tracking":177,"lib/tracking/bgonly":174,"lib/util":181,"redux-saga":"redux-saga","redux-saga/effects":114}],149:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var current = exports.current = function current(state) {
  return state.user;
};

},{}],150:[function(require,module,exports){
"use strict";

window.IS_BG = true;

},{}],151:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var update = exports.update = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var tabs;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getTabsToReload();

          case 2:
            tabs = _context.sent;

            tabs.length && showUpdatePopup();

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return function update() {
    return ref.apply(this, arguments);
  };
}();

var getTabsToReload = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var tabs;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return new _promise2.default(_forge2.default.tabs.allTabs);

          case 2:
            tabs = _context2.sent;
            return _context2.abrupt('return', tabs.filter(function (_ref) {
              var url = _ref.url;
              return _pageConfig2.default.toReload(url);
            }));

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return function getTabsToReload() {
    return ref.apply(this, arguments);
  };
}();

var reloadTabs = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
    var tabs;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getTabsToReload();

          case 2:
            tabs = _context3.sent;

            tabs.forEach(function (_ref2) {
              var id = _ref2.id;
              return _forge2.default.tabs.reload(id);
            });

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return function reloadTabs() {
    return ref.apply(this, arguments);
  };
}();

var _forge = require('lib/forge');

var _forge2 = _interopRequireDefault(_forge);

var _tracking = require('lib/tracking');

var _pageConfig = require('lib/page-config');

var _pageConfig2 = _interopRequireDefault(_pageConfig);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function showUpdatePopup() {
  var opts = {
    title: 'Grammarly needs to be reloaded',
    text: 'While you were working, we updated Grammarly. To take advantage of these improvements, please save the text you are working on, and click here.',
    iconURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAIAAAAErfB6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTgzMjhCMkQ1NjBGMTFFNDg0NjBEMENBNkVFNzA3RDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTgzMjhCMkU1NjBGMTFFNDg0NjBEMENBNkVFNzA3RDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxODMyOEIyQjU2MEYxMUU0ODQ2MEQwQ0E2RUU3MDdEOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxODMyOEIyQzU2MEYxMUU0ODQ2MEQwQ0E2RUU3MDdEOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg1zYWQAAA/kSURBVHja7J15dFNVHsfz0nRJ06ZN932FbtBSoK2AlM2hVhYZAetURWhZnBEQBIvjMIvjco6WEQVZBBmqIiCoqFSQw14KCHSl1G50pUuabiFJmzTdMr9DHY/CS0iT+5Yk93v4Q5P0vnd/n/fu/f3uvb97CY1Gw8EyX3GxCTBgLAwYCwPGwoCxMGAsDBgLA8aAsTBgLAwYCwPGwoCxMGAsDBgDxsKAsTBgLAwYCwPGwoCxMGAsDBgDxsKAsTBgLAwYCwPGwoCxMGAMGAsDxsKAsTBgLAwYCwPG0imeBda5d7C/uru1Ui5uUnY1q7paVFJpX4+sTykfUPUPDf76M2uulZDHd7KxF9kIfPgiX76Ln71LuNB7lIOXnZW1qVSWsJBddtp65T91VBVK6wu66up62oaMqDWXIIIFHhNdgieIgia7hXnYCTFgxlSlEJ9sKc5pK6+Qt1B0iQihz3SPyDk+sWGO3hgwTWpXy4815n3flF/X007bRYMF7gv84hb6x7vbCjFgqgSNcFbtxQuSskHNECM3YEVwZ3pGpYXMgAYcA0ap3PaKHVWnS+7eYcn9xDgHrAlLSnSPwICN1Y3OmvcrTrAH7X2YN0bMTXANxYANEcQ5meXZZ1pvsfw+Z3tFb4qcD1EWBqyvoIvNqs3Zefs0BLUmccMQOq8enZQWMh06aQz4IarplmQUHSqXN5vcnUcKfbeMfzbUwRMDJpeGoznccDWzLFs9NGCi3Yotl7cpan5q4BSCQ2DAv5NyQL255Ogp8U0z8PmTvce9E5Niz7PFgH/RHWXnS3n7oXE2m5AdGupd8ekB9q4YMKdIWr86P0va18MxL4lsBDvj0sZTOSRiAoDPS37eUHjAdDvdh3bJWycsmeU5xkIBn2wpfq348IBmkGO+4hFW78WmzvGJtTjAQDej+OCQBUxocgliS+xzVDBm74oOaJnh3R2yjOlqqCZUFqpsKYDBq4J+17xb5vsElYUqQ8XNHzBEROAzm6tXpUNQZag4VN+cASsH1BDvml9EpKeg4lB9MIJ5AtZwNJtLjprTaIYBguqDEcAUaFx0VtXtcMNVRkYirblW3nbOnnxnoTWfR3C5BLdvaEDRr+pQK8Squ6rBPprvB4wQ3xDybOCjZhUmwZO7KPcDerpegkNEOflOch011tk/xjnAhy/S8WNgXKUQF3TVFUrriqUN9CwGsuXyvkl8xfh5J7YABqs9fXkbDTOAgPOPfnGzPMd42jkZ8OeyfuXZ1tLjzQV5nbWoWlFtihT6fjV1nZHzx2wBvK/mwvsVJ6grH8w0z3fCkqCpY5z8ULn6n9bmfNuUR+mKg40Rc1eEzjR5wE3KrvmXtlBkKS5BJHuPWxeWHCBwQ144dNK7bp85eucaRe22nZV19rQMY9b6sALwywWfUbSuCvqwt2KeHk/xClbwHv5162vopKkofLZX9PaJS00Y8I3OmqXXdlPx4q4MnbV6dBJ4yPQEeAfqLkMv00eBk/jZpL8YvC6T+TiYiq7Xydp+T/yK9eFP0EN32C1/ITjx8JS1VCydNMZEDL/Bue0Vq27sQ1tmsMB93yOrdEc+v0rSK8vvqi25e6daIRGrpJ193T0DaqAl4Nm62ToCrdGOXrGiIHiBHHl2+hQo7etZk59ViHpIeW/CCsPW0DMM+Jkr29EuWAcn+ZOElSIbge6fAcjvGvNOiovLZHoFZjzCarLb6Cf9JiZ5RdtwHzI6BN7ihqIDFyRlaKO7I4++bGKA4TF/7uoOhAWOdfLPmvSig85XDcKbPdVns5sLf5sKrL9cbRyeD566NHga38pGx88GNINr8z+72IaS8cEpawzId2IS8NqCT8+2lqIqLVDgBl2gjncX2t7tVacO1V81fhYSMK+PeGKx/yO63+P063sQTv/9wWvsRxOXmQzgdrV85rm3UYWP4FV9k7jel6/VwbneWf36zS/FqrsIqxDnEvJu7J90XFTWr1yU+2GzqgvVWM2Fx/4+0txUxrzoY415qOiCT/RebKoOQ++pPrf8+l60dEHgnT11aes57csw4LGDENaWi2ZGB8wFRjOZMOn7pnxURS0PnTHdI5L0qyGNBl7cDyt/pGikSTHQuzb/073V57X9IMrJ95WIOQwajRnAVQoxqtz7IIH72rDHtdHNKD74HbonSdsQxweVJ98tO67tBxAfgw+M5FpgNDCdCQA+2VKMqnF+I3qRtrjljdKvUV3o4YNNdZe2lP+g7SZTAiYxZTpmAOe0lSMp53HvmEdcR5F+9Xld7ld3rtNZqf21F+GipF8hHN4aqekYANzWK0ey5w2XINaEJZF+VSpr/E/FD/RXLbM8+1pn9YOf13a3oboEmA4MyGrAP3VUISkn2Xsc6YKH/qHBv908Ytg4hvGObkbRQUW/6r6A+ICWN5sGAzIAGNU47ZKgRC2N86XbilamooMOteKFa7tv3W0c/t+absmKG3vR7uY0IgMysOgOybxpmKN3rCiQNG7ZU3Oew6igFU25sk1kI+ARVu1qObMGpBswtFd1PQg6pIX+8aSfQ2N4XwvJlKhb2g0GBDPquV8m3U10dXcrknQj0nzLAc3goforHHMXGBDMyNI+uFIuNr4Q8K38yRLjL0rKO/u6ORYg/c1IN+AmJYKR98luo0k//1FczLEM6W9GugEjmVqJdvYnbbgut1daCGD9zUg34BaV1PhCSNc2VynEcna4V6wyI92AjfctuQQRJHB/8PNSWSPHYqS/GekGLOtTGlmCq40jaTZHDbrhQPZLfzPSDVg+YGwrqi2nSIJ6Pp/N0t+MdAM2fojYnke+2q3LknLG9Tej+RyrQ38Wr0nIfADTvE0vBky3TOgsI3MGbHyykLZg18XGwXKw6W9GugELeXwjS2hXK0g/97UXWQ5g/c1IN2AnG3sjS+hSd5OugQ0WeFgOYP3NSDfgh6aFPVQajqaebIEE6QC1uUp/M9INWM+sTt26KSVJSAxx8DD+6TEV6W9Guld06Egw0V+lssYHV3QQHGKKW9iJliLqbh4uMctrzHjnQGsjslF23T4j61fSZka6ASNZIZzfVUv6eZJ3NHWAbbm8XfHp8AwZWc7ndbnGA9bfjHQ30eFCBEd03la03unpePDz6R5RjtZ8iu58eehM4+nSb0a6AY9y8OISCI6TId2VB16yhX7xFN15svc4toxdEASYkaWA7ayskcQzJ7Sk6CwLnkbRxivaJjnoFxhQ/2E7BoYqJ7oEG19IubyZdHmwF9/5mYDJVNx2iZQth1+OyIAMAEZ1sK62TK+Xwx53pWDYclvVKZbsYj0iAzIAeDIiV+WcpJR0xAP8rH9HL0Z+2w09HSlXth1vLmjtlSkGeu/7V9fTfqmtHL5lmwEZSF3xsBNGCH2MTzAc1Axllmfvikt/8KvHvMY+HzT1i/rLaO+8Sdn1WvFhHVHyzrg0qq0HpgMDsvoNvhfPRCIp54KkjDRdE/TXqCenuofTWal14ckzPaPYZjpmACM8IOit0mOk20NaEdztE5cicej0UWrglBdHPcZC0zEDOMzRO5hs6asBqu1u21Z5ivQrvpXNvoRV0wzaAXBkYyAhM/45diEtAZI7mM4EAIMW+MWhKiqrNudSe4W2sHt3/PL0kBkUHdZry+W9HZPyauQ81hqNMcAL/eNRraLScDQZRQfrtSRZcwkiI3LexwnLIURG7u8ceXTdIv8EeiwG5tKWNMtGwO62QoQuibxf9WLef3WkFkJD/cO0jFWjZiFZuiWyEbweteDrqet1jAmDy4126zUw10i3ueMwu+guLWQGwtLu9HSkX9ujYyxCwLN9JXzOmZl/A2/I4JEQP3uX1yLnn5u1+YXgRB0tkKRXtvLGJ2jnpw0zF5PnJk0QBcU4ByDcTrhKIV527eNPElbqiBTdbB3Xhz+xJizpcnvlmdZb1zqq9UnkCnXwfNQ9LMkrRh+3vFnVlX59L4F0oScYyrARQIYPxgJDo90QHBinXv1od3y6bm+TR1jN8IiCf/DfnWpFpULcqOxsVcmgqR9eQA9snKztffiiAIFrpNBXqPcsZKms8c95+6HM2V7RaA1l2B8yDDjRPQLtS8y5l1qZenXHm9GL5/qM1+f3rraOU2wdkVz6WGPem6XfDJ/t5aDfDvF6vr6JhgZ7zC983xgxF3mZygH1q0UHX7/5pWKgl55ayPqVG4u+2FxyhIqT24wxEfOAE1xD0bZmv+q7pvx5OZmUrtIaVnZz4dyLmRTtiwnGMfjIFQ5LUlc2Rc6nKPGkrVcOr/Liyx+eo+BwbRB4ailXtm0qPqT/5i8jOhAPzALGMeYOWXH6KMQeq0cnUXe03c+ypjX5WeArLQuZBp6w8Q9T/9Dg6daSz+tydXgP4t67pH/YqSUzg1RgFiOXKVrc4ZQQDSd7jxtu93QfrEGK50ZnzVnJLWiNH7ofCETJJ6ZvCvz9eXrHmwt0TDjeJ7M6nJJD7/GywwBiRYHjRUEQ44Y4eATYuzk/kA8CPlqzsqu+p71SLr55t6FIWj+iAxYhVNuTsMLr/1sSwMMBDYmefp+5HS87rEMNV94q/ZbBG4DYxp5nY03wlIPqngG18efUQXcAEY67rXD4BGL9O+B/jH3K3A6IHnZANhR+wcgh4KwSdCJbJzyPZAaMXQngUKV3YlKMb5dMWlB9MAKq+U3WZfjb82x3xadbThrZfYKKQ/XBCKgKZOMWDgH2rjvj0lAdN2RCgipDxQPI9lk1K8AgcG63TljCI6wshy5UFqqM/Cxr9m7CMstzzHuxqUgSmdgvqCZUlnQTbLMFzLm3gnBL7HNm/x5DBaGaCFeasjdMItV5yc8bCg/QNgBCf78LLTMV767JAAYVSetX52dJzW6zQvCZwatC3u+aHmDOvYOdX8rbX9MtMad4FyIitD6zCQPm3JvG31xy1DzGuZK9x70Tk4Iw3jUHwJx7Y5mHG65mlmWbbpcMne6mqPmpgVMoWotv2oCHBQ11RtEhGuYWkStS6Ltl/LN0jsWaJGDOvfnjrNqcnbdPj2j+jkHZWVmvHp2UFjKd5l1xTRXwsJqUXZnl2aQbsrBKs72iN0XOR3jIrKUAHtaNzpr3K06gXXuLSjHOARsj5hqzag4D/kW57RU7qk6zBzOgXROWlEh98qqlAB5WobQ+q/biBUkZ6Y60NAi62JmeUWkhMyZQOXxhuYCH1a6WH2vM+74pH+3BvboVLHBf4Be30D/egBxADNhAVSnEJ1uKc9rKkRwqT6oIoc90j8g5PrEjzb3HgFGqrVf+U0cVNOAFXXV1PW3GHHHLJYhggcdEl2BohCe7hY1ozxsMmA5B6Fzd3VopF0OU1azqalFJpX09sj6lfED12/OIrLlWQh7fycZeZCPw4Yt8+S4Q54QLvUc5eJnQASCWCNiihM8awoCxMGAsDBgLA8bCgLEwYCwMGAPGwoCxMGAsDBiLav1PgAEASePGMkSWuH0AAAAASUVORK5CYII=',
    buttons: [{ title: 'Reload', iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowZDJiMWMzMi1mODMzLTQxOTgtOGVlMy05YWY1OGVmOGUzNzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjFBODMzNzYxQkREMTFFNDk0ODFGNTFFRDg1MkEzMjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkY1RjA5NjYxQkREMTFFNDk0ODFGNTFFRDg1MkEzMjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2FmMWVkMGUtZjZkZC00YmYwLWE2MjctNTBkMjA4MjRiZDViIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBkMmIxYzMyLWY4MzMtNDE5OC04ZWUzLTlhZjU4ZWY4ZTM3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuUD9ZcAAAM8SURBVHjatJbbS1RRFIePOjqG99LSLFMzoazMFLsHQQVFl8fee+qhP6cX3+sxiG6QFV0MNCjNjAyx1MoumpmXsRnz0m/Bd2A3TNocpw0fw5lz9v7tddlr7bSWlhYvwNgqzosMcVl0JrtAyAs2FkSeKBQ7xKT4Kqb+t/CcqBD1olpsEDdFdyqF00Q+FtpvWDSLWrEeMsUqPPBRjIifbDCwcBiROrFLrBU1Yp3zzWZxju/axCMxsJTr/yacLopwZw0WWix3i5IE3+eBbSYiXovhIK42KxvESaw0i9aIHC9FI5TguRDLToszWG1jXnwQ4yKb/7N5N01Wd8KomE1GOFc0irPioCh33r0Q98Rz3H/B2ZTF84ZojUuuZYXToEocEydEJe/MymeiQ9wVXaJJHCeT7f01jlNXsq5Ow23VxLaM/79gyXUxJD7x/y/eRcVV8RArk45xLgm0X+wkuSax0iy5EzdvTNyngpm134MmVz5VyEQLREz0inbiFz++sZlFNuitRLiBs5qJG5+KB+J9gnlRYht4pDvntoSiYeOH6BP9WJ/y4VucRSnM4tlK3TvO7EqGVbNNeNRfd9B+feEMpxj4xWImBYaZ6EVCaOOVuCR6QnFdKNXDCtBRToxHVbzixng+rtKEUlSXQ3GeG/FLqS88S62NObGxKraaMCQ7MkjUSidvYpTTqCscQ9gvBHaWt1DJwgGEw9TzWtbyWHvEN86P8QRNwJp9MbttZofWed4kKWzN44jYw1pWYnu4Gk26FtvDS15OsOM6SmhVAIttzl5uo2HW7EFjyrU4QsFop/Ef4OztE5+pyUNUtAgWuCOTZCzlCJ1ibj4x7WbtPj/GvvAivn9LI6/kCJRyIShjYhvfjMYJF/L9IQSbmOtxBepkXgytP4TnaQit9NnDYpvYCBXcKPv5LsLcHFxbg3CjcwW2u9dj1hxAI+ENJEIzT8e9BbjOIwSlxGjaubqGaKt5jpW+pdanb7FmZKmrzxy99gm7m6NdVpGd5csk1TgMENfbhGjmX2+ZUY7XGHGtJ0O308WKnROxQH8epRb3IjpI64wmc71dQHSMLjVDHhRR08NOU4kiPExMO2DJC8JvAQYA0OLb9zl5D+gAAAAASUVORK5CYII=' }]
  };

  _forge2.default.notification.create(opts, function () {
    (0, _tracking.call)('felog.info', 'notification_reload_tabs_click');
    reloadTabs();
  });

  (0, _tracking.call)('felog.info', 'notification_reload_tabs_show');
}

},{"babel-runtime/core-js/promise":13,"babel-runtime/helpers/asyncToGenerator":16,"babel-runtime/regenerator":111,"lib/forge":157,"lib/page-config":164,"lib/tracking":177}],152:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emitter = require('emitter');

var _emitter2 = _interopRequireDefault(_emitter);

var _dom = require('../dom');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

//import {URLS} from '../config'

var Offline = function Offline() {
  var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var me = (0, _emitter2.default)({}),
      win = config.window || window;

  var online = function online() {
    return me.emit('online');
  },
      offline = function offline() {
    return me.emit('offline');
  };

  (0, _dom.listen)(win, { online: online, offline: offline });

  me.stop = function () {
    return (0, _dom.unlisten)(win, { online: online, offline: offline });
  };

  return me;

  //console.log('start listen Connection', URLS.offline)

  /*let requesting,
    offline,
    xhr = new XMLHttpRequest()
   if (me.listeningAjax) return
   me.listeningAjax = true
   function fetch() {
    if (requesting) return
     let url = URLS.offline,
      noResponseTimer = setTimeout(() => {
        xhr.abort()
        requesting = false
         if (!offline) {
          offline = true
          me.emit('offline')
        }
      }, 10000)
     xhr.onreadystatechange = e => {
      if (xhr.readyState != 4) return
       requesting = false
      clearTimeout(noResponseTimer)
       if (xhr.status == 200) {
        if (offline) {
          offline = false
          me.emit('online')
        }
      }
      else if (!offline) {
        offline = true
        me.emit('offline')
      }
    }
     requesting = true
    xhr.open('GET', url + '?' + guid())
    xhr.send()
  }
   interval(fetch, 10000)
   me.stop = global => {
    cancelInterval(fetch)
    me.listeningAjax = false
  }
   return me*/
};

exports.default = Offline;
module.exports = exports['default'];

},{"../dom":156,"emitter":"emitter"}],153:[function(require,module,exports){
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

},{"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/object/keys":10,"babel-runtime/core-js/promise":13,"babel-runtime/helpers/asyncToGenerator":16,"babel-runtime/helpers/defineProperty":19,"babel-runtime/helpers/typeof":26,"babel-runtime/regenerator":111,"emitter":"emitter","lib/forge":157}],154:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = exports.socketConfig = exports.initStore = exports.actions = exports.dispatch = undefined;

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _redux = require('redux');

var _features = require('./features');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var logger = (0, _reduxLogger2.default)({
  level: 'debug',
  colors: {
    title: function title() {
      return 'green';
    },
    collapsed: function collapsed() {
      return true;
    }
  }
});

var store = (0, _redux.createStore)(_features.reducer, {}, (0, _redux.applyMiddleware)(_features.servicesMiddleware, logger));

if (!"true") {
  window.store = store;
}

var dispatch = exports.dispatch = store.dispatch;
var actions = exports.actions = (0, _redux.bindActionCreators)(_features.pureActions, store.dispatch);

var initStore = exports.initStore = function initStore() {
  return (0, _features.startup)().then(function () {
    store.subscribe(_features.sendStateToTabs);
  });
};

var socketConfig = exports.socketConfig = { //will be better after rewrite sockets to sagas
  get: function get() {
    return store.getState().connection;
  },
  update: actions.updateConnection,
  refreshUser: _features.auth.refreshUser
};

var auth = exports.auth = _features.auth; //TODO make better

},{"./features":130,"redux":"redux","redux-logger":"redux-logger"}],155:[function(require,module,exports){
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
},{"babel-runtime/core-js/object/assign":6,"spark-md5":"spark-md5"}],156:[function(require,module,exports){
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

},{"./util":181,"babel-runtime/core-js/object/keys":10,"babel-runtime/helpers/defineProperty":19,"babel-runtime/helpers/extends":20,"babel-runtime/helpers/typeof":26,"lodash":"lodash","react":"react","react-dom":"react-dom"}],157:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = typeof window !== "undefined" ? window['forge'] : typeof global !== "undefined" ? global['forge'] : null;
module.exports = exports['default'];

}).call(this,typeof window !== "undefined" ? window : {})
},{}],158:[function(require,module,exports){
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

},{"./forge":157,"./message":159,"./page-config/defaults":163,"./util":181,"babel-runtime/core-js/promise":13}],159:[function(require,module,exports){
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

},{"./dom":156,"./forge":157,"./util":181,"babel-runtime/core-js/get-iterator":3,"babel-runtime/core-js/promise":13,"emitter":"emitter","lodash":"lodash"}],160:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _defaults = require('./defaults');

var _location = require('lib/location');

var _configLoader = require('./config-loader');

var _configLoader2 = _interopRequireDefault(_configLoader);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Config = function (_ConfigLoader) {
  (0, _inherits3.default)(Config, _ConfigLoader);

  function Config() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Config);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Config)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.invalidate = function () {
      return _this.load();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Config, [{
    key: 'getByPage',
    value: function getByPage(pages) {
      var url = arguments.length <= 1 || arguments[1] === undefined ? (0, _location.getUrl)() : arguments[1];

      if (!pages) return;

      var findUrl = (0, _keys2.default)(pages).find(function (page) {
        return new RegExp(page).test(url);
      });

      return pages[findUrl];
    }
  }, {
    key: 'get',
    value: function get(domain, url) {
      var config = this.config.pageConfig[domain] || this.config.partials.find(function (conf) {
        return domain.includes(conf.domain);
      });

      if (config && config.enabled === false) return config;

      var pageConfig = this.getByPage(config && config.pages, url);

      var newConfig = pageConfig || config || {};
      newConfig.enabled = newConfig.enabled !== false;

      return newConfig;
    }
  }, {
    key: 'toReload',
    value: function toReload(url) {
      return url.indexOf('http') == 0 && _defaults.SITES_TO_RELOAD.some(function (domain) {
        return url.includes(domain);
      });
    }
  }]);
  return Config;
}(_configLoader2.default);

exports.default = Config;
module.exports = exports['default'];

},{"./config-loader":161,"./defaults":163,"babel-runtime/core-js/object/get-prototype-of":9,"babel-runtime/core-js/object/keys":10,"babel-runtime/helpers/classCallCheck":17,"babel-runtime/helpers/createClass":18,"babel-runtime/helpers/inherits":21,"babel-runtime/helpers/possibleConstructorReturn":23,"lib/location":158}],161:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _localforage = require('./localforage');

var _localforage2 = _interopRequireDefault(_localforage);

var _request = require('lib/request');

var _config = require('lib/config');

var _tracking = require('lib/tracking');

var _prefs = require('lib/bg/prefs');

var _prefs2 = _interopRequireDefault(_prefs);

var _meta = require('./meta');

var _meta2 = _interopRequireDefault(_meta);

var _utils = require('./utils');

var _decorator = require('./decorator');

var _profiler = require('lib/profiler');

var _profiler2 = _interopRequireDefault(_profiler);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var AJAX_TIMEOUT = 60000;
var CONFIG_MISSED_ERROR = 'Config missed';
var CONFIG_MALFORMED = 'Config malformed';

var ConfigLoader = function () {
  function ConfigLoader() {
    (0, _classCallCheck3.default)(this, ConfigLoader);
  }

  (0, _createClass3.default)(ConfigLoader, [{
    key: 'init',
    value: function () {
      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var config;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _profiler2.default.start('pageConfig_init');
                config = {};
                _context.next = 4;
                return this.isSkipConfig();

              case 4:
                if (!_context.sent) {
                  _context.next = 8;
                  break;
                }

                console.warn('Config: use default config in DEBUG mode (skipConfig=true)');
                _context.next = 11;
                break;

              case 8:
                _context.next = 10;
                return this.loadFromStorage();

              case 10:
                config = _context.sent;

              case 11:

                this.config = config;
                _context.next = 14;
                return new _meta2.default().load();

              case 14:
                this.meta = _context.sent;

                _profiler2.default.stop('pageConfig_init');
                return _context.abrupt('return', this);

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return ref.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: 'isSkipConfig',
    value: function () {
      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = !"true";

                if (!_context2.t0) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 4;
                return _prefs2.default.get('skipConfig');

              case 4:
                _context2.t0 = _context2.sent;

              case 5:
                return _context2.abrupt('return', _context2.t0);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function isSkipConfig() {
        return ref.apply(this, arguments);
      }

      return isSkipConfig;
    }()
  }, {
    key: 'load',
    value: function () {
      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var _meta$config, date, interval, minutesToUpdate;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _meta$config = this.meta.config;
                date = _meta$config.date;
                interval = _meta$config.interval;

                if (!(date + interval > new Date())) {
                  _context3.next = 7;
                  break;
                }

                minutesToUpdate = (date + interval - new Date()) / 1000 / 60;

                console.info('Config: next update in ' + minutesToUpdate.toFixed(2) + ' m');
                return _context3.abrupt('return');

              case 7:

                console.info('Config: going to update config from CDN...');
                return _context3.abrupt('return', this.updateFromCDN());

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function load() {
        return ref.apply(this, arguments);
      }

      return load;
    }()
  }, {
    key: 'updateFromCDN',
    value: function () {
      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
        var config;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                config = void 0;
                _context4.prev = 1;

                (0, _tracking.call)('statsc.ui.increment', 'stability:page_config_cdn_update');
                _context4.next = 5;
                return (0, _request.fetch)(_config.URLS.pageConfigUrl, { timeout: AJAX_TIMEOUT });

              case 5:
                config = _context4.sent;

                if ((0, _utils.isValid)(config)) {
                  _context4.next = 8;
                  break;
                }

                throw new Error(CONFIG_MALFORMED);

              case 8:

                this.config = config;
                this.save(config);
                _context4.next = 16;
                break;

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4['catch'](1);

                (0, _tracking.call)('felog.error', 'page_config_cdn_load_error', { error: _context4.t0 });
                this.saveOnError('Config: can\'t get valid config - ' + _context4.t0.message, config);

              case 16:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 12]]);
      }));

      function updateFromCDN() {
        return ref.apply(this, arguments);
      }

      return updateFromCDN;
    }()
  }, {
    key: 'loadFromStorage',
    value: function () {
      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
        var rawConfig;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _localforage2.default.getItem('config');

              case 3:
                rawConfig = _context5.sent;

                if (rawConfig) {
                  _context5.next = 6;
                  break;
                }

                throw new Error(CONFIG_MISSED_ERROR);

              case 6:
                if ((0, _utils.isValid)(rawConfig)) {
                  _context5.next = 8;
                  break;
                }

                throw new Error(CONFIG_MALFORMED);

              case 8:

                console.info('Config: loaded from local storage successfully');
                return _context5.abrupt('return', rawConfig);

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5['catch'](0);

                if (CONFIG_MISSED_ERROR === _context5.t0.message) {
                  (0, _tracking.call)('statsc.ui.increment', 'stability:page_config_missed_from_storage');
                } else {
                  (0, _tracking.call)('felog.error', 'page_config_local_storage_load_error', { error: _context5.t0 });
                }

                console.warn('Config: cannot get valid config from storage: ' + _context5.t0);

              case 16:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 12]]);
      }));

      function loadFromStorage() {
        return ref.apply(this, arguments);
      }

      return loadFromStorage;
    }()
  }, {
    key: 'save',
    value: function save(config) {
      var interval = config.interval;
      var protocolVersion = config.protocolVersion;
      var version = config.version;

      _localforage2.default.setItem('config', config);

      this.fireVersionUpdate(version, this.meta.config.version);

      this.meta.set({
        date: this.getCurrentTimestamp(),
        status: 'success',
        interval: interval,
        protocolVersion: protocolVersion,
        version: version
      });

      console.info('Config: new config saved to local storage successfully:', config.version, config);
    }
  }, {
    key: 'saveOnError',
    value: function saveOnError(info, config) {
      var _meta$config2 = this.meta.config;
      var interval = _meta$config2.interval;
      var protocolVersion = _meta$config2.protocolVersion;
      var version = _meta$config2.version;

      console.warn(info, config);

      this.meta.set({
        date: this.getCurrentTimestamp(),
        status: 'failed',
        interval: interval,
        protocolVersion: protocolVersion,
        version: version,
        info: info
      });
    }
  }, {
    key: 'fireVersionUpdate',
    value: function fireVersionUpdate(newVersion, oldVersion) {
      if (!newVersion || oldVersion == newVersion) return;

      (0, _tracking.call)('felog.info', 'page_config_updated', newVersion);
    }
  }, {
    key: 'getCurrentTimestamp',
    value: function getCurrentTimestamp() {
      return +new Date();
    }
  }, {
    key: 'config',
    set: function set() {
      var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      this._config = (0, _decorator.decorateConfig)(config);
    },
    get: function get() {
      return this._config;
    }
  }]);
  return ConfigLoader;
}();

exports.default = ConfigLoader;
module.exports = exports['default'];

},{"./decorator":162,"./localforage":165,"./meta":166,"./utils":167,"babel-runtime/helpers/asyncToGenerator":16,"babel-runtime/helpers/classCallCheck":17,"babel-runtime/helpers/createClass":18,"babel-runtime/regenerator":111,"lib/bg/prefs":153,"lib/config":155,"lib/profiler":168,"lib/request":169,"lib/tracking":177}],162:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawConfigDecorator = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

exports.decorateConfig = decorateConfig;
exports.deepCopyWithDefault = deepCopyWithDefault;

var _config = require('../config');

var _defaults = require('./defaults');

var _util = require('../util');

var _lodash = require('lodash');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function decorateConfig(config) {
  return RawConfigDecorator.decorate(config);
}

function deepCopyWithDefault(config) {
  var newConfig = (0, _lodash.merge)({ pageConfig: {} }, config);

  if (!newConfig.pageConfig) newConfig.pageConfig = {};
  return newConfig;
}

var RawConfigDecorator = exports.RawConfigDecorator = function () {
  function RawConfigDecorator() {
    (0, _classCallCheck3.default)(this, RawConfigDecorator);
  }

  (0, _createClass3.default)(RawConfigDecorator, null, [{
    key: 'decorate',
    value: function decorate(config) {
      var _this = this;

      return ['filterByVersion', 'withDefault', 'parseBooleans', 'parseBrowserValues', 'filterInvalidPageRegexp', 'collectPartials'].reduce(function (config, method) {
        return _this[method](config);
      }, config || {});
    }
  }, {
    key: 'withDefault',
    value: function withDefault(config) {
      config = deepCopyWithDefault(config);
      var defaultConfig = _defaults.PAGE_CONFIG && _defaults.PAGE_CONFIG.pageConfig || {};
      var overrideConfig = _defaults.OVERRIDE_PAGE_CONFIG || {};

      config.pageConfig = (0, _lodash.merge)({}, defaultConfig, config.pageConfig);
      if (!"true") config.pageConfig = (0, _extends5.default)({}, config.pageConfig, overrideConfig);

      return config;
    }

    /*
     * Filter out rules with version _less_ than current extension version
     * '*'' or missed equal to all versions
     */

  }, {
    key: 'filterByVersion',
    value: function filterByVersion(config) {
      var version = arguments.length <= 1 || arguments[1] === undefined ? (0, _config.getVersion)() : arguments[1];

      config = deepCopyWithDefault(config);
      var pageConfig = config.pageConfig;

      config.pageConfig = (0, _keys2.default)(pageConfig).filter(function (key) {
        var value = pageConfig[key],
            ruleVersion = value.version;

        return !ruleVersion || ruleVersion === '*' || (0, _util.versionComparator)(version, ruleVersion) !== 1;
      }).reduce(function (hsh, key) {
        return (0, _extends5.default)({}, hsh, (0, _defineProperty3.default)({}, key, pageConfig[key]));
      }, {});

      return config;
    }

    /**
     * Parses strings to boolean values.
     * As a result would produce JSON:
     * {
     *   'domain1.com': { enabled: false, matchPartOfUrl: true },
     *   'domain2.com': {
     *     enabled: true,
     *     matchPartOfUrl: false,
     *     pages: { '*notes': { enabled: false } }
     *   }
     * }
     */

  }, {
    key: 'parseBooleans',
    value: function parseBooleans(config) {
      function isTruly(value) {
        return !(value === false || value == 'false');
      }

      function isExistsOrFalse(value) {
        return value ? isTruly(value) : false;
      }

      config = deepCopyWithDefault(config);
      var pageConfig = config.pageConfig;

      (0, _keys2.default)(pageConfig).forEach(function (key) {
        if (!pageConfig[key]) pageConfig[key] = {};

        var rule = pageConfig[key];

        rule.enabled = isTruly(rule.enabled);
        rule.matchPartOfUrl = isExistsOrFalse(rule.matchPartOfUrl);

        if (rule.pages) {
          (0, _keys2.default)(rule.pages).forEach(function (key) {
            rule.pages[key].enabled = isTruly(rule.pages[key].enabled);
          });
        }
      });

      return config;
    }

    /**
     * Disable specific domain only if certain browser not supported
     * Don't change enabled value if domain list not specified
     *
     * Config may contains
     * `disabledBrowser: ['firefox', 'chrome', 'safari']`
     */

  }, {
    key: 'parseBrowserValues',
    value: function parseBrowserValues(config) {
      var browser = arguments.length <= 1 || arguments[1] === undefined ? (0, _util.getBrowser)() : arguments[1];

      config = deepCopyWithDefault(config);
      var pageConfig = config.pageConfig;

      (0, _keys2.default)(pageConfig).map(function (key) {
        var disabled = pageConfig[key] && pageConfig[key].disabledBrowsers;

        if (disabled && disabled.includes(browser)) {
          pageConfig[key].enabled = false;
        }
      });

      return config;
    }
  }, {
    key: 'filterInvalidPageRegexp',
    value: function filterInvalidPageRegexp(config) {
      config = deepCopyWithDefault(config);
      var pageConfig = config.pageConfig;

      (0, _keys2.default)(pageConfig).forEach(function (key) {
        var config = pageConfig[key];
        if (config.pages) {
          config.pages = (0, _keys2.default)(config.pages).filter(function (key) {
            try {
              return new RegExp(key);
            } catch (e) {
              return false;
            }
          }).reduce(function (hsh, key) {
            return (0, _extends5.default)({}, hsh, (0, _defineProperty3.default)({}, key, config.pages[key]));
          }, {});
        }
      });

      return config;
    }
  }, {
    key: 'collectPartials',
    value: function collectPartials(config) {
      config = deepCopyWithDefault(config);
      var pageConfig = config.pageConfig;
      config.partials = [];

      try {
        config.partials = (0, _keys2.default)(pageConfig).filter(function (domain) {
          return pageConfig[domain].matchPartOfUrl;
        }).map(function (domain) {
          return (0, _extends5.default)({ domain: domain }, pageConfig[domain]);
        });
      } catch (err) {
        console.warn('Cannot collect partials from config');
      }

      return config;
    }
  }]);
  return RawConfigDecorator;
}();

},{"../config":155,"../util":181,"./defaults":163,"babel-runtime/core-js/object/keys":10,"babel-runtime/helpers/classCallCheck":17,"babel-runtime/helpers/createClass":18,"babel-runtime/helpers/defineProperty":19,"babel-runtime/helpers/extends":20,"lodash":"lodash"}],163:[function(require,module,exports){
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

},{"babel-runtime/helpers/defineProperty":19,"lib/config":155,"lodash":"lodash"}],164:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _configBase = require('./config-base');

var _configBase2 = _interopRequireDefault(_configBase);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = new _configBase2.default();
module.exports = exports['default'];

},{"./config-base":160}],165:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var NAME = 'Grammarly';
var VERSION = 1.0;
var STORE_NAME = 'configuration';
var localforage = void 0;

try {
  localforage = require('localforage');
  localforage.config({
    name: NAME,
    version: VERSION,
    size: 4 * 1024 * 1024, // In case of fallback to WEBSQL
    storeName: STORE_NAME
  });
} catch (e) {
  (function () {
    console.error('Fallback to memory storage', e);
    var storage = {};

    localforage = {
      getItem: function getItem(key) {
        return _promise2.default.resolve(storage[key]);
      },
      setItem: function setItem(key, value) {
        storage[key] = value;
        return _promise2.default.resolve(value);
      },
      clear: function clear() {
        storage = {};
        _promise2.default.resolve(true);
      }
    };
  })();
}

exports.default = localforage;
module.exports = exports['default'];

},{"babel-runtime/core-js/promise":13,"localforage":"localforage"}],166:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _localforage = require('./localforage');

var _localforage2 = _interopRequireDefault(_localforage);

var _utils = require('./utils');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var META_KEY = 'lastConfigUpdate';

var Meta = function () {
  function Meta() {
    (0, _classCallCheck3.default)(this, Meta);
  }

  (0, _createClass3.default)(Meta, [{
    key: 'load',
    value: function () {
      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = this;
                _context.next = 3;
                return _localforage2.default.getItem(META_KEY);

              case 3:
                _context.t1 = _context.sent;

                _context.t0.set.call(_context.t0, _context.t1);

                return _context.abrupt('return', this);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load() {
        return ref.apply(this, arguments);
      }

      return load;
    }()
  }, {
    key: 'set',
    value: function set(meta) {
      var _ref = meta || {};

      var protocolVersion = _ref.protocolVersion;
      var version = _ref.version;
      var status = _ref.status;
      var info = _ref.info;
      var date = _ref.date;
      var interval = _ref.interval;

      this._meta = {
        date: Number(date) || 0,
        interval: (0, _utils.getInterval)(Number(interval)),
        protocolVersion: protocolVersion,
        version: version,
        status: status,
        info: info
      };

      return _localforage2.default.setItem(META_KEY, this._meta);
    }
  }, {
    key: 'config',
    get: function get() {
      return this._meta;
    }
  }]);
  return Meta;
}();

exports.default = Meta;
module.exports = exports['default'];

},{"./localforage":165,"./utils":167,"babel-runtime/helpers/asyncToGenerator":16,"babel-runtime/helpers/classCallCheck":17,"babel-runtime/helpers/createClass":18,"babel-runtime/regenerator":111}],167:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _defaults = require('./defaults');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function isValid(config) {
  if (!config || !config.pageConfig) return;
  if (!(0, _keys2.default)(config).length) return;
  if (!(0, _keys2.default)(config.pageConfig).length) return;
  if (config.protocolVersion && config.protocolVersion !== _defaults.PROTOCOL_VERSION) return;
  return true;
}

function getInterval(ms) {
  if (_defaults.PAGE_CONFIG_UPDATE_INTERVALS.includes(ms)) {
    return ms;
  } else {
    return _defaults.PAGE_CONFIG_DEFAULT_INTERVAL;
  }
}

exports.default = {
  isValid: isValid,
  getInterval: getInterval
};
module.exports = exports['default'];

},{"./defaults":163,"babel-runtime/core-js/object/keys":10}],168:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _timers = require('lib/timers');

var _timers2 = _interopRequireDefault(_timers);

var _lodash = require('lodash');

var _tracking = require('lib/tracking');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Profiler = function () {
  function Profiler() {
    var _this = this;

    (0, _classCallCheck3.default)(this, Profiler);
    this.timings = {};

    this.track = function () {
      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(opts, cb) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        var name, _opts, wait;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(0, _lodash.isPlainObject)(opts)) {
                  args.unshift(cb);
                  cb = opts;
                  opts = {};
                }

                name = cb.name + (opts.wait ? '__sync' : '');
                _opts = opts;
                wait = _opts.wait;

                _timers2.default.start(name);

                _context.prev = 5;

                if (!wait) {
                  _context.next = 11;
                  break;
                }

                _context.next = 9;
                return cb.apply(undefined, args);

              case 9:
                _context.next = 12;
                break;

              case 11:
                cb.apply(undefined, args);

              case 12:
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](5);
                throw _context.t0;

              case 17:
                _context.prev = 17;

                _this.timings[name] = _timers2.default.stop(name);
                return _context.finish(17);

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[5, 14, 17, 20]]);
      }));
      return function (_x, _x2, _x3) {
        return ref.apply(this, arguments);
      };
    }();
  }

  (0, _createClass3.default)(Profiler, [{
    key: 'start',
    value: function start(name) {
      _timers2.default.start(name);
    }
  }, {
    key: 'stop',
    value: function stop(name) {
      this.timings[name] = _timers2.default.stop(name);
    }
  }], [{
    key: 'start',
    value: function start(name) {
      _timers2.default.start(name);
    }
  }, {
    key: 'stop',
    value: function stop(name) {
      var max = arguments.length <= 1 || arguments[1] === undefined ? 30 * 1000 : arguments[1];

      var time = _timers2.default.stop(name);
      if (time > max) {
        console.warn('profiler_' + name + '_time_exceeded', time);
        (0, _tracking.call)('felog.warn', 'profiler_' + name + '_time_exceeded', { active_time: time });
      }
      return time;
    }
  }]);
  return Profiler;
}();

exports.default = Profiler;
module.exports = exports['default'];

},{"babel-runtime/helpers/asyncToGenerator":16,"babel-runtime/helpers/classCallCheck":17,"babel-runtime/helpers/createClass":18,"babel-runtime/regenerator":111,"lib/timers":173,"lib/tracking":177,"lodash":"lodash"}],169:[function(require,module,exports){
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

},{"./config":155,"./forge":157,"./message":159,"./util":181,"babel-runtime/core-js/json/stringify":5,"babel-runtime/core-js/promise":13,"babel-runtime/helpers/objectWithoutProperties":22,"lodash":"lodash","whatwg-fetch":"whatwg-fetch"}],170:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.SocketServer = SocketServer;
exports.getLog = getLog;

var _emitter = require('emitter');

var _emitter2 = _interopRequireDefault(_emitter);

var _websocket = require('websocket');

var _websocket2 = _interopRequireDefault(_websocket);

var _message = require('lib/message');

var _message2 = _interopRequireDefault(_message);

var _tracking = require('lib/tracking');

var _timers = require('lib/timers');

var _timers2 = _interopRequireDefault(_timers);

var _util = require('lib/util');

var _config = require('lib/config');

var _cookie = require('lib/bg/cookie');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var sockets = {};
var log = [];

function onError(e) {
  if (e == 'disconnected') return;
  var data = {};
  if (typeof e == 'string') {
    data.msg = e;
  } else if (e.error) {
    data.readyState = e.error.currentTarget && e.error.currentTarget.readyState;
    data.returnValue = e.error.returnValue;
  }

  (0, _tracking.call)('felog.error', 'socket_fail_bg', data);

  console.error('capi error', e);
  if (!window.emit) (0, _emitter2.default)(window);
  window.emit('bgerror', e || 'when send message to the socket');
}

function SocketServer(connection) {
  var me = {};

  window.socketServer = me;

  _message2.default.on('iframe-mode', function (data) {
    console.log('IFRAME MODE', data.id, sockets);
    sockets[data.id].iframeMode(data.iframeMode);
  }, onError, true);

  _message2.default.on('socket-client', onMessage, onError, true);

  me.sockets = sockets;

  me.toString = function () {
    return '[object SocketServer]';
  };

  var capiSettings = {};
  me.wsReconnect = function () {
    var _capiSettings = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    (0, _assign2.default)(capiSettings, _capiSettings);
    (0, _values2.default)(sockets).forEach(function (ws) {
      return ws.reconnect();
    });
  };

  return me;

  //============

  function onMessage(data, cb, sender) {
    if (!data) return;

    var socketId = data.socketId,
        socket = sockets[socketId],
        method = data.method,
        isClose = method == 'close';

    if (!socket && isClose) return;

    if (connection.get().authToCapiDegradation) return;

    if (!socket) {
      socket = BackgroundSocket(data, onrelease, sender, connection);
      sockets[socketId] = socket;
    }

    // send new capi settings
    // capiSettings != null | undefined
    // data != null | undefined
    data.arg && data.arg.action == 'start' && (0, _assign2.default)(data.arg, capiSettings);

    if (method) {
      if (method == 'connect') {
        connection.refreshUser(true, 'onSessionStart').then(function () {
          return socket[method](data.arg);
        });
      } else socket[method](data.arg);

      if (!"true") {
        log.push((0, _extends3.default)({ method: method }, data.arg));
      }

      if (isClose) onrelease(socketId);
    }
  }

  function onrelease(socketId) {
    if (!sockets[socketId]) return;
    sockets[socketId].close();
    //should not emit anything after closing
    sockets[socketId].emit = function (event, msg) {};
    delete sockets[socketId];
  }
}

var start = { //mock for connection fixer
  docid: (0, _util.guid)(),
  client: 'extension',
  protocolVersion: '1.0',
  action: 'start',
  id: 0
};

var MAX_RECONNECT_TIME = 2 * 60 * 1000;

var BackgroundSocket = function BackgroundSocket(config, onrelease, sender, connection) {
  var connectionFixer = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var mark, count;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              (0, _values2.default)(sockets).forEach(function (socket) {
                socket.close();
                socket.release();
              });

              mark = 'capiConnectionResolver';

              _timers2.default.start(mark);
              _context.next = 5;
              return new _promise2.default(function (resolve) {
                return tryToConnect(resolve);
              });

            case 5:
              count = _context.sent;

              connection.update({ authToCapiDegradation: false });
              (0, _values2.default)(sockets).forEach(function (socket) {
                return socket.reconnect();
              });

              (0, _tracking.call)('statsc.ui.timing', 'stability:capi_restored_after_auth_degradation', _timers2.default.stop(mark));
              (0, _tracking.call)('felog.warn', 'stability.capi_restored_after_auth_degradation', { count: count });

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    return function connectionFixer() {
      return ref.apply(this, arguments);
    };
  }();

  var logFailedReconnect = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_ref) {
      var count = _ref.count;
      var error = _ref.error;
      var token;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              token = 'exception';
              _context2.prev = 1;
              _context2.next = 4;
              return (0, _cookie.getToken)();

            case 4:
              token = _context2.sent;
              _context2.next = 9;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2['catch'](1);

            case 9:
              console.warn('log failed reconnect', count, error);
              (0, _tracking.call)('felog.info', 'stability:capi_error_in_fixer', { token: token, count: count, error: error });

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[1, 7]]);
    }));
    return function logFailedReconnect(_x2) {
      return ref.apply(this, arguments);
    };
  }();

  var tryToConnect = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(resolve) {
      var RECONNECT_TIME = arguments.length <= 1 || arguments[1] === undefined ? 10 * 1000 : arguments[1];
      var count = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
      var ws, close;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.warn('Fixer inited, will try to connect in ', RECONNECT_TIME / 1000, 's., count:', count);
              _context3.next = 3;
              return (0, _util.delay)(RECONNECT_TIME);

            case 3:
              _context3.next = 5;
              return connection.refreshUser(false, 'recover_after_capi_error');

            case 5:
              ws = (0, _websocket2.default)({ url: _config.URLS.capi });

              close = function close() {
                ws.close();
                ws.release();
                ws.emit = _util._f;
                ws = null;
              };

              ws.emit = function (event) {
                var msg = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                if (event == 'connect') {
                  return ws.send(start);
                }

                if (msg.action && msg.action == 'start') {
                  close();
                  console.warn('yay, we fixed capi connection!');
                  return resolve(count);
                }

                if (msg.error || event == 'error') {
                  close();
                  (0, _tracking.call)('statsc.ui.increment', 'stability:capi_error_in_fixer');
                  if (count % 10 == 0) logFailedReconnect({ count: count, error: msg.error });
                  console.warn('still on error(', event, msg);
                  tryToConnect(resolve, Math.min(MAX_RECONNECT_TIME, RECONNECT_TIME * 2), count + 1);
                }
              };

              ws.connect();

            case 9:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
    return function tryToConnect(_x3, _x4, _x5) {
      return ref.apply(this, arguments);
    };
  }();

  var ws = (0, _websocket2.default)(config);
  var socketId = config.socketId;
  var _iframeMode = void 0;var releaseCount = 0;var tooFrequentReleaseTracked = false;
  var socketEmit = ws.emit;
  var closedByMe = false;
  var reconnectInProgress = void 0;

  (0, _assign2.default)(ws, {
    emit: emit,
    reconnect: reconnect,
    iframeMode: iframeMode,
    toString: function toString() {
      return '[object BackgroundSocket]';
    }
  });

  return ws;

  function emit(event, msg) {
    socketEmit(event, msg);

    if (event == 'disconnect' && closedByMe) {
      closedByMe = false;
      return;
    }

    var releaseTimer = setTimeout(release, 5000);
    var type = _iframeMode ? 'socket-server-iframe' : 'socket-server';

    console.log('from ws', event, socketId, msg, type);

    if (!"true") {
      log.push((0, _extends3.default)({ event: event }, msg));
    }

    if (msg && msg.error && msg.error == 'not_authorized') {
      return tryToFixSession(ws);
    }

    _message2.default.emitTo(sender, type, { socketId: socketId, event: event, msg: msg, id: (0, _util.guid)() }, function (msg) {
      return msg && clearTimeout(releaseTimer);
    }, onError);
  }

  function reconnect() {
    if (reconnectInProgress) return;
    reconnectInProgress = true;
    _reconnect().then(function () {
      return reconnectInProgress = false;
    });
  }

  function _reconnect() {
    var finish = void 0,
        promise = new _promise2.default(function (resolve) {
      return finish = resolve;
    });

    ws.one('connect', finish);

    if (ws.isConnected()) {
      ws.one('disconnect', function () {
        return setTimeout(ws.connect.bind(null, true), 0);
      });
      closedByMe = true;
      ws.close();
    } else {
      ws.connect(true);
    }

    return promise;
  }

  function iframeMode(isOn) {
    _iframeMode = isOn;
    console.log('USE EXT SOCKET', isOn);
  }

  function release() {
    console.log('CLOSE SOCKET');
    releaseCount++;
    if (releaseCount > 7 && !tooFrequentReleaseTracked) {
      (0, _tracking.call)('felog.warn', 'too_frequent_socket_release', { 'release_count': releaseCount });
      tooFrequentReleaseTracked = true;
    }
    var statscKey = iframeMode ? 'socket_timeout_close_iframe:stability' : 'socket_timeout_close:stability';
    (0, _tracking.call)('statsc.ui.increment', statscKey);
    ws.close();
    ws.release();
    onrelease();
  }

  function tryToFixSession(ws) {
    var _connection$get = connection.get();

    var authToCapiDegradation = _connection$get.authToCapiDegradation;
    var authDegradation = _connection$get.authDegradation;
    var cookiesDisabled = _connection$get.cookiesDisabled;

    if (authToCapiDegradation) {
      (0, _tracking.call)('felog.error', 'stability.capi_error_not_authorized_loop', { authDegradation: authDegradation, cookiesDisabled: cookiesDisabled });
      console.error('User not authorized... Recovery fail =(');
      return;
    }

    if (cookiesDisabled) {
      (0, _tracking.call)('felog.error', 'stability.capi_error_disabled_cookies');
      console.error('User disabled cookies... =(');
    }

    console.warn('User not authorized... Try to recover');
    connection.update({ authToCapiDegradation: true });
    connectionFixer();
  }
};

function getLog() {
  var result = log.slice(0);
  log.length = 0;
  return result;
}

},{"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/object/values":12,"babel-runtime/core-js/promise":13,"babel-runtime/helpers/asyncToGenerator":16,"babel-runtime/helpers/extends":20,"babel-runtime/regenerator":111,"emitter":"emitter","lib/bg/cookie":122,"lib/config":155,"lib/message":159,"lib/timers":173,"lib/tracking":177,"lib/util":181,"websocket":"websocket"}],171:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.SocketClient = SocketClient;

var _emitter = require('emitter');

var _emitter2 = _interopRequireDefault(_emitter);

var _util = require('lib/util');

var _timers = require('lib/timers');

var _timers2 = _interopRequireDefault(_timers);

var _message = require('lib/message');

var _message2 = _interopRequireDefault(_message);

var _tracking = require('lib/tracking');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var sockets = {};

function onError(e) {
  if (e == 'disconnected') return;
  var data = {};
  if (typeof e == 'string') {
    data.msg = e;
  } else if (e.error) {
    data.readyState = e.error.currentTarget && e.error.currentTarget.readyState;
    data.returnValue = e.error.returnValue;
  }

  (0, _tracking.call)('felog.error', 'socket_fail_cs', data);

  console.error('capi error', e);
  if (!window.emit) (0, _emitter2.default)(window);
  window.emit('bgerror', e || 'when send message to the socket');
}

function portError(e) {
  _message2.default.emitError(e);
}

function SocketClient(_ref) {
  var _ref$socketId = _ref.socketId;
  var socketId = _ref$socketId === undefined ? (0, _util.guid)() : _ref$socketId;
  var url = _ref.url;
  var useStandBy = _ref.useStandBy;

  var me = (0, _emitter2.default)({}),
      listening = false,
      methods = ['connect', 'send', 'close', 'reconnect', 'release', 'wsPlay', 'wsPause'];

  methods.forEach(function (method) {
    return me[method] = send.bind(null, method);
  });

  me.one('connect', function () {
    sockets[socketId] = sockets[socketId] || socketId;
    _timers2.default.start(socketId);
    (0, _tracking.call)('statsc.ui.timing', 'activity:socket.open', (0, _keys2.default)(sockets).length);
  });

  me.one('disconnect', cleanSocket);
  me.on('error', onError);

  me.socketId = socketId;
  me.toString = function () {
    return '[object SocketClient]';
  };

  return me;

  function send(method, arg) {
    var msg = { socketId: socketId, method: method, arg: arg, url: url, useStandBy: useStandBy };

    if (!listening) listenMessages();

    _message2.default.emitBackground('socket-client', msg, null, portError);

    if (method == 'close') {
      cleanSocket();
    }
  }

  function cleanSocket() {
    me.off('disconnect', cleanSocket);
    _message2.default.off('socket-server', onMessage, portError);
    listening = false;

    if (!sockets[socketId]) return;
    delete sockets[socketId];
    (0, _tracking.call)('statsc.ui.timing', 'activity:socket.close', _timers2.default.stop(socketId));
  }

  function listenMessages() {
    listening = true;
    _message2.default.on('socket-server', onMessage, portError);
  }

  function onMessage(data, cb) {
    if (data.socketId != socketId) return;
    var msg = data.msg || {};
    // console.log('in client', data.event, socketId, data.id, msg)
    if (msg.action && msg.action.toLowerCase() == 'error') {
      (0, _tracking.call)('statsc.ui.increment', 'stability:capi_error');
      (0, _tracking.call)('felog.error', 'stability.capi_error', msg);
    }

    cb('ok');
    me.emit(data.event, data.msg);
  }
}

},{"babel-runtime/core-js/object/keys":10,"emitter":"emitter","lib/message":159,"lib/timers":173,"lib/tracking":177,"lib/util":181}],172:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Socket;

var _forge = typeof window !== "undefined" ? window['forge'] : typeof global !== "undefined" ? global['forge'] : null;

var _forge2 = _interopRequireDefault(_forge);

var _util = require('lib/util');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function Socket(config) {
  if (!_forge2.default && !window.socketServer || window.gr___sandbox) require('./bg').SocketServer(config);

  if (!(0, _util.isBg)()) {
    return require('./cs').SocketClient(config);
  }

  return require('./bg').SocketServer(config);
}
module.exports = exports['default'];

}).call(this,typeof window !== "undefined" ? window : {})
},{"./bg":170,"./cs":171,"lib/util":181}],173:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var timers = {};
exports.default = {
  start: function start(id) {
    timers[id] = Date.now();
  },
  stop: function stop(id) {
    var passed = this.passed(id);
    delete timers[id];
    return passed;
  },
  passed: function passed(id) {
    if (!id || !timers[id]) return 0;
    return Date.now() - timers[id];
  }
};
module.exports = exports['default'];

},{}],174:[function(require,module,exports){
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

},{"../bg/cookie":122,"../config":155,"../location":158,"../util":181,"./call":175,"./tracker":180,"@grammarly-npm/alphanumeric":1,"babel-runtime/helpers/asyncToGenerator":16,"babel-runtime/regenerator":111,"cookie":"cookie","lib/forge":157,"local-storage":"local-storage","tracker":"tracker","vendor/mixpanel":"vendor/mixpanel","vendor/mixpanel-2.2":"vendor/mixpanel-2.2"}],175:[function(require,module,exports){
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

},{"../message":159,"../util":181,"./felogPixel":176,"./statscPixel":179,"./tracker":180,"babel-runtime/helpers/extends":20,"babel-runtime/helpers/toConsumableArray":25}],176:[function(require,module,exports){
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

},{"../config":155,"babel-runtime/core-js/json/stringify":5}],177:[function(require,module,exports){
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

},{"../config":155,"../message":159,"../util":181,"./bgonly":174,"./call":175,"./on":178,"babel-runtime/helpers/toConsumableArray":25,"cookie":"cookie"}],178:[function(require,module,exports){
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

},{"../bg/prefs":153,"../config":155,"../util":181,"./call":175,"babel-runtime/helpers/asyncToGenerator":16,"babel-runtime/helpers/defineProperty":19,"babel-runtime/helpers/slicedToArray":24,"babel-runtime/regenerator":111}],179:[function(require,module,exports){
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

},{"../config":155,"../util":181,"babel-runtime/core-js/json/stringify":5}],180:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return window.tracker;
};

module.exports = exports['default'];

},{}],181:[function(require,module,exports){
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

},{"babel-runtime/core-js/object/keys":10,"babel-runtime/core-js/promise":13,"babel-runtime/helpers/asyncToGenerator":16,"babel-runtime/helpers/defineProperty":19,"babel-runtime/helpers/extends":20,"babel-runtime/helpers/toConsumableArray":25,"babel-runtime/regenerator":111,"local-storage":"local-storage","lodash":"lodash","non-crypto-hash":"non-crypto-hash"}]},{},[119]);
