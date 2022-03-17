import React from 'react'
import {Text,View,Image} from 'react-native'
import Styling from '../CSS/Styling'

function Component3() {
  return (
    <View style={[Styling.Component3,{flexDirection:'row',paddingHorizontal:10,alignItems:"flex-start"}]}>
      <View style={{flex:0.05}} >
      <Image source={require('../Images/thumbsUp.png')} style={Styling.headerLogo} ></Image>
      </View>
      <View style={{flex:0.8}}>
        <Text style={Styling.font}>Top Picks For You</Text>
        </View>
    </View>
    

  )
}

export default Component3