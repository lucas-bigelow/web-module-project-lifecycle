import React from 'react'

export default class Todo extends React.Component {
  render() {
    console.log(this.props.todo.name)
    return (
      <h1>{this.props.todo.name}</h1>
    )
  }
}
