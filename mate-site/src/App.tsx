import React from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import DecPanel from './components/DecPanel';

function App() {
    return (
        <div className="App">
            <Header text={'Wow'} />
            <Card />
            <DecPanel text={'Wowww'} />
        </div>
    );
}

export default App;
