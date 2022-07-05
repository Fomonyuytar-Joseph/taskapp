/* eslint-disable */

// import { ADD_TODO, TOGGLE_TODO } from '../actionsTypes';

const initialState = {
  todos: [{
    id:1,
    content:'coding',

  }]
}

const todos = (state = initialState, action) => {
    switch(action.type){
        default:
            return state.todos
    }
}

export default todos;