import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
   
    <>
    <div className="option-group">
      <Link to='/' className="option">
        <i className="fa-solid fa-user-tie"></i>
        <p>Personal info</p>
      </Link>
      <Link to='/summary' className="option">
        <i className="fa-solid fa-newspaper"></i>
        <p>Summary</p>
      </Link>
    </div>

    <div className="option-group">
      <Link to='/experience' className="option">
        <i className="fa-solid fa-briefcase"></i>
        <p>Work Experience</p>
      </Link>
      <Link to='/education' className="option">
        <i className="fa-solid fa-book-open"></i>
        <p>Education</p>
      </Link>
    </div>
    <div className="option-group">
      <Link to='/language' className="option">
        <i className="fa-solid fa-language"></i>
        <p>Language</p>
      </Link>
      <Link to='/projects' className="option">
        <i className="fa-solid fa-file"></i>
        <p>Projects</p>
      </Link>
    </div>
    <div className="option-group">
      <Link to='/courses' className="option">
        <i className="fa-solid fa-graduation-cap"></i>
        <p>Courses</p>
      </Link>
      <Link to='/skills' className="option">
        <i className="fa-solid fa-laptop"></i>
        <p>Skills</p>
      </Link>
    </div>

    <button className="New-section">New Section</button>
  </>

  )
}

export default Sidebar
