// Refactor using the code below. Create the functionality for a reusable button component that will accept ‘title’ as props that will display as the text of the button when rendered inside of App.js.
// Render the button twice with the titles:  “Add to cart”  and  “Find out more”
// Explain your code. Describe how props work. What is the difference between props and state?
// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

// export default function MyApp(){
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }

// Import react
import React from "react";

const MyButton = (props) => {
 
  return <button>{props.title}</button>;
};

export default MyButton;
