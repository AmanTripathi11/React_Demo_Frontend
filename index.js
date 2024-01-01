//  parcel

// creates a server
//  hot module replacement HMR , this means parcel will keep all the file you are updating
// file watcher algorithms, written in c++
//  bundeling
//  minify
//  remove console.log,not directly but using babel plugin we can remove  it cleans the code
// dev and production build
//  super fast build algo.
//  image optimisation
//  caching while development
// compresses, renames files
// enables https on development using --https
// manages port no. 
// put it in gitignore
// consistent hashing algo.
// zero configuration
// tree shaking ==> removing unwanted code


import React from "react";
import {createElement} from "react";
import {createElement as ce} from "react";
import ReactDOM from "react-dom/client";


const heading =ce("h1",{id: "title",
className:"heading",},
"Namaste from Js ");
 
 
console.log(heading);   
const heading1 =React.createElement("h1",{id: "title",
className:"heading",key:"h1"},
"heading 1");
console.log(heading1);
const heading2 =React.createElement("h2",{id: "title",
className:"heading",key:"h2"},      
"heading2");
const container =React.createElement("div",{},[heading1,heading2])

console.log(heading2);  

   
// const heading1 =React.createElement("h1",{id: "title",
// className:"heading",key:"h1"},
// "heading 1");
// console.log(heading1);
// const heading2 =React.createElement("h2",{id: "title",
// className:"heading",key:"h2"},      
// "heading2");

// const heading =React.createElement("div",{},[React.createElement("h1",{id: "title",
// className:"heading",key:"h1"},
// "heading 1"),React.createElement("ul",{id: "title",
// className:"heading",key:"h1"},
// [React.createElement("li",{id: "title",
// className:"heading",key:"h1"},
// "Home"), React.createElement("li",{id: "title",
// className:"heading",key:"h1"},
// "About Us")])])



//JSX ==> JavaScript XML , html is not inside JS
// this is not html , it is html like syntax, a fancy way to write html in JS
// it uses React.createElement
// Babel understand this code , compiler for next generation js
const heading3 = <h1 id="h1" key="h2">Namaste React 
<ul>

   <li>AMan</li>
</ul>
</h1>




       // const root1 = ReactDOM.createRoot(document.getElementById("container"));
    const root = ReactDOM.createRoot(document.getElementById("root"));
    // passing a react element inside the root, it modifies the dom, overwrites 
    root.render(heading);
    // root1.render(container);
 