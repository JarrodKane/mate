import React from 'react';

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
    duration: 0.2,
};

export { pageVariants, pageTransition };
