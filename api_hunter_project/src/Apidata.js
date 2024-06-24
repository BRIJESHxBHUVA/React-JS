import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Apidata = () => {

    const [data, setData] = useState({
        image: '',
        title: '',
    })

    // const [apiData, setApiData] = useState([])

    useEffect(() => {

        axios.get('http://localhost:8000/StoredData')
            .then((res) => {
                setData(res.data)
                console.log('Api Data : ', data)
            })
            .catch((err)=>{
                console.log(err, 'Error coming when data is coming from json formate')
            })

    }, [])

    const HandleChange = (e) => {
        if (e.target.name === 'image') {
            setData({ ...data, [e.target.name]: URL.createObjectURL(e.target.files[0]) })
        }
        else {
            setData({ ...data, [e.target.name]: e.target.value })
        }
    }

    const HandleSubmit = (e) => {

        e.preventDefault();

        axios.post('http://localhost:8000/StoredData', data)

            .then((res) => {
                console.log('Posted Data : ', res.data)
                // setApiData(...apiData, res.data)
            })
            .catch((err) => {
                console.log(err, 'Error Coming when data is set to json formate')
            })

    }

    return (
        <div className='display'>

            <div className="formdata">
                <form action="" onSubmit={HandleSubmit}>
                    <input type="file" name='image' onChange={HandleChange} />
                    <input type="text" name='title' onChange={HandleChange} value={data.title} />
                    <button>Submit</button>
                </form>
            </div>
            {/* <img src={data.image} alt="" /> */}

            <div className="main">
                {

                    data.map((item, index) => 
                        (
                            <div className="box" key={index}>
                                <img src={item.image} alt="" />
                                {console.log('Image Url : ', item.image)}
                                <h3>{item.title}</h3>

                            </div>
                        )
                    )


                }
            </div>

        </div>
    )
}

export default Apidata
