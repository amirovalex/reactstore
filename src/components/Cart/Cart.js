import React from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import 'tachyons';
import StripeCheckoutButton from '../StripeButton/StripeButton';



const Cart = ({cart,items,onClearCart,onDeleteCartItem,onCartPriceDelete,cartprice}) => {
	let unique = [...new Set(cart)]
	// function handleToken(token) {
	// 	fetch('localhost:3000/checkout', {
	// 		method:'post',
	// 		body: {
	// 			""
	// 		}
	// 	})
	// 	console.log({token,adresses})
	// }

	return(
			<div className="cartbox pa3">
			<div className="item ba pa3 white">
			{ unique.length === 0 ? <p className="tc">Your Cart is empty.</p> :
				(<div>
					{unique.map((itemId)=> {return( 
					<CartItem
					onDeleteCartItem={onDeleteCartItem}
					unique={unique}
					cart={cart} 
					id={itemId}
					key={itemId}
					src={items.find(x => x.itemid === itemId).itemimage}
					name={items.find(x => x.itemid === itemId).itemname}
					price={items.find(x => x.itemid === itemId).price}
					onCartPriceDelete={onCartPriceDelete}
			/>)})}
					<p>Total: {cartprice} </p>
					</div>)}
			</div>
				<div className="buttonbox pa3 center">
					<div className="tw tc" onClick={() => onClearCart()}><p>Cancel Order</p></div>
					<StripeCheckoutButton
						price={cartprice}
						className="center"
					/>
					<div className="test-warning">
						*Please use the following test credit card for payment*
						<br/>
						4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
					</div>
				</div>
			</div>
		)
}

export default Cart;