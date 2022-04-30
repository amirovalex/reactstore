import React from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import "tachyons";
import StripeCheckoutButton from "../StripeButton/StripeButton";

const Cart = ({
  cart,
  items,
  onClearCart,
  onDeleteCartItem,
  onCartPriceDelete,
  cartprice,
  user,
  quantity,
}) => {
  return (
    <div className="cartbox pa3">
      <div className="item ba pa3 white">
        {cart.length === 0 ? (
          <p className="tc">Your Cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => {
              return (
                <CartItem
                  onDeleteCartItem={onDeleteCartItem}
                  unique={cart}
                  cart={cart}
                  size={item.itemsize}
                  item={item}
                  id={item.itemid}
                  key={item.itemid}
                  quantity={item.quantity}
                  src={items.find((x) => x.itemid === item.itemid).itemimage}
                  name={items.find((x) => x.itemid === item.itemid).itemname}
                  price={items.find((x) => x.itemid === item.itemid).price}
                  onCartPriceDelete={onCartPriceDelete}
                />
              );
            })}
            <p>
              Total:
              {` ${cartprice}`}
              {"$"}
            </p>
          </div>
        )}
      </div>
      <div className="buttonbox pa3 center">
        <div className="tw tc" onClick={() => onClearCart()}>
          <p className="hover-red">Cancel Order</p>
        </div>
        <StripeCheckoutButton
          cart={cart}
          user={user}
          price={cartprice}
          className="center"
        />
        <div className="test-warning">
          *Please use the following test credit card for payment*
          <br />
          4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>
      </div>
    </div>
  );
};

export default Cart;
