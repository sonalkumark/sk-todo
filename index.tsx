import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppWithRedux from './AppWithRedux';
import todoReducer from './reducers/todoReducers';
import filterReducer from './reducers/filterReducer';
import { addTodo, setFilter, toggleTodo } from './actions';
import { createStore, combineReducers } from 'redux';
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

let store = createStore(combineReducers({
  todos: todoReducer, filter: filterReducer
}));
// store.subscribe(() => console.log(store.getState()));
const rootElement = document.getElementById('root');
const App = <Provider store={store}><AppWithRedux /></Provider>
ReactDOM.render(App, rootElement);