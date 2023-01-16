import React, { useState } from "react";
import Scoreboard from "./Scoreboard";
import LoadCard from "./LoadCard";

const GameMain = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCardArray, setClickedCardsArray] = useState([]);

  const handleCurrentScore = () => {
    setCurrentScore(currentScore + 1);
  };

  const handleBestScore = () => {
    const soreComparison = currentScore >= bestScore ? currentScore : bestScore;
    setBestScore(soreComparison);
  };

  const handleCardOnClick = (clickedCard) => {
    if (!clickedCardArray.includes(clickedCard)) {
      setClickedCardsArray(() => [...clickedCardArray, clickedCard]);
      handleCurrentScore();
    } else handleReloadGame();
  };

  const handleReloadGame = () => {
    setClickedCardsArray([]);
    handleBestScore();
    setCurrentScore(0);
  };

  return (
    <React.Fragment>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <LoadCard
        handleCardOnClick={handleCardOnClick}
        currentScore={currentScore}
      />
    </React.Fragment>
  );
};

export default GameMain;
