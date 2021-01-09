import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';

import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard';
import Login from './Login';

const WrapApp = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const App = () => {
    const [id, setId] = useLocalStorage('id', false);

    return <WrapApp className="App">{id ? <Dashboard id={id} /> : <Login createId={setId} />}</WrapApp>;
};

export default App;
