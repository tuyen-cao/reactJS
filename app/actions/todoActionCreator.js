import constants from '../constants';

const nextTodoId = 0;


const todoActionCreator = {
  addNewTodo(title) {
    return {
      type: constants.ADD_NEW,
      title: title
    };
  },
  filterTodo(target) {
  	return {
      type: constants.SET_VISIBILITY_FILTER,
      target: target
    };
  },
  toggleTodo(id){
    return {
      type: constants.TOGGLE_TODO,
      id: id
    }
  }
};

export default todoActionCreator;
