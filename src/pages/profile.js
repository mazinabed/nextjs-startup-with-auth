import React, {useEffect, useState} from 'react'
import axios from 'axios'




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
    <div>
        <h1>This is your profile page</h1>
    </div>
</>


    );
}
