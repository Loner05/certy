import  jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";




export function useAuth(){
    const [username, setUsername] = useState('');
    const[isAuthenticated,setIsAuthenticated]= useState(false);
    useEffect(()=>{
        const token = window.localStorage.getItem('token');
        let decoded = token ? jwt_decode(token) : null
     if(decoded){
     setIsAuthenticated(true)
     setUsername("Usuario autenticado")

     }


    },[])
    useEffect(()=>{

   if(!isAuthenticated){
    console.log(`soy window location ${window.location}`)
 if(window.location.href !== 'http://127.0.0.1:5173/login'){
         window.location = '/login'

     }

   

   }

    },[isAuthenticated])

  


return{username, isAuthenticated}

}