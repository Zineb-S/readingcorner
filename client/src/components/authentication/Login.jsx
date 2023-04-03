import React, { useContext, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';

import axios from "axios";
import NavBar from '../NavBar'
const Login = () => {
  const [justifyActive, setJustifyActive] = useState('tab1');
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");





  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  return (
    <>

    <NavBar></NavBar>
    <div id='login'>
      <MDBContainer id='authContainer' className="p-3 my-5 d-flex flex-column w-50">

        <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>

          <MDBTabsPane show={justifyActive === 'tab1'}>

            <div className="text-center mb-3">
              <p>Sign in with:</p>

              <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm" />
                </MDBBtn>
              </div>

              <p className="text-center mt-3">or:</p>
            </div>

            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(e) => setEmail(e.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e) => setPassword(e.target.value)} />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn className="mb-4 w-100" type='submit' >Sign in</MDBBtn>
            <p className="text-center">Not a member? <a href="#!">Register</a></p>

          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === 'tab2'}>

            <div className="text-center mb-3">
              <p>Sign un with:</p>

              <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm" />
                </MDBBtn>
              </div>

              <p className="text-center mt-3">or:</p>
            </div>

            <MDBInput wrapperClass='mb-4' label='First Name' id='form1' type='text' />
            <MDBInput wrapperClass='mb-4' label='Last Name' id='form1' type='text' />
            <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' />
            <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />

            <div className='d-flex justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
            </div>

            <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

          </MDBTabsPane>

        </MDBTabsContent>

      </MDBContainer>
      </div>
    </>
  )
}

export default Login