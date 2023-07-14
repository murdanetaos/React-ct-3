import MyButton from "./COMPONENTS/Question1";
import Avatar from "./COMPONENTS/Question2";
import DiagramHooksExample from "./COMPONENTS/Question3";

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
