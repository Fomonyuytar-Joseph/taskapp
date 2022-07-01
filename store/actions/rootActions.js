/* eslint-disable */
export const makeVisible = (option)=>{

    return {
        type:'VISIBLE',
        payload:option
    }
}

export const unVisible =(option)=>{

    return{
        type:'NOT_VISIBLE',
        payload:option
    }
}