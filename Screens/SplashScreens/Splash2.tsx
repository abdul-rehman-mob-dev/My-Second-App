import React, { useEffect } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Box } from "../../Themes";
import useStatusBar from "../../hooks/useStatusBar";

// ✅ Component ka naam Splash2 hona chahiye
const Splash2 = () => {
  const navigation = useNavigation<any>();

  useStatusBar({
    backgroundColor: "#FFFFFF",
    barStyle: "dark-content",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Onboarding1");
    }, 1000);

    return () => clearTimeout(timer); // ← Cleanup
  }, []);

  return (
    <Box flex={1}>
      <Image
        source={require("../../Images/SplashScreen/Splash_Page_02.png")}
        resizeMode="contain"
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
};

export default Splash2;
