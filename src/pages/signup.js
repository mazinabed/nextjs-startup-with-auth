import React, { useState } from "react";
import Router from 'next/router';
import Nav from '../components/Nav'
import axios from 'axios'
import Layout from "../components/Layout";
import Footer from '../components/Footer'
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
        else {
          //set LocalStorage
          //  localStorage.setItem("token", data.token)
          window.location = ('/');
        }
      });


  };
  return (
    <Layout>
       <div className="container">
        <div className="row">
          <div className="col">
            <div>
              <h5>Please Sign up!</h5>
            </div>

            <form onSubmit={handleSubmit}>


              <div className="form-group">
                <div className="col-6">
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
                <div className="col-6">
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
      </div>
      <Footer></Footer>
    </Layout>

     
    
  );
}


