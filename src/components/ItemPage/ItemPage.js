import React from "react";
import "tachyons";
import "./ItemPage.css";

class ItemPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onHideGrid();
  }

  componentWillUnmount() {
    this.props.onShowGrid();
  }

  render() {
    const {
      itemId,
      onCartAdd,
      onCartPriceAdd,
      items,
      onChangeItemSize,
      itemsize,
    } = this.props;
    const indexItem = items.findIndex((item) => item.itemid === itemId);
    const src = items[indexItem].itemimage;
    const name = items[indexItem].itemname;
    const price = items[indexItem].price;
    return (
      <div className="tc pa3 itemflex">
        <img className="" width="40%" alt="item" src={src} />
        <div className="" width="40%">
          <h1 className="white">{name}</h1>
          <h3>{price + "$"}</h3>
          <p>Description</p>
          <div className="pv2 mv2">
            <p>Size:</p>
            <select className="pv2 mv2" onChange={onChangeItemSize}>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
          </div>
          <div
            onClick={() => {
              onCartAdd({ itemid: itemId, itemsize: itemsize });
              onCartPriceAdd(Number(price));
              console.log("size down", itemsize);
            }}
            className="pv2 mv2 white buybutt"
          >
            Buy
          </div>
        </div>
      </div>
    );
  }
}
// let size = 'xs'
// const onSizeChange = (event) => {
// 	size = event.target.value
// 	console.log(size)
// }
// const itemPrice = price

export default ItemPage;
