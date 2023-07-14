import MyButton from "./componenets/Question1";
import Avatar from "./componenets/Question2";
import DiagramHooksExample from "./componenets/Question3";

function App() {
  const user = {
    name: "Christopher Robin",
    imageUrl: "./christopherrobin.jpeg",
    imageSize: 90,
  };
  return (
    <div className="App">
      <h1>Welcome to my Code Talks!</h1>
      <MyButton title="Add to cart" />
      <MyButton title="Find out more" />
    
      <Avatar user={user} />
      <DiagramHooksExample />
    </div>
  );
}

export default App;
