import React, { Component, useState, useEffect } from "react";
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
} from "react-bootstrap";

const LoginForm = (props) => {
  
      const [showModal, setshowModal] = useState(false)
      const [smShow, setSmShow] = useState(false)
      const [email, setemail] = useState('')
      const [password, setPassword] = useState('')
      const [mode, setMode] = useState('login')



 const Mode = parm => {
    setMode(
      parm
    );
  };

  const renderForgot = () => {
    return(
      <div>
        <p>inside of forgot! :) </p>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            setMode("login");
          }}
        >
          Back to login
        </a>
      </div>
    );
  };





  const renderRegister = () => {
    return (
      <div>
        <div>
          <form className="form-horizontal form-loanable">
            <div className="alert alert-danger alert-sm">
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
              <span className="fw-semi-bold">Error:</span> Login failed.
              </div>
            <fieldset>
              <div className="form-group has-feedback required">
                <label htmlFor="login-email" className="col-sm-5">Username or email</label>
                <div className="col-sm-7">
                  <span className="form-control-feedback" aria-hidden="true"></span>
                  <input
                    type="text"
                    name="email"
                    id="login-email"
                    className="form-control"
                    placeholder="Enter username or email"
                    onChange={e => setemail(e.target.value)}
                  />
                </div>
                { /* console.log('error email ::: ' + JSON.stringify(errors)) */}
              </div>
              <div className="form-group has-feedback required">
                <label htmlFor="login-password" className="col-sm-5">Password</label>
                <div className="col-sm-7">
                  <span className="form-control-feedback" aria-hidden="true"></span>
                  <div className="login-password-wrapper">
                    <input
                      type="password"
                      name="password"
                      id="login-password"
                      className="form-control"
                      placeholder="*****"
                      required
                      onChange={e => setPassword(e.target.value)}
                    />
                    
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="form-action">
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-left">Enter <span className="icon-arrow-right2 outlined"></span></button>
              
            </div>
          </form>
        
        </div>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            setMode("login");
          }}
        >
          Log in here
        </a>
      </div>
    );
  };

  const renderLogin = () => {
    return (
      <div>
          <form className="form-horizontal form-loanable">
            <div className="alert alert-danger alert-sm">
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
              <span className="fw-semi-bold">Error:</span> Login failed.
              </div>
            <fieldset>
              <div className="form-group has-feedback required">
                <label htmlFor="login-email" className="col-sm-5">Username or email</label>
                <div className="col-sm-7">
                  <span className="form-control-feedback" aria-hidden="true"></span>
                  <input
                    type="text"
                    name="email"
                    id="login-email"
                    className="form-control"
                    placeholder="Enter username or email"
                    onChange={e => setemail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                { /* console.log('error email ::: ' + JSON.stringify(errors)) */}
              </div>
              <div className="form-group has-feedback required">
                <label htmlFor="login-password" className="col-sm-5">Password</label>
                <div className="col-sm-7">
                  <span className="form-control-feedback" aria-hidden="true"></span>
                  <div className="login-password-wrapper">
                    <input
                      type="password"
                      name="password"
                      id="login-password"
                      className="form-control"
                      placeholder="*****"
                      required
                      onChange={e => setPassword(e.target.value)}
                      value={password}
                    />
                    <a
                      href="#"
                      onClick={e => {
                        e.preventDefault();
                        setMode("forgot");
                      }}
                    >
                      Forgot Password
                     </a>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="form-action">
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-left">Enter <span className="icon-arrow-right2 outlined"></span></button>
            </div>
          </form>
       <a
          href="#"
          onClick={e => {
            e.preventDefault();
            setMode("register");
          }}
        >
        Create your account
        </a>
      </div>
    );
  };

 
    return (
      
        <Modal
          show={props.showModal}
          onHide={props.onClose}
          
          size="lg"
        >
          <Modal.Header closeButton={true}>
            <h2>{ mode === "login" ? "Login" : mode === "register" ? "Register" : "Forgot Password" }</h2>
          </Modal.Header>
          <Modal.Body>
            {mode == "login" ? (renderLogin()) : mode === "register" ? (renderRegister()) : (renderForgot())}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      
    );
  
}

export default LoginForm;
