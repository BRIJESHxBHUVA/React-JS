import React, { useState } from 'react'
import { Auth } from './Data'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [signup, setSignup] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await createUserWithEmailAndPassword(Auth, email, password)
            setUserEmail(email)
            setSignup(true)

        } catch (err) {
            setError(err)
        }

    }


    const Signout = async () => {

        try {
            await signOut(Auth)
            setSignup(false)
            setUserEmail("")
        }
        catch (err) {
            setError(err.message)
        }



    }


    if (signup) {
        return (
            <div className="signup">
                <div className="title">
                    <h3>{userEmail}</h3>
                    <button onClick={Signout}>Sign out</button>
                    <Link to="login with email" onClick={()=>setSignup(false)}><button>back to signIn</button></Link>
                </div>

            </div>
        )
    }

    return (
        <div className='Signin'>
            <div className="box">
                <h3>Sign Up</h3>
                <form action="">
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email ' />

                    <input type="text" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button onClick={handleSubmit}>Sign In</button>
                    <center> <Link to='/'>Login with Google</Link></center>
                    {error && <p style={{ color: 'white' }}>{error}</p>}
                </form>

            </div>
        </div>
    )
}

export default SignIn
