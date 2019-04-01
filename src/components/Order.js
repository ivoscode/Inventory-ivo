import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
  renderOrder = key => {
    const item = this.props.items[key];
    const count = this.props.order[key];
    const isAvailable = item && item.status === "available";
    const transitionOptions = {
      classNames: "order",
      key,
      timeout: { enter: 500, exit: 500 }
    };
    // Make sure the item is loaded before  continue!
    if (!item) return null;

    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            Sorry {item ? item.name : "item"} is no longer available
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition
                classNames="count"
                key={count}
                timeout={{ enter: 500, exit: 500 }}
              >
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            pc {item.name}
            {formatPrice(count * item.price)}
            <button onClick={() => this.props.removeFromOrder(key)}>
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const item = this.props.items[key];
      const count = this.props.order[key];
      const isAvailable = item && item.status === "available";
      if (isAvailable) {
        return prevTotal + count * item.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>

        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
