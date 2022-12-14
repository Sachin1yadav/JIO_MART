import "../Styles/Product.css";
import { Link } from "@chakra-ui/react";
function ProducShow(props) {
  
  return (
    <section>
      <div className="container">
        <div className="card">
          <div className="imgB">
            <img src={props.url} />
            <h2> {props.name.length < 10
                ? props.name
                : `${props.name.slice(0, 10)}`} </h2>
            <div>
              <div className="content">
                <div className="price">
                  <h3>Price:</h3>
                  <span>{props.price}</span>
                </div>
                <div className="ratting">
                  <h3>Ratting:</h3>
                  <span>{props.rating}</span>
                </div>
                <div className="buy">
                <Link className="btn">
                  <p>Buy Now</p>
                </Link>
                <Link to={`/products/${props.id}`} className="btn2">
                  <p>Add to cart</p>
                </Link>
                </div>
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
