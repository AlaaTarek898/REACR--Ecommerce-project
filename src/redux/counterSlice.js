import {createSlice}  from '@reduxjs/toolkit'
const initialState={
    counter:0,
}

//reducer 
 export const counterSlice=createSlice({
    name:'Counter',
    initialState,
    reducers:{
        
        incrementCount: (state, action) => {
            state.counter = state.counter + 1;
          },
          decrementCount: (state, action) => {
            state.counter = state.counter - 1;

},
},
});

export const { incrementCount, decrementCount } = counterSlice.actions;