import {combineReducers} from 'redux';

// Imports: Reducers
import countReducer from './Counter';

// Redux: App Reducer
const appReducer = combineReducers({
  count: countReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

// Exports
export default rootReducer;
