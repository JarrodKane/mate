import React from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const pageVariants = (direction, compDir) => {
    let movement;
    if (direction > compDir) {
        movement = '-100';
    } else {
        movement = '100';
    }

    const variant = {
        initial: {
            opacity: 0,
            x: Number(movement),
            scale: 0.8,
        },
        in: {
            opacity: 1,
            x: 0,
            scale: 1,
        },
        out: {
            opacity: 0,
            x: '100vw',
            scale: 1.2,
        },
    };

    return variant;
};

const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.3,
};

// const Container = styled(motion.div)`
//     display: flex;
//     justify-content: center;
// `;

// const Page = (direction, compDir) => {
//     return (
//         <Container
//             style={{ background }}
//             initial="initial"
//             animate="in"
//             exit="out"
//             variants={pageVariants(direction, compDir)}
//             transition={pageTransition}
//         ></Container>
//     );
// };

// const x = useMotionValue(0);

export { pageVariants, pageTransition };
