import React from "react";
import "tachyons";

const Item = ({
  onItemIdChange,
  name,
  category,
  id,
  src,
  price,
  onRouteChange,
}) => {
  return (
    <div className="tc pv3 center flexer grow">
      <img
        loading="lazy"
        alt="clothing"
        width="200px"
        height="auto"
        src={src}
      />
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Item;
