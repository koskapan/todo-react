import React, { Component } from 'react';

class ToDoListItem extends Component {
    render() {
      return (
        <div className='todoItem'>
          <span className='todoItemText'> {this.props.text} </span>
          <span className="todoItemBottons">
            <button className='todoItemBtn' onClick = {(e) => this.props.onEdit(this.props.id, this.props.text) } > Edit </button>
            <button className='todoItemBtn' onClick = {(e) => this.props.onDelete(this.props.id)} > Delete </button>
          </span>
        </div>
      )
    }
  }
  
  export default ToDoListItem;