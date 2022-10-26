import React, { useState } from 'react';
import { AddToDo, Header, ToDoList, FilterButtons } from './components';
import useLocalStorage from './utils/useLocalStorage';
import { nanoid } from 'nanoid';
// import data from './utils/data.json';

const App = () => {
  const [toDoList, setToDoList] = useLocalStorage('toDoList', []);
  const [filter, setFilter] = useState('All');

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

  const handleUpdate = (taskObj) => {
    const updateItem = toDoList.map((item) => {
      return item.id === taskObj.id ? taskObj : item;
    });
    setToDoList(updateItem);
  };

  const handleDelete = () => {
    const filtered = toDoList.filter((item) => {
      return !item.complete;
    });
    setToDoList(filtered);
  };

  return (
    <div className="app stack-large">
      <Header />
      <AddToDo handleAdd={handleAdd} />
      <FilterButtons setFilter={setFilter} />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        filter={filter}
      />
    </div>
  );
};

export default App;
