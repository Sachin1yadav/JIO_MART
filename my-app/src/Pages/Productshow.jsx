import "../Styles/Product.css";

function ProducShow() {
    
    const DATA=[
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsFYRhAKDG8s-QWjpF5Ve4li1hSb2ACYFKw&usqp=CAU",
title:"hot gilrs",
price:450,
discount:"50%",
discriptios:"its new products"
},
{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsFYRhAKDG8s-QWjpF5Ve4li1hSb2ACYFKw&usqp=CAU",
title:"hot gilrs",
price:450,
discount:"50%",
discriptios:"its new products"
},
{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsFYRhAKDG8s-QWjpF5Ve4li1hSb2ACYFKw&usqp=CAU",
title:"hot gilrs",
price:450,
discount:"50%",
discriptios:"its new products"
},
{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsFYRhAKDG8s-QWjpF5Ve4li1hSb2ACYFKw&usqp=CAU",
title:"hot gilrs",
price:450,
discount:"50%",
discriptios:"its new products"
}


    ]






  return (
    <div style={{display:"flex",gap:"10px"}}>
        {DATA.map((e)=>(

        
 
      <div className="card">
        <div className="line"></div>
        <div className="proImg">
          <img
             src={e.img}
            alt=""
          />
        </div>
        <div className="content">
          <div className="details">
            <h2>{e.title}</h2>
            <h2>
              price:<span>{e.price}</span>
            </h2>
            <div className="Hdata">
             
              <h2>
                descripts:<span>{e.discriptios}</span>
              </h2>
            </div>
            <div className="actionBtn">
              <button>Add to Cart</button>
              <button>Buy</button>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}
export default ProducShow;
