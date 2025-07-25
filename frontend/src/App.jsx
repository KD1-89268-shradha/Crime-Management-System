import React from 'react'
import Home from './Pages/User-Pages/home'
import {Routes, Route} from 'react-router-dom'
import Policehome from './Pages/Police-Pages/policehome'


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element = {<Home/>}/>
<<<<<<< HEAD
        <Route path ='/adminhome' element={<AdminHome/>}/>
        <Route path='/policehome' element={<Policehome />}></Route>
>>>>>>> 6fcdb2a1b76b84078d133224b069747742e75aab
      </Routes>
    </div>
  )
}

export default App
