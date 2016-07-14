import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import AddNewBar from './components/AddNewBar';
import VisibleTodoList from './components/VisibleTodoList';
import ControlBlock from './components/ControlBlock';
import todoStore from './store/todoStore';
import { connect, Provider } from 'react-redux';

import './css/main.css';

class TodoApp extends Component {
	render() {
		return(
			<div className="container">
				<h1>TODO APP</h1>
				<AddNewBar />
				<VisibleTodoList  />
				<ControlBlock />
			</div>
		); 
	}
}
TodoApp.propTypes = {	
	todos: PropTypes.arrayOf(PropTypes.shape({
		isCompleted: PropTypes.bool,
		text: PropTypes.string
	}))
};

render(
	<Provider store={todoStore}>
    	<TodoApp />
  	</Provider>, document.querySelector('#root')
);
