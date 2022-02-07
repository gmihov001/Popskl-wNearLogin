import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import SvgQRCode from "react-native-qrcode-svg";

function SimpleQR() {
  return <SvgQRCode value="" />;
}

export function GenerateQR() {
  const uri =
    "https://3000-4geeksacademy-flaskresth-t8qn0i28cw9.ws-us30.gitpod.io/reading";
  const [user, setUser] = React.useState("Claimant User");
  const [coords, setCoords] = React.useState("12345.6789");
  const [data, setData] = React.useState({ claimant: user, coords: coords });
  const dataJson = JSON.stringify(data);

  return (
    <View style={styles.container}>
      <SvgQRCode size={180} value={dataJson} />
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
