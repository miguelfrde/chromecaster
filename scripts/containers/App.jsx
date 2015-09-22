import React from 'react';
import { connect } from 'react-redux';
import Explore from '../components/MenuBar.jsx';
import { resetErrorMessage } from '../actions';

import MenuBar from '../components/MenuBar.jsx';

export default class App extends React.Component {
  render() {
    const { location, children } = this.props;

    return (
      <div>
        <h1>APP</h1>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string.isRequired
  }),
  children: React.PropTypes.node
};

App.contextTypes = {
  history: React.PropTypes.object.isRequired
};
