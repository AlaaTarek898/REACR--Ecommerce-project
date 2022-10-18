
import { Link } from "react-router-dom";
import "./nav-bar.css";

const NavBar = () => {
  return (
    <nav className=" navbar">
    <img className="logo img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png" alt="Logo"/>
      <ul className="list ">
     
        <Link to="/"> <li className="list-item text-white">Home</li> </Link>
        <Link to="/about"> <li className="list-item text-white">About</li></Link>
        <Link to="/shop"><li className="list-item text-white">Shop</li></Link>
      </ul>
    </nav>
  );
};
export default NavBar;