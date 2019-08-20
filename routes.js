import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Pokedex from './screens/Pokedex'
import Details from './screens/Details'
import Search from './screens/Search'
import Id from './screens/Id'

export const AppNavigator = createStackNavigator({ Pokedex, Details })
export const SearchNavigator = createStackNavigator({ Search, Details })
export const IdNavigator = createStackNavigator({ Id })

export const TabNavigator = createBottomTabNavigator(
  {
    Pokedex: {
      screen: AppNavigator,
      navigationOptions: {
        tabBarLabel: 'Pokedex',
        tabBarIcon: ({ tintColor }) => <Icon name="ios-home" size={30} color={tintColor} />
      }
    },
    Search: {
      screen: SearchNavigator,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => <Icon name="ios-search" size={30} color={tintColor} />
      }
    },
    Id: {
      screen: IdNavigator,
      navigationOptions: {
        tabBarLabel: 'ID',
        tabBarIcon: ({ tintColor }) => <Icon name="ios-contact" size={30} color={tintColor} />
      }
    }
  }
)

export const DrawerNavigator = createDrawerNavigator(
  {
    Pokedex: {
      screen: AppNavigator,
      navigationOptions: {
        tabBarLabel: 'Pokedex'
      }
    },
    Search: {
      screen: SearchNavigator,
      navigationOptions: {
        tabBarLabel: 'Search'
      }
    },
    Id: {
      screen: IdNavigator,
      navigationOptions: {
        tabBarLabel: 'ID'
      }
    }
  }
)