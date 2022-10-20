import React, { useState } from 'react';

const ToDoItem = ({ todo, handleToggle }) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleClick = (e) => {
    handleChecked();
    handleToggle(e.currentTarget.id);
  };

  return (
    <form className="todo">
      <label name="todo" value={todo.id} className={checked ? 'strike' : ''}>
        {todo.task}
        <input id={todo.id} type="checkbox" onChange={handleClick} className="checkForm" />
      </label>
    </form>
  );
};

export default ToDoItem;
