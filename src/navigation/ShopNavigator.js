import BreadDetailsScreen from "../screens/BreadDetailsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryBreadScreen from "../screens/CategoryBreadScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Categories" component={CategoriesScreen}/>
                <Stack.Screen name="Bread" component={CategoryBreadScreen}/>
                <Stack.Screen name="Details" component={BreadDetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};