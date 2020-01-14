import React from 'react';
import TodoItem from './components/TodoItem';

export default function App() {
  return (
    <div>
      <TodoItem completed={true} text={"sdfsdf"} />
    </div>
  );
}