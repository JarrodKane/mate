import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import ChatRows from './ChatRows';
import { pageVariants, pageTransition } from '../helpers/animation';

interface ChatProps {
    direction: number;
}

const Container = styled(motion.div)`
    display: flex;
    justify-content: center;
    flex-grow: 1;
`;

const Chat: React.FC<ChatProps> = ({ direction }) => {
    const compDir = 1;

    return (
        <Container
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants(direction, compDir)}
            transition={pageTransition}
        >
            <div>
                <div>Search</div>
                <ChatRows image="asdsad" stage="Pass" title="Webdeveloper" />
            </div>
        </Container>
    );
};

export default Chat;
