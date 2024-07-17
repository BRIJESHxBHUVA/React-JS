import React, { useContext, useState } from 'react'
import './PersonalInfo.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../../Context'

const PersonalInfo = () => {

  const { personalInfo, setPersonalInfo } = useContext(AppContext)


  const HandleChange = (e) => {

    const { name, value, files } = e.target;

    if (name === 'image') {

      setPersonalInfo((prevState) => ({
        ...prevState,
        [name]: files[0],
      }))

    } else {

      setPersonalInfo((prevState) => ({
        ...prevState,
        [name]: value,
      }));

    }


  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(personalInfo)
  }



  return (
    <>
      <div className="form-header">
        <p>Personal Details</p>
      </div>
      <form action="">
        <div className="line">
          <input className='line-input' type="text" name='fullName' placeholder="Your Full Name" value={personalInfo.fullName} onChange={HandleChange} />
          <input type="text" className='line-input' name='profession' placeholder="Your Profession" value={personalInfo.profession} onChange={HandleChange} />
        </div>
        <div className="line">
          <input type="text" className='line-input' name='email' placeholder="Your Email" value={personalInfo.email} onChange={HandleChange} />
          <input type="text" className='line-input' name='phone' placeholder="Your Phone No." value={personalInfo.phone} onChange={HandleChange} />
        </div>
        <div className="url-line">
          <div className="url-input">
            <input className="date" type="url" name='linkedIn' placeholder="Linked In URL" value={personalInfo.linkedIn} onChange={HandleChange} />
            <input className="date" type="url" name='github' placeholder="Github URL" value={personalInfo.github} onChange={HandleChange} />
          </div>
          <div className="url-input">
            <input className="date" type="url" name='instagram' placeholder="Instagram URL" value={personalInfo.instagram} onChange={HandleChange} />
            <input className="date" type="url" name='otherurl' placeholder="Other Media URL" value={personalInfo.otherurl} onChange={HandleChange} />
          </div>
        </div>

        <div className="line">
          <textarea name="address" id="" value={personalInfo.address} onChange={HandleChange} placeholder='Your Address'></textarea>
        </div>

        <div className="photo-input">
          <input type="file" name='image' onChange={HandleChange} />
        </div>

        <div className="line line-btn">
          <div className="btns">
            <button style={{
              backgroundColor: "white",
              color: "#ff6e7f",
              border: "1px solid grey",
            }} onClick={HandleSubmit} > Submit </button>
            <button className="next-sec"> <Link style={{ textDecoration: 'none', color: 'white' }} to='/summary'> Next Section </Link> </button>

          </div>
        </div>
      </form>
    </>
  );
}

export default PersonalInfo
