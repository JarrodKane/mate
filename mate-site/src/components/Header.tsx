import React, { useEffect } from 'react';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PersonIcon from '@material-ui/icons/Person';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 5%;
    border-bottom: 1px solid #c9c9c9;
`;

const Header = () => {
    return (
        <Main>
            <Link to="/chat">
                <IconButton>
                    <ChatBubbleOutlineIcon fontSize="large" />
                </IconButton>
            </Link>
            <Link to="/"> Mate</Link>

            <Link to="/profile">
                <IconButton>
                    <PersonIcon fontSize="large" />
                </IconButton>
            </Link>
        </Main>
    );
};

export default Header;
