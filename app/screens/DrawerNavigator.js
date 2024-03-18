import * as React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import ListView from "./ListView";
import SettingsView from "./SettingsView";

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ListView" component={ListView}/>
      <Drawer.Screen name="SettingsView" component={SettingsView}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
