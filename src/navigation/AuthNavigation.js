import AuthScreen from "../screens/AuthScreen";
import colors from "../assets/constants/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
    return(
            <Stack.Navigator 
                initialRouteName="Login" 
                screenOptions={{
                    headerStyle:{backgroundColor: colors.primary},
                    headerTintColor: colors.white,
                    headerTitleStyle:{
                        fontFamily: 'LoraBold',
                    }
            }}>
                <Stack.Screen 
                name='Login'
                component={AuthScreen}
                />
            </Stack.Navigator>
    );
};