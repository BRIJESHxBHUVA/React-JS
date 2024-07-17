import React, { useContext, useState } from 'react'
import './Skills.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../../Context'

const Skills = () => {

  const {skills, setSkills} = useContext(AppContext);

  // const [skills, setSkills] = useState({
  //   firstskill: '',
  //   secondskill: '',
  //   thirdskill: '',
  //   fourthskill: '',
  //   otherskill: '',
  // })

  const HandleChange = (e)=> {
    const {name, value} = e.target;
    setSkills((prevState)=> ({
      ...prevState,
      [name]: value,
    }))
  }

  const HandleSubmit = (e)=> {

    e.preventDefault();
    console.log(skills)

  }

  return (
    <>
      <div className="form-header">
        <p>Skills</p>
      </div>
      <form action="">
        <div className="line">
          <input type="text" className='line-input' name='firstskill' placeholder="Skill 1" value={skills.firstskill} onChange={HandleChange} />
          <input type="text" className='line-input' name='secondskill' placeholder="Skill 2" value={skills.secondskill} onChange={HandleChange} />
        </div>
        <div className="line">
          <input type="text" className='line-input' name='thirdskill' placeholder="Skill 3" value={skills.thirdskill} onChange={HandleChange} />
          <input type="text" className='line-input' name='fourthskill' placeholder="Skill 4" value={skills.fourthskill} onChange={HandleChange} />
        </div>

        <div className="line">
          <textarea name="otherskill" value={skills.otherskill} onChange={HandleChange} id="" placeholder='About Your More Skills'></textarea>
        </div>
        <div className="line line-btn">
          <div className="btns">
            <button   style={{
                backgroundColor: "white",
                color: "#ff6e7f",
                border: "1px solid grey",
              }} onClick={HandleSubmit}  > Submit </button>

            <button className="next-sec"> <Link style={{textDecoration: 'none', color: 'white'}} to='/courses'> Prev Section </Link> </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Skills
