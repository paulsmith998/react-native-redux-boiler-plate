import React, { Component } from 'react';
import { Text } from 'react-native';

export default class exampleComponent extends Component {
  render() {
    const { exampleProp } = this.props;
    return (
        <Text>{exampleProp}</Text>
    );
  }
};