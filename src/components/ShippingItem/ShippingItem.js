import React from 'react';

const ShippingItem = ({name,quantity,country,cartid}) => {
	return (
	<div>
		<div>
			<div>
				<p>Name:{name}</p>
			</div>
			<div>
				<p>Quantity:{quantity} items</p>
			</div>
		</div>
		<div>
			<div>
				<p>Country:{country}</p>
			</div>
			<div>
				<p>Cart ID:{cartid}</p>
			</div>
		</div>
	</div>
	)
}

export default ShippingItem