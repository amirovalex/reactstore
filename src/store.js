import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cartAdd,userId,signIn,cartPrice,userInfo } from './reducers.js'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart','userId','isSignedIn',
	'cartprice', 'user', ]
}

const rootReducer = combineReducers({
	'cart': cartAdd,
	'userId': userId,
	'isSignedIn': signIn,
	'cartprice': cartPrice,
	'user': userInfo
})

export default persistReducer(persistConfig,rootReducer);