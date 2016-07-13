import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import ExampleComponent from './exampleComponent';

class app extends Component {
  static propTypes = {
    exampleProp: PropTypes.string.isRequired,
  }

  render() {
    const { exampleProp } = this.props;
    return (
      <View>
        <ExampleComponent exampleProp={exampleProp} />        
      </View>
    );
  }
}

const mapStateToProps = state => ({ 
    exampleProp: state.exampleReducer.exampleReducerFunction,
});

export default connect(mapStateToProps)(app);
