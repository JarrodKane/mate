import React from 'react';

interface DecPanelProps {
    text: string;
}

export const DecPanel: React.FC<DecPanelProps> = ({ text }) => {
    return <div>{text}</div>;
};

export default DecPanel;
