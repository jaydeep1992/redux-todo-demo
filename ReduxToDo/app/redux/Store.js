import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware];

// Add middleware to redux store
const middlewares = applyMiddleware(...middleWare);

const store = createStore(compose(middlewares));

// Enable persistence
export default {store};
