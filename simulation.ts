import {Board} from "./checkers"

export class Simulation {
    private firstPlayer: string;
    private startRow: number;
    private startCol: number;
    private endRow: number;
    private endCol: number;
    private board: Board;
  
    constructor(board: Board) {
      this.board = board;
      this.firstPlayer = Math.floor(Math.random() * 2) === 0 ? 'Black' : 'White';
      console.log(`${this.firstPlayer} will move first.`);
    }
  
    getMove(player : string): [number, number, number, number] {
      const occupiedSquares = this.board.getOccupiedSquares(player);
      const randomIndex = Math.floor(Math.random() * occupiedSquares.length);
      const startSquare = occupiedSquares[randomIndex];
      this.startRow = startSquare[0];
      this.startCol = startSquare[1];
  
      const validEndSquares = this.board.getValidEndSquares(this.startRow, this.startCol);
      const randomEndIndex = Math.floor(Math.random() * validEndSquares.length);
      const endSquare = validEndSquares[randomEndIndex];
      this.endRow = endSquare[0];
      this.endCol = endSquare[1];
  
      return [this.startRow, this.startCol, this.endRow, this.endCol];
    }
  }