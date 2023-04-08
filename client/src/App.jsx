import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from "./components/Main/Main"
import { Route, Routes } from 'react-router';
import Login from "./components/Login/Login";
import Coursetest from "./components/Coursetest/Coursetest"
import Userhome from "./components/Userhome/Userhome"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<Main/>}/>
        <Route exact path={"/login"} element={<Login/>}/>
        <Route exact path={"/user"} element={<Userhome/>}/>
        <Route exact path={"/test"} element={<Coursetest/>}/>
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
