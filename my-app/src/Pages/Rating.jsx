import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating,style }) => {
  return (
    <>
    <div style={{display:"flex"}}>
      {[...Array(5)].map((_, i) => (
        <span key={i}  style={{display:"flex"}}>
          {rating > i ? (
            <AiFillStar style={{color:"red",border:"black"}} fontSize="15px" />
          ) : (
            <AiOutlineStar  fontSize="15px" />
          )}
        </span>
      ))}
      </div>
    </>
  );
};

export default Rating;