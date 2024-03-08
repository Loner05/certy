import React from "react";
import {useParams} from "react-router-dom"

 const Noe = () =>{
const{name}= useParams()
return(

<div> soy name {name}</div>

)


}

export default Noe