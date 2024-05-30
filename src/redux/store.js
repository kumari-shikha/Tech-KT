import { applyMiddleware, createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./cake/sagas";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(cakeReducer, applyMiddleware(sagaMiddleware));

store.runSaga = sagaMiddleware.run(rootSaga);

export default store;