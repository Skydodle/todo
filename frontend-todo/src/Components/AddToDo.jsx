import React, { useState } from 'react';

const AddTodo = ({ handleAdd }) => {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="new-todo-input"
        name="text"
        className="input input__lg"
        placeholder="Enter new task..."
        value={input}
        onChange={handleInput}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
