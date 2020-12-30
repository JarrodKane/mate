import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { pageVariants, pageTransition } from '../helpers/animation';

interface ProfileProps {
    direction: number;
}

const Container = styled(motion.div)`
    display: flex;
    justify-content: center;
    flex-grow: 1;
`;

const Profile: React.FC<ProfileProps> = ({ direction }) => {
    const compDir = 3;

    return (
        <Container
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants(direction, compDir)}
            transition={pageTransition}
        >
            <div>
                <div>Image</div>
                <div>Name</div>
                <div>Ocupation</div>
            </div>
            <div>
                <div>Profile settings</div>
                <div>Job settings</div>
            </div>
        </Container>
    );
};

export default Profile;
