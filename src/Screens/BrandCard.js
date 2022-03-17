import React from 'react'
import {Text,View,Flatlist,Image} from "react-native"
import Styling from '../CSS/Styling'
import BrandData from './BrandData'

function BrandCard() {
  return (
    <View>
    <Flatlist 
    data={BrandData}
    renderItem={(element)=>{
      return(
        <View>
    <View style={Styling.BrandCard}>
        <View >
            <Image style={Styling.BrandCardImg} source={element.item.uri}></Image>
        </View>
        <View>
            <Text style={{fontWeight:"bold",textAlign:"center"}}>{element.item.off1}</Text>
            <Text style={{textAlign:"center"}}>{element.item.text1}</Text>
        </View>
    </View>
    <View style={Styling.BrandCard}>
        <View >
            <Image style={Styling.BrandCardImg} source={element.item.url}></Image>
        </View>
        <View>
            <Text style={{fontWeight:"bold",textAlign:"center"}}>{element.item.off2}</Text>
            <Text style={{textAlign:"center"}}>{element.item.text2}</Text>
        </View>
    </View>
    </View>
      )
    }}
    >

    
    </Flatlist>
    </View>
  )
}

export default BrandCard