import React, { useEffect } from "react";
import { Image } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Box } from "../../Themes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useStatusBar from "../../hooks/useStatusBar";
import { RootStackParamList } from "../../Navigation/AppNavigator";

// ✅ Navigation type
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Splash1 = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp>();

  useStatusBar({
    backgroundColor: "#FFFFFF",
    barStyle: "dark-content",
  });

  // ✅ 1 second baad Splash2 par jao
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Splash2");
    }, 1000);

    return () => clearTimeout(timer); // ← Cleanup
  }, []);

  return (
    <Box
      flex={1}
      backgroundColor="mainBackground"
      justifyContent="center"
      alignItems="center"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <Image
        source={require("../../Images/SplashScreen/Logo.png")}
        resizeMode="contain"
        style={{ width: 122, height: 59 }}
      />
    </Box>
  );
};

export default Splash1;
