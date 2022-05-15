import React, { Component } from "react";
import { connect } from "react-redux";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar2";
import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";
import SignIn from "./components/SignIn/SignIn";
import Admin from "./components/Admin/Admin";
import About from "./components/About/About";
import { Route, Redirect } from "react-router-dom";
import "./App.css";
import Register from "./components/Register/Register";
import {
  routeChange,
  requestItems,
  categoryChange,
  changeItemId,
  dropMenuDown,
  logIn,
  addCart,
  clearCart,
  deleteCartItem,
  getUserId,
  addCartPrice,
  deleteCartPrice,
  dropSignedOut,
  signOut,
  hideSignOut,
  getUserInfo,
  changeAdminRoute,
  getItemQuantity,
  itemEdit,
  cancelEdit,
  editQuantityXs,
  editQuantityS,
  editQuantityM,
  editQuantityL,
  editQuantityXl,
  editItemImage,
  changeItemSize,
  showGrid,
  hideGrid,
  resetUser,
} from "./actions";

const mapStateToProps = (state) => {
  return {
    route: state.changeRoute.route,
    items: state.requestItems.items,
    category: state.changeCategory.category,
    itemId: state.idChange.itemId,
    itemsize: state.idChange.itemsize,
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
    isEditing: state.editItem.isEditing,
    grid: state.gridSystem.grid,
  };
};

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
    onCancelEdit: () => dispatch(cancelEdit()),
    onEditQuantityXs: (obj) => dispatch(editQuantityXs(obj)),
    onEditQuantityS: (obj) => dispatch(editQuantityS(obj)),
    onEditQuantityM: (obj) => dispatch(editQuantityM(obj)),
    onEditQuantityL: (obj) => dispatch(editQuantityL(obj)),
    onEditQuantityXl: (obj) => dispatch(editQuantityXl(obj)),
    onEditItemImage: (obj) => dispatch(editItemImage(obj)),
    onChangeItemSize: (size) => dispatch(changeItemSize(size)),
    onHideGrid: () => dispatch(hideGrid()),
    onShowGrid: () => dispatch(showGrid()),
    onUserReset: () => dispatch(resetUser()),
  };
};

class App extends Component {
  componentDidMount() {
    fetch("https://still-escarpment-99159.herokuapp.com/getstorage")
      .then((response) => response.json())
      .then((items) => this.props.onRequestItems(items))
      .catch((err) => console.log("err app"));
  }

  //THE STORE STATE MOVING

