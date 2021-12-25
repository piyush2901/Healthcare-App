import React from 'react'
import {StyleSheet,Text} from 'react-native'

const Me = () => {
    return (
      <>  
      <View style = {styles.container}>  
      <Text>Hello from Me.js</Text>
      </View>
      </>
    )
}

export default Me;

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',

  }

})