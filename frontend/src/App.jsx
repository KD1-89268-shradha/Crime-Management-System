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
        <Route path ='/adminhome' element={<AdminHome/>}/>
      </Routes>
    </div>
  )
}

export default App
