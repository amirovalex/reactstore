import React from 'react';
import Item from '../Item/Item';
import ItemPage from '../ItemPage/ItemPage'
import Scroll from '../Scroll/Scroll';
import './Store.css';
import 'tachyons';
import { useMediaQuery } from 'react-responsive'


const Store = ({onItemIdChange,itemId,route,items,category,filteredItems,onCategoryChange,onRouteChange,onCartAdd,onDropdownMenu,isDropdown,onCartPriceAdd}) => {
const indexItem = items.findIndex(item => item.itemid === itemId)
const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 800px)'
  })

	return(	
		<div className="storepage center tc">
		{route === "itempage" 
		? 	
			<ItemPage 
				onCartAdd={onCartAdd}
				src={items[indexItem].itemimage}
				name={items[indexItem].itemname}
				price={items[indexItem].price}
				itemId={itemId}
				onCartPriceAdd={onCartPriceAdd}
				items={items}
			/>
		:
			(<div className="grid">
				<div className="sidebar">
					<ul className="flex flex-column justify-center tc pa3">
						<li 
							onClick= {() => onCategoryChange('all')}
							className="grow">All
						</li>
						<li 
							onClick= {() => onCategoryChange('accessories')}
							className="grow">Accessories
						</li>
						<li 
							onClick= {() => onCategoryChange('topwear')}
							className="grow">Topwear
						</li>
						<li 
							onClick= {() => onCategoryChange('bottomwear')}
							className="grow">Bottomwear
						</li>
					</ul> 
				</div>
				{isTabletOrMobile && <>
					<div className="dropmenu tc">
					{isDropdown === false ?
						(<div className="menubutt tc" onClick={() => onDropdownMenu()}>
						<p className="">Menu</p>
						</div>)
					:
					(<div>
						<div className="menubutt tc" onClick={() => onDropdownMenu()}>
						<p>Menu</p>
						</div>
						<ul className="nopadd">
						<li 
							onClick= {() => onCategoryChange('all')}
							className="grow">All
						</li>
						<li 
							onClick= {() => onCategoryChange('accessories')}
							className="grow tc">Accessories
						</li>
						<li 
							onClick= {() => onCategoryChange('topwear')}
							className="grow tc">Topwear
						</li>
						<li 
							onClick= {() => onCategoryChange('bottomwear')}
							className="grow tc">Bottomwear
						</li>
						</ul>
						</div>
					)}
					</div></>}
			{category === "all" ? 
				<Scroll>
				<div id="rows" className="store center">
					{items.map((item,i)=> {
						return(
							<div className="center" onClick={() => {onRouteChange('itempage');onItemIdChange(items[i].itemid)}}>
							<Item 
							key={i}
							id={items[i].itemid}
							name={items[i].itemname}
							price={items[i].price+'$'}
							category={items[i].category}
							src={items[i].itemimage}
							onRouteChange={onRouteChange}
							onItemIdChange={onItemIdChange}/>
							 </div>) 
					})}
				</div>
				</Scroll> :
				<Scroll>
						<div id="rows" className="store center">
							{filteredItems.map((item,i)=> {
								return(
								<div className="center" onClick={() => {onRouteChange('itempage');onItemIdChange(filteredItems[i].itemid)}}>
								<Item 
								key={i}
								name={filteredItems[i].itemname}
								price={filteredItems[i].price+'$'}
								category={filteredItems[i].category}
								src={filteredItems[i].itemimage} 
								onRouteChange={onRouteChange}
								onItemIdChange={onItemIdChange}
								/>
								</div>) 
					})}
				</div>
				</Scroll>
			}
			</div>
		)}
		</div>

	)}
export default Store;