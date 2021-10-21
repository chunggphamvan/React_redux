import {
  ADD_TODO,
  CANCEL_TODO,
  DELETE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
} from '../constants/actionType';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function deleteTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
}

export function cancelTodo(todoId) {
  return {
    type: CANCEL_TODO,
    payload: todoId,
  };
}

export function editTodo(todoId) {
  return {
    type: EDIT_TODO,
    payload: todoId,
  };
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
}