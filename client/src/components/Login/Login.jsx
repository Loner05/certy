import React, { useEffect, useState } from "react";
import style from "./Login.module.css"
import loginImage from "../../media/loginImage.jpg"
import { userLogin } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../useAuth/useAuth";
import axios from "axios";

const Login = () =>{
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()
    const navigation = useNavigate()
    // const userlogged = useSelector(state => state.userLogin)
    const { username, isAuthenticated } = useAuth();

    console.log(`soy authenticated ${isAuthenticated}`)
    const loginError = useSelector(state => state.error)

useEffect( () =>{
   
  
// if(isAuthenticated){
//     navigation('/user')

// }
if(loginError){setErrors(loginError)}
if(loginError){console.log(errors)}


})

const login = {
email: '',
password:'',


}

const[loggin, Setloggin] = useState(login)
const[errors,setErrors] = useState({})


console.log(`soy errors ${errors.error}`)

const handleChange = (e) =>{
Setloggin({
...loggin,[e.target.name]:e.target.value

})

}

const validate= () =>{
    let errors = {}
let regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
if(!loggin.email.trim()){
    errors.email = "ingresa un correo electronico!"
    console.log(loggin.email)
}
if(!regexMail.test(loggin.email)){ errors.email= "ingresa un correo electronico valido!"}
if(!loggin.password.trim()){
    errors.password = "ingresa una contraseña!"
}
console.log(errors.email)

return errors
}
const handleSubmit = async (e) =>{
      setErrors("")
    console.log(loggin)
    e.preventDefault()
   
 const err = validate(login)
console.log(err.length)

try{
     if(err.length){   return setErrors(err)}
// if(!err.length  ){
//  if(!err.length){
       

           await axios.post('http://localhost:3001/user/login',{
           email: loggin.email ,
           password: loggin.password }
         ).then((res) => {
            // isAuthenticated(true)
                  navigation('/')
          window.localStorage.setItem('token', res.data.token)
          console.log("entre a axios login")
          console.log(res.data.token)
          return
              
          //  return dispatch({type: USER_LOGIN, payload: checkUser.data })
   
    
    })
//  }

//}
    }catch(error){
        
        alert("error db")
        console.log(error.message)
        return setErrors( error.message)}
}

return(
    
       <div className={style.loginContainer}>
 {/* {  loading && loading ?
            <div>loading...</div>
            
   : <div> */}
     <div className={style.loginImage}>
        <img src={loginImage} alt="" />
     </div>
     <div className={style.loginFormContainer}>
     <div className={style.loginLogo}>Certy</div>
        <div className={style.loginForm}>
           
            <form className={style.loginForm} onSubmit={handleSubmit}>
                <div className={style.formField}>
{
                errors && <div>{errors.error}</div>
}
                <label htmlFor="">Usuario</label>
                <input onChange={handleChange} value={loggin.email}  name="email" type="text" />
                
                <div>{errors.email}</div>
                {
                   errors.email && <div className={{color:black}}>{errors.email}<p>rrdddd</p></div>
                }
                </div>
                <div className={style.formField}>
                <div><label htmlFor="">Contraseña</label></div>
               <div> <input type="text" onChange={handleChange} value={loggin.password} name="password"/></div>
                </div>
                <div className={style.buttonsLoginColumn}>
                <button className={style.buttonLogin} type="submit" value="Iniciar Sesion">Iniciar Sesion</button>
                <Link to="/signup"><button className={style.buttonSigin} type="submit" value="Iniciar Sesion" >Registrarse</button> </Link> 
                </div>
            </form>
        </div>
     </div>
     {/* </div>
     } */}
    </div>
            
)}

export default Login