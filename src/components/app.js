import React, { Component } from 'react';
import TodosList from './todos_list'
import NewTodo from './new_todo'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: {
        1: {id: 1, body: 'Buy stuff', isComplete: false},
        2: {id: 2, body: 'Do things', isComplete: false}
      },
      lastCount: 2
    }
    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(todo) {
    let newTodo = {
      [this.state.lastCount + 1]: {
        id: this.state.lastCount + 1,
        body: todo,
        isComplete: false
      }
    }

    let newTodoList = Object.assign({}, this.state.todos, newTodo)

    this.setState({todos: newTodoList, lastCount: this.state.lastCount + 1})
  }

  render() {
    return (
      <div>
        <TodosList todos={this.state.todos} />
        <NewTodo onFormSubmit={this.addTodo} lastCount={this.state.lastCount} />
      </div>
    );
  }
}
