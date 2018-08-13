import React, { Component } from 'react';
import Field from './Field';

class Form extends Component {
	submitHandler = e => {
		e.preventDefault();
		let data = {};
		for (var i in this.props.formDetails) {
			data = {
				...data,
				[i]: this.props.formDetails[i].value
			};
		}
		alert(JSON.stringify(data, null, 2));
  };
  
  //@Todo: Add utility function to handle all the validations, based on given rules.
  checkValidity = (value, rules) => {
    const { required } = rules;
    if (!required) {
      return true;
    }
    return value.trim().length > 0 ? true : false;
  };
	fieldChangHandler = (event, el, rules) => {
		let { value } = event.target;
		let valueObj = {
			name: el,
			value,
			valid: this.checkValidity(value, rules)
		};
		this.props.detailChangeHandler(valueObj);
	};
	render() {
		const formArr = [];
		for (let key in this.props.formDetails) {
			formArr.push({ ...this.props.formDetails[key], key });
		}
		return (
			<form onSubmit={this.submitHandler}>
				{formArr.length &&
					formArr.map(field => (
						<Field
							key={field.key}
							{...field}
							onChange={event =>
								this.fieldChangHandler(event, field.key, field.rules)
							}
							value={field.value}
						/>
					))}
				<button>Submit</button>
			</form>
		);
	}
}

export default Form;
