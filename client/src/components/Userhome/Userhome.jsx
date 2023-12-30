import React, { useEffect, useState } from "react";
import Coursecard from "../Coursecard/Coursecard";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import style from './Userhome.module.css'
import userPageDisplay from '../../media/user_page_main.svg'
import { useDispatch, useSelector } from "react-redux";
import { getTEST, getUserInfo } from "../../redux/actions";
import { Createtest } from "../Createtest/Createtest";
const Userhome = () =>{
const dispatch = useDispatch()
const stateTests = useSelector(state => state.tests)




const[subPage,setSubPage]= useState("misTests")
useEffect(()=>{
dispatch(getUserInfo())
 dispatch(getTEST())


   },[])

   
const handleSubPage =(e) =>{
console.log(e.target.name)
setSubPage(e.target.name)

}

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
    <div  className={style.secondMenuRow}>
      <div className={style.itemSecondMenu}>
           <input type="button" name="misTests" value="Mis Tests" onClick={handleSubPage} />
      </div>
      <div className={style.itemSecondMenu}>
      <input type="button" name="crearTests" value="Crear Tests" onClick={handleSubPage} />
      </div>
 
   </div>

{
  subPage === "misTests" &&


    <div className={style.courseCardGrid}>
  
  {stateTests &&

   stateTests.map(item => <Coursecard testid={item.id} name={item.name} description={item.description} testime={(item.testime/60000).toFixed(2)} image={item.image}/>)


  }



  </div>
  

  }
  {
subPage === "crearTests" &&
<Createtest/>



  }

<Footer/>
</div>
)}


export default Userhome