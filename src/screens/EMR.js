import React,{useState} from 'react'
import {StyleSheet,ScrollView, TouchableOpacity, View} from 'react-native'

import {
    Container,
    Form,
    Item,
    Input,
    Text,
    Button,
    Thumbnail,
    Content 
} from 'native-base'

import storage from '@react-native-firebase/storage'
import {StyleSheet,Text} from 'react-native'



const EMR = () => {
    

  
  
  
    return (
      <Container style={styles.container}>
          <Content padder>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              <View style={styles.imageContainer}>
              </View>
    
              <Form>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="Name"
                    value={name}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setName(text)}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="email"
                    value={email}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="password"
                    value={password}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="Heart Rate"
                    value={cmsUserName}
                    style={{color: '#eee'}}
                    onChangeText={(text) => setCmsUserName(text)}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="Your Short Bio"
                    value={bio}
                    style={{color: '#eee'}}
                  />
                </Item>
                <Item regular style={styles.formItem}>
                  <Input
                    placeholder="Country"
                    value={country}
                    style={{color: '#eee'}}
                  />
                </Item>
              </Form>
            </ScrollView>
          </Content>
        </Container>
    )
};

export default EMR;

const styles =StyleSheet.create({
container: {
  backgroundColor: '#1b262c',
  flex: 1,
  justifyContent: 'flex-start',
},

imageContainer: {
  alignItems: 'center',
  marginVertical: 5,
},

formItem: {
  marginBottom: 20,
},
})