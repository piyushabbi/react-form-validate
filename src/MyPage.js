import React, { Component } from 'react';
import { isEmail } from 'validator';
import Form from './FormRP';

export default class App extends Component {
	state = { email: 'piyush.abbi@walmartlabs.com' };

	rules = {
		email: [{ 
			errorMessage: 'Invalid e-mail.',
			rule: isEmail 
		}]
	};

	handleChange = ({ target: { name, value } }) =>
		this.setState({ [name]: value });

	handleSubmit = (event, isValid, validation) => {
		event.preventDefault();
		if (!isValid) {
			return;
		}
		// Submit logic here.
		alert(JSON.stringify(this.state, null, 2));
	};

	render() {
		return (
			<Form rules={this.rules} onSubmit={this.handleSubmit}>
				{validation => (
					<React.Fragment>
						<input
							type="email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
							size={40}
							autoComplete="off"
						/>
						{!validation.email.valid && (
							<ul>
								{validation.email.errors.map(err => (
									<li key={err}>{err}</li>
								))}
							</ul>
						)}
						<button type="submit" disabled={!validation._isValid}>
							{'Submit!'}
						</button>
					</React.Fragment>
				)}
			</Form>
		);
	}
}
