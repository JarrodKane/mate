import React from 'react';
import styled from 'styled-components';

interface ChatRowProps {
    image: string;
    title: string;
    stage: string;
    time?: number;
}

const ChatRow = styled.div`
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

const ChatRows: React.FC<ChatRowProps> = ({ image, title, stage, time }) => {
    return (
        <ChatRow>
            <Image>Image</Image>
            <Title>Title</Title>
            <Stage>Stage</Stage>
        </ChatRow>
    );
};

export default ChatRows;
