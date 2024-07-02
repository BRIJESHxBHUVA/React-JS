import React, { useState } from 'react'
import { auth } from './AuthData'
import {createUserWithEmailAndPassword, signOut} from 'firebase/auth'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [signup, setSignup] = useState(false)


  const handleSubmit = async(e)=> {
    

    e.preventDefault();

    try{

      await createUserWithEmailAndPassword(auth, email, password)
      setUserEmail(email)
      setSignup(true)

    } catch(err){
      setError(err.message)
    }

  }

  const Signout = async()=> {

    try{
      await signOut(auth)
      setSignup(false)
      setUserEmail("")
    }
    catch(err){ 
      setError(err.message)
    }

    

  }


  if(signup){
    return(
      <div className="login">
        <div className="title">
        <h3>{userEmail}</h3>
        <button onClick={Signout}>Sign out</button>
        </div>
       
      </div>
    )
  }

  return (
    <div className='main'>
      <div className="box">
        <h3>Sign Up</h3>
        <form action="">
          <input type="text" value={email}onChange={(e)=> setEmail(e.target.value)} placeholder='Enter email ' />

          <input type="text" placeholder='Enter Password' value={password} onChange={(e)=> setPassword(e.target.value)} />

          <button onClick={handleSubmit}>Sign In</button>
          {error && <p style={{color: 'white'}}>{error}</p> }
        </form>
        
      </div>
    </div>
  )
}

export default Login
