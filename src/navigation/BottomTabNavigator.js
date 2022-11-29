import CartNavigator from './CartNavigator';
import { NavigationContainer } from '@react-navigation/native';
import ShopNavigator from './ShopNavigator';
import { StyleSheet } from 'react-native';
import colors from '../assets/constants/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTabs = createBottomTabNavigator();

export default MyTabs = () => {
    return (
        <NavigationContainer>
            <BottomTabs.Navigator 
                initialRouteName='ShopTab'
                screenOptions={{
                    headerShown: false, 
                    tabBarShowLabel: false, 
                    tabBarStyle: styles.tabBar
                }}>
                <BottomTabs.Screen name='ShopTab' component={ShopNavigator}/>
                <BottomTabs.Screen name='CartTab' component={CartNavigator}/>
            </BottomTabs.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        shadowColor:colors.gris,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 5,
        position:'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    },
})

