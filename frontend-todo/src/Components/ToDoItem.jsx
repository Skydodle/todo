import React, { useState } from 'react';

const ToDoItem = ({ todo, handleToggle, handleUpdate, complete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  const handleClick = (e) => {
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
    handleUpdate(currentTask);
    setIsEditing(false);
  };

  return (
    <>
      {!isEditing ? (
        <div className="stack-small">
          <div className="c-cb">
            <input id={todo.id} type="checkbox" defaultChecked={complete} onChange={handleClick} />
            <label
              name="todo"
              value={todo.id}
              className={todo.complete ? 'strike todo-label' : 'todo-label'}
              htmlFor={todo.id}>
              {todo.task}
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn__edit" onClick={() => handleEditClick(todo)}>
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
            <button type="button" className="btn todo-cancel" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
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
