import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


export const RequiredAuth = ({children})=>{
    let {isAuth} = useSelector((state)=>state.isAuth);

    const location = useLocation()
    console.log(isAuth)
    if(isAuth){
        return children;
    }

   return <Navigate to="/login" state={{from:location}} replace/>
}