import "../Styles/Details.css";
import { useEffect, useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Input, Button, Link, ButtonGroup } from "@chakra-ui/react";
import { CartContext } from "../Contexts/CartContext";
import CartContextProvider from "../Contexts/CartContext";

function Details() {
  const [count,setCount]=useState(0)
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { state,dispatch} = useContext(CartContext);
console.log("count",count)
  const [img, setImg] = useState(0);
  useEffect(() => {
    fetch(`https://b-tmart-api-5tjm.vercel.app/data/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log("singalpage", json);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [id, img]);
  let p = data.price + 100;
  console.log("price", p);

  console.log("img", img);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <div className="main">
          <div className="imgdiv">
            <div className="imagess">
              {/* {data.image.map((e,i)=>{
                <div
                onClick={() => setImg(e)}
                className="sideImage"
                style={{ backgroundImage: `url(${e})` }}
              ></div>
              })} */}

              <div>
                {" "}
                <img
                  onClick={() => setImg(0)}
                  src={data?.image[0]}
                  alt={data.name}
                />
              </div>
              <div>
                {" "}
                <img
                  onClick={() => setImg(1)}
                  src={data?.image[1]}
                  alt={data.name}
                />
              </div>
              <div>
                {" "}
                <img
                  onClick={() => setImg(2)}
                  src={data?.image[2]}
                  alt={data.name}
                />
              </div>
              <div>
                {" "}
                <img
                  onClick={() => setImg(3)}
                  src={data?.image[3]}
                  alt={data.name}
                />
              </div>
            </div>
            <div className="curimg">
              <img src={data?.image[img]} alt={data.name} />
            </div>
          </div>
          <div className="detailDiv">
            <h1 className="proname" style={{ color: "white" }}>
              {data.name}
            </h1>
            <div className="rating">
              <h2>{data.rating}</h2>
              <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/docomo/205/white-medium-star_2b50.png" />
            </div>

            <h1 className="price">
              {data.price} <p className="pricedis">{data.price}</p>
            </h1>
            <p className="tex">inclusive of all taxes</p>
            <div className="addtocart">
              {count===0?(
                 <Button
                 onClick={()=> { dispatch({
                  type:"ADD_TO_CART",
                  playload:data
                 })
                   setCount(count=1)
                  }}
                 size="md"
                 height="48px"
                 width="200px"
                 border="2px"
                 background="#45f3ff"
                 // borderColor="green.500"
               >
                 Add To Cart
               </Button>
              ):
              <Button
              onClick={()=>  
                setCount(count=0)
               }
              size="md"
              height="48px"
              width="200px"
              border="2px"
              background="#45f3ff"
              // borderColor="green.500"
            >
              go to bag
            </Button>
              
              }
                {/* <Button
                  onClick={()=>{handleAddToCart(data)
                    setCount(count=count+1)
                  }}
                  size="md"
                  height="48px"
                  width="200px"
                  border="2px"
                  background="#45f3ff"
                  // borderColor="green.500"
                >
                  Add To Cart
                </Button> */}
               
            </div>
            <hr style={{ color: "white", marginTop: "10px" }}></hr>
            <div className="prodit">
              <h2 style={{ textAlign: "start", marginBottom: "10px" }}>
                PRODUCT DETAILS
              </h2>
              <div className="des">
                <p>{data.discription}</p>
              </div>
            </div>
            <hr
              style={{ color: "white", marginTop: "10px", height: "1px" }}
            ></hr>
            <div className="del">
              <h2 style={{ textAlign: "start", marginBottom: "10px" }}>
                DELIVERY OPTIONS
              </h2>
              <Input
                placeholder="Enter Pin Code"
                htmlSize={9}
                width="200px"
                border=" 1px solid teal"
              />
              <p
                style={{
                  color: "red",
                  fontSize: "13px",
                  marginTop: "10px",
                  marginBottom: "5px",
                }}
              >
                Please enter PIN code to check delivery time & Pay on Delivery
                Availability
              </p>
              <div className="info">
                <p>100% Original Products</p>
                <p>Pay on delivery might be available</p>
                <p>Easy 30 days returns and exchanges</p>
                <p>Try & Buy might be available</p>
              </div>
              <div className="offer">
                <h2>BEST OFFERS</h2>
                <p>
                  Best Price{" "}
                  <span style={{ color: "yellow", fontSize: "18px" }}>
                    {data.price}
                  </span>{" "}
                </p>
                <ul>
                  <li>
                    Applicable on: Orders above Rs. {data.price} (only on first
                    purchase)
                  </li>
                  <li>
                    Coupon code: <span>MASAI30</span>
                  </li>
                  <li>
                    Coupon Discount: Rs. 40 off (check cart for final savings)
                  </li>
                </ul>
                <p style={{ color: "red", fontSize: "13px" }}>
                  View Eligible Products
                </p>
              </div>
            </div>
            <div className="emi">
              <h2 style={{ color: "white" }}>EMI option available</h2>
              <ul>
                <li>EMI starting from Rs.87/month</li>
              </ul>
              <p style={{ color: "red", fontSize: "13px" }}>View Plan</p>
            </div>
            <hr style={{ color: "white", marginTop: "10px" }}></hr>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
