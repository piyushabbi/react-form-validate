import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
	static propTypes = {
		children: PropTypes.func,
		onSubmit: PropTypes.func,
		rules: PropTypes.object
	};

	static defaultProps = {
		children: null,
		rules: {}
	};

	state = {
    email: { valid: true, errors: [] }
  };

	validate = (name, value) => {
		const rules = this.props.rules[name];

		if (typeof rules === 'undefined') return;

		let valid = true;
		let errors = [];

		rules.forEach(({ errorMessage, rule }) => {
			if (rule(value)) return;
			valid = false;
			errors = [...errors, errorMessage];
		});

		this.setState({ [name]: { valid, errors } });
	};

	isValid = () => {
		const keys = Object.keys(this.state);

		let i = keys.length;
		while (i--) {
			if (!this.state[keys[i]].valid) return false;
		}

		return true;
	};

	handleChange = event => {
		const {
			target: { name, value }
		} = event;

		this.validate(name, value);
		if (typeof this.props.onChange === 'function') this.props.onChange(event);
	};

	handleSubmit = event => {
		if (typeof this.props.onSubmit === 'function') {
			this.props.onSubmit(event, this.isValid(), this.state);
		}
	};

	getValidation = () => ({
		_isValid: this.isValid(),
		...this.state
	});

	render = () => {
		const { rules, ...props } = this.props;

		return (
			<form
				{...props}
				onChange={this.handleChange}
				onSubmit={this.handleSubmit}
			>
				{this.props.children(this.getValidation())}
			</form>
		);
	};
}
