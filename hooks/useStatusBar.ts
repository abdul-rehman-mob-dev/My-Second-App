// hooks/useStatusBar.ts
import { useEffect } from "react";
import { StatusBar, Platform } from "react-native";

type StatusBarStyle = "light-content" | "dark-content";

interface StatusBarConfig {
  backgroundColor?: string;
  barStyle?: StatusBarStyle;
}

const useStatusBar = ({
  backgroundColor = "#FFFFFF",
  barStyle = "dark-content",
}: StatusBarConfig) => {
  useEffect(() => {
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor(backgroundColor); // ← animated parameter hatao
    }
    StatusBar.setBarStyle(barStyle); // ← animated parameter hatao
  }, [backgroundColor, barStyle]);
};

export default useStatusBar;
