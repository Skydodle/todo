import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    const savedList = localStorage.getItem(key);
    return savedList ? JSON.parse(savedList) : initialValue;
  });

  // Define a setValue function to redine the useState hook to set localStorage
  // Allow value to be a function so we have same API as useState
  // Every time save state also save to localStorage
  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };
  return [storedValue, setValue];
}

export default useLocalStorage;
