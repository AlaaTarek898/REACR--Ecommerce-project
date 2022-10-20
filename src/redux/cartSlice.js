import {createSlice} from "@reduxjs/toolkit"
//inital State
const initialState={
    cartList:[],
    cartCount:0,
}

//reducers
 const cartSlice= createSlice({
    name:'Cart',
    initialState ,
    reducers:{
        addToCart: (state,action) =>{
         
          state.cartList.push(action.payload)
          state.cartCount=state.cartList.length;

        },
        removeFromCart: (state, action) => {
          
            state.cartList.splice(action.payload,1);
            state.cartCount=state.cartList.length;
          },
    }

})
export const {addToCart,removeFromCart} =cartSlice.actions
export default cartSlice.reducer


//actions