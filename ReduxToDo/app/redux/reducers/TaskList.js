import {
  ADD_TO_DO_LIST_DATA,
  UPDATE_TO_DO_LIST_DATA,
  DELETE_TO_DO_LIST_DATA,
} from '../types';

const initialState = {
  taskList: [],
};

const taskListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DO_LIST_DATA:
      const newState = {...state};
      const length = newState.taskList.length;
      const todo = [
        ...newState.taskList,
        {id: length + 1, task: action.payload, status: false},
      ];
      return {taskList: todo};
    case UPDATE_TO_DO_LIST_DATA:
      var updateData = [...state.taskList];
      const index = updateData.findIndex(item => item.id === action.payload);
      updateData[index].status = !updateData[index].status;
      return {taskList: updateData};
    case DELETE_TO_DO_LIST_DATA:
      const deleteData = [...state.taskList];
      var indexDelete = deleteData.findIndex(
        item => item.id === action.payload,
      );
      deleteData.splice(indexDelete, 1);
      return {taskList: deleteData};
    default:
      return state;
  }
};

export default taskListReducer;
