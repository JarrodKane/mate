import React from 'react';
import styled from 'styled-components';

import myImage from '../images/allec-gomes.jpg';

interface CardProps {
    name: string;
    price: number | string;
    matches?: string[];
    description: string;
}

const MainImage = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3em 2em;
    height: 700px;
    width: 500px;
    background-size: cover;
    background-image: url(${myImage});
    justify-content: flex-end;
`;

const Content = styled.div`
    padding: 1em;
    margin: -2em 2em;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 10px;
    border-bottom: 1px solid #c9c9c9;
`;

export const Card: React.FC<CardProps> = ({ name, price, matches, description }) => {
    return (
        <MainImage>
            <Content>
                <div>{name}</div>
                <div>Salary: {price}</div>
                <div>Match: </div>
                <div>{description}</div>
            </Content>
        </MainImage>
    );
};

export default Card;
