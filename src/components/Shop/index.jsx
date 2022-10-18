import { Link } from "react-router-dom";
import { useEffect,useState } from 'react';
import "./shop.css"

const Shop = () => {
    const [products,setProducts]=useState([]);
    useEffect(() => {
        getProducts()
     }, []);
  const getProducts=()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProducts(json));
    };
    return (

      <div className="parent">
        {products.map((product) => {
          console.log(product);
          return (
            <div className="prod-wrap">
            <Link
              to={`/shop/${product.id}`}
              key={product.id} className="div-style">
               
              <img className="image " src={product.image} alt="" />
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
            </Link>
            </div>
        )
    })

    }
    </div>
   )}

      
        


export default Shop;