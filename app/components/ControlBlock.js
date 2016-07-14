import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FilterLink from './Link';
import constants  from '../constants';

class ControlBlock extends Component { 
	render() {
	    return (
			<div className="controlBlock">
				<FilterLink {...this.props} target={constants.GET_ALL}>All</FilterLink>
				<FilterLink {...this.props} target={constants.GET_ACTIVE}>Active</FilterLink>
				<FilterLink {...this.props} target={constants.GET_COMPLETED}>Completed</FilterLink>
			</div>
	);
	}
}
export default ControlBlock;
