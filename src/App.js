import React , {Component} from 'react';
import { connect } from 'react-redux';
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar';
import Store from './components/Store/Store';
import Cart from './components/Cart/Cart';
import SignIn from './components/SignIn/SignIn';
import './App.css';
import Register from './components/Register/Register';
import { routeChange , requestItems , categoryChange , changeItemId , dropMenuDown , logIn , addCart , clearCart , deleteCartItem , getUserId , addCartPrice , deleteCartPrice , dropSignedOut , signOut , hideSignOut , getUserInfo } from './actions';

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
    user: state.userInfo.user
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
    onGetUserInfo: (user) => dispatch(getUserInfo(user))
  }
}
 
const db = [
  {name:"Black Hoodie",
    price:"120",
    category:"topwear",
    id:"1",
    src:"https://cdn.rickowens.eu/products/69433/large/DU19F6285FEP8_09_M_2.jpg?1568643377",
    color:"black"
  },
  {name:"Black Printed T-Shirt",
    price:"90",
    category:"topwear",
    id:"2",
    src:"https://media.yoox.biz/items/12/12309386jw_14g_f.jpg",
    color:"black"
  },
  {name:"White Shirt",
    price:"80",
    category:"topwear",
    id:"3",
    src:"https://media.yoox.biz/items/38/38854637hr_14_r.jpg",
    color:"white"
  },
  {name:"Leather Pants",
    price:"200",
    category:"bottomwear",
    id:"4",
    src:"https://cdn.rickowens.eu/products/63433/large/RU19F4392LS09_48_1.jpg?1557493178",
    color:"black"
  },
  {name:"Sport Shorts",
    price:"70",
    category:"bottomwear",
    id:"5",
    src:"https://i.pinimg.com/originals/e0/9d/73/e09d738579b13bd62a0f01bde4e7a634.jpg",
    color:"black"
  },
  {name:"Cargo Pants",
    price:"150",
    category:"bottomwear",
    id:"6",
    src:"https://cdn.rickowens.eu/products/68037/large/RU19F4396TE_133-46-1.jpg?1563806617",
    color:"black"
  },
  {name:"Cargo Shorts",
    price:"80",
    category:"bottomwear",
    id:"7",
    src:"https://cdn.rickowens.eu/products/69115/large/DU19F6386RIG03_S_1.jpg?1566295209",
    color:"black"
  },
  {name:"Logo Cap",
    price:"40",
    category:"accessories",
    id:"8",
    src:"https://media.yoox.biz/items/46/46644729fa_14g_f.jpg",
    color:"black"
  },
  {name:"Silver Necklace",
    price:"150",
    category:"accessories",
    id:"9",
    src:"https://media.yoox.biz/items/50/50232285ox_29_e.jpg",
    color:"black"
  },
  {name:"Black Backpack",
    price:"80",
    category:"accessories",
    id:"10",
    src:"https://media.yoox.biz/items/45/45461845bt_14g_f.jpg",
    color:"black"
  },
]

class App extends Component {


  //THE STORE STATE MOVING
  componentDidMount(){
  this.props.onRequestItems(db)
}


  render(){
    const { route, onRouteChange , category ,
            onCategoryChange , items , itemId ,
            onItemIdChange ,onDropdownMenu ,isDropdown , 
            isSignedIn , onSignIn , onCartAdd , 
            cart , onClearCart , onDeleteCartItem ,
            onGetUserId , userId , isAdmin ,
            cartprice , onCartPriceAdd , onCartPriceDelete ,
            onDropSignOut , droppedSignOut , onSignOut ,
            onHideSignOut , onGetUserInfo , user} = this.props;
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
          user = {user} />
        { route === "signin" ? 
              <SignIn 
              onRouteChange = {onRouteChange}
              onSignIn = {onSignIn}
              onGetUserId = {onGetUserId}
              onGetUserInfo = {onGetUserInfo}
              db = {db}/>
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
       : (    <Store 
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
                   />
          )
          )
          )
        )
  }
      </div>
    )
}}

export default connect(mapStateToProps,mapDispatchToProps)(App);