// Screens/Onboarding/Onboarding1.tsx
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
  "Onboarding1"
>;

const Onboarding1 = () => {
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
      {/* Image */}
      <Box
        borderRadius="l"
        overflow="hidden"
        marginTop="xxl"
        style={{ alignItems: "center" }}
      >
        <Image
          source={require("../../Images/OnboardingScreen/1.jpg")}
          style={{ width: 240, height: 292 }}
        />
      </Box>

      {/* Text Content */}
      <Box style={{ alignItems: "center" }} marginTop="xxl">
        <Text variant="heading1">All your favorites</Text>

        <Text
          variant="bodyMedium"
          color="subText"
          marginTop="m"
          style={{ textAlign: "center" }}
        >
          Get all your loved foods in one place,{"\n"}
          you just place the order we do the rest
        </Text>
      </Box>

      {/* Slide Indicator */}
      <Box marginTop="l">
        <Image
          source={require("../../Images/OnboardingScreen/Slide1.png")}
          style={{ width: 76, height: 10 }}
        />
      </Box>

      {/* NEXT Button */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ width: 327, height: 62, marginTop: 111 }}
        onPress={() => navigation.navigate("Onboarding2")} // ← Navigate
      >
        <Box
          backgroundColor="primaryButton"
          borderRadius="l"
          alignItems="center"
          justifyContent="center"
          style={{ height: 62 }}
        >
          <Text variant="button">NEXT</Text>
        </Box>
      </TouchableOpacity>

      {/* Skip */}
      <TouchableOpacity
        style={{ marginTop: 16 }}
        onPress={() => {}} // ← Skip bhi navigate
      >
        <Text color="subText" style={{ textAlign: "center" }}>
          Skip
        </Text>
      </TouchableOpacity>
    </Box>
  );
};

export default Onboarding1;
