productshow.js

        <div className="maindiv">
 
      <div className="card">
        <div className="line"></div>
        <div className="proImg">
          <img
             src={image}
            alt=""
          />
        </div>
        <div className="content">
          <div className="details">
            <h2>{name}</h2>
            <h2>
              price:<span>{price}</span>
            </h2>
            <div className="Hdata">
             
              <h2>
                {/* descripts:<span>{discription}</span> */}
              </h2>
            </div>
            <div className="actionBtn">
              <button>Add to Cart</button>
              <button>Buy</button>
            </div>
          </div>
        </div>
      </div>
      </div>