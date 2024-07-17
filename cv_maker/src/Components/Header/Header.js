import React, { useContext, useState } from 'react'
import './Header.css'
import logo from '../Images/logo.jpg'
import user from '../Images/user.png'
import { AppContext } from '../../Context'

const Header = () => {

    const {menubar, setMenubar} = useContext(AppContext)

    console.log(menubar)

    return (
        <>

            <div className='header'>

                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <div className="logo">
                            <img src={logo} alt="" />
                            <p>Styling CV</p>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <i className="fa-solid fa-gauge"></i>
                                    <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <i className="fa-solid fa-medal"></i>
                                    <a className="nav-link" href="#">Upgrade</a>
                                </li>
                                <li className="nav-item">
                                    <i className="fa-solid fa-medal"></i>
                                    <a className="nav-link" href="#">English</a>
                                </li>
                            </ul>

                        </div>



                    </div>

                   

                    <div className="profile">

                    <div className="sidebar" onClick={()=>setMenubar(!menubar)}>
                        <i className="fa-solid fa-bars-staggered"></i>
                    </div>

                        <div className="userdata">

                        
                        <img src={user} alt="" />

                        <div className="user-info">
                            <p>Brijesh</p>
                            <span>Admin</span>
                        </div>
                        </div>

                    </div>

                </nav>

                <div className="doc">
                    <div className="sec-doc">
                        <p>Fill Section</p>
                        <span>Fill correct details according to you and create interesting cv.</span>
                    </div>


                    <div className="form-doc">
                        <p>Fill Form</p>
                        <span>Fill the all form data for build strong cv.</span>
                    </div>

                    <div className="setting-doc">
                        <p>Resume Setting</p>
                        <span>Here is some Resume setting which is build good looking cv.</span>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Header
{/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
            </ul>
   
  </div>
</div>
        </nav> */}