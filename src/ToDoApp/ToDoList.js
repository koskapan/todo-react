import React, { Component } from 'react';
import ToDoListItem from './ToDoListItem.js';

class ToDoList extends Component {
    render() {
      return (
            this.props.items.map(item => (
              <ToDoListItem 
                key = {item.id} 
                id={item.id} 
                text = {item.text} 
                onDelete = {this.props.onDelete} 
                onEdit= {this.props.onEdit}/>
            ))
      )
    }
  }
  
  export default ToDoList;