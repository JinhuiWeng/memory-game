import React, { useState, useEffect, useRef } from "react";
import Scoreboard from "./Scoreboard";
import Timeboard from "./Timeboard";
import LoadCard from "./LoadCard";
import GamePopup from "./GamePopup";

const GameMain = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [bestTime, setBestTime] = useState(null);
  const [clickedCardArray, setClickedCardsArray] = useState([]);
  const intervalRef = useRef(0);

  //score
  const handleCurrentScore = () => {
    setCurrentScore((currentScore) => currentScore + 1);
  };

  const handleBestScore = () => {
    const soreComparison = currentScore >= bestScore ? currentScore : bestScore;
    setBestScore(soreComparison);
  };

  //time
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentTime((currentTime) => currentTime + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [currentTime]);

  const handleResetTime = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = 0;
    setCurrentTime(0);
  };

  const handleBestTime = () => {
    if (bestTime !== null) {
      const timeComparison = currentTime < bestTime ? currentTime : bestTime;
      setBestTime(timeComparison);
    } else setBestTime(currentTime);
  };

  //game logic
  const handleReloadGame = () => {
    setClickedCardsArray([]);
    handleBestScore();
    setCurrentScore(0);
    handleResetTime();
  };

  const handleCardOnClick = (clickedCard) => {
    if (!clickedCardArray.includes(clickedCard)) {
      setClickedCardsArray(() => [...clickedCardArray, clickedCard]);
      handleCurrentScore();
    } else handleReloadGame();
  };

  return (
    <React.Fragment>
      <div>
        <Scoreboard currentScore={currentScore} bestScore={bestScore} />
        <Timeboard currentTime={currentTime} bestTime={bestTime} />
        <LoadCard
          handleCardOnClick={handleCardOnClick}
          currentScore={currentScore}
        />
      </div>
      <div>
        {currentScore === 12 && (
          <GamePopup
            handleReloadGame={handleReloadGame}
            handleBestTime={handleBestTime}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default GameMain;
