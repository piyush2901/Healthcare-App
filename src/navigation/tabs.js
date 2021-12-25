import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet , View , Text , Image , TouchableOpacity} from 'react-native';



import Me from '../screens/Me';
import AddPost from '../screens/AddPost';
import Visits from '../screens/Visits';
import Home from '../screens/Home';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style:{
                    position:'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen name = "Home" component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image 
                            source={require('../assets/icons/home.png')}
                        />
                        <Text>Home</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name = "Me" component={Me} />
            <Tab.Screen name = "AddPost" component={AddPost} />
            <Tab.Screen name = "Visits" component={Visits} />
        </Tab.Navigator>
    );
}

export default Tabs;

const styles=StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width:0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
});