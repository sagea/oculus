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