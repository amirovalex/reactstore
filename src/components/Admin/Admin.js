import React from 'react'
import 'tachyons';

const Admin = () => {
	return(
			<div>
				<div>
					<p>Name</p>
					<input type="text" name="name"/>
				</div>
				<div>
					<p>Price</p>
					<input type="text" name="price"/>
				</div>
				<div>
					<p>Category</p>
					<input type="text" name="category"/>
				</div>
				<div>
					<p>ID</p>
					<input type="text" name="id"/>
				</div>
				<div>
					<p>Img src</p>
					<input type="text" name="src"/>
				</div>
				<div>
					<p>Color</p>
					<input type="text" name="color"/>
				</div>
			</div>
		)
}

export default Admin;