import React, { useState } from "react";
import style from "./Login.module.css"
import loginImage from "../../media/loginImage.jpg"
import { userLogin } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
const Login = () =>{

const login = {
email: '',
password:''

}
const dispatch = useDispatch()

const[loggin, Setloggin] = useState(login)
const[errors,setErrors] = useState({})

const handleChange = (e) =>{
Setloggin({
...loggin,[e.target.name]:e.target.value

})
console.log(loggin)
}

const validate= (login) =>{
    let errors = {}
let regexMail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
if(!login.email.trim()){
    errors.email = "ingresa un correo electronico!"
}
if(!regexMail.test(login.email)){ errors.email= "ingresa un correo electronico valido!"}
if(!login.password.trim()){
    errors.password = "ingresa una contraseña!"
}
console.log(errors.email)
return errors
}
const handleSubmit = (e) =>{
    e.preventDefault()
const err = validate(login)
alert("soy handledelete")
if(err.length){setErrors(err)}
if(!err.length){
dispatch(userLogin(loggin))
}
}

return(
    <div className={style.loginContainer}>
     <div className={style.loginImage}>
        <img src={loginImage} alt="" />
     </div>
     <div className={style.loginFormContainer}>
     <div className={style.loginLogo}>Certy</div>
        <div className={style.loginForm}>
           
            <form onSubmit={handleSubmit}>
                <div className={style.formField}>
                <label htmlFor="">Usuario</label>
                <input onChange={handleChange} value={loggin.email}  name="email" type="text" />
                <div>soymaleonr</div>
                <div>{errors.email}</div>
                {
                   errors.email && <div className={{color:black}}>{errors.email}<p>rrdddd</p></div>
                }
                </div>
                <div className={style.formField}>
                <div><label htmlFor="">Contraseña</label></div>
               <div> <input type="text" onChange={handleChange} value={loggin.password} name="password"/></div>
                </div>
                <button className={style.buttonLogin} type="submit" value="Iniciar Sesion">Iniciar Sesion</button>
                {/* <button className={style.buttonLogin} type="submit" value="Iniciar Sesion" /> */}
            </form>
        </div>
     </div>
    </div>
)}

export default Login