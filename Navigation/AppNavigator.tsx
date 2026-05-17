// Navigation/AppNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash1 from "../Screens/SplashScreens/Splash1";
import Splash2 from "../Screens/SplashScreens/Splash2";
import Onboarding1 from "../Screens/OnboardingScreens/Onboarding1";
import Onboarding2 from "../Screens/OnboardingScreens/Onboarding2";
import Onboarding3 from "../Screens/OnboardingScreens/Onboarding3";
import Onboarding4 from "../Screens/OnboardingScreens/Onboarding4";
import Login1 from "../Screens/LoginScreens/Login1";
import Home1 from "../Screens/HomeScreens/Home1";
import SignUp1 from "../Screens/LoginScreens/SignUp1";

export type RootStackParamList = {
  Splash1: undefined;
  Splash2: undefined;
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined; // ✅ Capital O — "onboarding3" tha pehle
  Onboarding4: undefined;
  Login1: undefined;
  SignUp1: undefined;
  Home1: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash1"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash1" component={Splash1} />
      <Stack.Screen name="Splash2" component={Splash2} />
      <Stack.Screen name="Onboarding1" component={Onboarding1} />
      <Stack.Screen name="Onboarding2" component={Onboarding2} />
      <Stack.Screen name="Onboarding3" component={Onboarding3} />
      <Stack.Screen name="Onboarding4" component={Onboarding4} />
      <Stack.Screen name="Login1" component={Login1} />
      <Stack.Screen name="SignUp1" component={SignUp1} />
      <Stack.Screen name="Home1" component={Home1} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
