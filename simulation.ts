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
  
    getMove(player: string): [number, number, number, number] {
      const occupiedSquares = this.board.getOccupiedSquares(player);
      console.log(occupiedSquares);
    
      const randomIndex = Math.floor(Math.random() * occupiedSquares.length);
      const startSquare = occupiedSquares[randomIndex];
      console.log("Start Square");
      console.log(startSquare);
      this.startRow = startSquare.x;
      this.startCol = startSquare.y;
    
      const validEndSquares = this.board.getValidEndSquares(startSquare);
      console.log("Start Squares");
      console.log(validEndSquares);
    
      if (validEndSquares.length === 0) {
        console.log("No valid end squares found, returning [-1, -1, -1, -1]");
        return [-1, -1, -1, -1];
      }
    
      const randomEndIndex = Math.floor(Math.random() * validEndSquares.length);
      const endSquare = validEndSquares[randomEndIndex];
      console.log("End Squares");
      console.log(endSquare);
    
      return [this.startRow, this.startCol, endSquare.x, endSquare.y];
    }
  }