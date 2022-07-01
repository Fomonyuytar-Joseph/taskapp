/* eslint-disable */
import { combineReducers } from "redux";

const initialstate=false

const visibleReducer =( state=initialstate , action )=>{
    if(action.type ==='VISIBLE'){
        return action.payload
    }
     

    return state

    
}


export default combineReducers({
    mymodalVisible:visibleReducer
})