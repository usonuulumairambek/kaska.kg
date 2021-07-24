import React from "react";
import Calculation from "./components/calculation/Calculation";
import Header from "./components/header/Header";
import HomePage from "./components/homepage/HomePage";
import Uslugi from "./components/uslugi/Uslugi";
import Why from "./components/why/Why";
import Works from "./components/works/Works";

const App = () => {
  return (
    <div className="app">
      <Header />
      <HomePage />
      <Uslugi />
      <Works />
      <Why />
      <Calculation />
    </div>
  );
};

export default App;
