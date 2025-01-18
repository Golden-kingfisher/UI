import { useState } from 'react'
import GameBoard from './Components/GameBoard.jsx'
import Player from './Components/Player.jsx'
import Log from './Components/log.jsx'
import { WINNING_COMBINATIONS } from './winning-combinations.js'
import GameOver from './Components/GameOver.jsx'

const PLAYERS =  {
  'X': 'Player 1',
  'O': 'Player 2'
}
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD].map(square => [...square]);

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winnerSymbol;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winnerSymbol = players[firstSquareSymbol];
    }
  }

  return winnerSymbol;
}

function App() {
  const [players, setPlayersName] = useState(
    PLAYERS
  )
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winnerSymbol = deriveWinner(gameBoard, players)

  let matchDraw = null;
  matchDraw = gameTurns.length === 9 && !winnerSymbol;

  function handleSelectSquare(rowIndex, colIndex) {
    deriveActivePlayer(gameTurns);
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ]
      return updatedTurns;
    })
  }

  function handleRestart() {
    setGameTurns([]);
  }
  function handlePlayerNameChange(symbol, newName) {
    setPlayersName(
      prevPlayers => {
        return {
          ...prevPlayers,
          [symbol]: newName
        }
      }
    )
  }

  return (
    <main>
      <div id="game-container">


        <ol id="players" className='highlight-player'>
          <Player initialName={PLAYERS.X} symbol={'X'} isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
          <Player initialName={PLAYERS.O} symbol={'O'} isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange} />

        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} gameBoard={gameBoard} />

        {(winnerSymbol || matchDraw) && <GameOver winner={winnerSymbol} handleRestart={handleRestart}></GameOver>}

      </div >
      <Log turns={gameTurns}></Log>
    </main>
  )
}

export default App
