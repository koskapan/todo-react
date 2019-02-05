import React, { Component } from 'react';
import ToDoList from './ToDoList.js';
import { connect } from 'react-redux';
import { actionCreators } from '../store/ToDoApp.js';
import { bindActionCreators } from 'redux';

class ToDoApp extends Component {
    constructor(props) {
      console.log(props);
      super(props);
      this.state = { items: props.items, text : '', currentItemId: ''}
      this.handleDelete = this.handleDelete.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    
    refresh() {
      this.setState({
        text: '',
        currentItemId: ''
      })
    }
  
    handleTextBoxChange(e) {
      this.setState({
        text: e.target.value
      })
    }
  
    handleEdit(id, text) {
      this.setState({
        currentItemId: id,
        text: text
      })
    }
  
    handleDelete(id) {
      this.props.delete({id: id });
      this.refresh();
    }
  
    onSubmit(e) {
      console.log(this.props);
      console.log(this.props.items);
      console.log(this.props.create);
      e.preventDefault();
      if (this.state.text === '')  {
        return;
      }
      if (this.state.currentItemId !== '') {
        this.props.edit({          
          id: this.state.currentItemId, 
          text: this.state.text });
      }
      else {
        this.props.create({
          text: this.state.text });
      }
  
      this.refresh();
    }
  
    render() {
      return (
        <div>
          <ToDoList 
            items = {this.props.items} 
            onDelete = {this.handleDelete}
            onEdit = {this.handleEdit}
            />
          <div > 
            <input type="text" onChange = {(e) => this.handleTextBoxChange(e)} value = {this.state.text} />
            <button onClick = {(e) => this.onSubmit(e)}> Submit </button>
          </div>
        </div>)
    }
  }

  export default connect(
    state => state.todo,
    dispatch => bindActionCreators(actionCreators, dispatch)
  )(ToDoApp);