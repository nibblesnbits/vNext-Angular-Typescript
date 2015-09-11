/// <reference path="../../typings/tsd.d.ts" />
var tests;
(function (tests) {
    var Mocks = (function () {
        function Mocks(chance) {
            this.letterPool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            this.chance = chance;
        }
        Mocks.prototype.generateRandomObjects = function (count) {
            if (!count)
                count = 3;
            var commands = new Array();
            for (var i = 0; i < count; i++) {
                commands.push({
                    guid: this.chance.string({ length: 32, pool: this.letterPool })
                });
            }
            return commands;
        };
        Mocks.prototype.generateRandomStrings = function (count) {
            return Array.apply(null, Array(count)).map(function () { return this.chance.string(); });
        };
        return Mocks;
    })();
    tests.Mocks = Mocks;
})(tests || (tests = {}));
