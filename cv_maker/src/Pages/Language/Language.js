import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../Context'

const Language = () => {

  const {language, setLanguage} = useContext(AppContext);

  // const [language, setLanguage] = useState({
  //   firstlanguage: '',
  //   secondlanguage: '',
  //   thirdlanguage: '',
  //   fourthlanguage: '',
  //   otherlanguage: '',
  // })

  const HandleChange = (e)=> {

    const {name, value} = e.target;
    setLanguage((prevState)=> ({
      ...prevState,
      [name]: value,
    }))

  }

  const HandleSubmit = (e)=> {
    e.preventDefault();
    console.log(language)
  }

  return (
    <>
      <div className="form-header">
        <p>Language Known</p>
      </div>
      <form action="">
        <div className="line">
          <input type="text" className='line-input' name='firstlanguage' placeholder="First Language" value={language.firstlanguage}  onChange={HandleChange} />
          <input type="text" className='line-input' name='secondlanguage' placeholder="Second Language" value={language.secondlanguage} onChange={HandleChange}  />
        </div>
        <div className="line">
          <input type="text" className='line-input' name='thirdlanguage' placeholder="Third Language" value={language.thirdlanguage}  onChange={HandleChange} />
          <input type="text" className='line-input' name='fourthlanguage' placeholder="Fourth Language" value={language.fourthlanguage} onChange={HandleChange}  />
        </div>

        <div className="line">
          <textarea name="otherlanguage" id="" placeholder='Other Language'  value={language.otherlanguage}  onChange={HandleChange} ></textarea>
        </div>
        <div className="line line-btn">
          <div className="btns">
            <button  style={{
                backgroundColor: "white",
                color: "#ff6e7f",
                border: "1px solid grey",
              }} onClick={HandleSubmit} >  Submit </button>
            <button className="next-sec"> <Link style={{textDecoration: 'none', color: 'white'}} to='/projects'> Next Section </Link> </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Language
