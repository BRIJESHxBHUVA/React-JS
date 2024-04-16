import React from 'react'

export default function Logged() {

    const [user, setUser] = React.useState(false)
    const [log, setlog] = React.useState('Log In')
    
   const handlelogevent =() =>{
       setUser(!user)

       alert(user ? 'You are Log In' : 'You are Log Out')

    }

  return (
    <div className='main'>
        { user ?
        <div className='main'>
            <h1>{log}Loggin Page</h1>
            <button onClick={handlelogevent} style={{backgroundColor: 'green'}}>Login</button>
        </div>
            :
        <div>
            <h1>Logout</h1>
            <button onClick={handlelogevent}  style={{backgroundColor: 'red'}}>log out</button>
        </div>

        
        }
    </div>
  )
}
