import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";

const filterTodos = (filter, todos) => {
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
  } else {
    return todos;
  }
};

const mapStateToProps = state => ({
  todos: filterTodos(state.filter, state.todos)
});

const mapDispatchToProps = dispatch => ({
  onClick: name => dispatch(toggleTodo(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
