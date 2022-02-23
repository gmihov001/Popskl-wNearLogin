import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import "regenerator-runtime/runtime";
import { initContract, login, logout } from "./initContract";
// import { showMessage } from "react-native-flash-message";
// import { ColorDotsLoader } from "react-native-indicator/index";

export function SignIn({ navigation }) {
  const [signedIn, setSignedIn] = React.useState(false);
  const [userData, setUserData] = React.useState("Georgi Mihov"); //auth fetch in a useEffect will feed this var with auth info

  useEffect(() => {
    initContract()
      .then(async () => {
        console.log("window.walletConnection: ", window.walletConnection);
        console.log("window.currentUser: ", window.currentUser);
        console.log("window.contract: ", window.contract);
      })
      .catch((err) => console.log("initContract error: ", err));
  }, []);

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
