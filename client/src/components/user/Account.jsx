import axios from 'axios';
import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Account = () => {
  const email = localStorage.getItem('email')
  const token = localStorage.getItem('token')
  const navigate = useNavigate();
  const navigateHome = () => {
    toast.success("See you later");
    navigate('/');
  };


  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const res2 = await axios.post("http://localhost:3001/api/logout",
        token //token 
        , {
          headers: {
            'authorization': `Bearer ${token}`
          }
        })
      if (res2) {
          // clear storage 
          localStorage.clear()
          window.location.reload()
        //navigateHome()
      }

    } catch (err) {
      console.log(err);
    }

  };

  
  console.log(email)
  return (
    <><div>{email} profile</div><Button onClick={handleLogout} style={{float:'right'}}>logout</Button></>
  )
}
 
export default Account