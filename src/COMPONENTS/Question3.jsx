
import { useState } from "react";

const DiagramHooksExample = () => {
  
  const [count, setCount] = useState(0);

  
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h3>Counters that update together</h3>
     
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
};

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

export default DiagramHooksExample;
