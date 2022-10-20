import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ toDoList, handleToggle, handleDelete, handleUpdate }) => {
  return (
    <div className="container">
      {toDoList.map((item) => {
        return (
          <ToDoItem
            todo={item}
            key={item.id}
            handleToggle={handleToggle}
            handleUpdate={handleUpdate}
          />
        );
      })}

      <button style={{ margin: '20px' }} onClick={handleDelete}>
        Delete Completed
      </button>
    </div>
  );
};

export default ToDoList;
