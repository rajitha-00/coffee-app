import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { themeColors } from '../theme';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, LogBox, View } from 'react-native';
import ProductScreen from '../screens/ProductScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        contentStyle: { backgroundColor: 'white'}
       }}
      >
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeTabs} />
        <Stack.Screen name="Product" options={{headerShown: false}} component={ProductScreen} />

      </Stack.Navigator> 
    </NavigationContainer>
  )
  
}

function HomeTabs(){ 
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarIcon: ({ focused , color , size}) => menuIcons(route, focused),
      tabBarStyle:{
        marginBottom:20,
        borderRadius: 50,
        backgroundColor: themeColors.bgLight,
        marginHorizontal: 20,
      },
      tabBarItemStyle:{
        marginTop:2,
        padding:5
      }
     
    })}
    
    >
    <Tab.Screen name="home" component={HomeScreen} />
    <Tab.Screen name="favourite" component={HomeScreen} />
    <Tab.Screen name="cart" component={HomeScreen} />

  </Tab.Navigator>
  )
}

const menuIcons = (route, focused)=> {
  let icon;
  

  if (route.name === 'home') {
    icon =  focused? <Image 
    source={require('../assets/icons/home.png')} 
    className="w-5 h-5 rounded-full"
  /> : <Image 
    source={require('../assets/icons/home1.png')} 
    className="w-5 h-5 rounded-full"
  />
  } else if (route.name === 'favourite') {
    icon =  focused? <Image  
    source={require('../assets/icons/heart.png')} 
    className="w-5 h-5 rounded-full"
  /> : <Image 
    source={require('../assets/icons/heart1.png')} 
    className="w-5 h-5 rounded-full"
  />
  }else if(route.name==='cart'){
    icon =  focused? <Image 
    source={require('../assets/icons/bag.png')} 
    className="w-5 h-5 rounded-full"
  /> : <Image 
    source={require('../assets/icons/bag1.png')} 
    className="w-5 h-5 rounded-full"
  />
  }

  
  let buttonClass = focused? "bg-white": "";
  return (
    <View className={"flex items-center rounded-full p-8 shadow " + buttonClass}>
      {icon}
    </View>
  )
}  