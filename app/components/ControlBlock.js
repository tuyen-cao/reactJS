import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FilterLink from './FilterLink';
import constants  from '../constants';
import todoActionCreator from '../actions/todoActionCreator';

class ControlBlock extends Component { 
	render() {
	    return (
			<div className="controlBlock">
				<FilterLink {...this.props} name = "All" target={constants.GET_ALL}   />
				<FilterLink {...this.props} name = "Active" target={constants.GET_ACTIVE} />
				<FilterLink {...this.props} name = "Completed" target={constants.GET_COMPLETED} />
			</div>
	);
	}
}

ControlBlock.propTypes = {
	onFilter: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFilter: (target) => dispatch(todoActionCreator.filterTodo(target))
	}
};

const ControlBlock = connect(
  mapDispatchToProps
)(FilterLink)

export default ControlBlock;
