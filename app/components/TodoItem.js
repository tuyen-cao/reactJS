import React, { Component, PropTypes } from 'react';

class TodoItem extends Component { 
	render() {
		var cssClass = this.props.isCompleted ? "completed": ""; 
		
	    return (
			<li className = {cssClass} 
				key = {this.props.id}
				onClick = {e => { 
			        this.props.onClick()
		       	}}
			>{this.props.text}</li>
	); }
}
TodoItem.propTypes = {
	isActive: PropTypes.bool,
	isCompleted: PropTypes.bool,
	text: PropTypes.string,
	onClick: PropTypes.func,
	id: PropTypes.number
};



export default TodoItem;
