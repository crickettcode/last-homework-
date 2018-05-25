import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleToDo } from '../actions/todoActions'


class Todos extends Component {
  state = {
    searchString: ''
  }

  handleFormChange = (event) => {
    this.setState({ searchString: event.target.value })
  }


  render() {
    const filteredArray = this.props.todos.filter((todo) => {
      return (
        todo.task.includes(this.state.searchString)
      )
    })
    return (
      <div>
        <input onChange={this.handleFormChange}
          value={this.state.searchString} />
        <br />
        <ul>
          {filteredArray.map(todo => (
            <li
              key={todo.id}
              onClick={() => this.props.toggleToDo(todo.id)}
            >
              {todo.task}: {todo.completed.toString()}
            </li>
          ))}
        </ul>
      </div>

