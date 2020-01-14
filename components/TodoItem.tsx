import React from "react";

export default function TodoItem(props) {
  const { text, onClick, completed } = props;
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {text}
    </li>
  );
}
