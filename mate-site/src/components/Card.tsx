import React from 'react';

interface CardProps {
    text?: string;
}

export const Card: React.FC<CardProps> = ({ text }) => {
    return <div>Card</div>;
};

export default Card;
