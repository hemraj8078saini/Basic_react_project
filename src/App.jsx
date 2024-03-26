import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import "./components/About";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(10);
  let a=6;
  function hello() {
    console.log("this is hello function");
  }
  console.log(hello());

  useEffect(()=>{
   alert("your page is first rendering")
  },[])
  return (
    <>
      <About />
      
    
      <p>cout value is {count}</p>
      <button
        className="button1"
        style={{ background: "red", width: "30 px" }}
        onClick={() => {
          setCount(count + 10);
        }}
      >
        click me
      </button>
      <p>a value is {a + 1}</p>
    </>
  );
}

export default App;
