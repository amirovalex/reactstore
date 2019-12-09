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
 		 GET_USER_ID ,
 		 CART_PRICE_ADD ,
 		 CART_PRICE_DELETE ,
 		 DROP_SIGN_OUT ,
 		 SIGN_OUT ,
 		 HIDE_SIGN_OUT ,
 		 GRAB_USER_INFO ,
 		 RESET_USER , 
 		 CHANGE_ADMIN_ROUTE ,
 		 GRAB_ITEM_QUANTITY ,
 		 EDIT_ITEM_STORAGE ,
 		 CANCEL_EDIT_ITEM ,
 		 ITEM_QUANTITY_XS_CHANGE ,
 		 ITEM_QUANTITY_S_CHANGE ,
 		 ITEM_QUANTITY_M_CHANGE ,
 		 ITEM_QUANTITY_L_CHANGE ,
 		 ITEM_QUANTITY_XL_CHANGE ,
 		 ITEM_IMAGE_CHANGE ,
 		 ADD_ITEM_SIZE ,
 		 SHOW_GRID , 
 		 HIDE_GRID
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

export const changeItemSize = (size) => ({
	type: ADD_ITEM_SIZE,
	payload: size
})

export const requestItems = (database) => ({
	type: REQUEST_ITEMS,
	payload: database
})

export const logIn = () => ({
	type: SIGN_IN
})

export const addCart = (item) => ({
	type: CART_ADD,
	payload: item
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

export const addCartPrice = (price) => ({
	type:CART_PRICE_ADD,
	payload: price
})

export const deleteCartPrice = (price) => ({
	type:CART_PRICE_DELETE,
	payload: price
})

export const dropSignedOut = () => ({
	type:DROP_SIGN_OUT
})

export const hideSignOut = () => ({
	type:HIDE_SIGN_OUT
})

export const signOut = () => ({
	type:SIGN_OUT
})

export const getUserInfo = (user) => ({
	type:GRAB_USER_INFO,
	payload: user
})

export const changeAdminRoute = (route) => ({
	type:CHANGE_ADMIN_ROUTE,
	payload:route
})

export const getItemQuantity = (item) => ({
	type:GRAB_ITEM_QUANTITY,
	payload:item
})

export const editQuantityXs = (obj) => ({
	type:ITEM_QUANTITY_XS_CHANGE,
	payload:obj
})

export const editQuantityS = (obj) => ({
	type:ITEM_QUANTITY_S_CHANGE,
	payload:obj
})

export const editQuantityM = (obj) => ({
	type:ITEM_QUANTITY_M_CHANGE,
	payload:obj
})

export const editQuantityL = (obj) => ({
	type:ITEM_QUANTITY_L_CHANGE,
	payload:obj
})

export const editQuantityXl = (obj) => ({
	type:ITEM_QUANTITY_XL_CHANGE,
	payload:obj
})

export const editItemImage = (obj) => ({
	type:ITEM_IMAGE_CHANGE,
	payload:obj
})

export const itemEdit = () => ({
	type:EDIT_ITEM_STORAGE
})

export const cancelEdit = () => ({
	type:CANCEL_EDIT_ITEM
})

export const showGrid = () => ({
	type:SHOW_GRID
})

export const hideGrid = () => ({
	type:HIDE_GRID
})

export const resetUser = () => ({
	type:RESET_USER
})