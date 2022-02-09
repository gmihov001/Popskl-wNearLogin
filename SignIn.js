import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export function SignIn({ navigation }) {
  const [signedIn, setSignedIn] = React.useState(false);
  const [userData, setUserData] = React.useState("Georgi Mihov"); //auth fetch in a useEffect will feed this var with auth info

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          color: "white",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        POPSKL
      </Text>
      <Text
        style={{
          fontSize: 48,
          color: "white",
          fontWeight: "800",
          textAlign: "center",
        }}
      >
        WELCOME
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Main", { user: userData })}
        style={{
          backgroundColor: "white",
          borderRadius: 15,
          width: "90%",
          margin: "5%",
          padding: "5%",
          display: "flex",
          justifyContents: "center",
        }}
      >
        <Text style={{ fontSize: 20, color: "darkblue", textAlign: "center" }}>
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "royalblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
