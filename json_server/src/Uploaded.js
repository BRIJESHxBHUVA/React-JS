import React from 'react'
import { Link } from 'react-router-dom'

const Uploaded = ({ apiData, setApiData }) => {

    const HandleDelete = (id) => {
        const updatedData = apiData.filter(item => item.id !== id)
        setApiData(updatedData)
    }

    return (
        <>

            <div className="uploadedbody">


                <div className="addsection">

                    <div className="add" title='Add New Product' >
                    <Link to='/' >
                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                        &nbsp; Add
                        </Link>
                    </div>

                </div>

                <div className="uploadtitle">
                    <h2>Recent Uploaded Product</h2>
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
                                            <td>{index+1}</td>
                                            <td>
                                                <img src={item.image} alt="" />
                                            </td>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td onClick={()=>HandleDelete(item.id)} title='Delete Product' > <i className="fa-solid fa-trash" style={{fontSize: '20px'}} ></i> </td>
                                        </tr>

                                    )
                                })

                            }
                        </tbody>
                    </table>



                </div>

                {console.log('Uploaded page data : ', apiData)}


            </div>

        </>
    )
}

export default Uploaded
