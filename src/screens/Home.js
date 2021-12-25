import { FooterTab ,Container, Footer} from 'native-base';
import React from 'react'
import {StyleSheet,Text , View} from 'react-native'

import FooterTabs from '../layout/CustomFooter';

const Home = () => {
    return (
      <>
      <Container>
      <FooterTabs />
      </Container>
      </>
    )
}

export default Home;

const styles = StyleSheet.create({

  container:{
      position:'relative',
  },
  
})