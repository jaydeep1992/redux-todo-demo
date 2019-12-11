import {combineReducers} from 'redux';
import {toDoListReducer} from './ToDoListRedux';

/* ------------- Assemble The Reducers ------------- */
export const appReducer = combineReducers({
  toDoList: toDoListReducer,
});

// Exports
export default appReducer;
