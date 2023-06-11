import React from "react";
import style from "./Navbar.module.css"
import { BiUserCircle ,BiLogOut, BiLogIn} from 'react-icons/bi';
import { AiOutlineDown } from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/actions";
const Navbar = () =>{
    const userlogged = useSelector(state => state.userLogin)
const dispatch = useDispatch()
const navigate = useNavigate()
    const handleLogOut = () =>{
        console.log('soy handlelogout')
       dispatch(logOut()) 
        navigate('/')
     
    }
return(
<div className={style.navbarContainer}>
    <div className={style.navLogo}>Certy</div>
    <div className={style.navbarItems}>
       
     <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/user">Ver cursos</Link></li>
        
      {
        userlogged ?
        <li className={style.accountLogo}>
         <ul > 
         <li>Perfil</li>
         <li>Descargar certificados</li>
         
         <li><Link onClick= {(e)=>  handleLogOut()}>Cerrar sesion<BiLogOut/></Link></li>
         
        
        </ul>  
        <p><BiUserCircle/>
        <AiOutlineDown/>
        </p>
        </li>
         : <Link to="/login"><li><button> Login<BiLogIn/></button></li></Link>
      }
    </ul>    
    </div>

</div>
)}

export default Navbar