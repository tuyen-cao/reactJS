import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import AddNewBar from './components/AddNewBar';
import TodoList from './components/TodoList';
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
];

class TodoApp extends Component {
	render() {
		return(
			<div className="container">
				<h1>TODO APP</h1>
				<AddNewBar {...this.props} />
				<TodoList todos = {dummyTodos} />
				<ControlBlock />
			</div>
		); 
	}
}

TodoApp.propTypes = {
	title: PropTypes.string,
	onCreate: PropTypes.func,
	onFilter: PropTypes.func,
	todos: PropTypes.arrayOf(PropTypes.shape({
		isCompleted: PropTypes.bool,
		title: PropTypes.string
	})),
};

const mapStateToProps = (state) => {
	return {
		todos: state.addNewReducer.array
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onCreate: (title) => dispatch(todoActionCreator.addNewTodo(title)),
		onFilter: (target) => dispatch(todoActionCreator.filterTodo(target))
	}
};

const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

render(
	<Provider store={todoStore}>
    	<TodoAppContainer />
  	</Provider>, document.querySelector('#root')
);
