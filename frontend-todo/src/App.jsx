import React, { useState, useEffect } from 'react';
import { AddToDo, Header, ToDoList, FilterButtons } from './components';
import { FILTER_MAP, FILTER_NAMES } from './utils/filterMap';
import { nanoid } from 'nanoid';
// import data from './utils/data.json';

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

  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
  }, [toDoList]);

  const handleAdd = (input) => {
    let newList = [...toDoList];
    newList = [...newList, { id: nanoid(), task: input, complete: false }];
    setToDoList(newList);
  };

  const handleToggle = (id) => {
    const mapped = toDoList.map((item) => {
      return item.id === id ? { ...item, complete: !item.complete } : { ...item };
    });
    setToDoList(mapped);
  };

  const handleUpdate = (input, id) => {
    const updateItem = toDoList.map((item) => {
      return item.id === id ? input : item;
    });
    setToDoList(updateItem);
  };

  const handleDelete = () => {
    const filtered = toDoList.filter((item) => {
      return !item.complete;
    });
    setToDoList(filtered);
  };

  const taskNoun = toDoList.length !== 1 ? 'tasks' : 'task';
  const remainingTasks = `${toDoList.length} ${taskNoun} remaining`;

  return (
    <div className="app stack-large">
      <Header />
      <AddToDo handleAdd={handleAdd} />
      <FilterButtons />
      <h2 id="list-heading">{remainingTasks}</h2>
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default App;
