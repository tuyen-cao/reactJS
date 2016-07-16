import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';


const logger = (store) => (dispatch) => (action) => {
    /*console.log('dispatching:', action);
    console.log('next state:', store.getState());
  	return next(action);*/

	console.log('Dispatching:', action.type)
	console.log('Old state:', store.getState())
	var result = dispatch(action)
	console.log('New state:', store.getState())
	return result
};

const todoStore = createStore(
  reducers,
  applyMiddleware(logger)
);

export default todoStore;