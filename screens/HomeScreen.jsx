import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import { TextInput } from 'react-native'
import { categories, coffeeItems } from '../constants';
import React, { useState } from 'react'
import {themeColors} from '../theme';
import Carousel from 'react-native-snap-carousel';
import CoffeeCard from '../components/coffeeCard';


const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(1);
  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />
      <Image source={require('../assets/images/beansBackground1.png')} 
      className="w-full absolute -top-5 opacity-10"
      style={{height: 220}}

      />
      <SafeAreaView className="flex-1">

        <View className="px-4 flex-row justify-between items-center mt-10">
          <Image 
            source={require('../assets/images/avatar.png')} 
            className="w-9 h-9 rounded-full"
          />
          <View className="flex-row items-center space-x-2">
            <Image 
              source={require('../assets/icons/location.png')} 
              className="w-9 h-9 rounded-full"
            />
            <Text className="text-base font-semibold"> New York, NYC</Text>
          </View>
          <Image 
            source={require('../assets/icons/bell.png')} 
            className="w-9 h-9 rounded-full"
          />
        </View>

        {/* search  bar */}
        <View className="mx-5 shadow" style={{marginTop: height*0.06}}>
          <View className="flex-row justify-center items-center rounded-full p-1 bg-slate-300 shadow-slate-900">
            <TextInput placeholder='Search' className="p-3 flex-1 font-semibold text-gray-700" />
            <TouchableOpacity className="p-2 rounded-full"
            style={{backgroundColor: themeColors.bgLight}}
            >
              <Image 
                source={require('../assets/icons/search.png')} 
                className="w-9 h-9 rounded-full"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* categories */}
        <View className="px-5 mt-6">

          <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={item=> item.id}
          className="overflow-visible"
          renderItem={({item})=>{
            isActive = item.id==activeCategory;
            let activeTextClass = isActive? 'text-white': 'text-gray-700';
            return (
              <TouchableOpacity 
              onPress={()=> setActiveCategory(item.id)}
              style={{backgroundColor: isActive? themeColors.bgLight: 'rgba(0,0,0,0.07)'}} 
              className="p-4 px-5 h- mr-2 rounded-full shadow">
                <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
              </TouchableOpacity>
            )
          }}
          />
        </View>
{/* coffee cards */}
        <View className={`overflow-visible flex justify-center flex-1 ${ios? 'mt-10':''}`}>
          <View>
            <Carousel
              containerCustomStyle={{overflow: 'visible'}}
              data={coffeeItems}
              renderItem={({item})=> <CoffeeCard item={item} />}
              firstItem={1}
              loop={true}
              inactiveSlideScale={0.75}
              inactiveSlideOpacity={0.75}
              sliderWidth={width}
              itemWidth={width*0.63}
              slideStyle={{display: 'flex', alignItems: 'center'}}
            />
          </View>
          
        </View>
      </SafeAreaView>
      
    </View>
  )
}