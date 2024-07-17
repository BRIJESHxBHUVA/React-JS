import React, { useState } from 'react'
import './Home.css'
import Header from '../Header/Header'
import Dashboard from '../Dashboard/Dashboard'

const Home = () => {

  

  return (
    <div className='main'>
        <div className="home">
          <Header/>
          <Dashboard/>
        </div>
    </div>
  )
}

export default Home
