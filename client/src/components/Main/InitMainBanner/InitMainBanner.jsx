import React from "react";
import style from './InitMainBanner.module.css'

const InitMainBanner = () =>{
return(
<div className={style.superContainer}>
<div className={style.bannerContainer}>
    <div className={style.bannerBox}>
    <h3>Obtenga 30% de descuento en todos nuestros cursos</h3>
    <button className={style.buyButton}>Comprar ahora</button>
    </div>
    <div className={style.textPercent}><p>30%</p></div>
</div>
</div>
)}
export default InitMainBanner