import React, { Component, PropTypes } from 'react';
import todoStore from '../store/todoStore';
import TodoItem from './TodoItem';


class TodoList extends Component {
	render() {
		const {todos} = this.props;
	    return (
	    	<ul>
				{this.props.todos.map(todo =>
					<TodoItem {...todo} />
				)}
			</ul>
	);}
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		isCompleted: PropTypes.bool,
		text: PropTypes.string
	})),
	onTodoClick: PropTypes.func
}

export default TodoList;