import React, {Fragment, useContext} from 'react'
import './About.css'
import about from '../about_img.png'
import createcontext from '../CreateContext'

const About = () => {

    const {mode, differentMode} = useContext(createcontext)

    return (
        <>
        <div className='about' style={{backgroundColor: mode === 'light' ? 'white' : 'black'}}>
            <div className="about-text" style={{color: mode === 'light' ? 'black' : 'white'}}>
                <p>I'm David Matias, I'm a Brand & Webflow Designer, Currently residing in the lush Victoria Street London, Matias operates globally and is ready to take on any design challenge.</p>

            </div>

            <div className="about-box">
                <div className="about-box-img">
                    <img src={about} alt="" />
                </div>

                <div className="about-box-info">
                    <div className="about-box-info-title">
                        <h3 style={{color: mode === 'light' ? 'orange' : 'white'}}>Personal Info</h3>
                        <p style={{color: mode === 'light' ? 'orange' : 'white'}}>Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam nihil</p>
                    </div>
                    <div className="about-box-info-details">
                        <div className="about-box-info-details-box1">

                            <div className="about-box-info-details-mail">
                                <p>Email</p>
                                <h4>bhuvabrijesh14@gmail.com</h4>
                            </div>

                            <div className="about-box-info-details-phone">
                                <p>Phone</p>
                                <h4>+91 9104685175</h4>
                            </div>

                        </div>

                        <div className="about-box-info-details-box2">

                            <div className="about-box-info-details-address">
                                <p>Phone</p>
                                <h4>Rajkot, Gujarat, 360005</h4>
                            </div>

                            <div className="about-box-info-details-social">
                                <p>Phone</p>
                                <h4>+91 9104685175</h4>
                            </div>

                        </div>




                    </div>
                </div>
            </div>
        </div>
        <br /><br />
        </>
    )
}

export default About
