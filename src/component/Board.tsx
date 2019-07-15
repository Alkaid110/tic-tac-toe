import * as React from 'react';

enum Player {
  None = 0,
  One = 1,
  Two = 2
}

type IS_GOING = -1
const IS_GOING = -1

interface State {
  board: Player[]
  nextPlayer: number
  winner: Player | IS_GOING
}
class Board extends React.Component<{}, State> {
  state = {
    board: [Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None],
    nextPlayer: Player.One,
    winner: IS_GOING,
  }
  render() {
    return (
      <div>
        <div className="board">
          {this.state.board.map((value, index) =>
            this.renderCell(index)
          )}
        </div>
        {this.showState()}
      </div>
    );
  }
  public renderCell = (index: number) => {
    const { board } = this.state
    return (
      <div className="cell"
        key={index}
        date-player={board[index]}
        onClick={() => { this.handleCellClick(index) }}></div>
    )
  }
  public showState = () => {
    const { winner } = this.state
    const winText = winner !== Player.None ? `player${winner} is win` : "the game is draw"
    return (
      <div>
        <div className="info">
          {"player1 is salmon"}
        </div>
        <div className="info">
          {"player2 is skyblue"}
        </div>
        <div className="info">
          {winner === IS_GOING ? "the game is ongoing..." : winText}
        </div>
      </div>
    )
  }
  public handleCellClick = (index: number) => {
    let { board, nextPlayer, winner } = this.state
    if (board[index] !== 0 || winner !== IS_GOING) return
    let newBoard = board.slice()
    newBoard[index] = nextPlayer
    winner = this.isOver(newBoard)
    this.setState({
      board: newBoard,
      nextPlayer: 3 - nextPlayer,
      winner: winner
    })
  }
  public isOver = (board: Player[]) => {
    if (board[0] === board[1] && board[1] === board[2] && board[2] !== Player.None) {
      return board[0]
    } else if (board[3] === board[4] && board[4] === board[5] && board[5] !== Player.None) {
      return board[3]
    } else if (board[6] === board[7] && board[7] === board[8] && board[8] !== Player.None) {
      return board[6]
    } else if (board[0] === board[3] && board[3] === board[6] && board[6] !== Player.None) {
      return board[0]
    } else if (board[1] === board[4] && board[4] === board[7] && board[7] !== Player.None) {
      return board[1]
    } else if (board[2] === board[5] && board[5] === board[8] && board[8] !== Player.None) {
      return board[2]
    } else if (board[0] === board[4] && board[4] === board[8] && board[8] !== Player.None) {
      return board[0]
    } else if (board[2] === board[4] && board[4] === board[6] && board[6] !== Player.None) {
      return board[2]
    }
    for (const player of board) {
      if (player === Player.None) {
        return IS_GOING
      }
    }

    return Player.None
  }
}

export default Board;