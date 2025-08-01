import React from 'react'
import { useState } from 'react';
import Footer from '../../components/User-Components/footer';
import StatusComponent from "../../Component/Police-Component/status_complaints"
import RenderComponent from "../../Component/Police-Component/render_complaints"
const button = [
    'Complaints', 'Assign Officer', 'Change Status'
]

const PoliceComplaints = () => {
    const [isSelected, setIsSelected] = useState(0)
  return (
    <div>
     
      <div className="home-container">
        <header className="home-header">
            <h1>Complaints</h1>
        </header>

        <section className="home-section">
            
            <StatusComponent buttons={button} isSelected={isSelected} setIsSelected={setIsSelected}/>
            <RenderComponent index={isSelected}/> 

            
        </section>
    </div>
      <Footer/>
    </div>
  )
}

export default PoliceComplaints
