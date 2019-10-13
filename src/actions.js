import { 
 		 CHANGE_ROUTE , 
 		 CATEGORY_CHANGE , 
 		 DROPDOWN_MENU , 
 		 ITEM_ID_CHANGE ,
 		 REQUEST_ITEMS ,
 		 SIGN_IN ,
 		 CART_ADD ,
 		 CLEAR_CART ,
 		 DELETE_ITEM ,
 		 GET_USER_ID
 		} from './constants.js';

export const routeChange = (text) => ({
	type: CHANGE_ROUTE,
	payload: text
})

export const categoryChange = (category) => ({
	type: CATEGORY_CHANGE,
	payload: category
})

export const dropMenuDown = () => ({
	type: DROPDOWN_MENU
})

export const changeItemId = (id) => ({
	type: ITEM_ID_CHANGE,
	payload: id
})

export const requestItems = (database) => ({
	type: REQUEST_ITEMS,
	payload: database
})

export const logIn = () => ({
	type: SIGN_IN
})

export const addCart = (id) => ({
	type: CART_ADD,
	payload: id
})

export const clearCart = () => ({
	type: CLEAR_CART
})

export const deleteCartItem = (id) => ({
	type: DELETE_ITEM ,
	payload: id
})

export const getUserId = (id) => ({
	type: GET_USER_ID,
	payload: id
})

// export const toAdmin = () => ({
// 	type: 
// })
