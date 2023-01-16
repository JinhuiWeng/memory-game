import React, { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import Timeboard from "./Timeboard";
import LoadCard from "./LoadCard";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const GameMain = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [bestTime, setBestTime] = useState(0);
  const [clickedCardArray, setClickedCardsArray] = useState([]);
  const [showPopup, setShowPopup] = useState(true);

  const handleCurrentScore = () => {
    setCurrentScore((currentScore) => currentScore + 1);
  };

  const handleBestScore = () => {
    const soreComparison = currentScore >= bestScore ? currentScore : bestScore;
    setBestScore(soreComparison);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((currentTime) => currentTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  const handleReloadGame = () => {
    setClickedCardsArray([]);
    handleBestScore();
    setCurrentScore(0);
  };

  //   useEffect(() => {
  //     if (clickedCardArray.length !== 2) {
  //       setShowPopup(!showPopup);
  //       handlePopup();
  //     }
  //   }, [clickedCardArray.length]);

  //   const handlePopup = () => (
  //     <Popup disabled={showPopup} position="right center">
  //       <div>
  //         <h3>Well done! You have scored max 12 points!!</h3>
  //         <button onClick={() => handleReloadGame}> Start A New Game!</button>
  //       </div>
  //     </Popup>
  //   );

  const handleCardOnClick = (clickedCard) => {
    if (!clickedCardArray.includes(clickedCard)) {
      setClickedCardsArray(() => [...clickedCardArray, clickedCard]);
      handleCurrentScore();
    } else handleReloadGame();
  };

  return (
    <React.Fragment>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <Timeboard currentTime={currentTime} />
      <LoadCard
        handleCardOnClick={handleCardOnClick}
        currentScore={currentScore}
      />
    </React.Fragment>
  );
};

export default GameMain;
