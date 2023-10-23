import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
} from 'react-native'


const ScreenOne = () => {
  const {
    container,
    text
  } = styles
  return (
    <SafeAreaView style={container}>
      <Text style={text}>Human Anatomy:</Text>
       <ImageBackground
        source={require('../../components/images/Dog.jpg')}
        style={styles.image}
      />
      <Text style={text}>BMI Chart:</Text>
      <ImageBackground
        source={require('../../components/images/BMI.png')}
        style={styles.image2}
      />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ddc696'
  },
  text: {
    fontSize: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black'
  },
  image: {
      marginTop: 5,
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
      height: 300,
      width: 390
  },
  image2: {
    marginTop: 5,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 230,
    width: 390
}
})


export default ScreenOne
