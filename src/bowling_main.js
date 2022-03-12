"use strict";
exports.__esModule = true;
exports.Bowling = void 0;
var Bowling = /** @class */ (function () {
    function Bowling() {
    }
    Bowling.prototype.divideInFrames = function (score) {
        var frames = [];
        score.forEach(function (scr, indx, array) {
            var aFrame = { roll1: 0, roll2: 0, score: 0 };
            if (indx % 2 === 0 && indx < score.length - 1) {
                indx === 18 ? frames.push({ roll1: scr, roll2: array[indx + 1], roll3: array[indx + 2], score: 0 }) : frames.push({ roll1: scr, roll2: array[indx + 1], score: 0 });
            }
        });
        return frames;
    };
    Bowling.prototype.isStrike = function (aFrame) {
        return aFrame.roll1 === 10;
    };
    Bowling.prototype.isSpare = function (aFrame) {
        return aFrame.roll1 + aFrame.roll2 === 10;
    };
    Bowling.prototype.totalScore = function (input) {
        var _this = this;
        var frames = this.divideInFrames(input);
        var finalScore = 0;
        frames.forEach(function (aFrame, indx, array) {
            if (!_this.isStrike(aFrame) && !_this.isSpare(aFrame))
                aFrame.score = aFrame.roll1 + aFrame.roll2;
            else if (_this.isStrike(aFrame)) {
                if (indx != frames.length - 2) { //till 8th index
                    if (indx === frames.length - 1) //9th index                       
                        aFrame.score = 30;
                    else
                        aFrame.score = frames[indx + 1].roll1 === 10 ? 10 + frames[indx + 1].roll1 + frames[indx + 2].roll1 : 10 + frames[indx + 1].roll1 + frames[indx + 1].roll2;
                }
                else
                    aFrame.score = indx != frames.length - 1 ? 10 + frames[indx + 1].roll1 + frames[indx + 1].roll2 : aFrame.score = 30;
            }
            else if (_this.isSpare(aFrame)) {
                if (indx != frames.length - 1) //till 8th index
                    aFrame.score = 10 + frames[indx + 1].roll1;
                else { //9th index
                    if (aFrame.roll3)
                        aFrame.score = aFrame.roll1 + aFrame.roll2 + aFrame.roll3;
                }
            }
            finalScore += aFrame.score;
        });
        return finalScore;
    };
    return Bowling;
}());
exports.Bowling = Bowling;
