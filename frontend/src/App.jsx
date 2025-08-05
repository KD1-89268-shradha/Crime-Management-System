import React from 'react'
import Home from './Pages/User-Pages/home'
import {Routes, Route} from 'react-router-dom'
import Policehome from './Pages/Police-Pages/policehome'
import AdminHome from './Pages/Admin-Pages/admin_home'

import './App.css';
import RegisterUser from './Pages/User-Pages/register'
import UserLogin from './Pages/User-Pages/login'

import AdminInquires from './Pages/Admin-Pages/admin_inquries'
import AdminPoliceOfficers from './Pages/Admin-Pages/admin_police_officers'
import ComplaintDetails from './components/User-Components/complaint_details'
import Complaints from './Pages/User-Pages/complaints'
import Police_login from './Pages/Police-Pages/police_login'
import PoliceComplaints from './Pages/Police-Pages/policeComplaints'
import PoliceInquires from './Pages/Police-Pages/police_inquiries'
import PoliceOfficers from './Pages/Police-Pages/police_officers'



import AdminLogin from './Pages/Admin-Pages/admin_login'
import AdminComplaints from './Pages/Admin-Pages/admin_complaints'
 




import Contact from './Pages/User-Pages/contact';
import UpdateComplaint from './Pages/User-Pages/update'
import Status from './Pages/User-Pages/status'
import History from './Pages/User-Pages/history'
import AddPoliceStation from './components/Admin-Components/add_police_station'
import AddPoliceOfficer from './components/Admin-Components/add_police_officer'
import UpdatePoliceStation from './Pages/Admin-Pages/update_police_station'
// import PoliceProtection from './Pages/Police-Pages/police_protection'

<<<<<<< HEAD
// import AddPoliceStation from './components/Admin-Components/add_police_station'
// import AddPoliceOfficer from './components/Admin-Components/add_police_officer'
=======
>>>>>>> aed0ec4b9a589225a89221807cc265d0808f4123
// import UpdatePoliceStation from './Pages/Admin-Pages/update_police_station'
// import PoliceProtection from './Pages/Police-Pages/police_protection'




function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/policehome' element={<Policehome />}></Route>



        <Route path='/adminhome' element={<AdminHome />}></Route>
        <Route path='/register' element={<RegisterUser />} />
        <Route path='/user' element={<UserLogin />} />
        <Route path='/complaints' element={<Complaints />} />
        <Route path="/updateComplaint/:complaintId" element={<UpdateComplaint/>} />

        <Route path ='/adminhome' element={<AdminHome/>}/>

        <Route path='/contact' element={<Contact />} />

        <Route path ='/policelogin' element={<Police_login/>}/>
        <Route path ='/policecomplaints' element={<PoliceComplaints/>}/>
        <Route path='/policeinquires' element={<PoliceInquires></PoliceInquires>}></Route>
        <Route path='/policeofficer' element={<PoliceOfficers></PoliceOfficers>}></Route>













      












      <Route path='/admin-users-inquires' element={<AdminInquires />} />


      <Route path='/admin-police-officers' element={<AdminPoliceOfficers />} />





















      <Route path='/view' element={<ComplaintDetails />} />
        
        
        
        <Route path='/login/admin' element={<AdminLogin />} />
 
        <Route path='/admin-complaints' element={<AdminComplaints />} />
          
        {/* <Route path='/admin-complaints' element={<AdminComplaints />} /> */}




        <Route path='/status' element={<Status />} />
    <Route path='/history' element={<History />} />
    <Route path='/add-police-station' element={<AddPoliceStation />} />
    <Route path='/add-police-officer' element={<AddPoliceOfficer />} />


    <Route path="/update-police-station/:id" element={<UpdatePoliceStation />} />

    {/* <Route path='/add-police-station' element={<AddPoliceStation />} /> */}
    {/* <Route path='/add-police-officer' element={<AddPoliceOfficer />} /> */}

    


      </Routes>
    </div>  
  )
}

export default App
