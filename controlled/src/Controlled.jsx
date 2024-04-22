import React from 'react'

export default function Controlled() {

    const [name, setName] = React.useState('')
    const [psw, setPsw] = React.useState('')
    const [color, setColor] = React.useState('#000');
    const [bg, setBg] = React.useState('burlywood');

    function handleForm(e) {
        e.preventDefault();
        alert(`${name} ${psw}`)

    }

    function handlebackground(event){
        setColor(event.target.value);
    }

    function handleformbackground(event){
        setBg(event.target.value);
        console.log(bg)
    }

    const mystyle={
        backgroundColor: color,
    }

    const myformstyle={
        backgroundColor : bg,
    }

  return (
   <>
    
    <div className="main"  style={mystyle}>
            <h1>Enter User Details </h1>
        <form action=""  style={myformstyle}>
            <center>
                <br />
            <label htmlFor="">Enter  your name:</label><br />
            <input type="text" value={name} onChange={((e)=>setName(e.target.value))}/> <br />

            <label htmlFor="">Enter your Password</label><br />
            <input type="password" value={psw} onChange={((e)=>{setPsw(e.target.value)})}/><br />

            <label htmlFor="">Select Main Container Colour</label><br />
            <input type="color" onChange={handlebackground}/> <br />

            <label htmlFor="">Select Form Colour</label><br />
            <input type="color" onChange={handleformbackground}/> <br />

            <button onClick={handleForm}>Submit</button>
            </center>
        </form>

    </div>
   
   </>
  )
}
