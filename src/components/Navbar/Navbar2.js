import React from 'react';
import './Navbar3.css';
import 'tachyons';
import MediaQuery from 'react-responsive';

class Navbar extends React.Component {

	constructor(props){
		super()
	}

	render(){
		let allQuantity = 0
		const addTotal = () => this.props.cart.map(item => {
			allQuantity += item.quantity
			return allQuantity
		})
		addTotal()
		console.log('props nav', this.props)
		console.log('allquantity nav', allQuantity)
		const {onRouteChange,onCategoryChange,isSignedIn,user,onDropSignOut,droppedSignOut,onSignOut,onHideSignOut,onChangeAdminRoute,onShowGrid,onUserReset,onClearCart} = this.props
	return(
		<div className="relative shadow-1 menu-area">
			<link href="https://fonts.googleapis.com/css?family=Grenze&display=swap" rel="stylesheet"/>
				<div  className = "grow logo" onClick = {() => {onRouteChange('home');this.props.history.push('/')}}>
					<span href="#">Logo</span>
				</div>
				<div  className = "part2">
				<div className = "selec hover-bg-white-20" onClick = {() => {onRouteChange('store'); onCategoryChange("all");this.props.history.push('/store/all');onShowGrid()}}>
					<span href="#">Store</span>
				</div>
				<div className = "selec hover-bg-white-20" onClick = {() => {onRouteChange('about');this.props.history.push('/about')}}>
					<span href="#">About</span>
				</div>
				<div className = "selec hover-bg-white-20" onClick = {() => {onRouteChange('cart');this.props.history.push('/cart')}}>
					<span href="#">Cart({allQuantity})</span>
				</div>
				{isSignedIn === false ?
					<div className = "hover-bg-white-20" onClick = {() => {onRouteChange('signin');this.props.history.push('/signin')}}>
						<span href="#">Sign In</span>
					</div>
				:	
				(user.isAdmin === false ?
								(<div className="part3 part4 hover-bg-white-20"
									onMouseEnter={() => onDropSignOut()}
									onMouseLeave={() => onHideSignOut()}>
									<span href="" className="hiAdmin">Hi,{user.name}</span>
									<div className={user.isAdmin === false ? "dropDown user" : "dropDown"} style={{display: droppedSignOut ? 'flex' : 'none'}}>
										<div className = "signUser hover-bg-white-40" onClick = {() => {onSignOut();this.props.history.push('/');onUserReset();onClearCart()}}><span href="#">Sign Out
											</span>
										</div>
									</div>
								</div>
								)
								:
								(
									<div className="padder">
										<div className="part3 part4"
										onClick={() => onDropSignOut()}
										onMouseLeave={() => onHideSignOut()}
										onMouseEnter={() => onDropSignOut()}>

										<span href="#" className="hiAdmin">Hi,Admin</span>
										<div className="dropDown" style={{display: droppedSignOut ? 'flex' : 'none'}}>
											<div className = "bord hover-bg-white-40" onClick = {() => {onRouteChange('admin');onChangeAdminRoute('admin');this.props.history.push('/admin')}}><span href="#">Admin Panel
												</span>
											</div>
											<div className = "hover-bg-white-40" onClick = {() => {onSignOut();this.props.history.push('/');onUserReset();onClearCart()}}><span href="">Sign Out
												</span>
											</div>
										</div>
									</div>
								</div>
							)		
						)
				}
			</div>
		</div>
	)
	}
}

export default Navbar;