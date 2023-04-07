import React from "react";
import style from './Coursecard.module.css'
import displayimg from '../../media/image_display.webp'
import { Link } from "react-router-dom";
const Coursecard = () =>{

return(
    <div className={style.Coursecard}>
     <div className={style.imageContainer}>
     <img src={displayimg} alt="" />
     </div>
    <div>
        <div className={style.courseTitle} >
            <h3>curso de manipulacion de alimentos</h3>
        </div>
        <div  className={style.descriptionCourse}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eligendi minima cupiditate architecto pariatur doloribus 
        </div>
       <Link to="/test"><button className={style.buttonCourseCard}>Ver Curso</button></Link> 
    </div>
    </div>
)

}

export default Coursecard