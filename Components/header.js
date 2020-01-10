import React from 'react'
import { View, Text } from 'react-native'
import {globalStyle} from "../style/global";



class Header extends React.Component {
  render() {
    return (

        <View style={globalStyle.header}>
          <Text style={globalStyle.headerText}>
            {this.props.title}
            </Text>
        </View>

    );
  }
}

export default Header