import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from "./components/Main/Main"
import { createHashRouter } from 'react-router-dom'
import { Routes, Route, useParams, BrowserRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from "./components/Login/Login";
import Coursetest from "./components/Coursetest/Coursetest"
import Userhome from "./components/Userhome/Userhome"
import Profile from './components/Profile/Profile'
import ProtectedRoute from './components/utils/ProtectedRoute'
import { useDispatch, useSelector } from 'react-redux'
import Sigup from './components/Signup/Signup'
import Signup from './components/Signup/Signup'
import Maintestscore from './components/TestScore/MainTestScore'
import { getUserInfo } from './redux/actions'
import jwt_decode from 'jwt-decode'
import { useAuth } from './components/useAuth/useAuth'
import Noe from './components/Noe/Noe'





function App() {
  const [count, setCount] = useState(0)

   const { username, isAuthenticated } = useAuth();

   let {testid} = useParams()
  return (
    <div className="App">
   
      {/* <Routes>
        <Route  path={"/"} element={<Main/>}/>
        <Route  path={"/noe"} element={<Noe/>}/>
        <Route  path={"/login"} element={<Login/>}/>
        
        <Route element={<ProtectedRoute/>}>
        <Route  path={"/user"} element={<Userhome/>}/>
        <Route exact path="/testscore/:testeid" element={<Maintestscore/>}/>
        <Route exact path="/test/:testid" element={<Coursetest/>} />  
        <Route exact path={"/profile"} element={<Profile/>}/>
       
      
        </Route>
     
        
       
       
        <Route exact path={"/signup"} element={<Signup/>}/>
     
        </Routes> */}

    
    </div>
  )
}

export default App


// function App() {
//   const [count, setCount] = useState(0)

//    const { username, isAuthenticated } = useAuth();

  
//   return (
//     <div className="App">
   
//       <Routes>
//         <Route  path={"/"} element={<Main/>}/>
        
//         <Route  path={"/login"} element={<Login/>}/>
        
//         <Route element={<ProtectedRoute canActivate={isAuthenticated}/>}>
//         <Route  path={"/user"} element={<Userhome/>}/>
//         <Route path="/test/:testeid" element={<Coursetest/>} />  
//         <Route exact path={"/testscore"} element={<Maintestscore/>}/>
//         <Route exact path={"/profile"} element={<Profile/>}/>
//         <Route exact path={"/testscore"} element={<Maintestscore/>}/>
//         </Route>
     
        
       
        
//         <Route exact path={"/signup"} element={<Signup/>}/>
     
//         </Routes>

    
//     </div>
//   )
// }

// export default App
