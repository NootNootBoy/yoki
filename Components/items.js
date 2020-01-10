import React from 'react'
import { View, Text,TouchableOpacity} from 'react-native'
import {homeStyle} from '../style/home';
import {fontsStyle} from "../style/fonts";
import {globalStyle} from "../style/global";



export default class Items extends React.Component {
  constructor() {
    super();
  }

  render() {

    console.log(this.props.product);
    return (
        <TouchableOpacity onPress={() => this.props.onPressItem(this.props.product.id)} style={homeStyle.productContainer}>
          <Text style={fontsStyle.productName}>
            {this.props.product.name}
            </Text>
          <Text style={fontsStyle.productScanDate}>
            {this.props.product.date.toDateString()}
          </Text>
          <Text style={fontsStyle.productScanDate}>
            {this.props.product.stores}
          </Text>
        </TouchableOpacity>
    );
  }
}
