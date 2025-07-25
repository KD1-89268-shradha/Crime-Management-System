import React from 'react'
import Home from './Pages/User-Pages/home'
import {Routes, Route} from 'react-router-dom'
import Policehome from './Pages/Police-Pages/policehome'
import AdminHome from './Pages/Admin-Pages/admin_home'

import './App.css';
import RegisterUser from './Pages/User-Pages/register'
import UserLogin from './Pages/User-Pages/login'







function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/policehome' element={<Policehome />}></Route>



        <Route path='/adminhome' element={<AdminHome />}></Route>
        <Route path='/register' element={<RegisterUser />} />
        <Route path='/user' element={<UserLogin />} />



        <Route path ='/adminhome' element={<AdminHome/>}/>

      </Routes>
    </div>  
  )
}

export default App
