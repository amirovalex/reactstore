import React from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import 'tachyons';



const Cart = ({cart,items,onClearCart,deleteItem}) => {
	let unique = [...new Set(cart)]
	return(
			<div className="cartbox pa3">
			<div className="item ba pa3 white">
			{ cart.length === 0 ? <p className="tc">Your Cart is empty.</p> :
				(
					unique.map((itemId)=> {return( 
					<CartItem
					deleteItem={deleteItem}
					unique={unique}
					cart={cart} 
					id={itemId}
					key={itemId}
					src={items.find(x => x.id === itemId).src}
					name={items.find(x => x.id === itemId).name}
					price={items.find(x => x.id === itemId).price}
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