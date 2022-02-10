import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, ThemeProvider } from 'react-native-elements';
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { RecoilRoot } from 'recoil'

import Landing from './Landing'
import { AddCardPage } from './addCard'

import { theme } from './themes/Theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>

      <SafeAreaProvider>
        <RecoilRoot>

          {/* <Header
          centerComponent={{ text: 'Header', style: styles.heading }} />
        <Landing /> */}
          <NavigationContainer>
            <Stack.Navigator>
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
