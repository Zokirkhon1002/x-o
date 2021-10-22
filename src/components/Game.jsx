import React from "react";
import Board from "./Board";
import { useState } from "react";
import Modal from "./Modal";
import WinnerCalc from "./utils/Winner";

function Game() {
  const [cellValues, setCellValues] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [xIsNext, setXIsNext] = useState(true);
  const winnerCombination = [];
  const [gameOver, setGameOver] = useState(false);
  const [numberOfTurn, setNumberOfTurn] = useState(9);
  const [winner, setWinner] = useState();
  const [winningCombination, setWinningCombination] = useState([]);

  const isCellEmpty = (cellIndex) => {
    return cellValues[cellIndex] === "";
  };

  const clickCell = (cellIndex) => {
    if (isCellEmpty(cellIndex)) {
      const newCellValues = [...cellValues];
      newCellValues[cellIndex] = xIsNext ? "X" : "O";

      const showResult = numberOfTurn - 1;

      const calcResult = WinnerCalc(newCellValues, showResult, cellIndex);

      setCellValues(newCellValues);
      setXIsNext(!xIsNext);
      setGameOver(calcResult.hasResult);
      setNumberOfTurn(showResult);
      setWinner(calcResult.winner);
      setWinningCombination(calcResult.winningCombination);
    }
  };

  const onNewGame = () => {
    setCellValues(["", "", "", "", "", "", "", "", ""]);
    setXIsNext(true);
    setGameOver(false);
    setNumberOfTurn(9);
    setWinner(undefined);
    setWinningCombination(winningCombination);
  };

  return (
    <>
      <div id="game">
        <h1>Bo'sh vaqt uchun Ajoyib o'yin!</h1>
        <Board
          cellValues={cellValues}
          winnerCombination={winnerCombination}
          clickCell={clickCell}
        />
      </div>
      <Modal gameOver={gameOver} winner={winner} onNewGame={onNewGame} />
    </>
  );
}

export default Game;
