import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Component1 from './src/Screens/component1';
import Styling from './src/CSS/Styling';
import Component2 from './src/Screens/Component2';
import Header from './src/Screens/header'
import Component3 from './src/Screens/Component3';
import SubComponent3 from './src/Screens/SubComponent3';
import PopularCurations from './src/Screens/PopularCurations'
import PopularBrands from './src/Screens/PopularBrands';
import Instamart from './src/Screens/Instamart';
import BrandCard from './src/Screens/BrandCard';

const App = () => {
  return (

    <SafeAreaView style={Styling.MainContainer} >
      <Header/>
      <ScrollView showsVerticalScrollIndicator={false} >
        <Component1 />
        <Component2/>
        <Component3/>
        <SubComponent3/>
        <View style={{borderColor:"whitesmoke",borderBottomWidth:10,borderTopWidth:10 ,marginTop:10,}}>
         <PopularBrands/></View>
        <View style={{borderColor:"whitesmoke",borderBottomWidth:10 ,marginTop:10,}}>
         <PopularCurations/></View>
         <View style={{borderColor:"whitesmoke",borderBottomWidth:10 ,marginTop:10,}}>
         <Instamart/></View>
       

      </ScrollView>
    </SafeAreaView>

  )
}

export default App;
