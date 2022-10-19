import React, { useState } from 'react';
import './App.css';
import data from './data.json';

import { Header, ToDoList } from './Components';

function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    const mapped = toDoList.map((item) => {
      return item.id === Number(id) ? { ...item, complete: !item.complete } : { ...item };
    });
    setToDoList(mapped);
  };

  const handleDelete = () => {
    const filtered = toDoList.filter((item) => {
      return !item.complete;
    });
    setToDoList(filtered);
  };

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
