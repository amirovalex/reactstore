import React from 'react';
import './AddItem.css';
import 'tachyons';

let itemId = ''

const initialState = {
			addItemName:'',
			addItemPrice:'',
			addItemCategory:'',
			addItemQuantity:{"xs":"0","s":"0","m":"0","l":"0","xl":"0"},
			addItemId:'',
			addItemSrc:'',
			addItemColor:''
		}

class AddItem extends React.Component {

	constructor(){
		super();
		this.state = initialState
	}

	componentDidMount() {
	fetch('http://localhost:3000/getstorage')
		.then(response => response.json())
		.then(items => itemId = items[items.length-1].itemid + 1)
}

		onItemNameChange = (event) => {
		this.setState({addItemName: event.target.value})
	}

		onItemPriceChange = (event) => {
		this.setState({addItemPrice: event.target.value})
	}

		onItemCategoryChange = (event) => {
		this.setState({addItemCategory: event.target.value})
	}

	onItemQuantityXsChange = (event) => {
		this.setState({addItemQuantity: {...this.state.addItemQuantity,
			"xs":event.target.value}})
	}

	onItemQuantitySChange = (event) => {
		this.setState({addItemQuantity: {...this.state.addItemQuantity,
			"s":event.target.value}})
	}

	onItemQuantityMChange = (event) => {
		this.setState({addItemQuantity: {...this.state.addItemQuantity,
			"m":event.target.value}})
	}

	onItemQuantityLChange = (event) => {
		this.setState({addItemQuantity: {...this.state.addItemQuantity,
			"l":event.target.value}})
	}

	onItemQuantityXlChange = (event) => {
		this.setState({addItemQuantity: {...this.state.addItemQuantity,
			"xl":event.target.value}})
	}

		onItemIdChange = (event) => {
		this.setState({addItemId: event.target.value})
	}

		onItemSrcChange = (event) => {
		this.setState({addItemSrc: event.target.value})
	}

		onItemColorChange = (event) => {
		this.setState({addItemColor: event.target.value})
	}

	onResetState = () => {
		this.setState(initialState)
		this.refs.Name.value=''
		this.refs.Price.value=''
		this.refs.Category1.checked=false
		this.refs.Category2.checked=false
		this.refs.Category3.checked=false
		this.refs.QuantityXs.value=''
		this.refs.QuantityS.value=''
		this.refs.QuantityM.value=''
		this.refs.QuantityL.value=''
		this.refs.QuantityXl.value=''
		this.refs.Id.value=''
		this.refs.ImgSrc.value=''
		this.refs.Color.value=''
	}

	onAddItem = () => {
		fetch('http://localhost:3000/additem',
			{
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
						name:this.state.addItemName,
						price:this.state.addItemPrice,
						category:this.state.addItemCategory,
						quantity:JSON.stringify(this.state.addItemQuantity),
						itemid:this.state.addItemId,
						imgsrc:this.state.addItemSrc,
						color:this.state.addItemColor})
			})
				.then(response => response.json())
				.then(responseSuccess => {
					if (responseSuccess === 'success') {
						this.onResetState()
						alert('Item added')
					} else {
						this.onResetState()
						alert('Failed to add item')
					}
					}
				).catch(err => console.log(err))
	}

	render() {
			return(
			<div id="additem" className="center w5">
				<div>
					<p>Name</p>
					<input type="text" name="name" ref="Name"
						onChange={this.onItemNameChange}/>
				</div>
				<div>
					<p>Price</p>
					<input type="text" name="price" ref="Price"
						onChange={this.onItemPriceChange}/>
				</div>
				<div className="pv2 center tc"
					onChange={this.onItemCategoryChange}>
					<p>Category</p>
					<div className="pv1">
					<input ref="Category1" type="radio" name="category" value="topwear"/>
					Topwear
					</div>
					<div className="pv1">
					<input ref="Category2" type="radio" name="category" value="bottomwear"/>
					Bottomwear
					</div>
					<div className="pv1">
					<input ref="Category3" type="radio" name="category" value="accessories"/>
					Accessories
					</div>
				</div>
				<p>Quantity</p>
				<div className="quantitygrid pv2">
					<div>
					<p>XS</p>
					<input className="w2"type="text" ref="QuantityXs" name="quantity"
						onChange={this.onItemQuantityXsChange}/>
					</div>
					<div>
					<p>S</p>
					<input type="text" className="w2" ref="QuantityS" name="quantity"
						onChange={this.onItemQuantitySChange}/>
					</div>
					<div>
					<p>M</p>
					<input type="text" className="w2" ref="QuantityM" name="quantity"
						onChange={this.onItemQuantityMChange}/>
					</div>
					<div>
					<p>L</p>
					<input type="text" className="w2" ref="QuantityL" name="quantity"
						onChange={this.onItemQuantityLChange}/>
					</div>
					<div>
					<p>XL</p>
					<input type="text" className="w2" ref="QuantityXl" name="quantity"
						onChange={this.onItemQuantityXlChange}/>
					</div>
				</div>
				<div>
					<p>ID</p>
					<input type="text" name="id" ref="Id" value={itemId}
						onChange={this.onItemIdChange}/>
				</div>
				<div>
					<p>Img src</p>
					<input type="text" name="src" ref="ImgSrc"
						onChange={this.onItemSrcChange}/>
				</div>
				<div>
					<p>Color</p>
					<input type="text" name="color" ref="Color"
						onChange={this.onItemColorChange}/>
				</div>
				<div className="pv3 ma2 w3 center hover-bg-white-20 pointer">
					<div onClick={this.onAddItem}>
						<p>Add Item</p>
					</div>
				</div>
				{console.log(this.state)}
			</div>
		)
	}
}

export default AddItem;