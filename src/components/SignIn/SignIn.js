import React from 'react';
import 'tachyons';
import './SignIn.css';

const SignIn = ({onRouteChange,onSignIn,onGetUserId}) => {
	return(
			<div className="signbox pa3">
				<form className="myForm signbox pa3 ba white shadow-3">
					<p className="f3 pv2">Sign In:</p>
					<div className="flexer pv1"><p>Email:</p><input className="log" type="email" name="login" /></div>
					<div className="flexer pv1"><p>Password:</p><input className="pass" type="password" maxLength='16' name="password" /></div>
					<div className="buttons">
					<div onClick={() => {onRouteChange('home'); onSignIn()}}className="hover-bg-white-20 pointer pa2 logbutt mh1 f6 link ph3 pv2 mb2 dib white bg-black">Login</div>
					<div onClick={() => onRouteChange('register')}className="hover-bg-white-20 pointer logbutt f6 mh1 link ph3 pv2 mb2 dib white bg-black">Register</div>
					</div>
				</form>
			</div>
		)
}

export default SignIn;