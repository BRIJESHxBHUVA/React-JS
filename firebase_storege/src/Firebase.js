import React, { useState } from 'react'
import { ref, set } from 'firebase/database'
import { database } from './Config'

const Firebase = () => {

    const [id, setId] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Handlesubmit = (e)=> {
        e.preventDefault();
        const Data = ref(database, `UserData/${id}`);
        set(Data, {email, password})
        setEmail("")
        setPassword("")
    }

  return (
    <div className="main">
        <div className="box">
            <form action="">
                 <input type="text" placeholder='Enter ID' value={id} onChange={(e)=> setId(e.target.value)}/>
                <input type="text" placeholder='Enter email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                <input type="password" placeholder='Enter password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button onClick={Handlesubmit}>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default Firebase
