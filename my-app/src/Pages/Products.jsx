import React, { useEffect, useState } from 'react'
import axios from 'axios'
import data from '../Data'
import ProducShow from './Productshow'
function Products(){
 


    
 
    return (  
       <div className='maindiv'>
       {/* {data?.map((e)=>(
        <ProducShow key={e.id} discription={e.discription} name={e.name} image={e.image[0]} price={e.price}    />
       ))} */}
       </div>
    )
}

export default Products
                    