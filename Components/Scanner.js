import React from 'react'
import { View, Text,TouchableOpacity} from 'react-native'
import {homeStyle} from '../style/home';
import {fontsStyle} from "../style/fonts";
import {globalStyle} from "../style/global";



class Scanner extends React.Component {

      
  handleScanPress = () => {
    alert('Je scan un produit')
  }

  render() {
    return (

        <View style={homeStyle.scanButtonView}>
        <TouchableOpacity style={homeStyle.scanButton} onPress={this.handleScanPress}>
        <Text style={fontsStyle.scanButtonText}>Scanner</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

export default Scanner