import React , { Component } from 'react';

export default class BugDetails extends Component {

	// showActions() {
	// 	console.log('Display ations method called');
	// 		return this.props.actions.map((actions, idx) => {
	// 			return (
	// 				<span className='mdl-grid' key={idx}>
	// 					{ actions }
	// 				</span>
	// 				);
	// 		});
	// 	}

	render() {
		const { id, issueId, dateCreated, summary, description, highPriority, severity, reporter, assignedUser } = this.props;
		return(
			<div className='mdl-grid '>
				<div className='mdl-cell mdl-cell--1-col ' >id# { id }</div>
				<div className='mdl-cell mdl-cell--1-col'>issue Id:<br/> { issueId }</div>
				<div className='mdl-cell mdl-cell--1-col'>Date and Time Created:<br/> { dateCreated }</div>
				<div className='mdl-cell mdl-cell--1-col'>Summary:<br/> { summary }</div>
				<div className='mdl-cell mdl-cell--1-col'>Description:<br/> { description }</div>
				<div className='mdl-cell mdl-cell--1-col'>High Priority:<br/> { highPriority }</div>
				<div className='mdl-cell mdl-cell--1-col'>Severity:<br/> { severity }</div>
				<div className='mdl-cell mdl-cell--1-col'>Reporter:<br/> { reporter }</div>
				<div className='mdl-cell mdl-cell--1-col'>Assigned User:<br/> { assignedUser }</div>

			</div>
		);
	}
}
//<div className='mdl-cell mdl-cell--1-col'>Actions:<br/> { this.showActions() }</div>
