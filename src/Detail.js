import React, { Component, Fragment } from 'react';
import Form from './Form';

class Detail extends Component {
	state = {
		formDetails: {
			firstname: {
				eltype: 'input',
				type: 'text',
				placeholder: 'First Name',
				label: 'First Name',
        value: '',
        rules: {
          required: true 
        },
        valid: false
			},
			lastname: {
				eltype: 'input',
				type: 'text',
				placeholder: 'Last Name',
				label: 'Last Name',
        value: '',
        rules: {
          required: true 
        },
        valid: false
			},
			details: {
				eltype: 'textarea',
				type: 'text',
				placeholder: 'Details',
				label: 'Details',
        value: '',
        rules: {
          required: true 
        },
        valid: false
			}
		}
	};
	detailChangeHandler = data => {
		const { name, value, valid } = data;

		this.setState(prevState => ({
			formDetails: {
				...prevState.formDetails,
				[name]: {
					...prevState.formDetails[name],
          value,
          valid
				}
			}
		}));
	};
	render() {
		return (
			<Fragment>
				<h1>Details</h1>
				<Form
					formDetails={this.state.formDetails}
					detailChangeHandler={this.detailChangeHandler}
				/>
			</Fragment>
		);
	}
}

export default Detail;
