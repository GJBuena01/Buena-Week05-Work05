import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DashboardScreen from '../navigation/screens/DashboardScreen';
import SensorsScreen from '../navigation/screens/SensorsScreen';
import DevicesScreen from '../navigation/screens/DevicesScreen';
import SettingsScreen from '../navigation/screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
      />

      <Drawer.Screen
        name="Sensors"
        component={SensorsScreen}
      />

      <Drawer.Screen
        name="Devices"
        component={DevicesScreen}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}