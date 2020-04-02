import React, { useState } from "react";
import Router from 'next/router';
import Nav from '../components/Nav'

export default function Signup() {

  //const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  // If need to add more see below:
//   const [firstname, setFirstName] = useState();
//   const [lastname, setLastName] = useState();
//   const [male, setMale] = useState();
//   const [female, setFemale] = useState();
//   const [gender, setGender] = useState('Male');

  

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        email,
        password,
        // firstname,
        // lastname,
        // gender,
       

      }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data && data.error) {
          //setSignupError(data.message);
          console.log(data.error)
        }
        if (data && data.token) {
          //set LocalStorage
          localStorage.setItem("token", data.token)
          Router.push('/profile');
        }
      });
    
    console.log("password is " + password);
    console.log("Email is " + email);
    // console.log("FirstName is " + firstname);
    // console.log("LastName is " + lastname);
    
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


          {/* <div className="form-group">
            <div className="col-12">
              <input
                className="form-control"
                value={firstname}
                type="text"
                placeholder="FirstName"
                name="firstname"
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
          </div> */}
          {/* <div className="form-group">
            <div className="col-12">
              <input
                className="form-control"
                value={lastname}
                type="text"
                placeholder="LastName"
                name="lastname"
                onChange={e => setLastName(e.target.value)}
              />
            </div>
          </div> */}



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


