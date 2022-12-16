import "../Styles/Details.css";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Input,Button, ButtonGroup } from "@chakra-ui/react";
// const getpro = (id) => {
//   return fetch(`https://b-tmart-api-5tjm.vercel.app/data/${id}`).then(
//     (response) => response.json()
//   );
// };
function Details() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://b-tmart-api-5tjm.vercel.app/data/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log("singalpage", json);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [id]);

  // useEffect(() => {
  //   setLoading(true);
  //   getpro(id)
  //     .then((res) => {
  //       setData(res);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [id]);
  // console.log("singpage", data);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <div className="main">
          <div className="imgdiv">
            <div className="imagess">
              <div>
                {" "}
                <img src={data?.image[0]} alt={data.name} />
              </div>
              <div>
                {" "}
                <img src={data?.image[1]} alt={data.name} />
              </div>
              <div>
                {" "}
                <img src={data?.image[2]} alt={data.name} />
              </div>
              <div>
                {" "}
                <img src={data?.image[3]} alt={data.name} />
              </div>
            </div>
            <div className="curimg">
              <img src={data?.image[0]} alt={data.name} />
            </div>
          </div>
          <div className="detailDiv">
            <h1 className="proname" style={{ color: "white" }}>
              {data.name}
            </h1>
            <h2 className="rating">{data.rating}</h2>
            <h1 className="price">
              {data.price} <p className="pricedis">{data.price}</p> 
            </h1>
            <p className="tex">inclusive of all taxes</p>
            <div className="addtocart">
              <Button
                size="md"
                height="48px"
                width="200px"
                border="2px"
                borderColor="green.500"
              >
                Add To Cart
              </Button>
            </div>
            <hr style={{ color: "white", marginTop: "10px" }}></hr>
            <div className="prodit">
              <h2>PRODUCT DETAILS</h2>
              <div className="des">
                <p>{data.discription}</p>
              </div>
            </div>
            <hr style={{ color: "white", marginTop: "10px" }}></hr>
            <div className="del">
              <p>DELIVERY OPTIONS</p>
              <Input placeholder="Enter Pin Code" htmlSize={9} width="auto" />
              <p style={{ color: "red", fontSize: "10px" }}>
                Please enter PIN code to check delivery time & Pay on Delivery
                Availability
              </p>
              <div className="info">
                <p>100% Original Products</p>
                <p>Pay on delivery might be available</p>
                <p>Easy 30 days returns and exchanges</p>
                <p>Try & Buy might be available</p>
              </div>
            </div>
            <hr style={{ color: "white", marginTop: "10px" }}></hr>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
