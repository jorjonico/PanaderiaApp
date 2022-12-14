import { StyleSheet, Text, View } from 'react-native';

import CartNavigator from './CartNavigator';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import OrderNavigator from './OrderNavigator';
import ShopNavigator from './ShopNavigator';
import colors from '../assets/constants/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import fontSize from '../assets/constants/fontSize';

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
                <BottomTabs.Screen name='ShopTab' component={ShopNavigator} options={{
                    tabBarIcon:({focus}) => (
                        <View style={styles.item}>
                            <Ionicons name="ios-home-outline" size={25} color={colors.primary} />
                            <Text style={styles.tabFont}>Tienda</Text>
                        </View>
                    )
                }}/>
                <BottomTabs.Screen name='CartTab' component={CartNavigator} options={{
                    tabBarIcon:({focus}) => (
                        <View style={styles.item}>
                            <Ionicons name="ios-cart-outline" size={25} color={colors.primary} />
                            <Text style={styles.tabFont}>Carrito</Text>
                        </View>
                    )
                }}/>
                <BottomTabs.Screen name='OrderTab' component={OrderNavigator} options={{
                    tabBarIcon:({focus}) => (
                        <View style={styles.item}>
                            <Ionicons name="list" size={25} color={colors.primary} />
                            <Text style={styles.tabFont}>Ordenes</Text>
                        </View>
                    )
                }}/>
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
    item: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',    
    },
    tabFont: {
        fontFamily:'LoraReg',
        color:colors.primary,
        fontSize:fontSize.h2,
    }
})

