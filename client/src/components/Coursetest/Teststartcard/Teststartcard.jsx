import React from "react";
import style from './Teststartcard.module.css'
import cardImage from '../../../media/image_display.webp'
const Teststartcard = () =>{
    return(
<div className={style.questionContainer}>
    
    <div className={style.questionBox}>
        <div className={style.testStartCardImage}>
            <img src={cardImage} alt="" />
        </div>
        <div className={style.testStartCardDetail}>
            <div className={style.testStartCardTitle}>
                <p>Curso de desarrollo</p>
            </div>
            <div className={style.testStartCardDescription}>
               <p>Prueba de competencias</p>
               <p>tiempo de prueba: 35 Minutos</p>
            </div>
            <button className={style.sendButton}>Iniciar Prueba</button>
        </div>
    </div>
</div>
    )
}

export default Teststartcard