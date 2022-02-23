import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "./SignIn";
import { Main } from "./Main";
import { GenerateQR } from "./GenerateQR";
import { ReadQR } from "./ReadQR";

const Stack = createNativeStackNavigator();

let localStorageData = {};
window.localStorage = {
  getItem: (key) => localStorageData[key],

  removeItem: (key) => localStorageData[key],
  setItem: (key, value) => {
    localStorageData[key] = value;
  },
  clear: () => {
    localStorageData = {};
  },
};

window.location = { ...window.location, href: "" };

export default function App() {
  console.log("Object.keys(window): ", Object.keys(window));
  console.log("window.localStorage: ", window.localStorage);
  console.log("window.location: ", window.location);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Generate QR" component={GenerateQR} />
        <Stack.Screen name="Read QR" component={ReadQR} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
