import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ toDoList, handleToggle }) => {
  return (
    <div>
      {toDoList.map((item) => {
        return <ToDoItem todo={item} key={item.id + item.task} handleToggle={handleToggle} />;
      })}
    </div>
  );
};

export default ToDoList;
