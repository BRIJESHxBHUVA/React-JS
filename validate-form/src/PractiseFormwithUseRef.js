import React,{useRef} from 'react'

export default function PractiseFormwithUseRef() {

    const InputValue = ({

        Name : useRef(null),
        Email : useRef(null),
        Password : useRef(null)
    })

    function HandleSubmitData(){

        console.log({
            Name : InputValue.Name.current.value,
            Email : InputValue.Email.current.value,
            Password : InputValue.Password.current.value
        })

        const Data = JSON.parse(localStorage.getItem('User Data With useRrf : ')) || []

        Data.push({
            Name : InputValue.Name.current.value,
            Email : InputValue.Email.current.value,
            Password : InputValue.Password.current.value
        })

        localStorage.setItem('User Data With useRrf : ',JSON.stringify(Data))

    }

  return (
   <>
   
    <div className="main">
        <div className="box">
            <h3>Practise useRef Data Stored</h3>
            <input type="text" ref={InputValue.Name} placeholder='Enter Your Full Name'/>
            <input type="text" ref={InputValue.Email} placeholder='Enter Your Email ID'/>
            <input type="text" ref={InputValue.Password} placeholder='Enter Your Password'/><br />
            <button onClick={HandleSubmitData}>Submit</button>
        </div>
    </div>

   </>
  )
}
