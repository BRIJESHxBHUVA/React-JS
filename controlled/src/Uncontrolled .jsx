import React from 'react'

export default function Uncontrolled () {

    const inputref = React.useRef(null);
    const psw = React.useRef(null);
    const clr = React.useRef('#000');
    const [formcolor, setFormColor] = React.useState('#fff')

    function handleForm(e) {

        e.preventDefault();
        alert(`${inputref.current.value} ${psw.current.value}`);

    }

    function handlecolor(event){
       
        console.log(clr.current.value)

        const color = event.target.value;
        setFormColor(color);

        // const color = event.target.value;
        // clr.current = color;
        // document.querySelector("form").style.backgroundColor = clr.current;
        // event.preventDefault();
    
    }

    const mystyle={
      
        border : '1px solid red',
        backgroundColor : formcolor
        // backgroundColor : clr.current,
    }

  return (
   <>
   
   <div className="main">
            <h1 style={{color: 'black'}}>Enter User Details </h1>
        <form action="" style={mystyle} >
            <center>
                <br />
            <label htmlFor="">Enter  your name:</label><br />
            <input type="text" ref={inputref}/> <br />

            <label htmlFor="">Enter your Password</label><br />
            <input type="password" ref={psw}/><br />

            <label htmlFor="">Select Main Container Colour</label><br />
            <input type="color" ref={clr} onChange={handlecolor}/> <br />

            <label htmlFor="">Select Form Colour</label><br />
            <input type="color" ref={inputref}/> <br />

            <button onClick={handleForm}>Submit</button>
            </center>
        </form>

    </div>

   </>
  )
}
