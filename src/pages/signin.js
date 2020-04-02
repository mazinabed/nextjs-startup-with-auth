import React, { useState, useReducer } from "react";
import Router from 'next/router';
import Link from 'next/link'
import axios from 'axios'
import Nav from '../components/Nav'


function Signin() {
  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + email);
    console.log("password is " + password);
    //call api
    return axios
      .post('/api/signin', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },


        email,
        password

      })
      .then((r) => {

        return r.data;
      })
      .then((data) => {
        if (data && data.error) {
          setLoginError(data.message);
        }
        if (data && data.token) {
          //set LocalStorage
          localStorage.setItem("token", data.token)
          Router.push('/profile');
        }
      });

  };

  return (
    <>
    <Nav/>
    <div className="container">
      <div className="row">
        <div className="col">
        <div>
      
      <form onSubmit={handleSubmit}>
        <div  className="container mt-3 px-5">
          <div className="form-group">
            <div className="col" size="6">
              <input
                className="form-control"
                type="text"
                placeholder="Email"
                name="email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div  className="form-group">
            <div className="col" size="6">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button className="btn btn-success" type="submit">
          {loginError && <p style={{color: 'red'}}>{loginError}</p>}
            Submit
          </button>
        </div>
        <br/>
        <br/>
        
      </form>
     
    </div>
    
        </div>
       
      </div>
    </div>
</>

  );
}

export default Signin;