
// import oceanImage from"../assets/images.jpg";
import {FaTrash} from "react-icons/fa"
import StarRating from "./starRating"

const Color = ({colorObj, onDelete=f=>f, rateColor}) => {


        //Destructure theseee....
  const {title,color,rating,img, id} = colorObj
  return (
    <div className="color">
        
            <h3>{title}</h3>
            {/* //From puunlivgolfrt */}
           <img src={`/images/${img}`} alt={title} width={100} height={100} />
            <div style={{height:0, backgroundColor:color}}>
                
            </div>
            {/* Need empty function defenion */}
            <FaTrash onClick={() => onDelete(id)}/>
              {/* Most important part for passing rateColor */}
            <StarRating 
            selectedStars={rating} 
            rateColor = {(rating) => rateColor(rating, id)}/>
     </div>
    
  )
}

export default Color