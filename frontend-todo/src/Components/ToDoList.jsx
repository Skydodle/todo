import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ toDoList, handleToggle, handleDelete, handleUpdate }) => {
  return (
    <div>
      <ul className="todo-list stack-large stack exception" role="list">
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
      </ul>
      {toDoList.length ? (
        <button type="button" className="btn btn__danger" onClick={handleDelete}>
          Delete Completed
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default ToDoList;
