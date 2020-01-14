import React from "react";
import TodoAdder from "./containers/TodoAdderContainer";
import TodoList from "./containers/TodoListContainer";
import FilterPanel from "./containers/FilterContainer";

export default class AppWithRedux extends React.Component {
  render() {
    return (
      <div className="p-2">
        <FilterPanel />
        <TodoAdder />
        <TodoList />
      </div>
    );
  }
}
