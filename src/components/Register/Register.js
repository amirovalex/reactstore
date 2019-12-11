import React from 'react';
import 'tachyons';
import './Register.css'

class Register extends React.Component {

	constructor(props){
		super();
			this.state={
				registerName:"",
				registerEmail:"",
				registerPassword:"",
				registerFail: false,
			}
		}
	

	onNameChange = (event) => {
		this.setState({registerName: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({registerEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({registerPassword: event.target.value})
	}

	onRegisterFail = () => {
		this.setState({registerFail:true})
	}

	onSubmitRegister = () => {
		fetch('https://still-escarpment-99159.herokuapp.com/register',
			{
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					name:this.state.registerName,
					email:this.state.registerEmail,
					password:this.state.registerPassword
				})
			})
				.then(response => response.json())
				.then(user => {
					if (user) {
						this.props.onGetUserInfo(user)
						this.props.onRouteChange('home')
						this.props.onSignIn()
					}
				})
	}

	render() {
		const { onRouteChange } = this.props;
		const { registerName, registerPassword, registerEmail } = this.state;
			return(
			<div className="phoneScreen signbox pa3">
				<div className="myForm signbox pa3 ba white shadow-3">
					<p className="f3 pv2">Register:</p>
					{this.state.registerFail === true ? 
						<p style={{color:"red"}}>Enter Valid Data</p>
						: null
					}
					<div className="flexer pv1"><p>Name:</p>
						<input 
							onChange={this.onNameChange}
							className="log" type="text" name="name" />
					</div>
					<div className="flexer pv1"><p>Email:</p>
						<input 
							onChange={this.onEmailChange}
							className="log" type="email" name="login" />
					</div>
					<div className="flexer pv1"><p>Password:</p>
						<input 
							onChange={this.onPasswordChange}
							className="pass" type="password" maxLength='16' name="password" />
					</div>
					<div>
					<input type='submit' onClick={registerName.length > 1 &&
													registerEmail.length > 1 &&
													registerPassword.length > 1 ? () => this.onSubmitRegister() : () => this.onRegisterFail()} 
							className="pointer hover-bg-white-20 logbutt mh1 f6 link ph3 pv2 mb2 dib white bg-black" 
							value='Register'/>
					<div onClick={() => {onRouteChange('signin');this.props.history.push('/signin')}}className="hover-bg-white-20 pointer logbutt f6 mh1 link ph3 pv2 mb2 dib white bg-black">Sign In</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Register;