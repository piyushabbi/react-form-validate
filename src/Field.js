import React, { Component, Fragment } from 'react';

class Field extends Component {
	render() {
		let el = '';
		switch (this.props.eltype) {
			case 'input':
				el = (
					<Fragment>
						<input {...this.props} />
						{this.props.error && <i>{this.props.error}</i>}
					</Fragment>
				);
				break;
			case 'textarea':
				el = (
					<Fragment>
						<textarea {...this.props} />
						{this.props.error && <i>{this.props.error}</i>}
					</Fragment>
				);
				break;
			default:
				el = (
					<Fragment>
						<input {...this.props} />
						{this.props.error && <i>{this.props.error}</i>}
					</Fragment>
				);
		}
		return (
			<div>
				{this.props.label}: &nbsp;
				{el}
				<br />
				<br />
			</div>
		);
	}
}

export default Field;
