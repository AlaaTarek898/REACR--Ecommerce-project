/* eslint-disable no-undef */

// import CounterAction from "./CounterAction";
import NavBar from "./components/NavBar";
 import About from "./components/About";
 import Shop from "./components/Shop";
 //import Product from "./components/Product";
 import Details from "./components/Shop/Details";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
 


 function App (){
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/About" element={<About/>} />
        <Route path="/Shop" element={<Shop/>} />
      
        <Route path="/shop/:id" element={<Details/>} />
      </Routes >
    </Router>
 )};



export default App;

 {/* <CounterAction/> */}