import React, { useState, useEffect } from 'react';
import './App.css';
import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Swipe from './components/Swipe';

// enum Direction {
//     Left = 1,
//     Right,
// }

const App = () => {
    const [direction, setDirection] = useState(2);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/chat') {
            setDirection(1);
        } else if (location.pathname === '/') {
            setDirection(2);
        } else {
            setDirection(3);
        }
    }, [location]);

    return (
        <div className="App">
            <Header />
            <AnimatePresence>
                <Switch>
                    <Route path="/chat">Chat</Route>
                    <Route path="/profile">Profile</Route>
                    <Route exact path="/">
                        <Swipe direction={direction} />
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
};

export default App;
