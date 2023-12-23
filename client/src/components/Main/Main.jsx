import React from "react";
import Navbar from "../Navbar/Navbar";
import InitMainBanner from "./InitMainBanner/InitMainBanner";
import Footer from "../Footer/Footer";
import MainCarouselCards from "./MainCarouselCards/MainCarouselCards";

function Main(){

return(
<div>
   <Navbar/>
   <InitMainBanner/>
   <MainCarouselCards/>
   <Footer/> 
   <p><a href="sms:+1234567890?body=Hola,%20estoy%20interesado%20en%20tu%20servicio">Enviar SMS</a></p>

</div>
)}

export default Main
