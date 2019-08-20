import React from 'react';
import { Platform } from 'react-native'

import { TabNavigator, DrawerNavigator} from './routes'

import { createAppContainer } from 'react-navigation'

const AndroidNavigator = createAppContainer(DrawerNavigator)
const IosNavigator = createAppContainer(TabNavigator)

const App = () => Platform.OS === 'ios' ? <IosNavigator /> : <AndroidNavigator />

export default App
