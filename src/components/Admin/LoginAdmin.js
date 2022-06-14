import React, {useState} from 'react'
import wave from '../../assets/images/wave.png'
import Home from '../../assets/images/Home.png'
import Avatar from '../../assets/images/Avatar.png'
import '../../css/login.css'
import axios from 'axios'
import '../../assets/styling-js/loginStyle'





function LoginAdmin() {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/auth/admin";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/verify";
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
	  
    <div>

<img className="wave" alt='wave' src={wave} />
	<div className="container">
		<div className="img">
			<img alt='Home' src={Home}/>
		</div>
		<div className="login-content">
			<form onSubmit={handleSubmit} >
				<img alt='avatar' src={Avatar}/>
				<h2 className="title">connexion </h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		
           		   		<input placeholder='Votre email' name='email' type="text" className="input" onChange={handleChange} />
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	
           		    	<input placeholder='Mot de passe' name='password' type="password" className="input" onChange={handleChange} />
            	   </div>
            	</div>
            	{error && <div>{error}</div>}
            	<input type="submit" className="btn" value="Connexion"/>
            </form>
			
        </div>
    </div>
	
  
        
    </div>
  )
  
}

export default LoginAdmin