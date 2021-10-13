import React from 'react';
import DisplayBoard from './DisplayBoard.js'

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          board: [[" "," "," "],[" "," "," "],[" "," "," "]],
          currentPlayer: "X", //0 for X, 1 for Y
        }
        this.setBox = this.setBox.bind(this)
        this.checkVictory = this.checkVictory.bind(this)
    }
    //If anything calls 'this' remember to bind it
    //ex. this.sayHello = this.sayHello.bind(this);
    setBox = function(event, row, col ){
      if (this.state.board[row][col] !== " ") {
        alert("Box already picked! Choose another!")
        return
      }//Box already picked
      console.log(row + " " + col);
      let newBoard=this.state.board;
      newBoard[row][col]= this.state.currentPlayer;
      if(this.checkVictory()){
        this.setState({board: [[" "," "," "],[" "," "," "],[" "," "," "]]})
        return
      };
      this.setState({currentPlayer: "X"})
      this.state.currentPlayer === "X" ? this.setState({currentPlayer: "O"}) : this.setState({currentPlayer: "X"})
      this.setState({board: newBoard})
      }
    checkVictory = function(){
      if (this.state.board[0][0] === this.state.currentPlayer &&
      this.state.board[1][1] === this.state.currentPlayer &&
      this.state.board[2][2] === this.state.currentPlayer) {
        alert("Player " + this.state.currentPlayer + " WINS!")
        return true
      }
      if (this.state.board[0][2] === this.state.currentPlayer &&
      this.state.board[1][1] === this.state.currentPlayer &&
      this.state.board[2][0] === this.state.currentPlayer) {
        alert("Player " + this.state.currentPlayer + " WINS!")
        return true
      }
      let fullChecker = false;
      for(let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++){
          if (this.state.board[i][0] === this.state.currentPlayer &&
          this.state.board[i][1] === this.state.currentPlayer &&
          this.state.board[i][2] === this.state.currentPlayer) {
            alert("Player " + this.state.currentPlayer + " WINS!")
            return true
          }
          if (this.state.board[0][j] === this.state.currentPlayer &&
          this.state.board[1][j] === this.state.currentPlayer &&
          this.state.board[2][j] === this.state.currentPlayer) {
            alert("Player " + this.state.currentPlayer + " WINS!")
            return true
            }
          }
          if (fullChecker === false && this.state.board[i][0] === " " ||
            this.state.board[i][1] === " " ||
            this.state.board[i][2] === " "){
            fullChecker = true
          }
        }
        if (fullChecker === false) {
          alert("TIE")
          return true
        }
      }
render() {
    return (
      <div>
          Tic-Tac-Toe
          <DisplayBoard board={this.state.board} setBox={this.setBox} />
      </div>
    )
  }
}
export default Board;