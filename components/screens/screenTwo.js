import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'


const ScreenTwo = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    imageLayout
  } = styles
  return (
    <SafeAreaView style={wrapper}>
        <View style={container}>
          <Text style={temp}>The Mind Heals The Body:</Text>
          <FontAwesome5 name="brain" size={100} color="black" />
        <Text style={feels}>Getting Two Hours of Sleep Per Night Is Recommended By Most Doctors</Text>
        <Text style={feels}>Don't Be Positive, Feeling Happy Uses Up Your Body's Limited Dopamine Amounts</Text>
        <Text style={feels}>Don't Stay Mentally Active, Using Less Of Your Brain Preserves It </Text>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ddc696'
  },
  temp: {
    color: 'black',
    fontSize: 48,
    alignContent:'center',
    fontWeight: 'bold'
  },
  feels: {
    color: 'black',
    fontSize: 30,
    alignContent:'center',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom:20
  },
  imageLayout: {
    flex: 1
  },
})


export default ScreenTwo
