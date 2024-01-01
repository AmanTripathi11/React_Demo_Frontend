
import { useEffect, useState } from "react";
import {Img_Cdn_Url} from "../config";

import {restrauntlist} from "../config";

import RestrauntCard   from "./RestaurantCard";
import Shimmer from "./shimmer";

// 1 way to sort restaurant list

function filterData(searchtxt, restaurants) {
if(searchtxt === ""){
  return restaurants;
}
else{
  const filterData = restaurants.filter((restaurant)=> 
  restaurant?.info?.name?.toLowerCase()?.includes(searchtxt.toLowerCase())
  );
  return filterData;
}

}


// props = properties  
// in industry we don't use for loops, we use map 
const Body = ()=>{
// let searchtxt = "Domino"; 
// every compoent in react maintains a "state"
//  we can put all the variables into the state
/// and every time we have to create a local variable to use state in it.

// State ?? , 
// created using use State Hooke
// Hooke == Normal Functions 
// const [SS,setsSS] = useState("false");
// searchtxt is local state variable name

// const [restaurants,setRestaurants] = useState(restrauntlist);


const [allRestaurants,setAllRestaurants] = useState([]);
const [filteredRestaurants,setFilteredRestaurants] = useState([]);
const [searchtxt, setSeachTxt] = useState("");  // USeState==>  used to create State Variables, it returns an array, the first variable of this array is variable name..
// and the second is a functions to update the varibles

// =-------------useEffect----------------------------------------------------

// useEffect uses a callback functions and an dependency array .
//  if we don't want to calll it after every rerender we use empty dependency array
// empty dependency array ==>   once after render
//  dependency array [searchtxt] ==>   once after initial render + everytime after rerender  when my searchtxt is updated
// useEffect(()=>{
//   console.log("call this when dependency is changed");
// }, [restaurants]);  // it is called after rendering
// if we want to call useEffect() after every searchtext change , we can pass searchtext into the dependency array

useEffect(()=>{
  // Api Call
  getRestaurants();
},[]);
async function getRestaurants(){
  // we cannot fetch swiggy's api directly, we need to have a CORS Plugin
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  console.log(json);
  setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}


console.log("render");
// conditional rendering 
// if(restraunts = empty){
  // show  shimmer UI
// }

  // else{
    // show Actual data UI
  // }

    // Avoid Rendering a Component
    if(!allRestaurants) return null;
    if(filteredRestaurants.length==0 && allRestaurants.length!=0) return (
        <h1>No Match Found!!!</h1>
    );





return (filteredRestaurants.length === 0) ? <Shimmer/> :( 
 
<>
 {/*  React uses one way data binding */}
  {/* // this input is controlled by react so we can't write in this */}
  {/* <input type="text" className="search-input" placeholder="search" value="" /> */}
 
  <div className="search-container">

  <input type="text"
   className="search-input" 
  placeholder="search" 
  value={searchtxt}
  //  e.target.value =  value entered by you in the searchbox
  // onChange={(e)=>console.log(e.target.value)} 
  onChange={(e)=>{
    // searchtxt  = e.target.value;  // not working
    setSeachTxt(e.target.value);


// other sorting code (while typing it will sort) 
  //  const data = filterData(e.target.value);
  //  setRestaurants(data);
   

  }
  }
  

  />
  {/* <h1  onClick={()=>{
    if(SS==="true") 
    setsSS("false");
    else
    setsSS("true")
  }}>{SS}</h1> */}

  <button className="search-btn" onClick={()=>{
    // need to filter data
   const data =  filterData(searchtxt,allRestaurants);
    // update the state = restaurants variable
    setFilteredRestaurants(data);
  }}>
  Search
    {/* {searchtxt} */}
  </button>

  </div>

    <div className="restraunt-list">
    {/* <RestrauntCard name = {restrauntlist[0].name}  cuisines={restrauntlist[0].cuisines} rating={restrauntlist[0].rating} image={restrauntlist[0].image}/> */}
    {/* <RestrauntCard restaurant = {restrauntlist[0]}/> */}
    {/* <RestrauntCard {...restrauntlist[0]}/> */}
    {/* var i=0;
    for( i=0; i<restrauntlist.length; i++){
        <RestrauntCard {...restrauntlist[i]}/>   
    } */}

        {filteredRestaurants.map((restaurant) =>{
            return <RestrauntCard {...restaurant.info} key={restaurant.id}/>;
        })}

   
   
    </div>
    </>
)
}



export default Body;