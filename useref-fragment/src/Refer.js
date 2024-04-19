import React, { Fragment } from 'react'

export default function Refer() {
    const [value, setValue] = React.useState('');
    const [count, setCount] = React.useState(0);

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

        }

      },[value])



  return (
    <Fragment>

        <input type="text" value={value} onChange={handleChange}/>
        <h3>Word Count : {count}</h3>

        </Fragment>
)
}
