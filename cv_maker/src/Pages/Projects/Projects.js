import React, { useContext, useState } from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../../Context'

const Projects = () => {

  const {projects, setProjects} = useContext(AppContext);

    // const [projects, setProjects] = useState({
    //   firstproject : '',
    //   secondproject: '',
    //   thirdproject: '',
    //   fourthproject: '',
    //   otherproject: ''
    // })

    const HandleChange = (e)=> {

      const {name, value} = e.target;
      setProjects((prevState)=> ({
        ...prevState,
        [name]: value,
      }))

    }

    const HandleSubmit = (e)=> {
      e.preventDefault();
      console.log(projects)
    }

  return (
    <>
      <div className="form-header">
        <p>Projects Details</p>
      </div>
      <form action="">
        <div className="line">
          <input type="url" className='line-input' name='firstproject' placeholder="Project 1" value={projects.firstproject} onChange={HandleChange} />
          <input type="url" className='line-input' name='secondproject' placeholder="Project 2" value={projects.secondproject} onChange={HandleChange} />
        </div>
        <div className="line">
          <input type="url" className='line-input' name='thirdproject' placeholder="Project 3" value={projects.thirdproject} onChange={HandleChange} />
          <input type="url" className='line-input' name='fourthproject' placeholder="Project 4" value={projects.fourthproject} onChange={HandleChange} />
        </div>

        <div className="line">
          <textarea name="otherproject" id="" placeholder='About Your Projects' value={projects.otherproject} onChange={HandleChange} ></textarea>
        </div>
        <div className="line line-btn">
          <div className="btns">
            <button  style={{
                backgroundColor: "white",
                color: "#ff6e7f",
                border: "1px solid grey",
              }} onClick={HandleSubmit} > Submit </button>

            <button className="next-sec"> <Link style={{textDecoration: 'none', color: 'white'}} to='/courses'> Next Section </Link> </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Projects
