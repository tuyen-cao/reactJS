import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import todoActionCreator from '../actions/todoActionCreator';
import todoStore from '../store/todoStore';

class Link extends Component {
	handleFilter() {
		this.props.onFilter(this.props.target);
	}
	render() {
		if(this.props.active) {
			return (
				<span>{this.props.children}</span>
			)
		}
		else{
			return (
			    <a href="#"
			       onClick={e => {
			         e.preventDefault()
			         this.props.onFilter()
			       }}
			    >
			      {this.props.children}
			    </a>
		  	)
		}		
	}
}

Link.propTypes = {
	active: PropTypes.bool,
	children: PropTypes.node,
	onFilter: PropTypes.func
};


const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.target === state.todoReducer.target,
		todos: state.todoReducer.todos
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onFilter: (target) => dispatch(todoActionCreator.filterTodo(ownProps.target))
	}
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)


export default FilterLink