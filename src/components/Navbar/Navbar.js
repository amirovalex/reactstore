import React from 'react';
import './Navbar.css';
import 'tachyons';

const Navigation = ({onRouteChange,route,onCategoryChange,cart,isSignedIn,user,isAdmin,onDropSignOut,droppedSignOut,onSignOut,onHideSignOut,onChangeAdminRoute}) => {
	return (
			<div className={route==='home' ? "shadow-1 menu-area" : "shadow-1 menu-area"}>
				<link href="https://fonts.googleapis.com/css?family=Grenze&display=swap" rel="stylesheet"/>
				<ul>
					<li>
						<div 
							onClick = {() => onRouteChange('home')}
							className="logo grow">Logo
						</div>
					</li>
					<li>
						<div 
							onClick = {() => {onRouteChange('store'); onCategoryChange("all")}}
							className="shadow-1 grow">Store
							</div>
					</li>
					<li>
						<div 
							onClick = {() => onRouteChange('about')}
							className="shadow-1 grow about">About us
							</div>
					</li>
					<li>
						<div
						onClick = {() => onRouteChange('cart')}
						className = "grow hover-bg-white-20">Cart({cart.length})
						</div>
					</li>
					<li>
					{isSignedIn === false ?
							<div 
								onClick = {() => onRouteChange('signin')}
								className="grow">Sign In
							</div>
						:
						( user.isAdmin === false ?
							(droppedSignOut === false ?
						<div 
							className="hover-bg-white-20 pointer noDrop"
							onMouseEnter = {() => onDropSignOut()}
							onMouseLeave = {() => onHideSignOut()}>Hi,{user.name}
						</div>
							:
							(
					<ul className="bigDrop">
						<li>
							<div 
								className="hover-bg-white-20 pointer"
								onMouseEnter = {() => onDropSignOut()}
								onMouseLeave = {() => onHideSignOut()}>Hi,{user.name}
							</div>
						</li>
						<li>
							<div 
								className="hover-bg-white-20 pointer"
								onMouseEnter = {() => onDropSignOut()}
								onMouseLeave = {() => onHideSignOut()}
								onClick = {() => {onHideSignOut();onSignOut()}}><p className="grow">Sign Out</p>
							</div>
						</li>
					</ul>
							)
							)
						:
					(droppedSignOut === true ?
						<div
							className="grow hover-bg-white-20 pointer noDrop"
							onMouseEnter = {() => onDropSignOut()}
							onMouseLeave = {() => onHideSignOut()}>Hi,Admin
						</div>
						:
						(
						<ul className="bigDrop">
								<li>
									<div 
										className="hover-bg-white-20 pointer"
										onMouseEnter = {() => onDropSignOut()}
										onMouseLeave = {() => onHideSignOut()}>Hi,Admin
									</div>
								</li>
								<li>
									<div 
										className="hover-bg-white-20 pointer"
										onMouseEnter = {() => onDropSignOut()}
										onMouseLeave = {() => onHideSignOut()}
										onClick = {() => {onRouteChange('admin');onChangeAdminRoute('admin')}}>Admin Panel
									</div>
								</li>
								<li>
									<div 
										className="hover-bg-white-20 pointer"
										onMouseEnter = {() => onDropSignOut()}
										onMouseLeave = {() => onHideSignOut()}
										onClick ={() => {onHideSignOut();onSignOut()}}>Sign Out
									</div>
								</li>
						</ul>)
							)
							)
					}
					</li>
					</ul>
			</div>
		)
	}


export default Navigation;