import React from 'react'
import Home from './Pages/User-Pages/home'
import {Routes, Route} from 'react-router-dom'
import Policehome from './Pages/Police-Pages/policehome'




function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/policehome' element={<Policehome />}></Route>
<<<<<<< HEAD
        {/* <Route path ='/admin-home' element={<AdminHome/>}/> */}
=======
        <Route path ='/adminhome' element={<AdminHome/>}/>
>>>>>>> c5d0a67aadc59530899ff36b03336b4baaae2712
      </Routes>
    </div>
  )
}

export default App
