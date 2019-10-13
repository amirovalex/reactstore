import React from 'react';
import 'tachyons';

const Item = ({onItemIdChange,name,category,id,src,price,onRouteChange}) => {
	return (
			<div 
				onClick={() => {onRouteChange('itempage'); onItemIdChange(id)}}
				className="tc pv3 flexer grow">
			<img alt='clothing' width="200px" height="auto" src={src} />
			<div>
				<h3>{name}</h3>
				<p>{price}</p>
			</div>
			</div>
		)
}

export default Item;