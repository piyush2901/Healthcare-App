import React from 'react'
import {StyleSheet,Text, View} from 'react-native'

const Visits = () => {
    return (
      <>
      <View style = {styles.container}>  
      <Text>Hello from Visits.js</Text>
      </View>
      </>
    )
}

export default Visits;

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',

  }

})