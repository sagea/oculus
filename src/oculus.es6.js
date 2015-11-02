'use strict';
class utility {
    each (arr, callback) {
        for (let i = 0, length = arr.length; i < length; i++) {
            callback(arr[i], i, arr);
        }
    }

    getOptionValue (arr, str) {
        if (typeof arr !== 'object' && typeof str !== 'string') {
            return "";
        }

        if (str === "") {
            return arr;
        }
        var val = arr, asd = str.split('.'), i = -1, l = asd.length;
        while (++i < l && (val = val[asd[i]])) {
        }
        return val || "";
    }
}

class OculusRepeat extends utility {
    constructor (obj) {
        super(obj);
        this.name = obj.name;
        this.data = obj.data;
        this.template = obj.template;
    }

    render () {
        super.each(document.querySelectorAll('[data-oculus="' + this.name + '"]'), node => {
            node.innerHTML = '';
            var elem = document.createElement(node.tagName);
            super.each(this.data, (datum, index) => {
                elem.innerHTML = this.template.replace(/{(.*?)}/g, (search, text) => {
                    return super.getOptionValue(datum, text) || (text === '$index' ? index + 1 : '');
                });
                node.appendChild(elem.firstChild);
            });
        });
    }
}
