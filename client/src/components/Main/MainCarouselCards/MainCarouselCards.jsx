import React from "react";
import style from "./MainCarouselCards.module.css"
import card_image from "../../../media/image_display.webp"
const MainCarouselCards = () =>{
    return(
         <div className={style.scrollingwrapper} style={{ scrollbarColor:"transparent", overflowX:"auto" }}>
  <div className={style.card}>
   <div className={style.cardImage}>
    <img src={card_image} alt="" />
   </div>
   <div className={style.cardContent}>
    <p>Curso de manipulacion de personas</p>
    <div className={style.cardDescription}><p>Aprende a manipular personas como la mejor escoria del mundo mundial.
        </p>
        </div> 

    <button className={style.enterButton}>Ver Curso</button>
   </div>

  </div>
  <div className={style.card}>
   <div className={style.cardImage}>
    <img src={card_image} alt="" />
   </div>
   <div className={style.cardContent}>
    <h3>Curso de manipulacion de personas</h3>
    <div className={style.cardDescription}><p>Aprende a manipular personas como la mejor escoria del mundo mundial.
        </p>
        </div> 

    <button className={style.enterButton}>Ver Curso</button>
   </div>

  </div>
  <div className={style.card}>
   <div className={style.cardImage}>
    <img src={card_image} alt="" />
   </div>
   <div className={style.cardContent}>
    <h3>Curso de manipulacion de personas</h3>
    <div className={style.cardDescription}><p>Aprende a manipular personas como la mejor escoria del mundo mundial.
        </p>
        </div> 

    <button className={style.enterButton}>Ver Curso</button>
   </div>

  </div>
  <div className={style.card}>
   <div className={style.cardImage}>
    <img src={card_image} alt="" />
   </div>
   <div className={style.cardContent}>
    <h3>Curso de manipulacion de personas</h3>
    <div className={style.cardDescription}><p>Aprende a manipular personas como la mejor escoria del mundo mundial.
        </p>
        </div> 

    <button className={style.enterButton}>Ver Curso</button>
   </div>

  </div>

        </div>
    )
}

export default MainCarouselCards