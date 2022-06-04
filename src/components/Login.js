import React from 'react'
import wave from '../assets/images/wave.png'
import Home from '../assets/images/Home.png'
import Avatar from '../assets/images/Avatar.png'
import '../css/login.css'

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;// eslint-disable-next-line
	if(this.value === ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

	






function Login() {
	
  return (
	  
    <div>

<img className="wave" alt='wave' src={wave} />
	<div className="container">
		<div className="img">
			<img alt='Home' src={Home}/>
		</div>
		<div className="login-content">
			<form action="index.html">
				<img alt='avatar' src={Avatar}/>
				<h2 className="title">connexion </h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<h5>Votre email</h5>
           		   		<input type="text" class="input"/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	<h5>Mot de passe </h5>
           		    	<input type="password" className="input"/>
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