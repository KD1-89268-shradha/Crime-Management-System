import React from 'react'
import Home from './Pages/User-Pages/home'
import {Routes, Route} from 'react-router-dom'
import AdminHome from './Pages/Admin-Pages/admin_home'


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path ='/admin-home' element={<AdminHome/>}/>
      </Routes>
    </div>
  )
}

export default App
