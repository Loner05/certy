import React from "react";
import style from './Footer.module.css'
const Footer = () =>{
return(
<div className={style.footerContainer}>
   <div className={style.footerBox}>
   <div className={style.footerColumn}>
    
    <ul>
        <li><div className={style.footerLogo}>Certy</div></li>
        <li>Conoce Certy</li>
        <li>Metodos de pago</li>
        <li>Usa Certy en tu empresa</li>
    </ul>
   </div>
   <div className={style.footerColumn}>
    <ul style={{paddingTop:'25%'}}>
     <li>Preguntas frecuentes</li>
     <li>Contactanos</li>
      <li>Terminos y condiciones</li>
    </ul>
   </div>

   </div>
</div>
)}

export default Footer