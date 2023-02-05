
import {CheckersGame} from './CheckersGame'
import * as fs from 'fs';


const trainingData: number[][][]= [];
const chess = new CheckersGame();

for (let i = 0; i < 1000; i++) {
  const move = chess.getRandomMove();
  const board  = chess.getBoard();
  trainingData.push(board);
  chess.updateBoard(move[0], move[1]);
}

fs.writeFile('training_data.json', JSON.stringify(trainingData), (err) => {
  if (err) throw err;
  console.log('Training data has been saved to file.');
});
