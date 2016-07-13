import React, { Component, PropTypes } from 'react';

class AddNewBar extends Component { 
	handleCreate() {
		this.props.onCreate(this.refs.title.value);
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

export default AddNewBar;
