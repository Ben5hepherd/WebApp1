String.prototype.htmlEncode = function () {
    return $("<div />").text(this).html();
};

String.prototype.format = function () {
    var args = [];
    for (var _i = 0; _i < (arguments.length - 0); _i++) {
        args[_i] = arguments[_i + 0];
    }
    var matchEvaluator = function (match, index) {
        return typeof args[index] != 'undefined' ? args[index].toString() : match;
    };

    return this.replace(/{(\d+)}/g, matchEvaluator);
};