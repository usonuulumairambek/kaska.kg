import React from "react";
import Calculation from "./components/calculation/Calculation";
import Etapy from "./components/etapy/Etapy";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./components/homepage/HomePage";
import Partners from "./components/partners/Partners";
import Stiomost from "./components/stiomost/Stiomost";
import Uslugi from "./components/uslugi/Uslugi";
import Voprosy from "./components/voprosy/Voprosy";
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
      <Etapy />
      <Voprosy />
      <Stiomost />
      <Partners />
      <Footer />
    </div>
  );
};

export default App;
