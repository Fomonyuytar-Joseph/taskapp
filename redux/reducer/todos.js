/* eslint-disable */

import {ADD_TODO, DELETE_TODO, EDIT_TODO} from '../actionsTypes';

const initialState = [];

const todos = (state = initialState, action) => {
  const {payload} = action;
  console.log(payload);


  switch (action.type) {
    case ADD_TODO:
      return [{todo: payload.todo,id:payload.id}, ...state];

    case DELETE_TODO:
      const todos = state.filter(todo => todo.id != payload.id);

      return [...todos]

      case EDIT_TODO:

         console.log(payload)
        state.forEach((todo) => {
          if (todo.id === action.payload.id) {
            
            todo.content = action.payload.todo;
          }
        });
        // const updatedTodo =todos.map((todo) => {
        //   todo.id === payload.id ? updatedTodo : todo;
        //   })


          return state
      
    default:
      return state;
  }
};

export default todos;
