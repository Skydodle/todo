import React, { useState } from 'react';
import './App.css';
import data from './data.json';

import { Header } from './Components';

function App() {
  const [toDoList, setToDoList] = useState(data);

  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
