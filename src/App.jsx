/* eslint-disable no-undef */
import CounterAction from "./components/counter/CounterAction";

import NavBar from "./components/NavBar";
 import About from "./components/About";
 import Shop from   "./components/Shop";
 import Home from     "./components/Home";
 import Details from "./components/Shop/Details";
 import Cart from "./components/Cart";
 import SignIn from "./components/SignIn";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Registration from "./components/Registration";

 


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
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path='/Registration' element={<Registration/>}/>
      </Routes >
    </Router>
 )};



export default App;

