import constants  from '../constants';

const todoReducer = (state = [] , action) => {
	console.log(state, action);
	switch (action.type) {
		case constants.ADD_NEW:
			return {
				title: action.title
			};
		case constants.GET_ALL: 
			return todos;
		default:
			return state
	}
}

export default todoReducer;