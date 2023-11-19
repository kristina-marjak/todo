import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const ToDoItem = ({ todo, onDelete, onToggle }) => {
    return (
        <div key={todo.id} className={todo.isChecked ? 'deleted-todo' : ''}>
            <Checkbox checked={todo.isChecked} onChange={() => onToggle(todo.id)} />
            {todo.text}
            <Button variant="text" onClick={() => onDelete(todo.id)}>
                X
            </Button>
        </div>
    );
};

export default ToDoItem;