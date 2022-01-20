import React from 'react';
import TodoList from './components/TodoList';
import UserList from './components/UserList';

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <UserList />
      <TodoList />
    </div>
  )
}

export default App
