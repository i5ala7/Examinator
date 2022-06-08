import React from 'react'
import MotionHoc from "./MotionHoc";
import '../../css/addUser.css'


function AddUserComponent() {
  return (
    <div className='wrapper'>
        <h2>Add User</h2>
    <form action="#">
      <div className="input-box">
        {/* <input type="select" placeholder="Role" required /> */}

        <select >
           <option value="Teacher">Teacher</option>
           <option value="Watcher">Watcher</option>
           <option value="Student">Student</option>
        </select>
      </div>  
      <div className="input-box">
        <input type="text" placeholder="First Name" required />
      </div>
      <div className="input-box">
        <input type="text" placeholder="Last Name" required />
      </div>
      <div className="input-box">
        <input type="text" placeholder="Enter your email" required />
      </div>
      <div className="input-box">
        <input type="password" placeholder="Create password" required />
      </div>
      
      
      <div className="input-box button">
        <input type="Submit" value="Add User" />
      </div>
     
    </form>

    </div>
  )
}

const AddUser = MotionHoc(AddUserComponent);


export default AddUser