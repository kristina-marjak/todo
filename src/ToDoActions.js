import Button from '@mui/material/Button';

const ToDoActions = ({ onClearAll, onClearChecked }) => {
    return (
        <div>
            <Button variant="text" onClick={onClearAll}>
                X All
            </Button>
            <Button variant="text" onClick={onClearChecked}>
                X Checked
            </Button>
        </div>
    );
};

export default ToDoActions;