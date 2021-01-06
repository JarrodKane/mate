import React from 'react';
import styled from 'styled-components';

interface MatchRowProps {
    image: string;
    title: string;
    stage: string;
    time?: number;
}

const Match = styled.div`
    display: flex;

    background: #fafafa;
    border: 1px solid #000000;
    border-bottom: 1px solid #000000;
    width: 700px;
    height: 60px;
`;

const Stage = styled.div`
    background: orange;
    flex-grow: 2;
`;

const Title = styled.div`
    flex-grow: 1;
`;
const Image = styled.div`
    flex-grow: 1;
`;

// TODO: Allow you to star a job if you want it to stay at the top

const MatchRow: React.FC<MatchRowProps> = ({ image, title, stage, time }) => {
    return (
        <Match>
            <Image>Image</Image>
            <Title>Title</Title>
            <Stage>Stage</Stage>
        </Match>
    );
};

export default MatchRow;
