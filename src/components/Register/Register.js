import React from 'react';
import 'tachyons';
import './Register.css'

const Register = ({onRouteChange,onSignIn}) => {
	return(
			<div className="signbox pa3">
				<form className="myForm signbox pa3 ba white shadow-3">
					<p className="f3 pv2">Register:</p>
					<div className="flexer pv1"><p>Name:</p><input className="log" type="text" name="name" /></div>
					<div className="flexer pv1"><p>Email:</p><input className="log" type="email" name="login" /></div>
					<div className="flexer pv1"><p>Password:</p><input className="pass" type="password" maxlength='16' name="password" /></div>
					<div>
					<div onClick={() => {onRouteChange('home'); onSignIn()}} className="pointer hover-bg-white-20 logbutt mh1 f6 link ph3 pv2 mb2 dib white bg-black">Register</div>
					<div onClick={() => onRouteChange('signin')}className="hover-bg-white-20 pointer logbutt f6 mh1 link ph3 pv2 mb2 dib white bg-black">Sign In</div>
					</div>
				</form>
			</div>
		)
}

export default Register;