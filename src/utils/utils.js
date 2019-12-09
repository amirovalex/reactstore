export const addItemToCart = (cartItems,cartItemToAdd) => {
		const existingCartItem = cartItems.find(
			cartItem => (cartItem.itemid === cartItemToAdd.itemid && cartItem.itemsize === cartItemToAdd.itemsize)
			);
		if (existingCartItem) {
			return cartItems.map(cartItem =>
				(cartItem.itemid === cartItemToAdd.itemid && cartItem.itemsize === cartItemToAdd.itemsize)
				? {...cartItem,quantity: cartItem.quantity + 1}
				: cartItem
				)
		}
		console.log('existing',existingCartItem)

		return [...cartItems, { ...cartItemToAdd, quantity:1}]
	}