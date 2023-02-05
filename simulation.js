"use strict";
exports.__esModule = true;
exports.Simulation = void 0;
var Simulation = /** @class */ (function () {
    function Simulation() {
        this.firstPlayer = Math.floor(Math.random() * 2) === 0 ? 'Black' : 'White';
        console.log("".concat(this.firstPlayer, " will move first."));
        this.startRow = Math.floor(Math.random() * 8);
        this.startCol = Math.floor(Math.random() * 8);
        console.log("".concat(this.firstPlayer, "'s piece is located at row ").concat(this.startRow, " and column ").concat(this.startCol, "."));
        this.endRow = Math.floor(Math.random() * 8);
        this.endCol = Math.floor(Math.random() * 8);
        console.log("".concat(this.firstPlayer, " will move to row ").concat(this.endRow, " and column ").concat(this.endCol, "."));
    }
    Simulation.prototype.getMove = function () {
        this.startRow = Math.floor(Math.random() * 8);
        this.startCol = Math.floor(Math.random() * 8);
        this.endRow = Math.floor(Math.random() * 8);
        this.endCol = Math.floor(Math.random() * 8);
        return [this.startRow, this.startCol, this.endRow, this.endCol];
    };
    return Simulation;
}());
exports.Simulation = Simulation;
