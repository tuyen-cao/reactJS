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
		title: PropTypes.string
	})),
	onTodoClick: PropTypes.func
}

export default TodoList;


/*
const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
*/