'use strict';

class TicTacToe extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
          turn: 'X',
          board: ['','','','','','','','', ''],
          announceWinner: ''
      };
  }

  handleClick(cell){
    const state = {...this.state};
    state['board'][cell] = this.state.turn;
    state['turn'] = this.state.turn === 'X' ? 'O':'X';
    this.setState(state);
    this.handleWin();
  }

  handleWin() {
    const board = this.state.board;
    const winningRows = [[0,1,2],[3,4,5],[6,7,8], [0,3,6], [1,4,7],[2,5,8],[0,4,8], [2,4,6]];

    for(var i in winningRows){
      if(board[winningRows[i][0]] === this.state.turn &&
         board[winningRows[i][1]] === this.state.turn &&
         board[winningRows[i][2]] === this.state.turn) {

        const winningMessage = 'Player ' + this.state.turn + ' WINS!';
        this.setState({announceWinner: winningMessage});
      }
    }
  }

  render() {
    return (
      <div>
        <br/>
        <h1>{this.state.announceWinner}</h1>
        <br/>
        <section>
          <div className="row">
            <Cell num="0" playerTurn={this.state.turn} whenClicked={this.handleClick.bind(this)} playerMove={this.state.board[0]}/>
            <Cell num="1" playerTurn={this.state.turn} whenClicked={this.handleClick.bind(this)} playerMove={this.state.board[1]}/>
            <Cell num="2" playerTurn={this.state.turn} whenClicked={this.handleClick.bind(this)} playerMove={this.state.board[2]}/>
          </div>
          <div className="row">
            <Cell num="3" playerTurn={this.state.turn} whenClicked={this.handleClick.bind(this)} playerMove={this.state.board[3]}/>
            <Cell num="4" playerTurn={this.state.turn} whenClicked={this.handleClick.bind(this)} playerMove={this.state.board[4]}/>
            <Cell num="5" playerTurn={this.state.turn} whenClicked={this.handleClick.bind(this)} playerMove={this.state.board[5]}/>
          </div>
          <div className="row">
            <Cell num="6" playerTurn={this.state.turn} whenClicked={this.handleClick.bind(this)} playerMove={this.state.board[6]}/>
            <Cell num="7" playerTurn={this.state.turn} whenClicked={this.handleClick.bind(this)} playerMove={this.state.board[7]}/>
            <Cell num="8" playerTurn={this.state.turn} whenClicked={this.handleClick.bind(this)} playerMove={this.state.board[8]}/>
          </div>
        </section>
      </div>
    );
  }
}

class Cell extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cellNum: this.props.num,
      mark: this.props.playerMove
    }
  }

  addPlayerTurn(props){
    this.props.whenClicked(this.state.cellNum);
    this.setState({mark: this.props.playerTurn});
  }

  render() {
    return (
      <div data-cell={this.state.cellNum} onClick={this.addPlayerTurn.bind(this)}>{this.state.mark}</div>
    )
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
