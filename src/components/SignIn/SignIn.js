import React from 'react';
import 'tachyons';
import './SignIn.css';

class SignIn extends React.Component {
	constructor(props) {
		super();
		this.state = {
			signInEmail:'',
			signInPassword:''
		}
	}
	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3000/signin',
			{
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					email:this.state.signInEmail,
					password:this.state.signInPassword
				})
			})
				.then(response => response.json())
				.then(user => {
					if (user.id) {
						this.props.onGetUserInfo(user)
						this.props.onRouteChange('home')
						this.props.onSignIn()
					}
				})
	}


	render() {
		const { onRouteChange,onSignIn,onGetUserInfo,db } = this.props
		return(
			<div className="signbox pa3">
				<div className="myForm signbox pa3 ba white shadow-3">
					<p className="f3 pv2">Sign In:</p>
					<div className="flexer pv1"><p>Email:</p>
						<input 
							onChange={this.onEmailChange}
							className="log" type="email" name="login" /></div>
					<div className="flexer pv1"><p>Password:</p>
						<input 
							onChange={this.onPasswordChange}
							className="pass" type="password" maxLength='16' name="password" /></div>
					<div className="buttons">
					<input type='submit' onClick={() => this.onSubmitSignIn()}className="hover-bg-white-20 pointer pa2 logbutt mh1 f6 link ph3 pv2 mb2 dib white bg-black" value='Login'/>
					<div onClick={() => onRouteChange('register')}className="hover-bg-white-20 pointer logbutt f6 mh1 link ph3 pv2 mb2 dib white bg-black">Register</div>
					</div>
				</div>
			</div>
		)
	}
}

export default SignIn;

// onRouteChange,onSignIn,onGetUserId,db