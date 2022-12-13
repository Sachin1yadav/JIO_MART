import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProducShow from './Productshow'
function Products(){
const [data,setData]=useState([])


    const getdata=()=>{
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
        .then(response => response.json())
        .then(json => setData(json))
    }
useEffect(()=>{
    getdata()
},[])
console.log(data)
    return (  
       <>
       {data?.map((e)=>(
        <ProducShow key={e.id} url={e.url}  title={e.title} thumbnailUrl={e.thumbnailUrl}    />
       ))}
       </>
    )
}

export default Products
                    