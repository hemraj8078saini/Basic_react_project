// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import "./components/About";
import "./components/Card"
import "./components/Layout"
// import About from "./components/About";
// import { Card } from "react-bootstrap";
import Navbar from "./components/Navbars";
import Layout from './components/Layout';
// import { Card } from 'react-bootstrap';
// import card from './components/Card';

function App() {
  // const [count, setCount] = useState(10);
  // let a = 6;
  // function hello() {
  //   console.log("this is hello function");
  // }
  // console.log(hello());

  // useEffect(()=>{
  //  alert("your page is first rendering")
  // },[])
  return (
    <>
    <Navbar/>
    <Layout/>
    
      
    </>
  );
}

export default App;
