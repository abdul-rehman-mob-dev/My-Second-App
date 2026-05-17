import React from "react";
import { Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useStatusBar from "../../hooks/useStatusBar";
import { Box, Text } from "../../Themes";

const Home1 = () => {
  const insets = useSafeAreaInsets();

  useStatusBar({
    backgroundColor: "#FFFFFF",
    barStyle: "dark-content",
  });

  return (
    <Box style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text>Home1</Text>
    </Box>
  );
};

export default Home1;
