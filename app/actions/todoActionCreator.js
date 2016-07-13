import constants from '../constants';

const nextTodoId = 0;


const todoActionCreator = {
  addNewTodo(title) {
    return {
      type: constants.ADD_NEW,
      title: title
    };
  },
  filterTodo(target, todos) {
  	return {
      type: constants.SET_VISIBILITY_FILTER,
      target: target
    };
  }
};

export default todoActionCreator;
