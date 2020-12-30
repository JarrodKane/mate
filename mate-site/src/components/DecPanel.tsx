import React from 'react';
import styled from 'styled-components';

import FavoriteIcon from '@material-ui/icons/Favorite';
import CancelIcon from '@material-ui/icons/Cancel';
import RestoreIcon from '@material-ui/icons/Restore';

interface DecPanelProps {
    text?: string;
}

const ButtonLove = styled(FavoriteIcon)`
    color: Green;
    padding: 10px;
    border-radius: 50%;
    border: 1px solid #d3d3d3;
    -webkit-box-shadow: 0px 0px 10px 1px rgba(189, 189, 189, 1);
    -moz-box-shadow: 0px 0px 10px 1px rgba(189, 189, 189, 1);
    box-shadow: 0px 0px 10px 1px rgba(189, 189, 189, 1);
`;

const ButtonPass = styled(CancelIcon)`
    color: red;
    padding: 10px;
    border-radius: 50%;
    border: 1px solid #d3d3d3;
    -webkit-box-shadow: 0px 0px 10px 1px rgba(189, 189, 189, 1);
    -moz-box-shadow: 0px 0px 10px 1px rgba(189, 189, 189, 1);
    box-shadow: 0px 0px 10px 1px rgba(189, 189, 189, 1);
`;

const ButtonRedo = styled(RestoreIcon)`
    color: orange;
    padding: 10px;
    border-radius: 50%;
    border: 1px solid #d3d3d3;
    -webkit-box-shadow: 0px 0px 10px 1px rgba(189, 189, 189, 1);
    -moz-box-shadow: 0px 0px 10px 1px rgba(189, 189, 189, 1);
    box-shadow: 0px 0px 10px 1px rgba(189, 189, 189, 1);
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px 5%;
    border-top: 1px solid #c9c9c9;
    margin-top: 16px;
    padding: 16px 0;
`;

export const DecPanel: React.FC<DecPanelProps> = ({ text }) => {
    return (
        <Container>
            <ButtonPass fontSize="large" />
            <ButtonRedo fontSize="large" />
            <ButtonLove fontSize="large" />
        </Container>
    );
};

export default DecPanel;
