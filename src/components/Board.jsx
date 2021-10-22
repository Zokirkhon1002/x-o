import React from "react";
import Cell from "./Cell";

function Board({ cellValues, winnerCombination, clickCell }) {
  return (
    <div id="board">
      {cellValues.map((value, index) => {
        let isHighlight =
          winnerCombination && winnerCombination.indexOf(index) >= 0;

        return (
          <Cell
            key={index}
            value={value}
            isHighlight={isHighlight}
            clickShow={() => clickCell(index)}
          />
        );
      })}
    </div>
  );
}

export default Board;
