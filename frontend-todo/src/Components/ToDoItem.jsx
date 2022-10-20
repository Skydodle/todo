import React, { useState } from 'react';

const ToDoItem = ({ todo, handleToggle, handleUpdate }) => {
  const [checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleClick = (e) => {
    handleChecked();
    handleToggle(e.currentTarget.id);
  };

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTask({ ...todo });
  };

  const handleEditInput = (e) => {
    setCurrentTask({ ...currentTask, task: e.currentTarget.value });
    // console.log(currentTask);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    handleUpdate(currentTask, currentTask.id);
    setIsEditing(false);
  };

  return (
    <>
      {!isEditing ? (
        <form className="todo">
          <label name="todo" value={todo.id} className={checked ? 'strike' : ''}>
            <button
              onClick={() => handleEditClick(todo)}
              style={{ marginLeft: '2px', marginRight: '4px' }}>
              Edit
            </button>
            <input id={todo.id} type="checkbox" onChange={handleClick} className="checkForm" />
            {todo.task}
          </label>
        </form>
      ) : (
        <form onSubmit={handleEditSubmit}>
          <label name="updateTodo">Update todo:</label>
          <input
            name="updateTodo"
            type="text"
            value={currentTask.task}
            onChange={handleEditInput}
            placeholder={currentTask.task}
          />
          <button>Submit</button>
        </form>
      )}
    </>
  );
};

export default ToDoItem;
