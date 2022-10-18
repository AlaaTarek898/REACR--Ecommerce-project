
import "./App.css";

function Counter( props){ 
    

return( 
    <div className="App">
     <header className="App-header">
    <div className='btn '>
    <div className='counter'> {props.counter}</div>
     <button onClick={props.increase} className='increase'> +</button>
       <button onClick={props.decrease} className='decrease'>-</button>      
          </div>
          </header>
          </div>

)




}


export default Counter