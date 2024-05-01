import React from 'react'

export default function ValidForm() {

    const [formdata, setFormdata] = React.useState({
        Name: '',
        Email: '',
        password: ''
    })

    const [error, setError] = React.useState({})
    // const [valid, setValid] = React.useState({})

    function handleinput(e) {

        const { name, value } = e.target

        setFormdata(prev => ({ ...prev, [name]: value }))

    }
    // setFormdata({
    //     ...formdata,
    //     [name] : value
    // })

    function Validdata(values) {
        let error = {}
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!values.Name) {
            error.Name = 'Please Enter Valid Username'
        }

        if (!regex.test(values.Email)) {
            error.Email = 'Please enter a valid email address!'
        }

        if (!values.password) {
            error.password = 'Please enter  your Password'
        }
        else if (values.password.length < 6) {
            error = "Password must be at least 6 characters long"
        }

        return error;

    }



    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form Submitted");
        console.log(formdata)
        let error = Validdata(formdata)

        if (error.length <= 0) {
            alert('Form Submitted')
        }
        else {
            setError(error)
        }
    }


    return (
        <>

            <div className="main">

                <div className="box">

                    <h3>User Details</h3>

                    <label htmlFor="name">Name: </label>
                    <input type="text" name="Name" value={formdata.Name} onChange={handleinput} /><br />
                    {/* <span>{valid}Please enter your full name.</span><br />   */}
                    <span>{error.Name}</span>


                    <label htmlFor="email">Email Address: </label>
                    <input type="email" name="Email" value={formdata.Email} onChange={handleinput} /><br />
                    {/* <span>Please enter your valid email address.</span><br /> */}
                    <span>{error.Email}</span><br />

                    <label htmlFor="password">Enter Password: </label>
                    <input type="password" name="password" value={formdata.password} onChange={handleinput} /><br />
                    {/* <span>Please enter valid Password</span> */}
                    <span>{error.password}</span><br />

                    <small>We will never share your email with anyone else.</small><br />
                    <button onClick={handleSubmit}>Submit</button>

                </div>

            </div>

        </>

    )

}
