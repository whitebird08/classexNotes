//https://github.com/whitebird08/oo-move-manager

function MoveManager() {
  this.board = [
  ['x','x','x'],
  ['x','x','x'],
  ['x','x','x']
  ];
}

MoveManager.prototype.insert = function(row,col) {
  this.board[row][col] = "o"
  return this.board
};

MoveManager.prototype.movePlayer = function(row,col, direction) {
  if (this.board[row][col] != 'o') { throw new Error('Piece does not exist')};
  if ((direction == 'right' && col == 2) ||
    (direction == 'left' && col == 0) ||
    (direction == 'up' && row == 0) ||
    (direction) == 'down' && row == 2){
    throw new Error('Invalid Move')
  }

  this.board[row][col] = 'x';

  if (direction == 'right') {
    col += 1;
  } else if (direction == 'left') {
    col -= 1;
  } else if (direction == 'up') {
    row -= 1;
  } else if (direction == 'down') {
    row += 1;
  }

  this.board[row][col] = 'o'
  return this.board
};

module.exports = MoveManager;



//////////////////////////
//can refactor to:
if (dir === 'right' && j+1 <= 2) j++;
  else if (dir === 'left' && j-1 >= 0) j--;
  else if (dir === 'up' && i-1 >= 0) i--;
  else if (dir === 'down' && i+1 <= 2) i++;
  else {
    throw new Error("Invalid Move");
  }