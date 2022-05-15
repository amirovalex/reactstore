import React from "react";
import { Route } from "react-router-dom";
import AddItem from "../AddItem/AddItem";
import Storage from "../Storage/Storage";
import ShippingInfo from "../ShippingInfo/ShippingInfo";
import "tachyons";

const Admin = (props) => {
  console.log(props);
  const {
    onEditQuantityXs,
    onEditQuantityS,
    onEditQuantityM,
    onEditQuantityL,
    onEditQuantityXl,
    onEditItemImage,
    isEditing,
    onItemEdit,
    onItemIdChange,
    itemId,
    adminRoute,
    onChangeAdminRoute,
    quantity,
    onGetItemQuantity,
    onCancelEdit,
    image,
    user,
  } = props;
  return (
    <div>
      {adminRoute === "admin" ? (
        <div className="tc w5 pa4 ma3 center">
          <div>
            <div
              className="hover-bg-white-20  pa3 pointer tc"
              onClick={() => {
                onChangeAdminRoute("additem");
                props.history.push(`${props.match.path}/additem`);
              }}
            >
              <p>Add items to storage</p>
            </div>
            <div
              className="hover-bg-white-20 pa3 pointer"
              onClick={() => {
                onChangeAdminRoute("shipping_main");
                props.history.push(`${props.match.path}/shipping`);
              }}
            >
              <p>Check items for shipping</p>
            </div>
            <div
              className="hover-bg-white-20 pa3 pointer"
              onClick={() => {
                onChangeAdminRoute("storage");
                props.history.push(`${props.match.path}/storage`);
              }}
            >
              <p>Check storage</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={
            props.location.pathname === "/reactstore/admin/additem"
              ? "tc w5 ma3 center"
              : "tc w5 pa4 ma3 center"
          }
        >
          <Route
            exact
            path={`${props.match.path}/additem`}
            component={AddItem}
          />
          <Route
            exact
            path={`${props.match.path}/storage`}
            render={(props) => (
              <Storage
                {...props}
                onEditQuantityXs={onEditQuantityXs}
                onEditQuantityS={onEditQuantityS}
                onEditQuantityM={onEditQuantityM}
                onEditQuantityL={onEditQuantityL}
                onEditQuantityXl={onEditQuantityXl}
                onEditItemImage={onEditItemImage}
                image={image}
                onCancelEdit={onCancelEdit}
                isEditing={isEditing}
                onItemEdit={onItemEdit}
                quantity={quantity}
                onGetItemQuantity={onGetItemQuantity}
                onItemIdChange={onItemIdChange}
                itemId={itemId}
                adminRoute={adminRoute}
                onChangeAdminRoute={onChangeAdminRoute}
              />
            )}
          />
          <Route
            exact
            path={`${props.match.path}/shipping`}
            render={(props) => <ShippingInfo {...props} user={user} />}
          />
        </div>
      )}
    </div>
  );
};

export default Admin;
