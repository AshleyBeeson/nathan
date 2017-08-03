import React, { Component } from 'react';


export default class Home extends Component {
  render() {
  return(
    <div className='home'>
      <div>
        <p className='mdl-textfield mdl-js-textfield' id='firstPara'>This the home page of the tracker.</p>
      </div>
      <div>
        <p className='mdl-textfield mdl-js-textfield'>To see the record of bugs, click the 'View Bugs' button.</p>
      </div>
      <div>
        <p className='mdl-textfield mdl-js-textfield'>To submit a new bug report, click the 'Report Bug' button.</p>
      </div>
    </div>
  );
  }
}
