/* eslint-disable no-undef */
import CounterAction from "./components/counter/CounterAction";

import NavBar from "./components/NavBar";
 import About from "./components/About";
 import Shop from   "./components/Shop";
 import Home from     "./components/Home";
 import Details from "./components/Shop/Details";
 import Cart from "./components/Cart";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
 


 function App (){
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/About" element={<About/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/counter"  element={<CounterAction/>}/>
        <Route path="/Home"  element={<Home/>}/>
        <Route path="/shop/:id" element={<Details/>} />
        <Route path="/Cart/" element={<Cart/>} />
      </Routes >
    </Router>
 )};



export default App;

