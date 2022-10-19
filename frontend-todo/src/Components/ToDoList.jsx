import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ toDoList }) => {
  return (
    <div>
      {toDoList.map((item) => {
        return <ToDoItem todo={item} />;
      })}
    </div>
  );
};

export default ToDoList;
