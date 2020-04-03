import React, { useState } from "react";
import Router from 'next/router';
import Nav from '../components/Nav'
import axios from 'axios'
export default function Signup() {

  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  
  const handleSubmit = e => {
    e.preventDefault();

   return axios
    .post('/api/user', {
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
        else  {
           //set LocalStorage
          //  localStorage.setItem("token", data.token)
          window.location=('/');
        }
      });
    
    
  };
  return (
    <>
    <Nav/>

    <div className="row">
      <div className="col-6 offset-1">
        <h5>It’s quick and easy.</h5>
      </div>
      <div className="container offset-1">
        <form onSubmit={handleSubmit}>


          <div className="form-group">
            <div className="col-12">
              <input
                className="form-control"
                value={email}
                type="text"
                placeholder="Email"
                name="email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-12">
              <input
                className="form-control"
                value={password}
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>
         
          <div className="col-6">
            <button className="btn btn-success" value="Submit" type="submit">
              Submit
          </button>
          </div>

        </form>
      </div>
    </div>
    </>
  );
}


