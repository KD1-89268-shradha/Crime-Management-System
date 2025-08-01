import React from 'react'
import Home from './Pages/User-Pages/home'
import {Routes, Route} from 'react-router-dom'
import Policehome from './Pages/Police-Pages/policehome'
import AdminHome from './Pages/Admin-Pages/admin_home'

import './App.css';
import RegisterUser from './Pages/User-Pages/register'
import UserLogin from './Pages/User-Pages/login'
import Police_login from './Pages/Police-Pages/police_login'
import PoliceComplaints from './Pages/Police-Pages/policeComplaints'
import PoliceInquires from './Pages/Police-Pages/police_inquiries'
import PoliceOfficers from './Pages/Police-Pages/police_officers'







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
        <Route path ='/policelogin' element={<Police_login/>}/>
        <Route path ='/policecomplaints' element={<PoliceComplaints/>}/>
        <Route path='/policeinquires' element={<PoliceInquires></PoliceInquires>}></Route>
        <Route path='/policeofficer' element={<PoliceOfficers></PoliceOfficers>}></Route>





      </Routes>
    </div>  
  )
}

export default App
