import React, { useContext, useState } from 'react'
import './Experience.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../../Context'

const Experience = () => {

  const {experience, setExperience} = useContext(AppContext);


  const handleChange = (e)=> {

    const {name, value} = e.target;

    setExperience((prevState)=> ({
      ...prevState,
      [name]: value,
    }))

  }


  const HandleSubmit = (e)=> {
    e.preventDefault();
    console.log(experience)
  }

  return (
    <>
    <div className="form-header">
      <p>Experience Details</p>
    </div>
    <form action="">
      <div className="line">
        <input type="text" className='line-input' name='companyname' placeholder="Company Name" value={experience.companyname} onChange={handleChange} />
        <input type="text" className='line-input' name='jobtitle' placeholder="Job Title" value={experience.jobtitle} onChange={handleChange} />
      </div>
    
      <div className="line">
        <input name='startingmonth' className='line-input' type="month" placeholder="Starting Month" value={experience.startingmonth} onChange={handleChange} />
        <input name='endingmonth' className='line-input' type="month" placeholder="Ending Month" value={experience.endingmonth} onChange={handleChange} />
      </div>

      <div className="line">
        <input name='location' type="text" placeholder="Job Location" value={experience.location} onChange={handleChange} />
      </div>

      <div className="line">
        <textarea name="otherjobdetails" id="" placeholder='Other Job Details'  value={experience.otherjobdetails} onChange={handleChange} ></textarea>
      </div>
      <div className="line line-btn">
        <div className="btns">
          <button style={{
              backgroundColor: "white",
              color: "#ff6e7f",
              border: "1px solid grey",
            }} onClick={HandleSubmit} > Submit </button>

          <button className="next-sec"> <Link style={{textDecoration: 'none', color: 'white'}} to='/education'> Next Section </Link> </button>
        </div>
      </div>
    </form>
  </>
  )
}

export default Experience
