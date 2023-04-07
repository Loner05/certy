import React from "react";
import Coursecard from "../Coursecard/Coursecard";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import style from './Userhome.module.css'
import userPageDisplay from '../../media/user_page_main.svg'
const Userhome = () =>{
    return(
<div className={style.userPageContainer}>
    <Navbar/>
    <div className={style.userPageDisplay}>
        <div className={style.userPageDisplayText}>
            <h1>Cursos</h1>
           <p>Aprende y certifica tus habilidades con Certy</p>

        </div>
        <div><img src={userPageDisplay} alt="" /></div>
    </div>
    <div className={style.courseCardGrid}>
  <Coursecard/>
  </div>

<Footer/>
</div>
)}


export default Userhome