import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Main } from "./Main";
import { GenerateQR } from "./GenerateQR";
import { ReadQR } from "./ReadQR";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello</Text>
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
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
