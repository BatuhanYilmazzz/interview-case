import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

//reducers
import storeReducer from './reducers';

//sage watch
import { watchHome } from './sagas';

//merge deducer with combineReducers()
const rootReducer = combineReducers({
  storeData: storeReducer
});

const sagaMiddleware = createSagaMiddleware();

//global store for app

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchHome);

export default store;
