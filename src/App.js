import React from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import LoadCard from "./components/LoadCard";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Scoreboard />
      <LoadCard />
    </React.Fragment>
  );
}

export default App;
