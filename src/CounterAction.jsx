import "./App.css";
import { useState } from "react";
import Counter from "./Counter";

function CounterAction( ){
 const[counter,setcounter]=useState(0);
 const increase=()=> (setcounter(counter+1))
 const decrease=()=> (counter<=0?""  :setcounter(counter-1))
return( <div>
    <Counter counter={counter} increase={increase} decrease={decrease}/> 
     

</div>

)



}
export default CounterAction