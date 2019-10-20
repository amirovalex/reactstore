import React from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import 'tachyons';



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
				(
					unique.map((itemId)=> {return( 
					<CartItem
					onDeleteCartItem={onDeleteCartItem}
					unique={unique}
					cart={cart} 
					id={itemId}
					key={itemId}
					src={items.find(x => x.id === itemId).src}
					name={items.find(x => x.id === itemId).name}
					price={items.find(x => x.id === itemId).price}
					onCartPriceDelete={onCartPriceDelete}
			/>)}))}
			</div>
				<div className="buttonbox pa3">
					<div className="tw tc" onClick={() => onClearCart()}><p>Cancel Order</p></div>
					<div className="tw tc"><p>Proceed to Checkout</p></div>
				</div>
			</div>
		)
}

export default Cart;