import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import SvgQRCode from "react-native-qrcode-svg";
import * as Location from "expo-location";

export function GenerateQR() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [user, setUser] = useState("Claimant User");
  var dataObj = null;

  const uri =
    "https://3000-4geeksacademy-flaskresth-t8qn0i28cw9.ws-us30.gitpod.io/reading";

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting...";

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    dataObj = {
      claimant: user,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
  }

  return (
    <View style={styles.container}>
      {dataObj ? (
        <SvgQRCode size={180} value={JSON.stringify(dataObj)} />
      ) : (
        "Loading..."
      )}
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
