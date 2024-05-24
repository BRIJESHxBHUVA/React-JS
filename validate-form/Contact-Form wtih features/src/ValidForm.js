    import React,{useState} from 'react'
    
    export default function ValidForm() {
        const [input, setInput] = useState({
            Name : '',
            Email : '',
            Password : ''
        })

        const [err, setErr] = useState('')
        const [mailerr, setmailErr] = useState('')
        const [pw, setPw] = useState('')

        function HandleData(){

            let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if(input.Name.length === 0){
                setErr('Please Enter Valid Name !!');
            }

            else if(input.Email.length === 0){
                setmailErr('Please Enter Email ID !!');
            }

            else if(!regex.test(input.Email)){
                setmailErr('Please Enter Valid Email ID !!');
            }

           else if(input.Password.length === 0){
                setPw('Please Enter Password !!')
            }

            else if(input.Password.length < 6){
                setPw('Please Enter at Lease 6 Characters')
            }

            else{

                console.log(input)
                const Data = JSON.parse(localStorage.getItem('User Data')) || []
                Data.push({
                    input
                })
                localStorage.setItem('User Data', JSON.stringify(Data));

            }
        }

        function handleinput(e){
            const {name, value} = e.target;

            setInput({
                ...input,
                [name] : value
            })

           

        }


      return (
       <>

        <div className="main">
            <div className="box">
                <h3>Login Page</h3>
                <input type="text" name='Name' placeholder='Enter Your Full Name Here' value={input.Name} onChange={handleinput}/>
                <p style={{color : 'white'}}>{err}</p>
                <input type="text" name='Email' placeholder='Enter Your Email ID Here' value={input.Email} onChange={handleinput}/>
                <p style={{color : 'white'}}>{mailerr}</p>
                <input type="text" name='Password' placeholder='Enter Your Password Here' value={input.Password} onChange={handleinput}/><br />
                <p style={{color : 'white'}}>{pw}</p>
                <button onClick={HandleData}>Submit</button>
                <div className="wave"></div>
            </div>
        </div>

       </>
      )
    }
    