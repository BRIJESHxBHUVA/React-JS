import React from 'react'

export default function Image(props) {

    const [like, setlike] = React.useState(0);
    const [deslike, setdeslike] = React.useState(0);
    const [commet, setcommet] = React.useState("");
    const [mystyle, setMyStyle] = React.useState({});
    const [desmystyle, setdesMyStyle] = React.useState({});
    const [clearstyle, setclearstyle] = React.useState({});

    const Increment=()=>{

        setlike(prevLike => prevLike + 1 )

       setMyStyle({
        color : 'red',
        
       })
    }

    const Descrement=()=>{

        setdeslike(prevDeslike => prevDeslike + 1)
        setdesMyStyle({
            color : 'blue',
            overflow : 'hidden'
           })
    }

    const Commentpass = ()=>{

        setcommet(prompt())

    }

    const Clearhandle=()=>{
        setlike(0)
        setdeslike(0)
        setcommet('')

        setclearstyle({
            display:'block',
            backgroundColor:'green',
            color: 'white'
        })
    }

  return (


    <div>
      <div className="section">
        <h2 style={{color:'white'}}>Give Your Opinion for Image</h2>
        <img src={props.elephant} alt="" />

        <div className="btngroup">
            <button onClick={Increment}><i class="fa-solid fa-heart" style={mystyle}></i><span>Like({like})</span></button>
            <button onClick={Descrement}><i class="fa-solid fa-thumbs-down" style={desmystyle}></i><span>Deslike({deslike})</span></button>
            <button onClick={Commentpass}><i class="fa-regular fa-comment"></i></button>
        </div>
            <p style={{color:'white'}}>{commet}</p>

            <button onClick={Clearhandle} id='clear' style={clearstyle}>Clear All</button>
      </div>
    </div>
  )
}
