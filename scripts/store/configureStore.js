import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import chromecastReducer from '../reducers';

const logger = createLogger({
  level: 'info',
  collapsed: true,
  predicate: (getState, action) => action.type !== AUTH_REMOVE_TOKEN
});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  logger
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(chromecastReducer, initialState);
}
