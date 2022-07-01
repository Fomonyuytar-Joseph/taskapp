/* eslint-disable */
export const makeVisible = (option) =>{

    return {
        type:'VISIBLE',
        payload:true
    }
}

export const unVisible =(option)=>{

    return{
        type:'NOT_VISIBLE',
        payload:false
    }
}