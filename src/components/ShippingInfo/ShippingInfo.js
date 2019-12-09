import React from 'react';
import ShippingItem from '../ShippingItem/ShippingItem';
import ShippingCart from '../ShippingCart/ShippingCart';
import 'tachyons';

class ShippingInfo extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			shippingCart:[],
			shippingRoute:'main',
			cartId:''
		}
	}

 componentDidMount(){
	fetch('https://still-escarpment-99159.herokuapp.com/shippingitems/')
		.then(response => {
			if(response.status === 200) {
				return response.json()
			}
			else {
				console.log('something went wrong')
			}})
		.then(items => this.setState({shippingCart:items}))
		.then(smth => console.log(this.state.shippingCart))
} 

	onShippingRouteChange = (route) => {
		if (route === 'cart') {
			this.setState({shippingRoute:'cart'})
		}
	}

	onCartIdChange = (id) => {
		this.setState({cartId:id})
		console.log('cartid',this.state.cartId)
	}

	render(){
		return (
			<div>
			{ this.state.shippingRoute === 'cart' ?
				<ShippingCart
				cartid={this.state.cartId}/>
			:
			(
				<div className="pointer">
			{this.state.shippingCart.map(item => 
				<div 
					onClick={() => {this.onShippingRouteChange('cart');this.onCartIdChange(item.cartid)}}
					className="pa3 center hover-bg-white-20 pointer">
				<ShippingItem
				userid={item.userid} 
				name={item.fullname}
				quantity={item.quantity}
				cartid={item.cartid}
				country={item.country}
				/>
				</div>)}
			</div>
			)
		}
		</div>	
		)
	}
}

export default ShippingInfo;