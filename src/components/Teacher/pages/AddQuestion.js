import React , {useState} from 'react'
import MotionHoc from "./MotionHoc";
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import '../../../css/addQuestion.css'

function AddQuestionComponent() {
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
			const url = "http://localhost:5000/api/questions/add";
			const { data: res } = await axios.post(url, data);
			navigate('/teacher-dashboard')
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
    <h2>Add Question</h2>
    <form onSubmit={handleSubmit}>
      <div className="input-box">
        <input type="text" name='id' value={data.id} placeholder="ID" onChange={handleChange} required />
      </div>
      <div className="input-box">
        <input type="text" name='subject' value={data.subject} placeholder="Subject" onChange={handleChange} required/>
      </div>
     
      
      <div className="input-box button">
        <textarea className='textAria' name="question" value={data.question} placeholder="Question" onChange={handleChange} required />
      </div>

      <div className="input-box button">
        <input type="Submit" value="Add Question" />
      </div>
      
    </form>
  </div>
    
    
  )
}


const AddQuestion = MotionHoc(AddQuestionComponent);

export default AddQuestion