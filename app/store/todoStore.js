import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';


const logger = (store) => (next) => (action) => {
    console.log('dispatching:', action);
  	return next(action);
};

const todoStore = createStore(
  reducers,
  applyMiddleware(logger)
);

export default todoStore;