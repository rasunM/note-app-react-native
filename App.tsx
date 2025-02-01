/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
  StyleSheet,

} from 'react-native';
import { RootStackParamsList } from './src/types/root_stack_params';
import TaskPage from './src/screens/tasks_page';

const Stack = createNativeStackNavigator<RootStackParamsList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TaskPage'>
        <Stack.Screen name='TaskPage' component={TaskPage} options={{
          title: 'Notes'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
