
import {useSelector,useDispatch}from "react-redux";

import "./cart.css"
import { removeFromCart } from "../../redux/cartSlice";


function Cart() {

    const dispatch = useDispatch();
   
    const cartList=useSelector(store =>store.cartStore.cartList);
    const handelRemoveFromCart=()=>{
      dispatch( removeFromCart()) }

    return (
   <div className="parent">
          {cartList.map((item) => {
            console.log(item)
            return(
              
              <div className="card m-3 p-3 d-flex flex-column justify-content-around align-items-center">
              <div className="prod-name"><p > {item.title}</p></div> 
              <div className=" w-50 h-50 mb-4 d-flex align-content-center justify-content-center"><img className=" img-fluid" src={item.image} alt=""></img></div> 
               <div className="price detaile-wraper d-flex justify-content-between align-baseline"><p >{item.price}</p></div> 
              <button typeof="button"
              onClick={()=>handelRemoveFromCart()}
               className="bg-danger text-white"> X</button>
              </div>
             
            )
          }
          
          )
  
  }



  </div>)}

  export default Cart;
  



    