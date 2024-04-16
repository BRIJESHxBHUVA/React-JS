import React, { useState } from "react";
import { useEffect } from "react";

export default function Fetchdata() {

  const [data, setData] = useState([]);

  const [backgroundcolor, setbackgroundcolor] = useState ('burlywood');
  const [boxbackground, setBoxbackground] = useState ('black');
  const [title, setTitle] = useState ("Select Backgroundcolor");


  useEffect(() => {
    const fetchingdata = async () => {
      try {
        let API = await fetch("https://fakestoreapi.com/products");

        let jsondata = await API.json();
        setData(jsondata);
        console.log(jsondata);
      } catch (err) {
        console.log(err);
      }
    };

    fetchingdata();
  }, []);


  const handlebackgroundcolor = (event) => {
        
    setbackgroundcolor(event.target.value);
    setTitle('Backgroundcolor : '+ `${event.target.value}` +' is selected')
};



const handleboxbackgroundcolor = (event) => {

    setBoxbackground(event.target.value);
    setTitle('Current Product Backgroundcolor is : '+ `${event.target.value}`)

};



const mystyle={
    
    backgroundColor : backgroundcolor,
   

    };

const boxStyle={
    backgroundColor : boxbackground,
}



  return (
    <>
      <h1>
        TENET <span>Enterprise</span>
        <span className="boxcolor"><input type="color" onChange={handleboxbackgroundcolor} title={title} /></span>

        <span className="color"><input type="color" onChange={handlebackgroundcolor} title={title} /></span>

      </h1>
    
      

      <div className="container" style={mystyle}>
        {data.map((el, index) => (
          <div key={index} className="box" style={boxStyle}>
            <img src={el.image} alt="Product Image" />
            <p>{el.title}</p>
            <h3> $ : {el.price}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
