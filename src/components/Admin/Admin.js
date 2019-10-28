import React from 'react';
import AddItem from '../AddItem/AddItem';
import Storage from '../Storage/Storage';
import 'tachyons';

const Admin = ({adminRoute,onChangeAdminRoute,onItemIdChange,itemId,quantity,onGetItemQuantity,isEditing,onItemEdit,onCancelEdit,image,onEditQuantityXs,onEditQuantityS,onEditQuantityM,onEditQuantityL,onEditQuantityXl,onEditItemImage}) => {
		return(
		<div>
		{adminRoute === 'admin' ?
		<div className="tc w5 pa4 ma3 center">
			<div>
				<div 
				className="hover-bg-white-20  pa3 pointer tc"
				onClick={() => onChangeAdminRoute('additem')}>
					<p>Add items to storage</p>
				</div>
				<div className="hover-bg-white-20 pa3 pointer">
					<p>Check items for shipping</p>
				</div>
				<div className="hover-bg-white-20 pa3 pointer"
				onClick={() => onChangeAdminRoute('storage')}>
					<p>Check storage</p>
				</div>
			</div>
		</div>
			:
			(adminRoute === 'additem' ?
				<div className="tc w5 pa4 ma3 center">
					<AddItem />
				</div>
				: (adminRoute === 'storage' ?
					<div className="tc pa4 ma3 center">
						<Storage
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
							onItemIdChange={onItemIdChange}
	                  		itemId={itemId} 
							adminRoute={adminRoute}
							onChangeAdminRoute={onChangeAdminRoute}/>
					</div>
					: (adminRoute === 'storageitem' ?
						<div className="tc pa4 ma3 center">
							<Storage
								onEditQuantityXs = {onEditQuantityXs}
					            onEditQuantityS = {onEditQuantityS}
					            onEditQuantityM = {onEditQuantityM}
					            onEditQuantityL = {onEditQuantityL}
					            onEditQuantityXl = {onEditQuantityXl}
					            onEditItemImage = {onEditItemImage}
								image={image} 								onCancelEdit={onCancelEdit}
								isEditing={isEditing}
								onItemEdit={onItemEdit}
								quantity={quantity}
								onGetItemQuantity={onGetItemQuantity}
								onItemIdChange={onItemIdChange}
		                  		itemId={itemId}
								adminRoute={adminRoute}
								onChangeAdminRoute={onChangeAdminRoute}/> 
						</div> : null)
			))
		}
		</div>
		)
	}

export default Admin;