// Screens/OnboardingScreens/Onboarding3.tsx
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Box, Text } from "../../Themes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Navigation/AppNavigator";
import useStatusBar from "../../hooks/useStatusBar";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Onboarding4"
>;

// ✅ Component naam Onboarding4 hona chahiye
const Onboarding4 = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp>();

  useStatusBar({
    backgroundColor: "#FFFFFF",
    barStyle: "dark-content",
  });

  return (
    <Box
      flex={1}
      backgroundColor="mainBackground"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        alignItems: "center",
      }}
    >
      <Box
        borderRadius="l"
        overflow="hidden"
        marginTop="xxl"
        style={{ alignItems: "center" }}
      >
        <Image
          source={require("../../Images/OnboardingScreen/4.jpg")}
          style={{ width: 240, height: 292 }}
        />
      </Box>

      <Box style={{ alignItems: "center" }} marginTop="xxl">
        <Text variant="heading1">Free delivery offers</Text>
        <Text
          variant="bodyMedium"
          color="subText"
          marginTop="m"
          style={{ textAlign: "center" }}
        >
          Get all your loved foods in one once place,{"\n"}
          you just place the orer we do the rest
        </Text>
      </Box>

      <Box marginTop="l">
        <Image
          source={require("../../Images/OnboardingScreen/Slide4.png")}
          style={{ width: 76, height: 10 }}
        />
      </Box>

      {/* ✅ Get Started — Login Screen par jayega */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ width: 327, height: 62, marginTop: 111 }}
        onPress={() => navigation.navigate("Login1")} // ← Login screen baad mein
      >
        <Box
          backgroundColor="primaryButton"
          borderRadius="l"
          alignItems="center"
          justifyContent="center"
          style={{ height: 62 }}
        >
          <Text variant="button">Get Started</Text>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default Onboarding4; // ✅ Sahi naam
