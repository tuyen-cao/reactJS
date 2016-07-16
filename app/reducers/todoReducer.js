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
			var id = Math.floor(Math.random() * 10) + 1; 
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
