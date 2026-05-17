import React, { useState } from "react";
import { TouchableOpacity, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useStatusBar from "../../hooks/useStatusBar";
import { Ionicons } from "@expo/vector-icons";
import { Box, Text } from "../../Themes";
import { useNavigation } from "@react-navigation/native";

const SignUp1 = () => {
  const navigation = useNavigation<any>();

  const insets = useSafeAreaInsets();

  const [show, setShow] = useState<boolean>(false);

  useStatusBar({
    backgroundColor: "#1A1A1A", // ← Black status bar
    barStyle: "light-content", // ← White icons (time, battery)
  });

  return (
    <Box
      flex={1}
      backgroundColor={"darkBackground"}
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <Text
        variant="heading2"
        color="white"
        marginTop="xxl"
        style={{ textAlign: "center" }}
      >
        Sign Up
      </Text>
      <Text
        variant="bodyMedium"
        color="white"
        marginTop="s"
        style={{ textAlign: "center" }}
      >
        Please sign up to get started
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
            NAME
          </Text>

          <TextInput
            placeholder="Enter Your Name"
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

          <Text variant="bodyMedium" color="black" marginTop={"l"}>
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

          <Text variant="bodyMedium" color="black" marginTop={"l"}>
            RE-TYPE PASSWORD
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

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Home1")}
          style={{
            alignItems: "center", // Isse button container screen ke horizontally center ho jayega
            marginTop: 20, // Fields se thoda gap rakhne ke liye
          }}
        >
          <Box
            backgroundColor={"primaryButton"}
            borderRadius={"xl"}
            justifyContent={"center"}
            alignItems={"center"}
            style={{ width: 327, height: 62 }}
          >
            <Text variant={"button"}>SIGN UP</Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default SignUp1;
