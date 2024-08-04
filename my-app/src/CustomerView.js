import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteOutline } from "react-icons/md";
import { deleteCustomer } from './slices/customerSlices';

export default function CustomerView() {
  const customers = useSelector((state) => state.customers) 
  const dispatch = useDispatch();

  function deleteHandler (index) {
   dispatch( deleteCustomer(index));

  }
  return (
    <div>
      <h3>Customer List</h3>
      <ul className='list-unstyled'>
        {
            customers.map((customer, index) => 
            <li className='fs-1 text-primary' key={index}>
              {customer}
               <MdDeleteOutline size={40} 
               style={{ cursor: 'pointer'}}
               className='text-danger' 
               onClick={ () => deleteHandler (index)}/>
          </li>)
        }
      </ul>
    </div>
  )
}
