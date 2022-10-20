import React, { useState, useEffect } from 'react';
import './App.css';
// import data from './data.json';

import { AddToDo, Header, ToDoList } from './Components';

const App = () => {
  // const [toDoList, setToDoList] = useState(data);
  const [toDoList, setToDoList] = useState(() => {
    const savedList = localStorage.getItem('toDoList');
    if (savedList) {
      return JSON.parse(savedList);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
  }, [toDoList]);

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
      <AddToDo handleAdd={handleAdd} />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
