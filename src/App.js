CMS-async-storage/async-storage';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import FooterTabs from './layout/CustomFooter';
import Me from './screens/Me';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer(){
    
    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator
        drawerStyle={{backgroundColor:'#1b262c'}}
        drawerType={dimensions.width>=768 ? 'permanent' : 'front'}
        overlayColor="transparent"
        >
            <Drawer.Screen
            name="Medical Doses"
            component = {Doses}
            options={{drawerLabel: 'Medical Doses'}}
            />
            <Drawer.Screen
            name="Prescriptions"
            component = {Prescriptions}
            options={{drawerLabel: 'E-Prescription'}}
            />
            <Drawer.Screen
            name="Appointments"
            component = {Visits}
            options={{drawerLabel: 'Appointments'}}
            />
        </Drawer.Navigator>
    )
}





const App = ({authState}) => {

    
    /*const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    
    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if(value == null){
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        });
    },[]);

    if(isFirstLaunch == null){
        return null;
    } else if (isFirstLaunch == true){
        return(
            <NavigationContainer>
                <Stack.Screen name ='OnboardingScreen' component={OnboardingScreen} />
            </NavigationContainer>
        );
    } else {
        <SignIn/>
    }
    */

    const dispatch = useDispatch(); 
    
    const onAuthStateChanged = (user) => {
        if (user){
            dispatch({
                type:IS_AUTHENTICATED,
                payload:true,
            })

            console.log(user._user.uid)

            database()
              .ref(`/users/${user._user.uid}`)
              .on('value', (snapshot) => {
                  console.log('User Details:',snapshot.val())
                  dispatch({
                      type: SET_USER,
                      payload:snapshot.val(),
                  })
              })
        } else{
            dispatch({
                type:IS_AUTHENTICATED,
                payload:false,
            })
        }
    }

    useEffect(() => {
        requestPermission();
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
        return subscriber;
    }, [])

    if (authState.loading) {
        return <EmptyContainer/>
    }

    return(
       <> 
       <NavigationContainer>
       <Stack.Navigator
       screenOptions={{
           header: (props) => <CustomHeader {...props}/>
       }}
       >
            {authState.isAuthenticated ? (
             <>
             <Stack.Screen name ='Home' component={Home} />
             /*<Stack.Screen name ='Visits' component={Visits} />
             <Stack.Screen name ='Doses' component={Doses} />
             <Stack.Screen name ='Me' component={Me} />*/
             <Stack.Screen name ='AddPost' component={AddPost} />
             </> 
            ) : (
              <>
              <Stack.Screen name ='OnboardingScreen' component={OnboardingScreen} />
              <Stack.Screen name ='SignIn' component={SignIn} />
              <Stack.Screen name ='SignUp' component={SignUp} />
              </>
            )}
            
        </Stack.Navigator>
        </NavigationContainer>
        </>
    )
};

const mapStateToProps = (state) => ({
    authState: state.auth
})

export default connect(mapStateToProps)(App);