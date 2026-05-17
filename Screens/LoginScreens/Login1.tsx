// Screens/Auth/Login1.tsx
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, Text } from "../../Themes";
import useStatusBar from "../../hooks/useStatusBar";
import { TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Login1 = () => {
  const insets = useSafeAreaInsets();

  const navigation = useNavigation<any>();

  const [show, setShow] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  useStatusBar({
    backgroundColor: "#1A1A1A", // ← Black status bar
    barStyle: "light-content", // ← White icons (time, battery)
  });

  return (
    <Box
      flex={1}
      backgroundColor="darkBackground"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <Text
        variant="heading2"
        color="white"
        marginTop="xxl"
        style={{ textAlign: "center" }}
      >
        Log In
      </Text>
      <Text
        variant="bodyMedium"
        color="white"
        marginTop="s"
        style={{ textAlign: "center" }}
      >
        Please sign in to your existing account
      </Text>

      <Box
        flex={1}
        backgroundColor="white"
        borderTopLeftRadius="xxl"
        borderTopRightRadius="xxl"
        marginTop="xl"
      >
        <Box padding="xl">
          <Text variant="bodyMedium" color="black">
            EMAIL
          </Text>

          <TextInput
            placeholder="example@gmail.com"
            placeholderTextColor="#A0A5BA"
            keyboardType="email-address"
            style={{
              borderRadius: 10,
              width: "100%",
              height: 62,
              fontSize: 14,
              borderWidth: 1,
              borderColor: "#4A4A4A",
              padding: 15,
              marginTop: 10,
            }}
          />

          {/* spacing */}
          <Box marginTop="l" />

          <Text variant="bodyMedium" color="black">
            PASSWORD
          </Text>

          <Box
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#4A4A4A",
              backgroundColor: "#FFFFFF",
              paddingHorizontal: 15,
              height: 62,
              width: "100%",
              marginTop: 10,
            }}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor="#A0A5BA"
              secureTextEntry={!show}
              style={{
                flex: 1,
                fontSize: 14,
                color: "#1A1A1A",
              }}
            />

            <TouchableOpacity onPress={() => setShow(!show)}>
              <Ionicons
                name={show ? "eye-off-outline" : "eye-outline"}
                size={22}
                color="#9E9E9E"
              />
            </TouchableOpacity>
          </Box>
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          style={{ marginBottom: 24, marginHorizontal: 24 }}
        >
          <TouchableOpacity
            onPress={() => setRememberMe(!rememberMe)}
            style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
          >
            <Box
              style={{
                width: 18,
                height: 18,
                borderWidth: 1.5,
                borderColor: rememberMe ? "#FF6B00" : "#E0E0E0",
                borderRadius: 4,
                backgroundColor: rememberMe ? "#FF6B00" : "transparent",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {rememberMe && (
                <Ionicons name="checkmark" size={14} color="white" />
              )}
            </Box>
            <Text variant="bodyMedium">Remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text variant="bodyMedium" color="primaryButton">
              Forgot Password
            </Text>
          </TouchableOpacity>
        </Box>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Home1")}
        >
          <Box
            backgroundColor="primaryButton"
            borderRadius="l"
            alignItems="center"
            justifyContent="center"
            marginHorizontal="xl"
            marginTop="l"
            style={{ height: 56, marginBottom: 24 }}
          >
            <Text variant="button">LOG IN</Text>
          </Box>
        </TouchableOpacity>
        <Box
          flexDirection="row"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text variant="heading3">Don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp1")}>
            <Text variant="heading3" color={"primaryButton"} marginLeft={"m"}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </Box>
        <Text textAlign={"center"} variant={"bodyMedium"} marginTop={"xl"}>
          Or
        </Text>
        <Box
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          style={{ gap: 30 }}
          marginTop={"l"}
        >
          <TouchableOpacity>
            <Box
              style={{
                width: 62,
                height: 62,
                borderRadius: 510,
                backgroundColor: "#395998",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="logo-facebook" size={24} color="white" />
            </Box>
          </TouchableOpacity>

          <TouchableOpacity>
            <Box
              style={{
                width: 62,
                height: 62,
                borderRadius: 510,
                backgroundColor: "#169CE8",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="logo-twitter" size={24} color="white" />
            </Box>
          </TouchableOpacity>

          <TouchableOpacity>
            <Box
              style={{
                width: 62,
                height: 62,
                borderRadius: 510,
                backgroundColor: "#1B1F2F",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="logo-apple" size={24} color="white" />
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
};

export default Login1;
