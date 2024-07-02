import React, { useState } from 'react'
import { Auth } from './Data'
import {signInWithPopup} from 'firebase/auth'
import { provider } from './Data'
import { Link } from 'react-router-dom'

const Login = () => {

    const [data, setData] = useState('')

    const handleGoogle = ()=> {

        signInWithPopup(Auth, provider)

        .then((data)=>{
            setData(data)
        })
        .catch((err)=>{
            console.log(err)
        })

    }

  return (
    <div className='main'>
        <div className="login">
            <button className='login-btn' onClick={handleGoogle}>Login with Google</button>
           <Link to='login with email'> <button className='login-email'>Login with email</button></Link>
        </div>
    </div>
  )
}

export default Login
