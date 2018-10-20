import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from 'App/Redux/Reducers';

export default () => {
  const store = createStore(
    rootReducer,
    {},
    compose(
      applyMiddleware(thunk, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
  );

  return store;
};