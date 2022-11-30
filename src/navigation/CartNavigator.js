import CartScreen from "../screens/CartScreen";
import colors from "../assets/constants/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
    return(
            <Stack.Navigator initialRouteName="Categories" screenOptions={{
                headerStyle:{backgroundColor: colors.primary},
                headerTintColor: colors.white,
                headerTitleStyle:{
                    fontFamily: 'LoraBold',
                }
            }}>
                <Stack.Screen 
                name='Cart'
                component={CartScreen}
                options={{ title:'Carrito' }}/>
            </Stack.Navigator>
    );
};