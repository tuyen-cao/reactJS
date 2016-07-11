import React, { Component, PropTypes } from 'react';

class TodoItem extends Component { 
	render() {
		var cssClass = this.props.isCompleted ? "completed": ""; 
		
	    return (
			<li className= {cssClass}>{this.props.text}</li>
	); }
}
TodoItem.propTypes = {
	isActive: PropTypes.bool,
	isCompleted: PropTypes.bool,
	text: PropTypes.string,
	onChange: PropTypes.func
};

export default TodoItem;
