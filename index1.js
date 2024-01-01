import React from "react";
import ReactDOM from "react-dom/client";


const heading = <h1 id="h1" key="h2">Namaste React 
<ul>

   <li>Aman</li>
</ul>
</h1>

const Title = () => (
    <h1>
        Tripathi
    </h1>
);


// component - two types
// 1. functional Based Component==> new way of writing code
// 2. Class Based Component ==> old way of writing code

var name ="AMan";
// const data = api.getData();
// 1. functional => a js function, name starts with a capital letter, not mandatory
//  using component inside component, or nested compoenent
// is called as Composing COmponents, or Components Composition


const Header = () => {
    // return <div> <h1>Namaste Aman</h1> </div>;
    return (<div>
    {heading}
    {/* {data} */}
    {name}
    {console.log(1+2)}
    {console.log(name)}
    {Title()}
    <Title/>
    {/* <Title></Title> */}

    { // this is a comment
    }
    { 
        /* this is a multi line comment */ 
        }
    <h1>functional Based Component</h1>
    <h2>Namaste Aman</h2>
    </div>);
}



// const Header = () => (
    // return <div> <h1>Namaste Aman</h1> </div>;
//      <div>
//     {heading}
//     {/* {data} */}
//     {name}
//     {console.log(1+2)}
//     {console.log(name)}
//     {Title()}
//     <Title/>
//     <h1>functional Based Component</h1>
//     <h2>Namaste Aman</h2>
//     </div>);

// Header()










       // const root1 = ReactDOM.createRoot(document.getElementById("container"));
    const root = ReactDOM.createRoot(document.getElementById("root"));
    // passing a react element inside the root, it modifies the dom, overwrites 
    root.render(<Header />);
    // root.render(heading);
    // root1.render(container);
 