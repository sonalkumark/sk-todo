import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import TodoAdder from "../components/TodoAdder";

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(addTodo(text))
})

export default connect(null, mapDispatchToProps)(TodoAdder);