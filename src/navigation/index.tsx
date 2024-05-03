import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DetailScreen, HomeScreen } from '@Screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@Model/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: 'Home' }}
          />
          <RootStack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={{ title: 'Details' }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppNavigator;
