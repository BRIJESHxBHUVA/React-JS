import React from 'react'

export default function FormStyling() {

    const [formdata, setFormdata] = React.useState({
        Name : '',
        Email : '',
        password : ''
    })

    function handleinput(e) {

        const {name, value} = e.target

        setFormdata(prev => ({...prev ,[name]:value}))

        // setFormdata({
        //     ...formdata,
        //     [name] : value
        // })

    }


    function  handleSubmit(e) {
        e.preventDefault();
        console.log("Form Submitted");
       console.log(formdata)
    }
    
  return (
    <>

        <div className="main">
        
            <div className="box">

                <h3>User Details</h3>

                <label htmlFor="name">Name: </label>
                <input type="text" name="Name" value={formdata.Name} onChange={handleinput}/><br/>
                
                <label htmlFor="email">Email Address: </label>
                <input type="email" name="Email" value={formdata.Email} onChange={handleinput}/><br/>

                <label htmlFor="password">Enter Password: </label>
                <input type="password" name="password" value={formdata.password} onChange={handleinput}/><br/>

                <small>We will never share your email with anyone else.</small><br/>
                <button onClick={handleSubmit}>Submit</button>

            </div>

        </div>
    
    </>
  )
}
