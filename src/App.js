import React , {Component} from 'react';
import { connect } from 'react-redux';
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar';
import Store from './components/Store/Store';
import Cart from './components/Cart/Cart';
import SignIn from './components/SignIn/SignIn';
import Admin from './components/Admin/Admin'
import './App.css';
import Register from './components/Register/Register';
import { routeChange , requestItems , categoryChange , changeItemId , dropMenuDown , logIn , addCart , clearCart , deleteCartItem , getUserId , addCartPrice , deleteCartPrice , dropSignedOut , signOut , hideSignOut , getUserInfo , changeAdminRoute , getItemQuantity , itemEdit , cancelEdit , editQuantityXs , editQuantityS , editQuantityM , editQuantityL , editQuantityXl , editItemImage } from './actions';

const mapStateToProps = state => {
  return {
    route: state.changeRoute.route,
    items: state.requestItems.items,
    category: state.changeCategory.category,
    itemId: state.idChange.itemId,
    isDropdown: state.dropdownMenu.isDropdown,
    isSignedIn: state.signIn.isSignedIn,
    cart: state.cartAdd.cart,
    userId: state.userId.userId,
    cartprice: state.cartPrice.cartprice,
    droppedSignOut: state.signOut.droppedSignOut,
    user: state.userInfo.user,
    adminRoute: state.adminRouter.adminRoute,
    image: state.itemQuantity.image,
    quantity: state.itemQuantity.quantity,
    isEditing: state.editItem.isEditing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRouteChange: (route) => dispatch(routeChange(route)),
    onRequestItems: (database) => dispatch(requestItems(database)),
    onCategoryChange: (category) => dispatch(categoryChange(category)),
    onItemIdChange: (id) => dispatch(changeItemId(id)),
    onDropdownMenu: () => dispatch(dropMenuDown()),
    onSignIn: () => dispatch(logIn()),
    onCartAdd: (id) => dispatch(addCart(id)),
    onClearCart: () => dispatch(clearCart()),
    onDeleteCartItem: (id) => dispatch(deleteCartItem(id)),
    onGetUserId: (id) => dispatch(getUserId(id)),
    onCartPriceAdd: (price) => dispatch(addCartPrice(price)),
    onCartPriceDelete: (price) => dispatch(deleteCartPrice(price)),
    onDropSignOut: () => dispatch(dropSignedOut()),
    onSignOut: () => dispatch(signOut()),
    onHideSignOut: () => dispatch(hideSignOut()),
    onGetUserInfo: (user) => dispatch(getUserInfo(user)),
    onChangeAdminRoute: (route) => dispatch(changeAdminRoute(route)),
    onGetItemQuantity: (item) => dispatch(getItemQuantity(item)),
    onItemEdit: () => dispatch(itemEdit()),
    onCancelEdit: () => (dispatch(cancelEdit())),
    onEditQuantityXs: (obj) => (dispatch(editQuantityXs(obj))),
    onEditQuantityS: (obj) => (dispatch(editQuantityS(obj))),
    onEditQuantityM: (obj) => (dispatch(editQuantityM(obj))),
    onEditQuantityL: (obj) => (dispatch(editQuantityL(obj))),
    onEditQuantityXl: (obj) => (dispatch(editQuantityXl(obj))),
    onEditItemImage: (obj) => (dispatch(editItemImage(obj)))
  }
}

class App extends Component {


  //THE STORE STATE MOVING
  componentDidMount() {
  fetch('http://localhost:3000/getstorage')
    .then(response => response.json())
    .then(items => this.props.onRequestItems(items))
}


