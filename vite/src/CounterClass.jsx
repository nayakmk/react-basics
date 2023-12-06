import React from "react";

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div
        onClick={() => {
          this.setState((currentState) => {
            return { count: currentState.count + 1 };
          });
        }}
      >
        Count using Class Component: {this.state.count}
      </div>
    );
  }
}
