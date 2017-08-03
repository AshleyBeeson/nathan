import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return(
      <div className='mdl-layout__header--scroll'>
        <h2>Nathans Bug-tracking Tool</h2>
        <Link to={{ pathname: '/' }}><input type='button' value='Home' className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' /></Link>
        <Link to={{ pathname: '/bugs' }}><input type='button' value='View Bugs' className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' /></Link>
        <Link to={{ pathname: '/report' }}><input type='button' value='Edit Bug' className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' /></Link>
      </div>
    );
  }
}
