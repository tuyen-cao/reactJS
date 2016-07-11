import React, { Component, PropTypes } from 'react';
import constants  from '../constants';

class FilterLink extends Component { 
	handleFilter() {
		this.props.onFilter(this.props.target);
	}
	render() {
	    return (
			<a href="#" title={this.props.name} target={constants.GET_ALL} 
				onClick={e => {
					e.preventDefault()
					this.handleFilter()
				}}>{this.props.name}</a>
	); }
}

FilterLink.propTypes = {
	onFilter: PropTypes.func
};

export default FilterLink;
