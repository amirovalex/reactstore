import React from 'react';
import Item from '../Item/Item'
import 'tachyons'
import './ItemList.css'

const ItemList = (props) => {
	console.log('items',props.items)
	return(<div id='rows 'className='store center'>
		{props.items.map((item,i)=> {
						return(
							<div className="center" onClick={() => {props.history.push(`all/${item.itemid}`);props.onItemIdChange(props.items[i].itemid);props.onHideGrid()}}>
								<Item
								key={i}
								id={props.items[i].itemid}
								name={props.items[i].itemname}
								price={props.items[i].price+'$'}
								category={props.items[i].category}
								src={props.items[i].itemimage}
								onRouteChange={props.onRouteChange}
								onItemIdChange={props.onItemIdChange}/>
							 </div>) 
					})}
	</div>)
}

export default ItemList;