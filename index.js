"use strict";
exports.__esModule = true;
var checkers_1 = require("./checkers");
var simulation_1 = require("./simulation");
var testRuns = 1000000;
var board = new checkers_1.Board();
console.log(board.squares);
var checkers = new simulation_1.Simulation();
var valids = 0;
for (var ee = 0; ee < testRuns; ee++) {
    var move = checkers.getMove();
    console.log(move);
    var valid = board.isMoveValid(board.squares, move[0], move[1], move[2], move[3]);
    console.log("RUN NUMBER :" + ee);
    if (valid == true) {
        valids++;
        console.log("MOVE IS VALID !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }
}
console.log("Test Runs : " + testRuns);
console.log("Valid Moves : " + valids);
