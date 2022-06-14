import React, {useState} from 'react'
import '../../../css/planExam.css'
// import MotionHoc from "./MotionHoc";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const PlanExam = () => {
  const [data, setData] = useState({
    "subject" : "",
    "description" : "",
    "date": "",
    
    "duration" : ""
    
  });
const [error, setError] = useState("");
const navigate = useNavigate();

const handleChange = ({ currentTarget: input }) => {
  setData({ ...data, [input.name]: input.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const url = "http://localhost:5000/api/plan/add";
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
        <h2>Plan Exam</h2>
    <form onSubmit={handleSubmit}>
      <div className="input-box">
      <input name='subject' value={data.subject} onChange={handleChange}  type="text" placeholder="Subject" required />
     
        
      </div> 
      <div className="input-box">
        <input name='description' value={data.description} onChange={handleChange}  type="text" placeholder="Description" required />
      </div>
      <div className="input-box">
        <input name='date' value={data.date} onChange={handleChange} type="date"  required />
      </div>
      
      <div className="input-box">
        <input name='duration' value={data.duration} onChange={handleChange} type="number" placeholder="Duration" required />
      </div>
      
      {error && <div>{error}</div>}
      <div className="input-box button">
        <input type="Submit" value="Plan Exam" />
      </div>
     
    </form>

    </div>

    )
    
  };
  
  // const PlanExam = MotionHoc(PlanExamComponent);
  
  export default PlanExam;
  
 
  