import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = ['Option 1', 'Option 2'];

interface SearchProps {
    setSearchValue(arg: string | null | undefined): undefined | void;
}
const ControllableStates: React.FC<SearchProps> = ({ setSearchValue }) => {
    const [value, setValue] = useState<string | null>(options[0]);
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <Autocomplete
                value={value}
                onChange={(event: any, newValue: string | null) => {
                    setValue(newValue);
                    setSearchValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} variant="outlined" />}
            />
            <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
        </div>
    );
};

export default ControllableStates;

// Taken from https://material-ui.com/components/autocomplete/
