import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export function ReadQR() {
  const [hasPermission, setHasPermission] = useState(null);
  const [svanned, setScanned] = useState(false);

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
          READ QR CODE
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
