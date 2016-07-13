import constants  from '../constants';

const dummyTodos = [
  { isCompleted: true,  text: 'make components', key: 1 },
  { isCompleted: false, text: 'design actions', key: 2 },
  { isCompleted: true, text: 'implement reducer', key: 3 },
  { isCompleted: false, text: 'connect components', key: 4 }
]

const initialState = {
	target:constants.GET_ALL,
	todos:  dummyTodos
}



const todoReducer = (state = initialState , action) => {
	console.log(state, action);
	switch (action.type) {
		case constants.SET_VISIBILITY_FILTER:
		  return {
		  	target: action.target,
		  	todos
		  };
		default:
		  return state
	}
}

export default todoReducer;
