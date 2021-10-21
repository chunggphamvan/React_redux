import {
  ADD_TODO,
  CANCEL_TODO,
  DELETE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
} from '../constants/actionType';
import { initData } from './state';

export const reducer = (state = initData, action) => {
  let newState = [...state];

  switch (action.type) {
    case ADD_TODO:
      newState.push(action.payload);
      return newState;
    case UPDATE_TODO:
      newState.forEach((item) => {
        if (item.id === action.payload.id) {
          item.isUpdate = false;
          item.name = action.payload.name;
          item.price = action.payload.price;
        }
      });
      return newState;
    case CANCEL_TODO:
      newState.forEach((item) => {
        if (item.id === action.payload) {
          item.isUpdate = false;
        }
      });
      return newState;
    case EDIT_TODO:
      newState.forEach((item) => {
        if (item.id === action.payload) {
          item.isUpdate = true;
        }
      });
      return newState;
    case DELETE_TODO:
      newState = newState.filter((todo) => todo.id !== action.payload);
      return newState;
    default:
      return state;
  }
};