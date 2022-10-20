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
    <form className="addForm" onSubmit={handleSubmit}>
      <input value={input} onChange={handleInput} type="text" placeholder="Enter new task..." />
      <button>Add</button>
    </form>
  );
};

export default AddTodo;
