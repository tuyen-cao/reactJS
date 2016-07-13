import { connect } from 'react-redux';
import TodoList from './TodoList';
import constants  from '../constants';
import todoStore from '../store/todoStore';


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case constants.GET_ALL:
        return todos
    case constants.GET_COMPLETED:
      console.log(filter + "GET_COMPLETED");
        return todos.filter(t => t.isCompleted)
    case constants.GET_ACTIVE:
      console.log(filter + "GET_ACTIVE");
      return todos.filter(t => !t.isCompleted)
  }
}

const mapStateToProps = (state) => {
  console.log(state);
    return {
    todos: getVisibleTodos(state.todoReducer.todos, state.todoReducer.target)
  }
};


const VisibleTodoList = connect(
  mapStateToProps
)(TodoList)

export default VisibleTodoList