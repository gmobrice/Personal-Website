import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from '../components/Layout/Layout';
import { Home } from '../pages/Home';

import './App.scss';

export default class App extends Component {
  static displayName = "Gustavo Mobrice";

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
      </Layout>
    );
  }
}
