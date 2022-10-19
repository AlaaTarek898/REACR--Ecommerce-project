import {createSlice} from "@reduxjs/toolkit"
//inital State
const initialState={
    cartList:[ ],
    cartCount:[ ],
}

//reducers
 const cartSlice= createSlice({
    name:'Cart',
    initialState ,
    reducers:{
        addToCart: (state,action) =>{
          state.cartCount=+1;
          state.cartList.push(action.payload)

        }
    }

})
export const {addToCart} =cartSlice.actions
export default cartSlice.reducer

//actions