import React, { Component, PropTypes } from 'react';
import todoStore from '../store/todoStore';
import TodoItem from './TodoItem';


class TodoList extends Component {
	render() {
		var todos = this.props.todos;
	    return (
	    	<ul >
				{todos.map(todo =>
					<TodoItem {...todo} 
						onClick = {e => { 
				         this.props.onTodoClick(todo.id)
			       	}} />
				)}
			</ul>
	);}
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		isCompleted: PropTypes.bool,
		text: PropTypes.string,
		id: PropTypes.number
	})),
	onTodoClick: PropTypes.func
}

export default TodoList;