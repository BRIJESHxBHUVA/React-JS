import React, { createContext, useState } from 'react'
export const AppContext = createContext();

const Context = ({children}) => {

    const [personalInfo, setPersonalInfo] = useState({
        fullName: "",
        profession: "",
        email: "",
        phone: "",
        linkedIn: "",
        github: "",
        instagram: "",
        otherurl: "",
        address: "",
        image: null,
      });

      const [summary, setSummary] = useState("");

      const [experience, setExperience] = useState({
        companyname: "",
        jobtitle: "",
        startingmonth: "",
        endingmonth: "",
        location: '',
        otherjobdetails: "",
      });
    
      const [education, setEducation] = useState({
        school: "",
        field: "",
        university: "",
        city: "",
        startingmonth: "",
        endingmonth: "",
        otherdetails: "",
      });
    
      const [language, setLanguage] = useState({
        firstlanguage: "",
        secondlanguage: "",
        thirdlanguage: "",
        fourthlanguage: "",
        otherlanguage: "",
      });
    
      const [projects, setProjects] = useState({
        firstproject: "",
        secondproject: "",
        thirdproject: "",
        fourthproject: "",
        otherproject: "",
      });
    
      const [courses, setCourses] = useState({
        firstcourse: "",
        secondcourse: "",
        thirdcourse: "",
        fourthcourse: "",
        othercourse: "",
      });
    
      const [skills, setSkills] = useState({
        firstskill: "",
        secondskill: "",
        thirdskill: "",
        fourthskill: "",
        otherskill: "",
      });

      const [menubar, setMenubar] = useState(false)

      const [color, setColor] = useState('')
      const [backgroundcolor, setBackgroundcolor] = useState('')

  return (
    <AppContext.Provider value={{personalInfo, setPersonalInfo, summary, setSummary, experience, setExperience, education, setEducation, language, setLanguage, projects, setProjects, courses, setCourses, skills, setSkills, menubar, setMenubar, color,  setColor, backgroundcolor, setBackgroundcolor }}>
        {children}
    </AppContext.Provider>
  )
}

export default Context
