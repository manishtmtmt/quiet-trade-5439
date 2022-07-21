import { GETDATA_FAILURE, GETDATA_REQUEST, GETDATA_SUCCESS } from "./actionTypes"
import axios from "axios";


export const getDataApi = () =>dispatch=>{
    dispatch({type:GETDATA_REQUEST})
    axios.get("http://localhost:8080/data")
    .then((r)=>(dispatch({type:GETDATA_SUCCESS,payload:r.data})))
    .catch((err)=>dispatch({type:GETDATA_FAILURE,payload:err.data}))
}