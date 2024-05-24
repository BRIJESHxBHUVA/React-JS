import React from 'react'

export default function PractiseValidForm() {

    const [inputvalue, setInputvalue] = React.useState({
        Name : '',
        Email : '',
        Password : ''
    })

    function SubmitData(){
        console.log(inputvalue)

        const Data = JSON.parse(localStorage.getItem('Set Input Data : ')) || []

        Data.push({
            inputvalue
        })

        localStorage.setItem('Set Input Data : ', JSON.stringify(Data))
    }

    function handleinput(e){

        const {name, value} = e.target 

        setInputvalue({
            ...inputvalue,
            [name] : value
        })

    }

  return (
   <>
   
    <div className="main">
        <div className="box">
            <h3>Practise Form Data</h3>
            <input type="text" name='Name' placeholder='Enter Your Full Name' value={inputvalue.Name} onChange={handleinput}/>
            <input type="text" name='Email' placeholder='Enter Your Emil ID' value={inputvalue.Email} onChange={handleinput}/>
            <input type="text" name='Password' placeholder='Enter Your Password' value={inputvalue.Password} onChange={handleinput}/><br />
            <button onClick={SubmitData}>Submit</button>
        </div>
    </div>
    

   </>
  )
}
