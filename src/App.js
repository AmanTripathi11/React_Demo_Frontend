
import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {Img_Cdn_Url} from "./config";



// Default Import
import Header from "./components/Header";
// import * as abc from "./components/Header";
// import Header from "./components/Header.js";

// Named Import Component
// import {Title} from "./components/Header";


 /* 
        header
        -  Logo
        - Nav items (List Items)
        - Cart

        Body 
         - Search BAr
         - Restraunt List
            -  Restraunt Card
                - Image
                - Name
                - Star Rating
                - Cusines - 

        footer
        -  Links
        -  Copyrights
        
        */

  
        // const styleObj = {
        //     backgroundColor: "red",
        //     border: "1px solid black"
        // }
        // inline styling

//  config driven UI
// const config = [
//     {
//         type: "carousel",
//         cards:[
//             {
//                 offerName: "50% off"
//             },
//             {
//                 offerName: "No Delivery Charges"
//             }
//         ]
//     },
//     {
//         type: "restaurant",
//         cards:[
//             {
//                 name: "Burger King",
                // image 8OsyqBvTdu67cDJFNbV5Tvyhwcn8Q3D/CKHZZI3pLL3C3HAIbI8uARu+A3YpVVfpachsRDBPVuoHfnpSqfLsnb0gxRR4h649fnjmnIiEMcdB/vrSpU8mJTmIquCQAOnT6Uhg54FKlQZh4EQYg8BfqM98VwsT6dccAfClSohIkiry4LNjC+nfPwrkQJMmWbgnHJ45pUq6QJIoGQOcbT39K66qCSB+yG+GTSpUvMIRIiNHJIR5lRcEcdXC9qhLEDIwDle350qVGvWSwkO9+W4zk5+P3pu5zk5POQR2+dKlTRFmcPGz5gc9s1JEN+NxP4ivX86VKpkDrHGNCB1B3YyDzjmuPGnmHPlIx9fWlSoTOaMbygAYwSBg9KYc8845I4xSpUcjtGYBBz26fY08IpwcdPicfalSroMcsab1HOD1+2aa6qFzjnbnnnnNKlUSYyTKqhH7WAc8ipAoJxyMFunwANKlUmQI0k5I7DA++aVKlUyZ//9k=",
//                 cuisines: ["Burgers", "American"],
//                 rating : "4.2",
//             },
//             {
//                 name: "KFC",
//6VKpkDrHGNCB1B3YyDzjmuPGnmHPlIx9fWlSoTOaMbygAYwSBg9KYc8845I4xSpUcjtGYBBz26fY08IpwcdPicfalSroMcsab1HOD1+2aa6qFzjnbnnnnNKlUSYyTKqhH7WAc8ipAoJxyMFunwANKlUmQI0k5I7DA++aVKlUyZ//9k=",
//                 cuisines: ["Burgers", "American"],
//                 rating : "4.2",
//             },
           
//         ]
//     },
// ]



const AppLayout = ()=>(
    <>

    <Header/>
    <Body/>
    <Footer/>
    </>
       
    )




const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside the root, it modifies the dom, overwrites 
root.render(<AppLayout />);
