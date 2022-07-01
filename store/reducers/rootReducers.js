/* eslint-disable */
import { combineReducers } from "redux";

const visibleReducer =(visibility=null , action )=>{
    if(action.type ==='VISIBLE'){
        return action.payload
    }
    else if(action.type ==='NOT_VISIBLE'){
        return action.payload
    }

    else 
      return action.payload
}


export default combineReducers({
    mymodalVisible:visibleReducer
})