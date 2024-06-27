import React, { useEffect, useState } from 'react'
import { Auth } from './Auth'
import { signInWithPopup} from 'firebase/auth'
import home from './home'
import { provider } from './Auth'


const GoogleAuth = () => {

    const [data, setData] = useState("")

  
    

    // useEffect(()=>{

    // },[])

    const handleGoogleSignIn = () => {
    
        signInWithPopup(Auth, provider)
    
    .then((val)=>{
        setData(val.user.email)
        console.log(val.user.email)
    }).catch((err)=> {
        console.log(err)
    })

    }
  return (
    <div style={{height: '100vh', width: '100%', backgroundColor: 'burlywood', display: 'grid', placeItems: 'center'}}>
        {data ? <home/> : <button style={{height: '30px', width: '175px', borderRadius: '12px', border: 'none'}} onClick={handleGoogleSignIn}>Sign in with Google</button> }
      
    </div>
  )
}

export default GoogleAuth
