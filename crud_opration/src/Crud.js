import React, {useState} from 'react'

export default function Crud() {

    const [inputval, setInputval] = useState('')

    const [data, setData] = useState('')

    const handleinput = (e)=> {
       
        // setInputval({...inputval,[e.target.name]: e.target.value})
        setInputval(e.target.value)
    
        setData(...inputval, data)
        e.preventDefault();
    }

    const submitdata = ()=> {
    
        setInputval(inputval)
        // alert('Data Addes Successfully')
        // console.log(inputval)
        console.log(data)
    }

  return (
    <>
    
        <div className="main">

            <div className="inputdata">
                <h1>Enter Value</h1>
                <input type="text" placeholder='Enter Data' value={inputval} onChange={handleinput}/>
                <button onClick={submitdata}>Submit</button>
            </div>

            <div className="outputdata">

                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                    </table>

            </div>

        </div>
    
    </>
  )
}
