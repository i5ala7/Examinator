import React , {useState} from 'react'
import MotionHoc from "./MotionHoc";
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import '../../../css/addQuestion.css'

function JustifyComponent() {
  const [data, setData] = useState({
    "id" : "",
    "subject" : "",
    "question": "",
    
  });
  const [error, setError] = useState("");
	const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/justify/add";
			const { data: res } = await axios.post(url, data);
			navigate('/student-dashboard')
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
    <div className="wrapper">
    <h2>Justify Absence</h2>
    <form onSubmit={handleSubmit}>
      <div className="input-box">
        <input type="text" name='firstName' value={data.firstName} placeholder="First Name" onChange={handleChange} required />
      </div>
      <div className="input-box">
        <input type="text" name='lastName' value={data.lastName} placeholder="Last Name" onChange={handleChange} required/>
      </div>
     
      
      <div className="input-box button">
        <textarea className='textAria' name="justification" value={data.justification} placeholder="Your Justification Here" onChange={handleChange} required />
      </div>

      <div className="input-box button">
        <input type="Submit" value="Justify" />
      </div>
      
    </form>
  </div>
    
    
  )
}


const JustifyAbsence = MotionHoc(JustifyComponent);

export default JustifyAbsence