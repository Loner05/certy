import React from "react";
import style from './Coursecard.module.css'
import displayimg from '../../media/image_display.webp'
import { Link, useNavigate, useNavigation } from "react-router-dom";
const Coursecard = ({testid, name, description, testime}) =>{

let navigate = useNavigate()
return(
    <div key={testid ? testid : null} className={style.Coursecard}>
     <div className={style.imageContainer}>
     <img src={displayimg} alt="" />
     </div>
    <div>
        {/* <div>ksoemnfo</div> */}
        <div className={style.courseTitle} >
            <h3>{name ? name : null}</h3>
        </div>
        <div  className={style.descriptionCourse}>
            {description ?description : null}
        </div>
        <div>
          {testime ? <p> {testime} minutos</p>: null} 
           
        </div>
       <Link to={`/test/${testid}`}><button  className={style.buttonCourseCard}>Ver Curso</button></Link> 
    </div>
    </div>
)

}

export default Coursecard