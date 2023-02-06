export enum SquareState {
    Empty,
    BlackPiece,
    WhitePiece,
    BlackKing,
    WhiteKing
  }
  
export class Square {
    state: SquareState;
    x: number;
    y: number;
  
    constructor(x: number, y: number, state: SquareState) {
      this.x = x;
      this.y = y;
      this.state = state;
    }
  }
  
export class Board {
    squares: Square[][];
  
    constructor() {
      this.squares = [];
      for (let i = 0; i < 8; i++) {
        this.squares[i] = [];
        for (let j = 0; j < 8; j++) {
          let state: SquareState = SquareState.Empty;
          if ((i + j) % 2 === 1) {
            if (i < 3) {
              state = SquareState.BlackPiece;
            } else if (i > 4) {
              state = SquareState.WhitePiece;
            }
          }
          this.squares[i][j] = new Square(i, j, state);
        }
      }
    }

    isMoveValid(board: Square[][], startRow: number, startCol: number, endRow: number, endCol: number): boolean {
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
        } else if (board[startRow][startCol].state === SquareState.WhitePiece) {
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
          const capturedRow = (startRow + endRow) / 2;
          const capturedCol = (startCol + endCol) / 2;
          if (board[capturedRow][capturedCol].state === SquareState.Empty) {
            console.log('No piece was captured.');
            return false;
          }
        }
       
        
        // If all checks passed, the move is valid
        console.log("Valid Move");
        return true;
      }

      getOccupiedSquares(player: string): Square[] {
        let occupiedSquares: Square[] = [];
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 8; j++) {
            let square = this.squares[i][j];
            if (square.state === (player === 'Black' ? SquareState.BlackPiece : SquareState.WhitePiece) || square.state === (player === 'Black' ? SquareState.BlackKing : SquareState.WhiteKing)) {
              occupiedSquares.push(square);
            }
          }
        }
        return occupiedSquares;
      }

      
      getValidEndSquares(startSquare: Square) : Square[][] {
        const validEndSquares = [];
        console.log(startSquare)
        const playerColor = startSquare.state === SquareState.BlackPiece || startSquare.state === SquareState.BlackKing ? 'Black' : 'White';
        const direction = playerColor === 'Black' ? 1 : -1;
        const potentialEndSquares = [    [startSquare.x + direction, startSquare.y + 1],
          [startSquare.x + direction, startSquare.y - 1],
        ];

        console.log(potentialEndSquares)
        for (const potentialEndSquare of potentialEndSquares) {
          if (potentialEndSquare[0] >= 0 && potentialEndSquare[0] < 8 && potentialEndSquare[1] >= 0 && potentialEndSquare[1] < 8) {
           
            console.log("Loop 1")
            console.log(potentialEndSquare)
            if (this.squares[potentialEndSquare[0]][potentialEndSquare[1]].state === SquareState.Empty) {
               validEndSquares.push(this.squares[potentialEndSquare[0]][potentialEndSquare[1]]);
            }
          }
        }
        console.log("Valid End Squares");
        console.log(validEndSquares)
        return validEndSquares;
      }
      
      
  }
  