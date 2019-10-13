import React from 'react';
import './Navbar.css';
import 'tachyons';

const Navigation = ({onRouteChange,route,onCategoryChange,cart,isSignedIn,userId}) => {
	return (
			<nav className={route==='home' ? "fixed shadow-1" : "relative shadow-1"}>
				<link href="https://fonts.googleapis.com/css?family=Grenze&display=swap" rel="stylesheet"/>
				<div 
					onClick = {() => onRouteChange('home')}
					className="logo grow">Logo</div>
				<div 
					onClick = {() => {onRouteChange('store'); onCategoryChange("all")}}
					className="shadow-1 grow">Store</div>
				<div 
					onClick = {() => onRouteChange('about')}
					className="bord shadow-1 grow">About us</div>
				<div
					onClick = {() => onRouteChange('cart')}>Cart({cart.length})</div>
					{isSignedIn === false ?
						<div 
							onClick = {() => onRouteChange('signin')}
							className="grow">Sign In
						</div>
						:
						<div className="grow">Hi,Name
						</div>
					}
			</nav>
		)
	}


export default Navigation;