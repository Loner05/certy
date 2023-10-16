import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Answerscorecard from "./AnswerScoreCard/Answerscorecard";
import axios from "axios";
import { getTestUserAnswers } from "../../redux/actions";
import { useDispatch } from "react-redux";



const Maintestscore = () =>{


const [userAnswers,setuserAnswers] = useState([])
const dispatch = useDispatch()
useEffect(()=>{

dispatch(getTestUserAnswers)
   


})


 
//    const res = await axios.get(`http://localhost:3001/test/useranswers`,data, config)
   
// //   console.log(res)

//  let res = await  axios.get(url, data, {
//     headers: {
//        Authorization:`bearer ${token}`,
//       'Content-Type': 'application/json'
//     }
//   })
  
//   console.log(res)


// }


return(
<div>
<Navbar/>
<h2>soy page test score</h2>
< Answerscorecard/>

<Footer/>
</div>


)}


export default  Maintestscore