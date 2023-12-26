import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./components/useAuth/useAuth";
import jwt_decode from "jwt-decode";

export default function ProtectedRoute() {

  const token = window.localStorage.getItem('token');
  
  let decoded =  token ? jwt_decode(token) : null
    const { username, isAuthenticated } = useAuth();

    console.log(`soy isAuthenticated ${isAuthenticated}`)
    console.log(decoded)
  return decoded ? <Outlet /> : <Navigate to="/" />;
}