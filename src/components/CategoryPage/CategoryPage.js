import React from 'react';
import { Route } from 'react-router-dom';
import 'tachyons';
import Item from '../Item/Item'

const CategoryPage = (props) => {
	const filteredItems = props.items.filter(item => {
      return (item.category === props.match.params.categoryId)
    })
	console.log('categ',props)
	return(<div id='rows 'className='store center'>
		{filteredItems.map((item,i)=> {
						return(
							<div className="center" onClick={() => {props.history.push(`${props.match.url}/${filteredItems[i].itemid}`);props.onItemIdChange(filteredItems[i].itemid);props.onHideGrid()}}>
								<Route path={`${props.match.path}`}
									render={(props) => <Item
								{...props}
								key={i}
								id={filteredItems[i].itemid}
								name={filteredItems[i].itemname}
								price={filteredItems[i].price+'$'}
								category={filteredItems[i].category}
								src={filteredItems[i].itemimage}
								onRouteChange={props.onRouteChange}
								onItemIdChange={props.onItemIdChange}
								/>
								} />
							 </div>) 
					})}
	</div>)
}
export default CategoryPage;