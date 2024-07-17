import React, { useContext, useState } from 'react'
import './Summary.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../../Context'

const Summary = () => {

  const {summary, setSummary} = useContext(AppContext);

  // const [summary, setSummary] = useState("")


  const HandleSubmit = (e)=> {
    e.preventDefault();
    console.log(summary)
  }

  return (
    <>
    <div className="form-header">
      <p>Cover Letter</p>
    </div>
    <form action="">
     
    
     
      <div className="line">
        <textarea name="summary" id="" placeholder='Enter something about you...' value={summary} onChange={(e)=> setSummary(e.target.value)}></textarea>
      </div>
      <div className="line line-btn">
        <div className="btns">
          <button style={{
              backgroundColor: "white",
              color: "#ff6e7f",
              border: "1px solid grey",
            }} onClick={HandleSubmit} > Submit </button>

          <button className="next-sec"> <Link style={{textDecoration: 'none', color: 'white'}} to='/experience'> Next Section </Link> </button>
        </div>
      </div>
    </form>
  </>
  )
}

export default Summary
