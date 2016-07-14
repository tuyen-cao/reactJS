import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import constants  from '../constants';
import todoActionCreator from '../actions/todoActionCreator';

class FilterLinkInner extends Component { 
	handleFilter() {
		this.props.onFilter(this.props.target);
	}
	render() {
	    return (
			<a href="#" title={this.props.name}
				onClick={e => {
					e.preventDefault()
					this.handleFilter()
				}}>{this.props.name}</a>
	); }
}

FilterLinkInner.propTypes = {
	onFilter: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFilter: (target) => dispatch(todoActionCreator.filterTodo(target))
	}
};

const FilterLink = connect(
  mapDispatchToProps
)(FilterLinkInner)

export default FilterLink;
