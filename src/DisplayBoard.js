import React from 'react';

class DisplayBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    //If anything calls 'this' remember to bind it
    //ex. this.sayHello = this.sayHello.bind(this);
render() {
    return (
      <div>
          <div>
            <button className="boardbox"onClick={(event)=>this.props.setBox(event, 0 , 0)}>{this.props.board[0][0]}</button>
            <button className="boardbox"onClick={(event)=>this.props.setBox(event, 0 , 1)}>{this.props.board[0][1]}</button>
            <button className="boardbox"onClick={(event)=>this.props.setBox(event, 0 , 2)}>{this.props.board[0][2]}</button>
          </div>
          <div></div>
          <div>
            <button className="boardbox"onClick={(event)=>this.props.setBox(event, 1 , 0)}>{this.props.board[1][0]}</button>
            <button className="boardbox"onClick={(event)=>this.props.setBox(event, 1 , 1)}>{this.props.board[1][1]}</button>
            <button className="boardbox"onClick={(event)=>this.props.setBox(event, 1 , 2)}>{this.props.board[1][2]}</button>
          </div>
          <div></div>
          <div>
            <button className="boardbox"onClick={(event)=>this.props.setBox(event, 2 , 0)}>{this.props.board[2][0]}</button>
            <button className="boardbox"onClick={(event)=>this.props.setBox(event, 2 , 1)}>{this.props.board[2][1]}</button>
            <button className="boardbox"onClick={(event)=>this.props.setBox(event, 2 , 2)}>{this.props.board[2][2]}</button>
          </div>
      </div>
    )
  }
}

export default DisplayBoard;