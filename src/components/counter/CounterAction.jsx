import "./Counter.css";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "./Counter";
import { incrementCount, decrementCount } from "../../redux/counterSlice";
//global state
function CounterAction() {
    const CounterGlobalValue = useSelector((state) => state.counter.counter

    )
    
  const dispatch = useDispatch();


 const increment=()=>{   dispatch(incrementCount());}

 const decrrement = () => {
    if (CounterGlobalValue <=0 ){
     console.log(" todo");
    }
     else {
       dispatch(decrementCount());
     }
    }
  return (
    <div>
      <Counter
        count={CounterGlobalValue}
        increment={increment}
        decrrement={decrrement}
      />
    </div>
  );
  }


export default CounterAction