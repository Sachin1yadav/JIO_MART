 import ProductCord from "./ProductCord"
import data from"../Data"
 
 function Products(){

console.log(data)


  return(
    <div>
       <div className="landing-page-categories">
        <div className="category" id="mobile">
          <h1 className="heading">Mobile</h1>
          <ProductCord
            data={data.filter((item) => item.catogeries === "phone")}
          />
        </div>
        <div className="category" id="elec">
          <h1 className="heading">Electronics</h1>
          <ProductCord
            data={data.filter((item) => item.catogeries === "Electronics")}
          />
        </div>
        <div className="category" id="sport">
          <h1 className="heading">Sports</h1>
          <ProductCord
            data={data.filter((item) => item.catogeries === "Sports")}
          />
        </div>
        <div className="category" id="fashion">
          <h1 className="heading">Fashion</h1>
          <ProductCord
            data={data.filter((item) => item.catogeries === "fashion")}
          />
        </div>
        <div className="category" id="beauty">
          <h1 className="heading">Beauty and Cosmetics</h1>
          <ProductCord
            data={data.filter(
              (item) => item.catogeries === "Beauty and Cosmetics"
            )}
          />
        </div>
    </div>
    </div>
  )
 }


 export default Products