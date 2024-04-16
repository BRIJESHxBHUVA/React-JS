// import React, { useState, useEffect } from 'react'

// export default function Fetchdata() {
//   const [data, setData] = useState([]);

//   useEffect(()=>{

//     const fetchingdata = async () => {

//       let response = await fetch('https://fakestoreapi.com/products/5');
  
//       let jsondata = await response.json();
  
//       console.log(jsondata);
  
//       setData(jsondata)
//     }
  
//     fetchingdata()

//   },[])



//   return (

//   <>

//     <h1>Show Data</h1>

//       <div className='container'>

//         {data.map(product => (
       

//           <div className="box">

//             <img src={product.image} alt="" />

//             <p id='title'>{product.title}</p>

//             <h3>Price: ${product.price}</h3>

//            </div>

      

//          ))}

//       </div>

//     </>
//   )
// }






import React, { useState, useEffect } from 'react';

export default function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
    
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Show Data</h1>
    
        <div className='container'>

          {data.map(product => (

            <div className="box" key={product.id}>

              <img src={product.image} alt={product.title} />

              <p>{product.title}</p>

              <h3>Price: ${product.price}</h3>

            </div>

          ))}
        </div>
      
    </>
  );
}
