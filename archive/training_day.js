"use strict";
exports.__esModule = true;
var CheckersGame_1 = require("./CheckersGame");
var fs = require("fs");
var trainingData = [];
var chess = new CheckersGame_1.CheckersGame();
for (var i = 0; i < 1000; i++) {
    var move = chess.getRandomMove();
    var board = chess.getBoard();
    trainingData.push(board);
    chess.updateBoard(move[0], move[1]);
}
fs.writeFile('training_data.json', JSON.stringify(trainingData), function (err) {
    if (err)
        throw err;
    console.log('Training data has been saved to file.');
});
