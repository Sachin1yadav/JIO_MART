import "../Styles/Product.css";
import { Link } from "@chakra-ui/react";
function ProducShow({ name, price, image, discription }) {
  return (
    
      <section>
         
        <div className="container">
          <div className="card">
            <div className="imgB">
                <img src="https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png" />
                <h2>NIKE SHOOSE</h2>
              <div>
                <div className="content">
                   <div className="price">
                       <h3 >Price:</h3>
                       <span>100</span>
                    </div>
                    <div className="ratting">
                       <h3 >Ratting:</h3>
                       <span>4.5</span>
                    </div>
                    <Link className="btn"><p>Buy Now</p></Link>
                </div>
                
                {/* <Link className="btn"><p>Add To Cart</p></Link> */}
               
                 
              </div>
            </div>
          </div>
          
        </div>
        <div className="container">
          <div className="card">
            <div className="imgB">
                <img src="https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png" />
                <h2>NIKE SHOOSE</h2>
              <div>
                <div className="content">
                   <div className="price">
                       <h3 >Price:</h3>
                       <span>100</span>
                    </div>
                    <div className="ratting">
                       <h3 >Ratting:</h3>
                       <span>4.5</span>
                    </div>
                    <Link className="btn"><p>Buy Now</p></Link>
                </div>
                
                {/* <Link className="btn"><p>Add To Cart</p></Link> */}
               
                 
              </div>
            </div>
          </div>
          
        </div>
        <div className="container">
          <div className="card">
            <div className="imgB">
                <img src="https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png" />
                <h2>NIKE SHOOSE</h2>
              <div>
                <div className="content">
                   <div className="price">
                       <h3 >Price:</h3>
                       <span>100</span>
                    </div>
                    <div className="ratting">
                       <h3 >Ratting:</h3>
                       <span>4.5</span>
                    </div>
                    <Link className="btn"><p>Buy Now</p></Link>
                </div>
                
                {/* <Link className="btn"><p>Add To Cart</p></Link> */}
               
                 
              </div>
            </div>
          </div>
          
        </div>
        
      
      </section>
   
  );
}
export default ProducShow;
