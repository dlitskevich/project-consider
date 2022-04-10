import React from "react";
import "./App.scss";
import { CriteriaSpecPage } from "./page/CriteriaSpecPage";

function App() {
  return (
    <div className="App">
      <header>
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
