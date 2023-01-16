import React from "react";

const Timeboard = (props) => {
  const { currentTime, bestTime } = props;
  return (
    <div className="timeboard">
      <h3 className="timeboard__time">Current Time: {currentTime}s </h3>
      <h3 className="timeboard__besttime">Best Time: {bestTime}s </h3>
    </div>
  );
};

export default Timeboard;