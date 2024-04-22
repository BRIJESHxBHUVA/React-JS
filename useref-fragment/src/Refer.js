import React, { Fragment } from 'react'

export default function Refer() {
    const [value, setValue] = React.useState('');
    const [count, setCount] = React.useState(0);
    const [copy, setCopy] = React.useState('');

    const  handleChange = (e) => {
        
        setValue(e.target.value);
        console.log(value);
        e.preventDefault();
      };

      React.useEffect(()=>{

        if(value!=='' && value!=null){
            let length = value.length;
            setCount(length);

        }else{

          setCount(0);
          setCopy(value)

        }

       
      },[value])

      function copyeffect(){

        navigator.clipboard.writeText(value)
        setCopy(value)
      
      }


  return (
    <Fragment>
      <div className="continer">
        <div className="main">
          <h1>Enter a Value and  See the Character Count :</h1>
        <input type="text" value={value} onChange={handleChange}/>
        <h3>Caracter Count : {count}</h3>

        <button onClick={copyeffect}>Copy</button>
        <p>This is copied text : {copy}</p>
        </div>
        </div>
        </Fragment>
)
}
