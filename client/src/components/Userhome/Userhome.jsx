import React, { useEffect } from "react";
import Coursecard from "../Coursecard/Coursecard";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import style from './Userhome.module.css'
import userPageDisplay from '../../media/user_page_main.svg'
import { useDispatch, useSelector } from "react-redux";
import { getTEST } from "../../redux/actions";
const Userhome = () =>{
const dispatch = useDispatch()
const stateTests = useSelector(state => state.tests)

useEffect(()=>{
    
 dispatch(getTEST())


   },[])


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
  {stateTests &&

   stateTests.map(item => <Coursecard testid={item.id} name={item.name} description={item.description} testime={item.testiem}/>)


  }


  <Coursecard/>
  </div>

<Footer/>
</div>
)}


export default Userhome