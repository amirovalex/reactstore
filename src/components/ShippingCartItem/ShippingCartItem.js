import React from 'react';
import './ShippingCartItem.css'

const ShippingCartItem = ({size,itemid,quantity,imagesrc}) => {
	return (
		<div className="flexed">
			<img width="50%" height="auto" alt="itemimage" src={imagesrc}/>
				<div>
					<p>Size:{size}</p>
				</div>
				<div>
					<p>Quantity:{quantity}</p>
			</div>
			<div>
				<p>Item ID:{itemid}</p>
			</div>
		</div>
		)
}

export default ShippingCartItem;