import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <h1 style={{border: '1px solid red'}}>{this.props.todo.name}</h1>
    )
  }
}
