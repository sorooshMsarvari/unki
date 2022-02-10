import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, ThemeProvider } from 'react-native-elements';
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { RecoilRoot } from 'recoil'

import Landing from './screens/Landing'
import { AddCardPage } from './screens/addCard'

import { theme } from './themes/Theme';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>

      <SafeAreaProvider>
        <RecoilRoot>

          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
              }}
              headerMode="float"
              animation="fade"
            >
              <Stack.Screen name="fuck" component={Landing} />
              <Stack.Screen name="addCard" component={AddCardPage} />
            </Stack.Navigator>
          </NavigationContainer>
        </RecoilRoot>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({

  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
