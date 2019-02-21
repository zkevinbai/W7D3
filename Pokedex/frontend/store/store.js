import rootReducer from '../reducers/root_reducer';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const configureStore = () => (
  createStore (rootReducer, applyMiddleware(logger))
);

export default configureStore;