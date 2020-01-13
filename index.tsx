import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import todoReducer from './reducers/todoReducers';
import filterReducer from './reducers/filterReducer';
import { addTodo, setFilter, toggleTodo } from './actions';
import { createStore, combineReducers } from 'redux';
import './style.css';

let store = createStore(combineReducers({
  todos: todoReducer, filter: filterReducer
}));
store.subscribe(() => console.log(store.getState()));
store.dispatch(addTodo("Milk"));
store.dispatch(addTodo("Potato"));
store.dispatch(addTodo("Onion"));
store.dispatch(setFilter("SHOW_PENDING"));
store.dispatch(toggleTodo("Potato"));

