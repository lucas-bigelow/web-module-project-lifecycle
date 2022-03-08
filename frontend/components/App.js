import React from 'react';
import axios from 'axios';

import Form from './Form';
import TodoList from './TodoList';

const URL = 'http://localhost:9000/api/todos'

const initialState = {
  todos: [],
}

export default class App extends React.Component {
  state = initialState;

  componentDidMount() {
    axios.get(URL)
      .then(res => {
        console.log(res.data.data)
        this.setState({...this.state, todos: res.data.data})
      })
      .catch(err => console.log(err));
  }

  addTodo = name => {
    axios.post(URL, {name: name})
      .then(res => this.setState({todos: [...this.state.todos, res.data.data]}))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <Form addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} />
      </>
    )
  }
}
