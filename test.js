import React, { Component } from 'react';
import { Text, Image, Button, AsyncStorage } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Dropdown from './FancyMenus';

export const Drawer = DrawerNavigator(
	{
		Home: {
			screen: Dropdown
		}
	},
	{
		initialRouteName: 'Home',
		drawerPosition: 'left',
		drawerWidth: 120,
		alignItems: 'center',
		contentOptions: {
			activeTintColor: 'rgba(0, 0, 0, 0.3)'
		},
	}
)
