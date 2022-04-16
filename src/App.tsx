import React from "react";
import "./App.scss";
import logo from "./logo192.png";
import { CriteriaSpecPage } from "./page/CriteriaSpecPage";

function App() {
  return (
    <div className="App">
      <header>
        <img id="logo" src={logo} alt="heart logo" />
        <h1>Project Consider</h1>
      </header>
      <section id="main">
        <CriteriaSpecPage />
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
