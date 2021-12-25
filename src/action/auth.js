import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import database from '@react-native-firebase/database';

export const signUp = (data) => async (dispatch) => {
  console.log(data);
  const {name, cmsUserName, bio, email, password, image, country} = data;

    auth().createUserWithEmailAndPassword(email, password)
    .then((data) => {
      console.log(data);
      console.log('User creation success');

      database()
      .ref('/users/' + data.user.uid)
      .set({
          name,
          cmsUserName,
          country,
          image,
          bio,
          uid: data.user.uid,
      })
      .then(() => console.log('Data set success'))
      Snackbar.show({
          text:'Account Created',
          textColor:'white',
          backgroundColor:'#1b262c',
      })
    })
    .catch((error) => {
        console.error(error)
        Snackbar.show({
            text: 'SignUp Failed',
            textColor: 'white',
            backgroundColor: 'red',
        })
    })
}


export const signIn = (data) => async (dispatch) => {
    console.log(data)
    const {email,password} = data

    auth()
        .signInWithEmailAndPassword(email,password)
            .then(() => {
                console.log('Sign in success')
                Snackbar.show({
                    text:'Account signed in',
                    textColor:'white',
                    backgroundColor:'#1b262c',
                })
            })
            .catch((error) => {
                console.error(error)
                Snackbar.show({
                    text:'Sign In failed',
                    textColor:'white',
                    backgroundColor:'red',
                })
            })
}

export const signOut = () => async (dispatch) => {
    auth()
        .signOut()
            .then(() => {
                Snackbar.show({
                    text:'Sign Out success',
                    textColor:'white',
                    backgroundColor:'#1b262c',
                })
            })
            .catch((error) => {
                console.log(error)
                Snackbar.show({
                    text:'Sign Out failed',
                    textColor:'white',
                    backgroundColor:'red',
                })
            })
}