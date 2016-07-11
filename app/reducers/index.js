import { combineReducers } from 'redux';
import addNewReducer from './addNewReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
	addNewReducer: addNewReducer,
	todoReducer: todoReducer
});

export default rootReducer;