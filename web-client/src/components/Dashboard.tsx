import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import DecPanel from './DecPanel';
import Swipe from './Swipe';
import Profile from './Profile';
import Matches from './Matches/Matches';

const WrapApp = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

interface DashboardProps {
    id: string;
}

const Dashboard: React.FC<DashboardProps> = ({ id }) => {
    return (
        <WrapApp className="App">
            <Header />
            <Switch>
                <Route path="/chat">
                    <Matches direction={1} />
                </Route>
                <Route path="/profile">
                    <Profile direction={1} />
                </Route>
                <Route exact path="/">
                    <Swipe direction={1} />
                </Route>
            </Switch>
            <DecPanel />
        </WrapApp>
    );
};

export default Dashboard;
