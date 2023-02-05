"use strict";
exports.__esModule = true;
exports.Board = exports.Square = exports.SquareState = void 0;
var SquareState;
(function (SquareState) {
    SquareState[SquareState["Empty"] = 0] = "Empty";
    SquareState[SquareState["BlackPiece"] = 1] = "BlackPiece";
    SquareState[SquareState["WhitePiece"] = 2] = "WhitePiece";
    SquareState[SquareState["BlackKing"] = 3] = "BlackKing";
    SquareState[SquareState["WhiteKing"] = 4] = "WhiteKing";
})(SquareState = exports.SquareState || (exports.SquareState = {}));
var Square = /** @class */ (function () {
    function Square(x, y, state) {
        this.x = x;
        this.y = y;
        this.state = state;
    }
    return Square;
}());
exports.Square = Square;
var Board = /** @class */ (function () {
    function Board() {
        this.squares = [];
        for (var i = 0; i < 8; i++) {
            this.squares[i] = [];
            for (var j = 0; j < 8; j++) {
                var state = SquareState.Empty;
                if ((i + j) % 2 === 1) {
                    if (i < 3) {
                        state = SquareState.BlackPiece;
                    }
                    else if (i > 4) {
                        state = SquareState.WhitePiece;
                    }
                }
                this.squares[i][j] = new Square(i, j, state);
            }
        }
    }
    Board.prototype.isMoveValid = function (board, startRow, startCol, endRow, endCol) {
        // Check if the starting square is occupied by a piece of the correct color
        if (board[startRow][startCol].state !== SquareState.BlackPiece && board[startRow][startCol].state !== SquareState.WhitePiece) {
            console.log('Starting square is not occupied by a piece.');
            return false;
        }
        // Check if the ending square is not occupied
        if (board[endRow][endCol].state !== SquareState.Empty) {
            console.log('Ending square is already occupied.');
            return false;
        }
        // Check if the move is a diagonal move
        if (Math.abs(startRow - endRow) !== Math.abs(startCol - endCol)) {
            console.log('Move is not a diagonal move.');
            return false;
        }
        // Check if the piece is moving in the correct direction
        if (board[startRow][startCol].state === SquareState.BlackPiece) {
            if (endRow > startRow) {
                console.log('Black piece must move in the opposite direction.');
                return false;
            }
        }
        else if (board[startRow][startCol].state === SquareState.WhitePiece) {
            if (endRow < startRow) {
                console.log('White piece must move in the opposite direction.');
                return false;
            }
        }
        // Check if the move is a single step or a capture
        if (Math.abs(startRow - endRow) > 2) {
            console.log('Move is too long.');
            return false;
        }
        // Check if a capture is being made
        if (Math.abs(startRow - endRow) === 2) {
            var capturedRow = (startRow + endRow) / 2;
            var capturedCol = (startCol + endCol) / 2;
            if (board[capturedRow][capturedCol].state === SquareState.Empty) {
                console.log('No piece was captured.');
                return false;
            }
        }
        // If all checks passed, the move is valid
        console.log("Valid Move");
        return true;
    };
    return Board;
}());
exports.Board = Board;
