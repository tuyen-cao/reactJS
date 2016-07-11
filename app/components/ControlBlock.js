import React, { Component, PropTypes } from 'react';
import FilterLink from './FilterLink';
import constants  from '../constants';

class ControlBlock extends Component { 
	render() {
	    return (
			<div className="controlBlock">
				<FilterLink {...this.props} name = "All"  />
				<FilterLink {...this.props} name = "Active" target={constants.GET_ACTIVE} />
				<FilterLink {...this.props} name = "Completed" target={constants.GET_COMPLETED} />
			</div>
	);
	}
}

ControlBlock.propTypes = {
	onFilter: PropTypes.func
};

export default ControlBlock;
