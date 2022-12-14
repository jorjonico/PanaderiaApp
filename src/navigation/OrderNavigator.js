import OrdersScreen from "../screens/OrdersScreen";
import colors from "../assets/constants/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
    return(
            <Stack.Navigator initialRouteName="Orders" screenOptions={{
                headerStyle:{backgroundColor: colors.primary},
                headerTintColor: colors.white,
                headerTitleStyle:{
                    fontFamily: 'LoraBold',
                }
            }}>
                <Stack.Screen name="Orders" component={OrdersScreen} options={{title: 'Ordenes'}}/>
            </Stack.Navigator>
    )
};