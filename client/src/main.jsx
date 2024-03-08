import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/store/index"
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Signup from './components/Signup/Signup';
import Userhome from './components/Userhome/Userhome';
import Maintestscore from './components/TestScore/MainTestScore';
import Profile from './components/Profile/Profile';
import ProtectedRoute from './ProtectedRoute';
import Coursetest from './components/Coursetest/Coursetest';
import Portal from './components/Portal/Portal';


const router = createBrowserRouter([
  
{
  path:'/',
  element: <Main/>,
},
{
  path:'/login',
  element: <Login/>,
},
{
  path:'/signup',
  element: <Signup/>,
},
{
  path:'/',
  element: <ProtectedRoute/>,
  children:[
    {
      path:'/user',
      element: <Userhome/>,
    },
    {
      path:'/test/:testeid',
      element: <Coursetest/>,
    },
    {
      path:'/testscore/:testeid',
      element: <Maintestscore/>,
    },
    {
      path:'/profile',
      element: <Profile/>,
    },

   
    
    


  ]
},



])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     
  
    <RouterProvider router={router}/>
 
    </Provider>
  </React.StrictMode>,
)


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'
// import { RouterProvider } from 'react-router-dom'

// import store from '../src/redux/store/index.js'

// // import { Home } from './components/Home/home.jsx'
// import App from './App'

// // import './assets/main.css'
// // import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   // <Provider store={store}>
//     <RouterProvider router={App}>
//       <App />
//     </RouterProvider>
// //   </Provider>,
//  )
