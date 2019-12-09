import React from 'react';
import './StorageItem.css'

class StorageItem extends React.Component {

	componentDidMount() {
		fetch(`https://still-escarpment-99159.herokuapp.com/getquantity/${this.props.itemId}`)
			.then(response => response.json())
			.then(item => this.props.onGetItemQuantity(item))
			console.log(this.state)
	}

	onSaveEdits = () => {
		fetch(`https://still-escarpment-99159.herokuapp.com/updatequantity/${this.props.itemId}`,
			{
				method: 'put',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
						imagesrc:this.props.image,
						xs:this.props.quantity.xs,
						s:this.props.quantity.s,
						m:this.props.quantity.m,
						l:this.props.quantity.l,
						xl:this.props.quantity.xl,})
			})
				.then(response => response.json())
				.then(responseSuccess => {
					if (responseSuccess === 'success') {
						this.props.onCancelEdit()
						alert('Item edited')
					} else {
						this.props.onCancelEdit()
						alert('Failed to add item')
					}
					}
				).catch(err => console.log(err))
	}

	onDeleteItem = () => {
		fetch(`https://still-escarpment-99159.herokuapp.com/deleteitem/${this.props.itemId}`,
		{
			method:	'delete',
			headers: {'Content-Type':'application/json'}
		})
		.then(response => response.json())
		.then(responseSuccess => {
			if (responseSuccess === 'success') {
				alert('Item deleted')
			} else {
				alert('Failed to delete')
			}
		}).catch(err => console.log(err))
	}

render() {
	const { quantity ,
			src , name , price ,
			isEditing , onItemEdit , onCancelEdit ,
			image , onEditQuantityXs ,onEditQuantityS , 
			onEditQuantityM , onEditQuantityL , onEditQuantityXl , 
			onEditItemImage , onChangeAdminRoute } = this.props
		return (
			<div className="tc pa3 itemflex">
				<img className="" width="40%" alt ="item" src={src}/>
				<div className="center" width="40%">
					<h1 className="white">{name}</h1>
					<h3>{price+'$'}</h3>
					{isEditing === false ?
					(<div className="center">
						<p>Storage Quantity:</p>
							<ul className="center pa0">
								<li>XS:{quantity.xs}</li>
								<li>S:{quantity.s}</li>
								<li>M:{quantity.m}</li>
								<li>L:{quantity.l}</li>
								<li>XL:{quantity.xl}</li>
							</ul>
					</div>)
					:
					(<div className="center">
						<p>Storage Quantity:</p>
							<ul className="center pa0">
								<li>XS:
									<input 
										onChange={onEditQuantityXs}
										type="text" className="w2" defaultValue={quantity.xs}/>
								</li>
								<li>S:
									<input 
										onChange={onEditQuantityS}
										type="text" className="w2" defaultValue={quantity.s}/>
								</li>
								<li>M:
									<input 
										onChange={onEditQuantityM}
										type="text" className="w2" defaultValue={quantity.m}/>
								</li>
								<li>L:
									<input 
										onChange={onEditQuantityL}
										type="text" className="w2" defaultValue={quantity.l}/>
								</li>
								<li>XL:
									<input 
										onChange={onEditQuantityXl}
										type="text" className="w2" defaultValue={quantity.xl}/>
								</li>
								<li>Item image link:
									<input 
										onChange={onEditItemImage}
										type="text" className="w5" defaultValue={image}/>
								</li>
								<li 
									className="hover-bg-white-20 pa3 pointer"
									onClick={() => this.onSaveEdits()}>Save Changes</li>
							</ul>
					</div>)
					}
				</div>
				<div>
					<p 
						className="hover-bg-white-20 pa3 pointer"
						onClick={() => onItemEdit()}>Edit Item</p>
					<p 
						className="hover-bg-white-20 pa3 pointer"
						onClick={() => onCancelEdit()}>Cancel</p>
					<p 
						className="hover-bg-white-20 pa3 pointer"
						onClick={() => {onChangeAdminRoute('storage'); this.onDeleteItem()}}>Delete</p>
				</div>
			</div>
		)
	}
}

export default StorageItem;