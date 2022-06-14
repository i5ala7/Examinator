import React from 'react'
import axios from 'axios'
import '../../css/verification.css'

function Verify() {
   const sendEmail = async ()=>{
     try{
       const url = "http://localhost:5000/api/auth/verify"
       axios.post(url)
    
     }catch (error){
       console.log(error)

     } 

   }

   sendEmail()

 
const handleSubmit =(e)=> {
  e.preventDefault();
  var x = document.getElementById('otp').value
  if(x == 7529 ){
    window.location = '/admin-dashboard'
  }
  else {
    alert('Your OTP is Not Valid !')
  }


}



  return (
    <div className='wrapper'>
      <h2>Verify Login</h2>
      <form onSubmit={handleSubmit} >
  
  
    
    <div className="input-box">
    <input id='otp'  type="text"  placeholder="Enter OTP" required />
  </div>
  
  
  <div className="input-box button">
    <input  type="Submit"  />
  </div>
 
</form>

</div>
  )
}

export default Verify