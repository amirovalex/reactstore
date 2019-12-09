import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware , combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import 'tachyons';
import App from './App';
import { changeRoute , requestItems , idChange , dropdownMenu , changeCategory , signIn , cartAdd , userId , cartPrice , signOut , userInfo , adminRouter , itemQuantity , editItem , gridSystem} from './reducers.js'
import * as serviceWorker from './serviceWorker';
//store.js
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfigCart = {
	key: 'cart',
	storage,
	whitelist: ['cart']
}

const persistConfigUser = {
	key: 'user',
	storage,
	whitelist: ['user']
}

const persistConfigSignedIn = {
	key: 'signedIn',
	storage,
	whitelist: ['isSignedIn']
}

const persistConfigItems = {
	key: 'items',
	storage,
	whitelist: ['items']
}

const persistConfigItemId = {
	key: 'itemId',
	storage,
	whitelist: ['itemId']
}

const persistConfigGrid = {
	key: 'grid',
	storage,
	whitelist: ['grid']
}

const persistConfigTotal = {
	key: 'cartprice',
	storage,
	whitelist: ['cartprice']
}

const logger = createLogger();

const rootReducer = combineReducers({changeRoute,requestItems: persistReducer(persistConfigItems,requestItems),idChange: persistReducer(persistConfigItemId , idChange),dropdownMenu,changeCategory , signIn: persistReducer(persistConfigSignedIn,signIn) , cartAdd: persistReducer(persistConfigCart,cartAdd), userId , cartPrice: persistReducer(persistConfigTotal,cartPrice) , signOut , userInfo: persistReducer(persistConfigUser,userInfo) , adminRouter , itemQuantity , editItem , gridSystem: persistReducer(persistConfigGrid, gridSystem)})

// const persistedReducer = persistReducer(persistConfig,rootReducer);

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

const persistor = persistStore(store)

ReactDOM.render(
				<Provider store={store}>
					<BrowserRouter>
						<PersistGate loading={<h1>LOADING</h1>}persistor={persistor}>
							<App/>
						</PersistGate>
					</BrowserRouter>
				</Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();