import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import ButtomTabs from './components/ButtomTabs';


export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <ButtomTabs />
      {/* <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />)
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color, size }) => (<Entypo name="shopping-cart" color={color} size={size} />)

          }} />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Account',
            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={size} />)
          }}

        />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}

