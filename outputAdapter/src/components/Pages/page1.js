import React , { useState, useEffect }from 'react';
import { render } from 'react-dom';
import LoginForm from '../login/LoginForm';
import CreateNewAccount from '../login/CreateNewAccount';

import {
  Navbar,
  NavDropdown,
  MenuItem, 
  NavItem,
  Nav,
  Popover,
  Tooltip,
  Button,
  Modal,
  OverlayTrigger
} from 'react-bootstrap';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'end',
};

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
    <div style={styles}>
      <Button type="button" className="btn btn-default" onClick={open}>
        Login
      </Button>
      <LoginForm showModal={showModal} onClose={close} />
  </div>
  );
  
}

export default Page1
