import React , {Component} from 'react';
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar';
import Store from './components/Store/Store';
import Cart from './components/Cart/Cart';
import SignIn from './components/SignIn/SignIn';
import './App.css';
import Register from './components/Register/Register';
 
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
  constructor() {
    super();
    this.storeElement = React.createRef();
    this.state = {
      route: 'home',
      category: 'all',
      items: [],
      itemId: '',
      cart: [],
      isDropdown:false,
      isSignedIn:false,
    }
}

  //THE STORE STATE MOVING
  componentDidMount(){
  this.setState({items:db})
}


  onRouteChange = (route) => {
    this.setState({route:route})
  }

  categoryChange = (category) => {
    this.setState({category:category})
  }

  idChange = (id) => {
    this.setState({itemId:id})
  }

  cartAdd = (id) => {
    this.setState({
      cart:[...this.state.cart,id]
    })
  }

  onClearCart = () => {
    this.setState({cart:[]})
  }

  onDropdownMenu = () => {
    this.setState({isDropdown:!this.state.isDropdown})
  }

  onSignIn= () => {
    this.setState({isSignedIn:true})
  }

  deleteItem = i => {
      this.setState(state => {
        const cart = this.state.cart.filter((item,j) => i !== j);
        return {
          cart,
        }
      })
    }

  render(){
    const { items , category } = this.state
    const filteredItems = items.filter(item => {
      return (item.category === this.state.category)
    })
    return(
      <div style={{height:'100%'}}>
        <link href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz&display=swap" rel="stylesheet"/>
        <Navbar 
          cart={this.state.cart}
          route={this.state.route} 
          onRouteChange = {this.onRouteChange} 
          categoryChange = {this.categoryChange}
          toggleCart = {this.toggleCart}
          isSignedIn = {this.state.isSignedIn} />
        { this.state.route === "signin" ? 
              <SignIn 
              onRouteChange = {this.onRouteChange}
              onSignIn = {this.onSignIn}/>
            : (this.state.route === "register" ?
              <Register 
              onRouteChange = {this.onRouteChange}
              onSignIn = {this.onSignIn}/> :
        (this.state.route === "cart" ? 
          <Cart
          deleteItem={this.deleteItem}
          onClearCart={this.onClearCart}
          cart={this.state.cart}
          items={items}/>
          :
        ( this.state.route === 'home' ?
          <Main onRouteChange = {this.onRouteChange} categoryChange = {this.categoryChange} />
       : (    <Store 
                  isDropdown={this.state.isDropdown}
                  onDropdownMenu={this.onDropdownMenu}
                  cartAdd={this.cartAdd}
                  idChange={this.idChange}
                  itemId={this.state.itemId}
                  route={this.state.route}
                  onRouteChange={this.onRouteChange} 
                  categoryChange={this.categoryChange} 
                  items={items} 
                  filteredItems={filteredItems} 
                  category={category} />
          )
          )
          )
        )
  } {console.log(this.state)}
      </div>
    )
}}


export default App;
