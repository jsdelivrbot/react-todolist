import React, { Component } from 'react';

export default class NewTodo extends Component {
  constructor(props){
    super(props)
    this.state = {
      body: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({body: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onFormSubmit(this.state.body)
  }

  componentWillReceiveProps(nextProps){
    this.setState({body: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='body'>New To Do: </label>
        <input name='body'
               value={this.state.body}
               onChange={this.handleChange} />
        <button className='btn btn-success'>Submit</button>
      </form>
    );
  }
}
