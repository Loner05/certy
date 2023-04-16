import React, { useEffect, useState } from "react";
import Coursecard from "../Coursecard/Coursecard";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import style from './Coursetest.module.css'
import userPageDisplay from '../../media/user_page_main.svg'
import Questioncomponent from "./Questioncomponent/Questioncomponent";
import Teststartcard from "./Teststartcard/Teststartcard";
import { useDispatch, useSelector } from "react-redux";
import { testQuestions } from "../../redux/actions";
const Coursetest = () =>{
  const dispatch = useDispatch()
 const testeid = "9e9db805-16c8-472f-af72-54e54ea2d9c2"
useEffect(()=>{
dispatch(testQuestions(testeid))

},[dispatch])

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