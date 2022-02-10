import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { RecoilRoot } from 'recoil'

import Landing from './Landing'
import { AddCardPage } from './addCard'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
  );
}

const styles = StyleSheet.create({

  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
