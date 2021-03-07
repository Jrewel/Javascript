function main(){

leftToRightChessBoard();
rightToLeftChessBoard();
leftToRightChessBoard();
rightToLeftChessBoard();
leftToRightChessBoardEnd();


}

function leftToRightChessBoard() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    turnLeft();
    move();
}
 function rightToLeftChessBoard() {
  
    turnLeft();
    move();
    putBeeper();
     move();
    move();
    putBeeper();
    move();
    turnRight();
    move();
    turnRight();
 }
 
 function leftToRightChessBoardEnd() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
}