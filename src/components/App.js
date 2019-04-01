import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleItems from "../sample-items ";
import Item from "./Item";
import base from "../base";

class App extends React.Component {
  state = {
    items: {},
    order: {}
  };

  componentDidMount() {
    this.ref = base.syncState("state", {
      context: this,
      state: "items"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addItem = item => {
    // 1. Take a copy of the existing state
    const items = { ...this.state.items };
    // 2. Add our new item to that items variable
    items[`item${Date.now()}`] = item;
    // 3. Set the new items object to state
    this.setState({ items });
  };

  updateItem = (key, updatedItem) => {
    // 1. Take a copy of the current state
    const items = { ...this.state.items };
    // 2. Update that state
    items[key] = updatedItem;
    // 3. Set that to state
    this.setState({ items });
  };

  deleteItem = key => {
    // 1. take a copy of state
    const items = { ...this.state.items };
    // 2. update the state
    items[key] = null;
    // 3.  update state
    this.setState({ items });
  };

  loadSampleItems = () => {
    this.setState({ items: sampleItems });
  };

  addToOrder = key => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
  };

  removeFromOrder = key => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. remove that itemf from order
    delete order[key];
    // 3. Call setState to update our state object
    this.setState({ order });
  };

  render() {
    return (
      <div className="container">
        <div className="menu">
          <Header />
          <button onClick={this.loadSampleItems}>Load Sample Items</button>
          <ul className="menu-items">
            {Object.keys(this.state.items).map(key => (
              <Item
                key={key}
                index={key}
                details={this.state.items[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>

        <Order
          items={this.state.items}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addItem={this.addItem}
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
          items={this.state.items}
        />
      </div>
    );
  }
}

export default App;
