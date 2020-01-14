import React from "react";
import TodoAdder from "./components/TodoAdder";
import TodoList from "./components/TodoList";
import FilterPanel from "./components/FilterPanel";

export default class App extends React.Component {
  state = {
    todos: [],
    filter: "SHOW_ALL"
  };
  onSubmitHandler = e => {
    this.setState({
      todos: this.state.todos.concat({ isCompleted: false, name: e })
    });
  };
  onClickHandler = e => {
    this.state.todos.forEach(todo => {
      if (todo.name == e) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
    this.setState({
      todos: this.state.todos
    });
  };
  onFilterHandler = e => {
    this.setState({
      filter: e
    });
  };
  getTodos = filter => {
    const todos = this.state.todos;
    if (filter.trim()) {
      switch (filter) {
        case "SHOW_COMPLETED":
          return todos.filter(todo => todo.isCompleted);
          break;
        case "SHOW_PENDING":
          return todos.filter(todo => !todo.isCompleted);
          break;
        default:
          return todos;
      }
    }
  };
  render() {
    return (
      <div className="p-2">
        <FilterPanel
          filter={this.state.filter}
          onClick={this.onFilterHandler}
        />
        <TodoAdder onSubmit={this.onSubmitHandler} />
        <TodoList
          todos={this.getTodos(this.state.filter)}
          onClick={this.onClickHandler}
        />
      </div>
    );
  }
}
