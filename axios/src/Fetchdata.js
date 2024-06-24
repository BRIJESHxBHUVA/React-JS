import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { Valueconverter } from './Valueconverter'
import Loader from './Loader'

const Fetchdata = () => {

    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)




    useEffect(() => {

        const FetchData = async () => {
            try {
                setLoader(true)
                const apidata = await axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyAgNgueM8RzjIzKVAz6E0ZGQb-g-_SaZ1s')
                setLoader(false)
                setData(apidata.data.items)
                console.log(apidata.data.items)
            }
            catch (err) {
                console.log('Video Display Error')
            }
    
    
        }
     

        FetchData()
   
    }, [])

    return (
        <Fragment>


            <div className="main">
                
                    { !loader ?  data.map((item, index) => {
                        return (

                            <div className="video" key={index}>
                                <img src={item.snippet.thumbnails.medium.url} alt="" />
                                <h3>{item.snippet.title.slice(0, 85)}</h3>
                                <div className="chennal">
                                    <p>{item.snippet.channelTitle}</p>
                                    <small>{Valueconverter(item.statistics.viewCount)} Views</small>
                                </div>
                            </div>

                        )
                    }) : <Loader/>}
            </div>

        </Fragment>
    )
}

export default Fetchdata
