/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from 'types';
import NotFoundScreen from 'screens/NotFoundScreen';
import LandingPage from 'screens/LandingPage';
import CreateTeam from 'screens/CreateTeam';

import LinkingConfiguration from './LinkingConfiguration';
import BottomTabNavigator from './BottomTabNavigator';
import ProfileScreen from 'screens/ProfileScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={LandingPage}
        options={{ title: 'Home' }}
        initialParams={{
          teamCreated: false,
          createdTeamName: '',
        }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />

      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "Profile" }} />
      <Stack.Screen name="TeamCreation" component={CreateTeam} options={{ title: "Create a Team" }} />
      <Stack.Screen
        name="TeamPage"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
        initialParams={{
          teamName: '',
        }}
      />
    </Stack.Navigator>
  );
}
