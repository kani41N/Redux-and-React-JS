import React, { useState } from 'react';
import { AddCustomer as AddCustomerAction } from './slices/customerSlices';
import { useDispatch } from 'react-redux';

export default function CustomerAdded() {
    const [input, setInput] = useState("");
    // const [customers, setCustomers] = useState([]);
    const dispatch = useDispatch();


    function AddCustomer () {
       if (input){
        // setCustomers((previouState) => [...previouState, input]);
        dispatch(AddCustomerAction(input)); 
        setInput("");
       }
    }
  return (
    <>
    <div className="container mt-4">
    <h3 className="mb-4">Add New Customer</h3>
    <div className="d-flex justify-content-center mb-3">
      <input 
      type="text" 
      value={input}
      id="customerName" 
      className="form-control w-50 justify-content-center"
       placeholder="Enter customer name"
       onChange={(e) => setInput(e.target.value) } />
    </div>
    <button 
    className="btn btn-success"
    onClick={AddCustomer}
    >Add</button>
  </div>
    </>
  )
}
