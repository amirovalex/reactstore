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
 		 CHANGE_ADMIN_ROUTE ,
 		 GRAB_ITEM_QUANTITY ,
 		 EDIT_ITEM_STORAGE ,
 		 CANCEL_EDIT_ITEM ,
 		 GRAB_ITEM_IMAGE ,
 		 ITEM_QUANTITY_XS_CHANGE ,
 		 ITEM_QUANTITY_S_CHANGE ,
 		 ITEM_QUANTITY_M_CHANGE ,
 		 ITEM_QUANTITY_L_CHANGE ,
 		 ITEM_QUANTITY_XL_CHANGE ,
 		 ITEM_IMAGE_CHANGE  		 
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
		case SIGN_OUT:
			return {...state,isSignedIn:false}
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
	userId: ''
}

export const userId = (state=initialStateUserId,action={}) => {
	switch (action.type) {
		case GET_USER_ID:
			return {...state,userId:action.payload}
		default:
			return state;
	}
}

const initialStateCartPrice = {
	cartprice: Number('')
}

export const cartPrice = (state=initialStateCartPrice,action={}) =>{
	switch (action.type) {
		case CART_PRICE_ADD:
			return {...state,cartprice:state.cartprice + Number(action.payload)}
		case CART_PRICE_DELETE:
			return {...state,cartprice:state.cartprice - Number(action.payload)}
		default:
			return state;
	}
}

const initialStateDropSignOut = {
	droppedSignOut:false
}

export const signOut = (state=initialStateDropSignOut,action={}) => {
	switch(action.type) {
		case DROP_SIGN_OUT:
			return {...state,droppedSignOut:true}
		case HIDE_SIGN_OUT:
			return {...state,droppedSignOut:false}
		default:
			return state;
	}
}

const initialStateUser = {
	user:{	id:'',
			name:'',
			email:'',
			joined:'',
			isAdmin:false
		 }
}

export const userInfo = (state=initialStateUser,action={}) => {
	switch(action.type) {
		case GRAB_USER_INFO:
			return {...state,user:{
				id:action.payload.id,
				name:action.payload.firstname,
				email:action.payload.email,
				joined:action.payload.joined,
				isAdmin:action.payload.isadmin
			}}
		default:
			return state;
	}
}

const initialStateAdminRoute = {
	adminRoute:'admin'
}

export const adminRouter = (state=initialStateAdminRoute,action={}) => {
	switch(action.type) {
		case CHANGE_ADMIN_ROUTE:
			return {...state,adminRoute:action.payload}
		default:
			return state;
	}
}

const initialStateItemQuantity = {
	image:'',
	quantity:{
		xs:'',
		s:'',
		m:'',
		l:'',
		xl:''
	}
}

export const itemQuantity = (state=initialStateItemQuantity,action={}) => {
	switch(action.type) {
		case GRAB_ITEM_QUANTITY:
			return {...state,
				image:action.payload.itemimage,
				quantity:{
				xs:action.payload.xs,
				s:action.payload.s,
				m:action.payload.m,
				l:action.payload.l,
				xl:action.payload.xl
				}}
		case ITEM_QUANTITY_XS_CHANGE:
			return {...state,
				quantity:{...state.quantity,
				xs:action.payload.target.value
				}}
		case ITEM_QUANTITY_S_CHANGE:
			return {...state,
				quantity:{...state.quantity,
				s:action.payload.target.value
				}}
		case ITEM_QUANTITY_M_CHANGE:
			return {...state,
				quantity:{...state.quantity,
				m:action.payload.target.value
				}}
		case ITEM_QUANTITY_L_CHANGE:
			return {...state,
				quantity:{...state.quantity,
				l:action.payload.target.value
				}}
		case ITEM_QUANTITY_XL_CHANGE:
			return {...state,
				quantity:{...state.quantity,
				xl:action.payload.target.value
				}}
		case ITEM_IMAGE_CHANGE:
			return {...state,
				image:action.payload.target.value
				}
		default:
			return state;
	}
}

const initialStateEditStorage = {
	isEditing:false
}

export const editItem = (state=initialStateEditStorage,action = {}) => {
	switch(action.type) {
		case EDIT_ITEM_STORAGE:
			return {...state,isEditing:true}
		case CANCEL_EDIT_ITEM:
			return {...state,isEditing:false}
		default:
			return state;
	}
}