  render(){
    const { route, onRouteChange , category ,
            onCategoryChange , items , itemId ,
            onItemIdChange ,onDropdownMenu ,isDropdown , 
            isSignedIn , onSignIn , onCartAdd , 
            cart , onClearCart , onDeleteCartItem ,
            onGetUserId , isAdmin ,
            cartprice , onCartPriceAdd , onCartPriceDelete ,
            onDropSignOut , droppedSignOut , onSignOut ,
            onHideSignOut , onGetUserInfo , user ,
            adminRoute , onChangeAdminRoute , quantity ,
            onGetItemQuantity , isEditing , onItemEdit ,
            onCancelEdit , image , onEditQuantityXs , 
            onEditQuantityS , onEditQuantityM , onEditQuantityL ,
            onEditQuantityXl , onEditItemImage } = this.props;
    const filteredItems = items.filter(item => {
      return (item.category === category)
    })
    return(
      <div style={{height:'100%'}}>
        <link href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz&display=swap" rel="stylesheet"/>
        <Navbar 
          cart={cart}
          route={route} 
          onRouteChange = {onRouteChange} 
          onCategoryChange = {onCategoryChange}
          toggleCart = {this.toggleCart}
          isSignedIn = {isSignedIn}
          isAdmin = {isAdmin}
          droppedSignOut = {droppedSignOut}
          onDropSignOut = {onDropSignOut}
          onSignOut = {onSignOut} 
          onHideSignOut ={onHideSignOut}
          onChangeAdminRoute={onChangeAdminRoute}
          user = {user} />
          {route === 'admin' ?
            <Admin 
            onEditQuantityXs = {onEditQuantityXs}
            onEditQuantityS = {onEditQuantityS}
            onEditQuantityM = {onEditQuantityM}
            onEditQuantityL = {onEditQuantityL}
            onEditQuantityXl = {onEditQuantityXl}
            onEditItemImage = {onEditItemImage}
            isEditing={isEditing}
            onItemEdit={onItemEdit}
            onItemIdChange={onItemIdChange}
            itemId={itemId}
            adminRoute={adminRoute}
            onChangeAdminRoute={onChangeAdminRoute}
            quantity={quantity}
            onGetItemQuantity={onGetItemQuantity}
            onCancelEdit={onCancelEdit}
            image={image}
            /> :
            ( route === "signin" ? 
              <SignIn 
              onRouteChange = {onRouteChange}
              onSignIn = {onSignIn}
              onGetUserId = {onGetUserId}
              onGetUserInfo = {onGetUserInfo}
              />
            : (route === "register" ?
              <Register 
              onGetUserInfo = {onGetUserInfo}
              onRouteChange = {onRouteChange}
              onSignIn = {onSignIn}/> :
        (route === "cart" ? 
          (<Cart
          onDeleteCartItem={onDeleteCartItem}
          onClearCart={onClearCart}
          cart={cart}
          items={items}
          cartprice={cartprice}
          onCartPriceDelete={onCartPriceDelete}
          />
          )
          :
        ( route === 'home' ?
          <Main onRouteChange = {onRouteChange} onCategoryChange = {onCategoryChange} />
       : (    route === 'store' ? (<Store 
                  isDropdown={isDropdown}
                  onDropdownMenu={onDropdownMenu}
                  onCartAdd={onCartAdd}
                  onItemIdChange={onItemIdChange}
                  itemId={itemId}
                  route={route}
                  onRouteChange={onRouteChange} 
                  onCategoryChange={onCategoryChange} 
                  items={items} 
                  filteredItems={filteredItems} 
                  category={category}
                  onCartPriceAdd={onCartPriceAdd}
                   />)
            : (route === 'itempage' ? (<Store 
                  isDropdown={isDropdown}
                  onDropdownMenu={onDropdownMenu}
                  onCartAdd={onCartAdd}
                  onItemIdChange={onItemIdChange}
                  itemId={itemId}
                  route={route}
                  onRouteChange={onRouteChange} 
                  onCategoryChange={onCategoryChange} 
                  items={items} 
                  filteredItems={filteredItems} 
                  category={category}
                  onCartPriceAdd={onCartPriceAdd}
                   />) : true )
          )
          )
          )
        )
      )}  
      </div>
    )
}}

export default connect(mapStateToProps,mapDispatchToProps)(App);