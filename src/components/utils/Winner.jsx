const winningMatrix = {
  0: [
    [1, 2],
    [3, 6],
    [4, 8],
  ],
  1: [
    [0, 2],
    [4, 7],
  ],
  2: [
    [0, 1],
    [5, 8],
    [4, 6],
  ],
  3: [
    [0, 6],
    [4, 5],
  ],
  4: [
    [1, 7],
    [3, 5],
    [0, 8],
    [2, 6],
  ],
  5: [
    [2, 8],
    [3, 4],
  ],
  6: [
    [7, 8],
    [0, 3],
    [2, 4],
  ],
  7: [
    [6, 8],
    [1, 4],
  ],
  8: [
    [6, 7],
    [2, 5],
    [0, 4],
  ],
};

function WinnerCalc(cellvalue, showResult, celIndex) {
  let winningResult = winningMatrix[celIndex];

  for (let i = 0; i < winningResult.length; i++) {
    let currentValue = cellvalue[celIndex];
    let firstOption = cellvalue[winningResult[i][0]];
    let seconOption = cellvalue[winningResult[i][1]];

    if(currentValue === firstOption && firstOption === seconOption){

        return{
            hasResult: true,
            winner: currentValue,
            winningCombination: [celIndex, winningResult[i][0], winningResult[i][1]]
        }
    }
  }


  if(showResult === 0){
    return{
        hasResult: true,
        winner: undefined,
        winningCombination: [],
    }
}

  return {
    hasResult: false,
    winner: undefined,
    winningCombination: [],
  };
}
export default WinnerCalc;
