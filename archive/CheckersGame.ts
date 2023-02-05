export class CheckersGame {
    private board: number[][];
    private turn: 'red' | 'black';
  
    constructor() {
      this.board = [];
      for (let i = 0; i < 8; i++) {
        this.board.push(Array.from({length: 8}, () => 0));
      }
      this.turn = 'red';
    }
  
    private isValidMove(fromX: number, fromY: number, toX: number, toY: number): boolean {
      if (fromX < 0 || fromX > 7 || fromY < 0 || fromY > 7 || toX < 0 || toX > 7 || toY < 0 || toY > 7) {
        return false;
      }
      if (this.board[fromX][fromY] === 0) {
        return false;
      }
      if (this.board[toX][toY] !== 0) {
        return false;
      }
      if (this.turn === 'red' && this.board[fromX][fromY] < 0) {
        return false;
      }
      if (this.turn === 'black' && this.board[fromX][fromY] > 0) {
        return false;
      }
      let dx = toX - fromX;
      let dy = toY - fromY;
      if (this.turn === 'red' && dx < 0) {
        return false;
      }
      if (this.turn === 'black' && dx > 0) {
        return false;
      }
      if (Math.abs(dx) !== Math.abs(dy)) {
        return false;
      }
      if (Math.abs(dx) !== 1 && Math.abs(dx) !== 2) {
        return false;
      }
      if (Math.abs(dx) === 2) {
        let x = (fromX + toX) / 2;
        let y = (fromY + toY) / 2;
        if (this.board[x][y] <= 0) {
          return false;
        }
      }
      return true;
    }
  
    public makeMove(fromX: number, fromY: number, toX: number, toY: number): boolean {
      if (!this.isValidMove(fromX, fromY, toX, toY)) {
        return false;
      }
      let dx = toX - fromX;
      let dy = toY - fromY;
      this.board[toX][toY] = this.board[fromX][fromY];
      this.board[fromX][fromY] = 0;
      if (Math.abs(dx) === 2) {
        let x = (fromX + toX) / 2;
        let y = (fromY + toY) / 2;
        this.board[x][y] = 0;
      }
      this.turn = this.turn === 'red' ? 'black' : 'red';
      return true;
    }

    public getRandomMove(): [number, number] {
      const x = Math.floor(Math.random() * 8);
      const y = Math.floor(Math.random() * 8);
      return [x, y];
    }
  
    public updateBoard(x: number, y: number): void {
      this.board[x][y] = 1;
    }
  
    public getTurn(): 'red' | 'black' {
      return this.turn;
    }
  
    public getBoard(): number  [][] {
    return this.board;
    }
}