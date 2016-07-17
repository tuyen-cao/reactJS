import { connect } from 'react-redux';
import TodoList from './TodoList';
import constants  from '../constants';
import todoStore from '../store/todoStore';
import todoActionCreator from '../actions/todoActionCreator';


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case constants.GET_ALL:
      return todos;
    case constants.GET_COMPLETED:
      return todos.filter(t => t.isCompleted);
    case constants.GET_ACTIVE:
      return todos.filter(t => !t.isCompleted);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todoReducer.todos, ownProps.filter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => dispatch(todoActionCreator.toggleTodo(id))
  }
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)


export default VisibleTodoList