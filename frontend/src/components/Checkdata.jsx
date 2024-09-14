import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Data = () => {
const [products,error,loading]=customReactQuery('/api/products')
if(error)
{
    return <h1>Something went wrong </h1>
}

if(loading){
    return <h1>Loading................</h1>
}
  return (
    <div>
      <h1>Number of products are  {products.map((index)=>(
        <li key={index.id}>{index.title}</li>
      ))} </h1>
    </div>
  )
}

export default Data

const customReactQuery=(urlPath)=>{
    const [products,setProducts ]= useState([]);
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(false);
   useEffect(()=>{
     (async()=>{
       try {
           setLoading(true);
           setError(false);
           const response= await axios.get(urlPath);
           console.log(response.data);
           setProducts(response.data)
           setLoading(false);
       } catch (error) {
           console.log("Error")
           setError(true);
           setLoading(false);
       }
     })()  //first parenthesis is for definition and second for call
   },[])
return [products,error,loading]

}