import React from "react";
import AddItemForm from "./AddItemForm";
import EditItemForm from "./EditItemForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddItemForm addItem={this.props.addItem} />
        {Object.keys(this.props.items).map(key => (
          <EditItemForm
            key={key}
            index={key}
            item={this.props.items[key]}
            updateItem={this.props.updateItem}
            deleteItem={this.props.deleteItem}
          />
        ))}
      </div>
    );
  }
}

export default Inventory;
