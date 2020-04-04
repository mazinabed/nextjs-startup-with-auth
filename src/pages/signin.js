import React, { useState, useReducer } from "react";
import Router from 'next/router';
import Link from 'next/link'
import axios from 'axios'
import Layout from "../components/Layout";
import Footer from '../components/Footer'


function Signin() {
  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    
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
    <Layout>
      <div className="container">
      <div className="row">
        <div className="col">
  
          <div>
          <h5>Please Sign in!</h5>
          </div>
      
      <form onSubmit={handleSubmit}>
      <div className="form-group">
                <div className="col-6">
              <input
                className="form-control"
                type="text"
                placeholder="Email"
                name="email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
                <div className="col-6">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="col-6">
          <button className="btn btn-success" type="submit">
          {loginError && <p style={{color: 'red'}}>{loginError}</p>}
            Submit
          </button>
          </div>
        
      </form>
     
    </div>
    
        </div>
       
      </div>
  <Footer></Footer>
    </Layout>
    


  );
}

export default Signin;