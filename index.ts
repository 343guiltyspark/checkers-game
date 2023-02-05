import { Console } from 'console';
import { SquareState } from './checkers';
import { Square } from './checkers';
import { Board } from './checkers';
import { Simulation } from './simulation';

let testRuns = 1


const board = new Board();
console.log(board.squares);
const checkers = new Simulation();

let valids = 0;

for(var ee = 0; ee < testRuns ; ee++){
    
    const move = checkers.getMove();
    console.log(move);

   let valid = board.isMoveValid(board.squares,move[0],move[1],move[2],move[3]);
   console.log("RUN NUMBER :"+ee)
   if(valid == true) {
    
    valids++
    console.log("MOVE IS VALID !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    break;
}
}
console.log("Test Runs : "+testRuns)
console.log("Valid Moves : "+valids);