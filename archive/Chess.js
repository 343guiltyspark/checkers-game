"use strict";
exports.__esModule = true;
exports.CheckersGame = void 0;
var CheckersGame = /** @class */ (function () {
    function CheckersGame() {
        this.board = [];
        for (var i = 0; i < 8; i++) {
            this.board.push(Array.from({ length: 8 }, function () { return 0; }));
        }
        this.turn = 'red';
    }
    CheckersGame.prototype.isValidMove = function (fromX, fromY, toX, toY) {
        if (fromX < 0 || fromX > 7 || fromY < 0 || fromY > 7 || toX < 0 || toX > 7 || toY < 0 || toY > 7) {
            return false;
        }
        if (this.board[fromX][fromY] === 0) {
            return false;
        }
        if (this.board[toX][toY] !== 0) {
            return false;
        }
        if (this.turn === 'red' && this.board[fromX][fromY] < 0) {
            return false;
        }
        if (this.turn === 'black' && this.board[fromX][fromY] > 0) {
            return false;
        }
        var dx = toX - fromX;
        var dy = toY - fromY;
        if (this.turn === 'red' && dx < 0) {
            return false;
        }
        if (this.turn === 'black' && dx > 0) {
            return false;
        }
        if (Math.abs(dx) !== Math.abs(dy)) {
            return false;
        }
        if (Math.abs(dx) !== 1 && Math.abs(dx) !== 2) {
            return false;
        }
        if (Math.abs(dx) === 2) {
            var x = (fromX + toX) / 2;
            var y = (fromY + toY) / 2;
            if (this.board[x][y] <= 0) {
                return false;
            }
        }
        return true;
    };
    CheckersGame.prototype.makeMove = function (fromX, fromY, toX, toY) {
        if (!this.isValidMove(fromX, fromY, toX, toY)) {
            return false;
        }
        var dx = toX - fromX;
        var dy = toY - fromY;
        this.board[toX][toY] = this.board[fromX][fromY];
        this.board[fromX][fromY] = 0;
        if (Math.abs(dx) === 2) {
            var x = (fromX + toX) / 2;
            var y = (fromY + toY) / 2;
            this.board[x][y] = 0;
        }
        this.turn = this.turn === 'red' ? 'black' : 'red';
        return true;
    };
    CheckersGame.prototype.getTurn = function () {
        return this.turn;
    };
    CheckersGame.prototype.getBoard = function () {
        return this.board;
    };
    return CheckersGame;
}());
exports.CheckersGame = CheckersGame;
