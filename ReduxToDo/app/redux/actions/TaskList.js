import {
  ADD_TO_DO_LIST_DATA,
  UPDATE_TO_DO_LIST_DATA,
  DELETE_TO_DO_LIST_DATA,
} from '../types';

export function addToDoList(task) {
  return {
    type: ADD_TO_DO_LIST_DATA,
    payload: task,
  };
}
export function updateToDoList(key) {
  return {
    type: UPDATE_TO_DO_LIST_DATA,
    payload: key,
  };
}
export function deleteToDoList(key) {
  return {
    type: DELETE_TO_DO_LIST_DATA,
    payload: key,
  };
}
