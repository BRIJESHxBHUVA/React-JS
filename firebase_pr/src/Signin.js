import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {RecaptchaVerifier, signInWithPhoneNumber} from 'firebase/auth'
import { auth } from './config'


const Signin = () => {

    const [phone, setPhone] = useState("")
    const [user, setUser] = useState(null)
    const [otp, setOtp] = useState('')

    const sentOtp= async()=>{
        try{
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
        const confirm = await signInWithPhoneNumber(auth,phone,recaptcha)
        console.log(confirm)
        }catch(err){
            console.log(err)
        }
        

    }


    const verifyOtp = async()=> {
        try{
          const data = await user.confirm(otp)
          console.log(data)
        }
        catch(err){
            console.log(err)
        }
      
    }

    return (
        <div className='main'>
            <div className="box">
               {/* <h3 style={{fontSize: '25px'}}>Login with Phone</h3> */}
            <PhoneInput className='number'
                country={""}
                value={phone}
                onChange={(phone)=>setPhone("+" + phone)}
            />

            <button onClick={sentOtp} className='send'>Send OTP</button>
            
            <input type="text" onChange={(e)=>setOtp(e.target.value)} placeholder='Enter otp' style={{border:'1px solid black',paddingLeft:'20px' ,height:'30px', width: '300px',borderRadius:'8px', marginTop:'20px'}}/>
            <button onClick={verifyOtp} className='verify'>Verify otp</button>
            <div id='recaptcha' style={{height: '30px', width: '300px', marginTop: '20px'}}></div>
         </div>
        
        </div>
    )
}

export default Signin
