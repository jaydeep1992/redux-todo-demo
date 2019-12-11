import {combineReducers} from 'redux';

// Imports: Reducers
import taskListReducer from './TaskList';

// Redux: App Reducer
const appReducer = combineReducers({
  taskList: taskListReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

// Exports
export default rootReducer;
