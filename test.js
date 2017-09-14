'use strict';

class TicTacToe extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          turn: 'X',
      };
  }

  handleClick(cell){
    const state = {...this.state};
    state[cell]  = this.state.turn;
    state['turn'] = this.state.turn === 'X' ? 'O':'X';

    this.setState(state);

  }

  handleWin() {
    // const board = this.state.board;
    const winningRows = [[0,1,2],[3,4,5],[6,7,8], [0,3,6], [1,4,7],[2,5,8],[0,4,8], [2,4,6]];
  }

  render() {
    return (
      <div>
        <br/>
        <br/>
        <section>
          <div className="row">
            <div data-cell="0" onClick={() => this.handleClick('cell0')}>{this.state.cell0}</div>
             <div data-cell="1"></div>
             <div data-cell="2"></div>
           </div>
           <div className="row">
             <div data-cell="3"></div>
             <div data-cell="4"></div>
             <div data-cell="5"></div>
           </div>
           <div className="row">
             <div data-cell="6"></div>
             <div data-cell="7"></div>
             <div data-cell="8"></div>
           </div>
        </section>
      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
