import React, {useState} from 'react'


export default function Form() {

    const [name, setName] = useState("")
    const [lastname, setLastName] = useState("")
    const [mail, setMail] = useState("")
    const [mystyle, setMystyle] = useState({})

    function handleChangeName(event){
        setName(event.target.value);
    }

    function handleChangeLastName(event){       
        setLastName(event.target.value);
    }

    function handleChangeEmail(event){
        setMail(event.target.value);
    }

    function SubmitData(event){  
       
        console.log("First Name : " + name)
        console.log("Last Name : " + lastname);
        console.log("Email : " + mail);

        
        if(name === ' '){
           var a = false
        }
        else{
            a = alert("Welcome to Our Website " + name);
        }

        setMystyle={
           
        }

        event.preventDefault();
    }

    

  return (
   <>
    
    <div className="section">

        <form action="">

            <input type="text" value={name} placeholder='Enter your first name' onChange={handleChangeName}/>
            <span style={name === '' ? {...mystyle, color:'red', display:'inline-block'} : {display:'none'}}>Enter First Name.</span>

            <input type="text" value={lastname} placeholder='Enter your last name' onChange={handleChangeLastName}/>
            <span style={lastname === '' ? {...mystyle, color:'red', display:'inline-block'} : {display:'none'}}>Enter Last Name.</span>

            <input type="text" value={mail} placeholder='Enter your email ID' onChange={handleChangeEmail}/>
            <span style={mail === '' ? {...mystyle, color:'red', display: 'inline-block'} : {display:'none'}}>Enter Email ID.</span>

            <button onClick={SubmitData}>Submit</button>

        </form>

    </div>
    
   </>
  )
}
