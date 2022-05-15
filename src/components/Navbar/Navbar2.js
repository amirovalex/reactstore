import React from "react";
import "./Navbar3.css";
import "tachyons";
import MediaQuery from "react-responsive";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import navLogo from "../../assets/navLogo.png";
class Navbar extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let allQuantity = 0;
    const addTotal = () =>
      this.props.cart.map((item) => {
        allQuantity += item.quantity;
        return allQuantity;
      });
    addTotal();
    console.log("props nav", this.props);
    console.log("allquantity nav", allQuantity);
    const {
      onRouteChange,
      onCategoryChange,
      isSignedIn,
      user,
      onDropSignOut,
      droppedSignOut,
      onSignOut,
      onHideSignOut,
      onChangeAdminRoute,
      onShowGrid,
      onUserReset,
      onClearCart,
    } = this.props;
    return (
      <div className="relative shadow-1 menu-area">
        <link
          href="https://fonts.googleapis.com/css?family=Grenze&display=swap"
          rel="stylesheet"
        />
        <div
          className="grow logo"
          onClick={() => {
            onRouteChange("home");
            this.props.history.push("/reactstore");
          }}
        >
          <img src={navLogo} />
          <span href="#">lipknot</span>
        </div>
        <div className="part2">
          <div
            className="selec hover-bg-white-20"
            onClick={() => {
              onRouteChange("store");
              onCategoryChange("all");
              this.props.history.push("/reactstore/store/all");
              onShowGrid();
            }}
          >
            <span href="#">Store</span>
          </div>
          <div
            className="selec hover-bg-white-20"
            onClick={() => {
              onRouteChange("about");
              this.props.history.push("/reactstore/about");
            }}
          >
            <span href="#">About</span>
          </div>
          <div
            className="selec hover-bg-white-20"
            onClick={() => {
              onRouteChange("cart");
              this.props.history.push("/reactstore/cart");
            }}
          >
            <span href="#">Cart({allQuantity})</span>
          </div>
          {isSignedIn === false ? (
            <div
              className="selec hover-bg-white-20"
              onClick={() => {
                onRouteChange("signin");
                this.props.history.push("/reactstore/signin");
              }}
            >
              <span href="#">Sign In</span>
            </div>
          ) : user.isAdmin === false ? (
            <ClickAwayListener onClickAway={onHideSignOut}>
              <div>
                <div
                  className="selec part3 part4 hover-bg-white-20"
                  onClick={() =>
                    droppedSignOut ? onHideSignOut() : onDropSignOut()
                  }
                  //   onMouseLeave={() => onHideSignOut()}
                >
                  <span href="" className="hiAdmin">
                    Hi,{user.name}
                  </span>
                </div>
                <div
                  className={
                    user.isAdmin === false ? "dropDown user selec" : "dropDown"
                  }
                  style={{ display: droppedSignOut ? "flex" : "none" }}
                >
                  <div
                    className="signUser"
                    onClick={() => {
                      onSignOut();
                      this.props.history.push("/reactstore");
                      onUserReset();
                      onClearCart();
                    }}
                  >
                    <span href="#">Sign Out</span>
                  </div>
                </div>
              </div>
            </ClickAwayListener>
          ) : (
            <div className="padder">
              <div
                className="part3 part4"
                onClick={() => onDropSignOut()}
                onMouseLeave={() => onHideSignOut()}
                onMouseEnter={() => onDropSignOut()}
              >
                <span href="#" className="hiAdmin">
                  Hi,Admin
                </span>
                <div
                  id="pen"
                  className="dropDown"
                  style={{ display: droppedSignOut ? "flex" : "none" }}
                >
                  <div
                    className="bord hover-bg-white-40"
                    onClick={() => {
                      onRouteChange("admin");
                      onChangeAdminRoute("admin");
                      this.props.history.push("/reactstore/admin");
                    }}
                  >
                    <span href="#">Admin Panel</span>
                  </div>
                  <div
                    className="hover-bg-white-40"
                    onClick={() => {
                      onSignOut();
                      this.props.history.push("/reactstore");
                      onUserReset();
                      onClearCart();
                    }}
                  >
                    <span href="/reactstore">Sign Out</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
