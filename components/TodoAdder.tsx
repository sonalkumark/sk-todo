import React from "react";

export default function TodoAdder({ onSubmit }) {
  let inputHandle;
  function onSubmitHandler(e) {
    e.preventDefault();
    if (!inputHandle.value.trim()) {
      return;
    } else {
      onSubmit(inputHandle.value);
      inputHandle.value = "";
    }
  }
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input className="control" type="text" ref={node => (inputHandle = node)} />
        <button className="" type="submit">Add</button>
      </form>
    </div>
  );
}
