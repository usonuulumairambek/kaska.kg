
import React from 'react';
import Header from './components/header/Header';
import HomePage from './components/homepage/HomePage';
import Uslugi from './components/uslugi/Uslugi';


const App = () => {
    return (
        <div className="app">
            <Header />
            <HomePage />
            <Uslugi />
        </div>
    );
};

export default App;