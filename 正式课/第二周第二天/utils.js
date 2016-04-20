var utils = {
    /*listToArray: function (similarArray) {
     var a = [];
     try {
     a = Array.prototype.slice.call(similarArray);
     } catch (e) {
     alert();
     var a = [];
     for (var i = 0; i < similarArray.length; i++) {
     a[a.length] = similarArray[i];
     }
     }
     return a;
     },*/
    jsonParse: function (jsonStr) {
        return 'JSON' in window ? JSON.parse(jsonStr) : eval("(" + jsonStr + ")");
    },

    listToArray: function (similarAry) {
        var ary = [];
        try {
            ary = ary.slice.call(similarAry)
        } catch (e) {
            for (var i = 0; i < similarAry.length; i++) {
                ary[ary.length] = similarAry[i];
            }
        }
        return ary;
    }
}

