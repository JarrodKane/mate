import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Swipe from './components/Swipe';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Header />

                <Switch>
                    <Route path="/chat">Chat</Route>
                    <Route exact path="/">
                        <Swipe />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
