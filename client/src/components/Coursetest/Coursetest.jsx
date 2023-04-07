import React from "react";
import Coursecard from "../Coursecard/Coursecard";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import style from './Coursetest.module.css'
import userPageDisplay from '../../media/user_page_main.svg'
import Questioncomponent from "./Questioncomponent/Questioncomponent";
import Teststartcard from "./Teststartcard/Teststartcard";
const Coursetest = () =>{
    return(
<div className={style.userPageContainer}>
    <Navbar/>
   
   <div className={style.testQuestionBox}>
    <div>tiempo restante 15:20</div>
    <div> pregunta 1 de 30</div>

    
     <Questioncomponent/>
   </div>

<Footer/>
</div>
)}


export default Coursetest