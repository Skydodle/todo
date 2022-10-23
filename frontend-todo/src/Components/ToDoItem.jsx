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
        <div className="stack-small">
          <div className="c-cb">
            <input
              id={todo.id}
              type="checkbox"
              defaultChecked={todo.complete}
              onChange={handleClick}
            />
            <label
              name="todo"
              value={todo.id}
              className={checked ? 'strike todo-label' : 'todo-label'}
              htmlFor={todo.id}>
              {todo.task}
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn" onClick={() => handleEditClick(todo)}>
              Edit
            </button>
          </div>
        </div>
      ) : (
        <form className="stack-small" onSubmit={handleEditSubmit}>
          <div className="form-group">
            <label className="todo-label" htmlFor={todo.id}>
              Edit this task
            </label>
            <input
              id={todo.id}
              className="todo-text"
              type="text"
              value={currentTask.task}
              onChange={handleEditInput}
              placeholder={currentTask.task}
            />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn__primary todo-edit">
              Update
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default ToDoItem;
