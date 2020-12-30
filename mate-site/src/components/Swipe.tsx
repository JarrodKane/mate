// This is the area where someone gets to swipe on people
import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styled from 'styled-components';

import Card from './Card';

const Box = styled(motion.div)`
    display: flex;
    justify-content: center;
`;

const Swipe = ({}) => {
    const x = useMotionValue(0);
    const background = useTransform(x, [-100, 0, 100], ['#f94144', '#f1faee', '#90be6d']);

    return (
        <Box style={{ background }}>
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
