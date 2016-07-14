import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import todoActionCreator from '../actions/todoActionCreator';

class AddNewBar extends Component { 
	handleCreate() {
		if (!this.refs.title.value.trim()) {
          return
        }
		this.props.dispatch(todoActionCreator.addNewTodo(this.refs.title.value));
		this.refs.title.value = '';
	}
	render() {
	    return (
			<div className="addNewBar">
				<input type="text" ref="title" placeholder="Enter Todo content" />
				<button type="submit" onClick={this.handleCreate.bind(this)} >Add Todo</button>
			</div>
	); }
}
AddNewBar.propTypes = {
	title: PropTypes.string,
	onCreate: PropTypes.func
};

export default connect()(AddNewBar);
