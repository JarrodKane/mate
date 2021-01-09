import React, { useState } from 'react';
import { StringLiteral } from 'typescript';
import { v4 as uuidv4 } from 'uuid';

// This is used as the main login screen if for someone to signup or to login with an exisiting account

interface LoginProps {
    createId: (id: string) => void;
}

const Login: React.FC<LoginProps> = ({ createId }) => {
    const [tempId, setTempId] = useState();

    const createNewId = () => {
        createId(uuidv4());
    };

    return (
        <div>
            <div>Login</div>

            <div>{tempId}</div>
            <button onClick={createNewId}>Generate ID</button>
        </div>
    );
};

export default Login;
