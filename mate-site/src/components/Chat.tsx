import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Search from './Search';
import ChatRows from './ChatRows';
import { pageVariants, pageTransition } from '../helpers/animation';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';

interface ChatProps {
    direction: number;
}

const Container = styled(motion.div)`
    display: flex;
    // justify-content: center;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
`;

const HeadSearch = styled(motion.div)`
    display: flex;
`;

// TODO: Pass the chats down into the Chat rows, and the chats also need to be passed into the search in order to search from all of them.
// This way we can pass a search result into the rows to only display the result
const Chat: React.FC<ChatProps> = ({ direction }) => {
    const [searchValue, setSearchValue] = useState<string | null | undefined>('');
    const compDir = 1;

    return (
        <Container
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants(direction, compDir)}
            transition={pageTransition}
        >
            <HeadSearch>
                <Search setSearchValue={setSearchValue} />
                <IconButton>
                    <FilterListIcon />
                </IconButton>
            </HeadSearch>
            <ChatRows image="asdsad" stage="Pass" title="Webdeveloper" />
        </Container>
    );
};

export default Chat;
