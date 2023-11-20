import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, onDelete, onToggle }) => {
    return (
        <div className='todolist'>
            {todos.map((todo) =>
                !todo.isDeleted ? (
                    <ToDoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} />
                ) : null
            )}
        </div>
    );
};

export default ToDoList;