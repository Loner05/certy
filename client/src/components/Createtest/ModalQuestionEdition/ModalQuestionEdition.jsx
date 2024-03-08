import React, { useState } from 'react'
// import style from "../ModalQuestionEdition/ModalQuestionEdition.module.css"
import { AiOutlineClose } from 'react-icons/ai'
import Portal from '../../Portal/Portal'
import { BiBorderRadius } from 'react-icons/bi'

export default function ModalQuestionEdition({children, toggle,active}) {
  


  return (
    <Portal >
        
       {
       active && 
        <div style = {styles.wrapper}>
            <div style={styles.window}>
       <button className={styles.closeBtn} onClick={toggle}> <AiOutlineClose  size={30} color="#fff" cursor={"pointer"}/></button>
          <div>
     {children}
     </div>
     </div>
  </div>

}
    </Portal>
  )
}

const styles ={
wrapper:{
position: 'absolute',
top:0,
left: 0,
width: "100%",
height: "100%",
display: "flex",
justifyContent: "center", 
alignItems: "center"
},
window:{
position: "relative",
background: "#fff",
BiBorderRadius: 5,
padding: 15,
boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
zIndex:1,
minWidth: 320


},
closeBtn:{
position: "absolute", 
top: 0,
right: 0,
backgroundColor: "red"

}

}
