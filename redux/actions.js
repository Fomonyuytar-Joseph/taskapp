/* eslint-disable */

import {ADD_TODO, DELETE_TODO ,EDIT_TODO} from './actionsTypes';

export const addTodo = content => dispatch => {
  let id = Math.random().toString();
  dispatch({
    type: ADD_TODO,
    payload: {todo: content, id},
  });
};

const add = content=>({name:'yaya'})

export const deleteTodo = id => ({
  type: DELETE_TODO,

  payload: {
    id,
  },
});

export const editTodo =( content ,id )=>  dispatch => {

      

    dispatch({

      type:EDIT_TODO,
      payload: { todo:content , id }
       



    }



    )



}
