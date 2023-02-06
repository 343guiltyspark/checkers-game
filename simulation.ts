import {Board} from "./checkers"
import {SquareState} from "./checkers"
import {Square} from "./checkers"

export class Simulation {
    public firstPlayer: string;
    private startRow: number;
    private startCol: number;
    private endRow: number;
    private endCol: number;
    private board: Board;
    private startSquare : Square; 
  
    constructor(board: Board) {
      this.board = board;
      this.firstPlayer = Math.floor(Math.random() * 2) === 0 ? 'Black' : 'White';
      console.log(`${this.firstPlayer} will move first.`);
      
    }
  
    getMove(player : string): [number, number, number, number] {
      const occupiedSquares = this.board.getOccupiedSquares(player);

        console.log(occupiedSquares)
      const randomIndex = Math.floor(Math.random() * occupiedSquares.length);
      const startSquare = occupiedSquares[randomIndex];
      console.log(startSquare);
      this.startRow = startSquare[0];
      this.startCol = startSquare[1];

     // this.startSquare = new Square(this.startRow,this.startCol,player === 'Black' ? SquareState.BlackPiece : SquareState.WhitePiece)
     
      const validEndSquares = this.board.getValidEndSquares(startSquare);
      console.log("Start  Squares")
      console.log(validEndSquares)
      const randomEndIndex = Math.floor(Math.random() * validEndSquares.length);
      const endSquare = validEndSquares[randomEndIndex];
      console.log("End Squares")
      console.log(endSquare)
      
  
      return [this.startRow, this.startCol, endSquare[0].x, endSquare[0].y];
    }
  }