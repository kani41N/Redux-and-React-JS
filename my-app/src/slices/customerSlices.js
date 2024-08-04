import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const customerSlices = createSlice({
    name: 'customer',
    initialState,
    reducers:{
        AddCustomer(state, action){
            state.push(action.payload)
        },
        deleteCustomer(state, action){
          const deleteIndex = action.payload;
          return state.filter((val, index) => index !== deleteIndex )
        }
    }
})

export const { AddCustomer, deleteCustomer } = customerSlices.actions;
export default customerSlices.reducer;