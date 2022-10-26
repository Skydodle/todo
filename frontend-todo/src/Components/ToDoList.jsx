import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ toDoList, handleToggle, handleDelete, handleUpdate, filter }) => {
  const filterMap = {
    All: () => true,
    Active: (item) => !item.complete,
    Completed: (item) => item.complete
  };

  const taskList = toDoList.filter(filterMap[filter]).map((item) => {
    return (
      <ToDoItem
        todo={item}
        key={item.id}
        complete={item.complete}
        handleToggle={handleToggle}
        handleUpdate={handleUpdate}
      />
    );
  });

  const taskNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const remainingTasks = `${taskList.length} ${taskNoun} remaining`;

  return (
    <div>
      <h2 id="list-heading">{remainingTasks}</h2>
      <ul className="todo-list stack-large stack exception" role="list">
        {taskList}
      </ul>
      {taskList.length ? (
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
