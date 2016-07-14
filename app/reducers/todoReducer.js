import constants  from '../constants';

const dummyTodos = [
  { key:1, isCompleted: true,  text: 'make components', id: 1 },
  { key:2, isCompleted: false, text: 'design actions', id: 2 },
  { key:3, isCompleted: true, text: 'implement reducer', id: 3 },
  { key:4, isCompleted: false, text: 'connect components', id: 4 }
]

const initialState = {
	target:constants.GET_ALL,
	todos:  dummyTodos
}


const todo = (state = [] , action) => {
	switch (action.type) {
		case constants.TOGGLE_TODO:
			if (state.id !== action.id) {
		        return state
		    }
		    else {
		    	state = Object.assign(state, {
					isCompleted: !state.isCompleted
				});
				return state
		    }
		case constants.ADD_NEW:
			console.log(action)
			return {
		        text: action.title,
		        isCompleted: false
			};
			//return state
		default:
		  return state
	}
}


const todosReducer = (state = initialState , action) => {
	console.log(state, action);
	switch (action.type) {
		case constants.SET_VISIBILITY_FILTER:
		  	return Object.assign(state, {
				target: action.target
			});
		case constants.TOGGLE_TODO:
			state.todos = state.todos.map(t =>
		        todo(t, action)
		    );
		    
		    return Object.assign(state, {
				todos: state.todos
			});
		case constants.ADD_NEW:
			var newItem = todo(state.todos.length + 1, action);
			newItem = Object.assign(newItem, {
				key : state.todos.length + 1
			})
			var temp = [
		        ...state.todos,
		        newItem
		      ]
			return Object.assign(state, {
				todos: temp
			})
		default:
		  return state
	}
}

export default todosReducer;
