import React from 'react';

const ShippingAdressBar = ({country,city,adress,index,fullname}) => {
	return(
			<div>
					<p>Shipping Adress: {country} , {city} , {adress} <br/>
					Postal index: {index}<br/>
					Full Name: {fullname}</p>
			</div>
		)
}

export default ShippingAdressBar;