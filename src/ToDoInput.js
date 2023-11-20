import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ToDoInput = ({ onAdd }) => {
    const [addedToDo, setAddedToDo] = useState('');

    const inputChange = (event) => {
        setAddedToDo(event.target.value);
    };

    const handleAddClick = () => {
        onAdd(addedToDo);
        setAddedToDo('');
    };

    return (
        <div>
            <TextField
                id="todo-input"
                fullWidth
                label="what to do?"
                variant="outlined"
                value={addedToDo}
                onChange={inputChange}
                onKeyDown={(ev) => {
                    if (ev.key === 'Enter') {
                        handleAddClick();
                        ev.preventDefault();
                    }
                }}
            />
            <Button variant="text" onClick={handleAddClick}>
                ADD
            </Button>
        </div>
    );
};

export default ToDoInput;