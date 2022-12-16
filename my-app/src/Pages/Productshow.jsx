import "../Styles/Product.css";
import { Link } from "react-router-dom";

function ProducShow(data) {
  // console.log("props",data)
  data.data.map((f) => {
    console.log("name", f.name);
  });
  return (
    <section style={{margin:"10px" , display:"flex"}}>
      <div className="container">
        {data.data.map((e, i) => (
          <div className="card">
            <div className="imgB">
              <img src={e.image[0]} />
              <h2> {e.name.length < 8 ? e.name : `${e.name.slice(0, 8)}`} </h2>
              <div>
                <div className="content">
                  <div className="price">
                    <h3>Price:</h3>
                    <span> {e.price}</span>
                  </div>
                  <div className="ratting">
                    <h3>Ratting:</h3>
                    <span>{e.rating}</span>
                  </div>
                  <div className="buy">
                    {/* {`/data/${e.id}`}  */}
                    <Link to={`/data/${e.id}`} className="btn2">
                      <p>Viwe Details</p>
                    </Link>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default ProducShow;
