import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserInfo } from "../../redux/actions";
import { BiEdit} from 'react-icons/bi';
import profileImg from "../../media/profile_photo.jpg";
import style from "./Profile.module.css"
const Profile = () =>{
        const profile = useSelector(state => state.userInfo)
    const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(getUserInfo())


  },[dispatch])


    return(
        <div>
  <Navbar/>

  <div className={style.mainBox}>
    { profile &&
    <div className={style.profileCard}>
    <div className={style.profilePhoto}>
        <img className={style.profilePhoto} src={profileImg} alt="" />
    </div>
    
   <h2>{profile.findUserDb.name.charAt(0).toUpperCase()+profile.findUserDb.name.slice(1)}</h2>
   <div>

    <div className={style.profileContentCard}>
    <div className={style.profileRow} >
         <div className={style.contentProfileRow}>
        <div className={style.profileRowTitle}>Nombre</div> 
        <div className={style.profileRowContent}>{profile.findUserDb.name} {profile.findUserDb.lastname}</div>
        </div>
        <div className={style.rowIcon}><BiEdit/></div>
        </div>

        <div className={style.profileRow} >
         <div className={style.contentProfileRow}>
        <div className={style.profileRowTitle}>Email</div> 
        <div className={style.profileRowContent}>{profile.findUserDb.email} </div>
        </div>
        <div className={style.rowIcon}><BiEdit/></div>
        </div>

        <div className={style.profileRow} >
         <div className={style.contentProfileRow}>
        <div className={style.profileRowTitle}>Contraseña</div> 
        <div className={style.profileRowContent}>● ● ● ● ● ● ● ● ● </div>
        </div>
        <div className={style.rowIcon}><BiEdit/></div>
        </div>

        <div className={style.profileRow} >
         <div className={style.contentProfileRow}>
        <div className={style.profileRowTitle}>Suscripcion</div> 
        <div className={style.profileRowContent}>
            {
             profile.findUserDb.suscription === "free" ? <div>Te invitamos a suscribirte a Certy premium</div>
             : <div>Estas suscrito a Certy premium</div>
            }
         </div>
        </div>
        <div className={style.rowIcon}><BiEdit/></div>
        </div>
        </div>
   </div>
   </div>
}
  </div>

  <Footer/>
        </div>
    )
}

export default Profile