import constants  from '../constants';

/*
localStorage["myToods"] = JSON.stringify(myToods);

var todoStore = JSON.parse(localStorage["state"]);
*/
const initialState = {
	target:constants.GET_ALL,
	todos:  []
}


const todo = (state = [] , action) => {
	switch (action.type) {
		case constants.TOGGLE_TODO:
			if (state.id !== action.id) {
		        return state;
		    }
		    else {
		    	state = Object.assign({}, state, {
					isCompleted: !state.isCompleted
				});
				return state
		    }
		case constants.ADD_NEW:
			return {
		        text: action.title,
		        isCompleted: false
			};
		default:
		  return state
	}
}


const todosReducer = (state = initialState , action) => {
	switch (action.type) {
		case constants.SET_VISIBILITY_FILTER:
			state = Object.assign({}, state, {
				target: action.target,
				todos: state.todos
			});
			return state;
		case constants.TOGGLE_TODO:
			state.todos = state.todos.map(t =>
		        todo(t, action)
		    );
		    return Object.assign({},state, {
				todos: state.todos
			});
		case constants.ADD_NEW:
			var id = Math.floor(Math.random() * 1000) + 1; 
			var newItem = todo(id, action);
			newItem = Object.assign(newItem, {
				id: id,
				key : id
			});
			var temp = [
		        ...state.todos,
		        newItem
		      ];
			return Object.assign({}, state, {
				todos: temp
			})
		default:
		  return state
	}
}

export default todosReducer;
