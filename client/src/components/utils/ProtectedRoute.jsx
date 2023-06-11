import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoute = ({
canActivate,
redirectPath = '/login'

}) =>{
    const userlogged = useSelector(state => state.userLogin)
if (!canActivate){
     return <Navigate to={redirectPath} replace/>
}

return <Outlet/>

}


export default ProtectedRoute