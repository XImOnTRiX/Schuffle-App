import React, { Component } from 'react';

export class Input extends Component {
  state = {
    value: this.props.item_amount,
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
    this.props.onChange(e.target.value, this.props.category);
  }

  render() {
    return (
      <div>
        <label>{this.props.category}</label>
        <br />
        <input type='number' value={this.state.value} onChange={this.handleChange} />
        {this.props.currentItems.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    );
  };
};
