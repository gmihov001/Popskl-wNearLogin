import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import SvgQRCode from "react-native-qrcode-svg";

function SimpleQR() {
  return <SvgQRCode value="" />;
}

export function GenerateQR() {
  const uri =
    "https://3000-4geeksacademy-flaskresth-t8qn0i28cw9.ws-us30.gitpod.io/reading";
  const [user, setUser] = React.useState("Georgi Mihov");
  const [coords, setCoords] = React.useState("12345.6789");

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
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
      </TouchableOpacity> */}
      <SvgQRCode size={180} value={`${uri}?gps=${coords}&username=${user}`} />
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
  qr: {
    width: 150,
    height: 150,
  },
});
