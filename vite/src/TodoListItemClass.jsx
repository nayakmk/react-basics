import React from "react";

export class TodoListItemClass extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" defaultChecked={this.props.isComplete}></input>
        {this.props.children}
      </div>
    );
  }
}
