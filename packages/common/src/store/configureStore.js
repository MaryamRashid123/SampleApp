import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./reducers";
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

const createRootReducer = () =>
  combineReducers({
    ...rootReducer,
  });

function configureStoreProd(initialState) {
  const middlewares = [thunk];
  const store= createStore(
    createRootReducer(),
    initialState,
    //compose(applyMiddleware(...middlewares))
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}

function configureStoreDev(initialState) {
  const middlewares = [thunk];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(
    createRootReducer(),
    initialState,
    //composeEnhancers(applyMiddleware(...middlewares))
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}



const configureStore =
  process.env.NODE_ENV === "production"
    ? configureStoreProd
    : configureStoreDev;

export default configureStore;
