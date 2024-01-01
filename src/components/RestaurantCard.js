import {Img_Cdn_Url} from "../config";

// optional chaing == "?"
const RestrauntCard = ({name, cloudinaryImageId, cuisines, avgRating} )=> {
    // console.log(restaurant);
    // const {name, image, cuisines, rating} = restaurant;
return  (
    <div className="card">
    {/* <img className="cardPhoto" src={restrauntlist[0].image}/>
    <h2>{restrauntlist[1]?.name}</h2>
    <h3>{restrauntlist[0]?.cuisines.join(", ")}</h3>
    <h4>{restrauntlist[0]?.rating} stars</h4> */}
    <img className="cardPhoto" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
    <h2>{name}</h2>
    <h3>{cuisines.join(", ")}</h3>
    <h4>{avgRating} stars</h4>
   
    </div>
);
};


export default RestrauntCard;
