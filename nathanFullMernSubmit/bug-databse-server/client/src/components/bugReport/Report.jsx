import React, {Component} from 'react';

let severity = '';
//let highPriority = '';

export default class Contact extends Component {
	handleSubmit(e) {
		e.preventDefault()
	}

	getSeverity(e){
		severity = e.target.value;
	}

	// getPriority(e){
	// 	highPriority = e.target.value;
	// }

	render(){

		return(
			<div id='formDiv'>
      <h3>Bug Report Update Form</h3>

				<form className = 'bugReport' id='reportForm' >
					<table className='mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp'>
						<tr className='formRow'>
							<td className='mdl-textfield__input'>id:</td>
							<td className='' id='id' ><input type='text' placeholder='Enter bug id number' /></td>
						</tr>
						<tr className='formRow'>
							<td className='rowElement'>issueId:</td>
							<td className='rowElement'><input type='text' className='inputElement' placeholder='Enter issue Id number' id='firstName' /></td>
						</tr>
						<tr className='formRow'>
							<td className='rowElement'>date created:</td>
							<td className='rowElement'><input type='date' className='inputElement' id='dateCreated' /></td>
						</tr>
            <tr className='formRow'>
							<td className='rowElement'>Summary:</td>
							<td className='rowElement'><textarea className='inputElement' placeholder='Enter bug summary' id='summary' /></td>
						</tr>
            <tr className='formRow'>
							<td className='rowElement'>Description:</td>
							<td className='rowElement'><textarea className='inputElement' placeholder='Enter bug description' id='description' /></td>
						</tr>
						<tr className='formRow'>
							<td className='rowElement'>High Priority:</td>
							<td className='rowElement'><input type='radio' className='mdl-data-table--selectable' value='TRUE' id='true' name='priority' defaultChecked />TRUE<br/>
                                          <input type='radio' className='mdl-data-table--selectable' value='FALSE' id='false' name='priority'/>FALSE</td>
						</tr>
						<tr className='formRow'>
							<td className='rowElement' id='severity'>Severity:</td>
							<td className='rowElement' value='select' onChange={this.getSeverity.bind(this)}><select className='inputElement'>
										<option>Select</option>
										<option>HIGH</option>
										<option>MEDIUM</option>
										<option>LOW</option>
									</select></td>
						</tr>
            <tr className='formRow'>
							<td className='rowElement'>Assigned User:</td>
							<td className='rowElement'><input type='text' className='inputElement' id='assignee' placeholder='Enter assignee here' /></td>
						</tr>
            <tr className='formRow'>
							<td className='rowElement'>Reporter:</td>
							<td className='rowElement'><input type='text' className='inputElement' id='reporter' placeholder='Enter your name here' /></td>
						</tr>
          </table>
					<button type='submit' className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' id='submit' >Submit</button>
				</form>

			</div>

		);
	}
}
// <button type='text' className='Btn' onClick={this.outputJson}>View feedback</button>
// <p id='comments' placeholder='Previous feedback:'></p>
