import React , { useState, useEffect }from 'react';
import LoginForm from '../login/LoginForm';
import Sidebar from '../sidebar';

import {Button} from 'react-bootstrap';


const Page1 = () =>{
  const [showModal, setshowModal] = useState(false)
  const [form, setForm] = useState('')
  const [isLoggedIn, setisLoggedIn] = useState(false)


  const close = () => {
    setshowModal(false);
  }

  const open = () => { 
      setshowModal(true);
  }

  return (
    <div className='page1'>
      <Button type="button" className="btn btn-default b1" onClick={open}>
        Login
      </Button>
      <LoginForm showModal={showModal} onClose={close} />
      <Sidebar/>
  </div>
  );
  
}

export default Page1
