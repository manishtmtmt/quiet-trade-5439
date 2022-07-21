import { GETDATA_FAILURE, GETDATA_REQUEST, GETDATA_SUCCESS } from "./actionTypes"

const initState = {
    loading: false,
    error: false,
    data:[]
}

export const reducer = (state = initState,{type,payload}) => {
    switch (type){
        case GETDATA_REQUEST:{
            return {
                ...state,
                loading: true,
                error:false,
            }
        }
        case GETDATA_SUCCESS:{
            return {
                ...state,
                loading: false,
                error:false,
                data:payload
            }
        }
        case GETDATA_FAILURE:{
            return {
                ...state,
                loading:false,
                error:true,
            }
        }
        default: {
            return state
        }
    }
}