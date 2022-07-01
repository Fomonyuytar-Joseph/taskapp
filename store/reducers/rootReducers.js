/* eslint-disable */
import { combineReducers } from "redux";



const visibleReducer =( state={value: null } , action )=>{
    if(action.type ==='VISIBLE'){
        return action.payload
    }
     else if(action.type ==='NOT_VISIBLE'){
        return action.payload
    }

    return action.payload

    
}


export default combineReducers({
    mymodalVisible:visibleReducer
})