import React from 'react';
import './Navbar.css';
import 'tachyons';

const Navigation = ({onRouteChange,route,onCategoryChange,cart,isSignedIn,user,isAdmin,onDropSignOut,droppedSignOut,onSignOut,onHideSignOut,onChangeAdminRoute}) => {
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
					onClick = {() => onRouteChange('cart')}
					className = "grow">Cart({cart.length})</div>
					{isSignedIn === false ?
						<div 
							onClick = {() => onRouteChange('signin')}
							className="grow">Sign In
						</div>
						:
						( user.isAdmin === false ?
							(droppedSignOut === false ?
						<div 
							onMouseEnter = {() => onDropSignOut()}
							onMouseLeave = {() => onHideSignOut()}><p className="grow fonted">Hi,{user.name}</p>
						</div>
							:
							(
								<div className="bigDrop">
						<div 
							onMouseEnter = {() => onDropSignOut()}
							onMouseLeave = {() => onHideSignOut()}><p className="grow fonted">Hi,{user.name}</p>
						</div>
						<div 
							onMouseEnter = {() => onDropSignOut()}
							onMouseLeave = {() => onHideSignOut()}
							onClick = {() => {onHideSignOut();onSignOut()}}><p className="grow fonted">Sign Out</p>
						</div>
								</div>
							)
							)
						:
							(droppedSignOut === false ?
						<div
							onMouseEnter = {() => onDropSignOut()}
							onMouseLeave = {() => onHideSignOut()}><p className="grow fonted">Hi,Admin</p>
						</div>
						:
						(
							<div className="bigDrop admin">
						<div 
							onMouseEnter = {() => onDropSignOut()}
							onMouseLeave = {() => onHideSignOut()}><p className="grow fonted">Hi,Admin</p>
						</div>
						<div 
							onMouseEnter = {() => onDropSignOut()}
							onMouseLeave = {() => onHideSignOut()}
							onClick = {() => {onRouteChange('admin');onChangeAdminRoute('admin')}}><p className="grow fonted">Admin Panel</p>
						</div>
						<div 
							onMouseEnter = {() => onDropSignOut()}
							onMouseLeave = {() => onHideSignOut()}
							onClick ={() => {onHideSignOut();onSignOut()}}><p className="grow fonted">Sign Out</p>
						</div>
							</div>)
							)
							)
					}
			</nav>
		)
	}


export default Navigation;