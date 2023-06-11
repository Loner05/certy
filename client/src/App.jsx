import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from "./components/Main/Main"
import { Route, Routes } from 'react-router';
import Login from "./components/Login/Login";
import Coursetest from "./components/Coursetest/Coursetest"
import Userhome from "./components/Userhome/Userhome"
import Profile from './components/Profile/Profile'
import ProtectedRoute from './components/utils/ProtectedRoute'
import { useSelector } from 'react-redux'
import Sigup from './components/Signup/Signup'
import Signup from './components/Signup/Signup'
function App() {
  const [count, setCount] = useState(0)
  const userlogged = useSelector(state => state.userLogin)
  
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<Main/>}/>
        <Route exact path={"/login"} element={<Login/>}/>

        <Route element={<ProtectedRoute canActivate={userlogged}/>}>
        <Route exact path={"/user"} element={<Userhome/>}/>
        </Route>
        <Route exact path={"/test"} element={<Coursetest/>}/>

        <Route exact path={"/profile"} element={<Profile/>}/>
        <Route exact path={"/signup"} element={<Signup/>}/>
      </Routes>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
