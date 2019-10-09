import React from 'react';
import 'tachyons';
import './CartItem.css'

const CartItem = ({src,name,price,cart,unique,id,deleteItem}) => {
	let deleteIndex = unique.indexOf(id)

	// cart.map((item,i)=> {
	// 	if (id === i) {
	// 		deleteIndex =
	// 	}
	// })

		let count = 0;
		for (let i = 0; i < cart.length ; i++){
			if(cart[i] === id) {
				count += 1
			}
		}

	return (
		<div className="itembox ba white pa2">
			<img 
				width="auto" 
				height="100%" 
				alt="item" src={src}/>
			<p>{name}</p>
			<p onClick = {() => deleteItem(deleteIndex)} className='self'>[X]</p>
			<p>Quantity : {count}</p>
			<p>Price : {Number(price)*count+'$'}</p>
		</div>
		)
}

export default CartItem;