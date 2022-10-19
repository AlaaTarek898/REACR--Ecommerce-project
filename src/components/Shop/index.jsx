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

      <div className="parent ">
        {products.map((product) => {
          console.log(product);
          return (
            
            <Link
              to={`/shop/${product.id}`}
              key={product.id} className="card m-3 p-3 d-flex flex-column justify-content-around align-items-center  ">
              
              <div className=" w-50 h-50 mb-4 d-flex align-content-center justify-content-center"> <img className=" img-fluid" src={product.image} alt="" /></div>
              <div className="prod-name"><p >{product.title}</p></div> 

              <div  className="detaile-wraper d-flex justify-content-between align-baseline">
            <h5 className="price1 "> Price:{product.price} EG</h5>
              
              <button class="button1">Learn more</button>
              
            
              </div>
            </Link>
           
          
        )
    })

    }
    </div>
   )}

      
        


export default Shop;