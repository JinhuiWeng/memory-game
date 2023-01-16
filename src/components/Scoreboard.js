import React from "react";

const Scoreboard = (props) => {
  const { currentScore, bestScore } = props;
  return (
    <div className="scoreboard">
      <h3 className="scoreboard__score">Current Score: {currentScore} </h3>
      <h3 className="scoreboard__bestscore">Best Score: {bestScore} </h3>
    </div>
  );
};

export default Scoreboard;
