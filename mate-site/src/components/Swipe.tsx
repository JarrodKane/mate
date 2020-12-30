// This is the area where someone gets to swipe on people
import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styled from 'styled-components';

import Card from './Card';
import { pageVariants, pageTransition } from '../helpers/animation';

interface SwipeProps {
    direction: number;
}

const Box = styled(motion.div)`
    display: flex;
    justify-content: center;
    flex-grow: 1;
`;

const Swipe: React.FC<SwipeProps> = ({ direction }) => {
    const x = useMotionValue(0);
    const background = useTransform(x, [-100, 0, 100], ['#f94144', '#f1faee', '#90be6d']);

    const compDir = 2;

    return (
        <Box
            style={{ background }}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants(direction, compDir)}
            transition={pageTransition}
        >
            <motion.div drag="x" dragConstraints={{ left: 0, right: 0 }} style={{ x }}>
                <Card
                    name="Test"
                    price={65}
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium"
                />
            </motion.div>
        </Box>
    );
};

export default Swipe;
