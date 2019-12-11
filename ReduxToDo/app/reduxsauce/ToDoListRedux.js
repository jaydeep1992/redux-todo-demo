import {createReducer, createActions} from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  addToDoList: ['task'],
  updateToDoList: ['key'],
  deleteToDoList: ['key'],
});

export const ToDoListTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  toDoList: [],
};

/* ------------- Selectors ------------- */

export const toDoListSelectors = {
  getData: state => state.data,
};

/* ------------- Reducers ------------- */

export const addTask = (state = INITIAL_STATE, action) => {
  const newState = {...state};
  const length = newState.toDoList.length;
  const todo = [
    ...newState.toDoList,
    {id: length + 1, task: action.task, status: false},
  ];
  return {toDoList: todo};
};

export const updateTask = (state, action) => {
  var updateData = [...state.toDoList];
  const index = updateData.findIndex(item => item.id === action.key);
  updateData[index].status = !updateData[index].status;
  return {toDoList: updateData};
};

export const deleteTask = (state, action) => {
  const deleteData = [...state.toDoList];
  var index = deleteData.findIndex(item => item.id === action.key);
  deleteData.splice(index, 1);
  return {toDoList: deleteData};
};

/* ------------- Hookup Reducers To Types ------------- */

export const toDoListReducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TO_DO_LIST]: addTask,
  [Types.UPDATE_TO_DO_LIST]: updateTask,
  [Types.DELETE_TO_DO_LIST]: deleteTask,
});
