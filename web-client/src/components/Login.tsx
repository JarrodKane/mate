import React, { useState } from 'react';
import { StringLiteral } from 'typescript';
import { v4 as uuidv4 } from 'uuid';

// This is used as the main login screen if for someone to signup or to login with an exisiting account

interface LoginProps {
    createId: (id: string) => void;
}

const Login: React.FC<LoginProps> = ({ createId }) => {
    const [tempId, setTempId] = useState();

    const checkId = (e: React.SyntheticEvent) => {
        e.preventDefault();
    };

    // TODO: Change this so instead of it instantly setting the ID for you and sending you to the Dashboard, it displays your new ID and gives you time to copy it down, then allows you to enter it

    const createNewId = () => {
        createId(uuidv4());
    };

    return (
        <div>
            <div>Login</div>

            <div>{tempId}</div>
            <form onSubmit={checkId}>
                <input type="text"></input>
                <button>Submit</button>
            </form>
            <button onClick={createNewId}>Generate ID</button>
        </div>
    );
};

export default Login;
