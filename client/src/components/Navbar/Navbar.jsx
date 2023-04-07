import React from "react";
import style from "./Navbar.module.css"
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineDown } from 'react-icons/ai';
import { Link } from "react-router-dom";
const Navbar = () =>{
return(
<div className={style.navbarContainer}>
    <div className={style.navLogo}>Certy</div>
    <div className={style.navbarItems}>
     <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/user">Ver cursos</Link></li>
        <li>
         <div className={style.accountLogo}> 
        <p><BiUserCircle/>
        <AiOutlineDown/>
        </p>
        </div>  
        </li>
    </ul>    
    </div>

</div>
)}

export default Navbar