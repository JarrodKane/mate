import React from 'react';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PersonIcon from '@material-ui/icons/Person';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

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
            <IconButton>
                <ChatBubbleOutlineIcon fontSize="large" />
            </IconButton>
            Mate
            <IconButton>
                <PersonIcon fontSize="large" />
            </IconButton>
        </Main>
    );
};

export default Header;
