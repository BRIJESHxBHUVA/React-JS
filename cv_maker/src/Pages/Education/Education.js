import React, { useContext, useState } from "react";
import "./Education.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";

const Education = () => {

  const {education, setEducation} = useContext(AppContext);


  const HandleChange = (e)=> {

    const {name, value} = e.target;

    setEducation((prevState)=> ({
      ...prevState,
      [name]: value,
    }))

  }

  const HandleSubmit = (e)=> {
    e.preventDefault();
    console.log(education)
  }


  return (
    <>
      <div className="form-header">
        <p>Education</p>
      </div>
      <form action="">
        <div className="line">
          <input type="text" className='line-input' name="school" placeholder="School / Collage name" value={education.school} onChange={HandleChange} />
          <input type="text" className='line-input' name="field" placeholder="field of Study" value={education.field} onChange={HandleChange} />
        </div>
        <div className="line">
          <input type="text" className='line-input' name="university" placeholder="University name" value={education.university} onChange={HandleChange} />
          <input type="text" className='line-input' name="city" placeholder="City" value={education.city} onChange={HandleChange} />
        </div>
        <div className="line">
          <input type="month" name="startingmonth" placeholder="Starting Month" value={education.startingmonth} onChange={HandleChange} />
          <input type="month" name="endingmonth" placeholder="Ending Month" value={education.endingmonth} onChange={HandleChange} />
        </div>

        <div className="line">
          <textarea name="otherdetails" id="" value={education.otherdetails} onChange={HandleChange} ></textarea>
        </div>
        <div className="line line-btn">
          <div className="btns">
            <button style={{
                backgroundColor: "white",
                color: "#ff6e7f",
                border: "1px solid grey",
              }} onClick={HandleSubmit}  >  Submit  </button>
            <button className="next-sec"> <Link style={{textDecoration: 'none', color: 'white'}} to='/language'> Next Section </Link> </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Education;
