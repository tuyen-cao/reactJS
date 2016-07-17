import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { loadState, saveState } from './localStorage';



const logger = (store) => (dispatch) => (action) => {
	console.log('Dispatching:', action.type)
	console.log('Old state:', store.getState())
	var result = dispatch(action)
	console.log('New state:', store.getState())
	return result
};

const persistedState = loadState();

const todoStore = createStore(
  reducers,
  persistedState,
  applyMiddleware(logger)
);

todoStore.subscribe(() => {
	saveState(todoStore.getState());
})

console.log(loadState())

export default todoStore;