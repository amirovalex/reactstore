import React from 'react';
import 'tachyons';
import './CartItem.css'

const CartItem = ({src,name,price,cart,unique,id,onDeleteCartItem,onCartPriceDelete,size,quantity,item}) => {
	let deleteIndex = cart.findIndex(item => item.itemid === id);
	console.log("id",id)
	console.log(deleteIndex)

	return (
		<div className="itembox ba white pa2">
			<img 
				width="auto" 
				height="100%" 
				alt="item" src={src}/>
			<p>{name}</p>
			<div classname="flexed">
				<div className="flexed_item">
					<p className="size">Size: {size.toUpperCase()}</p>
				</div>
				<div className="flexed_item flexed_item2">
					<p onClick = {() => {onDeleteCartItem(deleteIndex);onCartPriceDelete(price)}} className='self'>[X]</p>
				</div>
			</div>
			<p>Quantity : {quantity}</p>
			<p>Price : {Number(price)*quantity+'$'}</p>
		</div>
		)
}

export default CartItem;