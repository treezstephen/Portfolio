import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { compose } from 'redux';
import RootReducer from './reducers/RootReducer';


const configureStore = (preloadedState = {}) => {

  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk)
  );

  return createStore(
    RootReducer,
    preloadedState,
    enhancer
  );
};

export default configureStore;