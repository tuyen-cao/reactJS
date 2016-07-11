import constants  from '../constants';

const initialState = {
	title: "" 
}

const addNewReducer = (state = initialState , action) => {
	console.log(state, action);
	switch (action.type) {
		case constants.ADD_NEW:
			return {
				title: action.title
			};
		default:
			return state;
	}
}

export default addNewReducer;