import React from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import LoadCard from "./components/LoadCard";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Scoreboard />
      <LoadCard />
    </div>
  );
}

export default App;
