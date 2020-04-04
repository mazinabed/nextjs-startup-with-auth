import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Router from 'next/router';
import ProfileNav from '../components/ProfileNave'
import Footer from '../components/Footer'
const user = require ('../../models/user')





export default  function ProfilePage(){
   


 const [data, setData] = useState()
 useEffect(()=> {
    if(!localStorage.getItem('token')){
        Router.push('/')
    }
})
  useEffect(()=>{
axios
.post('/api/profile', {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
})
.then(response => {
    //console.log(response.data)
    setData(response.data)
    
})
}, [])


    return(

<>
<ProfileNav/>
    <div className="container">
        <div className="row">
            <div className="col-12">
            <h1>This is your profile page </h1>
            </div>
        </div>
        
    </div>
    <Footer></Footer>
</>


    );
}