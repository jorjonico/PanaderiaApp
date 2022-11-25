import BreadDetailsScreen from "../screens/BreadDetailsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryBreadScreen from "../screens/CategoryBreadScreen";
import { NavigationContainer } from "@react-navigation/native";
import colors from "../assets/constants/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Categories" screenOptions={{
                headerStyle:{backgroundColor: colors.primary},
                headerTintColor: colors.white,
                headerTitleStyle:{
                    fontFamily: 'LoraBold',
                }
            }}>
                <Stack.Screen name="Categories" component={CategoriesScreen} options={{title: 'Panadería La Flauta'}}/>
                <Stack.Screen name="Bread" component={CategoryBreadScreen} options={({route}) => ({title: route.params.name,})}/>
                <Stack.Screen name="Details" component={BreadDetailsScreen} options={({route}) => ({title: route.params.name,})}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};