import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from '../components/Layout/Layout';
import { Home } from '../components/Home';

import '../styles/general.scss';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/mylinkedin' component={ () => { window.location.href = 'https://linkedin.com/in/gmobrice'; return null; }} />
        {/* <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} /> */}
      </Layout>
    );
  }
}
