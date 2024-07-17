import React, { useContext, useState } from 'react'
import './Courses.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../../Context'

const Courses = () => {

  const {courses, setCourses} = useContext(AppContext);

  // const [courses, setCourses] = useState({
  //   firstcourse: '',
  //   secondcourse: '',
  //   thirdcourse: '',
  //   fourthcourse: '',
  //   othercourse: '',
  // })

  const HandleChange = (e)=> {

    const {name, value} = e.target;
    setCourses((prevState)=> ({
      ...prevState,
      [name]: value,
    }))

  }

  const HandleSubmit = (e)=> {
    e.preventDefault();
    console.log(courses)
  }

  return (
    <>
    <div className="form-header">
      <p>Courses Details</p>
    </div>
    <form action="">
      <div className="line">
        <input type="text" className='line-input' name='firstcourse' placeholder="Course 1" value={courses.firstcourse} onChange={HandleChange} />
        <input type="text" className='line-input' name='secondcourse' placeholder="Course 2" value={courses.secondcourse} onChange={HandleChange} />
      </div>
      <div className="line">
        <input type="text" name='thirdcourse' placeholder="Course 3" value={courses.thirdcourse} onChange={HandleChange} />
        <input type="text" name='fourthcourse' placeholder="Course 4" value={courses.fourthcourse} onChange={HandleChange} />
      </div>

      <div className="line">
        <textarea name="othercourse" id="" placeholder='More Courses Details' value={courses.othercourse} onChange={HandleChange} ></textarea>
      </div>
      <div className="line line-btn">
        <div className="btns">
          <button style={{
              backgroundColor: "white",
              color: "#ff6e7f",
              border: "1px solid grey",
            }} onClick={HandleSubmit} > Submit </button>

          <button className="next-sec"> <Link style={{textDecoration: 'none', color: 'white'}} to='/skills'> Next Section </Link> </button>
        </div>
      </div>
    </form>
  </>
  )
}

export default Courses
