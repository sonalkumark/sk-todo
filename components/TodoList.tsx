import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const { todos, onClick } = props;
  return (
    <div className="p-2">
      {todos.map((item, index) => (
        <TodoItem
          key={index}
          completed={item.isCompleted}
          text={item.name}
          onClick={() => onClick(item.name)}
        />
      ))}
    </div>
  );
}
