import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainRoutes from './MainRoutes';

export default class App extends Component {




  render() {
    return (
      <div className='App'>
        <Header />
        <MainRoutes />
        <Footer />
      </div>
    );
  }
}

//<img src='images/bug' className='App-logo' alt='logo' />
