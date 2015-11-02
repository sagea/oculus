(function (root) {
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var utility = (function () {
    function utility() {
        _classCallCheck(this, utility);
    }

    _createClass(utility, [{
        key: 'each',
        value: function each(arr, callback) {
            for (var i = 0, _length = arr.length; i < _length; i++) {
                callback(arr[i], i, arr);
            }
        }
    }, {
        key: 'getOptionValue',
        value: function getOptionValue(arr, str) {
            if (typeof arr !== 'object' && typeof str !== 'string') {
                return "";
            }

            if (str === "") {
                return arr;
            }
            var val = arr,
                asd = str.split('.'),
                i = -1,
                l = asd.length;
            while (++i < l && (val = val[asd[i]])) {}
            return val || "";
        }
    }]);

    return utility;
})();

var OculusRepeat = (function (_utility) {
    _inherits(OculusRepeat, _utility);

    function OculusRepeat(obj) {
        _classCallCheck(this, OculusRepeat);

        _get(Object.getPrototypeOf(OculusRepeat.prototype), 'constructor', this).call(this, obj);
        this.name = obj.name;
        this.data = obj.data;
        this.template = obj.template;
    }

    _createClass(OculusRepeat, [{
        key: 'render',
        value: function render() {
            var _this = this;

            _get(Object.getPrototypeOf(OculusRepeat.prototype), 'each', this).call(this, document.querySelectorAll('[data-oculus="' + this.name + '"]'), function (node) {
                node.innerHTML = '';
                var elem = document.createElement(node.tagName);
                _get(Object.getPrototypeOf(OculusRepeat.prototype), 'each', _this).call(_this, _this.data, function (datum, index) {
                    elem.innerHTML = _this.template.replace(/{(.*?)}/g, function (search, text) {
                        return _get(Object.getPrototypeOf(OculusRepeat.prototype), 'getOptionValue', _this).call(_this, datum, text) || (text === '$index' ? index + 1 : '');
                    });
                    node.appendChild(elem.firstChild);
                });
            });
        }
    }]);

    return OculusRepeat;
})(utility);
//# sourceMappingURL=oculus.js.map

   root.oculus = {
      Create: function(obj){
          return new OculusRepeat(obj)
      }
   }
}(this));