import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../../components/CustomTabBar'

import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import Home from '../Home';
import Profile from '../Profile';
import Busca from '../Busca';
import Favoritos from '../Favoritos';
import Chat from '../Chat';

import {View, StyleSheet} from 'react-native'

const Tab = createBottomTabNavigator();

export default function MainTab () {

return (
<Tab.Navigator
	screenOptions={({ route }) => ({
		tabBarIcon: ({ color, size }) => {
			let iconName;

			switch (route.name) {
				case 'Home':
					iconName = 'home';
					break;
				case 'Profile':
					iconName = 'account-circle';
					break;
				case 'Busca':
					iconName = 'search-off';
                    break;
                    case 'Chat':
					iconName = 'chat-bubble';
					break;
				case 'Favoritos':
					iconName = 'star-rate';
					break;
			}

			return <Icon name={iconName} size={size} color={color} />;
		},
	})}
		tabBarOptions={{
		activeTintColor: '#74b9ff',
        inactiveTintColor: '#777',
        showLabel: false,
    }}
    >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Chat" component={Chat} />        
        <Tab.Screen name="Busca" component={Busca}
        options={() => ({
            tabBarIcon: () => (
                <View>
                    <LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#74b9ff', '#218c74']}>
                        <Icon name="search-off" size={26} color='#FFF'/>
                    </LinearGradient>
                </View>
            ),
        })}
    />
        <Tab.Screen name="Favoritos" component={Favoritos} />        
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    
 )}

 const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconTabRound: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#9C27B0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
});