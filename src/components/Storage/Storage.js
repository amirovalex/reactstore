import React from 'react';
import Item from '../Item/Item';
// import Scroll from '../Scroll/Scroll';
import StorageItem from '../StorageItem/StorageItem';
import 'tachyons';

class Storage extends React.Component {

	constructor(props){
		super();
		this.state = {
			storage:[]
		}
	}

	componentDidMount() {
	fetch('https://still-escarpment-99159.herokuapp.com/getstorage')
		.then(response => response.json())
		.then(items => this.setState({storage:items}))
}

	render() {
		const { adminRoute , onChangeAdminRoute , onItemIdChange ,
				itemId , quantity , onGetItemQuantity ,
				isEditing , onItemEdit , onCancelEdit ,
				image , onEditQuantityXs ,onEditQuantityS , 
				onEditQuantityM , onEditQuantityL , onEditQuantityXl , 
				onEditItemImage} = this.props
		const { storage } = this.state
		const indexItem = storage.findIndex(item => item.itemid === itemId)
		console.log(indexItem)
		return(<div>
				{adminRoute === 'storage' ?
					(<div id="rows" className="store">
						{storage.length === 0 ?
							<p className="tc">The Storage is empty</p>
						:
						(storage.map((item,i)=> {
							return(
								<div key={i} onClick={() => {onChangeAdminRoute('storageitem');onItemIdChange(storage[i].itemid)}}>
								<Item 
								key={i}
								id={storage[i].itemid}
								name={storage[i].itemname}
								price={storage[i].price+'$'}
								category={storage[i].category}
								src={storage[i].itemimage}
								 />
								</div>) 
								}
							)
						)
						}
					</div>
					) : 
					(adminRoute === 'storageitem' ?
						<StorageItem
							onChangeAdminRoute = {onChangeAdminRoute}
				            onEditQuantityXs = {onEditQuantityXs}
				            onEditQuantityS = {onEditQuantityS}
				            onEditQuantityM = {onEditQuantityM}
				            onEditQuantityL = {onEditQuantityL}
				            onEditQuantityXl = {onEditQuantityXl}
				            onEditItemImage = {onEditItemImage}
							image={image}
							onCancelEdit={onCancelEdit}
							isEditing={isEditing}
							onItemEdit={onItemEdit} 
							quantity={quantity}
							onGetItemQuantity={onGetItemQuantity}
							itemId={itemId}
							storage={storage}
							src={storage[indexItem].itemimage}
							name={storage[indexItem].itemname}
							price={storage[indexItem].price}/>
						:
						null)
				}
				</div>
			)
	}
}

export default Storage;