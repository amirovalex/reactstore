import React from 'react';
import ItemList from '../ItemList/ItemList';
import ItemPage from '../ItemPage/ItemPage';
import Scroll from '../Scroll/Scroll';
import { Route,Switch } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './Store.css';
import 'tachyons';
import CategoryPage from '../CategoryPage/CategoryPage'


class Store extends React.Component {
	constructor(props){
		super()	
	}



componentWillUnmount() {
	this.props.onShowGrid()
}

render(){
	console.log(this.props)
	const {itemId,items,onCartAdd,onCartPriceAdd,onChangeItemSize,itemsize,onRequestItems} = this.props
    const indexItem = items.findIndex(item => item.itemid === itemId)

	return(	
		<div className="storepage center tc">
			<div className="grid" style={{display: this.props.grid ? 'grid' : 'none' }}>
				<Switch>
				<Route exact path={`/store/all`}
				render={(props) => <Menu 
					{...props}
				isDropdown={this.props.isDropdown}
				onDropdownMenu={this.props.onDropdownMenu}/>}
				/>
				<Route exact path={`/store/:categoryId`}
				render={(props) => <Menu 
					{...props}
				isDropdown={this.props.isDropdown}
				onDropdownMenu={this.props.onDropdownMenu}/>}
				/>
				</Switch>
				<Scroll>
				<Switch>
				<Route exact path={`/store/all`}
					render={(props)=> <ItemList
							{...props}
							items={this.props.items}
							onRouteChange={this.props.onRouteChange}
							onItemIdChange={this.props.onItemIdChange}
							onHideGrid={this.props.onHideGrid}/>}
				/>
				<Route exact path={`/store/:categoryId`}
						render={(props)=> <CategoryPage
							{...props}
							onHideGrid={this.props.onHideGrid}
							items={this.props.items}
							onRouteChange={this.props.onRouteChange}
							onItemIdChange={this.props.onItemIdChange}
							/>}
				/>
				</Switch>			
				</Scroll>
			</div>
			<div>
				<Switch>
				<Route exact path={`/store/:categoryId/:itemId`}
					render={(props)=> <ItemPage
							{...props}
							onCartAdd={onCartAdd}
							items={items}
							onRequestItems={this.props.onRequestItems}
							src={items[indexItem].itemimage}
							name={items[indexItem].itemname}
							price={items[indexItem].price}
							itemId={itemId}
							onCartPriceAdd={onCartPriceAdd}
							onChangeItemSize={onChangeItemSize}
							itemsize={itemsize}/>
							}
				/>
				<Route path={`/store/all/:itemId`}
					render={(props)=> <ItemPage
							{...props}
							items={items}
							onCartAdd={onCartAdd}
							onRequestItems={onRequestItems}
							src={items[indexItem].itemimage}
							name={items[indexItem].itemname}
							price={items[indexItem].price}
							itemId={itemId}
							onCartPriceAdd={onCartPriceAdd}
							onChangeItemSize={onChangeItemSize}
							itemsize={itemsize}/>
							}
				/>
				</Switch> 
			</div>
		</div>
		)
		}
	}
export default Store;