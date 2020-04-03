import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProfileNav from '../components/ProfileNave'




export default  function ProfilePage(){
   


 const [data, setData] = useState()
  useEffect(()=>{
axios
.get('/api/profile', {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
})
.then(response => {
    console.log(response.data)
    setData(response.data)
})
}, [])


    return(

<>
<ProfileNav/>
    <div className="container">
        <div className="row">
            <div className="col-12">
            <h1>This is your profile page</h1>
            </div>
        </div>
        
    </div>
</>


    );
}
