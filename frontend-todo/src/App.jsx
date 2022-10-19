import React, { useState } from 'react';
import './App.css';
import data from './data.json';

import { AddToDo, Header, ToDoList } from './Components';

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

  const handleAdd = (input) => {
    let newList = [...toDoList];
    newList = [...newList, { id: toDoList.length + 1, task: input, complete: false }];
    setToDoList(newList);
  };

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleDelete={handleDelete} />
      <AddToDo handleAdd={handleAdd} />
    </div>
  );
}

export default App;
