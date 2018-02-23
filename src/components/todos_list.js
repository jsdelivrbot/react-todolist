import React, { Component } from 'react';

export default class TodosList extends Component {
  render() {
    let todosList = Object.values(this.props.todos)
    let todosJSX = todosList.map(todo => {
      return (
        <div key={todo.id}>
          {todo.body} <button className='btn btn-primary btn-sm'>Done</button>
        </div>
      )
    })
    return (
      <div>
        {todosJSX}
      </div>
    );
  }
}
