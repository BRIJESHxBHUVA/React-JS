import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Apidata = ({ apiData, setApiData }) => {

    const [data, setData] = useState({
        image: '',
        title: '',
        price: '',
    })

    // const [apiData, setApiData] = useState([])

    const [image, setImage] = useState(false)

    const [fileName, setFileName] = useState('No choosen file')


    useEffect(() => {

        axios.get('http://localhost:5000/StoredData')
            .then((res) => { setApiData(res.data) })
            .catch((err) => {
                console.log(err, 'Error coming when data is fetched.')
            })
        console.log('Apidata : ', apiData)

    }, [])

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setData({ ...data, [e.target.name]: URL.createObjectURL(e.target.files[0]) })
            setFileName(e.target.files[0].name)
            setImage(true)
        }
        else {

            setData({ ...data, [e.target.name]: e.target.value })
        }

    }



    const handleSubmit = (e) => {

        axios.post('http://localhost:5000/StoredData', data)
            .then((res) => {
                console.log(res)
                setApiData([...apiData, res.data])
                console.log('Submit :',apiData)
            })
            .catch((err) => {
                console.log(err, 'Error coming when data is set to json format')
            })


    }

    const HandleDelete = (id) => {
        const updatedData = apiData.filter(item => item.id !== id)
        setApiData(updatedData)

    }



    return (
        <>
            <div className="formdata">
                <form action="" onSubmit={handleSubmit}>

                    <h3>Enter New Product Data</h3>

                    <div className="file">
                        {!image ? <MdCloudUpload className='upload' /> : ''}
                        <label htmlFor="fileinput" className="custom-file-label" title='Select File' >
                            {fileName}
                        </label>

                        <input type="file" name='image' onChange={handleChange} className='fileinput' id='fileinput' />

                    </div>




                    <input type="text" name='title' placeholder='Enter Product Title' onChange={handleChange} value={data.title} className='title' />

                    <input type="number" placeholder='Enter Product Price' name='price' onChange={handleChange} value={data.price} className='price' />

                    <button title='Tap to submit product' >Submit</button>
                </form>

                <div className="tab" title='Tap to open products page' >
                    <p className='link'> <Link to='/uploadedproducts' >View Uploaded Products</Link> </p>
                </div>

            </div>

            <div className="main">

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            apiData.map((item, index) => {
                                return (

                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td style={{ padding: '5px 5px' }}>
                                            <img src={item.image} alt="" />
                                        </td>
                                        <td>  {item.title} </td>
                                        <td> {item.price}</td>
                                        <td onClick={() => HandleDelete(item.id)} title='Delete Product' > <i className="fa-solid fa-trash" style={{fontSize: '20px'}} ></i> </td>
                                    </tr>

                                )
                            })

                        }
                    </tbody>
                </table>



            </div>

        </>
    )
}

export default Apidata
