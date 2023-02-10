import { Console } from 'console';
import { SquareState } from './checkers';
import { Square } from './checkers';
import { Board } from './checkers';
import { Simulation } from './simulation';

let testRuns = 5000


const board = new Board();
console.log(board.squares);
const checkers = new Simulation(board);

let valids = 0;
let invalidEndSqures = 0 ;

for(var ee = 0; ee < testRuns ; ee++){
    
    console.log(checkers.firstPlayer)
    
    const move = checkers.getMove(checkers.firstPlayer);
    
    console.log("move")
    console.log(move);

    if(move[0] == -1){
        invalidEndSqures++
    }
    
    if(move[0] !== -1){

        let valid = board.isMoveValid(board.squares,move[0],move[1],move[2],move[3]);
        console.log("RUN NUMBER :"+ee)
        if(valid){
            valids++
        }
    
   }

}
console.log("Test Runs : "+testRuns)
console.log("Valid Moves : "+valids);
console.log("invalid errors :" + board.invalidMoves )
console.log("Invaid End Squares : "+ invalidEndSqures )