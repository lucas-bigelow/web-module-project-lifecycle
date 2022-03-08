import React from 'react'

const initialState = {
  value: ''
}

export default class Form extends React.Component {
  state = initialState;

  change = evt => {
    evt.preventDefault();
    this.setState({ value: evt.target.value })
  }

  onSubmit = evt => {
    evt.preventDefault();
    this.props.addTodo(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input name="name" type="text" value={this.state.value} onChange={this.change}/>
        <button type="submit">Add New Todo</button>
      </form>
    )
  }
}
