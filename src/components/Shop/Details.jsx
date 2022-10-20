import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";
import { addToCart } from "../../redux/cartSlice";
import { useSelector ,useDispatch } from "react-redux";

const Details = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    fetchProduct();
  }, [ ]);

  const fetchProduct = () => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  const handelAddToCart=(prod)=>{
   dispatch( addToCart(prod))
  }
  // const global=useSelector(store =>store.cartStore.cartCount)
  // console.log(global)
  const global2=useSelector(store =>store.cartStore.cartList)
  console.log(global2)

  const [product, setProduct] = useState({});
  return (
    <div className="product d-flex justify-content-around">
      <div className=" w-50 h-50">
        <img className=" img-fluid" src={product.image} alt="" />
      </div>
      <div className="details">
        <h4 className="title mb-5">{product.title}</h4>
        <h5 className="price mb-5"> Price:{product.price}</h5>
        <div className=" d-flex flex-column">
         <button 
         onClick={()=>handelAddToCart(product)}
        type="button" > Add to cart</button>
        
        </div>
      </div>  
    </div>



  );
};

export default Details;

