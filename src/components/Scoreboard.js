import React from "react";

const Scoreboard = (props) => {
  const { currentScore } = props;
  return (
    <div className="scoreboard">
      <h3 className="scoreboard__score">Current Score: {currentScore} </h3>
      <h3 className="scoreboard__bestscore">Best Score: </h3>
    </div>
  );
};

export default Scoreboard;
