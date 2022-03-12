"use strict";
exports.__esModule = true;
var bowling_main_1 = require("../src/bowling_main");
//const totalScore = require('../src/bowling_main')
describe('totalScore', function () {
    test('It will display total score as per all ones in each frame', function () {
        var iinput = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0];
        var output = 20;
        var bowling = new bowling_main_1.Bowling();
        var result = bowling.totalScore(iinput);
        expect(result).toBe(output);
    });
});
