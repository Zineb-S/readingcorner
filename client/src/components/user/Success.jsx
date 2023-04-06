import axios from 'axios';
import React from 'react'
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const Success = () => {
  var currentUserID = localStorage.getItem('id')
  var orderBooks = localStorage.getItem('books')
  var total = localStorage.getItem('total')
  var date = localStorage.getItem('date')
  console.log(currentUserID, orderBooks, total, date)
  const handleSubmitOrder = () => {

    if (total) {
      try {
        const res = axios.post(`http://localhost:3001/api/orders/create`, { books: orderBooks, total: total, date: date, id: currentUserID });
        if (res) { toast.success('Order Added'); }

      } catch (err) {
        toast.error('Not a valid request');

      }
    }



  };
  handleSubmitOrder()
  return (
    <><ToastContainer /><div >Thank You for your purchase</div></>
  )
}

export default Success