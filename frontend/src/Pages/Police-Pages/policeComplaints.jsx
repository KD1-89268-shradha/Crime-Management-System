import React from 'react'
import { useState } from 'react';
import Footer from '../../components/User-Components/footer';
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
            
            

            
        </section>
    </div>
      <Footer/>
    </div>
  )
}

export default PoliceComplaints