  render() {
    const {
      route,
      onRouteChange,
      category,
      onCategoryChange,
      items,
      itemId,
      onItemIdChange,
      onDropdownMenu,
      isDropdown,
      isSignedIn,
      onSignIn,
      onCartAdd,
      cart,
      onClearCart,
      onDeleteCartItem,
      onGetUserId,
      isAdmin,
      cartprice,
      onCartPriceAdd,
      onCartPriceDelete,
      onDropSignOut,
      droppedSignOut,
      onSignOut,
      onHideSignOut,
      onGetUserInfo,
      user,
      adminRoute,
      onChangeAdminRoute,
      quantity,
      onGetItemQuantity,
      isEditing,
      onItemEdit,
      onCancelEdit,
      image,
      onEditQuantityXs,
      onEditQuantityS,
      onEditQuantityM,
      onEditQuantityL,
      onEditQuantityXl,
      onEditItemImage,
      onChangeItemSize,
      itemsize,
      onRequestItems,
      grid,
      onHideGrid,
      onShowGrid,
      onUserReset,
    } = this.props;
    return (
      <div style={{ height: "100%" }}>
        <link
          href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz&display=swap"
          rel="stylesheet"
        />
        <Route
          path="/reactstore"
          render={(props) => (
            <Navbar
              {...props}
              onShowGrid={onShowGrid}
              cart={cart}
              route={route}
              onRouteChange={onRouteChange}
              onCategoryChange={onCategoryChange}
              toggleCart={this.toggleCart}
              isSignedIn={isSignedIn}
              isAdmin={isAdmin}
              droppedSignOut={droppedSignOut}
              onDropSignOut={onDropSignOut}
              onSignOut={onSignOut}
              onHideSignOut={onHideSignOut}
              onChangeAdminRoute={onChangeAdminRoute}
              user={user}
              onUserReset={onUserReset}
              onClearCart={onClearCart}
            />
          )}
        />
        <Route
          path="/reactstore/admin"
          render={(props) =>
            user.isAdmin === false ? (
              <Redirect to="/reactstore" />
            ) : (
              <Admin
                {...props}
                onEditQuantityXs={onEditQuantityXs}
                onEditQuantityS={onEditQuantityS}
                onEditQuantityM={onEditQuantityM}
                onEditQuantityL={onEditQuantityL}
                onEditQuantityXl={onEditQuantityXl}
                onEditItemImage={onEditItemImage}
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
                user={user}
              />
            )
          }
        />
        <Route
          exact
          path="/reactstore/signin"
          render={(props) =>
            isSignedIn === false ? (
              <SignIn
                {...props}
                onRouteChange={onRouteChange}
                onSignIn={onSignIn}
                onGetUserId={onGetUserId}
                onGetUserInfo={onGetUserInfo}
              />
            ) : (
              <Redirect to="/reactstore" />
            )
          }
        />
        <Route
          exact
          path="/reactstore/register"
          render={(props) =>
            isSignedIn === false ? (
              <Register
                {...props}
                onGetUserInfo={onGetUserInfo}
                onRouteChange={onRouteChange}
                onSignIn={onSignIn}
              />
            ) : (
              <Redirect to="/reactstore" />
            )
          }
        />
        <Route
          exact
          path="/reactstore/cart"
          render={(props) => (
            <Cart
              {...props}
              user={user}
              onDeleteCartItem={onDeleteCartItem}
              onClearCart={onClearCart}
              cart={cart}
              items={items}
              cartprice={cartprice}
              quantity={quantity}
              onCartPriceDelete={onCartPriceDelete}
            />
          )}
        />
        <Route
          exact
          path="/reactstore"
          render={(props) => (
            <Main
              {...props}
              onRouteChange={onRouteChange}
              onCategoryChange={onCategoryChange}
            />
          )}
        />
        <Route
          path="/reactstore/store"
          render={(props) => (
            <Store
              {...props}
              onRequestItems={onRequestItems}
              isDropdown={isDropdown}
              onDropdownMenu={onDropdownMenu}
              onCartAdd={onCartAdd}
              onItemIdChange={onItemIdChange}
              itemId={itemId}
              route={route}
              onRouteChange={onRouteChange}
              onCategoryChange={onCategoryChange}
              items={items}
              category={category}
              onCartPriceAdd={onCartPriceAdd}
              onChangeItemSize={onChangeItemSize}
              itemsize={itemsize}
              grid={grid}
              onHideGrid={onHideGrid}
              onShowGrid={onShowGrid}
            />
          )}
        />
        {/* <Route path='/store/itempage/:itemid'
                 render={(props) => <Store {...props}
                  onRequestItems={onRequestItems}
                  itemsize={itemsize}
                  onChangeItemSize={onChangeItemSize}
                  isDropdown={isDropdown}
                  onDropdownMenu={onDropdownMenu}
                  onCartAdd={onCartAdd}
                  onItemIdChange={onItemIdChange}
                  itemId={itemId}
                  route={route}
                  onRouteChange={onRouteChange} 
                  onCategoryChange={onCategoryChange} 
                  items={items} 
                  category={category}
                  onCartPriceAdd={onCartPriceAdd}
                   />}
        /> */}
        <Route
          exact
          path="/reactstore/about"
          render={(props) => <About {...props} />}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
