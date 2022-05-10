import { Artists } from './src/screens/Artists';
import { Home } from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { User } from './src/screens/User';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const MenuNavigation = createBottomTabNavigator();



export default function App() {
  return (
<NavigationContainer>
  <MenuNavigation.Navigator screenOptions={{headerShown:false}}>
    <MenuNavigation.Screen name="Home" component={Home} options={{headerShown:false,tabBarBadge:2}}/>
    <MenuNavigation.Screen name="Artists" component={Artists} />
    <MenuNavigation.Screen name="User" component={User} />
  </MenuNavigation.Navigator>
</NavigationContainer>
  );
}


