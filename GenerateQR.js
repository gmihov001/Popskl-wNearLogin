import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";
import Main from "./Main";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => alert("Hello, world!")}
        style={{
          backgroundColor: "royalblue",
          borderRadius: "15px",
          width: "90%",
          margin: "5%",
          padding: "5%",
          display: "flex",
          justifyContents: "center",
        }}
      >
        <Text style={{ fontSize: 20, color: "#fff", textAlign: "center" }}>
          GENERATE QR CODE
        </Text>
      </TouchableOpacity>
    </View>
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
