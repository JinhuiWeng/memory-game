import React, { useState } from "react";
import Scoreboard from "./Scoreboard";
import LoadCard from "./LoadCard";

const GameMain = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [clickedCardArray, setClickedCardsArray] = useState([]);

  //   const [bestScore, setBestScore] = useState[0];

  const handleCurrentScore = () => {
    setCurrentScore(currentScore + 1);
  };

  const handleCardOnClick = (clickedCard) => {
    if (!clickedCardArray.includes(clickedCard)) {
      setClickedCardsArray(() => [...clickedCardArray, clickedCard]);
      handleCurrentScore();
    } else handleReloadGame();
  };

  const handleReloadGame = () => {
    setClickedCardsArray([]);
    setCurrentScore(0);
  };

  return (
    <React.Fragment>
      <Scoreboard currentScore={currentScore} />
      <LoadCard
        handleCardOnClick={handleCardOnClick}
        currentScore={currentScore}
      />
    </React.Fragment>
  );
};

export default GameMain;
