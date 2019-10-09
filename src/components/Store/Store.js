import React from 'react';
import Item from '../Item/Item';
import ItemPage from '../ItemPage/ItemPage'
import Scroll from '../Scroll/Scroll';
import './Store.css';
import 'tachyons';
import { useMediaQuery } from 'react-responsive'


const Store = ({idChange,itemId,route,items,category,filteredItems,categoryChange,onRouteChange,cartAdd,onDropdownMenu,isDropdown}) => {
const indexItem = items.findIndex(item => item.id === itemId)
const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 800px)'
  })

	return(	
		<div className="storepage">
		{route === "itempage" 
		? 	
			<ItemPage 
				cartAdd={cartAdd}
				src={items[indexItem].src}
				name={items[indexItem].name}
				price={items[indexItem].price}
				itemId={itemId}
			/>
		:
			(<div className="grid">
				<div className="sidebar">
					<ul className="flex flex-column justify-center tc pa3">
						<li 
							onClick= {() => categoryChange('accessories')}
							className="grow">Accessories
						</li>
						<li 
							onClick= {() => categoryChange('topwear')}
							className="grow">Topwear
						</li>
						<li 
							onClick= {() => categoryChange('bottomwear')}
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
						<ul class="nopadd">
						<li 
							onClick= {() => categoryChange('accessories')}
							className="grow tc">Accessories
						</li>
						<li 
							onClick= {() => categoryChange('topwear')}
							className="grow tc">Topwear
						</li>
						<li 
							onClick= {() => categoryChange('bottomwear')}
							className="grow tc">Bottomwear
						</li>
						</ul>
						</div>
					)}
					</div></>}
			{category === "all" ? 
				<Scroll>
				<div id="rows" className="store">
					{items.map((item,i)=> {
						return(<Item 
							key={i}
							id={items[i].id}
							name={items[i].name}
							price={items[i].price+'$'}
							category={items[i].category}
							src={items[i].src}
							onRouteChange={onRouteChange}
							idChange={idChange}
							 />) 
					})}
				</div>
				</Scroll> :
				<Scroll>
						<div id="rows" className="store">
							{filteredItems.map((item,i)=> {
								return(<Item 
								key={i}
								id={filteredItems[i].id}
								name={filteredItems[i].name}
								price={filteredItems[i].price+'$'}
								category={filteredItems[i].category}
								src={filteredItems[i].src} 
								onRouteChange={onRouteChange}
								idChange={idChange}
							/>) 
					})}
				</div>
				</Scroll>
			}
			</div>
		)}
		</div>

	)}
export default Store;