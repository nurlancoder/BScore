import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { View, ActivityIndicator } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import BSScore1Screen from './screens/BSScore1Screen';
import BSScore2Screen from './screens/BSScore2Screen';
import BSScore3Screen from './screens/BSScore3Screen';
import BSScore4Screen from './screens/BSScore4Screen';
import BSScore5Screen from './screens/BSScore5Screen';
import BSScore6Screen from './screens/BSScore6Screen';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-Medium': Poppins_500Medium,
    'Poppins-SemiBold': Poppins_600SemiBold,
    'Poppins-Bold': Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#804EC1" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BSScore1" component={BSScore1Screen} />
        <Stack.Screen name="BSScore2" component={BSScore2Screen} />
        <Stack.Screen name="BSScore3" component={BSScore3Screen} />
        <Stack.Screen name="BSScore4" component={BSScore4Screen} />
        <Stack.Screen name="BSScore5" component={BSScore5Screen} />
        <Stack.Screen name="BSScore6" component={BSScore6Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

