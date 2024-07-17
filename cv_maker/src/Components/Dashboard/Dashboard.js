import React, { useContext, useRef, useState } from "react";
import "./Dashboard.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PersonalInfo from "../../Pages/PersonalInfo/PersonalInfo";
import Summary from "../../Pages/Summary/Summary";
import Experience from "../../Pages/Experience/Experience";
import Education from "../../Pages/Education/Education";
import Language from "../../Pages/Language/Language";
import Projects from "../../Pages/Projects/Projects";
import Courses from "../../Pages/Courses/Courses";
import Skills from "../../Pages/Skills/Skills";
import Sidebar from "../Sidebar/Sidebar";
import Resume from "../../Pages/Resume/Resume";
import html2pdf from "html2pdf.js";
import { AppContext } from "../../Context";

const Dashboard = () => {

  const {menubar} = useContext(AppContext)

  const {color , setColor, backgroundcolor, setBackgroundcolor} = useContext(AppContext)

  const resumeRef  = useRef()

  const HandleDownload = ()=> {

    const element = resumeRef.current;

    // const originalClass = element.className;

    // element.className += " fixed-dimensions";

    const options = {
      margin: 0,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(options).save();

  }


  const HandleChange = (e)=> {
    setColor(e.target.value)
  }

  // const HandleColorClick = ()=> {
  //   console.log("Text Color : ", color)
  // }

  const HandleBgColor = (e)=> {
    setBackgroundcolor(e.target.value)
  }

  return (
    <div className="dashboard">
      <div className="dashboard-main">
        
        <div className="section" style={{right: menubar ? '0%': ''}}>

          <Sidebar />
        </div>

        {/* Here Change Component According to User Changes */}

        <div className="section-form">
          <Routes>
            <Route exact path="/" element={<PersonalInfo />  }/>
            <Route
              exact
              path="/summary"
              element={<Summary />}
            />
            <Route
              exact
              path="/experience"
              element={
                <Experience  />
              }
            />
            <Route
              exact
              path="/education"
              element={
                <Education />
              }
            />
            <Route
              exact
              path="/language"
              element={
                <Language />
              }
            />
            <Route
              exact
              path="/projects"
              element={
                <Projects />
              }
            />
            <Route
              exact
              path="/courses"
              element={<Courses />}
            />
            <Route
              exact
              path="/skills"
              element={<Skills />}
            />
          </Routes>
        </div>

        <div className="setting">
          <div className="setting-header">
            <p>Template Options</p>
          </div>

          <div className="option-line">
            <div className="box">
              <i className="fa-solid fa-fill-drip"></i>
              <p>Fill Secton</p>
            </div>
            <div className="box">
              <i className="fa-solid fa-table"></i>
              <p>Change Template</p>
            </div>
          </div>

          <div className="option-line">
            <div className="box">
              <i className="fa-solid fa-eye"></i>
              <p>Preview Resume</p>
            </div>
            <div className="box" onClick={HandleDownload}>
              <i className="fa-solid fa-download"></i>
              <p>Download PDF</p>
            </div>
          </div>

          <div className="option-line">
            <div className="upgrade">
              <i className="fa-solid fa-circle-up"></i>
              <p>Upgrade</p>
            </div>
          </div>

          <div className="option-line">
            <div className="color">
              
              <input type="color" value={color} onChange={HandleChange} />
              <p>Select Color</p>
            </div>
          </div>

          <div className="option-line">
            <div className="color">
              <input type="color" value={backgroundcolor} onChange={HandleBgColor} />
              <p>Select Background Color</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-box">
          <p>Copyrights &copy; 2024 Brijesh Bhuva All rights reerved.</p>
        </div>
      </div>
      <Resume ref={resumeRef} />
    </div>
  );
};

export default Dashboard;
