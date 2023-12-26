import  jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { loading } from "../../redux/actions";




export  function useAuth(){
    const [username, setUsername] = useState('');
    const[isAuthenticated,setIsAuthenticated]= useState(false);
    const token = window.localStorage.getItem('token');
    const dispatch = useDispatch()
    let decoded =  token ? jwt_decode(token) : null
    useEffect(()=>{
   
       dispatch(loading(true))
     if(!decoded){
     setIsAuthenticated(false)
     setUsername("Usuario autenticado")
     dispatch(loading(false))

     }if(decoded){

      setIsAuthenticated(true)
      dispatch(loading(false))
     }
    
 


    })
    useEffect(()=>{
    if(isAuthenticated){

  console.log("estoy logged")

    }
//     setTimeout(function(){
//         console.log("Hola Mundo");
    
//       if(!isAuthenticated){
//     console.log("no estoy logged")
//     console.log(`soy window location ${window.location}`)
//  if(window.location.href !== 'http://127.0.0.1:5173/login'){
//          window.location = '/login'

//      }

   

//    }}, 4000);
// //    if(!isAuthenticated){
// //     console.log("no estoy logged")
// //     console.log(`soy window location ${window.location}`)
// //  if(window.location.href !== 'http://127.0.0.1:5173/login'){
// //          window.location = '/login'

// //      }

   

// //    }

    })

//     setTimeout(function(){
//         console.log("Hola Mundo");
    
//       if(!isAuthenticated){
//     console.log("no estoy logged")
//     console.log(`soy window location ${window.location}`)
//  if(window.location.href !== 'http://127.0.0.1:5173/login'){
//          window.location = '/login'

//      }

   

//    }}, 4000);


//    }


return{username, isAuthenticated}

}