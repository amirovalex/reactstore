import React from 'react';
import ShippingCartItem from '../ShippingCartItem/ShippingCartItem';
import ShippingAdressBar from '../ShippingAdressBar/ShippingAdressBar';

class ShippingCart extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			cartItems:[],
			shippingAdress:''
		}
	}

		 componentDidMount(){
			fetch(`https://still-escarpment-99159.herokuapp.com/shipping/${this.props.cartid}`)
				.then(response => {
					if(response.status === 200) {
						return response.json()
					}
					else {
						console.log('something went wrong')
					}})
				.then(items => {
						this.setState({shippingAdress:{
							city:items[0].city,
							country:items[0].country,
							adress:items[0].adress,
							fullname:items[0].fullname,
							index:items[0].index
						}})
						this.setState({cartItems:items})} )
		}
	render(){
		const { cartItems , shippingAdress } = this.state
		console.log('cartitems',cartItems)
		return (
			<div>
				<div>
					<ShippingAdressBar 
						country={shippingAdress.country}
						city={shippingAdress.city}
						adress={shippingAdress.adress}
						index={shippingAdress.index}
						fullname={shippingAdress.fullname}/>
				</div>
				{cartItems.map(item =>
					<div
					className="pa3 center hover-bg-white-20 pointer">
						<ShippingCartItem 
							size={item.itemsize}
							itemid={item.itemid}
							quantity={item.quantity}
							imagesrc={item.itemimage}/>
					</div>
				)}
			</div>
		)
	}
}

export default ShippingCart;