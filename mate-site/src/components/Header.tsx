import React from 'react';

interface HeaderProps {
    text: string;
}

export const Header: React.FC<HeaderProps> = ({ text }) => {
    return <div>{text}</div>;
};

export default Header;
