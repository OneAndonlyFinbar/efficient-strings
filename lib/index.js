"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EfficientString = void 0;
var EfficientString = /** @class */ (function () {
    function EfficientString(string, efficiency) {
        this.string = string;
        this.efficiency = efficiency;
        return this;
    }
    EfficientString.prototype.build = function () {
        var start = Date.now();
        var res = functions[this.efficiency.toString()](this.string);
        var end = Date.now();
        this.buildTime = end - start;
        return res;
    };
    return EfficientString;
}());
exports.EfficientString = EfficientString;
var functions = {
    '1': function (string) {
        return string;
    },
    '2': function (string) {
        var str = '';
        var chars = string.split('');
        for (var _i = 0, chars_1 = chars; _i < chars_1.length; _i++) {
            var char = chars_1[_i];
            str += char;
        }
        return str;
    },
    '3': function (string) {
        var str = '';
        var chars = string.split('');
        var allChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};:,./<>?`~';
        for (var _i = 0, chars_2 = chars; _i < chars_2.length; _i++) {
            var char = chars_2[_i];
            for (var _a = 0, allChars_1 = allChars; _a < allChars_1.length; _a++) {
                var char2 = allChars_1[_a];
                if (char === char2)
                    str += char;
            }
        }
        return str;
    },
    '4': function (string) {
        var str = '';
        var chars = string.split('');
        var allChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};:,./<>?`~';
        for (var _i = 0, chars_3 = chars; _i < chars_3.length; _i++) {
            var char = chars_3[_i];
            var randomChar = allChars[Math.floor(Math.random() * allChars.length)];
            while (char !== randomChar)
                randomChar = allChars[Math.floor(Math.random() * allChars.length)];
            str += char;
        }
        return str;
    },
    '5': function (string) {
        var str = '';
        var allChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};:,./<>?`~';
        str = Array(string.length).fill(0).map(function () { return allChars[Math.floor(Math.random() * allChars.length)]; }).join('');
        while (str !== string)
            str = Array(string.length).fill(0).map(function () { return allChars[Math.floor(Math.random() * allChars.length)]; }).join('');
        return str;
    }
};
