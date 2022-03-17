import React from 'react'
import { Text,View,Image,TouchableOpacity } from 'react-native'
import Styling from '../CSS/Styling'

function Footer() {
  return (
    <View style={Styling.Footer}>
  <TouchableOpacity><Image source={require('../Images/Swiggy.png')} style={Styling.FooterImg} ></Image></TouchableOpacity>
  <TouchableOpacity><Image source={require('../Images/Search.png')} style={Styling.FooterImg}></Image></TouchableOpacity>
  <TouchableOpacity><Image source={require('../Images/bag.png')} style={Styling.FooterImg}></Image></TouchableOpacity>
  <TouchableOpacity><Image source={require('../Images/user.png')} style={Styling.FooterImg} ></Image></TouchableOpacity>

   </View>
  )
}

export default Footer