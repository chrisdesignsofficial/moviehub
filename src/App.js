import React from "react";
// import { useState } from "react";
import "./App.css";
import Movie from "./components/movie";

// Components

const App = () => {
  return (
    <div className="d-flex min-vh-100 justify-content-center align-items-center rounded ">
      <main className="shadow-lg border bg-light d-flex rounded-3">
        <Movie />
      </main>
    </div>
  );
};

export default App;
