import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const setLocalStorage = (id, data) => {
  window.localStorage.setItem(id, JSON.stringify(data));
};

describe('LocalStorage Mock Tests', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('adds data into local storage', () => {
    const mockID = '123';
    const mockJSON = { data: 'json data' };
    setLocalStorage(mockID, mockJSON);
    expect(localStorage.getItem(mockID)).toEqual(JSON.stringify(mockJSON));
  });

  it('overwrites old data in local storage with new data', () => {
    const mockID = '456';
    const mockOldData = { data: 'old data' };
    const mockNewData = { data: 'new data' };

    window.localStorage.setItem(mockID, JSON.stringify(mockOldData));
    expect(localStorage.getItem(mockID)).toEqual(JSON.stringify(mockOldData));

    setLocalStorage(mockID, mockNewData);
    window.localStorage.setItem(mockID, JSON.stringify(mockNewData));
  });
});

describe('App Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
  });
});
