import React from "react";

const GamePopup = (props) => {
  const { currentScore, handleReloadGame } = props;

  return (
    <div className="gamepopup">
      <div className="gamepopup__box">
        <h3 className="gamepopup__header">
          Well done! You have scored max 12 points!!
        </h3>
        <div className="gamepopup__buttondiv">
          <button
            className="gamepopup__button"
            onClick={() => handleReloadGame()}
          >
            Start A New Game!
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamePopup;
