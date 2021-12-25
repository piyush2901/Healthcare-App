import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {StyleSheet,View} from 'react-native';
import Visits from '../screens/Visits';
import Home from '../screens/Home';
import Me from '../screens/Me';
import Doses from '../screens/Doses';
import {Text , Button,Container,Footer,FooterTab} from 'native-base';
 

const FooterTabs = ({navigation}) => { 
    {
        return (
            <Footer style={styles.footer}>
                <FooterTab>
                    <Button onPress={() => navigation.navigate('Home')}>
                        <Text>Home</Text>
                    </Button>
                    <Button onPress={() => navigation.navigate('Visits')}>
                        <Text>Visits</Text>
                    </Button>
                    <Button onPress={() => navigation.navigate('Doses')}>
                        <Text>Doses</Text>
                    </Button>
                    <Button onPress={() => navigation.navigate('Me')}>
                        <Text>Me</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
};


export default FooterTabs;

const styles = StyleSheet.create({
    footer:{
        paddingTop: 10,
        marginTop:10,
    }
})