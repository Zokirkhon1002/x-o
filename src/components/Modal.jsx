import React from "react";
import classNames from "classnames";


function Modal({gameOver, winner, onNewGame}) {
    const modalClasses = classNames({
        "modal-open":gameOver,
    })

    const msg = winner ? `( ${winner} ) g'olib bo'ldi, 😎` : "Durrang! 😄"


  return (
    <>
      <div id="modal-overlay" className={modalClasses}>
        <div id="game-result-modal">
          <div id="result-container">
            <div id="winner-container">
              <span>{msg}</span>
            </div>
          </div>
          <div id="new-game-container">
            <button id="new-game-button" onClick={onNewGame}>Qayta o'ynash 😉</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
