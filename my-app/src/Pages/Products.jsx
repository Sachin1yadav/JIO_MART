import ProductCord from "./ProductCord";
// import data from"../Data"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import { useState } from "react";
import ProducShow from "./Productshow";
 import {responsive} from"./ProductCord"
 import Loading from "./Loading";
function Products() {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const getpro = () => {
    return fetch("https://b-tmart-api-5tjm.vercel.app/data").then((response) =>
      response.json()
    );
     
  };
   
  useEffect(() => {
    setLoad(true);
    getpro()
      .then((res) => {
        setData(res);
        setLoad(false);
         
      })
      .catch((err) => {
        console.log("e", err);
      });
  }, []);

  console.log("data", data);

if(load){
  return <Loading/>
}
  

  return (
    <div>
      <div className="landing-page-categories">
        <div className="category" id="shoes">
          <h1 className="heading">shoes</h1>
          
          <ProducShow
            data={data.filter((item) => item.catogeries === "shoes")}
          />
           
        </div>
        <div className="category" id="elec">
          <h1 className="heading">Electronics</h1>
          <ProducShow
            data={data.filter((item) => item.catogeries === "Electronics")}
          />
        </div>
        <div className="category" id="sport">
          <h1 className="heading">Sports</h1>
          <ProducShow
            data={data.filter((item) => item.catogeries === "Sports")}
          />
        </div>
        <div className="category" id="mobile">
          <h1 className="heading">Mobile</h1>
           
          <ProducShow
            data={data.filter((item) => item.catogeries === "phone")}
          />
           
        </div>
        {/* <div className="category" id="elec">
          <h1 className="heading">Electronics</h1>
          <ProducShow
            data={data.filter((item) => item.catogeries === "Electronics")}
          />
        </div> */}
        {/* <div className="category" id="sport">
          <h1 className="heading">Sports</h1>
          <ProducShow
            data={data.filter((item) => item.catogeries === "Sports")}
          />
        </div> */}
        <div className="category" id="fashion">
          <h1 className="heading">Fashion</h1>
          <ProducShow
            data={data.filter((item) => item.catogeries === "fashion")}
          />
        </div>
        <div className="category" id="beauty">
          <h1 className="heading">Beauty and Cosmetics</h1>
          <ProducShow
            data={data.filter(
              (item) => item.catogeries === "Beauty and Cosmetics"
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
