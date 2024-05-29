import React, { useContext } from 'react'
import './Home.css'
import createcontext from '../CreateContext'

const Home = () => {

    const {mode, differentMode} = useContext(createcontext)

  return (
    <div className='home' style={{backgroundColor: mode === 'light' ? 'white' : 'black'}}>
        <div className="home-title">
            <h1 style={{color: mode === 'light' ? 'black' : 'white'}}>Let's Start Something</h1>
        </div>
        <div className="home-contact">
            <div className="home-contact-reply">
                <h3>Leave A Reply</h3>
                <p>Your email address will not be published. Required fields are marked *</p>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
                <textarea name="" id="" placeholder='Write comments'></textarea>
                <button>Submit Comments</button>
            </div>
            <div className="home-contact-details">
                <h3>Feel Free To Contact Me Anytime</h3>
                <div className="home-contact-details-mail">
                    <p>Email</p>
                    <h5>bhuvabrijesh14@gmail.com</h5>
                </div>

                <div className="home-contact-details-phone">
                    <p>Phone</p>
                    <h5>+91 9104685175</h5>
                </div>

                <div className="home-contact-details-address">
                    <p>Address</p>
                    <h5>Nana Mava Road, Rajkot, Gujarat, 360005</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
