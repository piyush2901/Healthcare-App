//import { View } from 'native-base';
import React from 'react';
import { View, Text, Button,Image,TouchableOpacity,StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? 'rgba(0,0,0,0.0)' : 'rgba(0,0,0,0.3)';

    return(
        <View
            style={{
                width:5,
                height:5,
                marginHorizontal:3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => {
    return(
        <Button
        title= 'Skip'
        color='#000000'
        {...props}
    />
    )
};
const Next = ({...props}) => {
    return(
        <Button
        title= 'Next'
        color='#1b262c'
        {...props}
    />
    )
};
const Done = ({...props}) => {
    return(
    <TouchableOpacity style = {{marginHorizontal:0}}
        {...props}
    >
        <Text style={{fontSize:16}}>
        Done
        </Text>
    </TouchableOpacity>
    )
}; 


const OnboardingScreen = ({navigation}) => {
    return(
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            //DotComponent={Dots}
            onSkip={() => navigation.replace('SignIn')}
            onDone={() => navigation.navigate('SignIn')}
            pages={[
                {
                backgroundColor: '#E7EFFF',
                image: <Image source={require('../assets/image1.png')} />,
                title: 'Get in touch with the Best Doctors',
                subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#E5F2F9',
                    image: <Image source={require('../assets/image2.png')} />,
                    title: 'All of your health records at one place !',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#E7EFFF',
                    image: <Image source={require('../assets/image3.png')} />,
                    title: 'EMR at your fingertips!',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                    
            ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    },
})

