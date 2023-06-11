import { useState } from "react"
import style from "./Signup.module.css"
import { useDispatch } from "react-redux"
import { signUpUser } from "../../redux/actions"
import axios from "axios"
import { useNavigate } from "react-router-dom"
// const signup = {
// name: "",
// lastname: "" ,
// email: "",
// password: ""

// }


const Signup = () =>{
let signData = {
name:'',
lastname:'',
email: '',
password: '',
confirmpassword: ''

}
const [errors,setErrors] =useState({})
const [sign, Setsign] = useState(signData)
const dispatch = useDispatch()
const navigate = useNavigate()

const handleChange = (e) =>{
Setsign({...sign, [e.target.name]: e.target.value})

}

const verifySignUp = () =>{
  setErrors({})
  console.log(sign)
  let errors = {}
  let regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
if(!sign.email.trim()){
  errors.email = "Ingresa un correo electrico"
}
if(!regexMail.test(sign.email)){
  errors.email = "Ingresa un correo electronico valido!"
}
if(sign.password !== sign.confirmpassword){
  errors.password ="las contraseñas no coinciden!"
}
  console.log(errors)
return errors

}
const handleSubmit = async(e) =>{
 
  console.log("soy handlesubmit")
e.preventDefault()
const err =  verifySignUp()
console.log(Object.keys(err))
if(Object.keys(err)){
  console.log(err)
  setErrors(err)
}
if(!Object.keys(err).length ){
  const serverSign = await axios.post("http://localhost:3001/user/signup", {
    name: sign.name,
    lastname: sign.lastname,
    email: sign.email,
    password: sign.password
 }).then((res)=>{
  if(res.status == 200){alert(res.data)}
  navigate("/login")
  if(res.status == 400){alert(res.data)}

 })
}
return errors

}

return(
<div>

  <form onSubmit={handleSubmit}>
                 <div className={style.formField}>
                <div><label htmlFor=""> Nombre</label></div>
               <div> <input type="text" onChange={handleChange} value={sign.name} name="name"/></div>

                </div>
                <div className={style.formField}>
                <div><label htmlFor="">Apellido</label></div>
               <div> <input type="text" onChange={handleChange} value={sign.lastname} name="lastname"/></div>
                </div>
                <div className={style.formField}>
                <div><label htmlFor=""> Correo Electronico</label></div>
               <div> <input type="text" onChange={handleChange} value={sign.email} name="email"/></div>
                  {errors.email && <p>{errors.email}</p>}
                </div>

                <div className={style.formField}>
                <div><label htmlFor="">Contraseña</label></div>
               <div> <input type="text" onChange={handleChange} value={sign.password} name="password"/></div>
               {errors.password && <p>{errors.password}</p>}
                </div>
                <div className={style.formField}>
                <div><label htmlFor=""> Confirmar Contraseña</label></div>
               <div> <input type="text" onChange={handleChange} value={sign.confirmpassword} name="confirmpassword"/></div>
                </div>

                <button className={style.buttonLogin} type="submit" value="SignUp">Enviar Registro</button>

  </form>
</div>


)


}

export default Signup