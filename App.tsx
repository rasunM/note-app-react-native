/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {StyleSheet} from 'react-native';
import {RootStackParamsList} from './src/types/root_stack_params';
import TaskPage from './src/screens/tasks_page';
import TaskEditPage from './src/screens/task_edit_page';
import MapsCustom from './src/screens/map_view';
import login from './src/screens/auth/login';
import RegisterPage from './src/screens/auth/register';

const Stack = createNativeStackNavigator<RootStackParamsList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskPage">
        <Stack.Screen
          name="TaskPage"
          component={TaskPage}
          options={{
            title: 'Notes',
          }}
        />
        <Stack.Screen
          name="TaskEditPage"
          component={TaskEditPage}
          options={{
            title: 'Notes Details',
          }}
        />
        <Stack.Screen
          name="MapViewApp"
          component={MapsCustom}
          options={{
            title: 'My Mapp',
          }}
        />
        <Stack.Screen
          name="Login"
          component={login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
