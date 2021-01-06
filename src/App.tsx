import React, { useState, useEffect } from 'react';
import './App.css';
import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import DecPanel from './components/DecPanel';
import Swipe from './components/Swipe';
import Profile from './components/Profile';
import Chat from './components/Chat';

const WrapApp = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

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
        <WrapApp className="App">
            <Header />
            <AnimatePresence>
                <Switch>
                    <Route path="/chat">
                        <Chat direction={direction} />
                    </Route>
                    <Route path="/profile">
                        <Profile direction={direction} />
                    </Route>
                    <Route exact path="/">
                        <Swipe direction={direction} />
                    </Route>
                </Switch>
            </AnimatePresence>
            <DecPanel />
        </WrapApp>
    );
};

export default App;
