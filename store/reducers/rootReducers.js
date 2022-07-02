/* eslint-disable */
import { combineReducers } from "redux";



const makeVisibleReducer =(  makeVisibleReducer=false , action )=>{
    if(action.type ==='VISIBLE'){
        return action.payload
    }
     

    return makeVisibleReducer

    
}


export default combineReducers({
    makeVisible:makeVisibleReducer
})