import React from 'react';
import 'tachyons';
import './ItemPage.css'

const ItemPage = ({src,name,price,itemId,onCartAdd,onCartPriceAdd,items}) => {

// const itemPrice = price
	return (
			<div className="tc pa3 itemflex">
				<img className="" width="40%" alt ="item" src={src}/>
				<div className="" width="40%">
					<h1 className="white">{name}</h1>
					<h3>{price+'$'}</h3>
					<p>Description</p>
					<div 
						onClick={() => {onCartAdd(itemId);onCartPriceAdd(Number(price))}}
						className='white buybutt'>Buy</div>
				</div>
			</div>
		)
}

export default ItemPage;
