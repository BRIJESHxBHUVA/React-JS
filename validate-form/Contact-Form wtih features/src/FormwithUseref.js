import React, { useRef } from 'react'

export default function FormwithUseref() {

    const Inputvalue = ({
        Name : useRef(null),
        Email : useRef(null),
        Password : useRef(null)
    })

    const err = useRef('')
    const mailerr = useRef('')
    const pwerr = useRef('')


    function HandleData(){

        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(Inputvalue.Name.current.value.length === 0){
            err.current.textContent = 'Please Enter Valid Name'
        }
        else if(Inputvalue.Email.current.value.length === 0){
            mailerr.current.textContent = 'Please Enter Email ID'
        }
        else if(!regex.test(Inputvalue.Email.current.value)){
            mailerr.current.textContent = 'Please Enter Valid Email ID'
        }
        else if(Inputvalue.Password.current.value.length === 0){
            pwerr.current.textContent = 'Please Enter Valid Password'
        }
        else if(Inputvalue.Password.current.value.length < 6){
            pwerr.current.textContent = 'Please Enter at Least 6 Characters Password'
        }
        else{

            console.log({
                Name : Inputvalue.Name.current.value,
                Email : Inputvalue.Email.current.value,
                Password : Inputvalue.Password.current.value
            })
    
            const Data = JSON.parse(localStorage.getItem('User Data by useRef Event : ')) || []
            Data.push({
                Name : Inputvalue.Name.current.value,
                Email : Inputvalue.Email.current.value,
                Password : Inputvalue.Password.current.value
            })
    
            localStorage.setItem('User Data by useRef Event : ', JSON.stringify(Data));

        }



        

    }


  return (
    <>

       <div className="main">
        
        <div className="box">
            <h3>Here are we login !</h3>

            <input type="text" ref={Inputvalue.Name} placeholder='Enter Your Full Name'/>
            <p ref={err} style={{color : 'white'}}></p>
            <input type="text" ref={Inputvalue.Email} placeholder='Enter Your Email ID'/>
            <p ref={mailerr} style={{color : 'white'}}></p>
            <input type="text" ref={Inputvalue.Password} placeholder='Enter Your Password'/><br />
            <p ref={pwerr} style={{color : 'white'}}></p><br />
            <button onClick={HandleData}>Submit</button>
        </div>

        </div> 
    
    </>
  )
}
