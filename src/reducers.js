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
 		 OPEN_ADMIN_PANEL ,
 		 GET_USER_ID
 		} from './constants.js';

const initialStateRoute = {
      route: 'home',
}

export const changeRoute = (state=initialStateRoute,action={}) => {
	switch(action.type) {
		case CHANGE_ROUTE:
			return {...state,route:action.payload}
		default:
			return state;
	}
} 

const initialStateCategory = {
      isDropdown: false,
}

export const changeCategory = (state=initialStateCategory,action={}) => {
	switch(action.type) {
		case CATEGORY_CHANGE:
			return {...state,category:action.payload}
		default:
			return state;
	}
}

const initialStateMenu = {
      isDropdown: false,
}

export const dropdownMenu = (state=initialStateMenu,action={}) => {
	switch(action.type) {
		case DROPDOWN_MENU:
			return {...state,isDropdown: !state.isDropdown}
		default:
			return state;
	}
}

const initialStateId = {
      itemId: ''
}

export const idChange = (state=initialStateId,action={}) => {
	switch(action.type) {
		case ITEM_ID_CHANGE:
			return {...state,itemId:action.payload}
		default:
			return state;
	}
} 

const initialStateItems = {
	  items:[]
}

export const requestItems = (state=initialStateItems,action={}) => {
	switch(action.type) {
		case REQUEST_ITEMS:
			return {...state,items:action.payload}
		default:
			return state;
	}
}

const initialStateSign = {
      isSignedIn: false,
}

export const signIn = (state=initialStateSign,action={}) => {
	switch(action.type) {
		case SIGN_IN:
			return {...state,isSignedIn:true}
		default:
			return state;
	}
}

const initialStateCart = {
      cart: [],
}

export const cartAdd = (state=initialStateCart,action={}) => {
	switch(action.type) {
		case CART_ADD:
			return {...state,cart:[...state.cart,action.payload]}
		case CLEAR_CART:
			return {...state,cart:[]}
		case DELETE_ITEM:
			return {...state,cart:state.cart.filter((item,j) => action.payload !== j)}
		default:
			return state;
	}
}

const initialStateUserId = {
	userId: '',
	isAdmin: false
}

export const userId = (state=initialStateUserId,action={}) => {
	switch (action.type) {
		case GET_USER_ID:
			return {...state,userId:action.payload}
		default:
			return state;
	}
}