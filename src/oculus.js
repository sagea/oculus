
(function (root, factory) {
    if(typeof define === 'function' && define.amd){
        define(function(){
            return factory();
        });
    } else if(typeof exports === 'object'){
        module.exports = factory;
    } else {
        root.oculus = factory();
    }
}(this, function () {

    function isArray (obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }

    function OculusTest (obj) {
        this.name = obj.name;
        this.data = obj.data;
        this.matches = obj.template.match(/{(.*?)}/g);
        this.template = obj.template;
    }

    OculusTest.prototype.render = function () {
        this.each(document.querySelectorAll('[data-oculus="' + this.name + '"]'), function (node) {
            node.innerHTML = '';
            var elem = document.createElement(node.tagName);
            this.each(this.data, function (datum) {
                elem.innerHTML = this.processTemplate(datum);
                node.appendChild(elem.firstChild);
            });
        });
    };

    OculusTest.prototype.processTemplate = function (data) {
        var tmp = this.template;
        this.each(this.matches, function (match) {
            match = isArray(data) ? +match || match : match;
            var value = match.substring(1, match.length - 1).trim();
            tmp = tmp.replace(match, data[value] || "");
        });
        return tmp;
    };

    OculusTest.prototype.each = function (arr, callback) {
        var length = arr.length;
        for (var i = 0; i < length; i++) {
            callback.call(this, arr[i], i, arr);
        }
    };


    return {
        create: function (obj) {
            return new OculusTest(obj);
        }
    };

}));