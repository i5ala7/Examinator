import React, {useState} from 'react'
import MotionHoc from "./MotionHoc";
import '../../../css/addUser.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'



function AddUserComponent() {
    const [data, setData] = useState({
      "firstName" : "",
      "lastName" : "",
      "email": "",
      "password" : "",
      "role" : ""
      
    });
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/users/add";
			const { data: res } = await axios.post(url, data);
			navigate('/admin-dashboard')
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};


    
  return (
    <div className='wrapper'>
        <h2>Add User</h2>
    <form onSubmit={handleSubmit}>
      <div className="input-box">
     
         <select name='role' value={data.role} onChange={handleChange} >
           <option value="Teacher">Teacher</option>
           <option value="Observer">Observer</option>
           <option value="Student">Student</option>
         </select> 
      </div> 
      <div className="input-box">
        <input name='firstName' value={data.firstName} onChange={handleChange}  type="text" placeholder="First Name" required />
      </div>
      <div className="input-box">
        <input name='lastName' value={data.lastName} onChange={handleChange} type="text" placeholder="Last Name" required />
      </div>
      <div className="input-box">
        <input name='email' value={data.email} onChange={handleChange} type="text" placeholder="Enter your email" required />
      </div>
      <div className="input-box">
        <input name='password' value={data.password} onChange={handleChange} type="password" placeholder="Create password" required />
      </div>
      
      {error && <div>{error}</div>}
      <div className="input-box button">
        <input type="Submit" value="Add User" />
      </div>
     
    </form>

    </div>
  )
}

const AddUser = MotionHoc(AddUserComponent);


export default AddUser