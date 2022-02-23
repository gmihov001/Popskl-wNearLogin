import { StyleSheet, Text, View, TouchableOpacity, LogBox } from "react-native";
import "regenerator-runtime/runtime";
import * as nearAPI from "near-api-js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "./SignIn";
import { Main } from "./Main";
import { GenerateQR } from "./GenerateQR";
import { ReadQR } from "./ReadQR";
import { initContract, login, logout } from "./initContract";
import { useEffect } from "react";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();
const { utils } = nearAPI;
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

// window.location = { ...window.location, href: "" };

export default function App() {
  // console.log("Object.keys(window): ", Object.keys(window));
  // console.log("window.localStorage: ", window.localStorage);
  // console.log("window.location: ", window.location);

  useEffect(() => {
    initContract()
      .then(async (data) => {
        console.log("initContract data: ", data);
      })
      .catch((err) => console.log("initContract error: ", err));
  }, []);

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
