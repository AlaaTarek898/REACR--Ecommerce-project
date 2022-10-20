
import { Link } from "react-router-dom";
import "./nav-bar.css" 
import {useSelector}from "react-redux";

const NavBar = () => {

  const cartCount=useSelector(store =>store.cartStore.cartCount)
 
  return (
    <nav className=" navbar align-content-center">
    <img className="logo img-fluid ms-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png" alt="Logo"/>
      <ul className="list  me-3">
    
          
        
        <Link to="/Home"> <li className="list-item text-white">Home</li> </Link>
        <Link to="/about"> <li className="list-item text-white">About</li></Link>
        <Link to="/shop"><li className="list-item text-white">Shop</li></Link>
        <Link to="/Counter"><li className="list-item text-white">Counter</li></Link>
        <Link to="/Cart"><li className="list-item text-white">Cart {cartCount}</li></Link>
        <Link to="/SignIn"><li className="list-item text-white">sign in</li></Link>
        
        
      
      </ul>
    </nav>
  );
};
export default NavBar;