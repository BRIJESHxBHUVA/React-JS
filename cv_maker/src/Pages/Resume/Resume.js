import React, { useContext } from 'react'
import './Resume.css'
import { AppContext } from '../../Context'
import user from '../../../src/Components/Images/user.png'

const Resume = React.forwardRef((props, ref) => {

    const {personalInfo, summary, experience, education, language, projects, courses, skills, color, backgroundcolor} = useContext(AppContext)

  return (
    <div className="resume" ref={ref}>
      <div className="resume-header" style={{backgroundColor: backgroundcolor}}>

          <div className="resume-holder">
              <div className="image">
                {personalInfo.image ? <img src={URL.createObjectURL(personalInfo.image)} alt="" /> : <img src={user} alt="" />  }
                
              </div>
              <div className="profession" style={{color: color}}>
                <h3>{personalInfo.fullName}</h3>
                <p>{personalInfo.profession}</p>
              </div>
          </div>

          <div className="contact">
              <div className="phone" style={{color: color}}>
                {
                personalInfo.phone ? <> <span><i className="fa-solid fa-phone"></i></span>
                                     <p>{personalInfo.phone}</p> </>
                  : ""}
                
              </div>
              <div className="mail" style={{color: color}}>
                {personalInfo.email ? 
                  <> <span><i className="fa-solid fa-envelope"></i></span>
                  <p>{personalInfo.email} </p> </> 
                  : '' }
               
              </div>
              <div className="address" style={{color: color}}>
                {personalInfo.address ? 
                   <> <span><i className="fa-solid fa-house"></i></span>
                    <p>{personalInfo.address}</p></> 
                   : ""}
               
              </div>
          </div>

      </div>

      <div className="main-section" style={{backgroundColor: backgroundcolor}}>
        <div className="resume-part-one" style={{border: '1px solid',borderColor: color, borderLeft: 'none', borderTop: 'none', borderBottom: 'none'}}>
          <div className="skills" style={{color: color}}>
            <h3 style={{color: backgroundcolor, backgroundColor: color}}>SKILLS</h3>
            <div className="skill-box" style={{color: color}}>
              {skills.firstskill ? 
              <> <p>{skills.firstskill}</p> <span> <i className="fa-solid fa-hand-point-left"></i> </span></>
               : ''}
             
            </div> 
            <div className="skill-box" style={{color: color}}>
              {skills.secondskill ? 
              <><p>{skills.secondskill}</p> <span> <i className="fa-solid fa-hand-point-left"></i> </span></>
               : '' }
              
            </div>
            <div className="skill-box" style={{color: color}}>
              {skills.thirdskill ? 
              <><p>{skills.thirdskill}</p> <span> <i className="fa-solid fa-hand-point-left"></i> </span></> 
              : '' }
              
            </div>
            <div className="skill-box" style={{color: color}}>
              {skills.fourthskill ?
               <><p>{skills.fourthskill}</p> <span> <i className="fa-solid fa-hand-point-left"></i> </span></> 
               : ""
               }
              
            </div>
            <div className="skill-box" style={{color: color}}>
              {skills.otherskill ? 
              <> <p>{skills.otherskill}</p> <span> <i className="fa-solid fa-hand-point-left"></i> </span></>
                : "" }
             
            </div>
          </div>

          <div className="projects" style={{color: color}}>
            <h3 style={{color: backgroundcolor, backgroundColor: color}}>PROJECTS</h3>
            <div className="project-box" style={{color: color}}>
              {projects.firstproject ? 
                <> <p>{projects.firstproject}</p> <span> <i className="fa-solid fa-hand-point-left"></i> </span></>
                  : ""}
             
            </div>
            <div className="project-box" style={{color: color}}>
              {projects.secondprojects ? <> <p>{projects.secondprojects}</p> <span> <i className="fa-solid fa-hand-point-left"></i> </span></> : ""}
             
            </div>
            <div className="project-box" style={{color: color}}>
              {projects.thirdprojects ? <><p>{projects.thirdprojects}</p> <span> <i className="fa-solid fa-hand-point-left"></i> </span></> : ""}
              
            </div>
            <div className="project-box" style={{color: color}}>
              {projects.fourthproject ? <><p>{projects.fourthproject}</p> <span> <i className="fa-solid fa-hand-point-left"></i> </span></> : ""}
              
            </div>
            <div className="project-box" style={{color: color}}>
              {projects.otherproject ? <><p>{projects.otherproject}</p> <span> <i className="fa-solid fa-hand-point-left"></i> </span></> : ""}
              
            </div>
          </div>

          <div className="language" style={{color: color}}>
            <h3 style={{color: backgroundcolor, backgroundColor: color}}>LANGUAGE</h3>
            <div className="language-box" style={{color: color}}>
              {language.firstlanguage ? <><p>{language.firstlanguage}</p> <span> <i className="fa-solid fa-hand-point-left"></i> </span></> : ""}
              
            </div>
            <div className="language-box" style={{color: color}}>
              {language.secondlanguage ? <> <p>{language.secondlanguage}</p> <span> <i className="fa-solid fa-hand-point-left"></i> </span></> : ""}
             
            </div>
            <div className="language-box" style={{color: color}}>
              {language.thirdlanguage ? <><p>{language.thirdlanguage}</p> <span> <i className="fa-solid fa-hand-point-left"></i> </span> </> : ''}
              
            </div>
            <div className="language-box" style={{color: color}}>
              {language.fourthlanguage ? <><p>{language.fourthlanguage}</p> <span> <i className="fa-solid fa-hand-point-left"></i> </span> </> : ''}
              
            </div>
            <div className="language-box" style={{color: color}}>
              {language.otherlanguage ? <>  <p>{language.otherlanguage}</p> <span> <i className="fa-solid fa-hand-point-left"></i> </span></> : ""}
             
            </div>
          </div>

          <div className="courses" style={{color: color}}>
              <h3 style={{color: backgroundcolor, backgroundColor: color}}>COURSES</h3>
              <div className="course-box" style={{color: color}}>
                {courses.firstcourse ? <> <p>{courses.firstcourse}</p> <span> <i className="fa-solid fa-hand-point-left"></i> </span> </> : ""}
               
              </div>
              <div className="course-box" style={{color: color}}>
                {courses.secondcourse ? <> <p>{courses.secondcourse}</p> <span> <i className="fa-solid fa-hand-point-left"></i> </span> </> : ""}
               
              </div>
              <div className="course-box" style={{color: color}}>
                {courses.thirdcourse ? <><p>{courses.thirdcourse}</p> <span> <i className="fa-solid fa-hand-point-left"></i> </span> </> : ""}
               
              </div>
              <div className="course-box" style={{color: color}}>
                {courses.fourthcourse ? <> <p>{courses.fourthcourse}</p> <span> <i className="fa-solid fa-hand-point-left"></i> </span> </> : ""}
               
              </div>
              <div className="course-box" style={{color: color}}>
                {courses.othercourse ? <> <p>{courses.othercourse}</p> <span> <i className="fa-solid fa-hand-point-left"></i> </span> </> : ""}
               
              </div>
          </div>
        </div>

        <div className="resume-part-two">
          <div className="summary" style={{color: color}}>
            <h3 style={{color: backgroundcolor, backgroundColor: color}}>ABOUT ME</h3>
            <p>{summary}</p>
          </div>

          <div className="education" style={{color: color}}>
            <h3 style={{color: backgroundcolor, backgroundColor: color}}>EDUCATION</h3>
            <div className="education-details">
              <div className="education-time">
                <div className="time-duration" style={{color: color}}>
                  {education.startingmonth && education.endingmonth ? <> <span> <i className="fa-solid fa-graduation-cap"></i> </span> 
                    <p>{education.startingmonth} &nbsp; {education.endingmonth}</p> </> : ""}
                  
                </div>
              </div>
              <div className="education-process" style={{color: color}}>
                  <h5>{education.field}</h5>
                  <strong>{education.school}</strong>
                  <p>{education.university} - {education.city}</p>
                  <span>{education.otherdetails}</span>
              </div>
            </div>
          </div>


          <div className="experience" style={{color: color}}>
            <h3 style={{color: backgroundcolor, backgroundColor: color}}>WORK EXPERIENCE</h3>
            <div className="experience-details">
              <div className="jot-title" style={{color: color}}>
                <strong>{experience.jobtitle}</strong>
                <div className="job-location" style={{color: color}}>
                  {experience.location ? <><p>{experience.location}</p>
                  <span> <i class="fa-solid fa-location-dot"></i> </span></> : ""}
                  
                </div>
                
              </div>
                <div className="company-details" style={{color: color}}>
                  <p>{experience.companyname} &nbsp; -</p>
                  <span>{experience.startingmonth} - {experience.endingmonth}</span>
                </div>
              <div className="other-job-details" style={{color: color}}>
                <p>{experience.otherjobdetails}</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
})

export default Resume
