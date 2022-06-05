import React, {useState} from 'react'
import wave from '../assets/images/wave.png'
import Home from '../assets/images/Home.png'
import Avatar from '../assets/images/Avatar.png'
import '../css/login.css'
import '../assets/styling-js/loginStyle'





function Login() {
	const [values, setValues] = useState({
		email:"",
		password: "",
	});

	const handleSubmit = (e)=> {
		e.preventDefault();
	}
	
  return (
	  
    <div>

<img className="wave" alt='wave' src={wave} />
	<div className="container">
		<div className="img">
			<img alt='Home' src={Home}/>
		</div>
		<div className="login-content">
			<form onSubmit={(e)=> handleSubmit(e) } >
				<img alt='avatar' src={Avatar}/>
				<h2 className="title">connexion </h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		
           		   		<input placeholder='Votre email' name='email' type="text" class="input" onChange={(e)=> setValues({...values,[e.target.name]:e.target.value})} />
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	
           		    	<input placeholder='Mot de passe' name='password' type="password" className="input" onChange={(e)=> setValues({...values, [e.target.name]:e.target.value})} />
            	   </div>
            	</div>
            	
            	<input type="submit" className="btn" value="Connexion"/>
            </form>
			
        </div>
    </div>
	
  
        
    </div>
  )
  
}

export default Login