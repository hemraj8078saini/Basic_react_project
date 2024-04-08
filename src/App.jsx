// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./components/About";
import "./components/Card";
import "./components/Layout";
// import Signup from "./Signup";
import Navbar from "./Navbar";
import Signup from "./Signup";
// import Navbars from "./components/Navbars";
import Contact from "./Contact";
// import {login} from "./login.jsx"
// import About from "./components/About";
// import { Card } from "react-bootstrap";
// import Navbar from "./components/Navbars";
// import Layout from "./components/Layout";
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
   <BrowserRouter>
   <Routes>
   <Route>
   <Route path="/" element={<Signup />} />
   <Route path="/contact" element={<Contact/>}/>
   </Route>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
