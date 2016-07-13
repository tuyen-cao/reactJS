import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import AddNewBar from './components/AddNewBar';
import VisibleTodoList from './components/VisibleTodoList';
import ControlBlock from './components/ControlBlock';
import todoActionCreator from './actions/todoActionCreator';
import todoStore from './store/todoStore';
import constants from './constants';
import { connect, Provider } from 'react-redux';

import './css/main.css';

const dummyTodos = [
  { isCompleted: true,  text: 'make components', key: 1 },
  { isCompleted: false, text: 'design actions', key: 2 },
  { isCompleted: true, text: 'implement reducer', key: 3 },
  { isCompleted: false, text: 'connect components', key: 4 }
]


class TodoApp extends Component {
	render() {
		return(
			<div className="container">
				<h1>TODO APP</h1>
				<AddNewBar {...this.props} />
				<VisibleTodoList  />
				<ControlBlock {...this.props} />
			</div>
		); 
	}
}
TodoApp.propTypes = {	
	todos: PropTypes.arrayOf(PropTypes.shape({
		isCompleted: PropTypes.bool,
		title: PropTypes.string
	}))
};

render(
	<Provider store={todoStore}>
    	<TodoApp />
  	</Provider>, document.querySelector('#root')
);
